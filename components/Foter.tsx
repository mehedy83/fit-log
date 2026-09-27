import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0b0c0e]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="FitLog logo"
              width={22}
              height={22}
              className="h-5 w-5 object-contain"
            />

            <span className="text-[18px] font-black uppercase tracking-[0.12em] text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
            </span>
          </Link>

          
          <p className="text-[12px] uppercase tracking-wider text-zinc-600">
            © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}