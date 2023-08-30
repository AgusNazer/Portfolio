import efset from '../../assets/images/EFSET-C1.png'
import reactImg from '../../assets/images/React-Cert.png'

const Certifies = () => {
  return (
    <div className="text-center ">
      <h1 className="text-xl mb-10 ">DOWNLOAD CV</h1> 
      <section className=" flex-center flex-wrap flex-col">
      <a className=" m-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 sm:order-last" href="https://drive.google.com/file/d/1pL4Nxt1cumls9fEnkdUsfB1Z7EUwgJpX/view?usp=sharing" target='_blank'>Spanish version</a>
      <a className=" m-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 sm:order-first" href="https://drive.google.com/file/d/1BRi8FZ5lP45yk1UjgEVBuIAbj6UfAy2l/view?usp=sharing" target='_blank'>  English version</a>
      </section>
      <div className="mt-4 grid gap-4 md:grid-cols-3  rounded-lg shadow-md mb-10">
        <div className="">
          <div className="mt-10">
            <h3>FullStack Developer</h3>
            <h4 className="mb-4 text-lg">Henry's bootcamp</h4>
            <a href="My link al certificado" target="blank" class="">
              <span className= "py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                See More...
              </span>
            </a>
            <img
    src={efset}
    alt="Thumbnail"
    className="w-2/3 h-auto mt-8 mx-auto rounded-lg"
  />
          </div>
          <br />
        </div>
        <div className="mt-10">
          <div className="">
            <h3>EF English Test</h3>
            <h4 className="mb-4 text-lg">English Level certification</h4>
            <a href="https://www.efset.org/cert/97y7TS" target="blank" class="">
              <span className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                See More...
              </span>
            </a>
            <img
    src={efset}
    alt="Thumbnail"
    className="w-2/3 h-auto mt-8 mx-auto rounded-lg"
  />
          </div>
          <br />
        </div>
        <div className="mb-8 mt-10">
          <div>
            <h3>Frontend react</h3>
            <h4 className="mb-4 text-lg">Coder House </h4>
            <a
              href="https://www.coderhouse.com/certificados/63d9aef3645fb0000ea3ae6c"
              className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              See more...
            </a>
            <img
    src={reactImg}
    alt="Thumbnail"
    className="w-2/3 h-auto mt-8 mx-auto rounded-lg"
  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifies;
