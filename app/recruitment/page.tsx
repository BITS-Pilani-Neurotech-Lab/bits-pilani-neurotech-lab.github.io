"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Recruitment() {
  const [activeTrack, setActiveTrack] = useState<"bio" | "tech">("tech");

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
            recruitment
          </h1>
        </div>
      </header>

      {/* Main Container */}
      <div className="relative z-10 w-[1280px]">
        <div className="flex gap-[15px] items-start">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col gap-[15px]">
            {/* Task Container */}
            <div className="w-full h-[680px] bg-[#121212]/90 backdrop-blur-sm rounded-[40px] p-10 text-white shadow-xl flex flex-col justify-between">
              <div>
                <p className="text-2xl font-semibold text-zinc-200">
                  here&apos;s your first task
                </p>
              </div>
            </div>

            {/* Track Buttons */}
            <div className="flex gap-[15px] w-full">
              <button
                onClick={() => setActiveTrack("bio")}
                className={`flex-1 py-5 rounded-[28px] font-bold text-2xl transition-all duration-200 ${
                  activeTrack === "bio"
                    ? "bg-[#6e6e6e] text-white shadow-md"
                    : "bg-[#d9d9d9]/80 text-white hover:bg-zinc-400"
                }`}
              >
                bio track
              </button>

              <button
                onClick={() => setActiveTrack("tech")}
                className={`flex-1 py-5 rounded-[28px] font-bold text-2xl transition-all duration-200 ${
                  activeTrack === "tech"
                    ? "bg-[#6e6e6e] text-white shadow-md"
                    : "bg-[#d9d9d9]/80 text-white hover:bg-zinc-400"
                }`}
              >
                tech track
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}