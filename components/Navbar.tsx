"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        
        <Link
          href="/"
          className="text-xl font-black tracking-[0.18em] text-white sm:text-2xl"
        >
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-wider transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold uppercase tracking-wider transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-black transition hover:bg-white"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>

      
      <div className="border-t border-zinc-800 md:hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-5 py-3">
          <Link
            href="/"
            className={`text-xs font-bold uppercase tracking-widest ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-zinc-400"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-xs font-bold uppercase tracking-widest ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-zinc-400"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}