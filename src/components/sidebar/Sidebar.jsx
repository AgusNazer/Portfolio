import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCode } from 'react-icons/ai'
import { FaOdnoklassniki, FaBookBookmark, FaMessage } from 'react-icons/fa6'

const Sidebar = () => {
    return(
        // <div className="fixed left-40 top-1/2 transform -translate-y-1/2 -translate-x-100 bg-black bg-opacity-70 p-4 flex flex-col justify-center items-center gap-4 rounded-full  ">
        <div className=" h-64 fixed left  top-1/2 transform -translate-y-1/2 -translate-x-full bg-black bg-opacity-30 p-2 flex flex-col justify-center items-center gap-2 rounded-full">
  <NavLink
                      to="/#home-section"
                      className="text-gray-800 rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                     <h2><AiFillHome size='1.5rem'/></h2> 
                    </NavLink>
                    <NavLink
                      to="/#about-section"
                      className="text-gray-800 rounded-md px-3 py-2 text-m font-medium"
                    >
                      <h2><FaOdnoklassniki size='1.5rem'/></h2> 
                    </NavLink>
                    <NavLink
                      to="/#techs-section"
                      className="text-gray-800 rounded-md px-3 py-2 text-m font-medium"
                    >
                      <h2><AiFillCode size='1.5rem'/></h2> 
                    </NavLink>
                    <NavLink
                      to="/#proyects-section"
                      className="text-gray-800 rounded-md px-3 py-2 text-m font-medium"
                    >
                      <h2><FaBookBookmark size='1.5rem'/></h2> 
                    </NavLink>
                    <NavLink
                      to="/#contact-section"
                      className="text-gray-800 rounded-md px-3 py-2 text-m font-medium"
                      aria-current="page"
                    >
                      <h2><FaMessage size='1.5rem'/></h2>
                    </NavLink>
</div>
    )
} 

export default Sidebar;