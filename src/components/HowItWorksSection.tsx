import { Search, FileText, SprayCan, ShieldCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Diagnóstico no Local",
      description:
        "Técnico especializado visita seu imóvel para identificar pragas, focos de infestação e pontos vulneráveis.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Plano de Ação Personalizado",
      description:
        "Desenvolvemos uma estratégia sob medida para sua situação, considerando tipo de praga, ambiente e segurança.",
    },
    {
      icon: SprayCan,
      step: "03",
      title: "Aplicação Segura",
      description:
        "Executamos o tratamento com produtos aprovados e técnicas que garantem eficácia sem riscos para sua família.",
    },
    {
      icon: ShieldCheck,
      step: "04",
      title: "Acompanhamento e Garantia",
      description:
        "Monitoramos os resultados e oferecemos garantia de até 1 ano, com visitas de manutenção se necessário.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Processo simples
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do primeiro contato à solução definitiva, nosso processo é transparente e eficiente.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Step Badge */}
                <span className="inline-block text-xs font-bold text-primary bg-secondary rounded-full px-3 py-1 mb-3">
                  Passo {step.step}
                </span>

                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
