import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import Slide from 'react-reveal/Slide';
import styles from './Navbar.module.css';


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
          <Link className="block py-2 px-6 pb-6 hover:text-amber-400 hover:underline cursor-pointer text-right" to="experience" smooth="true" onClick={handleClick}>Experience</Link>
        </div>
      </Slide>
  }

  return (
    <section id="nav">
      <Slide top>
        <nav className={styles.navbarContainer} role="navigation">
          <Link to='nav' className="pl-8 cursor-pointer">
            <img src={logo} alt="TJ" className="w-10 mx-auto" />
          </Link>
          <div className="px-4 cursor-pointer md:hidden">
            <button className="mobile-menu-button focus:outline-none w-6" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
          <div className="pr-8 md:flex md:gap-x-8 hidden text-xl font-medium">
            <Link className={styles.navbarLink} to="about" smooth="true">About</Link>
            <Link className={styles.navbarLink} to="skills" smooth="true">Skills</Link>
            <Link className={styles.navbarLink} to="projects" smooth="true">Work</Link>
            <Link className={styles.navbarLink} to="experience" smooth="true">Experience</Link>
          </div>
        </nav>
      </Slide>

      {/*Mobile menu*/}
      {menu}
    </section>
  );
};

export default Navbar;
