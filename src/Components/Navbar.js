import React, { useState } from "react";
import hamburgerBar from "../Assets/hamburgerBar.png";
import instagram from "../Assets/instagram.png";
import instagramWhite from "../Assets/instagram-white.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");

  const handleActive = (e) => {
    setActive(e.target.innerText);
  }

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" absolute z-50 flex w-full 2xl:top-8 justify-center">
      <div className="flex w-full xl:hidden py-2 bg-white justify-center">
        <div className="flex flex-col w-full items-center">
          <div className="flex w-full justify-center">
            <div className="flex ml-16 w-full justify-end">
          <img
            src={hamburgerBar}
            alt="menuBar"
            className="w-12 h-12 cursor-pointer"
            onClick={handleMenu}
          />
            </div>
            <div className="flex mr-4 w-full justify-end">
          <a href="https://www.instagram.com/mr.erickcedeno/" target="blank" className="self-end">
            <img src={instagram} alt="Instagram" className="cursor-pointer w-12 h-12" />
          </a>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            {showMenu ? (
              <ul className="flex flex-col w-full py-4 select-none font-semibold text-center lg:text-4xl ">
                <Link to={"/"} onClick={handleMenu}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>HOME</p>
                  </li>
                </Link>
                <Link to={"/campaigns"} onClick={handleMenu}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>CAMPAIGNS</p>
                  </li>
                </Link>
                <Link to={"/about"} onClick={handleMenu}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>ABOUT ME</p>
                  </li>
                </Link>
                <Link to={"/contact"} onClick={handleMenu}>
                  <li className="cursor-pointer py-4 hover:bg-gray-200 hover:text-teal-400">
                    <p>CONTACT ME</p>
                  </li>
                </Link>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className="hidden items-center xl:flex">
        <ul className="flex mt-4 gap-16 font-semibold lg:text-4xl text-white">
          <li className="group cursor-pointer hover:text-teal-400 duration-500">
            <Link to={"/"}>HOME</Link>
            <div className="w-0 h-1 bg-teal-400 group-hover:w-full duration-500"/>
          </li>
          <li className="group cursor-pointer hover:text-teal-400 duration-500">
            <Link to={"/campaigns"}>CAMPAIGNS</Link>
            <div className="w-0 h-1 bg-teal-400 group-hover:w-full duration-500"/>
          </li>
          <li className="group cursor-pointer hover:text-teal-400 duration-500">
            <Link to={"/about"}>ABOUT ME</Link>
            <div className="w-0 h-1 bg-teal-400 group-hover:w-full duration-500"/>
          </li>
          <li className="group cursor-pointer hover:text-teal-400 duration-500">
            <Link to={"/contact"}>CONTACT ME</Link>
            <div className="w-0 h-1 bg-teal-400 group-hover:w-full duration-500"/>
          </li>
        </ul>
          <a href="https://www.instagram.com/mr.erickcedeno/" target="blank">
            <img src={instagramWhite} alt="Instagram" className="mt-4 ml-24 cursor-pointer w-12 h-12" />
          </a>
      </div>
    </div>
  );
}

export default Navbar;
