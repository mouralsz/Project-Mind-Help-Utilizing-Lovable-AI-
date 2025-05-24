
import React, { useState } from 'react';
import { ArrowLeft, Check, Shield, Clock, Heart, Gift } from 'lucide-react';
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
      priceUSD: '5.99',
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
      priceUSD: '11.99',
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
      priceUSD: '19.99',
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
    const selectedPlanData = plans.find(p => p.id === selectedPlan);
    
    // Conta PayPal fictícia para receber os pagamentos
    const paypalBusinessEmail = 'mindhelper.business@gmail.com';
    
    // Parâmetros para o PayPal com período de teste
    const paypalParams = new URLSearchParams({
      cmd: '_xclick-subscriptions',
      business: paypalBusinessEmail,
      item_name: `Mindhelper - ${selectedPlanData?.name} (7 dias grátis)`,
      item_number: selectedPlan,
      currency_code: 'USD',
      a1: '0.00', // Valor do período de teste (grátis)
      p1: '7', // Duração do período de teste (7 dias)
      t1: 'D', // Tipo de período de teste (D = dias)
      a3: selectedPlanData?.priceUSD || '11.99', // Valor da assinatura após o teste
      p3: '1', // Período (1 mês)
      t3: 'M', // Tipo de período (M = mensal)
      src: '1', // Assinatura recorrente
      sra: '1', // Tentar novamente se falhar
      no_note: '1',
      return: `${window.location.origin}/`,
      cancel_return: `${window.location.origin}/payment`,
      notify_url: `${window.location.origin}/payment-notification`
    });

    console.log('Processando pagamento via PayPal para o plano:', selectedPlan);
    console.log('Redirecionando para PayPal com os seguintes dados:', {
      plano: selectedPlanData?.name,
      valor: selectedPlanData?.priceUSD,
      periodo_teste: '7 dias grátis',
      email_business: paypalBusinessEmail
    });

    // Redirecionar para o PayPal (sandbox para teste)
    const paypalUrl = `https://www.sandbox.paypal.com/cgi-bin/webscr?${paypalParams.toString()}`;
    
    // Em produção, usar: https://www.paypal.com/cgi-bin/webscr
    window.location.href = paypalUrl;
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Gift className="w-4 h-4" />
              7 dias grátis para experimentar
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha seu plano de cuidado emocional
            </h2>
            <p className="text-xl text-gray-600">
              Invista na sua saúde mental com o apoio de profissionais qualificados
            </p>
            <p className="text-lg text-green-600 font-semibold mt-2">
              Comece com 7 dias gratuitos - cancele quando quiser
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
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-700 font-semibold text-sm">
                      7 dias grátis
                    </p>
                    <p className="text-green-600 text-xs">
                      Depois {plan.price}{plan.period}
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">USD ${plan.priceUSD}/mês após o teste</p>
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

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-green-800 text-lg">Período de Teste Gratuito</h4>
              </div>
              <p className="text-green-700 text-center text-sm">
                Experimente por 7 dias sem custo. Você pode cancelar a qualquer momento durante o período de teste.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {plans.find(p => p.id === selectedPlan)?.name}
                  </h4>
                  <p className="text-gray-600">7 dias grátis, depois assinatura mensal</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600 mb-1">
                    Grátis por 7 dias
                  </p>
                  <p className="text-gray-600 text-sm">
                    Depois {plans.find(p => p.id === selectedPlan)?.price} por mês
                  </p>
                  <p className="text-xs text-gray-500">
                    USD ${plans.find(p => p.id === selectedPlan)?.priceUSD}
                  </p>
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
                  <p className="text-xs text-gray-500">mindhelper.business@gmail.com</p>
                </div>
              </div>

              <Button
                onClick={handlePayPalPayment}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold text-lg"
              >
                Começar 7 dias grátis com PayPal
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
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Gift className="w-4 h-4 text-green-600" />
                <span>7 dias grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
