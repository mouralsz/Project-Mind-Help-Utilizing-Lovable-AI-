
import React from 'react';
import { Heart, MessageCircle, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: "Chat 24/7",
      description: "Suporte emocional disponível a qualquer momento"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Suas conversas são completamente confidenciais"
    },
    {
      icon: Clock,
      title: "Sem Espera",
      description: "Conecte-se instantaneamente com psicólogos qualificados"
    }
  ];

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cuidado emocional quando você
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                mais precisa
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Conecte-se com psicólogos licenciados através de nossa plataforma segura. 
              Receba suporte emocional personalizado via chat, áudio ou vídeo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => navigate('/triagem')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Começar Triagem Gratuita
              </Button>
              
              <Button 
                onClick={() => navigate('/login')}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Entrar na Plataforma
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-3">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Eduardo Moura</h4>
                    <p className="text-sm text-gray-600">Psicólogo Clínico • Online</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Olá! Como posso ajudar você hoje? Estou aqui para oferecer um espaço seguro e acolhedor."
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">15 psicólogos online agora</span>
                </div>
                <p className="text-white/80 text-sm">
                  Tempo médio de resposta: menos de 5 minutos
                </p>
              </div>
            </div>
            
            {/* Novo efeito: ondas flutuantes */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-40 animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
