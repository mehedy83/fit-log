"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  done: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined,
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedDone = localStorage.getItem("fitlog-done");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedDone) {
      setDone(JSON.parse(storedDone));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("fitlog-done", JSON.stringify(done));
  }, [done]);

  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      if (
        currentPlan.some(
          (item) => item.id === workout.id,
        )
      ) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (workout) => workout.id !== id,
      ),
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((currentSaved) => {
      if (
        currentSaved.some(
          (item) => item.id === workout.id,
        )
      ) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (workout) => workout.id !== id,
      ),
    );
  };

  const markAsDone = (id: number) => {
    setPlan((currentPlan) => {
      const workout = currentPlan.find(
        (item) => item.id === id,
      );

      if (!workout) {
        return currentPlan;
      }

      setDone((currentDone) => {
        if (
          currentDone.some(
            (item) => item.id === workout.id,
          )
        ) {
          return currentDone;
        }

        return [...currentDone, workout];
      });

      return currentPlan.filter(
        (item) => item.id !== id,
      );
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        done,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider",
    );
  }

  return context;
}