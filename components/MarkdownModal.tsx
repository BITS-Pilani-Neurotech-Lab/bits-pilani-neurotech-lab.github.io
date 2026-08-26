"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownModalProps {
  title: string;
  author?: string;
  content: string;
  onClose: () => void;
}

export default function MarkdownModal({
  title,
  author,
  content,
  onClose,
}: MarkdownModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 overflow-y-auto text-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-1 capitalize">{title}</h2>

        {/* Author Byline */}
        {author && (
          <p className="text-xs text-zinc-400 mb-6 font-medium">
            By <span className="text-zinc-200">{author}</span>
          </p>
        )}

        {/* Content with forced download for .ipynb and .csv */}
        <div className="prose prose-invert max-w-none text-zinc-300">
          <ReactMarkdown
            components={{
              a: ({ href, children, ...props }) => {
                const isDownloadable =
                  href?.endsWith(".ipynb") || href?.endsWith(".csv");
                return (
                  <a
                    href={href}
                    download={isDownloadable ? "" : undefined}
                    className="underline text-blue-400 hover:text-blue-300"
                    {...props}
                  >
                    {children}
                  </a>
                );
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