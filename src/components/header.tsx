"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "about", href: "#about" },
  { name: "results", href: "#results" },
  { name: "watch", href: "#watch" },
  { name: "connect", href: "#connect" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full px-2">
      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl rounded-2xl border px-6 transition-all duration-300 lg:px-12",
          scrolled
            ? "max-w-4xl border-white/10 bg-black/60 backdrop-blur-xl lg:px-5"
            : "border-transparent"
        )}
      >
        <div className="relative flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="text-lg font-[family-name:var(--font-unbounded)] tracking-tight">
            oleg melnikov
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block absolute inset-0 m-auto w-fit h-fit">
            <ul className="flex gap-8 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://www.youtube.com/@Oleg-Melnikov"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            <YoutubeIcon className="size-4" />
            youtube
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 -m-2 p-2 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-zinc-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://www.youtube.com/@Oleg-Melnikov"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-lg transition-colors hover:bg-white/20"
            >
              <YoutubeIcon className="size-5" />
              youtube
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
