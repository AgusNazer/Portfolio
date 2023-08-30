import { useEffect, useState } from "react";
import Certifies from "../../components/certificados/Certifies";
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Projects from "../projects/Projects";
import TechSkills from "../techs/TechSkills";
import Swal from 'sweetalert2'
import Sidebar from "../../components/sidebar/Sidebar";
import { FaMoon,FaSun } from 'react-icons/fa6'


const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
   setDarkMode(!darkMode);
   
 };


  useEffect(()=> {
    Swal.fire({
      title: '<strong>Im still working on this page! </strong>',
      icon: 'info',
      html:
        'Sorry if u find a bug, Im working on it 👨🏽‍💻 , ' +
        '<a href="//sweetalert2.github.io"> ',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Keep going!!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
     
    })
  }, []);
  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>

     
      <div className={`p-4 ${darkMode ? 'bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-gray-200' : 'dark:bg-gray-200'}`}>
        <div id="home-section" className="m-16">
          <Sidebar />
          <button
            className={`p-2 rounded-md ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            onClick={toggleDarkMode}
            style={{ background: 'none', border: 'none' }}
          >
            
            <div className='fixed top-1/3 right-0 p-4'>
        <h2>{darkMode ? <FaSun size='2rem' /> : <FaMoon size='2rem' />}</h2>
      </div>
            
          </button>
          <About style={{ margin: '10px' }} />
          <Certifies />
          <TechSkills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>

  );
};

export default Home;
