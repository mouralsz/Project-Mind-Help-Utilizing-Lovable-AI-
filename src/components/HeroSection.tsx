
import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Cuidando da sua</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Saúde Mental
                </span>
                <br />
                <span className="text-gray-700 text-3xl lg:text-4xl">com tecnologia e empatia</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Sua ponte imediata para o cuidado emocional. Triagem inteligente, 
                atendimento humanizado e conexão instantânea com psicólogos qualificados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                Começar Triagem Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/login')}
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Falar com Psicólogo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600 font-medium">100% Seguro e Confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600 font-medium">Atendimento 24/7</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-500 font-medium">Mindhelper Chat</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-2xl rounded-bl-md p-4 max-w-xs">
                    <p className="text-blue-800">Olá! Sou o assistente do Mindhelper. Como você está se sentindo hoje?</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-2xl rounded-br-md p-4 max-w-xs ml-auto">
                    <p className="text-gray-700">Tenho me sentido muito ansioso ultimamente...</p>
                  </div>
                  
                  <div className="bg-blue-100 rounded-2xl rounded-bl-md p-4 max-w-xs">
                    <p className="text-blue-800">Entendo. Vou te ajudar com algumas perguntas para encontrar o melhor suporte.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span>Digitando...</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
