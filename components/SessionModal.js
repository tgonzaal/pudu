'use client';

import { TYPE_META, stageById, DAYS } from '@/lib/data';

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase();
}

export default function SessionModal({ session, interested, onToggle, onClose }) {
  if (!session) return null;
  const tm = TYPE_META[session.type] || { label: 'Charla', chip: 'bg-pudu-mist text-pudu-green' };
  const stg = stageById(session.stage);
  const day = DAYS.find((d) => d.id === session.day);

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-pudu-night/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-pop sm:max-w-lg sm:rounded-3xl">
        <div className={`${stg.headerClass} sticky top-0 rounded-t-3xl px-6 py-5 text-white`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{stg.name} · {day && day.label}</p>
              <h3 className="font-serif text-2xl font-bold leading-tight">{session.title}</h3>
            </div>
            <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-1.5 text-lg leading-none hover:bg-white/15">✕</button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tm.chip}`}>{tm.label}</span>
            <span className="rounded-full bg-pudu-sand px-2.5 py-1 text-xs font-medium text-pudu-night/70">{session.start}–{session.end}</span>
            {session.sponsor && <span className="rounded-full bg-pudu-earth/15 px-2.5 py-1 text-xs font-semibold text-pudu-earth">{session.sponsor}</span>}
          </div>

          {session.desc && <p className="mt-4 text-sm leading-relaxed text-pudu-night/75">{session.desc}</p>}

          {session.sp && session.sp.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-pudu-moss">{session.sp.length > 1 ? 'Participan' : 'Speaker'}</p>
              <div className="mt-2 space-y-2.5">
                {session.sp.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pudu-mist text-xs font-bold text-pudu-green">{initials(s.name)}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-pudu-night">{s.name}</p>
                      {s.role && <p className="text-xs text-pudu-night/55">{s.role}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {session.mod && <p className="mt-3 text-sm text-pudu-night/60"><span className="font-semibold">Modera:</span> {session.mod}</p>}

          <button
            onClick={onToggle}
            className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${interested ? 'bg-pudu-mist text-pudu-green' : 'bg-pudu-green text-white hover:bg-pudu-moss'}`}
          >
            {interested ? 'Guardado en tu agenda ✓' : 'Me interesa'}
          </button>
        </div>
      </div>
    </div>
  );
}
