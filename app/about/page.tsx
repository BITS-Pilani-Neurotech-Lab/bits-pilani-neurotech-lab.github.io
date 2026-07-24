"use client";

import Sidebar from "@/components/Sidebar";

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
          <Sidebar />

          {/* About Us Content Area */}
          <main className="flex-1 min-h-[680px] bg-[#121212]/90 backdrop-blur-sm rounded-[40px] p-12 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">
                Neurotech Labs, BITS Pilani
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
                yap
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