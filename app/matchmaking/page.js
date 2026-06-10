'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useToast } from '@/components/Toast';
import { load, addToArray, K } from '@/lib/store';
import { MATCH_PROFILES, EVENT } from '@/lib/data';

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase();
}

export default function MatchmakingPage() {
  const toast = useToast();
  const [profile, setProfile] = useState(null);
  const [connections, setConnections] = useState([]);
  const [ready, setReady] = useState(false);
  const [arrival, setArrival] = useState(false);

  useEffect(() => {
    const prof = load(K.profile, null);
    setProfile(prof);
    setConnections(load(K.connections, []));
    setReady(true);
    try {
      if (prof && prof.connectable !== false && !sessionStorage.getItem('pudu_arrival')) {
        const lm = MATCH_PROFILES.filter((p) => p.present && p.provides.some((x) => (prof.busco || []).includes(x)));
        if (lm.length) {
          setArrival(true);
          sessionStorage.setItem('pudu_arrival', '1');
        }
      }
    } catch (e) { /* sessionStorage no disponible */ }
  }, []);

  const premium = !!(profile && profile.premium);
  const connectable = !!(profile && profile.connectable !== false);
  const busco = (profile && profile.busco) || [];
  const matchedNeeds = (p) => p.provides.filter((x) => busco.includes(x));
  const compat = (p) => (matchedNeeds(p).length >= 1 ? 'Alta compatibilidad' : 'Media compatibilidad');
  const liveMatches = MATCH_PROFILES.filter((p) => p.present && matchedNeeds(p).length > 0);

  const connect = (p) => {
    setConnections(addToArray(K.connections, p.id));
    toast('Solicitud enviada. Te avisaremos cuando acepten.');
  };

  const score = (p) => (p.present && matchedNeeds(p).length ? 2 : p.present ? 1 : 0);
  const ordered = [...MATCH_PROFILES].sort((a, b) => score(b) - score(a));
  const spot = connectable ? liveMatches[0] : null;

  return (
    <div className="view-enter mx-auto max-w-4xl px-4 py-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl font-bold text-pudu-green">Conexiones para ti</h1>
          <p className="mt-1 text-sm text-pudu-night/60">Basadas en tu perfil y lo que estás buscando.</p>
        </div>
        {profile && (
          <button onClick={() => setArrival(true)} className="shrink-0 rounded-xl bg-pudu-green px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pudu-moss">
            Entrar al evento
          </button>
        )}
      </div>

      {ready && !profile && (
        <Link href="/perfil" className="mt-5 block rounded-xl border border-pudu-mist bg-pudu-mist/50 px-4 py-3 text-sm text-pudu-green">
          Crea tu <span className="font-semibold">perfil</span> para activar el matchmaking en vivo. →
        </Link>
      )}

      {ready && profile && !connectable && (
        <Link href="/perfil" className="mt-5 block rounded-xl border border-pudu-earth/30 bg-pudu-earth/10 px-4 py-3 text-sm text-pudu-night/80">
          Tienes <span className="font-semibold text-pudu-earth">“Quiero conectar”</span> desactivado: no recibes ni apareces en recomendaciones. Actívalo en tu perfil. →
        </Link>
      )}

      {/* Spotlight contextual: alguien en el evento que ofrece lo que buscas */}
      {profile && connectable && spot && (
        <div className="mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-pudu-night to-pudu-green p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Ahora en el evento · para ti
          </div>
          <div className="mt-3 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 font-bold">{initials(spot.name)}</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-bold">{spot.name}</h3>
              <p className="text-sm text-white/70">{spot.role} · {spot.org}</p>
              <p className="mt-2 text-sm text-white/90">
                <span className="font-semibold">Está en el evento</span> y ofrece{' '}
                <span className="font-semibold text-pudu-mist">{matchedNeeds(spot).join(', ')}</span> — justo lo que buscas.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => connect(spot)} disabled={connections.includes(spot.id)} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-pudu-green disabled:opacity-70">
                  {connections.includes(spot.id) ? 'Conectado ✓' : 'Conectar'}
                </button>
                {liveMatches.length > 1 && (
                  <button onClick={() => setArrival(true)} className="rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                    Ver las {liveMatches.length}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {ready && profile && connectable && !premium && (
        <Link href="/perfil" className="mt-4 block rounded-xl border border-pudu-earth/30 bg-pudu-earth/10 px-4 py-3 text-sm text-pudu-night/80">
          Activa <span className="font-semibold text-pudu-earth">Premium</span> para ver compatibilidad, pitch y agendar reuniones. →
        </Link>
      )}

      {/* Grid de perfiles */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ordered.map((p) => {
          const connected = connections.includes(p.id);
          const level = compat(p);
          return (
            <div key={p.id} className="rounded-2xl border border-pudu-mist bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-pudu-green">{p.name}</h3>
                    {p.present && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> En el evento
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-pudu-night/60">{p.role} · {p.org}</p>
                </div>
                {premium && connectable && (
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold text-white ${level === 'Alta compatibilidad' ? 'bg-pudu-green' : 'bg-pudu-earth'}`}>{level}</span>
                )}
              </div>

              <div className="mt-3 space-y-1 text-sm">
                <p><span className="font-semibold text-pudu-moss">Ofrece:</span> <span className="text-pudu-night/80">{p.offers}</span></p>
                <p><span className="font-semibold text-pudu-moss">Busca:</span> <span className="text-pudu-night/80">{p.seeks}</span></p>
              </div>

              {premium && <div className="mt-3 rounded-xl bg-pudu-mist/60 p-3 text-sm italic text-pudu-night/75">“{p.pitch}”</div>}
              {premium && <p className="mt-2 break-all text-sm text-pudu-moss">{p.linkedin}</p>}

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => connect(p)}
                  disabled={connected}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${connected ? 'cursor-default bg-pudu-mist text-pudu-green' : 'bg-pudu-green text-white hover:bg-pudu-moss'}`}
                >
                  {connected ? 'Conectado ✓' : 'Conectar'}
                </button>
                {premium && (
                  <button onClick={() => toast('Reunión solicitada. Te confirmaremos el horario.')} className="rounded-xl border border-pudu-green px-4 py-2.5 text-sm font-semibold text-pudu-green transition hover:bg-pudu-mist">
                    Agendar reunión
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de ingreso al evento */}
      {arrival && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-pudu-night/50 backdrop-blur-sm" onClick={() => setArrival(false)} />
          <div className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-pop sm:max-w-lg sm:rounded-3xl">
            <div className="sticky top-0 rounded-t-3xl bg-gradient-to-br from-pudu-night to-pudu-green px-6 py-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">Bienvenida a {EVENT.name}</p>
              <h3 className="font-serif text-2xl font-bold">Personas para ti, ahora</h3>
            </div>
            <div className="p-6">
              {!profile ? (
                <p className="text-sm text-pudu-night/70">Crea tu perfil para que detectemos quién, entre los presentes, ofrece lo que buscas.</p>
              ) : !connectable ? (
                <p className="text-sm text-pudu-night/70">Tienes <b>“Quiero conectar”</b> desactivado. Actívalo en tu perfil para ver quién está en el evento para ti.</p>
              ) : liveMatches.length === 0 ? (
                <p className="text-sm text-pudu-night/70">Aún no detectamos a alguien presente que ofrezca exactamente lo que buscas. Te avisaremos apenas llegue.</p>
              ) : (
                <>
                  <p className="mb-3 text-sm text-pudu-night/70">Detectamos <b>{liveMatches.length}</b> persona(s) en el evento que ofrecen lo que buscas:</p>
                  <div className="space-y-3">
                    {liveMatches.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 rounded-2xl border border-pudu-mist p-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pudu-mist text-xs font-bold text-pudu-green">{initials(p.name)}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-pudu-night">{p.name} <span className="font-normal text-pudu-night/50">· {p.org}</span></p>
                          <p className="text-xs text-pudu-night/55">Ofrece {matchedNeeds(p).join(', ')}</p>
                        </div>
                        <button onClick={() => connect(p)} disabled={connections.includes(p.id)} className="rounded-lg bg-pudu-green px-3 py-2 text-xs font-semibold text-white disabled:opacity-70">
                          {connections.includes(p.id) ? '✓' : 'Conectar'}
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              <button onClick={() => setArrival(false)} className="mt-5 w-full rounded-xl border border-pudu-mist px-4 py-2.5 text-sm font-semibold text-pudu-night/70 hover:bg-pudu-sand">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
