"use client";

import { useMediaQuery } from "usehooks-ts";

import HeaderLogos from "@/components/header/header-logos";
import { Navbar } from "./navbar";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log("isMobile", isMobile);

  return (
    <header className="relative flex justify-between items-center bg-darkBlue h-13 pl-2">
      <HeaderLogos />
      <Navbar />
    </header>
  );
}
