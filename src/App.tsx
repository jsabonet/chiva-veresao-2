import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import MaquinasIndustriais from "./pages/MaquinasIndustriais";
import InformaticaAcessorios from "./pages/InformaticaAcessorios";
import ImportadosDiversos from "./pages/ImportadosDiversos";
import Promocoes from "./pages/Promocoes";
import TodosProdutos from "./pages/TodosProdutos";
import MaisVendidos from "./pages/MaisVendidos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/categoria/:category" element={<Category />} />
          <Route path="/maquinas-industriais" element={<MaquinasIndustriais />} />
          <Route path="/informatica-acessorios" element={<InformaticaAcessorios />} />
          <Route path="/importados-diversos" element={<ImportadosDiversos />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/todos-produtos" element={<TodosProdutos />} />
          <Route path="/mais-vendidos" element={<MaisVendidos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
