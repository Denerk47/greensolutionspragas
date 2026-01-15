import { Bug, Rat, TreeDeciduous, Bird } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      title: "Desinsetização",
      description:
        "Eliminação completa de baratas, formigas, mosquitos, pulgas, traças, aranhas e outros insetos. Métodos seguros e eficazes para sua família.",
    },
    {
      icon: Rat,
      title: "Desratização",
      description:
        "Controle profissional de ratos e camundongos. Identificação de focos, eliminação e prevenção de novas infestações com total segurança.",
    },
    {
      icon: TreeDeciduous,
      title: "Descupinização",
      description:
        "Tratamento especializado contra cupins de madeira seca e subterrâneos. Proteja seu patrimônio com técnicas modernas e garantia estendida.",
    },
    {
      icon: Bird,
      title: "Controle de Pombos e Morcegos",
      description:
        "Manejo ético e legal de pombos e morcegos. Instalação de barreiras físicas e sistemas de afastamento sem prejudicar os animais.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e personalizadas para cada tipo de praga, com tecnologia de ponta e profissionais qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
