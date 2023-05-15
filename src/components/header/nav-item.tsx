interface Props {
  title: string;
  className?: string;
}

export default function NavItem({ title, className = "" }: Props) {
  return (
    <li
      className={`w-full h-[65px] px-6 flex items-center border-b border-whiteBorder cursor-pointer ${className}`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="text-xs uppercase">{title}</div>
        <div className="text-lightBlue">{"->"}</div>
      </div>
    </li>
  );
}
