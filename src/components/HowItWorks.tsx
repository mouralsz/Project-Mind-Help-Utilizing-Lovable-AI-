
import React from 'react';
import { MessageCircle, Brain, UserCheck, Video } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Conversa Inicial",
      description: "Nossa IA especializada realiza uma triagem acolhedora através de perguntas cuidadosas sobre seu bem-estar emocional.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "2. Análise Inteligente",
      description: "Processamos suas respostas com algoritmos especializados em saúde mental para entender suas necessidades específicas.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "3. Correspondência Perfeita",
      description: "Conectamos você com o psicólogo mais adequado ao seu perfil e necessidades, considerando especialização e disponibilidade.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Video,
      title: "4. Atendimento Humanizado",
      description: "Receba suporte profissional via chat, áudio ou vídeo, no formato que você se sentir mais confortável.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como o <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Mindhelper</span> Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um processo simples e cuidadoso para conectar você ao suporte emocional que precisa, 
            quando precisa, sem barreiras ou longas esperas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar sua jornada de cuidado?
            </h3>
            <p className="text-gray-600 mb-6">
              O primeiro passo é sempre o mais importante. Estamos aqui para apoiar você.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Iniciar Triagem Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
