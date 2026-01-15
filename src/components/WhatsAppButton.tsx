import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 animate-pulse-soft" />
      <span className="font-semibold hidden sm:inline">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;
