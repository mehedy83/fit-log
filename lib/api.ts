import type { Workout } from "@/types/workout";

const API_URL =
  "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workouts: ${response.status}`,
    );
  }

  const workouts: Workout[] = await response.json();

  return workouts;
}

export async function getWorkoutById(
  id: string,
): Promise<Workout> {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch workout: ${response.status}`,
    );
  }

  const workout: Workout = await response.json();

  return workout;
}