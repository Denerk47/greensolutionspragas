import { Award, Leaf, Target, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import colaboradorImg from "@/assets/colaborador.jpg";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";

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
        <div className="max-w-6xl mx-auto">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={colaboradorImg} 
                  alt="Profissional Green Solutions"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg hidden md:block">
                <div className="text-2xl font-display font-bold">15+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
            </div>

            {/* Right - Text & Stats */}
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
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nosso compromisso vai além da eliminação de pragas: trabalhamos para criar ambientes saudáveis e seguros, utilizando métodos que respeitam o meio ambiente e a saúde de sua família ou colaboradores.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-secondary rounded-xl p-4 text-center"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-display font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button variant="default" size="lg" asChild className="w-full md:w-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Quero essa segurança para meu espaço
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
