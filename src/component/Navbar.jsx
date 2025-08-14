import React, { useEffect, useState } from "react";
import logo from "../assets/logoo.png";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

export default function Navbar({ menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  //   const [scrolled, setScrolled] = useState(false);

  // Scroll event handler
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 80) {
  //         setScrolled(true);
  //       } else {
  //         setScrolled(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="z-10 bg-base-300/50 backdrop-blur-sm fixed w-full">
        <nav className="navbar text-base-content custom-container">
          {/* <nav
        className={`fixed w-full z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 shadow-lg backdrop-blur-md bg-opacity-90"
            : "bg-transparent"
        } text-white`}
      > */}
          {/* Logo */}
          <div className="navbar-start">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto rounded-lg" />
              <span className="font-bold text-2xl">Arian</span>
            </a>
          </div>

          {/* Menu - visible md+ only */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal menu-lg">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    activeClass="text-primary"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer capitalize"
                  >
                    {item}
                  </Link>
                  {/* <a href="#">{item}</a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Button - visible md+ only */}
          <div className="navbar-end gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary hidden lg:flex"
            >
              Download CV
            </a>
            <button
              className="lg:hidden focus:outline-none cursor-pointer"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-8 h-8 text-base-content"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Hamburger / Close icon - visible only below md */}
        </nav>
      </div>

      {/* Fullscreen menu overlay - visible only below md */}
      <div
        className={`fixed inset-0 bg-base-100 bg-opacity-95 flex flex-col items-center justify-center text-xl space-y-6 text-base-content z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <button
          className="absolute top-4 right-4 btn btn-circle btn-ghost"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-8 h-8 text-base-content"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {/* Fullscreen menu items */}
        {menuItems.map((item) => (
          <>
            <Link
              key={item}
              activeClass="text-primary"
              to={item}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer capitalize"
              onClick={closeMenu}
            >
              {item}
            </Link>
          </>
        ))}
        <a href="/resume.pdf" download className="btn btn-primary">
          Download CV
        </a>
      </div>
    </>
  );
}
