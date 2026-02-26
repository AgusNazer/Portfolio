import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/agustinnazer/",
      icon: FaLinkedin,
      color: "hover:text-[#0a66c2]",
    },
    {
      name: "GitHub",
      url: "https://github.com/AgusNazer",
      icon: FaGithub,
      color: "hover:text-zinc-300",
    },
    {
      name: "Email",
      url: "mailto:Agustin.nazer@hotmail.com",
      icon: FaEnvelope,
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact-section" className="section section-anchor border-t border-chrome/70">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Contacto</p>
          <h2 className="section-title">¡Hablemos!</h2>
          <p className="mt-4 text-lg text-zinc-300">
            Siempre abierto a nuevas oportunidades y colaboraciones. Contactame
            por cualquiera de estos canales.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-soft group flex items-center gap-3 transition hover:border-accent/70"
                >
                  <Icon className={`text-2xl transition ${link.color}`} />
                  <span className="font-medium text-zinc-200 transition group-hover:text-white">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-12 space-y-4 rounded-2xl border border-chrome/70 bg-graphite/80 p-8 text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-warm">
              Disponibilidad
            </p>
            <h3 className="text-lg font-semibold">
              Abierto a oportunidades interesantes
            </h3>
            <p className="text-zinc-300">
              Estoy buscando mi próximo desafío en una empresa que valúe la
              arquitectura limpia, el aprendizaje continuo y donde pueda
              contribuir a soluciones impactantes.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent"></span>
              <p className="text-sm font-medium text-zinc-300">
                Disponible ahora
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-chrome/70 pt-8">
          <p className="text-center text-sm text-zinc-400">
            © 2026 Agustin Nazer. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;