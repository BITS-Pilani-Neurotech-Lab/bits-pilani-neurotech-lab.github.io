"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

interface Demo {
  id: string;
  title: string;
  bgColor: string;
  textColor: string;
  isDarkTile?: boolean;
}

export default function Demos() {
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

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
            demos
          </h1>
        </div>
      </header>

      {/* Main Container Layered Above Background */}
      <div className="relative z-10 w-[1280px]">
        <div className="flex gap-[15px] items-start">
          <Sidebar />

          {/* Asymmetrical Custom Layout Stack */}
          <main className="flex-1 flex flex-col gap-[15px]">
            {/* Top Row */}
            <div className="flex gap-[15px] items-start">
              {/* Cell Free DNA Systems — Narrow tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "cell-free-dna-systems",
                    title: "cell free dna systems",
                    bgColor: "bg-[#6e6e6e]",
                    textColor: "text-white",
                  })
                }
                className="group relative w-[340px] h-[340px] bg-[#6e6e6e] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md shrink-0"
              >
                <h2 className="text-3xl font-bold tracking-tight leading-tight text-white transition-colors duration-300 z-0 group-hover:text-zinc-900">
                  cell free
                  <br />
                  dna
                  <br />
                  systems
                </h2>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>

              {/* Plasticity of Neuron Connections — Wider, Taller Black Tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "plasticity-neuron-connections",
                    title: "plasticity of neuron connections",
                    bgColor: "bg-[#121212]",
                    textColor: "text-white",
                    isDarkTile: true,
                  })
                }
                className="group relative flex-1 h-[370px] bg-[#121212] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md"
              >
                <h2 className="text-3xl font-bold tracking-tight leading-tight text-white transition-colors duration-300 z-0 group-hover:text-white max-w-[280px]">
                  plasticity of
                  <br />
                  neuron
                  <br />
                  connections
                </h2>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-[15px] items-start">
              {/* Demo 3 — Wider light gray tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "demo-3",
                    title: "demo 3",
                    bgColor: "bg-[#d9d9d9]",
                    textColor: "text-zinc-900",
                  })
                }
                className="group relative flex-1 h-[370px] bg-[#d9d9d9] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md"
              >
                <h2 className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 z-0 group-hover:text-zinc-900">
                  demo 3
                </h2>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>

              {/* Demo 4 — Medium gray tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "demo-4",
                    title: "demo 4",
                    bgColor: "bg-[#6e6e6e]",
                    textColor: "text-white",
                  })
                }
                className="group relative w-[370px] h-[370px] bg-[#6e6e6e] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md shrink-0"
              >
                <h2 className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 z-0 group-hover:text-zinc-900">
                  demo 4
                </h2>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Demo View Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white w-[900px] max-h-[85vh] rounded-[40px] p-10 overflow-y-auto shadow-2xl relative border border-zinc-200">
            <button
              onClick={() => setSelectedDemo(null)}
              className="absolute top-8 right-8 text-zinc-400 hover:text-black font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold mb-6 text-zinc-900 border-b pb-4">
              {selectedDemo.title}
            </h2>

            <div className="text-zinc-700 text-lg">
              <p className="italic text-zinc-400">
                [ Interactive demo application for &quot;{selectedDemo.title}&quot; will load here ]
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}