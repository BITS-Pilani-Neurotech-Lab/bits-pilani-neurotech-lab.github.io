"use client";

import { useState } from "react";

import MarkdownModal from "@/components/MarkdownModal";

interface Piece {
  id: string;
  title: string;
  author: string;
  bgColor: string;
  textColor: string;
  isDarkTile?: boolean;
  content?: string;
}

const piecesData: Piece[] = [
  {
    id: "2024-06-25-bandpower",
    title: "eeg bandpower",
    author: "Kedar Athrey",
    bgColor: "bg-[#121212]",
    textColor: "text-white",
    isDarkTile: true,
  },
  {
    id: "2024-07-02-alignment",
    title: "pairwise sequence alignment",
    author: "Sankalp Tattwadarshi Swain",
    bgColor: "bg-[#6e6e6e]",
    textColor: "text-white",
    isDarkTile: false,
  },
  {
    id: "2024-07-09-emg-dino",
    title: "emg chrome dino project",
    author: "Darshil Chauhan",
    bgColor: "bg-[#d9d9d9]",
    textColor: "text-zinc-900",
    isDarkTile: false,
  },
  {
    id: "2025-09-04-neurotech-in-action",
    title: "a dating app based on brain signals",
    author: "Praneet Raj Lingamallu",
    bgColor: "bg-[#121212]",
    textColor: "text-white",
    isDarkTile: true,
  },
  {
    id: "2024-09-11-neurotech-task-2",
    title: "understanding eeg data",
    author: "Darshil Chauhan",
    bgColor: "bg-[#d9d9d9]",
    textColor: "text-zinc-900",
    isDarkTile: false,
  },
  {
    id: "2025-09-07-bio-track-task-1",
    title: "spotting snp mutations",
    author: "Praneet Raj Lingamallu",
    bgColor: "bg-[#6e6e6e]",
    textColor: "text-white",
    isDarkTile: false,
  },
  {
    id: "2025-09-07-tech-track-task-1",
    title: "izhikevich model of the neuron",
    author: "Pratul Gupta",
    bgColor: "bg-[#6e6e6e]",
    textColor: "text-white",
    isDarkTile: false,
  },
];

export default function Pieces() {
  const [activeModalData, setActiveModalData] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const handlePieceClick = async (piece: Piece) => {
    try {
      // Fetch using relative pathing for static deployment
      const res = await fetch(`./content/${piece.id}.md`);
      
      if (res.ok) {
        let text = await res.text();

        // Strip out front matter (--- ... ---) at the beginning of the file
        text = text.replace(/^---[\s\S]*?---\s*/, "");

        setActiveModalData({
          title: piece.title,
          content: text,
        });
      } else {
        setActiveModalData({
          title: piece.title,
          content: `*No content found for \`${piece.id}.md\`.*`,
        });
      }
    } catch (error) {
      setActiveModalData({
        title: piece.title,
        content: `*Failed to load content for \`${piece.id}.md\`.*`,
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-black flex flex-col items-center pb-20">
      {/* Stationary Background Image */}
      <img
        src="/background.png"
        alt="Background Pattern"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
      />

      {/* Fixed/Sticky Glass Banner Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm py-4 mb-[15px] flex justify-center">
        <div className="w-[1280px] px-2">
          <h1 className="text-[50px] font-bold text-zinc-800 leading-none tracking-tight">
            pieces
          </h1>
        </div>
      </header>

      {/* Main Layout Layered Above Background */}
      <div className="relative z-10 w-[1280px]">
        <div className="flex gap-[15px] items-start">
          {/* Reusable Sidebar */}
        

          {/* Articles Stack */}
          <main className="flex-1 flex flex-col gap-[15px]">
            {piecesData.map((piece) => (
              <article
                key={piece.id}
                onClick={() => handlePieceClick(piece)}
                className={`group relative w-full h-[100px] ${piece.bgColor} rounded-[28px] p-6 px-8 flex items-center justify-between cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-md`}
              >
                {/* Title & Author Stack */}
                <div className="flex flex-col z-0">
                  <h2
                    className={`text-2xl font-bold tracking-tight ${piece.textColor} transition-colors duration-300 ${
                      piece.isDarkTile
                        ? "group-hover:text-white"
                        : "group-hover:text-zinc-900"
                    }`}
                  >
                    {piece.title}
                  </h2>
                  <p
                    className={`text-sm font-medium opacity-80 ${piece.textColor}`}
                  >
                    by {piece.author}
                  </p>
                </div>

                {/* Consistent Frosted Glass Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[28px] bg-white/0 backdrop-blur-none transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-[6px] group-hover:border group-hover:border-zinc-500/60 group-hover:ring-1 group-hover:ring-white/40 group-hover:shadow-lg" />
              </article>
            ))}
          </main>
        </div>
      </div>

      {/* Render Markdown Modal when article is clicked */}
      {activeModalData && (
        <MarkdownModal
          title={activeModalData.title}
          content={activeModalData.content}
          onClose={() => setActiveModalData(null)}
        />
      )}
    </div>
  );
}