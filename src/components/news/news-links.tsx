"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewsItem from "@/components/news/news-item";
import { News } from "@/types/news";

interface Props {
  items: News[];
}

export default function NewsLinks({ items }: Props) {
  const router = useRouter();

  const [intObserver, setIntObserver] = useState(new IntersectionObserver(intersectionCallback));

  useEffect(() => {
    const intObserver = new IntersectionObserver(intersectionCallback);

    setIntObserver(intObserver);

    return () => {
      intObserver.disconnect();
    };
  }, []);

  function intersectionCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("item-visible");
      }
    });
  }

  function createOnClick(url_name: string) {
    return () => {
      router.push(`/news/${url_name}`);
    };
  }

  return (
    <div className="grid grid-cols-2">
      {items.map(({ title, url, summary, url_name }, index) => (
        <NewsItem
          key={url + index}
          title={title}
          summary={summary}
          url_name={url_name}
          onClick={createOnClick(url)}
          observer={intObserver}
        />
      ))}
    </div>
  );
}
