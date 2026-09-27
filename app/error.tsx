"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-5">
      <div className="max-w-md text-center">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
          SOMETHING WENT WRONG
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase text-white">
          Couldn&apos;t load workouts
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          We couldn&apos;t load the workout library right now.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded bg-[#ccff00] px-5 py-2.5 text-xs font-black uppercase text-black transition hover:bg-white"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}