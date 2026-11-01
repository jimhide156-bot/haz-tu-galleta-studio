import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingCart, Search, ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import box from "@/assets/box.jpg";
import nutella from "@/assets/nutella.jpg";
import oreo from "@/assets/oreo.jpg";
import kinder from "@/assets/kinder.jpg";
import tradicional from "@/assets/tradicional.jpg";
import chocolate from "@/assets/chocolate.jpg";
import redvelvet from "@/assets/redvelvet.jpg";
import nuez from "@/assets/nuez.jpg";
import brownie from "@/assets/brownie.jpg";
import chispas from "@/assets/chispas.jpg";
import nutellafill from "@/assets/nutellafill.jpg";
import blanco from "@/assets/blanco.jpg";
import oreofill from "@/assets/oreofill.jpg";
import { getCookiePreview } from "@/lib/cookie-preview";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookie Bites — Galletas rellenas personalizadas" },
      { name: "description", content: "Galletas rellenas de Nutella, Oreo y Kinder Bueno. Arma tu caja de seis o haz tu propia galleta." },
      { property: "og:title", content: "Cookie Bites — Galletas rellenas" },
      { property: "og:description", content: "Galletas rellenas que hacen la vida más dulce." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const flavors = [
  { name: "Nutella", img: nutella },
  { name: "Oreo", img: oreo },
  { name: "Kinder Bueno", img: kinder },
];

const steps = [
  { key: "Masa", items: [{ n: "Tradicional", i: tradicional }, { n: "Chocolate", i: chocolate }, { n: "Red Velvet", i: redvelvet }] },
  { key: "Toppings", items: [{ n: "Nuez", i: nuez }, { n: "Brownie", i: brownie }, { n: "Chispas", i: chispas }] },
  { key: "Relleno", items: [{ n: "Nutella", i: nutellafill }, { n: "Chocolate Blanco", i: blanco }, { n: "Oreo", i: oreofill }] },
];

function Index() {
  const [cart, setCart] = useState(0);
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<Record<string, string>>({});
  const cur = steps[step] ?? { key: "Masa", items: [] };
  const preview = getCookiePreview(choice);
  const add = (n = 1) => setCart((c) => c + n);

  return (
    <div className="min-h-screen font-sans text-foreground">
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-display text-3xl font-bold text-primary">Cookie Bites</a>
          <nav className="hidden gap-8 text-sm text-primary md:flex">
            <a href="#inicio" className="border-b-2 border-primary font-semibold">Inicio</a>
            <a href="#pedidos">Mis pedidos</a>
            <a href="#caja">Caja de seis</a>
            <a href="#haz">Haz tu propia galleta</a>
          </nav>
          <div className="flex items-center gap-5 text-primary">
            <Search className="h-5 w-5" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{cart}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="font-display text-7xl font-bold leading-[0.9] text-primary md:text-8xl">Cookie<br />Bites</h1>
          <p className="mt-6 text-xl text-foreground">Galletas rellenas que<br />hacen la vida más dulce.</p>
          <a href="#pedidos" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition hover:scale-105">
            Haz tu pedido <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-pink-deep/60" />
          <img src={hero} alt="Galletas rellenas apiladas" width={1024} height={1024} className="relative rounded-[2rem] shadow-2xl" />
          <p className="absolute -right-2 top-4 rotate-[-8deg] font-hand text-2xl leading-6 text-primary">Nutella<br />Oreo<br />Kinder Bueno ♡</p>
        </div>
      </section>

      {/* Mis pedidos */}
      <section id="pedidos" className="bg-pink-soft py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_3fr]">
          <div>
            <p className="text-xs font-bold tracking-widest text-primary">NUESTROS SABORES</p>
            <h2 className="mt-2 font-display text-5xl font-bold text-primary">Mis pedidos</h2>
            <p className="mt-4 text-sm text-muted-foreground">Elige tu sabor favorito y agrégalo al carrito. Cada galleta cuesta <b className="text-primary">$25 MXN</b> y se vende de manera individual.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {flavors.map((f) => (
              <div key={f.name} className="relative rounded-3xl bg-secondary p-6 text-center">
                <span className="absolute right-5 top-3 rotate-[-8deg] font-hand text-xl text-primary">{f.name}</span>
                <img src={f.img} alt={f.name} loading="lazy" className="mx-auto mt-6 h-32 w-full rounded-2xl object-cover mix-blend-multiply" />
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{f.name}</h3>
                <p className="text-muted-foreground">$25 MXN</p>
                <button onClick={() => add()} className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105">
                  <ShoppingCart className="h-4 w-4" /> Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caja */}
      <section id="caja" className="bg-pink-deep py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_1.3fr_0.6fr]">
          <div className="text-primary-foreground">
            <p className="text-xs font-bold tracking-widest">COMBINA TUS FAVORITOS</p>
            <h2 className="mt-2 font-display text-5xl font-bold leading-tight">Arma tu caja de seis galletas</h2>
            <p className="mt-4">Elige 6 sabores y crea la combinación perfecta para ti.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-pink-soft px-6 py-2 text-center text-primary">
                <p className="font-display text-xl font-bold">$150 MXN</p>
                <p className="text-xs">(6 galletas)</p>
              </div>
              <button onClick={() => add(6)} className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-pink-soft px-5 py-3 font-semibold text-primary transition hover:scale-105">
                Armar mi caja <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <img src={box} alt="Caja de seis galletas" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-2xl" />
          <div className="rounded-3xl border border-pink-soft/60 bg-pink-soft/30 p-5 text-primary-foreground backdrop-blur">
            <p className="mb-4 text-sm">Sabores disponibles:</p>
            {flavors.map((f) => (
              <div key={f.name} className="mb-3 flex items-center gap-3">
                <img src={f.img} alt="" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-sm font-semibold">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haz tu galleta */}
      <section id="haz" className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm tracking-[0.3em] text-primary">— PERSONALIZA TU GALLETA —</p>
          <h2 className="mt-3 inline-flex items-center gap-3 font-display text-5xl font-bold text-primary md:text-6xl">
            Haz tu propia galleta <Heart className="h-10 w-10" />
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {steps.map((s, i) => (
              <Button key={s.key} onClick={() => setStep(i)} aria-pressed={step === i}
                className={`h-auto rounded-full px-10 py-3 font-display text-xl transition ${step === i ? "bg-primary text-primary-foreground" : "bg-pink-soft/70 text-primary"}`}>
                {s.key}
              </Button>
            ))}
          </div>

          <div className="relative mt-10">
            <Button onClick={() => setStep((step + 2) % 3)} aria-label="Anterior" size="icon" className="absolute left-0 top-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-primary/80 text-primary-foreground"><ChevronLeft /></Button>
            <Button onClick={() => setStep((step + 1) % 3)} aria-label="Siguiente" size="icon" className="absolute right-0 top-1/2 z-10 grid h-12 w-12 place-items-center rounded-full bg-primary/80 text-primary-foreground"><ChevronRight /></Button>
            <div className="flex justify-center gap-5 px-14">
              {cur.items.map((it, j) => {
                const sel = choice[cur.key] === it.n;
                return (
                  <Button key={it.n} variant="ghost" aria-label={it.n} aria-pressed={sel} onClick={() => setChoice((previous) => ({ ...previous, [cur.key]: it.n }))}
                    style={{ transform: `rotate(${(j - 1) * 8}deg)` }}
                    className={`block h-auto w-36 whitespace-normal rounded-3xl bg-pink-soft p-4 shadow-md transition hover:-translate-y-1 ${sel ? "ring-4 ring-primary" : ""}`}>
                    <img src={it.i} alt={it.n} className="mx-auto h-24 w-full rounded-xl object-cover mix-blend-multiply" />
                    <p className="mt-2 font-display font-semibold text-primary">{it.n}</p>
                  </Button>
                );
              })}
            </div>
            <img src={preview.src} alt={preview.alt} loading="lazy" width={768} height={768} className="mx-auto mt-8 aspect-square w-full max-w-md rounded-[3rem] object-cover mix-blend-multiply" />
            <div className="mt-6 flex justify-center gap-3">
              {steps.map((s, i) => <span key={s.key} className={`h-3 w-3 rounded-full ${step === i ? "bg-primary" : "bg-pink-deep"}`} />)}
            </div>
            <p className="mt-6 text-muted-foreground">
              {steps.map((s) => `${s.key}: ${choice[s.key] ?? "—"}`).join("  ·  ")}
            </p>
            <Button disabled={steps.some((s) => !choice[s.key])} onClick={() => { add(); setChoice({}); setStep(0); }}
              className="mt-4 inline-flex h-auto items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105 disabled:opacity-40">
              <ShoppingCart className="h-5 w-5" /> Agregar mi galleta
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-6 text-center text-sm text-primary-foreground">© Cookie Bites · Hecho con ♡</footer>
    </div>
  );
}
