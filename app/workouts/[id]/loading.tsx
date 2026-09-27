export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e]">
      <div className="text-center">

        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-zinc-700 border-t-[#ccff00]" />

        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          Loading workout...
        </p>

      </div>
    </main>
  );
}