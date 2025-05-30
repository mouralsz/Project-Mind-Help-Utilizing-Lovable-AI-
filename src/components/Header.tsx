
import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header = ({ onMenuToggle, isMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Mindhelper
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </a>
            <button 
              onClick={() => navigate('/servicos')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#psicologos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Psicólogos
            </a>
            <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Recursos
            </a>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuToggle}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-blue-100 space-y-4">
            <a href="#inicio" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Início
            </a>
            <button 
              onClick={() => navigate('/servicos')}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
            >
              Serviços
            </button>
            <a href="#como-funciona" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#psicologos" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Psicólogos
            </a>
            <a href="#recursos" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Recursos
            </a>
            <Button 
              onClick={() => navigate('/login')}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
            >
              Começar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
