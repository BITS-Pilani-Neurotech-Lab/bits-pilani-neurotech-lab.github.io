"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  title: string;
  content: string;
  onClose: () => void;
}

export default function MarkdownModal({ title, content, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
      <div className="bg-[#0f0f11] w-[950px] max-h-[88vh] rounded-[32px] p-10 overflow-y-auto shadow-2xl relative border border-zinc-800 text-zinc-100 selection:bg-zinc-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-zinc-400 hover:text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/60 hover:bg-zinc-700 transition-all border border-zinc-700/50"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h1 className="text-4xl font-bold mb-8 text-zinc-100 border-b border-zinc-800 pb-5 tracking-tight">
          {title}
        </h1>

        {/* Markdown Content Renderer */}
        <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-p:leading-relaxed prose-li:text-zinc-300 prose-strong:text-white">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              // Hide empty/broken images
              img: ({ node, src, alt, ...props }) => {
                const imgSrc = typeof src === "string" ? src.trim() : "";
                if (!imgSrc) return null;
                return <img src={imgSrc} alt={alt || ""} className="rounded-xl border border-zinc-800" {...props} />;
              },

              // Codeblock Renderer matching image 2 style
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "text";

                if (!inline && match) {
                  return (
                    <div className="my-6 rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#161618] shadow-lg">
                      {/* Codeblock Header Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e20] border-b border-zinc-800/60 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
                        </div>
                        <span className="font-mono text-zinc-400 flex items-center gap-1.5 capitalize">
                          <span className="text-zinc-500">&lt;/&gt;</span> {language}
                        </span>
                      </div>

                      {/* Syntax Highlighted Body */}
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={language}
                        PreTag="div"
                        showLineNumbers={true}
                        lineNumberStyle={{ minWidth: "2.5em", color: "#52525b", textAlign: "right", paddingRight: "1em" }}
                        customStyle={{
                          margin: 0,
                          padding: "1.25rem 1rem",
                          backgroundColor: "#121214",
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                // Inline code styling (e.g. `eeg-data.txt`)
                return (
                  <code
                    className="bg-zinc-800/70 text-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-700/50"
                    {...props}
                  >
                    {children}
                  </code>
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