import { Settings, Users, Leaf, FileCheck } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Settings,
      title: "Manejo Integrado de Pragas (MIP)",
      description:
        "Abordagem científica que combina múltiplas técnicas para controle eficiente e sustentável, minimizando o uso de produtos químicos.",
    },
    {
      icon: Users,
      title: "Técnicos Qualificados",
      description:
        "Equipe treinada e certificada, com conhecimento técnico atualizado para identificar e tratar qualquer infestação.",
    },
    {
      icon: Leaf,
      title: "Produtos Seguros",
      description:
        "Utilizamos apenas produtos aprovados pela ANVISA, seguros para pessoas, pets e meio ambiente.",
    },
    {
      icon: FileCheck,
      title: "Conformidade Legal",
      description:
        "Empresa licenciada e em total conformidade com as normas da Vigilância Sanitária e órgãos reguladores.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade, segurança e resultados que fazem a diferença no controle de pragas.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
