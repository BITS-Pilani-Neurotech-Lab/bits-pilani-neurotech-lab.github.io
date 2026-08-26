"use client";

import Link from "next/link";

// Tile positions aligned to a strict grid on desktop — frosted glass placeholders
const glassTiles = [
  {
    // Top-left slot
    desktopClass: "md:absolute md:top-[21px] md:left-[15px] md:w-[484px] md:h-[254px]",
    mobileOrder: "order-2",
  },
  {
    // Bottom-left slot
    desktopClass: "md:absolute md:top-[527px] md:left-[15px] md:w-[484px] md:h-[474px]",
    mobileOrder: "order-4",
  },
  {
    // Bottom-right slot
    desktopClass: "md:absolute md:top-[527px] md:left-[941px] md:w-[484px] md:h-[474px]",
    mobileOrder: "order-6",
  },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background MP4 Video — Fullscreen Cover + B&W Mask */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Video: Scaled edge-to-edge with B&W / High-Contrast Mask */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 grayscale contrast-125 brightness-110"
        >
          <source src="/new_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Main Grid Container Layered Above Video */}
      <main
        className="relative z-10 w-full max-w-[1440px] mx-auto min-h-screen md:min-h-[1301px] p-4 md:p-0 font-sans flex flex-col md:block gap-4"
        aria-label="BITS Pilani Neurotech Labs"
      >
        {/* --- Frosted Glass Background Grid Tiles --- */}
        {glassTiles.map((tile, index) => (
          <div
            key={index}
            className={`w-full h-[140px] rounded-[28px] md:rounded-[40px] bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/25 ${tile.mobileOrder} ${tile.desktopClass}`}
          />
        ))}

        {/* --- Interactive Navigation Tiles --- */}

        {/* "hi!" intro tile */}
        <Link href="/about" className="block order-1 md:order-none">
          <header className="group w-full md:w-[572px] h-[260px] md:h-[491px] rounded-[28px] md:rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-10 flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-xl md:absolute md:top-[21px] md:left-[514px]">
            <h1 className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[56px] leading-[1.1] tracking-tight text-white transition-colors duration-300">
              hi!
              <br />
              we&apos;re neurotech labs, bits pilani
            </h1>
          </header>
        </Link>

        {/* Recruitment tile */}
        <Link href="/recruitment" className="block order-3 md:order-none">
          <section
            className="group w-full md:w-[484px] h-[140px] md:h-[222px] rounded-[28px] md:rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 flex items-end justify-end overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-xl md:absolute md:top-[290px] md:left-[15px]"
            aria-labelledby="recruitment-heading"
          >
            <h2
              id="recruitment-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              recruitment
            </h2>
          </section>
        </Link>

        {/* Demos tile */}
        <Link href="/demos" className="block order-5 md:order-none">
          <section
            className="group w-full md:w-[324px] h-[140px] md:h-[491px] rounded-[28px] md:rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 flex items-end overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-xl md:absolute md:top-[21px] md:left-[1101px]"
            aria-labelledby="demos-heading"
          >
            <h2
              id="demos-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              demos
            </h2>
          </section>
        </Link>

        {/* Pieces tile */}
        <Link href="/pieces" className="block order-7 md:order-none">
          <section
            className="group w-full md:w-[412px] h-[140px] md:h-[474px] rounded-[28px] md:rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 flex items-start justify-end md:justify-end overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/40 shadow-xl md:absolute md:top-[527px] md:left-[514px]"
            aria-labelledby="pieces-heading"
          >
            <h2
              id="pieces-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              pieces
            </h2>
          </section>
        </Link>

        {/* Footer */}
        <footer className="order-8 w-full md:w-[383px] flex flex-col items-center text-center py-6 md:pb-10 md:absolute md:top-[1080px] md:left-[528px]">
          <img
            className="h-20 w-20 md:h-28 md:w-28 aspect-square object-cover mb-3"
            alt="BITS Pilani Neurotech Labs logo"
            src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
          />
          <p className="text-lg md:text-xl font-medium leading-snug text-white">
            BITS Pilani Neurotech Labs
            <br />
            <span className="text-zinc-300 text-base md:text-lg">2026</span>
          </p>
        </footer>
      </main>
    </div>
  );
}