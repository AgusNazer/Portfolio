import imgEmail from '../../assets/images/email.jpeg'
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
              src="https://img.icons8.com/nolan/64/linkedin.png"
              className="w-16 h-16"
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
              src="https://img.icons8.com/stickers/100/000000/github.png"
              className="w-16 h-16"
              alt="GitHub"
            />
            <h2 className="mt-2">Github</h2>
          </a>
          <a
            href="mailto:Agustin.nazer@hotmail.com "
            className="mx-4 my-2 flex flex-col items-center"
            target="_blank"
          >
            <img
              src={imgEmail}
              className="w-16 h-16"
              alt="Gmail"
            />
            <h2 className="mt-2">Email</h2>
          </a>
        </div>
      </div>
      
    )
}

export default Footer;