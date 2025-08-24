import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Mock category data
  const categoryData = {
    'maquinas-industriais': {
      title: 'Máquinas Industriais',
      description: 'Equipamentos industriais robustos e de alta qualidade para diversos setores',
      products: [
        {
          id: 1,
          name: 'Máquina de Corte e Gravação a Laser Industrial',
          price: 450000,
          originalPrice: 520000,
          image: '/src/assets/product-laser.jpg',
          category: 'industrial' as const,
          isNew: true,
          discount: 13
        },
        {
          id: 3,
          name: 'Máquina de Costura Industrial Automática',
          price: 125000,
          image: '/src/assets/product-sewing.jpg',
          category: 'industrial' as const,
          isNew: false
        },
        {
          id: 6,
          name: 'Máquina de Processamento de Carne',
          price: 280000,
          originalPrice: 320000,
          image: '/src/assets/product-meat.jpg',
          category: 'industrial' as const,
          isNew: false,
          discount: 12
        }
      ]
    },
    'informatica': {
      title: 'Informática e Acessórios',
      description: 'Computadores, laptops, periféricos e acessórios tecnológicos',
      products: [
        {
          id: 2,
          name: 'Laptop Gaming Professional 16GB RAM',
          price: 85000,
          originalPrice: 95000,
          image: '/src/assets/product-laptop.jpg',
          category: 'tech' as const,
          isNew: false,
          discount: 11
        },
        {
          id: 4,
          name: 'Teclado Mecânico RGB Gaming',
          price: 8500,
          image: '/src/assets/product-keyboard.jpg',
          category: 'tech' as const,
          isNew: true
        },
        {
          id: 5,
          name: 'Monitor 4K Ultra HD 32 Polegadas',
          price: 65000,
          originalPrice: 75000,
          image: '/src/assets/product-monitor.jpg',
          category: 'tech' as const,
          isNew: false,
          discount: 13
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoria não encontrada</h1>
          <Button onClick={() => navigate('/')}>Voltar à página inicial</Button>
        </div>
      </div>
    );
  }

  const sortedProducts = [...currentCategory.products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Início
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{currentCategory.title}</span>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{currentCategory.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <span className="text-sm text-muted-foreground">
              {sortedProducts.length} produtos encontrados
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Ordenar por nome</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Produtos
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;