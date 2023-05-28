import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return (
    <div
      className="relative flex flex-col px-6 justify-center items-center text-white text-center"
      style={{
        opacity: isMounted ? 1 : 0,
        transform: `translateY(${isMounted ? "0" : "-0.75rem"})`,
        transition: "all 0.4s ease-in",
      }}
    >
      <h1 className="mb-6 text-[40px] font-brutal-light">
        The world’s most open and advanced real-time 3D creation tool
      </h1>
      <div className="btn-blue py-3 px-6 text-xs font-bold uppercase border-2 font-brutal-bold">
        Learn more about ue5
      </div>
      <div className="scroll-down-indicator mt-14 w-10 h-16 flex justify-center items-center">
        <div className="w-0.5 h-full bg-white"></div>
      </div>
    </div>
  );
}
