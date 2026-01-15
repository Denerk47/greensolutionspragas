import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[hsl(0_0%_100%)] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[hsl(0_0%_100%)] rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[hsl(0_0%_100%)] mb-6">
            Livre-se das pragas hoje mesmo!
          </h2>
          <p className="text-lg md:text-xl text-[hsl(0_0%_100%/0.9)] mb-8 leading-relaxed">
            Solicite seu orçamento agora e receba um retorno em até 1 hora. Atendemos toda a Grande São Paulo e região do ABC.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.9)]">
              <Clock className="w-5 h-5" />
              <span>Resposta rápida</span>
            </div>
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.9)]">
              <MessageCircle className="w-5 h-5" />
              <span>Orçamento grátis</span>
            </div>
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.9)]">
              <Phone className="w-5 h-5" />
              <span>Atendimento humanizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <a href="tel:+5511962207172">
                <Phone className="w-5 h-5" />
                (11) 96220-7172
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
