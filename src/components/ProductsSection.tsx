import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import productLaser from '@/assets/product-laser.jpg';
import productLaptop from '@/assets/product-laptop.jpg';
import productSewing from '@/assets/product-sewing.jpg';
import productKeyboard from '@/assets/product-keyboard.jpg';
import productMonitor from '@/assets/product-monitor.jpg';
import productMeat from '@/assets/product-meat.jpg';

const ProductsSection = () => {
  const navigate = useNavigate();
  const featuredProducts = [
    {
      id: 1,
      name: "Máquina de Corte e Gravação a Laser Industrial",
      price: 450000,
      originalPrice: 500000,
      image: productLaser,
      category: 'industrial' as const,
      discount: 10
    },
    {
      id: 2,
      name: "Laptop Gaming Dell Inspiron 15 - Intel i7 16GB RAM",
      price: 85000,
      image: productLaptop,
      category: 'tech' as const,
      isNew: true
    },
    {
      id: 3,
      name: "Máquina de Costura Industrial Singer Heavy Duty",
      price: 125000,
      image: productSewing,
      category: 'industrial' as const
    },
    {
      id: 4,
      name: "Teclado Mecânico Gamer RGB Corsair K95",
      price: 12500,
      originalPrice: 15000,
      image: productKeyboard,
      category: 'tech' as const,
      discount: 17
    }
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Monitor Gaming Curvo 27\" 144Hz Samsung",
      price: 32000,
      image: productMonitor,
      category: 'tech' as const
    },
    {
      id: 6,
      name: "Máquina de Processamento de Carne Industrial",
      price: 320000,
      image: productMeat,
      category: 'industrial' as const
    },
    {
      id: 7,
      name: "Laptop Business HP ProBook 14\" - Intel i5 8GB",
      price: 65000,
      image: productLaptop,
      category: 'tech' as const,
      isNew: true
    },
    {
      id: 8,
      name: "Máquina de Corte a Laser Compacta Desktop",
      price: 180000,
      originalPrice: 200000,
      image: productLaser,
      category: 'industrial' as const,
      discount: 10
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Products Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Produtos em <span className="text-primary">Destaque</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Seleção especial de produtos com os melhores preços e qualidade
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              onClick={() => navigate('/todos-produtos')}
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Best Sellers Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mais <span className="text-primary">Vendidos</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Os produtos favoritos dos nossos clientes
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              onClick={() => navigate('/mais-vendidos')}
            >
              Ver Mais Vendidos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;