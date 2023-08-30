import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { FaOdnoklassniki, FaBookBookmark, FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="fixed left-0 bottom-0 md:left-5 w-full md:w-auto bg-gray-500 bg-opacity-30 md:bg-opacity-70 p-4 md:p-2 flex md:flex-col justify-center items-center gap-4 rounded-full rounded-bl-full md:rounded-tr-full md:rounded-br-full z-50 md:top-1/2 md:transform md:-translate-y-1/2">
      <NavLink
        to="/#home-section"
        className="text-gray-100 md:text-gray-300 bg-gray-500 rounded-md px-3 py-2 text-2xl md:text-m font-medium"
      >
        <h2>
          <AiFillHome size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#about-section"
        className="text-gray-100 md:text-gray-300 bg-gray-500 rounded-md px-3 py-2 text-2xl md:text-m font-medium"
      >
        <h2>
          <FaOdnoklassniki size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#techs-section"
        className="text-gray-100 md:text-gray-300 bg-gray-500 rounded-md px-3 py-2 text-2xl md:text-m font-medium"
      >
        <h2>
          <AiFillCode size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#proyects-section"
        className="text-gray-100 md:text-gray-300 bg-gray-500 rounded-md px-3 py-2 text-2xl md:text-m font-medium"
      >
        <h2>
          <FaBookBookmark size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#contact-section"
        className="text-gray-100 md:text-gray-300 bg-gray-500 rounded-md px-3 py-2 text-2xl md:text-m font-medium"
      >
        <h2>
          <FaMessage size="1.6rem" />
        </h2>
      </NavLink>
    </div>
  );
};

export default Sidebar;
