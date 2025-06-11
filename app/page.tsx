export default function HomePage() {
  let random = Math.random()
  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
      <p>Nomero Aleatorio: {random}</p>
    </div>
  );
}
