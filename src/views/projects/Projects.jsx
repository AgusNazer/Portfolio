import Pdm from "../../assets/images/PdM2.png";
import piFoods from "../../assets/images/PI-Foods.png";
import javaMovies from "../../assets/images/javaMovies.png";
import recipeImg from "../../assets/images/RecipeApp.png";
import coffeeImg from "../../assets/images/CoffeeApp.png";
import naikiImg from "../../assets/images/NaikiReact.png";
import toDoApp from "../../assets/images/toDoApp.png";
import formApp from "../../assets/images/formApp.png";
import xwallet from "../../assets/images/x-wallet.png"
import tiendaElectro from "../../assets/images/Tienda-Electro.png"
import gaia from "../../assets/images/gaia.png"
import finalesya from "../../assets/images/homep.png"
import postulate from "../../assets/images/postulateApp.jpeg"
import agentecompra from "../../assets/images/agentecompra.jpeg"

const Projects = () => {
  return (
    <section id="proyects-section" className="section section-anchor">
      <div className="container-max">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="section-kicker">Proyectos</p>
            <h2 className="section-title">Projectos</h2>
          </div>
          <span className="badge">Produccion y MVPs</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">



        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Gaia Ecotrack</h3>
          <p className="text-sm text-warm">Python-NodeJs-React-Rust-Gear protocol</p>

          <p className="">

            Projecto real de alto impacto ambiental. Plataforma descentralizada de tokenización de energia, desarrollada con tecnologia Blockchain, en la red de Vara Network.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.gaiaecotrack.com/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={gaia}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 
        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">IA Agent purchase!</h3>
          <p className="text-sm text-warm">Python + Langchain + LLM + React</p>

          <p className="">

            Projecto de agente inteligente que utiliza IA para realizar compras en linea de manera automatizada. El agente puede analizar productos ingresados por el usuario y tomar decisiones de 
            compra basadas en criterios predefinidos. Puede aceptar la compra, rechazarla, o bien solicitar revision. La app es un MVP, y se encuentra en desarrollo. Tendra mas funcionalidades en el futuro.  
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://agentecompra.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={agentecompra}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">FinalesYa!</h3>
          <p className="text-sm text-warm">ASP .NET + PostgresSql + ReactJs</p>

          <p className="">

            Projecto de gestion de examenes, materias, calendarios, y demas,  para facilitar la organizacion de los estudiantes.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://finalesyafrontend.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={finalesya}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">postulateApp</h3>
          <span className="chip w-fit">En desarrollo</span>
          <p className="text-sm text-warm">Node Js</p>

          <p className="">

            Projecto hecho estilo "vibe coding". Aplicacion que busca ofertas de trabajo especificamente en el sitio Computrabajo. Faciliar tener que ingresar al sitio y estar reingresando filtros y haciendo busquedas manuales. La idea es automatizar la busqueda de ofertas y asi optimizar tiempo en procesos repetitivos.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://postulationapp.onrender.com/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={postulate}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Tienda Electro</h3>
          <p className="text-sm text-warm">Java-Spring-ReactJs</p>
          <p className="text-sm text-accentSoft">
            La carga inicial de productos puede tardar debido a que es un
            servidor gratuito.
          </p>
          <p className="">

            Tienda de tipo Ecommerce hecha con Java + spring. Arquitectura de microservicios, con servidor Eureka Server. Cuenta con los servicios de productos, cart y ventas. 
            Actualmente en desarrollo. Se utiliza Java version 17, maven, hibernate, eureka discovery client, MySql driver, y otras herramientas
            del ecosistema de Spring Cloud. 
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://tienda-electro.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
            <a
              href="https://electro-eureka-server.onrender.com/"
              target="_blank"
              className="btn-ghost"
            >
              Ir al server
            </a>
            <a
              href="https://github.com/AgusNazer/Product-microservicio-electro.git"
              target="_blank"
              className="btn-ghost"
            >
              Ir al repositorio (backend)
            </a>
          </div>
          <img
            src={tiendaElectro}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 

      <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Movie rater</h3>
          <p className="text-sm text-warm">Java-Spring</p>
          <p className="">

            Es un crud de peliculas, donde se ha utilizado java y spring boot como tecnologias prinicipales.
            El usuario puede calificar peliculas, ordernarlas segun nombre y otras caracteristicas. En este proyecto me enfoqe principalmente
            no solo en el backend, sino tambien en el deploy, hosting y servidores. Cuenta con una base de datos MySql y lo 
            interesante es que el backend y la Db estan en un servidor VPS corriendo. El cual tiene certificado SSL y varias caracteristicas
            semejantes a un proyecto en produccion. 
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://phenomenal-speculoos-8ceaca.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
            <a
              href="https://www.agusdev.online/api/movies"
              target="_blank"
              className="btn-ghost"
            >
              Ir al json
            </a>
            <a
              href="https://github.com/AgusNazer/movieproject.git"
              target="_blank"
              className="btn-ghost"
            >
              Ir al repositorio
            </a>
          </div>
          <img
            src={javaMovies}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 
        
        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">X-Wallet</h3>
          <p className="text-sm text-warm">NodeJs-React</p>
          <p className="text-sm text-accentSoft">Falta optimizar cargado de inicio.</p>
          <p className="">

            SPA que muestra informacion de las 100 criptomonedas con mas capitalización de mercado actual.
            Cuenta con registro y autenticación de usuario para acceder. Se há utilizado firebase Auth. 
            Actulamente es una aplicación sólo informativa, pero la idea es desarrollar otras funcionalidades.  
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://x-wallet-crypto.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          {/* <a href="https://x-wallet-crypto.netlify.app/" 
          target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al json
          </a> */}
            <a
              href="https://github.com/AgusNazer/x-wallet"
              target="_blank"
              className="btn-ghost"
            >
              Ir al repositorio
            </a>
          </div>
          <img
            src={xwallet}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div> 

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Puebla del Mar</h3>
          <p className="text-sm text-warm">NodeJs-React</p>
          <p className="text-sm text-zinc-300">
            Proyecto real. Ecommerce desarrollado durante la etapa del proyecto
            final del bootcamp Soy Henry. Es una tienda de ropa deportiva para
            mujeres con cuenta de usuario, admin, motor de busqueda y resenas.
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href="https://soy-puebla-deploy.vercel.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={Pdm}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div>

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Api-Foods</h3>
          <p className="text-sm text-warm">NodeJs-React-PostgreSql</p>
          <p className="">
            {/* Was developed for my Individual Project on the Henry Fullstack
            Developer bootcamp. The data is extracted from the Spoonacular API. */}
            Fue desarrollado durante el bootcamp de Soy Henry, y es mi proyecto individual 
            con la temática de recetas de comidas. La info fue extraida de la API Spoonacular.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/AgusNazer/Pi_foods.git"
              target="_blank"
              className="btn-ghost"
            >
              Ir al repositorio
            </a>
          </div>
          <img
            src={piFoods}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div>

        {/* <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Speak easy</h1>
          <h3 className="mb-2">Aplicación Flutter </h3>
          <p className="">

            Fue desarrollada para No Country, comunidad de simulacion de entornos de trabajo.
            La desarrollamos junto a un equipo de trabajo donde eramos 3 desarolladores, una diseñadora, una
            QA tester, y contabamos con la guía de un Team leader bajo la metodologia SCRUM. 
            Utilizamos gitflow como metodologia interna de desarrollo y control de versiones.
          </p>
          <a
            href="https://github.com/No-Country/c9-49-m-flutter.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al repositorio
          </a>
          <img
            src={speakEasy}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> */}

         {/* //////////////// */}
        
        {/* <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">ReactJs e-commerce</h1>
          <h3 className="mb-2">ReactJs - Firebase app</h3>
          <p className="">

            Fue desarrollada durante la carrera de Desarrollador Frontend en Coderhouse durante
            el curso de React.
          </p>
          <a

            
            href="https://agusnazer.github.io/entregaFinalNazer/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={naikiImg}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> */}

        {/* <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">ToDo App</h1>
          <h3 className="mb-2">React Js - mongoDb</h3>
          <p className="">
          
            Una simple app de tareas, donde podemos agregar, editar y eliminar tareas de nuestra lista.
          </p>
          <a
               href="https://github.com/AgusNazer/preEntregaNazer.git"
            
            href="https://todo-app-agus.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={toDoApp}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> */}

        <div className="card flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Henry challenge</h3>
          <p className="text-sm text-warm">ReactJs vite - mongoDb</p>
          <p className="">
            {/* Was developed for me on the Coderhouse course of React. */}
            Un challengue full stack realizado en 48 hs. 
            Desarrollé un CRUD completo en un formulario. Utilice MongoDb, mongoose, nodeJs, express, react y tailwind. 
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://agus-henry-form.netlify.app/"
              target="_blank"
              className="btn-primary"
            >
              Ir al deploy
            </a>
          </div>
          <img
            src={formApp}
            alt="Thumbnail"
            className="h-auto w-full rounded-xl border border-chrome/70"
          />
        </div>

        {/* <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Your calorie App</h1>
          <h3 className="mb-2">Javascript - Css</h3>
          <p className="">

            Fue mi primer sitio web utilzando Js. 
            Utilicé html, css y javascript puro.
          </p>
          <a
            href="https://yourcalorieapp.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={recipeImg}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> */}
        {/* <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Cofee-app</h1>
          <h3 className="mb-2">Mi primera app - Html - Css</h3>
          <p className="">
            Esta fue mi primer experiencia desarrollando una pagina web.
            Se hizo durante el primer curso de la carrera de Desarrollador Frontend en Coderhouse.
            Fue hecha con Html y css.
          </p>
          <a
            href="https://agusnazer.github.io/3entrega/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={coffeeImg}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
