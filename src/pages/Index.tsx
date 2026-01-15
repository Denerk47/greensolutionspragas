import { Phone, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AudienceSection from "@/components/AudienceSection";
import TrustSection from "@/components/TrustSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MiniCTASection from "@/components/MiniCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section id="servicos">
          <ServicesSection />
        </section>
        <MiniCTASection 
          title="Precisa resolver um problema com pragas?"
          subtitle="Resposta em até 1 hora • Orçamento grátis"
          icon={Phone}
        />
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <section id="diferenciais">
          <DifferentialsSection />
        </section>
        <MiniCTASection 
          title="Solicite uma avaliação gratuita"
          subtitle="Técnicos especializados • Atendimento em toda Grande SP"
          icon={AlertTriangle}
          variant="urgent"
        />
        <TrustSection />
        <AudienceSection />
        <CertificationsSection />
        <section id="contato">
          <CTASection />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
