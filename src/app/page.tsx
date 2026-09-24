import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">

       <h2 className="mb-12 text-center text-5xl font-bold text-sky-500 md:text-6xl">
  ¿Qué querés descubrir?
</h2>
      <div className="mb-6">
  <CategoryCard
    name="Alojamientos"
    image="/images/alojamiento-bariloche.jpg"
     href="/alojamientos"
  />
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:[&>article]:h-64">
      <CategoryCard
  name="Excursiones"
  image="/images/sendero-bariloche.webp"
/>

<CategoryCard
  name="Restaurantes"
  image="/images/comer-bariloche.jpg"
/>

<CategoryCard
  name="Cafeterías"
  image="/images/cafe-bariloche.jpg"
/>

<CategoryCard
  name="Chocolaterías"
  image="/images/choco-bariloche.jpg"
/>
</div>
      </section>
    </>
  );
}