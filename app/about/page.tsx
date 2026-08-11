"use client";

import SubpageLayout from "@/components/SubpageLayout";

export default function AboutUs() {
  return (
    <SubpageLayout>
     

      {/* Header Banner */}
      <header className="relative z-10 w-full backdrop-blur-md bg-white/10 border border-white/20 shadow-sm py-4 rounded-[20px] md:rounded-[28px] pl-16 pr-6 md:px-8 mb-6">
        <h1 className="text-2xl md:text-[40px] font-bold text-white leading-none tracking-tight">
          about us
        </h1>
      </header>

      {/* About Us Content Block */}
      <main className="relative z-10 w-full min-h-[600px] bg-[#121212]/90 backdrop-blur-sm rounded-[28px] md:rounded-[40px] p-6 md:p-12 text-white shadow-xl flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Neurotech Labs, BITS Pilani
          </h2>
          <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-normal">
            We are a community of students passionate about exploring the intersection of neuroscience, cognitive computing, neurotech and biotech. From decoding neural signals and modeling brain circuits to understanding innovative brain-computer interfaces (BCIs), our club serves as a collaborative hub for anyone fascinated by the brain's untapped potential.
          </p>

          <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-normal">
            Oh and also some of our members have been invited to present their papers in prestigious conferences, no biggie.
          </p>

          <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-normal">
            We spend our time building software projects, interactive projects using in-house hardware, learning and understanding relevant concepts with workshops and reading and discussing exciting research papers in the field. We look forward to taking part in biotech competitions of the international level.
          </p>

          <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-normal">
            Check out pieces and demos for more!
          </p>
        </div>

        <div className="pt-6 border-t border-zinc-800">
          <p className="text-xs md:text-sm text-zinc-500">
            Affiliated with Postman API Labs
          </p>
        </div>
      </main>
    </SubpageLayout>
  );
}