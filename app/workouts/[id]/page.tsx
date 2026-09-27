import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

import {
  ArrowLeft,
  Clock3,
  Flame,
  Star,
  Dumbbell,
  Gauge,
  Repeat,
} from "lucide-react";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  try {
    const workout = await getWorkoutById(id);

    return (
      <main className="min-h-screen bg-[#0b0c0e]">

        
        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border rounded-[8px]  px-2 py-2 text-[12px] font-bold uppercase tracking-wider text-zinc-500 transition hover:text-[#ccff00]"
          >
            <ArrowLeft size={13} />
            Back To Library
          </Link>
        </div>

        
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-12">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            
            <div className="relative h-[350px] overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c] sm:h-[450px] lg:h-[600px]">

              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </div>

            
            <div className="flex flex-col justify-center">

              
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-[3px] bg-[#ccff00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              
              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                {workout.name}
              </h1>

              
              <p className="mt-5 max-w-xl text-[14px] leading-7 text-zinc-500">
                {workout.description}
              </p>

              
              <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800 bg-[#15171c]">

                
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Dumbbell size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Equipment
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-white">
                    {workout.equipment}
                  </span>
                </div>

               
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Gauge size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Difficulty
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-white">
                    {workout.difficulty}
                  </span>
                </div>

                
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Repeat size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Sets / Reps
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-white">
                    {workout.sets} / {workout.reps}
                  </span>
                </div>


                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Clock3 size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Duration
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-white">
                    {workout.duration} min
                  </span>
                </div>

                
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Flame size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Calories
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

              
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Star size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Rating
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-bold text-[#ccff00]">
                    <Star size={11} fill="currentColor" />
                    {workout.rating}
                  </span>
                </div>

              </div>

              
              <div className="mt-8">

                <h2 className="text-sm font-black uppercase tracking-wider text-white">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map(
                    (instruction, index) => (
                      <li
                        key={index}
                        className="flex gap-3"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-black text-black">
                          {index + 1}
                        </span>

                        <p className="text-[14px] leading-5 text-zinc-500">
                          {instruction}
                        </p>
                      </li>
                    ),
                  )}
                </ol>

              </div>

              
              <WorkoutActions workout={workout} />

            </div>

          </div>

        </section>
      </main>
    );
  } catch {
    notFound();
  }
}