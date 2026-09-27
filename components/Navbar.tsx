"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0b0c0e]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="FitLog home"
        >
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={22}
            height={22}
            className="h-5 w-5 object-contain"
          />

          <span className="text-[18px] font-black tracking-[0.12em] text-white">
            FITLOG
          </span>
        </Link>

        
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          <Link
            href="/"
            className={`text-[14px] font-bold uppercase tracking-wider transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-[14px] font-bold uppercase tracking-wider transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[12px] font-black uppercase tracking-wide text-black transition hover:bg-white"
          >
            Plan <span className="ml-0.5">{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-700 px-2.5 py-1 text-[12px] font-black uppercase tracking-wide text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            Saved <span className="ml-0.5">{saved.length}</span>
          </Link>
        </div>
      </div>

      
      <div className="border-t border-zinc-800 md:hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-5 py-2.5">
          <Link
            href="/"
            className={`text-[10px] font-bold uppercase tracking-[0.16em] transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-zinc-500"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-[10px] font-bold uppercase tracking-[0.16em] transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-zinc-500"
            }`}
          >
            My Plan
          </Link>
        </nav>
      </div>
    </header>
  );
}