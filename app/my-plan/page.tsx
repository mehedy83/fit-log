"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { useMemo, useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const workouts = useMemo(() => {
    const current =
      activeTab === "plan" ? [...plan] : [...saved];

    if (sortBy === "duration") {
      current.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      current.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned,
      );
    }

    if (sortBy === "rating") {
      current.sort((a, b) => b.rating - a.rating);
    }

    return current;
  }, [activeTab, plan, saved, sortBy]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Workout removed");
    } else {
      removeFromSaved(id);
      toast.success("Removed from saved");
    }
  };

  const handleDone = (id: number) => {
    markAsDone(id);
    toast.success("Workout marked as done");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-6">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-[12px] text-zinc-500">
            Cap of five lifts for today. Finish them, then
            load more.
          </p>
        </div>

         
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c]">
          <div className="border-r border-zinc-800 p-3.5 sm:p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <p className="mt-2 text-xl font-black text-[#ccff00] sm:text-2xl">
              {plan.length}
            </p>
          </div>

          <div className="border-r border-zinc-800 p-3.5 sm:p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <p className="mt-2 text-xl font-black text-white sm:text-2xl">
              {totalMinutes}
            </p>
          </div>

          <div className="p-3.5 sm:p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <p className="mt-2 text-xl font-black text-white sm:text-2xl">
              {totalCalories}
            </p>
          </div>
        </div>

        
        <div className="mt-6 flex flex-col gap-3 border-b border-zinc-800 pb-2 sm:flex-row sm:items-end sm:justify-between">

          <div className="flex">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`border-b-2 px-4 pb-2 text-[10px] font-black uppercase tracking-wider transition ${
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
              className={`border-b-2 px-4 pb-2 text-[10px] font-black uppercase tracking-wider transition ${
                activeTab === "saved"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-transparent text-zinc-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          
          <div className="flex items-center gap-2">
            <label
              htmlFor="plan-sort"
              className="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                id="plan-sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value as SortOption,
                  )
                }
                className="appearance-none rounded-[3px] border border-zinc-700 bg-[#15171c] py-1.5 pl-2.5 pr-7 text-[10px] font-semibold text-zinc-300 outline-none focus:border-[#ccff00]"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[7px] text-zinc-500">
                ▼
              </span>
            </div>
          </div>
        </div>

       
        {workouts.length === 0 ? (
          <div className="flex min-h-[330px] items-center justify-center">
            <div className="max-w-sm text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-[#15171c]">
                <Flame
                  size={18}
                  className="text-zinc-600"
                />
              </div>

              <h2 className="mt-4 text-lg font-black uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-[12px] leading-5 text-zinc-500">
                {activeTab === "plan"
                  ? "Add workouts from the library to build today's plan."
                  : "Save workouts from the library and they will appear here."}
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex rounded-[3px] bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-white"
              >
                Go To Workouts
              </Link>
            </div>
          </div>
        ) : (
          
          <div className="mt-4 space-y-2">
            {workouts.map((workout) => (
              <article
                key={workout.id}
                className="group flex flex-col gap-3 rounded-lg border border-zinc-800 bg-[#15171c] p-2.5 transition hover:border-zinc-700 sm:flex-row sm:items-center"
              >
               
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-md bg-[#111318] sm:h-[78px] sm:w-[125px] sm:aspect-auto">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-contain"
                    sizes="125px"
                  />
                </div>

               
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap gap-1.5">
                    {workout.muscleGroups
                      .slice(0, 2)
                      .map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded-[2px] bg-[#ccff00] px-1.5 py-0.5 text-[10px] font-black uppercase text-black"
                        >
                          {muscle}
                        </span>
                      ))}
                  </div>

                  <h2 className="mt-1.5 truncate text-[12px] font-black uppercase text-white">
                    {workout.name}
                  </h2>

                  <p className="mt-0.5 truncate text-[10px] uppercase tracking-wide text-zinc-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={10} />
                      {workout.duration} min
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Flame size={10} />
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Star size={10} />
                      {workout.rating}
                    </span>
                  </div>
                </div>

              
                <div className="flex shrink-0 items-center gap-1.5 sm:flex-row">
              
                <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-[3px] border border-zinc-700 px-2.5 py-1.5 text-[10px] font-black uppercase text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    View Details
                  </Link>

                 
                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => handleDone(workout.id)}
                      className="inline-flex items-center justify-center gap-1 rounded-[3px] bg-[#ccff00] px-2.5 py-1.5 text-[10px] font-black uppercase text-black transition hover:bg-white"
                    >
                      <Check size={10} />
                      Mark as Done
                    </button>
                  )}

                 
                  <button
                    type="button"
                    aria-label={
                      activeTab === "plan"
                        ? "Remove from plan"
                        : "Remove from saved"
                    }
                    onClick={() => handleRemove(workout.id)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-[3px] border border-zinc-700 text-zinc-500 transition hover:border-red-500 hover:text-red-400"
                  >
                    <X size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}