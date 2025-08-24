import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Award, Shield, Truck, Clock, Settings, Factory, Wrench, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const MaquinasIndustriais = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSubcategory, setSelectedSubcategory] = useState('todas');

  const subcategorias = [
    { value: 'todas', label: 'Todas as Categorias' },
    { value: 'corte-laser', label: 'Corte e Gravação a Laser' },
    { value: 'costura', label: 'Máquinas de Costura' },
    { value: 'processamento', label: 'Processamento de Alimentos' },
    { value: 'metalurgia', label: 'Metalurgia e Soldagem' },
    { value: 'textil', label: 'Equipamentos Têxteis' },
    { value: 'embalagem', label: 'Máquinas de Embalagem' }
  ];

  const produtos = [
    {
      id: 1,
      name: 'Máquina de Corte e Gravação a Laser Industrial CO2 150W',
      price: 450000,
      originalPrice: 520000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      isNew: true,
      discount: 13,
      subcategory: 'corte-laser',
      description: 'Máquina de alta precisão para corte e gravação em diversos materiais',
      features: ['Potência 150W', 'Área de trabalho 1300x900mm', 'Software incluído', 'Garantia 2 anos']
    },
    {
      id: 2,
      name: 'Máquina de Costura Industrial Overlock 5 Fios',
      price: 125000,
      image: '/src/assets/product-sewing.jpg',
      category: 'industrial' as const,
      isNew: false,
      subcategory: 'costura',
      description: 'Máquina overlock profissional para acabamentos perfeitos',
      features: ['5 fios simultâneos', 'Motor servo', 'Corte automático', 'Velocidade 7000 RPM']
    },
    {
      id: 3,
      name: 'Processadora de Carne Industrial 500kg/h',
      price: 280000,
      originalPrice: 320000,
      image: '/src/assets/product-meat.jpg',
      category: 'industrial' as const,
      isNew: false,
      discount: 12,
      subcategory: 'processamento',
      description: 'Equipamento robusto para processamento de carnes em escala industrial',
      features: ['Capacidade 500kg/h', 'Aço inoxidável', 'Motor 5HP', 'Certificação sanitária']
    },
    {
      id: 4,
      name: 'Máquina de Solda MIG/MAG Industrial 400A',
      price: 195000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      isNew: true,
      subcategory: 'metalurgia',
      description: 'Equipamento de soldagem profissional para trabalhos pesados',
      features: ['Corrente 400A', 'Ciclo trabalho 60%', 'Display digital', 'Tocha refrigerada']
    },
    {
      id: 5,
      name: 'Máquina de Bordar Industrial 15 Agulhas',
      price: 350000,
      image: '/src/assets/product-sewing.jpg',
      category: 'industrial' as const,
      isNew: false,
      subcategory: 'textil',
      description: 'Bordadeira computadorizada para produção em série',
      features: ['15 agulhas', 'Área bordado 400x400mm', 'USB/Ethernet', '500 desenhos inclusos']
    },
    {
      id: 6,
      name: 'Embaladeira Automática Vacuum Sealer Pro',
      price: 89000,
      originalPrice: 105000,
      image: '/src/assets/product-meat.jpg',
      category: 'industrial' as const,
      isNew: false,
      discount: 15,
      subcategory: 'embalagem',
      description: 'Sistema de embalagem a vácuo para conservação de alimentos',
      features: ['Bomba 40m³/h', 'Selagem dupla', 'Câmara 520x420mm', 'Controle digital']
    }
  ];

  const produtosFiltrados = selectedSubcategory === 'todas' 
    ? produtos 
    : produtos.filter(p => p.subcategory === selectedSubcategory);

  const vantagens = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Qualidade Garantida",
      description: "Equipamentos de marcas reconhecidas mundialmente com certificações internacionais"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Garantia Extendida",
      description: "Garantia de até 2 anos com suporte técnico especializado e peças originais"
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Assistência Técnica",
      description: "Equipe técnica especializada para instalação, treinamento e manutenção"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Entrega e Instalação",
      description: "Entrega em todo Moçambique com instalação e comissionamento inclusos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary-glow to-primary-dark text-white py-16">
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
                <Factory className="h-4 w-4 mr-2" />
                Equipamentos Industriais
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Máquinas Industriais de <span className="text-yellow-300">Alta Performance</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Equipamentos robustos e tecnologia de ponta para aumentar a produtividade da sua indústria. 
                Soluções completas com garantia e suporte técnico especializado.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>150+ Equipamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-yellow-300" />
                  <span>Instalação Incluída</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/src/assets/hero-industrial.jpg" 
                alt="Máquinas Industriais" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que Escolher a <span className="text-primary">Chiva Computer & Service</span>?
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

export default MaquinasIndustriais;
