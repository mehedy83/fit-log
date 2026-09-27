"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const workouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

 const handleRemove = (id: number) => {
  removeFromPlan(id);
  toast.success("Workout removed");
};

  const handleDone = () => {
    toast.success("Workout marked as done");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-xs text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
            <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {plan.length}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
            <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-[#15171c] p-4">
            <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        
        <div className="mt-8 flex border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-4 pb-3 text-[9px] font-black uppercase tracking-wider transition ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-zinc-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-4 pb-3 text-[9px] font-black uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-zinc-500 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        
        {workouts.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="max-w-sm text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-[#15171c]">
                <Flame className="text-zinc-600" size={20} />
              </div>

              <h2 className="mt-5 text-xl font-black uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-xs leading-6 text-zinc-500">
                {activeTab === "plan"
                  ? "Add workouts from the library to build today's plan."
                  : "Save workouts from the library and they will appear here."}
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded bg-[#ccff00] px-5 py-3 text-[9px] font-black uppercase tracking-wide text-black transition hover:bg-white"
              >
                Go To Workouts
              </Link>
            </div>
          </div>
        ) : (
         
          <div className="mt-6 space-y-3">
            {workouts.map((workout) => (
              <article
                key={workout.id}
                className="flex flex-col gap-4 rounded-lg border border-zinc-800 bg-[#15171c] p-3 sm:flex-row sm:items-center"
              >
               
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-32">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.slice(0, 2).map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-sm bg-[#ccff00] px-2 py-1 text-[7px] font-black uppercase text-black"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-2 truncate text-lg font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-[9px] uppercase tracking-wide text-zinc-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-[9px] text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={12} />
                      {workout.duration} min
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Flame size={12} />
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Star size={12} />
                      {workout.rating}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded border border-zinc-700 px-3 py-2 text-center text-[8px] font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={handleDone}
                      className="inline-flex items-center justify-center gap-1 rounded bg-[#ccff00] px-3 py-2 text-[8px] font-black uppercase text-black transition hover:bg-white"
                    >
                      <Check size={12} />
                      Mark as Done
                    </button>
                  )}

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => handleRemove(workout.id)}
                      className="inline-flex items-center justify-center gap-1 rounded border border-zinc-700 px-3 py-2 text-[8px] font-black uppercase text-zinc-400 transition hover:border-red-500 hover:text-red-400"
                    >
                      <X size={12} />
                      Remove
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}