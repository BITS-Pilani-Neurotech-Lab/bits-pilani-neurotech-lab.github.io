"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

interface Demo {
  id: string;
  title: string;
  author?: string;
  filePath?: string;
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
                    author: "Ameya Agarwal",
                    filePath: "/demos/cfdna.html",
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
                <p className="text-sm font-medium opacity-80 text-white mt-1">
                  by Ameya Agarwal
                </p>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>

              {/* Plasticity of Neuron Connections — Wider, Taller Black Tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "plasticity-neuron-connections",
                    title: "plasticity of neuron connections",
                    author: "Ameya Agarwal",
                    filePath: "/demos/network_static.html",
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
                <p className="text-sm font-medium opacity-80 text-white mt-1">
                  by Ameya Agarwal
                </p>
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
                    author: "Author Name",
                    filePath: "/demos/demo3.html",
                    bgColor: "bg-[#d9d9d9]",
                    textColor: "text-zinc-900",
                  })
                }
                className="group relative flex-1 h-[370px] bg-[#d9d9d9] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md"
              >
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 transition-colors duration-300 z-0">
                  demo 3
                </h2>
                <p className="text-sm font-medium opacity-80 text-zinc-900 mt-1">
                  by Author Name
                </p>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>

              {/* Demo 4 — Medium gray tile */}
              <div
                onClick={() =>
                  setSelectedDemo({
                    id: "demo-4",
                    title: "demo 4",
                    author: "Author Name",
                    filePath: "/demos/demo4.html",
                    bgColor: "bg-[#6e6e6e]",
                    textColor: "text-white",
                  })
                }
                className="group relative w-[370px] h-[370px] bg-[#6e6e6e] rounded-[40px] p-8 flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md shrink-0"
              >
                <h2 className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 z-0 group-hover:text-zinc-900">
                  demo 4
                </h2>
                <p className="text-sm font-medium opacity-80 text-white mt-1">
                  by Author Name
                </p>
                {/* Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[40px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Demo View Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-[#121212] w-full max-w-[1000px] h-[85vh] rounded-[32px] p-6 flex flex-col shadow-2xl relative border border-zinc-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 px-2">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  {selectedDemo.title}
                </h2>
                {selectedDemo.author && (
                  <p className="text-sm font-medium text-zinc-400 mt-1">
                    by {selectedDemo.author}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="text-zinc-400 hover:text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Interactive HTML iFrame Container */}
            <div className="flex-1 w-full mt-4 rounded-2xl overflow-hidden bg-white border border-zinc-800">
              {selectedDemo.filePath ? (
                <iframe
                  src={selectedDemo.filePath}
                  className="w-full h-full border-none"
                  title={selectedDemo.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500">
                  No HTML file provided for this demo.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}