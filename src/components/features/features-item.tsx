"use client";

import { Feature } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface Props extends Feature {
  observer: IntersectionObserver;
}

export default function FeaturesItem({ title, image, heading, url, observer }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [observer]);

  return (
    <div
      ref={ref}
      className="features-item w-[83.3vw] flex flex-col mb-6"
      onClick={() => router.push(url)}
    >
      <div className="relative  h-[46.8vw] max-w-full ">
        <Image src={image} fill className="max-w-full" alt="featured-image" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(360deg, rgb(14, 17, 40) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>
      </div>
      <div className="relative text -mt-6 flex flex-col text-white">
        <div className="bottom-0 text-xs-1 uppercase font-fira-mono font-medium">{title}</div>
        <div className="mt-6 text-3xl font-brutal-light">{heading}</div>
      </div>
    </div>
  );
}
