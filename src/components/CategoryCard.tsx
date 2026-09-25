
import Link from "next/link";

type CategoryCardProps = {
  name: string;
  image: string;
  href?: string;
};

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  const card = (
    <article className="relative h-80 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 my-hover:scale-110"
      />

      <h2 className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold text-white md:text-5xl">
        {name}
      </h2>
    </article>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}