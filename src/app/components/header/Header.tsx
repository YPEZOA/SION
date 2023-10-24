import { colors } from "@/constants/colors";
import React from "react";
import { Link, useLocation } from "react-router-dom";
interface LinkProps {
  path: string;
  children: React.ReactNode;
}
const Navlink = ({ path, children }: LinkProps) => {
  const { pathname } = useLocation();
  const pathMatched = path === pathname;

  return (
    <Link
      style={{
        backgroundColor: pathMatched ? "rgb(0 255 243 / 31%)" : undefined,
        color: pathMatched ? colors.white : undefined,
        transition: "all .5s ease",
      }}
      className="text-white text-md uppercase hover:text-[#009B94] p-3 rounded-md"
      to={path}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    // shadow-[0_1px_10px_#000] para shadow cuando se haga scroll
    <nav className="shadow-[0_0.5px_8px_#000] bg-[#1E1E1E]/70 backdrop-blur-sm fixed w-full z-10">
      <div className="mx-auto w-11/12 flex justify-between items-center h-14 md:h-20 ">
        <Link to="/">
          <div className="flex items-center transition ease-in-out delay-50 duration-300 hover:scale-105 cursor-pointer">
            <img
              loading="lazy"
              className="md:w-[40px]"
              src="/logoSion.png"
              alt="Sion Logo"
              width={30}
            />
            <span className="text-white text-md font-bold ml-1 mt-2">SION</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Navlink path="/predicas">prédicas</Navlink>
          <Navlink path="/escuelas">escuelas</Navlink>
          <Navlink path="/contacto">contacto</Navlink>
          <a href="https://www.radio7fm.cl/" target="blank">
            <img
              loading="lazy"
              className="mb-2 cursor-pointer"
              src="/src/assets/icons/radio7-logo.png"
              alt="Radio7"
              width={130}
              height={0}
            />
          </a>
        </div>
        <button className="md:hidden">
          <img
            src="/src/assets/icons/hamburger-icon.png"
            alt="Hamburguer Menu"
            width={25}
            height={12}
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
