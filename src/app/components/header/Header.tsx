import React from "react";
import { Link, useLocation } from "react-router-dom";
import { colors } from "@/constants/colors";
import radioIcon from "src/assets/icons/radio7-logo.png";
import hamburguer from "src/assets/icons/hamburger-icon.png";

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
        color: pathMatched ? colors.orangeSecondary500 : undefined,
        transition: "all .5s ease",
      }}
      className="text-white font-medium text-md uppercase  mx-4 rounded-md"
      to={path}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <nav className="bg-[#1E1E1E]/50 backdrop-blur-sm fixed w-full z-10 h-14 flex items-center">
      <div className="w-11/12 flex justify-between items-center mx-auto">
        <Link to="/">
          <div className="flex items-center transition ease-in-out delay-50 duration-300 hover:scale-105 cursor-pointer">
            <img
              className="md:w-[35px]"
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
          <Navlink path="/casas-avivamiento">casas de avivamiento</Navlink>
          <Navlink path="/contacto">contacto</Navlink>
          <a href="https://www.radio7fm.cl/" target="blank">
            <img
              className="cursor-pointer mb-1"
              src={radioIcon}
              alt="Radio7"
              width={100}
              height={0}
            />
          </a>
        </div>
        <button className="block md:hidden">
          <img src={hamburguer} alt="Hamburguer Menu" width={25} height={12} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
