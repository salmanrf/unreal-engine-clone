"use client";

import HeroTitle from "./title";
import HeroBackground from "./background";

export default function HeroSection() {
  return (
    <main className="relative mt-13 h-[calc(100vh-52px)] flex flex-col justify-center items-center">
      <HeroBackground />
      <HeroTitle />
    </main>
  );
}
