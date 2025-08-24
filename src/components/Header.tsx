import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, Phone, Home, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top Bar with Contact */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
                <span>+258 87 849 4330</span>
            </div>
            <span>|</span>
              <span>WhatsApp: +258 87 849 4330</span>
          </div>
          <div className="hidden md:block">
              <span>Nampula Shopping 1º andar loja 20 | Email: chivaimportacoes@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/image.png" 
              alt="Chiva Computer & Service Lda" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="font-medium hover:text-primary transition-colors flex items-center gap-2">
              {/* <Home className="h-4 w-4" /> */}
              Início
            </a>
            <a href="/maquinas-industriais" className="font-medium hover:text-primary transition-colors">
              Máquinas Industriais
            </a>
            <a href="/informatica-acessorios" className="font-medium hover:text-primary transition-colors">
              Informática e Acessórios
            </a>
            <a href="/importados-diversos" className="font-medium hover:text-primary transition-colors">
              Importados & Diversos
            </a>
            <a href="/promocoes" className="font-medium hover:text-primary transition-colors text-primary">
              Promoções
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Pesquisar produtos..." 
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu de Navegação</SheetTitle>
                </SheetHeader>
                
                <div className="mt-8 space-y-4">
                  {/* Mobile Navigation Links */}
                  <a 
                    href="/" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Home className="h-5 w-5 text-primary" />
                    <span className="font-medium">Início</span>
                  </a>
                  
                  <a 
                    href="/maquinas-industriais" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Máquinas Industriais</span>
                  </a>
                  
                  <a 
                    href="/informatica-acessorios" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Informática e Acessórios</span>
                  </a>
                  
                  <a 
                    href="/importados-diversos" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Importados & Diversos</span>
                  </a>
                  
                  <a 
                    href="/promocoes" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium text-primary">Promoções</span>
                  </a>
                  
                  {/* Mobile Search */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Pesquisar produtos..." 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  {/* Mobile Actions */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <User className="h-4 w-4" />
                      Fazer Login
                    </Button>
                    
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4" />
                        <span>+258 87 849 4330</span>
                      </div>
                      <div className="text-xs">
                        Nampula Shopping 1º andar loja 20
                      </div>
                      <div className="text-xs">
                        chivaimportacoes@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar produtos..." 
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;