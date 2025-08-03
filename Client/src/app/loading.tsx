"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-black leading-none select-none">
            Just<span className="text-green-500 font-bold text-5xl sm:text-6xl lg:text-7xl">K</span><span className="text-green-500">aaj</span>
          </h1>
        </div>
        <div className="mt-4 text-green-600 text-lg font-medium animate-pulse">Loading...</div>
      </div>
    </div>
  );
} 