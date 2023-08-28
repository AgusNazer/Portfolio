const Projects = () => {
  return (
    <div className="text-center mt-10">
    <h1 className="text-3xl mb-6">Projects</h1>
  
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl">Puebla del Mar</h1>
      <h3 className="text-gray-600">Real life project, Ecommerce developed on the Henry Bootcamp.</h3>
      <p className="text-gray-600">
        Was developed for me on the Coderhouse course of Javascript vanilla,
        it's a simple app where the data is extracted from the Spoonacular API.
      </p>
      <a
        href="https://github.com/PuebladelMar/SoyPuebla.git"
        target="_blank"
        className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        See More...
      </a>
    </div>
  
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl">Api-Foods</h1>
        <h3 className="mb-2">Single Page Application</h3>
        <p className="text-gray-600">
          Was developed for my Individual Project on the Henry Fullstack Developer bootcamp.
          The data is extracted from the Spoonacular API.
        </p>
        <a
          href="https://github.com/AgusNazer/PI-Food-AgusNazer"
          target="_blank"
          className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See More...
        </a>
      </div>
  
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl">Speak easy</h1>
        <h3 className="mb-2">Flutter application</h3>
        <p className="text-gray-600">
          Was developed for No Country Community, with a group of developers,
          designer, QA tester, and team leader.
        </p>
        <a
          href="https://github.com/No-Country/c9-49-m-flutter.git"
          target="_blank"
          className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See More...
        </a>
      </div>
  
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl">React app e-commerce</h1>
        <h3 className="mb-2">React + Firebase app</h3>
        <p className="text-gray-600">
          Was developed for me on the Coderhouse course of React.
        </p>
        <a
        //   href="https://github.com/AgusNazer/preEntregaNazer.git"
          href="https://agusnazer.github.io/entregaFinalNazer/"
          target="_blank"
          className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See More...
        </a>
      </div>
  
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl">Your calorie App</h1>
        <h3 className="mb-2">JavaScript app with Spoonacular API</h3>
        <p className="text-gray-600">
          Was developed for me on the Coderhouse course of Javascript vanilla,
          it's a simple app where the data is extracted from the Spoonacular API.
        </p>
        <a
          href="https://yourcalorieapp.netlify.app/"
          target="_blank"
          className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See More...
        </a>
      </div>
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl">Cofee-app</h1>
        <h3 className="mb-2">This is my first web app</h3>
        <p className="text-gray-600">
          This is my first web page, made it with HTML and CSS. 
        </p>
        <a
          href="https://yourcalorieapp.netlify.app/"
          target="_blank"
          className="self-center block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See More...
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Projects;
