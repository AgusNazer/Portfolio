import avatarImg from '../../assets/images/avatar3.jpeg'
import PorfolioPic from '../../assets/images/PorfolioPic.jpg'
import PorfolioSinFondo from '../../assets/images/PorfolioSinFondo.png'


const About = () => {
  return (
    <div id="about-section" className="flex justify-center items-center mb-20">
    <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-lg mx-auto p-6 md:p-10 rounded-lg shadow-lg">
      <div className="w-48 h-48 md:mb-0 md:mr-6 ml-auto mr-auto">
        <img
          // src={avatarImg}
          // src={PorfolioPic}
          src={PorfolioSinFondo}
          alt="Avatar"
          className=" w-full h-full object-cover rounded-full border-1 border-blue-900 border-opacity-75 shadow-sm"
        />
      </div>
      <div className="md:flex-1">
        <h2 className="text-3xl mb-5">Agustin Nazer</h2>
        <p className="mt-2">
          {/* Hi! 👋🏻 My name is Agustin, I'm an enthusiastic developer. */}
          ⭐️¡Hola! Soy Agustín Nazer, un desarrollador Backend con conocimientos también en Frontend, apasionado por el mundo del desarrollo.
           Poder contribuir a soluciones reales a través de la tecnología es un desafío grande, en el que me gusta estar involucrado. Estoy cosntantemente
           aprendiendo nuevas herramientas y explorando nuevos caminos. En definitiva, el código es el medio por el cual los desarrolladores buscamos
           resolver problemas. El código siempre estará ahi, las tecnologías pueden ser otras en un fúturo. Por eso, no me ato a ningun framework o herramienta,
           y siempre trato de centrarme en la solución y el planteamiento lógico del problema. 
        </p>
        <h2>
        ⭐️Cuento con más de 1 año de experiencia real, además de haber contrubuído en varios proyectos grupales y proyectos personales.
        </h2>
        <h2>
        ⭐️Actualmente, también soy estudiante de la UTN Universidad Tecnológica Nacional, sede Pacheco.
        </h2>
        
        <p className="mt-2">
          {/* Being a creative person I have focused mainly on the frontend area..
          From this position, I can contribute to design, user experience, and
          functionality to provide solutions. I like to say I'm a frontend
          developer with knowledge in the backend. */}
          {/* Si bien soy una persona creativa, que siempre hace foco en la experiencia de usuario,
          me interesan las aplicaciones full stack porque me gusta entender el funcionamiento tanto 
          frontend como de backend. */}
           {/* La Web 3 representa un muno descentralizado, impulsado por la confianza y la privacidad. Blockchain es la base de esta revolución, ofreciendo transparencia y seguridad.
 Creo que la blockchain seguirá siendo clave en la evolución de finanzas, contratos inteligentes, identidad digital y más. Y esto es mi gran motivación, poder contribuir a este mundo descentralizado sin limites.  */}
        </p>
        <p className="mt-2">
          {/* I discovered my passion for programming 2 years ago, and since then
          I started to study on my own. I began with some courses about HTML and
          CSS and then I learned about other technologies and started to build
          some projects. Later, I decided to keep learning and I joined a coding
          bootcamp at Soy Henry, where I learned technical skills. I also want
          to emphasize the soft skills I developed during the bootcamp, such as
          teamwork and effective communication. */}
          {/* Descubrí mi interés en la programacion hace ya casi dos años, donde empece mi camino en el desarrollo web.
          Me di cuenta de lo interesante que podía resultar desarrollar aplicaciones y asi empecé!, Html, css, javascript y luego React.
          Pero me di cuenta que me faltaba algo mas, sentía que no entendía que habia detras de una aplicacion... Hasta 
          que empecé a investigar sobre el mundo del backend, y ahora acá estoy, luego de haber terminado
          un bootcamp fullstack, interesado en ambas partes por igual, tanto frontend como backend. */}
        </p>
      </div>
    </div>
  </div>
  );
};

export default About;
