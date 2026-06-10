'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/components/Toast';
import StandModal from '@/components/StandModal';
import { load, save, addToArray, K } from '@/lib/store';
import { STANDS, STAGES, MATCH_PROFILES, EVENT } from '@/lib/data';

const STAGE_KEY = 'pudu_stage';
const STAGE_LOG = 'pudu_stage_log';

export default function AppPage() {
  const toast = useToast();
  const [profile, setProfile] = useState(null);
  const [connections, setConnections] = useState([]);
  const [visits, setVisits] = useState([]);
  const [openStand, setOpenStand] = useState(null);
  const [ready, setReady] = useState(false);
  const [currentStage, setCurrentStage] = useState('');
  const [stageLog, setStageLog] = useState([]);
  const [stageModal, setStageModal] = useState(false);

  useEffect(() => {
    setProfile(load(K.profile, null));
    setConnections(load(K.connections, []));
    setVisits(load(K.visits, []));
    setCurrentStage(load(STAGE_KEY, ''));
    setStageLog(load(STAGE_LOG, []));
    setReady(true);
  }, []);

  const connectable = !profile || profile.connectable !== false;
  const busco = (profile && profile.busco) || [];
  const liveMatches = MATCH_PROFILES.filter((p) => p.present && p.provides.some((x) => busco.includes(x)));
  const spot = connectable ? liveMatches[0] : null;

  const scan = () => {
    const s = STANDS[Math.floor(Math.random() * STANDS.length)];
    setOpenStand(s);
    setVisits(addToArray(K.visits, s.id));
  };
  const connect = (p) => {
    setConnections(addToArray(K.connections, p.id));
    toast('Solicitud enviada. Te avisaremos cuando acepten.');
  };
  const countFor = (s) => s.visitors + (visits.includes(s.id) ? 1 : 0);

  const now = () => new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
  const registerStage = (st) => {
    const t = now();
    const entries = [];
    if (currentStage === st.id) {
      entries.push({ stage: st.name, action: 'Salida', time: t });
      setCurrentStage('');
      save(STAGE_KEY, '');
      toast('Salida registrada · ' + st.name);
    } else {
      if (currentStage) {
        const prev = STAGES.find((s) => s.id === currentStage);
        if (prev) entries.push({ stage: prev.name, action: 'Salida', time: t });
      }
      entries.push({ stage: st.name, action: 'Entrada', time: t });
      setCurrentStage(st.id);
      save(STAGE_KEY, st.id);
      toast('Entrada registrada · ' + st.name);
    }
    const next = [...entries.reverse(), ...stageLog].slice(0, 8);
    setStageLog(next);
    save(STAGE_LOG, next);
    setStageModal(false);
  };

  const currentStageObj = STAGES.find((s) => s.id === currentStage);
  const firstName = profile && profile.nombre ? ', ' + profile.nombre.split(' ')[0] : '';

  const tiles = [
    { icon: '📅', label: 'Programa', href: '/programacion', sub: '3 escenarios' },
    { icon: '🏛', label: 'Stands', href: '/stands', sub: '8 stands' },
    { icon: '🤝', label: 'Conexiones', href: '/matchmaking', sub: connections.length ? connections.length + ' activas' : 'Descubre' },
    { icon: '🦌', label: 'Mi perfil', href: '/perfil', sub: profile ? 'Editar' : 'Crear' },
  ];

  return (
    <div className="view-enter mx-auto max-w-md px-4 py-6">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-pudu-green to-pudu-moss p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">App del asistente</p>
        <h1 className="font-serif text-2xl font-bold">Hola{firstName} 👋</h1>
        <p className="mt-0.5 text-sm text-white/80">{EVENT.name} · {EVENT.place}</p>
      </div>

      {ready && !profile && (
        <Link href="/perfil" className="mt-4 block rounded-2xl border border-pudu-mist bg-white p-4 text-sm font-medium text-pudu-green">
          Crea tu perfil para activar tu experiencia →
        </Link>
      )}

      {/* Recomendación contextual */}
      {profile && spot && (
        <div className="mt-4 rounded-2xl bg-pudu-night p-4 text-white">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-pudu-mist/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Ahora en el evento
          </div>
          <p className="mt-1.5 text-sm">
            <b>{spot.name}</b> ({spot.org}) ofrece <b className="text-pudu-mist">{spot.provides.filter((x) => busco.includes(x)).join(', ')}</b> — justo lo que buscas.
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => connect(spot)} disabled={connections.includes(spot.id)} className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-pudu-green disabled:opacity-70">
              {connections.includes(spot.id) ? 'Conectado ✓' : 'Conectar'}
            </button>
            <Link href="/matchmaking" className="rounded-lg bg-white/15 px-3 py-1.5 text-sm font-semibold text-white">Ver más</Link>
          </div>
        </div>
      )}
      {profile && !connectable && (
        <Link href="/perfil" className="mt-4 block rounded-2xl border border-pudu-earth/30 bg-pudu-earth/10 p-3 text-sm text-pudu-night/80">
          Tienes <b>“Quiero conectar”</b> desactivado. Actívalo para recibir recomendaciones. →
        </Link>
      )}

      {/* Registro de escenario (QR entrada/salida) */}
      <div className="mt-4 rounded-2xl border border-pudu-mist bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-base font-bold text-pudu-green">Registro de escenario</h2>
          {currentStageObj && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> En {currentStageObj.short}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-pudu-night/55">Escanea el QR al entrar y salir de cada escenario.</p>
        <button onClick={() => setStageModal(true)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-pudu-night py-3 text-sm font-semibold text-white">
          <span>📷</span> Escanear QR de escenario
        </button>
        {stageLog.length > 0 && (
          <ul className="mt-3 space-y-1">
            {stageLog.slice(0, 3).map((e, i) => (
              <li key={i} className="flex items-center justify-between text-xs">
                <span className={`font-semibold ${e.action === 'Entrada' ? 'text-pudu-green' : 'text-pudu-night/50'}`}>{e.action === 'Entrada' ? '→ Entrada' : '← Salida'}</span>
                <span className="text-pudu-night/60">{e.stage}</span>
                <span className="text-pudu-night/40">{e.time}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Escaneo de stand */}
      <button onClick={scan} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-pudu-green py-4 text-base font-semibold text-white transition hover:bg-pudu-moss">
        <span className="text-xl">📷</span> Simular escaneo de stand
      </button>

      {/* Accesos rápidos */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {tiles.map((t) => (
          <Link key={t.label} href={t.href} className="flex flex-col items-start rounded-2xl border border-pudu-mist bg-white p-4 transition hover:shadow-md">
            <span className="text-2xl">{t.icon}</span>
            <span className="mt-2 text-sm font-semibold text-pudu-night">{t.label}</span>
            {t.sub && <span className="text-xs text-pudu-night/50">{t.sub}</span>}
          </Link>
        ))}
      </div>

      <StandModal stand={openStand} count={openStand ? countFor(openStand) : 0} hasProfile={!!profile} onClose={() => setOpenStand(null)} />

      {/* Modal QR escenario */}
      {stageModal && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-pudu-night/50 backdrop-blur-sm" onClick={() => setStageModal(false)} />
          <div className="relative w-full rounded-t-3xl bg-white shadow-2xl animate-pop sm:max-w-sm sm:rounded-3xl">
            <div className="rounded-t-3xl bg-pudu-night px-6 py-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">Escanea el QR del escenario</p>
              <h3 className="font-serif text-xl font-bold">Entrada / salida</h3>
            </div>
            <div className="space-y-2 p-5">
              {STAGES.map((st) => {
                const inside = currentStage === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => registerStage(st)}
                    className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${inside ? 'border-pudu-night bg-pudu-night/5' : 'border-pudu-mist hover:border-pudu-green'}`}
                  >
                    <span>
                      <span className="block text-sm font-semibold text-pudu-night">{st.name}</span>
                      <span className="block text-xs text-pudu-night/50">{inside ? 'Estás dentro' : 'Toca para registrar entrada'}</span>
                    </span>
                    <span className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold ${inside ? 'bg-pudu-night text-white' : 'bg-pudu-green text-white'}`}>
                      {inside ? 'Registrar salida' : 'Registrar entrada'}
                    </span>
                  </button>
                );
              })}
              <button onClick={() => setStageModal(false)} className="mt-1 w-full rounded-xl border border-pudu-mist px-4 py-2.5 text-sm font-semibold text-pudu-night/70 hover:bg-pudu-sand">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
