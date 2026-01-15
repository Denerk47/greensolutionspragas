import { Button } from "@/components/ui/button";
import { Shield, Clock, CreditCard, Percent, MessageCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";

const HeroSection = () => {
  const badges = [
    { icon: Clock, text: "Retorno em até 1 hora" },
    { icon: Shield, text: "Garantia de até 1 ano" },
    { icon: CreditCard, text: "12x sem juros" },
    { icon: Percent, text: "Desconto via Pix" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Debug: remover após confirmar */}
      <div className="fixed top-0 left-0 bg-red-500 text-white px-4 py-1 text-xs z-[9999]">
        v2025.01.15-CTAs
      </div>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.85)] via-[hsl(var(--primary)/0.75)] to-[hsl(var(--primary-dark)/0.9)]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(0_0%_100%)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(0_0%_100%)] rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col justify-center min-h-screen py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[hsl(0_0%_100%/0.15)] backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-[hsl(0_0%_100%)]" />
            <span className="text-sm font-medium text-[hsl(0_0%_100%)]">
              Empresa licenciada pela Vigilância Sanitária
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[hsl(0_0%_100%)] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Green Solutions – Sua parceira ideal no{" "}
            <span className="text-green-pale">Controle de Pragas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[hsl(0_0%_100%/0.9)] mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Controle de pragas rápido, seguro e com garantia na{" "}
            <strong>Grande São Paulo e ABC</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Solicitar orçamento pelo WhatsApp
              </a>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-[hsl(0_0%_100%/0.1)] backdrop-blur-sm rounded-xl p-4 hover:bg-[hsl(0_0%_100%/0.15)] transition-colors"
              >
                <badge.icon className="w-6 h-6 text-green-pale" />
                <span className="text-sm font-medium text-[hsl(0_0%_100%)] text-center">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-[hsl(0_0%_100%/0.5)] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[hsl(0_0%_100%/0.7)] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
