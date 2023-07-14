import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { logo } from "../Assets";
import { AiOutlineHome, AiOutlineShop, AiOutlineLogin } from "react-icons/ai";
const Header = () => {
  const links = [
    { name: "Home", to: "/", icon: <AiOutlineHome className="icons" /> },
    { name: "Shop", to: "/", icon: <AiOutlineShop className="icons" /> },
    { name: "Login", to: "/", icon: <AiOutlineLogin className="icons" /> },
  ];

  const [open, setopen] = useState(false);

  return (
    <header className="flex relative bg-transparent z-10  px-10 py-8 sm:p-6 sm:flex-col items-center  sm:items-start justify-between sm:justify-center">
      <img className="w-[15vh] sm:w-20" src={logo} alt="img" />

      <div
        onClick={() => setopen(!open)}
        className="hidden sm:block absolute right-0 px-4"
      >
        {open ? (
          <GrFormClose className="z-10 text-[5vh] " />
        ) : (
          <BiMenuAltRight className="z-10 text-[5vh]" />
        )}
      </div>

      <ul className="flex sm:hidden">
        {links.map((e) => {
          return (
            <li key={e.name} className="px-5 font-semibold">
              <Link to={e.to}>{e.name}</Link>
            </li>
          );
        })}
      </ul>

      <ul
        className={`hidden  sm:block py-4   sm:absolute sm:top-0 sm:items-start sm:justify-start  sm:bg-white sm:w-[60%]  sm:border-r-2 sm:h-full ${
          open ? "top-0 left-0" : "left-[-100%]"
        } duration-300`}
      >
        <div className="flex items-center p-4">
          <img src={logo} className=" mr-3 w-10 " alt="img" />
          <div className="mt-1">
            <h1 className="leading-4 font-bold text-headingColor text-base">
              Meranti Clothing
            </h1>
            <p className=" text-grey text-xs">Company By Meranti Group</p>
          </div>
        </div>

        <div className="px-5 w-full">
          <input
            type="search"
            className="w-full placeholder:text-xs bg-ghost placeholder:text-paragraphColor px-3 py-1 rounded-full"
            placeholder="Search"
          />
        </div>

        <div key={""} className=" mt-6  pb-4  w-full">
          <h3 className="hidden mx-5 sm:block font-medium tracking-wide text-xs font-roboto text-paragraphColor">
            Overview
          </h3>
          {links.map((e) => (
            <li
              key={e.name}
              className="px-3 
            sm:mt-2 
            sm:pl-7
            sm:w-[100%] 
            sm:py-1
            sm:text-xs
            sm:font-semibold
            sm:text-semiblack
            sm:hover:bg-semiblack 
            sm:cursor-pointer 
            duration-300 
            sm:hover:text-white 
             "
            >
              <Link className="flex" to={e.to}>
                {e.icon}
                {e.name}
              </Link>
            </li>
          ))}

          <div className="absolute left-[10%]  mt-5 w-[80%]   h-[0.5px] bg-grey"></div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
