"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  // Helper function for active/inactive links
  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    return `text-[17px] transition-colors duration-200 cursor-pointer ${
      isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white font-medium"
    }`;
  };

  return (
    <>
      {/* Sidebar Container */}
      <aside className="w-[280px] bg-[#121212] rounded-[32px] p-8 flex flex-col justify-between border border-zinc-800 shadow-xl shrink-0 min-h-[600px]">
        
        {/* Top Section: Header + Main Navigation */}
        <div className="flex flex-col items-center">
          {/* Header Block */}
          <div className="flex flex-col items-center text-center mb-8 w-full">
            {/* Circular Logo Container */}
            <div className="w-24 h-24 rounded-full bg-[#d9d9d9] flex items-center justify-center p-2 mb-4 overflow-hidden shadow-inner">
              <img
                src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
                alt="BITS Pilani Neurotech Labs logo"
                className="w-full h-full object-cover rounded-full mix-blend-multiply"
              />
            </div>

            <h2 className="text-xl font-bold text-white tracking-tight leading-tight">
              Bits Pilani
            </h2>
            <h3 className="text-base font-semibold text-zinc-300 leading-tight mt-0.5">
              Neurotech Labs
            </h3>
            <p className="text-[11px] text-zinc-500 mt-1">
              Affiliated with Postman API Labs
            </p>
          </div>

          {/* Nav Links */}
          <nav className="w-full flex flex-col items-center gap-4">
            <Link href="/" className={getLinkClasses("/")}>
              home
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              about us
            </Link>
            <Link href="/recruitment" className={getLinkClasses("/recruitment")}>
              recruitment
            </Link>
            <Link href="/demos" className={getLinkClasses("/demos")}>
              demos
            </Link>
            <Link href="/pieces" className={getLinkClasses("/pieces")}>
              pieces
            </Link>
          </nav>
        </div>

        {/* Bottom Section: Separator + Left-Aligned Contact Link */}
        <div className="w-full pt-4 border-t border-zinc-800/80 mt-6">
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-[17px] font-bold text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 text-left"
          >
            contact us ↗
          </button>
        </div>
      </aside>

      {/* Contact Pop-up Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-zinc-800 w-full max-w-md rounded-[32px] p-8 relative shadow-2xl flex flex-col items-center text-center">
            
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              get in touch
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Check out our open-source repositories or email the dev team directly!
            </p>

            <div className="w-full flex flex-col gap-3">
             

              {/* GitHub Link Button */}
              <a
                href="https://github.com/BITS-Pilani-Neurotech-Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-zinc-800 text-zinc-200 font-semibold hover:bg-zinc-700 hover:text-white transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] border border-zinc-700/50"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Visit GitHub Repository
              </a>

               {/* Email Developers Button */}
              <a
                href="mailto:f20251296@pilani.bits-pilani.ac.in"
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Contact Developers
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}