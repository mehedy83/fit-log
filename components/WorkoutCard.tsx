import Link from "next/link";
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
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]"
    >
     
      <div className="relative overflow-hidden bg-zinc-800">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

       
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#ccff00]/40 bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ccff00] backdrop-blur"
            >
              {muscle}
            </span>
          ))}
        </div>
      </div>

      
      <div className="p-5">
        <h2 className="text-lg font-black uppercase leading-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        
        <div className="mt-5 grid grid-cols-3 border-t border-zinc-800 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-300">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-300">
              {workout.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
              Rating
            </p>
            <p className="mt-1 text-sm font-bold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}