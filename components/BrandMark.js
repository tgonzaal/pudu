// Marca Pudú: pudú (ciervo) estilizado. hex=true dibuja el hexágono verde de fondo.
export default function BrandMark(props) {
  const size = props.size || 34;
  return (
    <img
      src="/logo.svg"
      alt="Pudu"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={"rounded-lg bg-white p-0.5 " + (props.className || "")}
    />
  );
}
