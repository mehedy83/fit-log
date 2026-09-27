"use client";

import { Check, Bookmark, Plus } from "lucide-react";
import toast from "react-hot-toast";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const alreadyInPlan = plan.some(
    (item) => item.id === workout.id,
  );

  const alreadySaved = saved.some(
    (item) => item.id === workout.id,
  );

  const planIsFull = plan.length >= 5;

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast("Already in today's plan.");
      return;
    }

    if (planIsFull) {
      toast.error(
        "Today's plan is full. Maximum 5 workouts.",
      );
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (alreadySaved) {
      toast("Already saved.");
      return;
    }

    saveWorkout(workout);

    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || planIsFull}
        className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-black uppercase tracking-wide transition ${
          alreadyInPlan
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : planIsFull
              ? "cursor-not-allowed bg-zinc-800 text-zinc-500"
              : "bg-[#ccff00] text-black hover:bg-white"
        }`}
      >
        {alreadyInPlan ? (
          <Check size={15} />
        ) : (
          <Plus size={15} />
        )}

        {alreadyInPlan
          ? "In Today's Plan"
          : planIsFull
            ? "Plan Is Full"
            : "Add To Today's Plan"}
      </button>

      
      <button
        type="button"
        onClick={handleSave}
        disabled={alreadySaved}
        className={`inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-xs font-black uppercase tracking-wide transition ${
          alreadySaved
            ? "cursor-not-allowed border-zinc-700 text-zinc-500"
            : "border-zinc-600 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
        }`}
      >
        {alreadySaved ? (
          <Check size={15} />
        ) : (
          <Bookmark size={15} />
        )}

        {alreadySaved
          ? "Saved"
          : "Save For Later"}
      </button>

    </div>
  );
}