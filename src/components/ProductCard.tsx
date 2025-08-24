import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'industrial' | 'tech';
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  discount
}) => {
  const navigate = useNavigate();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-MZ', {
      style: 'currency',
      currency: 'MZN',
      minimumFractionDigits: 0
    }).format(price).replace('MTn', 'MZN').replace('MT', 'MZN');
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl cursor-pointer">
      {/* Image Container */}
      <div 
        className="relative overflow-hidden bg-muted/30"
        onClick={() => navigate(`/produto/${id}`)}
      >
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              NOVO
            </span>
          )}
          {discount && (
            <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <Button size="sm" variant="secondary" className="rounded-full h-10 w-10 p-0">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full h-10 w-10 p-0">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 min-h-[3.5rem]">
            {name}
          </h3>
          
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            {category === 'industrial' ? (
              <Button className="flex-1" size="sm">
                Solicitar Orçamento
              </Button>
            ) : (
              <Button className="flex-1" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar ao Carrinho
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;