import React, { useState } from "react";
import { Link } from 'react-scroll';
import websitelogo from '../images/websitelogo.png';
import Slide from 'react-reveal/Slide';


const Navbar = () => {
  const [click, setClick] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function handleClick() {
    setClick(!click);
    handleMenu();
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  let menu

  if (showMenu) {
    menu =
      <Slide top>
        <div className="z-10 absolute w-full text-white text-3xl font-sarabun font-semibold bg-black shadow-lg">
          <Link className="block py-2 px-6 hover:text-amber-400 hover:underline cursor-pointer text-right" to="about" smooth="true" onClick={handleClick}>About</Link>
          <Link className="block py-2 px-6 hover:text-amber-400 hover:underline cursor-pointer text-right" to="skills" smooth="true" onClick={handleClick}>Skills</Link>
          <Link className="block py-2 px-6 hover:text-amber-400 hover:underline cursor-pointer text-right" to="projects" smooth="true" onClick={handleClick}>Projects</Link>
          <Link className="block py-2 px-6 pb-6 hover:text-amber-400 hover:underline cursor-pointer text-right" to="contact" smooth="true" onClick={handleClick}>Contact</Link>
        </div>
      </Slide>
  }

  return (
    <section id="nav">
      <Slide top>
        <nav className="z-20 flex justify-between items-center h-20 text-white text-lg relative shadow-xl bg-black overflow-hidden" role="navigation">
          <Link to='nav' className="pl-8 cursor-pointer">
            <img src={websitelogo} alt="TJ" className="w-16 mx-auto" />
          </Link>
          <div className="px-4 cursor-pointer md:hidden">
            <button className="mobile-menu-button focus:outline-none w-6" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
          <div className="pr-8 md:block hidden text-xl font-sarabun font-semibold">
            <Link className="p-4 cursor-pointer hover:text-amber-400 hover:underline" to="about" smooth="true">About</Link>
            <Link className="p-4 cursor-pointer hover:text-amber-400 hover:underline" to="skills" smooth="true">Skills</Link>
            <Link className="p-4 cursor-pointer hover:text-amber-400 hover:underline" to="projects" smooth="true">Projects</Link>
            <Link className="p-4 cursor-pointer hover:text-amber-400 hover:underline" to="contact" smooth="true">Contact</Link>
          </div>
        </nav>
      </Slide>

      {/*Mobile menu*/}
      {menu}
    </section>
  );
};

export default Navbar;
