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
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h- items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 mt-16 ml-4 ${menuOpen ? "hidden" : "block"}`}
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
              <NavLink to='./'>
          <img
            src={navbarImg}
            alt="Icono"
            className="w-16 h-12 rounded-md"
            onClick={logoMsj}
          />
          </NavLink>
        </div>
      

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/#home-section"
                      className="text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      Inicio
                    </NavLink>
                    <NavLink
                      to="/#about-section"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                    
                    >
                      Acerca de mi
                    </NavLink>
                    <NavLink
                      to="/#techs-section"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      Skills
                    </NavLink>
                    <NavLink
                      to="/#proyects-section"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      Projectos
                    </NavLink>
                    <NavLink
                      to="/#contact-section"
                      className="text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-m font-medium"
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
          className={`${menuOpen ? "block mt-0" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 mobile-menu">
            <a
              href="/#home-section"
              className=" text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-"
              aria-current="page"
            >
              Inicio
            </a>
            <a
              href="/#about-section"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Acerca de mí
            </a>
            <a
              href="/#techs-section"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Skills
            </a>
            <a
              href="/#proyects-section"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Projectos
            </a>
            <a
              href="/#contact-section"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
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
