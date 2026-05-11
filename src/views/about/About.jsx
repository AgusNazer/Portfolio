// import avatarImg from '../../assets/images/avatar3.jpeg'
import pic from "../../assets/images/porfolioSinFondo.png"


const About = () => {
  return (
    <section id="about-section" className="section-anchor pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card">
            <div className="flex items-center gap-4">
              <img
                src={pic}
                alt="Agustin Nazer"
                className="h-24 w-24 rounded-2xl border border-chrome/70 object-cover"
              />
              <div>
                <p className="section-kicker">Sobre mi</p>
                <h2 className="section-title">Agustin Nazer</h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Software Developer | Backend Developer
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <p>
                Desarrollador de Software enfocado mas al backend. Diseño de APIs RESTful y
                manejo bases de datos relacionales y No relacionales. Actualmente
                explorando IA y agentes inteligentes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Java + Spring boot</span>
                <span className="chip">Python</span>
                <span className="chip">C#</span>
                <span className="chip">FastAPI</span>
                <span className="chip">.NET</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="space-y-5 text-base text-zinc-300">
            <h3 className="section-title">Perfil tecnico</h3>
            <p>
          {/* Hi! 👋🏻 My name is Agustin, I'm an enthusiastic developer. */}
          Especialista en desarrollo Backend, principalmente con Java.
Tengo experiencia trabajando bajo metodología SCRUM y cuento con 2+ años de experiencia.
Cuento con experiencia en el diseño, desarrollo y mantenimiento de APIs RESTful, implementación de lógica de negocio y modelado de sistemas escalables.
He trabajado con arquitecturas monolíticas y de microservicios.

He trabajado con integración con bases de datos relacionales y no relacionales, autenticación y autorización. Ademas este ultimo tiempo he estado trabajando con IA y automatizaciones utilizando 
distintos modelos de lenguaje, y estoy muy interesado en seguir aprendiendo sobre este tema.
            </p>
            <p>
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
            <p>
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
    </section>
  );
};

export default About;
