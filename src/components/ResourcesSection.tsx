
import React from 'react';
import { BookOpen, Headphones, Video, FileText, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Artigos sobre Saúde Mental",
      description: "Guias e artigos escritos por nossos especialistas sobre diversos temas relacionados ao bem-estar emocional.",
      items: ["Ansiedade no trabalho", "Técnicas de respiração", "Sono e saúde mental", "Relacionamentos saudáveis"],
      color: "from-blue-500 to-blue-600",
      action: "Ler Artigos"
    },
    {
      icon: Headphones,
      title: "Meditações Guiadas",
      description: "Sessões de meditação e mindfulness para diferentes momentos do seu dia e necessidades específicas.",
      items: ["Meditação para ansiedade", "Relaxamento para dormir", "Foco e concentração", "Autocompaixão"],
      color: "from-purple-500 to-purple-600",
      action: "Escutar Agora"
    },
    {
      icon: Video,
      title: "Vídeos Educativos",
      description: "Conteúdo em vídeo com dicas práticas e exercícios para fortalecer sua saúde mental no dia a dia.",
      items: ["Técnicas de grounding", "Exercícios de respiração", "Gestão de emoções", "Autocuidado diário"],
      color: "from-teal-500 to-teal-600",
      action: "Assistir Vídeos"
    }
  ];

  const emergencyResources = [
    {
      title: "CVV - Centro de Valorização da Vida",
      description: "Apoio emocional e prevenção do suicídio",
      contact: "188 (gratuito)",
      available: "24 horas"
    },
    {
      title: "CAPS - Centro de Atenção Psicossocial",
      description: "Atendimento público em saúde mental",
      contact: "Busque o CAPS mais próximo",
      available: "Horário comercial"
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Gratuitos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conteúdo de qualidade para apoiar sua jornada de autocuidado e bem-estar emocional, 
            criado por profissionais especializados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.color} flex items-center justify-center mb-6`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {resource.description}
              </p>

              <ul className="space-y-2 mb-8">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full bg-gradient-to-r ${resource.color} hover:opacity-90 text-white`}>
                {resource.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Resources */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              🚨 Recursos de Emergência
            </h3>
            <p className="text-red-700">
              Se você está passando por uma crise emocional, não hesite em buscar ajuda imediata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <div className="space-y-1">
                  <p className="text-red-700 font-semibold">{resource.contact}</p>
                  <p className="text-sm text-gray-500">{resource.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Download CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Leve o Mindhelper com você
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Baixe nosso aplicativo e tenha acesso a todos os recursos, mesmo offline. 
            Sua saúde mental sempre ao seu alcance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold">
              <Download className="w-5 h-5 mr-2" />
              App Store
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
