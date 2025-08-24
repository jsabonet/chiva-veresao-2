import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Package, Globe, Star, Shield, Truck, Clock, Gift, Sparkles, Heart, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const ImportadosDiversos = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todas');

  const subcategorias = [
    { value: 'todas', label: 'Todas as Categorias' },
    { value: 'eletronicos', label: 'Eletrônicos Importados' },
    { value: 'casa-jardim', label: 'Casa e Jardim' },
    { value: 'saude-beleza', label: 'Saúde e Beleza' },
    { value: 'esporte-lazer', label: 'Esporte e Lazer' },
    { value: 'automotivo', label: 'Automotivo' },
    { value: 'brinquedos', label: 'Brinquedos e Games' },
    { value: 'moda-acessorios', label: 'Moda e Acessórios' },
    { value: 'ferramentas', label: 'Ferramentas e Utilitários' }
  ];

  const produtos = [
    {
      id: 1,
      name: 'Aspirador Robô Inteligente WiFi com Mapeamento Laser',
      price: 95000,
      originalPrice: 120000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: true,
      discount: 21,
      subcategory: 'casa-jardim',
      origem: 'China',
      caracteristicas: ['Mapeamento Laser', 'Controle WiFi', 'App Mobile', 'Bateria 5200mAh']
    },
    {
      id: 2,
      name: 'Smartwatch Fitness Tracker com Monitor Cardíaco',
      price: 12500,
      originalPrice: 18000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      isNew: false,
      discount: 31,
      subcategory: 'saude-beleza',
      origem: 'Coreia do Sul',
      caracteristicas: ['Monitor Cardíaco', 'GPS Integrado', 'Resistente à Água', '10 dias bateria']
    },
    {
      id: 3,
      name: 'Kit Ferramentas Elétricas Profissionais 120 Peças',
      price: 45000,
      image: '/src/assets/product-monitor.jpg',
      category: 'industrial' as const,
      isNew: true,
      subcategory: 'ferramentas',
      origem: 'Alemanha',
      caracteristicas: ['120 Peças', 'Maleta Organizada', 'Aço Temperado', 'Garantia 5 anos']
    },
    {
      id: 4,
      name: 'Console Portátil Retro Gaming 3000 Jogos',
      price: 8500,
      originalPrice: 12000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: false,
      discount: 29,
      subcategory: 'brinquedos',
      origem: 'Japão',
      caracteristicas: ['3000 Jogos', 'Tela 5 polegadas', 'Bateria 8h', 'Multiplayer']
    },
    {
      id: 5,
      name: 'Purificador de Ar UV-C com Filtro HEPA H13',
      price: 35000,
      originalPrice: 42000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      isNew: true,
      discount: 17,
      subcategory: 'casa-jardim',
      origem: 'Suécia',
      caracteristicas: ['Filtro HEPA H13', 'UV-C Esterilização', 'Sensor Qualidade Ar', 'WiFi Smart']
    },
    {
      id: 6,
      name: 'Massageador Cervical Elétrico Portátil',
      price: 15500,
      image: '/src/assets/product-monitor.jpg',
      category: 'tech' as const,
      isNew: false,
      subcategory: 'saude-beleza',
      origem: 'França',
      caracteristicas: ['15 Níveis Intensidade', 'Aquecimento', 'Portátil', 'Recarregável USB']
    },
    {
      id: 7,
      name: 'Drone 4K com Gimbal Estabilizado e GPS',
      price: 65000,
      originalPrice: 85000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: true,
      discount: 24,
      subcategory: 'esporte-lazer',
      origem: 'Estados Unidos',
      caracteristicas: ['Câmera 4K', 'Gimbal 3 Eixos', 'GPS Return Home', 'Autonomia 30min']
    },
    {
      id: 8,
      name: 'Kit Aromatherapy Difusor Ultrassônico Premium',
      price: 7800,
      originalPrice: 11000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      isNew: false,
      discount: 29,
      subcategory: 'casa-jardim',
      origem: 'Tailândia',
      caracteristicas: ['LED 7 Cores', 'Timer Programável', '10 Óleos Inclusos', 'Silencioso']
    }
  ];

  const produtosFiltrados = selectedSubcategory === 'todas' 
    ? produtos 
    : produtos.filter(p => p.subcategory === selectedSubcategory);

  const vantagens = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Importação Direta",
      description: "Produtos importados diretamente dos melhores fabricantes internacionais"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Qualidade Premium",
      description: "Selecionamos apenas produtos de alta qualidade com certificações internacionais"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Garantia Internacional",
      description: "Produtos com garantia internacional e suporte técnico especializado"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Logística Especializada",
      description: "Entrega segura com embalagem especial para produtos importados"
    }
  ];

  const categoriasDestaque = [
    { 
      icon: <Heart className="h-12 w-12" />, 
      title: "Saúde & Beleza", 
      count: "30+ produtos",
      description: "Dispositivos wellness e beleza"
    },
    { 
      icon: <Coffee className="h-12 w-12" />, 
      title: "Casa & Jardim", 
      count: "45+ produtos",
      description: "Soluções inteligentes para o lar"
    },
    { 
      icon: <Gift className="h-12 w-12" />, 
      title: "Presentes Únicos", 
      count: "60+ produtos",
      description: "Itens especiais e exclusivos"
    },
    { 
      icon: <Sparkles className="h-12 w-12" />, 
      title: "Gadgets Tech", 
      count: "40+ produtos",
      description: "Tecnologia inovadora"
    }
  ];

  const paisesOrigem = [
    { nome: "China", flag: "🇨🇳", produtos: 25 },
    { nome: "Japão", flag: "🇯🇵", produtos: 15 },
    { nome: "Alemanha", flag: "🇩🇪", produtos: 12 },
    { nome: "Estados Unidos", flag: "🇺🇸", produtos: 18 },
    { nome: "Coreia do Sul", flag: "🇰🇷", produtos: 10 },
    { nome: "França", flag: "🇫🇷", produtos: 8 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                <Package className="h-4 w-4 mr-2" />
                Produtos Exclusivos
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Importados & <span className="text-yellow-300">Produtos Diversos</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Descubra nossa coleção única de produtos importados de alta qualidade. 
                Gadgets inovadores, itens para casa, saúde, beleza e muito mais diretamente dos melhores fabricantes mundiais.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-yellow-300" />
                  <span>6 Países</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>80+ Produtos Únicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-yellow-300" />
                  <span>Garantia Internacional</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/src/assets/product-laptop.jpg" 
                  alt="Produto Importado 1" 
                  className="rounded-lg shadow-xl"
                />
                <img 
                  src="/src/assets/product-keyboard.jpg" 
                  alt="Produto Importado 2" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Países de Origem */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Importamos dos <span className="text-primary">Melhores Países</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paisesOrigem.map((pais, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">{pais.flag}</div>
                  <h3 className="font-bold text-sm mb-1">{pais.nome}</h3>
                  <p className="text-xs text-muted-foreground">{pais.produtos} produtos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Categorias Destaque */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Categorias em <span className="text-primary">Destaque</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriasDestaque.map((categoria, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {categoria.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{categoria.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{categoria.count}</p>
                  <p className="text-xs text-muted-foreground">{categoria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vantagens Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que Escolher Nossos <span className="text-primary">Importados</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantagens.map((vantagem, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {vantagem.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{vantagem.title}</h3>
                  <p className="text-muted-foreground text-sm">{vantagem.description}</p>
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
            Nossos <span className="text-primary">Produtos Importados</span>
          </h2>

          {/* Filtros e Ordenação */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Filtrar por categoria" />
                </SelectTrigger>
                <SelectContent>
                  {subcategorias.map(sub => (
                    <SelectItem key={sub.value} value={sub.value}>
                      {sub.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nome A-Z</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="newest">Mais Recentes</SelectItem>
                  <SelectItem value="discount">Maior Desconto</SelectItem>
                </SelectContent>
              </Select>
            </div>

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

          {/* Grid de Produtos */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {produtosFiltrados.map((produto) => (
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

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportadosDiversos;
