"use client";

import { useMemo, useState } from "react";
import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutGrid({
  workouts,
}: WorkoutGridProps) {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sorted.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned,
      );
    }

    if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="bg-[#0b0c0e] px-5 pb-16 pt-7 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
              THE LIBRARY
            </h2>

            <p className="mt-1 text-[9px] text-zinc-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-[9px] font-bold uppercase tracking-wider text-zinc-500"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value as SortOption,
                  )
                }
                className="appearance-none rounded border border-zinc-700 bg-[#15171c] py-2 pl-3 pr-8 text-[9px] font-semibold text-zinc-300 outline-none transition focus:border-[#ccff00]"
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

              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-zinc-500">
                ▼
              </span>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
}