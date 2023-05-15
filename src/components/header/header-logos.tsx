import Image from "next/image";

export default function HeaderLogos() {
  return (
    <div className="flex flex-grow md:justify-center items-center">
      <div className="w-9 h-9 flex flex-shrink-0 justify-center items-center">
        <Image src="/epic-games.svg" alt="logo" width="36" height="36" className="max-h-10" />
      </div>
      <div className="flex flex-grow justify-center items-center ml-2 mr-6">
        <Image src="/unreal-engine.svg" alt="logo" width="222" height="36" className="max-h-12.5" />
      </div>
    </div>
  );
}
