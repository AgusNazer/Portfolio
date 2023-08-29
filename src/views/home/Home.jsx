import { useEffect } from "react";
import Certifies from "../../components/certificados/Certifies";
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Projects from "../projects/Projects";
import TechSkills from "../techs/TechSkills";
import Swal from 'sweetalert2'


const Home = () => {

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

    <div className="m-8">
     <About style={{ margin: '10px' }} />
      <Certifies  />
      <TechSkills  />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
