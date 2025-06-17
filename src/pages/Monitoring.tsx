
import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Calendar, Heart, Brain, Smile, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Monitoring = () => {
  const navigate = useNavigate();
  const [moodData] = useState([
    { date: '2024-01-15', mood: 8, notes: 'Dia produtivo no trabalho' },
    { date: '2024-01-16', mood: 6, notes: 'Um pouco ansioso' },
    { date: '2024-01-17', mood: 9, notes: 'Excelente sessão de terapia' },
    { date: '2024-01-18', mood: 7, notes: 'Dia normal' },
    { date: '2024-01-19', mood: 5, notes: 'Estresse familiar' },
  ]);

  const getMoodEmoji = (mood: number) => {
    if (mood >= 8) return '😊';
    if (mood >= 6) return '😐';
    if (mood >= 4) return '😔';
    return '😢';
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 8) return 'text-green-600';
    if (mood >= 6) return 'text-yellow-600';
    if (mood >= 4) return 'text-orange-600';
    return 'text-red-600';
  };

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
            Acompanhamento <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Personalizado</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitore seu progresso emocional com ferramentas de acompanhamento personalizadas.
          </p>
        </div>

        {/* Métricas Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">7.2</h3>
                <p className="text-gray-600">Humor Médio</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">+12%</h3>
                <p className="text-gray-600">Melhoria</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15</h3>
                <p className="text-gray-600">Sessões</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">30</h3>
                <p className="text-gray-600">Dias Ativos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Diário de Humor */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Diário de Humor</h2>
            <div className="space-y-4">
              {moodData.map((entry, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{getMoodEmoji(entry.mood)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {new Date(entry.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className={`font-bold ${getMoodColor(entry.mood)}`}>
                        {entry.mood}/10
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{entry.notes}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-teal-600">
              Adicionar Entrada
            </Button>
          </div>

          {/* Alertas e Recomendações */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Alertas Personalizados</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Humor em queda</h4>
                    <p className="text-yellow-700 text-sm">
                      Seus registros mostram uma tendência de baixa nos últimos 3 dias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Smile className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Progresso positivo</h4>
                    <p className="text-blue-700 text-sm">
                      Você está mais consistente em suas sessões de terapia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Passos</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Agendar sessão semanal</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Completar exercício de respiração</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Ler artigo recomendado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
