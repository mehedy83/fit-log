# 💪 FitLog — Workout Library

FitLog is a modern, responsive workout library built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It allows users to browse workouts, view detailed exercise information, create a daily workout plan, and save workouts for later.

🔗 **Live Demo:** https://fit-log-jet-seven.vercel.app/

---

## 📌 Project Overview

FitLog is a dark-themed workout companion designed to make workout planning simple and organized.

Users can:

* Browse a workout library
* View detailed workout information
* Add workouts to today's plan
* Save workouts for later
* Track planned exercises, duration, and calories
* Mark workouts as completed
* Remove workouts from their plan
* Sort workouts by duration, calories, or rating
* Use the application on mobile, tablet, and desktop

Workout information is loaded dynamically from the FitLog API.

---

## ✨ Features

### 🏋️ Workout Library

* Displays workouts fetched from the FitLog API
* Responsive workout-card grid
* Workout images and category badges
* Equipment information
* Duration, calories, and rating statistics

### 📋 Today's Plan

* Add workouts to today's workout plan
* Maximum of five workouts
* Live exercise, duration, and calorie metrics
* Remove workouts from the plan
* Mark workouts as completed
* View workout details directly from the plan

### 🔖 Saved Workouts

* Save workouts for later
* Separate Saved tab
* Live saved-workout counter in the navbar

### 🔍 Workout Details

* Dynamic workout detail pages
* Large workout image
* Workout description
* Category tags
* Equipment and difficulty
* Sets and reps
* Duration and calories
* Rating
* Step-by-step instructions

### 🔄 Sorting

Workouts can be sorted by:

* Duration
* Calories
* Rating

### 🔔 Toast Notifications

Interactive actions provide feedback when:

* A workout is added to the plan
* A workout is saved
* A workout is marked as done
* A workout is removed

### 📱 Responsive Design

The application is optimized for:

* 📱 Mobile
* 💻 Tablet
* 🖥️ Desktop

### ⚡ Loading & Error States

* Loading animation while workout data is fetched
* Custom 404 page for invalid routes
* Dynamic workout routes

---

## 🛠️ Technologies Used

| Technology             | Purpose                       |
| ---------------------- | ----------------------------- |
| **Next.js**            | React framework               |
| **React**              | UI development                |
| **TypeScript**         | Type-safe development         |
| **Next.js App Router** | Routing and page navigation   |
| **Tailwind CSS**       | Styling and responsive design |
| **Lucide React**       | UI icons                      |
| **React Hot Toast**    | Toast notifications           |
| **FitLog API**         | Workout data                  |
| **netlify**            | Deployment                    |
