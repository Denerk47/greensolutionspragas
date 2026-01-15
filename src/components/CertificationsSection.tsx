import anvisaLogo from "@/assets/anvisa.png";
import inmetroLogo from "@/assets/inmetro.png";
import iso9001Logo from "@/assets/iso9001.png";
import apragLogo from "@/assets/aprag.png";

const CertificationsSection = () => {
  const certifications = [
    {
      logo: anvisaLogo,
      name: "ANVISA",
      description: "Produtos aprovados pela Agência Nacional de Vigilância Sanitária",
    },
    {
      logo: inmetroLogo,
      name: "INMETRO",
      description: "Equipamentos certificados pelo Instituto Nacional de Metrologia",
    },
    {
      logo: iso9001Logo,
      name: "ISO 9001",
      description: "Certificação de qualidade em gestão e processos",
    },
    {
      logo: apragLogo,
      name: "APRAG",
      description: "Associação dos Controladores de Vetores e Pragas Urbanas",
    },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Certificações e Parcerias
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Qualidade Garantida
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
