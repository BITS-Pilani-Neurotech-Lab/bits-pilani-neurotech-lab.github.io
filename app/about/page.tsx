"use client";



export default function AboutUs() {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-black flex flex-col items-center pb-20">
      {/* Stationary Background Image */}
      <img
        src="/pagewise background.png"
        alt="Background Pattern"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
      />

      {/* Fixed/Sticky Glass Banner Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm py-4 mb-[15px] flex justify-center">
        <div className="w-[1280px] px-2">
          <h1 className="text-[50px] font-bold text-zinc-800 leading-none tracking-tight">
            about us
          </h1>
        </div>
      </header>

      {/* Main Container Layered Above Background */}
      <div className="relative z-10 w-[1280px]">
        <div className="flex gap-[15px] items-start">
         

          {/* About Us Content Area */}
          <main className="flex-1 min-h-[680px] bg-[#121212]/90 backdrop-blur-sm rounded-[40px] p-12 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">
                Neurotech Labs, BITS Pilani
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
                We are a community of students passionate about exploring the intersection of neuroscience, cognitive computing, neurotech and biotech. From decoding neural signals and modeling brain circuits to understanding innovative brain-computer interfaces (BCIs), our club serves as a collaborative hub for anyone fascinated by the brain's untapped potential.
              </p>
            
             <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
                 Oh and also some of our members have been invited to present their papers in prestigious conferences, no biggie. 
            </p> 

            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
                 We spend our time building software projects, interactive projects using in-house hardware, learning and understanding relevant concepts with workshops and reading and discussing exciting research papers in the field. We look forward to taking part in biotech competitions of the international level.
            </p>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
               Check out pieces and demos for more!
               </p>  
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-sm text-zinc-500">
                Affiliated with Postman API Labs
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}