import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { FaOdnoklassniki, FaBookBookmark, FaMessage } from "react-icons/fa6";







const Sidebar = () => {


  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-chrome/70 bg-graphite/80 px-4 py-2 backdrop-blur md:left-6 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:px-2">
       
      <NavLink
        to="/#home-section"
        className="rounded-full p-2 text-zinc-200 hover:text-white"
      >
        <h2>
          <AiFillHome size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#about-section"
        className="rounded-full p-2 text-zinc-200 hover:text-white"
      >
        <h2>
          <FaOdnoklassniki size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#techs-section"
        className="rounded-full p-2 text-zinc-200 hover:text-white"
      >
        <h2>
          <AiFillCode size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#proyects-section"
        className="rounded-full p-2 text-zinc-200 hover:text-white"
      >
        <h2>
          <FaBookBookmark size="1.6rem" />
        </h2>
      </NavLink>
      <NavLink
        to="/#contact-section"
        className="rounded-full p-2 text-zinc-200 hover:text-white"
      >
        <h2>
          <FaMessage size="1.6rem" />
        </h2>
      </NavLink>
    </div>
  );
};

export default Sidebar;
