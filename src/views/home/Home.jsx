import Certifies from "../../components/certificados/Certifies";
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Projects from "../projects/Projects";
import TechSkills from "../techs/TechSkills";

const Home = () => {
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
