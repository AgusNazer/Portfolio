import avatarImg from '../../assets/images/cvPic.jpeg'

const About = () => {
  return (
    <div id="about-section" className="text-center">
   
    <h2 className="mb-10">
    <div className="relative">
      <div className="w-32 h-32 mx-auto mb-6">
      <img
        src={avatarImg}
        alt="Avatar"
        className="w-full h-full object-cover rounded-full border-2 border-blue-400 border-opacity-75 mx-auto mb-4"/>
      </div>
      </div>
    <span className="text-3xl">ABOUT ME</span>
    <p className='mt-5'>Hi! 👋🏻 My name is Agustin, I'm a entusiast developer.</p>
    <p>
      I am a person who seeks professional and personal growth, focused on
      teamwork.
    </p><br></br>
    <p>
      Being a creative person I have focused mainly on the frontend area,
      and I believe the solutions can be solved efficiently where design,
      user experience and functionality are important parts in the
      development of web application. I like to say Im a frontend
      developer with knowledge in backend.
    </p><br></br>
    <p>
      I discover my passion for programmin 2 years ago, and since this date
      I started to study by myself. Then I started with some courses about
      html and css and then I learned about other technologies and I started 
      to build some projects.
      Then I decide  keep learning and I started a coding bootcamp at Soy Henry,
      where I learnded technical skills, but I want to emphasize the soft skills 
      I developed during the bootcamp. I learned to work in teams and communicate effectively.
    </p>
  </h2>
  </div>
  );
};

export default About;
