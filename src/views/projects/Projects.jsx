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
    <div id="proyects-section" className="text-center mt-20 mb-20">
      <h1 className="text-3xl mb-10">Projectos</h1>



      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">



        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Gaia Ecotrack</h1>
          <h3 className="mb-2">Python-NodeJs-React-Rust-Gear protocol </h3>

          <p className="">

            Projecto real de alto impacto ambiental. Plataforma descentralizada de tokenización de energia, desarrollada con tecnologia Blockchain, en la red de Vara Network.
          </p>
          <a
            href="https://www.gaiaecotrack.com/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <img
            src={gaia}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 
        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">IA Agent purchase!</h1>
          <h3 className="mb-2">Python + Langchain + LLM + React </h3>

          <p className="">

            Projecto de agente inteligente que utiliza IA para realizar compras en linea de manera automatizada. El agente puede analizar productos ingresados por el usuario y tomar decisiones de 
            compra basadas en criterios predefinidos. Puede aceptar la compra, rechazarla, o bien solicitar revision. La app es un MVP, y se encuentra en desarrollo. Tendra mas funcionalidades en el futuro.  
          </p>
          <a
            href="https://agentecompra.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <img
            src={agentecompra}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">FinalesYa!</h1>
          <h3 className="mb-2">ASP .NET + PostgresSql + ReactJs </h3>

          <p className="">

            Projecto de gestion de examenes, materias, calendarios, y demas,  para facilitar la organizacion de los estudiantes.
          </p>
          <a
            href="https://finalesyafrontend.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <img
            src={finalesya}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">postulateApp</h1>
          <h2>🛠️🪛🧱En desarrollo!</h2>
          <h3 className="mb-2">Node Js </h3>

          <p className="">

            Projecto hecho estilo "vibe coding". Aplicacion que busca ofertas de trabajo especificamente en el sitio Computrabajo. Faciliar tener que ingresar al sitio y estar reingresando filtros y haciendo busquedas manuales. La idea es automatizar la busqueda de ofertas y asi optimizar tiempo en procesos repetitivos.
          </p>
          <a
            href="https://postulationapp.onrender.com/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <img
            src={postulate}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 


        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Tienda Electro</h1>
          <h3 className="mb-2">Java-Spring-ReactJs </h3>
          <h4 className="text-xl text-red-500"> La carga inicial de productos puede tardar debido q que es un servidor gratuito</h4>
          <p className="">

            Tienda de tipo Ecommerce hecha con Java + spring. Arquitectura de microservicios, con servidor Eureka Server. Cuenta con los servicios de productos, cart y ventas. 
            Actualmente en desarrollo. Se utiliza Java version 17, maven, hibernate, eureka discovery client, MySql driver, y otras herramientas
            del ecosistema de Spring Cloud. 
          </p>
          <a
            href="https://tienda-electro.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <a href="https://electro-eureka-server.onrender.com/" 
          target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al server
          </a>
          <a
            href="https://github.com/AgusNazer/Product-microservicio-electro.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al repositorio(backend)
          </a>
          <img
            src={tiendaElectro}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 

      <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Movie rater</h1>
          <h3 className="mb-2">Java-Spring </h3>
          <p className="">

            Es un crud de peliculas, donde se ha utilizado java y spring boot como tecnologias prinicipales.
            El usuario puede calificar peliculas, ordernarlas segun nombre y otras caracteristicas. En este proyecto me enfoqe principalmente
            no solo en el backend, sino tambien en el deploy, hosting y servidores. Cuenta con una base de datos MySql y lo 
            interesante es que el backend y la Db estan en un servidor VPS corriendo. El cual tiene certificado SSL y varias caracteristicas
            semejantes a un proyecto en produccion. 
          </p>
          <a
            href="https://phenomenal-speculoos-8ceaca.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          <a href="https://www.agusdev.online/api/movies" 
          target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al json
          </a>
          <a
            href="https://github.com/AgusNazer/movieproject.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al repositorio
          </a>
          <img
            src={javaMovies}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 
        
        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">X-Wallet</h1>
          <h3 className="mb-2">NodeJs-React </h3>
          <h4 className="text-xl text-red-500"> Falta optimizar cargado de inicio</h4>
          <p className="">

            SPA que muestra informacion de las 100 criptomonedas con mas capitalización de mercado actual.
            Cuenta con registro y autenticación de usuario para acceder. Se há utilizado firebase Auth. 
            Actulamente es una aplicación sólo informativa, pero la idea es desarrollar otras funcionalidades.  
          </p>
          <a
            href="https://x-wallet-crypto.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al deploy</a>
          {/* <a href="https://x-wallet-crypto.netlify.app/" 
          target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Ir al json
          </a> */}
          <a
            href="https://github.com/AgusNazer/x-wallet"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al repositorio
          </a>
          <img
            src={xwallet}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div> 

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Puebla del Mar</h1>
          <h3 className="">
            {/* Real project. Ecommerce developed on the Henry Bootcamp. Its a
            women's sportswear store. MVP features: Website development, user
            accounts, admin accounts, search engine, and reviews. */}
            <p>NodeJs-React</p> <br /> 
            Proyecto real.  Ecommerce desarrollado durante la etapa del proyecto final del bootcamp
            Soy Henry. Es una tienda de ropa deportiva para mujeres. MVP features: cuenta de usuario,
            cuenta de administrador, motor de búsqueda, reseñas, y mas funcionales que puedes descubrir
            ingresando al sitio web!
          </h3>

          <a
            // href="https://github.com/PuebladelMar/SoyPuebla.git"
            href="https://soy-puebla-deploy.vercel.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={Pdm}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Api-Foods</h1>
          <h3 className="mb-2">NodeJs-React-PostgreSql</h3>
          <p className="">
            {/* Was developed for my Individual Project on the Henry Fullstack
            Developer bootcamp. The data is extracted from the Spoonacular API. */}
            Fue desarrollado durante el bootcamp de Soy Henry, y es mi proyecto individual 
            con la temática de recetas de comidas. La info fue extraida de la API Spoonacular.
          </p>
          <a
            href="https://github.com/AgusNazer/Pi_foods.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al repositorio
          </a>
          <img
            src={piFoods}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
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

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Henry challenge</h1>
          <h3 className="mb-2">ReactJs vite - mongoDb</h3>
          <p className="">
            {/* Was developed for me on the Coderhouse course of React. */}
            Un challengue full stack realizado en 48 hs. 
            Desarrollé un CRUD completo en un formulario. Utilice MongoDb, mongoose, nodeJs, express, react y tailwind. 
          </p>
          <a
            //   href="https://github.com/AgusNazer/preEntregaNazer.git"
            
            href="https://agus-henry-form.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Ir al deploy
          </a>
          <img
            src={formApp}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
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
  );
};

export default Projects;
