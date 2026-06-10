export default function Logo({ onDark = false, big = false, withTagline = false }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`font-serif font-bold ${big ? 'text-4xl' : 'text-2xl'} ${onDark ? 'text-white' : 'text-pudu-green'}`}>
        Pudú
      </span>
      {withTagline && (
        <span className={`mt-1 text-sm italic ${onDark ? 'text-pudu-mist/80' : 'text-pudu-moss'}`}>
          El ecosistema en movimiento
        </span>
      )}
    </span>
  );
}
