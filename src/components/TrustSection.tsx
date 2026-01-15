import { Award, Leaf, Target, ThumbsUp } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Anos de Experiência" },
    { icon: ThumbsUp, value: "5.000+", label: "Clientes Atendidos" },
    { icon: Target, value: "98%", label: "Taxa de Satisfação" },
    { icon: Leaf, value: "100%", label: "Eco-responsável" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Confiança e credibilidade
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Por que a Green Solutions é a escolha certa
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de uma década de experiência no mercado de controle de pragas, a Green Solutions construiu uma reputação sólida baseada em{" "}
                <strong className="text-foreground">resultados comprovados</strong>,{" "}
                <strong className="text-foreground">atendimento humanizado</strong> e{" "}
                <strong className="text-foreground">responsabilidade ambiental</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso compromisso vai além da eliminação de pragas: trabalhamos para criar ambientes saudáveis e seguros, utilizando métodos que respeitam o meio ambiente e a saúde de sua família ou colaboradores.
              </p>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
