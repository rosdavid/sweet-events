"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Circle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/about", label: "Studio" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 md:py-6 max-w-500 mx-auto">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Circle className="h-8 w-8 text-white fill-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-2 w-2 bg-black rounded-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-light text-xl md:text-2xl text-white tracking-[-0.02em] leading-none">
                  SWEET EVENTS
                </span>
                <span className="text-[8px] md:text-[9px] text-white/60 tracking-[0.3em] uppercase mt-0.5">
                  Fotografía & Video
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative overflow-hidden flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.15em] text-black bg-white px-8 py-3.5 hover:bg-white/90 transition-all duration-300 rounded-full"
            >
              <span className="relative z-10">Empezemos</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <div className="absolute inset-0 bg-linear-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-black transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-transform duration-700 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <Circle className="h-7 w-7 text-white fill-white" />
              <span className="font-light text-xl text-white tracking-[-0.02em]">
                Sweet Events
              </span>
            </Link>
            <button
              className="p-2.5 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 flex flex-col justify-center px-6 py-12">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group py-4 border-b border-white/10 last:border-0"
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[10px] font-light text-white/40 tracking-wider">
                        0{index + 1}
                      </span>
                      <span className="font-light text-4xl md:text-5xl text-white tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Footer */}
          <div className="px-6 py-8 border-t border-white/10">
            <Link
              href="/contact"
              className="flex items-center justify-between w-full bg-white text-black px-6 py-4 rounded-full hover:bg-white/90 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em]">
                Empezemos
              </span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <div className="flex items-center justify-center gap-6 mt-6 text-[10px] text-white/40 uppercase tracking-wider">
              <span>Fotografía</span>
              <span>•</span>
              <span>Video</span>
              <span>•</span>
              <span>Contenido</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
