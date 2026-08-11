import Sidebar from "@/components/Sidebar";

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 w-full max-w-[1280px] mx-auto p-4 md:p-8 min-h-screen flex flex-col md:flex-row gap-6 items-start">
      <Sidebar />
      <main className="flex-1 w-full min-w-0 overflow-hidden">
        {children}
      </main>
    </div>
  );
}