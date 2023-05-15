interface Props {
  onClick: () => void;
  isActive: boolean;
}

export default function HamburgerBtn({ onClick }: Props) {
  return (
    <div
      className="w-12.5 h-full flex flex-col justify-center items-center bg-blue-gradient cursor-pointer"
      onClick={onClick}
    >
      <div className="w-7.5 h-0.75 lg:rounded-sm bg-black lg:bg-white "></div>
      <div className="w-7.5 my-1 h-0.75 lg:rounded-sm bg-black lg:bg-white"></div>
      <div className="w-7.5 h-0.75 lg:rounded-sm bg-black lg:bg-white"></div>
    </div>
  );
}
