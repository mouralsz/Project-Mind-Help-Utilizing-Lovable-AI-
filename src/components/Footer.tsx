
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="text-2xl font-bold">Mindhelper</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              O Mindhelper é uma solução moderna, inclusiva e urgente para um problema que não pode esperar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => navigate('/triagem')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Triagem Emocional
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/chat')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Chat com Psicólogos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/videochamadas')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Videochamadas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/recursos')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Recursos Educativos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/acompanhamento')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Acompanhamento
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">contato@mindhelper.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Brasília, DF</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <p className="text-red-300 text-sm font-semibold mb-1">Emergência 24h</p>
              <p className="text-red-200 text-sm">CVV: 188</p>
              <p className="text-red-200 text-sm">SAMU: 192</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
            <span>© 2024 Mindhelper. Todos os direitos reservados.</span>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/politica-privacidade')}
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </button>
              <button 
                onClick={() => navigate('/termos-uso')}
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => navigate('/codigo-etica')}
                className="hover:text-white transition-colors"
              >
                Código de Ética
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>para cuidar de você</span>
          </div>
        </div>

        {/* Professional Info */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg text-center">
          <p className="text-xs text-gray-400">
            Mindhelper não substitui tratamento médico ou psicológico presencial. 
            Em caso de emergência, procure atendimento médico imediato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
