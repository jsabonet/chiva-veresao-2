import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Star, Clock, Shield, Truck, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const TodosProdutos = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const categorias = [
    { value: 'todas', label: 'Todas as Categorias' },
    { value: 'industrial', label: 'Máquinas Industriais' },
    { value: 'tech', label: 'Informática e Tecnologia' },
    { value: 'importados', label: 'Produtos Importados' },
    { value: 'promocoes', label: 'Em Promoção' }
  ];

  // Todos os produtos do site
  const todosProdutos = [
    // Produtos em Destaque
    {
      id: 1,
      name: "Máquina de Corte e Gravação a Laser Industrial",
      price: 450000,
      originalPrice: 500000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      discount: 10,
      isNew: true,
      subcategory: 'laser'
    },
    {
      id: 2,
      name: "Laptop Gaming Dell Inspiron 15 - Intel i7 16GB RAM",
      price: 85000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: true,
      subcategory: 'laptops'
    },
    {
      id: 3,
      name: "Máquina de Costura Industrial Singer Heavy Duty",
      price: 125000,
      image: '/src/assets/product-sewing.jpg',
      category: 'industrial' as const,
      subcategory: 'costura'
    },
    {
      id: 4,
      name: "Teclado Mecânico Gamer RGB Corsair K95",
      price: 12500,
      originalPrice: 15000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      discount: 17,
      subcategory: 'perifericos'
    },
    // Mais Vendidos
    {
      id: 5,
      name: "Monitor Gaming Curvo 27\" 144Hz Samsung",
      price: 32000,
      image: '/src/assets/product-monitor.jpg',
      category: 'tech' as const,
      subcategory: 'monitores'
    },
    {
      id: 6,
      name: "Máquina de Processamento de Carne Industrial",
      price: 320000,
      image: '/src/assets/product-meat.jpg',
      category: 'industrial' as const,
      subcategory: 'processamento'
    },
    {
      id: 7,
      name: "Laptop Business HP ProBook 14\" - Intel i5 8GB",
      price: 65000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: true,
      subcategory: 'laptops'
    },
    {
      id: 8,
      name: "Máquina de Corte a Laser Compacta Desktop",
      price: 180000,
      originalPrice: 200000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      discount: 10,
      subcategory: 'laser'
    },
    // Produtos Adicionais
    {
      id: 9,
      name: "Desktop Gamer Intel i9 32GB RTX 4070",
      price: 180000,
      originalPrice: 220000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      discount: 18,
      subcategory: 'desktops'
    },
    {
      id: 10,
      name: "Impressora 3D Industrial Metal",
      price: 550000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      isNew: true,
      subcategory: 'impressao'
    },
    {
      id: 11,
      name: "Mouse Gamer Logitech G Pro X Wireless",
      price: 8500,
      originalPrice: 12000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      discount: 29,
      subcategory: 'perifericos'
    },
    {
      id: 12,
      name: "Máquina de Solda Industrial MIG/TIG 400A",
      price: 195000,
      image: '/src/assets/product-sewing.jpg',
      category: 'industrial' as const,
      subcategory: 'soldagem'
    },
    {
      id: 13,
      name: "Notebook Ultrabook 13\" 16GB 512GB SSD",
      price: 95000,
      originalPrice: 110000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      discount: 14,
      subcategory: 'laptops'
    },
    {
      id: 14,
      name: "Monitor 4K 32\" Professional Dell UltraSharp",
      price: 85000,
      image: '/src/assets/product-monitor.jpg',
      category: 'tech' as const,
      subcategory: 'monitores'
    },
    {
      id: 15,
      name: "Estação de Trabalho CNC Router Industrial",
      price: 750000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      isNew: true,
      subcategory: 'cnc'
    },
    {
      id: 16,
      name: "Headset Gamer Wireless 7.1 Surround",
      price: 15000,
      originalPrice: 20000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      discount: 25,
      subcategory: 'perifericos'
    }
  ];

  // Filtrar produtos
  const produtosFiltrados = todosProdutos.filter(produto => {
    const matchesCategory = selectedCategory === 'todas' || 
      (selectedCategory === 'promocoes' && produto.discount) ||
      produto.category === selectedCategory;
    
    const matchesSearch = produto.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Ordenar produtos
  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const estatisticas = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: `${todosProdutos.length} Produtos`,
      description: "Catálogo completo de equipamentos e tecnologia"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Garantia Oficial",
      description: "Todos os produtos com garantia do fabricante"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Entrega Nacional",
      description: "Enviamos para todo Moçambique com segurança"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Suporte 24/7",
      description: "Atendimento especializado quando precisar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
          
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 text-lg px-4 py-2">
              <Star className="h-5 w-5 mr-2" />
              CATÁLOGO COMPLETO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Todos os <span className="text-yellow-300">Produtos</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Explore nosso catálogo completo com mais de {todosProdutos.length} produtos de alta qualidade. 
              Máquinas industriais, equipamentos de informática e produtos importados especiais.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">{todosProdutos.length} Produtos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Garantia Oficial</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Truck className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Entrega Nacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nosso <span className="text-primary">Catálogo Completo</span>
          </h2>

          {/* Busca e Filtros */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4 items-center flex-1">
              {/* Busca */}
              <div className="relative min-w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar produtos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filtro de Categoria */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Filtrar por categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Ordenação */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome A-Z</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="discount">Maior Desconto</SelectItem>
                  <SelectItem value="newest">Mais Recentes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Modo de Visualização */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contador de Resultados */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Mostrando <span className="font-bold">{produtosOrdenados.length}</span> de <span className="font-bold">{todosProdutos.length}</span> produtos
              {searchTerm && (
                <span> para "<span className="font-bold">{searchTerm}</span>"</span>
              )}
            </p>
          </div>

          {/* Grid de Produtos */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {produtosOrdenados.map((produto) => (
              <ProductCard 
                key={produto.id} 
                id={produto.id}
                name={produto.name}
                price={produto.price}
                originalPrice={produto.originalPrice}
                image={produto.image}
                category={produto.category}
                isNew={produto.isNew}
                discount={produto.discount}
              />
            ))}
          </div>

          {produtosOrdenados.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                Nenhum produto encontrado
                {searchTerm && (
                  <span> para "<span className="font-bold">{searchTerm}</span>"</span>
                )}
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todas');
              }}>
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TodosProdutos;
