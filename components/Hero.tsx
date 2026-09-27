import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0e] px-5 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[310px] overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c] lg:grid-cols-[1.08fr_0.92fr] lg:min-h-[340px]">
          
          
          <div className="flex flex-col justify-center px-6 py-9 sm:px-8 lg:px-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ccff00] sm:text-[12px]">
              WORKOUT LIBRARY
            </p>

            <h1 className="mt-3 max-w-[560px] text-[38px] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px]">
              TRAIN WITH INTENT.LOG
              <br />
              EVERY SET.
            </h1>

            <p className="mt-5 max-w-[440px] text-[10px] leading-[1.65] text-zinc-500 sm:text-[14px]">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today&apos;s plan, and
              watch the week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-[3px] bg-[#ccff00] px-4 py-2.5 text-[12px] font-black uppercase tracking-wide text-black transition hover:bg-white"
            >
              Browse Workouts
            </Link>
          </div>

          
          <div className="relative flex min-h-[220px] items-center justify-center lg:min-h-0">
            <Image
              src="/banner.png"
              alt="FitLog workout"
              fill
              priority
              className="object-contain object-center p-4 sm:p-6 lg:p-7"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#15171c] to-transparent lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}