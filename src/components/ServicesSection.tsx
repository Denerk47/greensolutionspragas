import { Bug, Rat, TreeDeciduous, Bird, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import baratasImg from "@/assets/baratas.png";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";
import ratoImg from "@/assets/rato.png";
import cupimImg from "@/assets/cupim.jpg";
import pomboImg from "@/assets/pombo.png";

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      image: baratasImg,
      title: "Desinsetização",
      description:
        "Eliminação completa de baratas, formigas, mosquitos, pulgas, traças, aranhas e outros insetos. Métodos seguros e eficazes para sua família.",
    },
    {
      icon: Rat,
      image: ratoImg,
      title: "Desratização",
      description:
        "Controle profissional de ratos e camundongos. Identificação de focos, eliminação e prevenção de novas infestações com total segurança.",
    },
    {
      icon: TreeDeciduous,
      image: cupimImg,
      title: "Descupinização",
      description:
        "Tratamento especializado contra cupins de madeira seca e subterrâneos. Proteja seu patrimônio com técnicas modernas e garantia estendida.",
    },
    {
      icon: Bird,
      image: pomboImg,
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
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                  <service.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento para seu serviço
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
