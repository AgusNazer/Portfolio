const TechSkills = () => {
  const technologies = [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      name: "HTML5",
      url: "https://www.w3.org/html/",
      icon: "https://cdn-icons-png.flaticon.com/256/121/121537.png",
    },
    {
      name: "React",
      url: "https://reactjs.org/",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv3PGEyeJbr65Z2XC-eBGIJvQdtpg0L7XkA&s",
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      name: "Java",
      url: "https://www.oracle.com/java/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Java_coffee_cup_logo.svg/1200px-Java_coffee_cup_logo.svg.png",
    },
    {
      name: ".NET",
      url: "https://dotnet.microsoft.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    },
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      icon: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3nd142image3-image3.png",
    },
    {
      name: "Express.js",
      url: "https://expressjs.com",
      icon: "https://www.dongee.com/tutoriales/content/images/2023/11/image-59.png",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      icon: "https://miro.medium.com/v2/resize:fit:1400/0*dxB9HY1cYNKrSdbP.png",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
  ];

  return (
    <section id="techs-section" className="section section-anchor">
      <div className="container-max">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="section-kicker">Tech Stack</p>
            <h2 className="section-title">Skills & Tecnologías</h2>
          </div>
          <span className="badge">Fullstack</span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              rel="nofollow"
              target="_blank"
              className="card-soft group flex flex-col items-center gap-3 transition hover:border-accent/70 hover:bg-chrome/80"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain opacity-80 transition group-hover:opacity-100"
              />
              <p className="text-center text-xs font-medium text-zinc-300 transition group-hover:text-white">
                {tech.name}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="section-kicker">Backend</p>
            <h3 className="mt-2 text-lg font-semibold">Lenguajes & Frameworks</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Node.js</span>
              <span className="chip">Python</span>
              <span className="chip">Java + Spring</span>
              <span className="chip">.NET</span>
              <span className="chip">Express</span>
              <span className="chip">Flask</span>
            </div>
          </div>

          <div className="card">
            <p className="section-kicker">Bases de Datos</p>
            <h3 className="mt-2 text-lg font-semibold">SQL & NoSQL</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">PostgreSQL</span>
              <span className="chip">MySQL</span>
              <span className="chip">MongoDB</span>
              <span className="chip">SQL Server</span>
              <span className="chip">Firebase</span>
            </div>
          </div>

          <div className="card">
            <p className="section-kicker">Frontend</p>
            <h3 className="mt-2 text-lg font-semibold">Web & Responsive</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">React</span>
              <span className="chip">TailwindCSS</span>
              <span className="chip">Vite</span>
              <span className="chip">JavaScript</span>
              <span className="chip">HTML5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;

