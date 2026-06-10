'use client';

import { useToast } from './Toast';

export default function StandModal({ stand, count, hasProfile, onClose }) {
  const toast = useToast();
  if (!stand) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-pudu-night/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-pop sm:max-w-lg sm:rounded-3xl">
        <div className={`${stand.accentClass} sticky top-0 rounded-t-3xl px-6 py-5 text-white`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{stand.category}</p>
              <h3 className="font-serif text-2xl font-bold">{stand.name}</h3>
            </div>
            <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-1.5 text-lg leading-none hover:bg-white/15">✕</button>
          </div>
        </div>

        <div className="p-6">
          {stand.long.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-pudu-night/75">{p}</p>
          ))}

          {hasProfile && (
            <div className="mb-4 mt-2 rounded-xl bg-pudu-mist px-4 py-3 text-sm font-medium text-pudu-green">
              ✓ Este stand fue notificado de tu visita.
            </div>
          )}

          <p className="mb-4 text-xs text-pudu-night/50">{count ?? stand.visitors} personas visitaron este stand</p>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => toast('Contacto guardado en tu agenda.')}
              className="flex-1 rounded-xl bg-pudu-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-pudu-moss"
            >
              Guardar contacto
            </button>
            <button
              onClick={() => toast('Descargando brochure…')}
              className="flex-1 rounded-xl border border-pudu-green px-4 py-3 text-sm font-semibold text-pudu-green transition hover:bg-pudu-mist"
            >
              Descargar brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
