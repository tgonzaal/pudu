'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BrandMark from './BrandMark';

const LINKS = [
  { href: '/perfil', label: 'Mi Perfil' },
  { href: '/programacion', label: 'Programación' },
  { href: '/matchmaking', label: 'Matchmaking' },
  { href: '/stands', label: 'Stands' },
  { href: '/organizador', label: 'Organizador' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-pudu-green text-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/perfil" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <BrandMark size={30} />
          <span className="font-serif text-2xl font-bold text-white">Pudú</span>
          <span className="hidden text-[11px] italic text-pudu-mist/70 sm:inline">El ecosistema en movimiento</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${active(l.href) ? 'bg-white/20 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/app"
            className={`ml-1 rounded-lg px-3 py-2 text-sm font-bold transition ${active('/app') ? 'bg-white text-pudu-green' : 'bg-white/15 text-white hover:bg-white/25'}`}
          >
            📱 App
          </Link>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="-mr-2 p-2 text-white md:hidden" aria-label="Abrir menú">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-white/10 bg-pudu-green px-3 py-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${active(l.href) ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/app" onClick={() => setOpen(false)} className="mt-1 block rounded-lg bg-white px-3 py-2.5 text-sm font-bold text-pudu-green">
            📱 Abrir app del asistente
          </Link>
        </nav>
      )}
    </header>
  );
}
