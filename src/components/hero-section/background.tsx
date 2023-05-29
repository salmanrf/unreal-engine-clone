import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", detectScrollPosition);

    return () => window.removeEventListener("scroll", detectScrollPosition);
  }, []);

  function detectScrollPosition(e: Event | MouseEvent) {
    if (!ref.current) return;

    const { current: elem } = ref;

    const percentage = (window.scrollY / elem.clientHeight) * 100 * 1.5;

    if (percentage > 100) {
      return setScrollPercentage(100);
    }

    if (percentage < 0) {
      return setScrollPercentage(0);
    }

    setScrollPercentage(percentage);
  }

  return (
    <div
      ref={ref}
      className="absolute h-[80vh] -top-13 left-0 right-0"
      style={{
        opacity: 1 - scrollPercentage / 100,
        background: "url(/hero.jpg) center center / cover no-repeat",
      }}
    >
      <div
        className="h-full"
        style={{ background: "linear-gradient(0deg, rgb(14, 17, 40), rgba(13, 16, 35, 0) 100%)" }}
      ></div>
    </div>
  );
}
