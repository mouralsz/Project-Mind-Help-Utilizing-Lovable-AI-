
import React from 'react';
import { Brain, MessageCircle, Video, BookOpen, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Brain,
      title: "Triagem Emocional",
      description: "Avaliação inicial personalizada para identificar suas necessidades e direcioná-lo ao melhor cuidado.",
      features: ["Questionário validado cientificamente", "Análise de sintomas", "Recomendações personalizadas", "Relatório detalhado"],
      route: "/triagem"
    },
    {
      icon: MessageCircle,
      title: "Chat com Psicólogos",
      description: "Converse com psicólogos licenciados através de mensagens de texto seguras e confidenciais.",
      features: ["Disponível 24/7", "Resposta em até 24h", "Histórico de conversas", "Criptografia de ponta a ponta"],
      route: "/chat"
    },
    {
      icon: Video,
      title: "Videochamadas",
      description: "Sessões de terapia online através de videochamadas com qualidade profissional.",
      features: ["Agendamento flexível", "Sala virtual privada", "Gravação opcional", "Qualidade HD"],
      route: "/videochamadas"
    },
    {
      icon: BookOpen,
      title: "Recursos Educativos",
      description: "Acesse conteúdos educativos sobre saúde mental, técnicas de bem-estar e autoconhecimento.",
      features: ["Artigos especializados", "Meditações guiadas", "Vídeos educativos", "Exercícios práticos"],
      route: "/recursos"
    },
    {
      icon: Activity,
      title: "Acompanhamento",
      description: "Monitore seu progresso emocional com ferramentas de acompanhamento personalizadas.",
      features: ["Diário de humor", "Métricas de bem-estar", "Relatórios de progresso", "Alertas personalizados"],
      route: "/acompanhamento"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de saúde mental online, 
            projetados para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Principais características:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={() => navigate(service.route)}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                Acessar {service.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para começar?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Inicie sua jornada de bem-estar emocional hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/login')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
            >
              Começar Agora
            </Button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
