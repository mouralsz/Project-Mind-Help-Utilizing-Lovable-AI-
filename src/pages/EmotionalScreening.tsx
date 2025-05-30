
import React, { useState } from 'react';
import { Brain, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EmotionalScreening = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "Nas últimas duas semanas, com que frequência você se sentiu triste ou deprimido?",
    "Com que frequência você tem dificuldade para adormecer ou manter o sono?",
    "Você tem sentido ansiedade ou preocupação excessiva?",
    "Com que frequência você se sente sem energia ou motivação?",
    "Você tem evitado atividades sociais ou compromissos?",
    "Com que frequência você se sente irritado ou impaciente?",
    "Você tem dificuldade para se concentrar no trabalho ou estudos?",
    "Com que frequência você se sente sobrecarregado pelas responsabilidades?",
  ];

  const options = [
    { text: "Nunca", value: 0 },
    { text: "Raramente", value: 1 },
    { text: "Às vezes", value: 2 },
    { text: "Frequentemente", value: 3 },
    { text: "Sempre", value: 4 }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0);
    const percentage = (total / (questions.length * 4)) * 100;

    if (percentage <= 25) {
      return {
        level: "Baixo",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: CheckCircle,
        message: "Seus indicadores emocionais estão em um nível saudável. Continue cuidando do seu bem-estar!",
        recommendation: "Mantenha hábitos saudáveis e considere nossos recursos educativos para prevenção."
      };
    } else if (percentage <= 50) {
      return {
        level: "Moderado",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        icon: AlertCircle,
        message: "Alguns sinais indicam que você pode se beneficiar de apoio emocional.",
        recommendation: "Recomendamos conversar com um de nossos psicólogos para orientação personalizada."
      };
    } else {
      return {
        level: "Alto",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        icon: AlertCircle,
        message: "Os indicadores sugerem que você pode precisar de apoio profissional mais intensivo.",
        recommendation: "Recomendamos fortemente agendar uma sessão com um psicólogo o quanto antes."
      };
    }
  };

  if (showResult) {
    const result = getResult();
    const ResultIcon = result.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Resultado da Triagem</h1>
            </div>

            <div className={`${result.bgColor} ${result.borderColor} border rounded-2xl p-8 mb-8`}>
              <div className="text-center">
                <ResultIcon className={`w-12 h-12 ${result.color} mx-auto mb-4`} />
                <h2 className={`text-2xl font-bold ${result.color} mb-4`}>
                  Nível de Alerta: {result.level}
                </h2>
                <p className="text-gray-700 text-lg mb-4">{result.message}</p>
                <p className="text-gray-600">{result.recommendation}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Próximos Passos</h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => navigate('/chat')}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  size="lg"
                >
                  Conversar com um Psicólogo
                </Button>
                <Button 
                  onClick={() => navigate('/recursos')}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  size="lg"
                >
                  Explorar Recursos Educativos
                </Button>
                <Button 
                  onClick={() => navigate('/')}
                  variant="ghost"
                  className="w-full text-gray-600 hover:text-gray-900"
                >
                  Voltar ao Início
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Triagem Emocional</h1>
            <p className="text-gray-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-8">
              {questions[currentQuestion]}
            </h2>

            <div className="space-y-3">
              {options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  variant="outline"
                  className="w-full text-left justify-start p-4 h-auto hover:bg-blue-50 hover:border-blue-300"
                >
                  {option.text}
                </Button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                onClick={() => navigate('/')}
                variant="ghost"
                className="text-gray-500"
              >
                Cancelar Triagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionalScreening;
