import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Percent, Zap, Clock, Flame, Gift, Star, Timer, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Promocoes = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('discount');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categorias = [
    { value: 'todas', label: 'Todas as Promoções' },
    { value: 'industrial', label: 'Máquinas Industriais' },
    { value: 'informatica', label: 'Informática' },
    { value: 'importados', label: 'Importados' },
    { value: 'liquidacao', label: 'Liquidação' },
    { value: 'black-friday', label: 'Black Friday' },
    { value: 'fim-ano', label: 'Fim de Ano' }
  ];

  const promocoes = [
    {
      id: 1,
      name: 'Máquina de Corte a Laser CO2 - MEGA PROMOÇÃO',
      price: 380000,
      originalPrice: 520000,
      image: '/src/assets/product-laser.jpg',
      category: 'industrial' as const,
      isNew: true,
      discount: 27,
      tipoPromocao: 'black-friday',
      tempoRestante: '2d 14h 30m',
      estoque: 3,
      estoqueTotal: 10,
      caracteristicas: ['Potência 100W', 'Área 1300x900mm', 'Software grátis', 'Instalação incluída']
    },
    {
      id: 2,
      name: 'Laptop Dell Inspiron 15 - Oferta Relâmpago',
      price: 65000,
      originalPrice: 95000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: false,
      discount: 32,
      tipoPromocao: 'liquidacao',
      tempoRestante: '6h 45m',
      estoque: 5,
      estoqueTotal: 8,
      caracteristicas: ['Intel i5', '8GB RAM', '256GB SSD', 'Tela 15.6"']
    },
    {
      id: 3,
      name: 'Monitor Gaming 27" 144Hz - SUPER DESCONTO',
      price: 28000,
      originalPrice: 42000,
      image: '/src/assets/product-monitor.jpg',
      category: 'tech' as const,
      isNew: false,
      discount: 33,
      tipoPromocao: 'fim-ano',
      tempoRestante: '1d 8h 20m',
      estoque: 12,
      estoqueTotal: 15,
      caracteristicas: ['27" QHD', '144Hz', 'IPS', 'FreeSync']
    },
    {
      id: 4,
      name: 'Kit Teclado + Mouse Gamer RGB - Combo Especial',
      price: 6500,
      originalPrice: 12000,
      image: '/src/assets/product-keyboard.jpg',
      category: 'tech' as const,
      isNew: true,
      discount: 46,
      tipoPromocao: 'black-friday',
      tempoRestante: '5d 12h 15m',
      estoque: 25,
      estoqueTotal: 30,
      caracteristicas: ['Mecânico', 'RGB', 'DPI 8000', 'Anti-ghosting']
    },
    {
      id: 5,
      name: 'Máquina de Costura Industrial - Promoção Especial',
      price: 95000,
      originalPrice: 125000,
      image: '/src/assets/product-sewing.jpg',
      category: 'industrial' as const,
      isNew: false,
      discount: 24,
      tipoPromocao: 'liquidacao',
      tempoRestante: '3d 6h 40m',
      estoque: 2,
      estoqueTotal: 5,
      caracteristicas: ['Overlock 5 fios', 'Motor servo', '7000 RPM', 'Garantia 2 anos']
    },
    {
      id: 6,
      name: 'Drone 4K Profissional - Oferta Imperdível',
      price: 48000,
      originalPrice: 75000,
      image: '/src/assets/product-laptop.jpg',
      category: 'tech' as const,
      isNew: true,
      discount: 36,
      tipoPromocao: 'fim-ano',
      tempoRestante: '4d 2h 55m',
      estoque: 8,
      estoqueTotal: 12,
      caracteristicas: ['4K UHD', 'Gimbal 3 eixos', 'GPS', '30min voo']
    }
  ];

  const promocoesFiltradas = selectedCategory === 'todas' 
    ? promocoes 
    : promocoes.filter(p => p.tipoPromocao === selectedCategory || p.category === selectedCategory);

  const ofertas = [
    {
      titulo: "Black Friday Tech",
      descricao: "Até 50% OFF em produtos de informática",
      desconto: "50%",
      cor: "from-black to-gray-800",
      icone: <Zap className="h-8 w-8" />
    },
    {
      titulo: "Liquidação Industrial",
      descricao: "Máquinas industriais com mega descontos",
      desconto: "40%",
      cor: "from-red-600 to-red-800",
      icone: <Flame className="h-8 w-8" />
    },
    {
      titulo: "Fim de Ano",
      descricao: "Promoções especiais para fechar o ano",
      desconto: "35%",
      cor: "from-purple-600 to-purple-800",
      icone: <Gift className="h-8 w-8" />
    }
  ];

  const beneficios = [
    {
      icon: <Percent className="h-8 w-8 text-primary" />,
      title: "Descontos Reais",
      description: "Descontos de verdade, sem pegadinhas. Economize até 50% em produtos selecionados"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Ofertas Limitadas",
      description: "Promoções por tempo limitado. Não perca a oportunidade de economizar"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Produtos Premium",
      description: "Apenas produtos de alta qualidade em promoção. Qualidade garantida"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Entrega Rápida",
      description: "Mesmo em promoção, mantemos nossa entrega rápida e segura"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
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
              <Flame className="h-5 w-5 mr-2" />
              PROMOÇÕES ATIVAS
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">MEGA</span> Promoções
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              Descontos incríveis de até <span className="text-yellow-300 font-bold text-3xl">50% OFF</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Timer className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Ofertas por Tempo Limitado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <TrendingDown className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">25+ Produtos em Promoção</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Qualidade Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertas Especiais */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Campanhas <span className="text-primary">Especiais</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ofertas.map((oferta, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${oferta.cor} text-white p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    {oferta.icone}
                    <Badge className="bg-white/20 text-white text-lg px-3 py-1">
                      -{oferta.desconto}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{oferta.titulo}</h3>
                  <p className="text-white/90">{oferta.descricao}</p>
                </div>
                <CardContent className="p-4">
                  <Button className="w-full">Ver Produtos</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vantagens das Nossas <span className="text-primary">Promoções</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {beneficio.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{beneficio.title}</h3>
                  <p className="text-muted-foreground text-sm">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Promoção */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Produtos em <span className="text-primary">Promoção</span>
          </h2>

          {/* Filtros e Ordenação */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4 items-center">
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Maior Desconto</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="time">Tempo Restante</SelectItem>
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
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {promocoesFiltradas.map((produto) => (
              <Card key={produto.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Badge de Desconto */}
                <div className="relative">
                  <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white text-lg px-3 py-1">
                    -{produto.discount}% OFF
                  </Badge>
                  {produto.tempoRestante && (
                    <Badge className="absolute top-2 right-2 z-10 bg-orange-500 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {produto.tempoRestante}
                    </Badge>
                  )}
                </div>

                <ProductCard 
                  id={produto.id}
                  name={produto.name}
                  price={produto.price}
                  originalPrice={produto.originalPrice}
                  image={produto.image}
                  category={produto.category}
                  isNew={produto.isNew}
                  discount={produto.discount}
                />

                {/* Barra de Estoque */}
                <CardContent className="p-4 pt-0">
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>Estoque disponível</span>
                      <span>{produto.estoque} de {produto.estoqueTotal}</span>
                    </div>
                    <Progress 
                      value={(produto.estoque / produto.estoqueTotal) * 100} 
                      className="h-2"
                    />
                  </div>
                  
                  {produto.estoque <= 3 && (
                    <p className="text-red-500 text-sm font-medium">
                      ⚠️ Últimas unidades disponíveis!
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {promocoesFiltradas.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhuma promoção encontrada nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promocoes;
