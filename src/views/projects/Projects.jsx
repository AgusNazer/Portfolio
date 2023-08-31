import Pdm from "../../assets/images/PdM2.png";
import piFoods from "../../assets/images/PI-Foods.png";
import speakEasy from "../../assets/images/SpeakEasy.png";
import recipeImg from "../../assets/images/RecipeApp.png";
import coffeeImg from "../../assets/images/CoffeeApp.png";


const Projects = () => {
  return (
    <div id="proyects-section" className="text-center mt-20 mb-20">
      <h1 className="text-3xl mb-10">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Puebla del Mar</h1>
          <h3 className="">
            Real project. Ecommerce developed on the Henry Bootcamp. Its a
            women's sportswear store. MVP features: Website development, user
            accounts, admin accounts, search engine, and reviews.
          </h3>

          <a
            // href="https://github.com/PuebladelMar/SoyPuebla.git"
            href="https://soy-puebla-deploy.vercel.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
          <img
            src={Pdm}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Api-Foods</h1>
          <h3 className="mb-2">Single Page Application</h3>
          <p className="">
            Was developed for my Individual Project on the Henry Fullstack
            Developer bootcamp. The data is extracted from the Spoonacular API.
          </p>
          <a
            href="https://github.com/AgusNazer/Pi_foods.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
          <img
            src={piFoods}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Speak easy</h1>
          <h3 className="mb-2">Flutter application</h3>
          <p className="">
            Was developed for No Country Community, with a group of developers,
            designer, QA tester, and team leader.
          </p>
          <a
            href="https://github.com/No-Country/c9-49-m-flutter.git"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
          <img
            src={speakEasy}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">React app e-commerce</h1>
          <h3 className="mb-2">React + Firebase app</h3>
          <p className="">
            Was developed for me on the Coderhouse course of React.
          </p>
          <a
            //   href="https://github.com/AgusNazer/preEntregaNazer.git"
            href="https://agusnazer.github.io/entregaFinalNazer/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
        </div>

        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Your calorie App</h1>
          <h3 className="mb-2">JavaScript app with Spoonacular API</h3>
          <p className="">
            Was developed for me on the Coderhouse course of Javascript vanilla,
            it's a simple app where the data is extracted from the Spoonacular
            API.
          </p>
          <a
            href="https://yourcalorieapp.netlify.app/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
          <img
            src={recipeImg}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between h-full p-4 bg-white bg-opacity-30 rounded-lg shadow-md">
          <h1 className="text-2xl">Cofee-app</h1>
          <h3 className="mb-2">This is my first web app</h3>
          <p className="">
            This is my first web page, made it with HTML and CSS.
          </p>
          <a
            href="https://agusnazer.github.io/3entrega/"
            target="_blank"
            className="self-center block mt-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go into...
          </a>
          <img
            src={coffeeImg}
            alt="Thumbnail"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
