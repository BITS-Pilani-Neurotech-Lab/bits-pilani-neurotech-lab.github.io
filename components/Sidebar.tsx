"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  UserPlus,
  Play,
  BookOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", Icon: Home },
  { label: "About Us", href: "/about", Icon: Users },
  { label: "Recruitment", href: "/recruitment", Icon: UserPlus },
  { label: "Demos", href: "/demos", Icon: Play },
  { label: "Pieces", href: "/pieces", Icon: BookOpen },
  { label: "Contact Us", href: "/contact", Icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ---------------- MOBILE NAVIGATION (Hamburger Header) ---------------- */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-zinc-800 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shrink-0">
            <img
              src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
              alt="BITS Pilani Neurotech Labs Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-base tracking-tight">
            Neurotech Labs
          </span>
        </div>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-[#121212] p-6 text-white flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Logo Header */}
          <div className="flex flex-col items-center text-center mt-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 mb-3 overflow-hidden">
              <img
                src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
                alt="BITS Pilani Neurotech Labs Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="font-bold text-lg leading-tight">BITS Pilani</h2>
            <h3 className="font-semibold text-sm text-zinc-300">
              Neurotech Labs
            </h3>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, href, Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 text-base font-medium py-2 px-3 rounded-2xl transition-colors ${
                    isActive
                      ? "bg-zinc-800 text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="text-[10px] text-zinc-500 text-center">
          Affiliated with Postman API Labs
        </p>
      </div>

      {/* ---------------- DESKTOP SIDEBAR ---------------- */}
      <aside className="hidden md:flex w-[310px] h-[780px] bg-[#121212] rounded-[40px] p-8 flex-col text-white shrink-0 sticky top-24">
        {/* Logo & Lab Info */}
        <div className="flex flex-col items-center text-center mt-2 mb-10">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center p-3 mb-4 overflow-hidden">
            <img
              src="https://c.animaapp.com/2Fdanjhz/img/image-1@2x.png"
              alt="BITS Pilani Neurotech Labs Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-bold text-xl leading-tight">BITS Pilani</h2>
          <h3 className="font-semibold text-lg text-zinc-300">
            Neurotech Labs
          </h3>
          <p className="text-[11px] text-zinc-500 mt-1">
            Affiliated with Postman API Labs
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-5 px-4">
          {navItems.map(({ label, href, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-4 text-lg font-medium transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 stroke-[1.75]" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}