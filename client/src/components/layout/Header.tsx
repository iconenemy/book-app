import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { mainImage } from '../../assets/home-page'
import { blackLogo, whiteLogo } from '../../assets/logo'

import { useScrollDirection } from "../../hooks";
import { NavbarIcons, NavbarSection } from "../navigation";
import { TextField } from "../inputs";
import { ROUTE } from "../../consts";

const Header = () => {

  const { pathname } = useLocation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down") setHoverName("");
  }, [scrollDirection]);

  const [small, setSmall] = useState<boolean>(false);
  const [hoverName, setHoverName] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 0));
    }
  }, []);

  return (
    <>
      <div
        className={`sticky ${pathname === "/" && !small
            ? ""
            : scrollDirection === "down"
              ? "-top-24"
              : "top-0"
          } relative h-24 transition-all ${(small || hoverName !== "") && "bg-white"
          } duration-700 z-30 `}
      >
        <div className="max-w-[1420px] h-full mx-auto flex justify-between items-center">
          <div className="flex justify-around items-center">
            <NavLink to={ROUTE.HOME} className="mr-10">
              <img
                src={`${pathname === "/" && !small && hoverName === ""
                    ? whiteLogo
                    : blackLogo
                  }`}
                className="w-36 h-7 justify-between"
              />
            </NavLink>
            <NavbarSection
              small={small}
              pathname={pathname}
              hoverName={hoverName}
            />
          </div>
          <NavbarIcons
            small={small}
            pathname={pathname}
            hoverName={hoverName}
            setHoverName={setHoverName}
          />
        </div>
        {hoverName === "search" && (
          <div
            onMouseLeave={() => setHoverName("")}
            className="absolute h-96 w-full right-0 top-24 flex flex-col bg-white border-x-[#ccc] border-b-[#ccc] border-[1px] border-transparent z-50"
          >
            <div className="h-full flex items-start px-9 text-xs font-medium">
              <TextField type="text" placeholder="Search" className="text-sm" />
            </div>
          </div>
        )}
      </div>
      {pathname === "/" && (
        <div className="w-100% absolute top-0 left-0 z-20">
          <img src={mainImage} className="w-screen h-screen object-cover" />
          <div className="absolute top-[33%] left-0 right-0 ml-auto mr-auto w-max uppercase text-4xl text-white drop-shadow-2xl shadow-black">
            "The desire to know" is the most powerful human engine.
          </div>
        </div>
      )}
      {hoverName !== "" && (
        <div className="absolute top-0 left-0 w-full bg-[#ccc] opacity-90 z-90"></div>
      )}
    </>
  );
};

export default Header;
