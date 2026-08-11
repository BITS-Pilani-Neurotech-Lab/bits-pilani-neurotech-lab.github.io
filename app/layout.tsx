import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased min-h-screen">
        {/* Background image fixed globally */}
        <img
          src="/background.png"
          alt="Background Pattern"
          className="fixed inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
        />

        {/* Global responsive wrapper */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto p-4 md:p-6 min-h-screen flex flex-col md:flex-row gap-6 items-start">
          <Sidebar />
          <main className="flex-1 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}