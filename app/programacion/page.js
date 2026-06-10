'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/components/Toast';
import SessionModal from '@/components/SessionModal';
import { load, toggleInArray, K } from '@/lib/store';
import { EVENT, DAYS, STAGES, SESSIONS, TYPE_META } from '@/lib/data';

export default function ProgramacionPage() {
  const toast = useToast();
  const [day, setDay] = useState('d1');
  const [stage, setStage] = useState('all');
  const [interests, setInterests] = useState([]);
  const [attendees, setAttendees] = useState(847);
  const [openSession, setOpenSession] = useState(null);

  useEffect(() => {
    setInterests(load(K.interests, []));
    setAttendees(847 + (load(K.profile, null) ? 1 : 0));
  }, []);

  const toggle = (id) => {
    const next = toggleInArray(K.interests, id);
    setInterests(next);
    toast(next.includes(id) ? 'Guardado en tu agenda.' : 'Quitado de tu agenda.');
  };

  const chipCls = (active) =>
    active
      ? 'shrink-0 rounded-full bg-pudu-green px-3.5 py-1.5 text-sm font-semibold text-white'
      : 'shrink-0 rounded-full border border-pudu-mist bg-white px-3.5 py-1.5 text-sm font-medium text-pudu-night/70';

  const list = SESSIONS.filter((s) => s.day === day && (stage === 'all' || s.stage === stage)).sort((a, b) => a.start.localeCompare(b.start));

  return (
    <div className="view-enter mx-auto max-w-4xl px-4 py-8">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-br from-pudu-green to-pudu-moss p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">{EVENT.edition} · Programa</p>
        <h1 className="mt-1 font-serif text-3xl font-bold">{EVENT.name}</h1>
        <p className="mt-1 text-sm text-white/80">{EVENT.dates} · {EVENT.place} · 3 escenarios</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 backdrop-blur">
          <span className="font-serif text-lg font-bold">{attendees}</span>
          <span className="text-sm text-white/85">asistentes registrados</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="sticky top-16 z-30 -mx-4 mt-4 bg-pudu-sand/95 px-4 py-3 backdrop-blur">
        <div className="flex gap-2">
          {DAYS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDay(d.id)}
              className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${day === d.id ? 'bg-pudu-green text-white' : 'border border-pudu-mist bg-white text-pudu-night/70'}`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => setStage('all')} className={chipCls(stage === 'all')}>Todos</button>
          {STAGES.map((st) => (
            <button key={st.id} onClick={() => setStage(st.id)} className={chipCls(stage === st.id)}>{st.short}</button>
          ))}
        </div>
      </div>

      {/* Lista */}
      <div className="mt-4 space-y-2">
        {list.map((s) => {
          const tm = TYPE_META[s.type] || { label: 'Charla', chip: 'bg-pudu-mist text-pudu-green' };
          const on = interests.includes(s.id);
          const stg = STAGES.find((x) => x.id === s.stage);
          return (
            <div key={s.id} className="flex items-start gap-3 rounded-2xl border border-pudu-mist bg-white p-4 transition hover:shadow-md sm:gap-4">
              <div className="w-12 shrink-0 sm:w-14">
                <div className="font-serif text-base font-bold text-pudu-green sm:text-lg">{s.start}</div>
                <div className="text-[11px] text-pudu-night/40">{s.end}</div>
              </div>
              <button onClick={() => setOpenSession(s)} className="min-w-0 flex-1 text-left">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${tm.chip}`}>{tm.label}</span>
                  {stage === 'all' && <span className="rounded-full bg-pudu-sand px-2 py-0.5 text-[11px] font-medium text-pudu-night/55">{stg.short}</span>}
                  {s.sponsor && <span className="rounded-full bg-pudu-earth/15 px-2 py-0.5 text-[11px] font-semibold text-pudu-earth">{s.sponsor}</span>}
                </div>
                <p className="mt-1 text-sm font-semibold leading-snug text-pudu-night">{s.title}</p>
                {s.sp.length > 0 && <p className="mt-0.5 truncate text-xs text-pudu-night/55">{s.sp.map((x) => x.name).join(', ')}</p>}
              </button>
              <button
                onClick={() => toggle(s.id)}
                aria-label="Me interesa"
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold transition ${on ? 'bg-pudu-green text-white' : 'border border-pudu-green text-pudu-green hover:bg-pudu-mist'}`}
              >
                {on ? '✓' : '+'}
              </button>
            </div>
          );
        })}
      </div>

      <SessionModal
        session={openSession}
        interested={openSession ? interests.includes(openSession.id) : false}
        onToggle={() => { if (openSession) toggle(openSession.id); }}
        onClose={() => setOpenSession(null)}
      />
    </div>
  );
}
