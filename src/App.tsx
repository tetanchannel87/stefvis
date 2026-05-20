import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { AboutTablet } from "@/components/AboutTablet";
import { SocialConnect } from "@/components/ui/connect-with-us";
import { Hero as AnimatedHero } from "@/components/ui/animated-hero";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Component as SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { Marquee } from "@/components/ui/marquee";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center p-4 md:p-8 gap-8 relative">
      <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <SpotlightCursor config={{ radius: 260, brightness: 0.18, color: "#ffffff" }} />
      <Marquee />
      <div id="top" className="relative z-10 w-full flex flex-col items-center gap-8 pt-20 md:pt-24">
      <Card className="w-full max-w-6xl min-h-[860px] md:min-h-[600px] md:h-[600px] bg-black/[0.96] relative overflow-hidden border-neutral-800">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
              STEFAN.DEV
            </p>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Стефан
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-neutral-300">
              Full-stack разработчик · от пикселя до сервера
            </p>
            <p className="mt-6 text-neutral-400 max-w-md leading-relaxed">
              Собираю продукты целиком: фронт, бэк, базы, деплой. Люблю чистый
              код, быстрый UI и архитектуру, которая не разваливается на втором
              релизе.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
              >
                Обо мне
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-200 hover:bg-neutral-900 transition"
              >
                Связаться
              </a>
            </div>
          </div>

          <div className="flex-1 relative min-h-[460px] md:min-h-[300px] overflow-hidden">
            {/* На мобиле растягиваем канвас в ширину чтобы Spline отрендерил робота в landscape пропорции; центр-кроп показывает только центральную часть */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[200%] md:w-full md:left-0 md:translate-x-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Card>

      <AnimatedHero />

      <div id="about" className="w-full scroll-mt-20">
        <AboutTablet />
      </div>

      <div id="contact" className="w-full scroll-mt-20">
        <SocialConnect />
      </div>
      </div>
    </main>
  );
}
