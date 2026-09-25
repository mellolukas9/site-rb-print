"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroBanner, heroSlides } from "./hero-banners";

const AUTOPLAY_MS = 6500;

/**
 * Carrossel da home (padrão observado na referência: autoplay + setas + indicadores).
 * Acessibilidade: botão de pausa, pausa em hover/foco, sem autoplay com prefers-reduced-motion,
 * slides inativos ficam `inert`.
 */
export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const total = heroSlides.length;

  const go = useCallback((next: number) => setIndex((next + total) % total), [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const autoplay = playing && !interacting && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, index, go]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Destaques"
      className="mx-auto w-full max-w-7xl px-0 sm:px-6 sm:pt-6"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);
      }}
    >
      <div
        className="relative overflow-hidden bg-tinta sm:rounded-3xl"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") pointerStart.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (pointerStart.current === null) return;
          const dx = e.clientX - pointerStart.current;
          pointerStart.current = null;
          if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-(--ease-out) motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}: ${slide.title}`}
              inert={i !== index}
              className="w-full shrink-0 md:h-[28rem] lg:h-[30rem]"
            >
              <HeroBanner slide={slide} index={i} />
            </div>
          ))}
        </div>

        {/* Controles */}
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-4 sm:justify-between pb-4 sm:px-10 lg:px-16">
          <div className="flex items-center gap-1">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ir para o destaque ${i + 1}: ${slide.title}`}
                aria-current={i === index}
                className="group grid h-11 w-9 cursor-pointer place-items-center"
              >
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-(--dur-base)",
                    i === index ? "w-8 faixa-marca" : "w-4 bg-white/40 group-hover:bg-white/70",
                  )}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pausar destaques" : "Retomar destaques"}
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Destaque anterior"
              className="hidden sm:grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Próximo destaque"
              className="hidden sm:grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
