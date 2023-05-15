import HamburgerBtn from "@/components/hamburger-btn";
import NavItem from "./nav-item";
import { useToggle } from "usehooks-ts";
import { SearchIcon } from "@/components/icons";
import IntlIcon from "@/components/icons/intl-icon";

export function Navbar() {
  const [navIsShown, toggleShowNav] = useToggle(false);

  return (
    <div className="self-stretch flex-shrink-0 flex flex-col items-center bg-darkerBlue overflow-x-hidden overflow-y-visible">
      <HamburgerBtn onClick={toggleShowNav} isActive={navIsShown} />
      <nav
        className={`absolute top-full ${
          navIsShown ? "right-0" : "-right-full"
        } w-[calc(100%-48px)] h-[calc(100vh-52px)] bg-darkerBlue text-whiteSemiTransparent transition-all ease-in-out duration-200 `}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <ul className="list-none">
            <NavItem title="Products" />
            <NavItem title="Solutions" />
            <NavItem title="Events" />
            <NavItem title="Learn" />
            <NavItem title="Community" />
            <NavItem title="Support" />
            <NavItem title="Marketplace" className="border-b-0" />
          </ul>
          <div className="flex flex-col shdow-[0px -4px 15px -4px rgba(0, 0, 0, 0.5)]">
            <div className="p-6 border-b border-b-whiteBorder">
              <div className="flex items-center bg-grey h-13">
                <div className="flex flex-shrink-0 w-13 h-full justify-center items-center">
                  <SearchIcon width="24px" height="24px" className="fill-whiteSemiTransparent" />
                </div>
                <input
                  type="text"
                  name="keyword"
                  placeholder="Search"
                  className="flex-grow text-base text-whiteSemiTransparent bg-grey bg-opacity-0 outline-none"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-grow justify-center items-center border-r border-r-whiteBorder text-xxs uppercase">
                Sign In
              </div>
              <div className="w-26 h-13 flex justify-center items-center">
                <IntlIcon width="19px" height="18px" className="fill-whiteSemiTransparent" />
              </div>
            </div>
            <div className="h-13 flex justify-center items-center bg-blue-gradient text-xxs text-black uppercase font-medium">
              Download
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
