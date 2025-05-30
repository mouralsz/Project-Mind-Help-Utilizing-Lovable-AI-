
import React, { useState } from 'react';
import { BookOpen, Headphones, Video, FileText, Download, Play, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('articles');

  const articles = [
    {
      title: "Como Gerenciar a Ansiedade no Trabalho",
      author: "Dr. Eduardo Moura",
      readTime: "8 min",
      preview: "Descubra técnicas práticas para lidar com a ansiedade no ambiente profissional, incluindo exercícios de respiração e estratégias de organização...",
      category: "Ansiedade"
    },
    {
      title: "Técnicas de Respiração para o Controle Emocional",
      author: "Dr. Pedro Araújo",
      readTime: "5 min",
      preview: "Aprenda 5 técnicas simples de respiração que podem ser aplicadas em qualquer momento para reduzir o estresse e promover o bem-estar...",
      category: "Técnicas"
    },
    {
      title: "A Importância do Sono para a Saúde Mental",
      author: "Dr. Gabriel",
      readTime: "12 min",
      preview: "Entenda a relação entre qualidade do sono e saúde mental, com dicas práticas para melhorar seus hábitos noturnos...",
      category: "Bem-estar"
    },
    {
      title: "Construindo Relacionamentos Saudáveis",
      author: "Dr. Lucas Santos",
      readTime: "10 min",
      preview: "Explore os pilares de relacionamentos saudáveis e como desenvolver habilidades de comunicação efetiva...",
      category: "Relacionamentos"
    }
  ];

  const meditations = [
    {
      title: "Meditação para Reduzir a Ansiedade",
      duration: "15 min",
      guide: "Dr. Eduardo Moura",
      preview: "Uma sessão guiada focada em técnicas de respiração consciente e visualização para acalmar a mente ansiosa...",
      level: "Iniciante"
    },
    {
      title: "Relaxamento Profundo para Dormir",
      duration: "20 min",
      guide: "Dr. Gabriel",
      preview: "Meditação especialmente desenvolvida para preparar corpo e mente para um sono reparador e tranquilo...",
      level: "Todos os níveis"
    },
    {
      title: "Foco e Concentração no Trabalho",
      duration: "10 min",
      guide: "Dr. Pedro Araújo",
      preview: "Exercício de mindfulness para melhorar a capacidade de concentração e produtividade durante o trabalho...",
      level: "Intermediário"
    },
    {
      title: "Meditação de Autocompaixão",
      duration: "18 min",
      guide: "Dr. Denner Cauan",
      preview: "Pratique a gentileza consigo mesmo através desta meditação focada no desenvolvimento da autocompaixão...",
      level: "Iniciante"
    }
  ];

  const videos = [
    {
      title: "5 Técnicas de Grounding para Crises de Ansiedade",
      duration: "8 min",
      presenter: "Dr. Eduardo Moura",
      preview: "Aprenda técnicas práticas que utilizam os 5 sentidos para se reconectar com o presente durante momentos de ansiedade...",
      views: "12.5k"
    },
    {
      title: "Exercícios de Respiração: Guia Completo",
      duration: "12 min",
      presenter: "Dr. Pedro Araújo",
      preview: "Demonstração passo a passo de diferentes técnicas respiratórias para diferentes situações do dia a dia...",
      views: "8.2k"
    },
    {
      title: "Como Gerenciar Emoções Intensas",
      duration: "15 min",
      presenter: "Dr. Denner Cauan",
      preview: "Estratégias baseadas em TCC para identificar, compreender e regular emoções de forma saudável...",
      views: "15.7k"
    },
    {
      title: "Rotina de Autocuidado: Criando Hábitos Saudáveis",
      duration: "10 min",
      presenter: "Dr. Lucas Santos",
      preview: "Descubra como construir uma rotina de autocuidado personalizada que se adapte ao seu estilo de vida...",
      views: "9.8k"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Artigos sobre Saúde Mental",
      description: "Guias e artigos escritos por nossos especialistas sobre diversos temas relacionados ao bem-estar emocional.",
      items: ["Ansiedade no trabalho", "Técnicas de respiração", "Sono e saúde mental", "Relacionamentos saudáveis"],
      color: "from-blue-500 to-blue-600",
      action: "Ler Artigos",
      category: "articles"
    },
    {
      icon: Headphones,
      title: "Meditações Guiadas",
      description: "Sessões de meditação e mindfulness para diferentes momentos do seu dia e necessidades específicas.",
      items: ["Meditação para ansiedade", "Relaxamento para dormir", "Foco e concentração", "Autocompaixão"],
      color: "from-purple-500 to-purple-600",
      action: "Escutar Agora",
      category: "meditations"
    },
    {
      icon: Video,
      title: "Vídeos Educativos",
      description: "Conteúdo em vídeo com dicas práticas e exercícios para fortalecer sua saúde mental no dia a dia.",
      items: ["Técnicas de grounding", "Exercícios de respiração", "Gestão de emoções", "Autocuidado diário"],
      color: "from-teal-500 to-teal-600",
      action: "Assistir Vídeos",
      category: "videos"
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

  const renderContent = () => {
    switch (selectedCategory) {
      case 'articles':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{article.preview}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <Button size="sm" variant="outline">Ler Mais</Button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'meditations':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {meditations.map((meditation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {meditation.level}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {meditation.duration}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{meditation.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{meditation.preview}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {meditation.guide}
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Play className="w-4 h-4 mr-1" />
                    Ouvir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'videos':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    {video.views} visualizações
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{video.preview}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {video.presenter}
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Play className="w-4 h-4 mr-1" />
                    Assistir
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

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
            <div 
              key={index} 
              className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                selectedCategory === resource.category ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCategory(resource.category)}
            >
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

        {/* Content Preview Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {selectedCategory === 'articles' && 'Artigos em Destaque'}
              {selectedCategory === 'meditations' && 'Meditações Populares'}
              {selectedCategory === 'videos' && 'Vídeos Recomendados'}
            </h3>
          </div>
          
          {renderContent()}
        </div>

        {/* Emergency Resources */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16">
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
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
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
