import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <h1>FitLog</h1>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.name}</h2>
          <p>{workout.duration} minutes</p>
        </div>
      ))}
    </main>
  );
}