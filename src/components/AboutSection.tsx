import React from 'react';
import { Shield, Truck, Headphones, Award, Globe, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia de Qualidade",
      description: "Todos os produtos com garantia oficial e suporte técnico completo"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Entrega Rápida",
      description: "Entregamos em toda Moçambique com agilidade e segurança"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte 24/7",
      description: "Atendimento especializado para tirar todas suas dúvidas"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Importação Direta",
      description: "Importamos diretamente dos fabricantes para melhor preço"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Assistência Técnica",
      description: "Equipe especializada em manutenção e reparo de equipamentos"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência no mercado industrial e tecnológico"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a <span className="text-primary">Chiva Computer & Service</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Chiva Computer & Service Lda</strong> é uma empresa 
                moçambicana especializada na venda e importação de equipamentos industriais e produtos 
                de informática de alta qualidade.
              </p>
              <p>
                Oferecemos desde máquinas industriais robustas - como equipamentos de sorvete, 
                talho, corte a laser e costura - até os mais modernos produtos de informática, 
                incluindo laptops, monitores e periféricos das melhores marcas internacionais.
              </p>
              <p>
                Nossa missão é fornecer soluções completas e confiáveis que impulsionem o 
                crescimento dos negócios dos nossos clientes, sempre com o melhor preço e 
                atendimento personalizado.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="px-8">
                Conheça Nossa História
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;