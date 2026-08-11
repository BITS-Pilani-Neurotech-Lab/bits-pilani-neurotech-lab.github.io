"use client";

import Link from "next/link";

// Tile positions aligned to a strict grid on desktop
const illustrationCards = [
  {
    // Doodle 1
    src: "/doodle one.png",
    alt: "Neurotech Labs custom illustration one",
    desktopClass: "md:absolute md:top-[21px] md:left-[15px] md:w-[484px] md:h-[254px]",
    mobileOrder: "order-2",
  },
  {
    // Doodle 2
    src: "/doodle two.png",
    alt: "Neurotech Labs custom illustration two",
    desktopClass: "md:absolute md:top-[527px] md:left-[941px] md:w-[484px] md:h-[474px]",
    mobileOrder: "order-6",
  },
  {
    // Doodle 3
    src: "/doodle three.png",
    alt: "Neurotech Labs custom illustration three",
    desktopClass: "md:absolute md:top-[527px] md:left-[15px] md:w-[484px] md:h-[474px]",
    mobileOrder: "order-4",
  },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background MP4 Video — Pink Tint + Scaled Down to Reveal Brain Detail */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Pink Blend Overlay */}
        <div className="absolute inset-0 bg-pink-500/3 z-10 mix-blend-screen" />

        {/* Video: Scaled down using object-contain and scale-100 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rotate-90 scale-105 opacity-85 grayscale contrast-120"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom-Right Corner Footnote */}
      <div className="fixed bottom-3 right-4 md:bottom-5 md:right-6 z-50 pointer-events-none">
        <p className="text-[9px] md:text-[10px] text-zinc-500/80 font-extrabold tracking-tight">
          developed by Chinmayee Giridhar, Abhinav Bhamidipati
        </p>
      </div>

      {/* Main Grid Container Layered Above Video */}
      <main
        className="relative z-10 w-full max-w-[1440px] mx-auto min-h-screen md:min-h-[1301px] p-4 md:p-0 font-sans flex flex-col md:block gap-4"
        aria-label="Neurotech Labs, BITS Pilani"
      >
        {/* --- Doodles --- */}
        {/* Doodle 1 */}
        <img
          src={illustrationCards[0].src}
          alt={illustrationCards[0].alt}
          className={`w-full h-[180px] sm:h-[220px] rounded-[28px] md:rounded-[40px] object-cover object-right-top ${illustrationCards[0].desktopClass} ${illustrationCards[0].mobileOrder}`}
        />

        {/* Doodle 2 */}
        <img
          src={illustrationCards[1].src}
          alt={illustrationCards[1].alt}
          className={`w-full h-[220px] sm:h-[300px] rounded-[28px] md:rounded-[40px] object-cover object-top ${illustrationCards[1].desktopClass} ${illustrationCards[1].mobileOrder}`}
        />

        {/* Doodle 3 */}
        <img
          src={illustrationCards[2].src}
          alt={illustrationCards[2].alt}
          className={`w-full h-[220px] sm:h-[300px] rounded-[28px] md:rounded-[40px] object-cover object-left-top ${illustrationCards[2].desktopClass} ${illustrationCards[2].mobileOrder}`}
        />

        {/* --- Interactive Navigation Tiles --- */}

        {/* "hi!" intro tile */}
        <Link href="/about" className="block order-1 md:order-none">
          <header className="group w-full md:w-[572px] h-[260px] md:h-[491px] rounded-[28px] md:rounded-[40px] bg-[#787878]/70 backdrop-blur-sm p-6 md:p-10 flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-300 md:absolute md:top-[21px] md:left-[514px]">
            <h1 className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[56px] leading-[1.1] tracking-tight text-white transition-colors duration-300">
              hi!
              <br />
              we&apos;re neurotech labs, bits pilani
            </h1>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] md:rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </header>
        </Link>

        {/* Recruitment tile */}
        <Link href="/recruitment" className="block order-3 md:order-none">
          <section
            className="group w-full md:w-[484px] h-[140px] md:h-[222px] rounded-[28px] md:rounded-[40px] bg-[#c1c1c1]/70 backdrop-blur-sm p-6 md:p-8 flex items-end justify-end overflow-hidden cursor-pointer transition-all duration-300 md:absolute md:top-[290px] md:left-[15px]"
            aria-labelledby="recruitment-heading"
          >
            <h2
              id="recruitment-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              recruitment
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] md:rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Demos tile */}
        <Link href="/demos" className="block order-5 md:order-none">
          <section
            className="group w-full md:w-[324px] h-[140px] md:h-[491px] rounded-[28px] md:rounded-[40px] bg-[#c1c1c1]/70 backdrop-blur-sm p-6 md:p-8 flex items-end overflow-hidden cursor-pointer transition-all duration-300 md:absolute md:top-[21px] md:left-[1101px]"
            aria-labelledby="demos-heading"
          >
            <h2
              id="demos-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              demos
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] md:rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Pieces tile */}
        <Link href="/pieces" className="block order-7 md:order-none">
          <section
            className="group w-full md:w-[412px] h-[140px] md:h-[474px] rounded-[28px] md:rounded-[40px] bg-[#787878]/70 backdrop-blur-sm p-6 md:p-8 flex items-start justify-end md:justify-end overflow-hidden cursor-pointer transition-all duration-300 md:absolute md:top-[527px] md:left-[514px]"
            aria-labelledby="pieces-heading"
          >
            <h2
              id="pieces-heading"
              className="relative z-0 font-bold text-3xl sm:text-4xl md:text-[50px] leading-none text-white transition-colors duration-300"
            >
              pieces
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] md:rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Footer */}
        <footer className="order-8 w-full md:w-[383px] flex flex-col items-center text-center py-6 md:pb-10 md:absolute md:top-[1080px] md:left-[528px]">
          <img
            className="h-20 w-20 md:h-28 md:w-28 aspect-square object-cover mb-3"
            alt="Neurotech Labs logo"
            src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
          />
          <p className="text-lg md:text-xl font-medium leading-snug text-white">
            Neurotech Labs, BITS Pilani
            <br />
            <span className="text-zinc-300 text-base md:text-lg">2026</span>
          </p>
        </footer>
      </main>
    </div>
  );
}