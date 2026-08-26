"use client";

import { useState, useEffect } from "react";
import SubpageLayout from "@/components/SubpageLayout";
import ReactMarkdown from "react-markdown";

export default function Recruitment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState<"bio" | "tech">("bio");
  const [portfolio, setPortfolio] = useState("");
  const [sop, setSop] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://neurotech-website-brown.vercel.app/api/recruitment/apply/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            track,
            portfolio,
            sop,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Application submitted successfully!");
        setName("");
        setEmail("");
        setPortfolio("");
        setSop("");
      } else {
        setSubmitStatus("error");
        setStatusMessage("Submission failed. Please check your inputs.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Could not connect to the backend server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SubpageLayout>
      {/* Header Banner */}
      <header className="relative z-10 w-full backdrop-blur-md bg-white/10 border border-white/20 shadow-sm py-4 rounded-[20px] md:rounded-[28px] pl-16 pr-6 md:px-8 mb-6">
        <h1 className="text-2xl md:text-[40px] font-bold text-white leading-none tracking-tight">
          recruitment
        </h1>
      </header>

      {/* Main Content Form Card */}
      <main className="relative z-10 w-full flex flex-col gap-[15px]">
        <div className="w-full bg-[#121212]/90 backdrop-blur-sm rounded-[28px] md:rounded-[40px] p-6 md:p-10 text-white shadow-xl flex flex-col justify-between border border-white/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Join Neurotech Labs
            </h2>
            <p className="text-zinc-400 mb-6 text-sm md:text-base">
              Select your track below to read the recruitment task details and submit your application.
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
                  <ReactMarkdown>{taskContent}</ReactMarkdown>
                </article>
              )}
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Portfolio / GitHub / Colab Link
                </label>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://github.com/username or Colab link"
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-300">
                  Statement of Purpose / Task Submission
                </label>
                <textarea
                  required
                  rows={5}
                  value={sop}
                  onChange={(e) => setSop(e.target.value)}
                  placeholder="Describe your background and response to the track task..."
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-white text-black font-bold py-3 md:py-4 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : `Submit ${track.toUpperCase()} Track Application`}
              </button>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-center text-sm font-medium ${
                    submitStatus === "success"
                      ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                      : "bg-rose-950/80 text-rose-300 border border-rose-800"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </SubpageLayout>
  );
}
