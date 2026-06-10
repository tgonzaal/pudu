'use client';

import { useState } from 'react';
import { useToast } from '@/components/Toast';
import { ORG, standLeads } from '@/lib/data';
import { downloadCSV } from '@/lib/csv';

function Bars({ data, color = 'bg-pudu-green' }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-2.5">
      {data.map((d) => (
        <div key={d.label}>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-pudu-night/70">{d.label}</span>
            <span className="font-semibold text-pudu-night tabular-nums">{d.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-pudu-mist">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${(d.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Panel({ title, action, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-pudu-mist bg-white p-5 shadow-sm ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-2">
          {title && <h2 className="font-serif text-lg font-bold text-pudu-green">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export default function OrganizadorPage() {
  const toast = useToast();
  const [leadStand, setLeadStand] = useState(null);

  const exportAudiencia = () => {
    const rows = [];
    const add = (sec, arr) => arr.forEach((d) => rows.push({ seccion: sec, categoria: d.label, cantidad: d.value }));
    add('Tipo de audiencia', ORG.audienceRoles);
    add('Origen', ORG.audienceOrigin);
    add('Qué buscan', ORG.audienceInterests);
    add('Sector', ORG.audienceSectors);
    rows.push({ seccion: 'Conexión', categoria: 'Dispuestos a conectar', cantidad: ORG.willing.count });
    downloadCSV('audiencia-madeinnconce-2026.csv', rows);
    toast('Audiencia exportada (CSV).');
  };

  const exportStands = () => {
    downloadCSV('actividad-stands-madeinnconce-2026.csv', ORG.standActivity.map((s) => ({ stand: s.name, visitas: s.visits, brochures_descargados: s.downloads, leads: s.leads })));
    toast('Actividad de stands exportada (CSV).');
  };

  const exportLeads = (stand) => {
    const rows = standLeads(stand).map((l) => ({ nombre: l.nombre, rol: l.rol, organizacion: l.organizacion, email: l.email }));
    downloadCSV(`leads-${stand.name.replace(/\s+/g, '-').toLowerCase()}.csv`, rows);
    toast(`Leads de ${stand.name} exportados.`);
  };

  const dlBtn =
    'inline-flex items-center gap-1.5 rounded-lg border border-pudu-green px-3 py-1.5 text-xs font-semibold text-pudu-green transition hover:bg-pudu-mist';

  return (
    <div className="view-enter mx-auto max-w-5xl px-4 py-8">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-3xl font-bold text-pudu-green">Panel MadeInnConce 2026</h1>
        <span className="rounded-full bg-pudu-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Organizador</span>
      </div>
      <p className="mt-1 text-sm text-pudu-night/60">Inteligencia del evento, basada en interacciones reales (escaneos, descargas, conexiones).</p>

      {/* KPIs */}
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {ORG.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-pudu-mist bg-white p-4 shadow-sm">
            <p className="text-sm text-pudu-night/55">{m.label}</p>
            <p className="mt-1 font-serif text-3xl font-bold text-pudu-green">{m.value}</p>
            {m.delta && <p className="mt-0.5 text-xs font-semibold text-pudu-moss">{m.delta}</p>}
          </div>
        ))}
      </div>

      {/* AUDIENCIA */}
      <div className="mt-8 flex items-center justify-between gap-2">
        <h2 className="font-serif text-xl font-bold text-pudu-night">Audiencia</h2>
        <button onClick={exportAudiencia} className={dlBtn}>⬇ Descargar audiencia (CSV)</button>
      </div>
      <div className="mt-3 rounded-2xl bg-gradient-to-br from-pudu-green to-pudu-moss p-5 text-white">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-pudu-mist/80">Dispuestos a conectar</p>
            <p className="font-serif text-4xl font-bold">{ORG.willing.pct}%</p>
            <p className="text-sm text-white/80">{ORG.willing.count} de {ORG.willing.total} activaron “Quiero conectar”</p>
          </div>
          <div className="hidden h-16 w-16 shrink-0 place-items-center rounded-full bg-white/15 sm:grid">
            <span className="font-serif text-xl font-bold">{ORG.willing.pct}%</span>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full rounded-full bg-white" style={{ width: `${ORG.willing.pct}%` }} />
        </div>
      </div>
      <div className="mt-3 grid gap-4 lg:grid-cols-2">
        <Panel title="Tipo de audiencia"><Bars data={ORG.audienceRoles} color="bg-pudu-green" /></Panel>
        <Panel title="De dónde vienen"><Bars data={ORG.audienceOrigin} color="bg-pudu-earth" /></Panel>
        <Panel title="Qué buscan"><Bars data={ORG.audienceInterests} color="bg-pudu-moss" /></Panel>
        <Panel title="Sector"><Bars data={ORG.audienceSectors} color="bg-pudu-night" /></Panel>
      </div>

      {/* STANDS */}
      <div className="mt-8 flex items-center justify-between gap-2">
        <h2 className="font-serif text-xl font-bold text-pudu-night">Actividad en stands</h2>
        <button onClick={exportStands} className={dlBtn}>⬇ Descargar todo (CSV)</button>
      </div>
      <Panel className="mt-3">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-pudu-mist text-left text-xs uppercase tracking-wide text-pudu-night/45">
                <th className="py-2 pr-2 font-semibold">Stand</th>
                <th className="py-2 px-2 text-right font-semibold">Visitas</th>
                <th className="py-2 px-2 text-right font-semibold">Brochures</th>
                <th className="py-2 px-2 text-right font-semibold">Leads</th>
                <th className="py-2 pl-2 text-right font-semibold">Descargas</th>
              </tr>
            </thead>
            <tbody>
              {ORG.standActivity.map((s, i) => (
                <tr key={s.name} className="border-b border-pudu-mist/60 last:border-0">
                  <td className="py-2.5 pr-2 font-medium text-pudu-night">{s.name}</td>
                  <td className="py-2.5 px-2 text-right tabular-nums text-pudu-night/70">{s.visits}</td>
                  <td className="py-2.5 px-2 text-right tabular-nums text-pudu-night/70">{s.downloads}</td>
                  <td className="py-2.5 px-2 text-right font-semibold tabular-nums text-pudu-green">{s.leads}</td>
                  <td className="py-2.5 pl-2 text-right">
                    <button onClick={() => setLeadStand({ name: s.name, id: i + 1, leads: s.leads })} className="rounded-lg bg-pudu-mist px-2.5 py-1 text-xs font-semibold text-pudu-green hover:bg-pudu-green hover:text-white">
                      Ver leads
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-pudu-night/45">“Ver leads” muestra quiénes descargaron el brochure de cada stand, listo para descargar y enviar al encargado.</p>
      </Panel>

      {/* FLUJO + CONEXIONES */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel title="Aforo por escenario">
          <p className="-mt-2 mb-4 text-xs text-pudu-night/45">Según registros de entrada/salida por QR.</p>
          <div className="space-y-4">
            {ORG.scenarioFlow.map((f) => (
              <div key={f.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-pudu-night">{f.name}</span>
                  <span className="font-semibold text-pudu-night/70">{f.pct}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-pudu-mist">
                  <div className={`h-full rounded-full ${f.barClass}`} style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Últimas conexiones">
          <ul className="space-y-2">
            {ORG.recentConnections.map((c, i) => (
              <li key={i} className="text-sm text-pudu-night/75">
                <span className="font-semibold text-pudu-night">{c.a}</span> <span className="text-pudu-night/55">de {c.aOrg}</span> conectó con{' '}
                <span className="font-semibold text-pudu-night">{c.b}</span> <span className="text-pudu-night/55">de {c.bOrg}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {/* ALERTAS */}
      <div className="mt-4 space-y-2">
        {ORG.alerts.map((a, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-pudu-earth/30 bg-pudu-earth/10 px-4 py-3">
            <span className="mt-0.5 text-pudu-earth">●</span>
            <p className="text-sm font-medium text-pudu-night/80">{a}</p>
          </div>
        ))}
      </div>

      {/* MODAL LEADS */}
      {leadStand && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
          <div className="absolute inset-0 bg-pudu-night/50 backdrop-blur-sm" onClick={() => setLeadStand(null)} />
          <div className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-pop sm:max-w-lg sm:rounded-3xl">
            <div className="sticky top-0 rounded-t-3xl bg-pudu-green px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Descargas de brochure</p>
                  <h3 className="font-serif text-2xl font-bold">{leadStand.name}</h3>
                </div>
                <button onClick={() => setLeadStand(null)} aria-label="Cerrar" className="rounded-full p-1.5 text-lg leading-none hover:bg-white/15">✕</button>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-3 text-sm text-pudu-night/60">{leadStand.leads} personas descargaron el brochure. Lista lista para enviar al encargado.</p>
              <div className="space-y-2">
                {standLeads(leadStand).map((l, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-pudu-mist p-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-pudu-night">{l.nombre}</p>
                      <p className="text-xs text-pudu-night/55">{l.rol} · {l.organizacion}</p>
                    </div>
                    <span className="truncate text-xs text-pudu-moss">{l.email}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button onClick={() => exportLeads(leadStand)} className="flex-1 rounded-xl bg-pudu-green px-4 py-3 text-sm font-semibold text-white transition hover:bg-pudu-moss">⬇ Descargar CSV</button>
                <button onClick={() => { toast(`Enviado al encargado de ${leadStand.name}.`); setLeadStand(null); }} className="flex-1 rounded-xl border border-pudu-green px-4 py-3 text-sm font-semibold text-pudu-green transition hover:bg-pudu-mist">✉ Enviar al encargado</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
