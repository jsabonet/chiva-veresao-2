import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data - in real app, this would come from API
  const products = {
    '1': {
      id: 1,
      name: 'Máquina de Corte e Gravação a Laser Industrial',
      price: 450000,
      originalPrice: 520000,
      category: 'industrial',
      images: ['/src/assets/product-laser.jpg', '/src/assets/product-laser.jpg'],
      description: 'Máquina de corte e gravação a laser de alta precisão, ideal para trabalhos industriais em diversos materiais como metal, madeira, acrílico e tecidos.',
      specifications: [
        'Potência: 150W CO2',
        'Área de trabalho: 1300x900mm',
        'Precisão: ±0.01mm',
        'Velocidade de corte: até 800mm/min',
        'Compatibilidade: AutoCAD, CorelDRAW'
      ],
      features: ['Controle CNC', 'Sistema de refrigeração', 'Interface touchscreen', 'Garantia 2 anos'],
      isNew: true,
      discount: 13
    },
    '2': {
      id: 2,
      name: 'Laptop Gaming Professional 16GB RAM',
      price: 85000,
      originalPrice: 95000,
      category: 'tech',
      images: ['/src/assets/product-laptop.jpg', '/src/assets/product-laptop.jpg'],
      description: 'Laptop de alta performance com processador Intel i7, placa gráfica dedicada e design elegante para profissionais e gamers.',
      specifications: [
        'Processador: Intel Core i7-12700H',
        'RAM: 16GB DDR4',
        'Armazenamento: 512GB SSD NVMe',
        'Placa Gráfica: NVIDIA RTX 3060',
        'Tela: 15.6" Full HD IPS'
      ],
      features: ['Teclado retroiluminado', 'Webcam HD', 'Wi-Fi 6', 'USB-C Thunderbolt'],
      isNew: false,
      discount: 11
    },
    '3': {
      id: 3,
      name: 'Máquina de Costura Industrial Singer Heavy Duty',
      price: 125000,
      category: 'industrial',
      images: ['/src/assets/product-sewing.jpg', '/src/assets/product-sewing.jpg'],
      description: 'Máquina de costura industrial robusta e confiável, ideal para trabalhos pesados em tecidos grossos e produção em série.',
      specifications: [
        'Tipo: Overlock 5 fios',
        'Velocidade: até 7000 pontos/min',
        'Motor: Servo 550W',
        'Altura do pé: até 15mm',
        'Comprimento do ponto: 0.5-5mm'
      ],
      features: ['Corte automático de linha', 'Sistema de lubrificação', 'Painel de controle digital', 'Garantia 2 anos'],
      isNew: false
    },
    '4': {
      id: 4,
      name: 'Teclado Mecânico Gamer RGB Corsair K95',
      price: 12500,
      originalPrice: 15000,
      category: 'tech',
      images: ['/src/assets/product-keyboard.jpg', '/src/assets/product-keyboard.jpg'],
      description: 'Teclado mecânico premium para gamers com switches Cherry MX, iluminação RGB personalizável e teclas macro programáveis.',
      specifications: [
        'Switches: Cherry MX Speed',
        'Layout: ABNT2 Português',
        'Iluminação: RGB por tecla',
        'Teclas macro: 6 dedicadas',
        'Conectividade: USB 2.0'
      ],
      features: ['Anti-ghosting', 'Polling rate 1000Hz', 'Software iCUE', 'Apoio para punho'],
      isNew: false,
      discount: 17
    },
    // Produtos da seção "Mais Vendidos"
    '5': {
      id: 5,
      name: 'Monitor Gaming Curvo 27" 144Hz Samsung',
      price: 32000,
      category: 'tech',
      images: ['/src/assets/product-monitor.jpg', '/src/assets/product-monitor.jpg'],
      description: 'Monitor gaming curvo de 27 polegadas com alta taxa de atualização, ideal para jogos competitivos e trabalho profissional.',
      specifications: [
        'Tela: 27" Curva 1800R',
        'Resolução: 2560x1440 (QHD)',
        'Taxa de atualização: 144Hz',
        'Tempo de resposta: 1ms',
        'Painel: VA'
      ],
      features: ['FreeSync Premium', 'Eye Saver Mode', 'Flicker Free', 'Múltiplas conexões HDMI/DP'],
      isNew: false
    },
    '6': {
      id: 6,
      name: 'Máquina de Processamento de Carne Industrial',
      price: 320000,
      category: 'industrial',
      images: ['/src/assets/product-meat.jpg', '/src/assets/product-meat.jpg'],
      description: 'Equipamento industrial robusto para processamento de carnes, ideal para açougues, restaurantes e indústrias alimentícias.',
      specifications: [
        'Capacidade: 500kg/hora',
        'Motor: 5HP trifásico',
        'Material: Aço inoxidável 304',
        'Dimensões: 120x80x95cm',
        'Voltagem: 220V/380V'
      ],
      features: ['Certificação sanitária', 'Fácil limpeza', 'Sistema de segurança', 'Garantia 3 anos'],
      isNew: false
    },
    '7': {
      id: 7,
      name: 'Laptop Business HP ProBook 14" - Intel i5 8GB',
      price: 65000,
      category: 'tech',
      images: ['/src/assets/product-laptop.jpg', '/src/assets/product-laptop.jpg'],
      description: 'Laptop corporativo ideal para profissionais, com design elegante, segurança avançada e performance confiável para o dia a dia.',
      specifications: [
        'Processador: Intel Core i5-1235U',
        'RAM: 8GB DDR4',
        'Armazenamento: 256GB SSD',
        'Tela: 14" Full HD IPS',
        'Sistema: Windows 11 Pro'
      ],
      features: ['Leitor de impressão digital', 'Webcam com privacidade', 'Wi-Fi 6E', 'Bateria até 10h'],
      isNew: true
    },
    '8': {
      id: 8,
      name: 'Máquina de Corte a Laser Compacta Desktop',
      price: 180000,
      originalPrice: 200000,
      category: 'industrial',
      images: ['/src/assets/product-laser.jpg', '/src/assets/product-laser.jpg'],
      description: 'Máquina de corte a laser compacta para uso desktop, perfeita para pequenos negócios, prototipagem e trabalhos artesanais.',
      specifications: [
        'Potência: 40W CO2',
        'Área de trabalho: 300x200mm',
        'Precisão: ±0.05mm',
        'Velocidade: até 500mm/min',
        'Software: LaserCAD incluído'
      ],
      features: ['Interface USB', 'Sistema de ventilação', 'Mesa móvel', 'Garantia 1 ano'],
      isNew: false,
      discount: 10
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate('/')}>Voltar à página inicial</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-MZ', {
      style: 'currency',
      currency: 'MZN',
      minimumFractionDigits: 0
    }).format(price).replace('MTn', 'MZN').replace('MT', 'MZN');
  };

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
            Voltar
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-muted/30">
              <img 
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  NOVO
                </Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                  -{product.discount}%
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.8) 24 avaliações</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="flex gap-3">
              {product.category === 'industrial' ? (
                <Button size="lg" className="flex-1">
                  Solicitar Orçamento
                </Button>
              ) : (
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              )}
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications and Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Especificações Técnicas</h3>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {spec}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;