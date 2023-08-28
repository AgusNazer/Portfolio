import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about-section" className="text-center">
   
    <h2 className="mb-10">
    <div className="relative">
      <div className="w-32 h-32 mx-auto mb-6">
      <img
        src="../../src/assets/images/cvPic.jpeg"
        alt="Avatar"
        className="w-full h-full object-cover rounded-full border-2 border-blue-400 border-opacity-75 mx-auto mb-4"/>
      </div>
      </div>
    <span className="text-3xl">ABOUT ME</span>
    <p>Hello! 👋🏻 I am Agustin, I'm a entusiast developer.</p>
    <p>
      I am a person who seeks professional and personal growth, focused on
      teamwork.
    </p><br></br>
    <p>
      Being a creative person I have focused mainly on the frontend area,
      and I believe the solutions can be solved efficiently where design,
      user experience and functionality are important parts in the
      development of any web application. But i like to say im a frontend
      developer with knowledge in backend too.
    </p><br></br>
    <p>
      I discover my passion for programmin 2 years ago, and since this date
      I started to study by myself. Then I started with some courses about
      html and css and at this point I really discover that I can bring
      solution for people.
    </p>
  </h2>
  </div>
  );
};

export default About;
