import efset from '../../assets/images/EFSET-C1.png'
import reactImg from '../../assets/images/React-Cert.png'
import HenryImg from '../../assets/images/HenryCert.png'

const Certifies = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-xl mb-10 ">DESCARGA DE CV</h1> 
      
  <div className="flex flex-wrap justify-center gap-2 ">
    <a className="md:m-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" href="https://drive.google.com/file/d/1pL4Nxt1cumls9fEnkdUsfB1Z7EUwgJpX/view?usp=sharing" target="_blank ">Spanish version</a>
    <a className="md:m-4 py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" href="https://drive.google.com/file/d/1BRi8FZ5lP45yk1UjgEVBuIAbj6UfAy2l/view?usp=sharing" target="_blank ">English version</a>
  </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3  rounded-lg shadow-md mb-10">
        <div className="">
          <div className="mt-10">
            <h3>FullStack Developer</h3>
            <h4 className="mb-4 text-lg">Henry  bootcamp</h4>
            <a href="https://certificates.soyhenry.com/new-cert?id=3e27ae334de5917f63a52c3dfd45628ca54467b1230471962ac7089b8994fc87" target="blank" className="">
              <span className= "py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Vamos allá!...
              </span>
            </a>
            <img
    src={HenryImg}
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
            <a href="https://www.efset.org/cert/97y7TS" target="blank">
              <span className="py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Vamos allá!...
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
              Vamos allá!...
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
