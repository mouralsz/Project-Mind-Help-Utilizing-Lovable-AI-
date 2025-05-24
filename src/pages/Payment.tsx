
import React, { useState } from 'react';
import { ArrowLeft, Check, Shield, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Plano Básico',
      price: 'R$ 29,90',
      period: '/mês',
      features: [
        'Triagem de IA ilimitada',
        'Chat com psicólogos (2 sessões/mês)',
        'Recursos educacionais básicos',
        'Suporte por e-mail'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Plano Premium',
      price: 'R$ 59,90',
      period: '/mês',
      features: [
        'Triagem de IA ilimitada',
        'Chat, áudio e vídeo com psicólogos',
        'Sessões ilimitadas',
        'Recursos educacionais completos',
        'Acompanhamento personalizado',
        'Suporte prioritário 24/7'
      ],
      popular: true
    },
    {
      id: 'family',
      name: 'Plano Família',
      price: 'R$ 99,90',
      period: '/mês',
      features: [
        'Até 4 membros da família',
        'Todos os benefícios do Premium',
        'Sessões familiares especializadas',
        'Dashboard familiar',
        'Orientação parental'
      ],
      popular: false
    }
  ];

  const handlePayPalPayment = () => {
    // Aqui seria implementada a integração real com PayPal
    console.log('Processando pagamento via PayPal para o plano:', selectedPlan);
    alert('Redirecionando para PayPal...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Mindhelper
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha seu plano de cuidado emocional
            </h2>
            <p className="text-xl text-gray-600">
              Invista na sua saúde mental com o apoio de profissionais qualificados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl p-8 border-2 cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'border-blue-500 ring-4 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-300'
                } ${plan.popular ? 'ring-2 ring-teal-200' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {selectedPlan === plan.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Finalizar pagamento
            </h3>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </h4>
                  <p className="text-gray-600">Cobrança mensal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    {plans.find(p => p.id === selectedPlan)?.price}
                  </p>
                  <p className="text-gray-600">por mês</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 p-6 border-2 border-blue-200 rounded-2xl bg-blue-50">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">PP</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">PayPal</h4>
                  <p className="text-gray-600">Pagamento seguro via PayPal</p>
                </div>
              </div>

              <Button
                onClick={handlePayPalPayment}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold text-lg"
              >
                Pagar com PayPal
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Cancele a qualquer momento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
