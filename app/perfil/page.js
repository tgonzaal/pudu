'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import BrandMark from '@/components/BrandMark';
import ProfileCard from '@/components/ProfileCard';
import { useToast } from '@/components/Toast';
import { load, save, K } from '@/lib/store';
import { ROLES, BUSCA_OPTIONS, EVENT } from '@/lib/data';

const EMPTY = {
  nombre: '', organizacion: '', rol: 'Emprendedor', ofrezco: '',
  busco: [], ciudad: '', region: 'Biobío', connectable: true, premium: false, pitch: '', linkedin: '',
};

const inputCls =
  'mt-1 w-full rounded-xl border border-pudu-mist bg-white px-3.5 py-2.5 text-sm text-pudu-night outline-none transition focus:border-pudu-moss focus:ring-2 focus:ring-pudu-mist';

export default function PerfilPage() {
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const p = load(K.profile, null);
    if (p) {
      setForm({ ...EMPTY, ...p });
      setSaved(p);
    }
  }, []);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleBusco = (b) =>
    setForm((f) => ({ ...f, busco: f.busco.includes(b) ? f.busco.filter((x) => x !== b) : [...f.busco, b] }));

  const onSubmit = (e) => {
    e.preventDefault();
    save(K.profile, form);
    setSaved(form);
    toast('Perfil guardado.');
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="view-enter mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <BrandMark size={48} hex />
          <Logo big withTagline />
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-pudu-mist px-3.5 py-1.5 text-xs font-semibold text-pudu-green">
          <span className="h-1.5 w-1.5 rounded-full bg-pudu-green" /> {EVENT.name} · {EVENT.dates} · {EVENT.place}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-pudu-mist bg-white p-6 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-pudu-green">Mi perfil</h2>
          <p className="mt-1 text-sm text-pudu-night/60">Activa tu presencia en el ecosistema.</p>

          <button
            type="button"
            onClick={() => set('connectable', form.connectable === false ? true : false)}
            className={`mt-4 flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${form.connectable !== false ? 'border-pudu-green bg-pudu-mist' : 'border-pudu-mist bg-pudu-sand'}`}
          >
            <span>
              <span className="block text-sm font-semibold text-pudu-night">Quiero conectar</span>
              <span className="block text-xs text-pudu-night/55">{form.connectable !== false ? 'Apareces en el matchmaking y recibes recomendaciones en vivo.' : 'No apareces en conexiones ni recibes recomendaciones.'}</span>
            </span>
            <span className={`relative h-6 w-11 shrink-0 rounded-full transition ${form.connectable !== false ? 'bg-pudu-green' : 'bg-pudu-night/20'}`}>
              <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${form.connectable !== false ? 'translate-x-5' : ''}`} />
            </span>
          </button>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-pudu-night">Nombre completo</span>
            <input className={inputCls} value={form.nombre} onChange={(e) => set('nombre', e.target.value)} placeholder="Tu nombre" />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-pudu-night">Organización</span>
            <input className={inputCls} value={form.organizacion} onChange={(e) => set('organizacion', e.target.value)} placeholder="Empresa / institución" />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-pudu-night">Rol</span>
            <select className={inputCls} value={form.rol} onChange={(e) => set('rol', e.target.value)}>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-pudu-night">Qué ofrezco</span>
            <textarea rows={2} className={inputCls} value={form.ofrezco} onChange={(e) => set('ofrezco', e.target.value)} placeholder="Lo que puedes aportar al ecosistema" />
          </label>

          <div className="mt-4">
            <span className="text-sm font-semibold text-pudu-night">Qué busco</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {BUSCA_OPTIONS.map((b) => {
                const on = form.busco.includes(b);
                return (
                  <button
                    type="button"
                    key={b}
                    onClick={() => toggleBusco(b)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      on ? 'bg-pudu-green text-white' : 'border border-pudu-mist bg-white text-pudu-night/70 hover:border-pudu-moss'
                    }`}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-semibold text-pudu-night">Ciudad</span>
              <input className={inputCls} value={form.ciudad} onChange={(e) => set('ciudad', e.target.value)} placeholder="Concepción" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-pudu-night">Región</span>
              <input className={inputCls} value={form.region} onChange={(e) => set('region', e.target.value)} placeholder="Biobío" />
            </label>
          </div>

          {/* Toggle Premium */}
          <button
            type="button"
            onClick={() => set('premium', !form.premium)}
            className={`mt-6 flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${
              form.premium ? 'border-pudu-earth bg-pudu-earth/10' : 'border-pudu-mist bg-pudu-sand'
            }`}
          >
            <span>
              <span className="block text-sm font-semibold text-pudu-night">Activar perfil Premium</span>
              <span className="block text-xs text-pudu-night/55">
                {form.premium ? 'Visible en directorio completo con compatibilidad.' : 'Visible en matchmaking básico.'}
              </span>
            </span>
            <span className={`relative h-6 w-11 shrink-0 rounded-full transition ${form.premium ? 'bg-pudu-earth' : 'bg-pudu-night/20'}`}>
              <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${form.premium ? 'translate-x-5' : ''}`} />
            </span>
          </button>

          {form.premium && (
            <div className="mt-4 space-y-4 rounded-xl border border-pudu-earth/30 bg-pudu-earth/5 p-4">
              <label className="block">
                <span className="text-sm font-semibold text-pudu-night">Pitch de 30 segundos</span>
                <textarea rows={3} className={inputCls} value={form.pitch} onChange={(e) => set('pitch', e.target.value)} placeholder="Tu pitch en una o dos frases" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-pudu-night">LinkedIn / web</span>
                <input className={inputCls} value={form.linkedin} onChange={(e) => set('linkedin', e.target.value)} placeholder="linkedin.com/in/tu-perfil" />
              </label>
            </div>
          )}

          <button type="submit" className="mt-6 w-full rounded-xl bg-pudu-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-pudu-moss">
            Guardar perfil
          </button>
        </form>

        <div className="md:sticky md:top-20 md:self-start">
          {saved ? (
            <>
              <ProfileCard profile={saved} />
              <Link href="/matchmaking" className="mt-3 block rounded-xl bg-pudu-night px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90">
                Ver quién está en el evento para ti →
              </Link>
              <Link href="/app" className="mt-2 block rounded-xl border border-pudu-green px-4 py-3 text-center text-sm font-semibold text-pudu-green transition hover:bg-pudu-mist">
                📱 Abrir app del asistente →
              </Link>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-pudu-mist bg-white/50 p-6 text-center text-sm text-pudu-night/50">
              Tu tarjeta de perfil aparecerá aquí al guardar.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
