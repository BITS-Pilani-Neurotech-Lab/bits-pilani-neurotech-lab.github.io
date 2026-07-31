"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css"; // Ensure KaTeX CSS is loaded!

interface MarkdownModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function MarkdownModal({
  title,
  content,
  onClose,
}: MarkdownModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#121212] text-white rounded-2xl shadow-2xl overflow-y-auto p-8 border border-zinc-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right text-zinc-400 hover:text-white bg-zinc-800/80 p-2 rounded-full backdrop-blur-md transition-all"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h1 className="text-3xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">
          {title}
        </h1>

        {/* Markdown Content */}
        <div className="prose prose-invert max-w-none prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            components={{
              img: ({ node, src, alt, ...props }) => {
                // Prevent Next.js error by ignoring images with empty or missing src
                if (!src) return null;
                return <img src={src} alt={alt || ""} {...props} />;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}