import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Bits Pilani Neurotech Labs",
  description: "Pioneering the intersection of neuroscience and computing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased min-h-screen overflow-x-hidden">
        {/* Fixed background layer using MP4 video (or solid dark background) */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale contrast-120"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Global Responsive Container */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto p-4 md:p-8 min-h-screen flex flex-col md:flex-row gap-6 items-start">
          <Sidebar />
          <main className="flex-1 w-full min-w-0 overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}