export default function ProfileCard({ profile }) {
  if (!profile) return null;
  const premium = profile.premium;
  const visible = profile.connectable !== false;

  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${premium ? 'border-2 border-pudu-earth' : 'border border-pudu-mist'}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-pudu-green">{profile.nombre || 'Sin nombre'}</h3>
          <p className="text-sm text-pudu-night/70">
            {profile.rol}
            {profile.organizacion ? ` · ${profile.organizacion}` : ''}
          </p>
        </div>
        {premium ? (
          <span className="shrink-0 rounded-full bg-pudu-earth px-3 py-1 text-xs font-bold text-white">★ Premium</span>
        ) : (
          <span className="shrink-0 rounded-full bg-pudu-mist px-3 py-1 text-xs font-semibold text-pudu-green">Perfil básico</span>
        )}
      </div>

      <p className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${visible ? 'text-pudu-green' : 'text-pudu-night/50'}`}>
        <span className={`h-2 w-2 rounded-full ${visible ? 'bg-emerald-500' : 'bg-pudu-night/30'}`} />
        {visible ? 'Disponible para conectar' : 'No conectando (oculto)'}
      </p>

      {(profile.ciudad || profile.region) && (
        <p className="mt-1 text-sm text-pudu-night/60">{[profile.ciudad, profile.region].filter(Boolean).join(', ')}</p>
      )}

      {profile.ofrezco && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-pudu-moss">Ofrezco</p>
          <p className="mt-1 text-sm text-pudu-night/80">{profile.ofrezco}</p>
        </div>
      )}

      {profile.busco && profile.busco.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-pudu-moss">Busco</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {profile.busco.map((b) => (
              <span key={b} className="rounded-full bg-pudu-mist px-2.5 py-1 text-xs font-medium text-pudu-green">{b}</span>
            ))}
          </div>
        </div>
      )}

      {premium && profile.pitch && (
        <div className="mt-4 rounded-xl bg-pudu-mist/60 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-pudu-earth">Pitch de 30s</p>
          <p className="mt-1 text-sm italic text-pudu-night/80">“{profile.pitch}”</p>
        </div>
      )}

      {premium && profile.linkedin && <p className="mt-3 break-all text-sm text-pudu-moss">{profile.linkedin}</p>}

      <p className="mt-4 text-xs text-pudu-night/50">
        {!visible
          ? 'Oculto del matchmaking (Quiero conectar: desactivado).'
          : premium
            ? 'Visible en directorio completo con compatibilidad.'
            : 'Visible en matchmaking básico.'}
      </p>
    </div>
  );
}
