import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-[hsl(0_0%_100%)] py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-green-pale mb-4">
              Green Solutions
            </h3>
            <p className="text-[hsl(0_0%_100%/0.7)] leading-relaxed mb-6 max-w-md">
              Empresa especializada em controle de pragas, oferecendo soluções seguras e eficazes para residências, condomínios, comércios e indústrias na Grande São Paulo e ABC.
            </p>
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.7)]">
              <MapPin className="w-4 h-4 text-green-pale" />
              <span>Grande São Paulo e ABC</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold text-[hsl(0_0%_100%)] mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511962207172"
                  className="flex items-center gap-3 text-[hsl(0_0%_100%/0.7)] hover:text-green-pale transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 96220-7172
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dedetizadoragreensolutions.com.br"
                  className="flex items-center gap-3 text-[hsl(0_0%_100%/0.7)] hover:text-green-pale transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@greensolutions.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display font-bold text-[hsl(0_0%_100%)] mb-4">
              Horário de Atendimento
            </h4>
            <ul className="space-y-3 text-[hsl(0_0%_100%/0.7)]">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="text-[hsl(0_0%_100%)]">08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>Sábados</p>
                  <p className="text-[hsl(0_0%_100%)]">08:00 - 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(0_0%_100%/0.1)] mt-12 pt-8 text-center text-[hsl(0_0%_100%/0.5)] text-sm">
          <p>
            © {new Date().getFullYear()} Green Solutions - Controle de Pragas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
