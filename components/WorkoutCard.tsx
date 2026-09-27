import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c] transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600"
    >
      
      <div className="relative overflow-hidden bg-zinc-800">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-85 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      
      <div className="p-3.5">
        
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.slice(0, 3).map((muscle) => (
            <span
              key={muscle}
              className="rounded-[12px] bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        
        <h2 className="mt-3 truncate text-[14px] font-black uppercase leading-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h2>

        
        <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500">
          {workout.equipment}
        </p>

        
        <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-3 text-[13px] text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="inline-flex items-center gap-1">
            <Flame size={11} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="inline-flex items-center gap-1">
            <Star size={11} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}