"use client";

import { useMediaQuery } from "usehooks-ts";

import HeaderLogos from "@/components/header/header-logos";
import { Navbar } from "./navbar";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="fixed left-0 right-0 flex justify-between items-center bg-darkBlue h-13 pl-2 z-10 overflow-x-hidden overflow-y-visible">
      <HeaderLogos />
      <Navbar />
    </header>
  );
}
