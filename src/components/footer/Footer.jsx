import imgEmail from '../../assets/images/email2.jpeg' 
import githubImg from "../../assets/images/github2.jpeg";
import inImg from "../../assets/images/in.png";


const Footer = () => {
    return(
        <div id="contact-section" className="text-center mt-10">
        <h2 className="text-3xl">CONTACT ME</h2>
        <div id="contact" className="flex flex-wrap justify-center mt-6">
          <a
            href="https://www.linkedin.com/in/agust%C3%ADnnazer/"
            className="mx-4 my-2 flex flex-col items-center"
            target="_blank"
          >
            <img
              src={inImg}
              className="w-16 h-16 brightness-110 mix-blend-multiply"
              alt="LinkedIn"
            />
            <h2 className="mt-2">LinkedIn</h2>
          </a>
          <a
            href="https://github.com/AgusNazer"
            className="mx-4 my-2 flex flex-col items-center"
            target="_blank"
          >
            <img
              src={githubImg}
              className="w-16 h-16 brightness-110 mix-blend-multiply"
              alt="GitHub"
            />
            <h2 className="mt-2">Github</h2>
          </a>
          <a
            href="mailto:Agustin.nazer@hotmail.com "
            className="mx-4 my-2 flex flex-col items-center"
            target="_blank"
          >
            <img src={imgEmail}
            className="w-16 h-16 brightness-110 mix-blend-multiply"
            
          />
            <h2 className="mt-2">Email</h2>
          </a>
        </div>
      </div>
      
    )
}

export default Footer;