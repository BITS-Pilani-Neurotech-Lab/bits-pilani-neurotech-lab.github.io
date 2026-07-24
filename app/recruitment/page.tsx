"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Recruitment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("tech");
  const [portfolio, setPortfolio] = useState("");
  const [sop, setSop] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:8000/api/recruitment/apply/", {
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
      });

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
    <div className="relative min-h-screen w-full bg-black font-sans text-black flex flex-col items-center pb-20">
      <img
        src="/pagewise background.png"
        alt="Background Pattern"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
      />

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/40 border-b border-white/20 shadow-sm py-4 mb-[15px] flex justify-center">
        <div className="w-[1280px] px-2">
          <h1 className="text-[50px] font-bold text-zinc-800 leading-none tracking-tight">
            recruitment
          </h1>
        </div>
      </header>

      <div className="relative z-10 w-[1280px]">
        <div className="flex gap-[15px] items-start">
          <Sidebar />

          <main className="flex-1 flex flex-col gap-[15px]">
            <div className="w-full bg-[#121212]/90 backdrop-blur-sm rounded-[40px] p-10 text-white shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Join Neurotech Labs</h2>
                <p className="text-zinc-400 mb-8 text-base">
                  Select your track and submit your application details below.
                </p>

                <div className="flex gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setTrack("bio")}
                    className={`flex-1 py-4 rounded-[20px] font-bold text-xl transition-all duration-200 ${
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
                    className={`flex-1 py-4 rounded-[20px] font-bold text-xl transition-all duration-200 ${
                      track === "tech"
                        ? "bg-[#6e6e6e] text-white shadow-md"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    tech track
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">Full Name</label>
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
                    <label className="text-sm font-semibold text-zinc-300">Email Address</label>
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
                    <label className="text-sm font-semibold text-zinc-300">Portfolio / GitHub / Colab Link</label>
                    <input
                      type="url"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="https://github.com/username or Colab link"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-300">Statement of Purpose / Task Submission</label>
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
                    className="mt-4 bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
        </div>
      </div>
    </div>
  );
}