
import React from 'react';
import { ArrowLeft, BookOpen, Play, Download, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const EducationalResources = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Como lidar com a ansiedade no trabalho",
      author: "Dr. Eduardo Moura",
      readTime: "8 min",
      category: "Ansiedade",
      excerpt: "Estratégias práticas para gerenciar a ansiedade no ambiente profissional..."
    },
    {
      title: "Técnicas de respiração para relaxamento",
      author: "Dra. Carolina Santos",
      readTime: "5 min",
      category: "Bem-estar",
      excerpt: "Aprenda técnicas simples de respiração que podem ser feitas em qualquer lugar..."
    },
    {
      title: "Entendendo a depressão: sinais e tratamentos",
      author: "Dr. Ricardo Lima",
      readTime: "12 min",
      category: "Depressão",
      excerpt: "Um guia completo sobre os sintomas e opções de tratamento para depressão..."
    }
  ];

  const videos = [
    {
      title: "Meditação guiada para iniciantes",
      duration: "15 min",
      instructor: "Ana Meditation",
      thumbnail: "🧘‍♀️"
    },
    {
      title: "Exercícios de mindfulness",
      duration: "20 min",
      instructor: "Carlos Mindful",
      thumbnail: "🌟"
    },
    {
      title: "Técnicas de relaxamento muscular",
      duration: "12 min",
      instructor: "Maria Relax",
      thumbnail: "💆‍♀️"
    }
  ];

  const audios = [
    {
      title: "Sons da natureza para concentração",
      duration: "30 min",
      category: "Concentração"
    },
    {
      title: "Meditação para dormir melhor",
      duration: "25 min",
      category: "Sono"
    },
    {
      title: "Afirmações positivas diárias",
      duration: "10 min",
      category: "Autoestima"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header onMenuToggle={() => {}} isMenuOpen={false} />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/servicos')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Serviços
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Educativos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acesse conteúdos educativos sobre saúde mental, técnicas de bem-estar e autoconhecimento.
          </p>
        </div>

        {/* Artigos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Artigos Especializados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Por {article.author}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ler
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vídeos Educativos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{video.thumbnail}</div>
                    <Button variant="ghost" size="sm" className="text-white border border-white/20">
                      <Play className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.instructor}</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Áudios */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meditações e Áudios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audios.map((audio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{audio.title}</h3>
                    <p className="text-sm text-gray-600">{audio.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{audio.duration}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
