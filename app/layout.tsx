import "./globals.css";

export const metadata = {
  title: "BITS Pilani Neurotech Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased min-h-screen overflow-x-hidden">
        {/* Fixed background layer using MP4 video */}
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

        {/* Global Page Wrapper */}
        <div className="relative z-10 min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}