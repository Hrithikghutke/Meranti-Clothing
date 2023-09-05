import React, { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "../Assets";

function Header() {
  const [user, setuser] = useState(true);
  const [open, setopen] = useState();

  let links = [
    { name: "home", to: "/" },
    { name: "shop", to: "/" },
    { name: "about", to: "/" },
    { name: "contact", to: "/" },
  ];

  return (
    <header>
      <div className="grid relative grid-cols-3 sm:grid-cols-1 px-[8vw] py-1">
        <div className="col-span-1 flex items-center justify-start ">
          <img className="w-[120px] sm:w-[80px]" src={logo} alt="img" />
        </div>
        <div
          className={`col-span-2 grid grid-cols-2 transition-all duration-300 ease-in 
          sm:grid-cols-1 sm:absolute sm:bg-white sm:z-10 sm:w-full sm:left-0 sm:px-10  
          ${open ? "sm:top-[0px]" : "sm:top-[-300px]"}`}
        >
          <div className="">
            <ul className="flex justify-center items-center h-full sm:flex-col sm:items-start sm:pt-8">
              {links.map((e) => (
                <li key={e.name} className="py-2">
                  <Link className="links" to={e.to}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex sm:pb-4 justify-center items-center ">
            <Link className="button">Login</Link>
            <Link className="accentButton">Signup</Link>
          </div>
        </div>
        <div onClick={() => setopen(!open)} className="hidden sm:block">
          {open ? <X className="menu" /> : <Menu className="menu" />}
        </div>
      </div>
    </header>
  );
}

export default Header;
