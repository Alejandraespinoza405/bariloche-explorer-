"use client"

import { useState } from "react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
<nav className="relative flex items-center justify-between bg-white px-12 py-8 text-black">
    <p className="text-3xl font-semibold text-sky-900">Bariloche Explorer</p>
    <div className="hidden md:flex items-center gap-6">
  <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Alojamientos</a>
  <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Excursiones</a>
  <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Restaurantes</a>
  <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Cafeterías</a>
  <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Chocolaterías</a>
  <span>ES / EN</span>
</div>

{menuOpen && (
<div className="absolute top-full left-0 flex w-full flex-col gap-4 bg-white p-6 shadow-md">                
    <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Alojamientos</a>
    <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Excursiones</a>
    <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Restaurantes</a>
    <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Cafeterías</a>
    <a href="#" className="text-lg font-semibold text-slate-700 transition-colors hover:text-sky-700">Chocolaterías</a>
    <span>ES / EN</span>
  </div>
  )}
<button
className="text-2xl text-black md:hidden"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? "✕" : "☰"}

    </button>
</nav>
  );
}