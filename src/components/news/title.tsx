"use client";

import { useEffect, useRef } from "react";

export default function NewsTitle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="news-title pb-14 flex flex-col justify-center text-center">
      <h2 className="font-brutal-light text-4.5xl">Create Without Limits</h2>
      <div className="flex flex-col mt-4 font-brutal-regular text-base text-secondaryGrey leading-8">
        <p className="">
          With Unreal Engine, you can bring amazing real-time experiences to life using the world’s
          most advanced real-time 3D creation tool.
        </p>
        <p className="">
          From first projects to the most demanding challenges, our free and accessible resources
          and inspirational community empower everyone to realize their ambitions.
        </p>
      </div>
    </div>
  );
}
