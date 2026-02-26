import { useState} from "react";
import { NavLink } from "react-router-dom";
import navbarImg from '../../assets/images/code.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [msjLogo, setMsjLogo] = useState(false); 

 


  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  const logoMsj = () => {
    setMsjLogo(alert('hey there!'))
  }
  return (
    <div className="sticky top-0 z-50">
      <nav className="border-b border-chrome/70 bg-graphite/80 backdrop-blur">
        <div className="container-max">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`hidden h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 left-0 hidden sm:flex items-center">
              <NavLink to='./' className="flex items-center gap-3" onClick={logoMsj}>
                <img
                  src={navbarImg}
                  alt="Icono"
                  className="h-10 w-10 rounded-lg border border-chrome/70"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-zinc-100">Agustin Nazer</p>
                  <p className="text-xs text-warm">Backend & Fullstack</p>
                </div>
              </NavLink>
            </div>
      

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/#home-section"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                      aria-current="page"
                    >
                      Inicio
                    </NavLink>
                    <NavLink
                      to="/#about-section"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                    
                    >
                      Acerca de mi
                    </NavLink>
                    <NavLink
                      to="/#techs-section"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                      aria-current="page"
                    >
                      Skills
                    </NavLink>
                    <NavLink
                      to="/#proyects-section"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                      aria-current="page"
                    >
                      Projectos
                    </NavLink>
                    <NavLink
                      to="/#contact-section"
                      className="text-sm font-medium text-zinc-300 hover:text-white"
                      aria-current="page"
                    >
                      Contactame
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   

        <div
          className={`${menuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-2 border-t border-chrome/70 px-4 pb-4 pt-4">
            <a
              href="/#home-section"
              className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white"
              aria-current="page"
            >
              Inicio
            </a>
            <a
              href="/#about-section"
              className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white"
            >
              Acerca de mi
            </a>
            <a
              href="/#techs-section"
              className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white"
            >
              Skills
            </a>
            <a
              href="/#proyects-section"
              className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white"
              aria-current="page"
            >
              Projectos
            </a>
            <a
              href="/#contact-section"
              className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white"
              aria-current="page"
            >
              Contactame
            </a>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
