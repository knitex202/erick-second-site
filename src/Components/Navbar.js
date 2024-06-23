import React, { useState } from "react";
import hamburgerBar from "../Assets/hamburgerBar.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" absolute z-50 flex w-full 2xl:top-8 justify-center">
      <div className="flex w-full xl:hidden py-2 bg-white justify-center">
        <div className="flex flex-col w-full items-center">
          <img
            src={hamburgerBar}
            alt="menuBar"
            className="w-12 h-12 cursor-pointer"
            onClick={handleMenu}
          />
          <div className="flex flex-col w-full items-center">
            {showMenu ? (
              <ul className="flex flex-col w-full py-4 select-none font-semibold text-center lg:text-4xl ">
                <Link to={"/"}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>HOME</p>
                  </li>
                </Link>
                <Link to={"/campaigns"}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>CAMPAIGNS</p>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>ABOUT ME</p>
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>CONTACT ME</p>
                  </li>
                </Link>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className="hidden xl:flex">
        <ul className="flex mt-4 gap-16 font-semibold lg:text-4xl text-white">
          <li className="cursor-pointer hover:text-teal-400">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-400">
            <Link to={"/campaigns"}>CAMPAIGNS</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-400">
            <Link to={"/about"}>ABOUT ME</Link>
          </li>
          <li className="cursor-pointer hover:text-teal-400">
            <Link to={"/contact"}>CONTACT ME</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
