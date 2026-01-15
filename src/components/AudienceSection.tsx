import { Home, Building, Store, Factory } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: Home,
      title: "Residências",
      description:
        "Casas e apartamentos livres de pragas para você e sua família viverem com tranquilidade e segurança.",
    },
    {
      icon: Building,
      title: "Condomínios",
      description:
        "Soluções para áreas comuns e unidades, com planos de manutenção preventiva para todo o empreendimento.",
    },
    {
      icon: Store,
      title: "Comércios",
      description:
        "Proteção para restaurantes, mercados, escritórios e lojas, garantindo conformidade sanitária.",
    },
    {
      icon: Factory,
      title: "Indústrias",
      description:
        "Controle rigoroso para ambientes industriais, atendendo normas de qualidade e certificações.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Atendemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Quem Podemos Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De residências a grandes indústrias, temos a solução ideal para cada necessidade.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <audience.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
