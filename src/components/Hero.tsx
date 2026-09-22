export function Hero() {
  return (
    <section>
      <div className="relative h-[70vh] w-full">
  <img
    src="/images/barilo.jpg"
    alt="Paisaje de Bariloche"
    className="h-full w-full object-cover object-[center_25%]"
  />

   <div className="absolute inset-0 bg-black/20" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
  <h1 className="text-3xl font-bold md:text-6xl">
    Descubrí Bariloche a tu manera
  </h1>

  <p className="mt-4 max-w-2xl px-6 text-lg md:px-0 md:text-xl">
    Todo lo que podés hacer, conocer y disfrutar en Bariloche, en un solo lugar.
  </p>
</div>
</div>
    </section>
  );
}