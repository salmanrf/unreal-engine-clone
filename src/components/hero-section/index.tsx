export default function HeroSection() {
  return (
    <main className="mt-13 h-[calc(100vh-52px)] flex flex-col justify-center items-center">
      <div
        className="fixed top-0 left-0 right-0 h-[80vh]"
        style={{
          background: "url(/hero.jpg) center center / cover no-repeat",
        }}
      >
        <div
          className="h-full"
          style={{ background: "linear-gradient(0deg, rgb(14, 17, 40), rgba(13, 16, 35, 0) 100%)" }}
        ></div>
      </div>
      <div className="relative flex flex-col px-6 justify-center items-center text-white text-center">
        <h1 className="mb-6 text-[40px]">
          The world’s most open and advanced real-time 3D creation tool
        </h1>
        <div className="btn-blue py-3 px-6 text-xs font-bold uppercase border-2">
          Learn more about ue5
        </div>
        <div className="scroll-down-indicator mt-14 w-10 h-16 flex justify-center items-center">
          <div className="w-0.5 h-full bg-white"></div>
        </div>
      </div>
    </main>
  );
}
