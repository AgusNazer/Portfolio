import efset from "../../assets/images/EFSET-C1.png";
import reactImg from "../../assets/images/React-Cert.png";
import HenryImg from "../../assets/images/HenryCert.png";
import TodoCodeImg from "../../assets/images/TodoCode.png";
import javaCert from "../../assets/images/java-cert.png";

const Certifies = () => {
  const certificates = [
    {
      title: "FullStack Developer",
      issuer: "Soy Henry Bootcamp",
      url: "https://certificates.soyhenry.com/new-cert?id=3e27ae334de5917f63a52c3dfd45628ca54467b1230471962ac7089b8994fc87",
      image: HenryImg,
    },
    {
      title: "Java + Spring Cloud Microservices",
      issuer: "TodoCode Academy",
      url: "https://todocodeacademy.com/certificate/unu/",
      image: TodoCodeImg,
    },
    {
      title: "EF English Test",
      issuer: "EF Education First",
      url: "https://www.efset.org/cert/97y7TS",
      image: efset,
    },
    {
      title: "Frontend React",
      issuer: "Coder House",
      url: "https://pub.coderhouse.com/legacy-certificates/63d9aef3645fb0000ea3ae6c?lang",
      image: reactImg,
    },
    {
      title: "Java + Spring (Monolitic)",
      issuer: "Coder House",
      url: "https://pub.coderhouse.com/legacy-certificates/67e1e20c7ac56fd48702adcc?lang",
      image: javaCert,
    },
  ];

  return (
    <section id="certifications-section" className="section section-anchor">
      {/* <div className="container-max">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="section-kicker">Certificaciones</p>
            <h2 className="section-title">CV & Certificados</h2>
          </div>
          <span className="badge">Verificados</span>
        </div>

        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1Hue3aynGZ--tJIYr7hBCwloB1orb7wjQ/view?usp=sharing"
            target="_blank"
            className="btn-primary"
          >
            Descargar CV Completo
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col gap-4 transition hover:border-accent/70"
            >
              <div>
                <p className="section-kicker">Certificado</p>
                <h3 className="mt-2 text-lg font-semibold transition group-hover:text-accent">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
              </div>
              <img
                src={cert.image}
                alt={cert.title}
                className="h-40 w-full rounded-xl border border-chrome/70 object-cover"
              />
              <div className="flex items-center gap-2 text-xs font-medium text-accent">
                <span>Ver certificado</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Certifies;
