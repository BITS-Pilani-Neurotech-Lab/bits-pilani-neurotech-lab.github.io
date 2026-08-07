"use client";

import Link from "next/link";

// Tile positions aligned to a strict grid with 15px uniform gaps
const illustrationCards = [
  {
    // Doodle 1
    src: "/doodle one.png", 
    alt: "Neurotech Labs custom illustration one",
    className: "absolute top-[21px] left-[15px] w-[484px] h-[254px] rounded-[40px] object-cover object-right-top",
  },
  {
    // Doodle 2
    src: "/doodle two.png",
    alt: "Neurotech Labs custom illustration two",
    className: "absolute top-[527px] left-[941px] w-[484px] h-[474px] rounded-[40px] object-cover object-top",
  },
  {
    // Doodle 3
    src: "/doodle three.png",
    alt: "Neurotech Labs custom illustration three",
    className: "absolute top-[527px] left-[15px] w-[484px] h-[474px] rounded-[40px] object-cover object-left-top",
  },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
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
      <div className="fixed bottom-5 right-6 z-50 pointer-events-none">
        <p className="text-[10px] text-zinc-500/80 font-extrabold tracking-tight">
          developed by Chinmayee Giridhar, Abhinav Bhamidipati
        </p>
      </div>

      {/* Main Grid Container Layered Above Video */}
      <main
        className="relative z-10 min-h-[1301px] w-[1440px] mx-auto overflow-hidden font-sans"
        aria-label="Neurotech Labs, BITS Pilani"
      >
        {/* Map through illustration cards */}
        {illustrationCards.map((illustration) => (
          <img
            key={illustration.src}
            className={illustration.className}
            alt={illustration.alt}
            src={illustration.src}
          />
        ))}

        {/* "hi!" intro tile */}
        <Link href="/about" className="block">
          <header className="group absolute top-[21px] left-[514px] h-[491px] w-[572px] rounded-[40px] bg-[#787878]/70 backdrop-blur-sm p-10 flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-300">
            <h1 className="relative z-0 font-bold text-[56px] leading-[1.1] tracking-tight text-white transition-colors duration-300 group-hover:text-white">
              hi!
              <br />
              we&apos;re neurotech labs, bits pilani
            </h1>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </header>
        </Link>

        {/* Recruitment tile */}
        <Link href="/recruitment" className="block">
          <section
            className="group absolute top-[290px] left-[15px] h-[222px] w-[484px] rounded-[40px] bg-[#c1c1c1]/70 backdrop-blur-sm p-8 flex items-end justify-end overflow-hidden cursor-pointer transition-all duration-300"
            aria-labelledby="recruitment-heading"
          >
            <h2
              id="recruitment-heading"
              className="relative z-0 font-bold text-[50px] leading-none text-white transition-colors duration-300 group-hover:text-white"
            >
              recruitment
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Demos tile */}
        <Link href="/demos" className="block">
          <section
            className="group absolute top-[21px] left-[1101px] h-[491px] w-[324px] rounded-[40px] bg-[#c1c1c1]/70 backdrop-blur-sm p-8 flex items-end overflow-hidden cursor-pointer transition-all duration-300"
            aria-labelledby="demos-heading"
          >
            <h2
              id="demos-heading"
              className="relative z-0 font-bold text-[50px] leading-none text-white transition-colors duration-300 group-hover:text-white"
            >
              demos
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Pieces tile */}
        <Link href="/pieces" className="block">
          <section
            className="group absolute top-[527px] left-[514px] h-[474px] w-[412px] rounded-[40px] bg-[#787878]/70 backdrop-blur-sm p-8 flex items-start justify-end overflow-hidden cursor-pointer transition-all duration-300"
            aria-labelledby="pieces-heading"
          >
            <h2
              id="pieces-heading"
              className="relative z-0 font-bold text-[50px] leading-none text-white transition-colors duration-300 group-hover:text-white"
            >
              pieces
            </h2>
            <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/10 group-hover:backdrop-blur-md group-hover:border group-hover:border-white/30 group-hover:ring-1 group-hover:ring-white/20 group-hover:shadow-2xl" />
          </section>
        </Link>

        {/* Footer */}
        <footer className="absolute top-[1080px] left-[528px] w-[383px] flex flex-col items-center text-center pb-10">
          <img
            className="h-28 w-28 aspect-square object-cover mb-3"
            alt="Neurotech Labs logo"
            src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
          />
          <p className="text-xl font-medium leading-snug text-white">
            Neurotech Labs, BITS Pilani
            <br />
            <span className="text-zinc-300 text-lg">2026</span>
          </p>
        </footer>
      </main>
    </div>
  );
}