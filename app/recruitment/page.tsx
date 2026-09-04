"use client";

import { useState, useEffect } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import ReactMarkdown from "react-markdown";

export default function Recruitment() {
  const [track, setTrack] = useState<"bio" | "tech">("bio");

  // Markdown task content states
  const [taskContent, setTaskContent] = useState<string>("");
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(true);

  // Fetch the active track's markdown file from /public/content/
  useEffect(() => {
    async function fetchTaskMarkdown() {
      setIsLoadingTask(true);
      try {
        const res = await fetch(`/content/${track}.md`);
        if (res.ok) {
          const text = await res.text();
          setTaskContent(text);
        } else {
          setTaskContent("Failed to load task instructions.");
        }
      } catch (err) {
        setTaskContent("Error fetching task details.");
      } finally {
        setIsLoadingTask(false);
      }
    }

    fetchTaskMarkdown();
  }, [track]);

  return (
    <SubpageLayout>
      {/* Header Banner */}
      <header className="relative z-10 w-full backdrop-blur-md bg-white/10 border border-white/20 shadow-sm py-4 rounded-[20px] md:rounded-[28px] pl-16 pr-6 md:px-8 mb-6">
        <h1 className="text-2xl md:text-[40px] font-bold text-white leading-none tracking-tight">
          recruitment
        </h1>
      </header>

      {/* Main Content Card */}
      <main className="relative z-10 w-full flex flex-col gap-[15px]">
        <div className="w-full bg-[#121212]/90 backdrop-blur-sm rounded-[28px] md:rounded-[40px] p-6 md:p-10 text-white shadow-xl flex flex-col justify-between border border-white/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Join Neurotech Labs
            </h2>
            <p className="text-zinc-400 mb-6 text-sm md:text-base">
              Select your track below to read the recruitment task details and download resources.
            </p>

            {/* Track Selector Buttons */}
            <div className="flex gap-3 md:gap-4 mb-6">
              <button
                type="button"
                onClick={() => setTrack("bio")}
                className={`flex-1 py-3 md:py-4 rounded-[16px] md:rounded-[20px] font-bold text-base md:text-xl transition-all duration-200 ${
                  track === "bio"
                    ? "bg-[#6e6e6e] text-white shadow-md"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                bio track
              </button>

              <button
                type="button"
                onClick={() => setTrack("tech")}
                className={`flex-1 py-3 md:py-4 rounded-[16px] md:rounded-[20px] font-bold text-base md:text-xl transition-all duration-200 ${
                  track === "tech"
                    ? "bg-[#6e6e6e] text-white shadow-md"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                tech track
              </button>
            </div>

            {/* Rendered Task Details Box */}
            <div className="w-full bg-zinc-900/80 border border-zinc-700/80 rounded-2xl p-6 md:p-8 mb-8 text-left transition-all">
              {isLoadingTask ? (
                <div className="text-center text-zinc-400 py-4">Loading task details...</div>
              ) : (
                <article className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-4">
                  <ReactMarkdown
                    components={{
                      a: ({ href, children, ...props }) => {
                        const isDownloadable =
                          href?.endsWith(".ipynb") ||
                          href?.endsWith(".csv") ||
                          href?.endsWith(".zip");

                        return (
                          <a
                            href={href}
                            {...(isDownloadable
                              ? { download: true }
                              : { target: "_blank", rel: "noopener noreferrer" })}
                            className="text-white underline hover:text-zinc-300 font-semibold"
                            {...props}
                          >
                            {children}
                          </a>
                        );
                      },
                    }}
                  >
                    {taskContent}
                  </ReactMarkdown>
                </article>
              )}
            </div>

            {/* Submissions Closed Notice */}
            <div className="p-6 md:p-8 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-center flex flex-col items-center gap-2">
              <span className="text-zinc-300 font-semibold text-lg md:text-xl flex items-center gap-2">
                🔒︎ Submissions are currently closed
              </span>
              <p className="text-zinc-400 text-sm md:text-base max-w-lg">
                Applications for this recruitment cycle are no longer being accepted. You are welcome to explore the task materials and download assets above for reference.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SubpageLayout>
  );
}