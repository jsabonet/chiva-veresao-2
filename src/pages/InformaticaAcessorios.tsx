import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Monitor, Laptop, Smartphone, Headphones, Mouse, Keyboard, Star, Clock, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { IMAGES } from '@/lib/images';

const InformaticaAcessorios = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todas');

  const subcategorias = [
    { value: 'todas', label: 'Todas as Categorias' },
    { value: 'laptops', label: 'Laptops e Notebooks' },
    { value: 'desktops', label: 'Desktops e All-in-One' },
    { value: 'monitores', label: 'Monitores e Displays' },
    { value: 'perifericos', label: 'Periféricos' },
    { value: 'componentes', label: 'Componentes de PC' },
    { value: 'redes', label: 'Equipamentos de Rede' },
    { value: 'impressoras', label: 'Impressoras e Scanners' },
    { value: 'acessorios', label: 'Acessórios Diversos' }
  ];

  const produtos = [
    {
      id: 1,
      name: 'Laptop Dell Inspiron 15 3000 - Intel i5 8GB 512GB SSD',
      price: 85000,
      originalPrice: 95000,
      image: IMAGES.productLaptop,
      category: 'tech' as const,
      isNew: true,
      discount: 11,
      subcategory: 'laptops',
      specs: ['Intel Core i5-1135G7', '8GB RAM DDR4', '512GB SSD', 'Tela 15.6" Full HD']
    },
    {
      id: 2,
      name: 'Monitor Gaming LG 24" 144Hz IPS Full HD',
      price: 32000,
      image: IMAGES.productMonitor,
      category: 'tech' as const,
      isNew: false,
      subcategory: 'monitores',
      specs: ['24 polegadas IPS', '144Hz', '1ms resposta', 'FreeSync Premium']
    },
    {
      id: 3,
      name: 'Teclado Mecânico Gamer RGB Switches Blue',
      price: 8500,
      originalPrice: 12000,
      image: IMAGES.productKeyboard,
      category: 'tech' as const,
      isNew: false,
      discount: 29,
      subcategory: 'perifericos',
      specs: ['Switches Blue', 'RGB Backlight', 'Anti-Ghosting', 'Layout ABNT2']
    },
    {
      id: 4,
      name: 'Desktop HP EliteDesk 800 G6 - i7 16GB 1TB SSD',
      price: 120000,
      image: IMAGES.productLaptop,
      category: 'tech' as const,
      isNew: true,
      subcategory: 'desktops',
      specs: ['Intel Core i7-10700', '16GB RAM DDR4', '1TB SSD NVMe', 'Windows 11 Pro']
    },
    {
      id: 5,
      name: 'Impressora Multifuncional HP LaserJet Pro M404dw',
      price: 45000,
      originalPrice: 52000,
      image: IMAGES.productMonitor,
      category: 'tech' as const,
      isNew: false,
      discount: 13,
      subcategory: 'impressoras',
      specs: ['Laser Monocromática', 'WiFi e Ethernet', 'Duplex Automático', '38 ppm']
    },
    {
      id: 6,
      name: 'Router WiFi 6 TP-Link Archer AX3000 Gigabit',
      price: 18500,
      image: IMAGES.productKeyboard,
      category: 'tech' as const,
      isNew: true,
      subcategory: 'redes',
      specs: ['WiFi 6 AX3000', '4 portas Gigabit', 'MU-MIMO', 'Controle Parental']
    },
    {
      id: 7,
      name: 'SSD Kingston NV2 1TB NVMe PCIe 4.0',
      price: 12000,
      originalPrice: 15000,
      image: IMAGES.productLaptop,
      category: 'tech' as const,
      isNew: false,
      discount: 20,
      subcategory: 'componentes',
      specs: ['1TB Capacidade', 'PCIe 4.0 NVMe', '3500 MB/s leitura', '5 anos garantia']
    },
    {
      id: 8,
      name: 'Webcam Logitech C920 Full HD 1080p',
      price: 7800,
      image: IMAGES.productMonitor,
      category: 'tech' as const,
      isNew: false,
      subcategory: 'acessorios',
      specs: ['Full HD 1080p', 'Foco automático', 'Microfone stereo', 'USB plug-and-play']
    }
  ];

  const produtosFiltrados = selectedSubcategory === 'todas' 
    ? produtos 
    : produtos.filter(p => p.subcategory === selectedSubcategory);

  const vantagens = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Marcas Premium",
      description: "Produtos das melhores marcas: Dell, HP, Lenovo, Asus, Logitech e muito mais"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Garantia Oficial",
      description: "Garantia oficial do fabricante com suporte técnico especializado em Moçambique"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Suporte Técnico",
      description: "Assistência técnica qualificada para instalação, configuração e manutenção"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Entrega Segura",
      description: "Entrega rápida e segura em Nampula e todo o país com embalagem protegida"
    }
  ];

  const categorias = [
    { icon: <Laptop className="h-12 w-12" />, title: "Laptops", count: "50+ modelos" },
    { icon: <Monitor className="h-12 w-12" />, title: "Monitores", count: "40+ opções" },
    { icon: <Keyboard className="h-12 w-12" />, title: "Periféricos", count: "80+ produtos" },
    { icon: <Smartphone className="h-12 w-12" />, title: "Componentes", count: "100+ peças" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
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
                <Monitor className="h-4 w-4 mr-2" />
                Tecnologia Avançada
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Informática e <span className="text-cyan-300">Acessórios Tech</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Descubra nossa completa linha de produtos de informática: laptops, desktops, monitores, 
                periféricos e componentes das melhores marcas do mercado mundial.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-cyan-300" />
                  <span>200+ Produtos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-300" />
                  <span>Garantia Oficial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-cyan-300" />
                  <span>Suporte Técnico</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src={IMAGES.heroTech}
                alt="Tecnologia e Informática" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias Destaque */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Nossas <span className="text-primary">Categorias Tech</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categorias.map((categoria, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {categoria.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{categoria.title}</h3>
                  <p className="text-sm text-muted-foreground">{categoria.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vantagens Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vantagens de Comprar <span className="text-primary">Conosco</span>
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
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos <span className="text-primary">Produtos</span>
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

export default InformaticaAcessorios;
