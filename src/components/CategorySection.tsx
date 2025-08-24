import React from 'react';
import { Zap, Monitor, Package, Percent } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '@/lib/images';

const CategorySection = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Máquinas Industriais",
      description: "Equipamentos robustos para sua indústria",
      items: "150+ produtos",
      bgGradient: "from-primary via-primary-glow to-primary-dark",
      bgImage: IMAGES.heroIndustrial,
      slug: "maquinas-industriais"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Informática e Acessórios", 
      description: "Tecnologia de ponta para seu negócio",
      items: "200+ produtos",
      bgGradient: "from-blue-600 via-blue-700 to-blue-800",
      bgImage: IMAGES.heroTech,
      slug: "informatica-acessorios"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Importados & Diversos",
      description: "Produtos especiais importados diretamente",
      items: "80+ produtos",
      bgGradient: "from-green-600 via-green-700 to-green-800",
      bgImage: IMAGES.productLaptop,
      slug: "importados-diversos"
    },
    {
      icon: <Percent className="h-8 w-8" />,
      title: "Promoções",
      description: "Ofertas especiais e produtos em desconto",
      items: "25+ ofertas ativas",
      bgGradient: "from-red-600 via-red-700 to-red-800",
      bgImage: IMAGES.productMeat,
      slug: "promocoes"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Nossas <span className="text-primary">Categorias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre exatamente o que precisa em nossa ampla gama de produtos organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div 
                className="h-32 relative bg-cover bg-center"
                style={{
                  backgroundImage: `url(${category.bgImage})`
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-85 group-hover:opacity-75 transition-opacity duration-300`} />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="relative h-full flex items-center justify-center text-white z-10">
                  {category.icon}
                </div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-xs text-primary font-semibold mb-4">
                  {category.items}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => navigate(`/${category.slug}`)}
                >
                  Explorar Categoria
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;