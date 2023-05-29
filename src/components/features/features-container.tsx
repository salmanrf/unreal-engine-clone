"use client";

import { FeaturesItem } from "@/components/features";
import { items } from "./items";
import { useEffect, useState } from "react";

export default function FeaturesContainer() {
  const [intObserver, setIntObserver] = useState(new IntersectionObserver(intersectionCallback));

  useEffect(() => {
    const intObserver = new IntersectionObserver(intersectionCallback, {
      root: null,
    });

    setIntObserver(intObserver);

    return () => {
      if (intObserver) {
        intObserver.disconnect();
      }
    };
  }, []);

  function intersectionCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("item-visible");
      } else {
        entry.target.classList.remove("item-visible");
      }
    });
  }

  return (
    <div className="features-container flex flex-col w-full px-4 md:px-6 overflow-hidden">
      {items.map(({ image, url, title, heading }, index) => (
        <FeaturesItem
          key={url + index}
          observer={intObserver}
          image={image}
          url={url}
          title={title}
          heading={heading}
        />
      ))}
    </div>
  );
}
