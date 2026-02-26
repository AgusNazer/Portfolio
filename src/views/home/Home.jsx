import Certifies from "../../components/certificados/Certifies";
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Projects from "../projects/Projects";
import TechSkills from "../techs/TechSkills";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="bg-ink text-zinc-100">
      <Sidebar />
      <section id="home-section" className="section section-anchor">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <span className="badge">Backend & Fullstack</span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Agustin Nazer
              </h1>
              <p className="text-lg text-zinc-300">
                Desarrollo soluciones web con foco en backend y arquitecturas
                limpias. Me muevo entre Node.js, Python, Java y .NET, y
                construyo interfaces modernas con React cuando el producto lo
                necesita.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/#proyects-section" className="btn-primary">
                  Ver proyectos
                </a>
                <a href="/#contact-section" className="btn-ghost">
                  Contactar
                </a>
              </div>
              <div className="grid gap-4 pt-6 md:grid-cols-2">
                <div className="card-soft">
                  <p className="text-xs uppercase tracking-[0.2em] text-warm">
                    Stack
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Node.js, Python, Java, .NET, React, SQL, MongoDB
                  </p>
                </div>
                <div className="card-soft">
                  <p className="text-xs uppercase tracking-[0.2em] text-warm">
                    Enfoque
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    APIs escalables, automatizacion y producto centrado en
                    negocio.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-accent"></span>
                <span className="h-2 w-2 rounded-full bg-violet"></span>
                <span className="h-2 w-2 rounded-full bg-zinc-500"></span>
                <span className="ml-auto font-mono">~/workspace</span>
              </div>
              <div className="mt-6 space-y-4 rounded-xl border border-chrome/70 bg-graphite/80 p-4 font-mono text-sm text-zinc-300">
                <p>
                  <span className="text-violet">$</span> whoami
                </p>
                <p className="text-zinc-400">agustin_nazer</p>
                <p>
                  <span className="text-violet">$</span> cat role.txt
                </p>
                <p className="text-zinc-400">Software Developer | Backend Developer</p>
                <p>
                  <span className="text-violet">$</span> cat focus.txt
                </p>
                <p className="text-zinc-400">
                  APIs RESTful • DB Relacionales & NoSQL • IA
                </p>
                <p>
                  <span className="text-violet">$</span> git commit -m "building scalable systems"
                </p>
                <p className="text-zinc-400">[main] ✓ Clean code & architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Certifies />
      <TechSkills />
      <Footer />
    </div>
  );
};

export default Home;
