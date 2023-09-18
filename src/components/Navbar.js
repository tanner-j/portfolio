import React, { useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo.svg';
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
        <div className="z-10 absolute w-full text-white text-3xl font-semibold bg-color-primary-light shadow-lg">
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
        <nav className="relative z-20 flex justify-between items-center h-20 text-lg bg-color-primary-light overflow-hidden" role="navigation">
          <Link to='nav' className="pl-8 cursor-pointer">
            <img src={logo} alt="TJ" className="w-10 mx-auto" />
          </Link>
          <div className="px-4 cursor-pointer md:hidden">
            <button className="mobile-menu-button focus:outline-none w-6" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
          <div className="pr-8 md:flex md:gap-x-8 hidden text-xl font-medium">
            <Link className="navbar-link py-4 cursor-pointer" to="about" smooth="true">About</Link>
            <Link className="navbar-link py-4 cursor-pointer" to="skills" smooth="true">Skills</Link>
            <Link className="navbar-link py-4 cursor-pointer" to="projects" smooth="true">Work</Link>
            <Link className="navbar-link py-4 cursor-pointer" to="contact" smooth="true">Contact</Link>
          </div>
        </nav>
      </Slide>

      {/*Mobile menu*/}
      {menu}
    </section>
  );
};

export default Navbar;
