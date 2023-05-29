"use client";

import { News } from "@/types/news";
import { useEffect, useRef } from "react";

interface Props extends Omit<News, "url"> {
  observer: IntersectionObserver;
  onClick: () => void;
}

export default function NewsItem({ title, summary, onClick, url_name, observer }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [observer]);

  return (
    <div ref={ref} className="features-item flex flex-col m-3 pt-6 pb-10">
      <div className="h-0.5 bg-blue-gradient mb-5.5"></div>
      <h3 className="mb-2 text-1.5xl text-primaryDark">{title}</h3>
      <p className="mb-6 text-base text-secondaryDark">{summary}</p>
      <div
        className="btn-blue py-3 px-6 self-start font-brutal-bold text-primaryDark text-xs-1 cursor-pointer border border-blue-gradient uppercase"
        onClick={onClick}
      >
        {url_name}
      </div>
    </div>
  );
}
