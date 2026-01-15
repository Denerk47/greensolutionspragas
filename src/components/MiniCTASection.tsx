import { Button } from "@/components/ui/button";
import { MessageCircle, LucideIcon } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511962207172?text=Olá! Gostaria de solicitar um orçamento para controle de pragas.";

interface MiniCTASectionProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: "default" | "urgent";
}

const MiniCTASection = ({ 
  title, 
  subtitle, 
  icon: Icon = MessageCircle,
  variant = "default" 
}: MiniCTASectionProps) => {
  return (
    <section className={`py-12 ${variant === "urgent" ? "bg-primary/10" : "bg-secondary"}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${variant === "urgent" ? "bg-primary" : "bg-primary/20"}`}>
              <Icon className={`w-6 h-6 ${variant === "urgent" ? "text-primary-foreground" : "text-primary"}`} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                {title}
              </h3>
              {subtitle && (
                <p className="text-muted-foreground text-sm md:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          <Button variant="whatsapp" size="lg" asChild className="shrink-0">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniCTASection;
