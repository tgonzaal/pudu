// Marca Pudú: pudú (ciervo) estilizado. hex=true dibuja el hexágono verde de fondo.
export default function BrandMark({ size = 34, hex = false, className = '' }) {
  const G = '#1b5e3b';
  return (
    <svg width={size} height={Math.round(size * 1.1)} viewBox="0 0 100 110" className={className} aria-hidden="true">
      {hex && <polygon points="100,55 75,98.3 25,98.3 0,55 25,11.7 75,11.7" fill={G} />}
      <g fill="#ffffff">
        <path d="M37 44 C27 40 17 28 21 17 C33 19 41 31 41 45 Z" />
        <path d="M63 44 C73 40 83 28 79 17 C67 19 59 31 59 45 Z" />
        <path d="M44 41 C44 26 44 20 46.5 20 C49 20 49 26 49 41 Z" />
        <path d="M51 41 C51 26 51 20 53.5 20 C56 20 56 26 56 41 Z" />
        <path d="M50 36 C39 36 33 45 33 57 C33 70 39 81 50 87 C61 81 67 70 67 57 C67 45 61 36 50 36 Z" />
      </g>
      <g fill={G}>
        <polygon points="43.5,53.5 47.4,55.75 47.4,60.25 43.5,62.5 39.6,60.25 39.6,55.75" />
        <polygon points="56.5,53.5 60.4,55.75 60.4,60.25 56.5,62.5 52.6,60.25 52.6,55.75" />
        <polygon points="50,75 53.46,77 53.46,81 50,83 46.54,81 46.54,77" />
      </g>
    </svg>
  );
}
