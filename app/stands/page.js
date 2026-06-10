'use client';

import { useEffect, useState } from 'react';
import StandModal from '@/components/StandModal';
import { load, addToArray, K } from '@/lib/store';
import { STANDS } from '@/lib/data';

export default function StandsPage() {
  const [open, setOpen] = useState(null);
  const [visits, setVisits] = useState([]);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    setVisits(load(K.visits, []));
    setHasProfile(!!load(K.profile, null));
  }, []);

  const openStand = (s) => {
    setOpen(s);
    setVisits(addToArray(K.visits, s.id));
  };
  const countFor = (s) => s.visitors + (visits.includes(s.id) ? 1 : 0);

  return (
    <div className="view-enter mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-pudu-green">Stands del evento</h1>
      <p className="mt-1 text-sm text-pudu-night/60">Encuentra el stand y simula el escaneo de su QR.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {STANDS.map((s) => (
          <button
            key={s.id}
            onClick={() => openStand(s)}
            className="overflow-hidden rounded-2xl border border-pudu-mist bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`${s.accentClass} h-2`} />
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold text-pudu-green">{s.name}</h3>
              <span className="mt-1 inline-block rounded-full bg-pudu-mist px-2.5 py-0.5 text-xs font-semibold text-pudu-green">
                {s.category}
              </span>
              <p className="mt-3 text-sm text-pudu-night/70">{s.short}</p>
              <p className="mt-3 text-xs font-semibold text-pudu-moss">📷 Escanear QR →</p>
            </div>
          </button>
        ))}
      </div>

      <StandModal
        stand={open}
        count={open ? countFor(open) : 0}
        hasProfile={hasProfile}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}
