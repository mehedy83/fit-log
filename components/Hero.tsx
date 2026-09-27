import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0e] px-5 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c] sm:min-h-[300px] lg:min-h-[330px]">

          
          <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-center px-6 py-10 sm:px-8 lg:min-h-[330px] lg:w-[58%] lg:px-7">

            
            <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.18em] text-[#ccff00] sm:text-[9px]">
              WORKOUT LIBRARY
            </p>

            
            <h1 className="max-w-[500px] text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-[48px]">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            
            <p className="mt-4 max-w-[390px] text-[9px] leading-[1.5] text-zinc-500 sm:text-[10px]">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today&apos;s plan, and
              watch the week&apos;s work add up.
            </p>

            
            <Link
              href="#library"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-[4px] bg-[#ccff00] px-4 py-2 text-[8px] font-black uppercase tracking-wide text-black transition hover:bg-white sm:px-5 sm:py-2.5"
            >
              Browse Workouts
              <span className="text-[10px]">→</span>
            </Link>
          </div>

          
          <div className="absolute right-0 top-0 h-full w-[48%] sm:w-[45%] lg:w-[44%]">
            <Image
              src="/banner.png"
              alt="FitLog workout"
              fill
              priority
              className="object-contain object-right"
            />

            
            <div className="absolute inset-0 bg-gradient-to-r from-[#15171c] via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}