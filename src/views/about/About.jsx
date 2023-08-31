import avatarImg from '../../assets/images/cvPic.jpeg'


const About = () => {
  return (
    <div id="about-section" className="flex justify-center items-center mb-20">
    <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-lg mx-auto p-6 md:p-10 rounded-lg shadow-lg">
      <div className="w-48 h-48 md:mb-0 md:mr-6 ml-auto mr-auto">
        <img
          src={avatarImg}
          alt="Avatar"
          className=" w-full h-full object-cover rounded-full border-1 border-blue-900 border-opacity-75 shadow-sm"
        />
      </div>
      <div className="md:flex-1">
        <h2 className="text-3xl mb-5">ABOUT ME</h2>
        <p className="mt-2">
          Hi! 👋🏻 My name is Agustin, I'm an enthusiastic developer.
        </p>
        <p className="mt-2">
          I am a person who seeks professional and personal growth, focused on
          teamwork.
        </p>
        <p className="mt-2">
          Being a creative person I have focused mainly on the frontend area.
          From this position, I can contribute to design, user experience, and
          functionality to provide solutions. I like to say I'm a frontend
          developer with knowledge in the backend.
        </p>
        <p className="mt-2">
          I discovered my passion for programming 2 years ago, and since then
          I started to study on my own. I began with some courses about HTML and
          CSS and then I learned about other technologies and started to build
          some projects. Later, I decided to keep learning and I joined a coding
          bootcamp at Soy Henry, where I learned technical skills. I also want
          to emphasize the soft skills I developed during the bootcamp, such as
          teamwork and effective communication.
        </p>
      </div>
    </div>
  </div>
  );
};

export default About;
