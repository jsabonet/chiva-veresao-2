import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  MessageCircle,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: "Sobre Nós", href: "#" },
    { name: "Política de Garantia", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contato", href: "#" }
  ];

  const categories = [
    { name: "Máquinas de Sorvete", href: "#" },
    { name: "Equipamentos de Talho", href: "#" },
    { name: "Máquinas de Costura", href: "#" },
    { name: "Corte a Laser", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Monitores", href: "#" },
    { name: "Periféricos", href: "#" },
    { name: "Acessórios", href: "#" }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "M-Pesa", "e-Mola"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/image.png" 
                alt="Chiva Computer & Service Lda" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-secondary-foreground/80 leading-relaxed">
                Soluções completas em máquinas industriais e produtos de informática. 
                Qualidade, confiança e atendimento personalizado.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+258 87 849 4330</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp: +258 87 849 4330</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>chivaimportacoes@gmail.com
            
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Nampula Shopping 1º andar loja 20<br />Nampula, Moçambique</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Siga-nos</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorias</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href} 
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-secondary-foreground/80 text-sm mb-4">
                Receba ofertas exclusivas e novidades direto no seu email.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Seu email" 
                  className="bg-secondary-foreground/10 border-secondary-foreground/20"
                />
                <Button size="sm" className="px-6">
                  Inscrever
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div>
              <h4 className="font-semibold mb-3">Garantias</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Frete Grátis acima de 5.000 MZN</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span>Pagamento Facilitado</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="font-semibold mb-3">Formas de Pagamento</h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <span 
                    key={index}
                    className="bg-secondary-foreground/10 px-3 py-1 rounded text-xs"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Chiva Computer & Service Lda. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary">
                Política de Privacidade
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary">
                Termos de Uso
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;