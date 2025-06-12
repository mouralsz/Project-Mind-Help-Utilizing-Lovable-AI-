
import React, { useState } from 'react';
import { BookOpen, Headphones, Play, ChevronRight, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ResourcesSection = () => {
  const navigate = useNavigate();
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const articles = [
    {
      title: "Como Lidar com a Ansiedade no Dia a Dia",
      preview: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva...",
      content: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode interferir significativamente na qualidade de vida. Neste artigo, exploramos técnicas comprovadas cientificamente para gerenciar a ansiedade no cotidiano, incluindo exercícios de respiração, mindfulness e reestruturação cognitiva. Também discutimos quando é importante buscar ajuda profissional e como identificar os sinais de que a ansiedade pode estar se tornando um transtorno.",
      author: "Dra. Ana Silva",
      readTime: "5 min"
    },
    {
      title: "Sinais de Depressão: Quando Buscar Ajuda",
      preview: "Reconhecer os primeiros sinais da depressão é fundamental para...",
      content: "Reconhecer os primeiros sinais da depressão é fundamental para buscar tratamento adequado. Este artigo aborda os sintomas mais comuns da depressão, incluindo alterações no humor, sono, apetite e energia. Explicamos a diferença entre tristeza normal e depressão clínica, e fornecemos orientações sobre quando e como procurar ajuda profissional. Também discutimos opções de tratamento disponíveis e desmitificamos conceitos errôneos sobre saúde mental.",
      author: "Dr. Carlos Mendes",
      readTime: "7 min"
    },
    {
      title: "Técnicas de Mindfulness para Iniciantes",
      preview: "O mindfulness pode ser uma ferramenta poderosa para reduzir o estresse...",
      content: "O mindfulness pode ser uma ferramenta poderosa para reduzir o estresse e melhorar o bem-estar mental. Neste guia prático, ensinamos técnicas básicas de atenção plena que podem ser facilmente incorporadas na rotina diária. Desde exercícios de respiração consciente até práticas de observação sem julgamento, oferecemos um roteiro completo para quem deseja começar a praticar mindfulness e colher seus benefícios para a saúde mental.",
      author: "Dra. Mariana Costa",
      readTime: "6 min"
    }
  ];

  const meditations = [
    {
      title: "Respiração Consciente",
      duration: "10 min",
      description: "Uma prática suave para acalmar a mente e reduzir a ansiedade",
      audioSample: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
      title: "Relaxamento Progressivo",
      duration: "15 min",
      description: "Técnica para liberar tensões físicas e mentais",
      audioSample: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    },
    {
      title: "Mindfulness para Dormir",
      duration: "20 min",
      description: "Práticas para uma noite de sono mais tranquila",
      audioSample: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
    }
  ];

  const videos = [
    {
      title: "Entendendo a Ansiedade",
      duration: "12 min",
      thumbnail: "/placeholder.svg",
      description: "Uma explicação completa sobre os mecanismos da ansiedade"
    },
    {
      title: "Técnicas de Respiração",
      duration: "8 min", 
      thumbnail: "/placeholder.svg",
      description: "Aprenda exercícios práticos de respiração"
    },
    {
      title: "Higiene do Sono",
      duration: "15 min",
      thumbnail: "/placeholder.svg",
      description: "Como criar uma rotina saudável para dormir melhor"
    }
  ];

  const toggleArticle = (index: number) => {
    setExpandedArticles(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const playTestSound = (index: number) => {
    if (playingAudio === index) {
      setPlayingAudio(null);
      return;
    }
    
    setPlayingAudio(index);
    // Simular som de teste
    const audio = new Audio();
    audio.src = meditations[index].audioSample;
    audio.play().catch(() => {
      // Fallback se não conseguir tocar o áudio
      console.log('Playing test sound for:', meditations[index].title);
    });
    
    setTimeout(() => {
      setPlayingAudio(null);
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="recursos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recursos para seu <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Bem-estar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acesse conteúdos especializados, meditações guiadas e vídeos educativos 
            para apoiar sua jornada de saúde mental.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Artigos sobre Saúde Mental */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Artigos</h3>
            </div>

            <div id="artigos-section" className="space-y-6">
              {articles.map((article, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {expandedArticles.includes(index) ? article.content : article.preview}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button
                    onClick={() => toggleArticle(index)}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 p-0"
                  >
                    {expandedArticles.includes(index) ? 'Ler menos' : 'Ler mais'}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('artigos-section')}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Ler Artigos
            </Button>
          </div>

          {/* Meditações Guiadas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Meditações</h3>
            </div>

            <div id="meditacoes-section" className="space-y-4">
              {meditations.map((meditation, index) => (
                <div key={index} className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{meditation.title}</h4>
                    <span className="text-sm text-purple-600 font-medium">{meditation.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{meditation.description}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => playTestSound(index)}
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      {playingAudio === index ? (
                        <Volume2 className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                      {playingAudio === index ? 'Tocando...' : 'Teste'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('meditacoes-section')}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
            >
              Escutar Agora
            </Button>
          </div>

          {/* Vídeos Educativos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vídeos</h3>
            </div>

            <div id="videos-section" className="space-y-4">
              {videos.map((video, index) => (
                <div key={index} className="bg-teal-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    <span className="text-sm text-teal-600 font-medium">{video.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                  <Button
                    onClick={() => navigate('/videos-recomendados')}
                    size="sm"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    Assistir <Play className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => navigate('/videos-recomendados')}
              className="w-full mt-6 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
            >
              Ver Todos os Vídeos
            </Button>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de apoio personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossos psicólogos especializados estão prontos para ajudar você.
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-3"
            >
              Falar com um Psicólogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
