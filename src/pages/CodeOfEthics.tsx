
import React from 'react';
import { Heart, Users, Shield, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CodeOfEthics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Código de Ética</h1>
            <p className="text-xl text-gray-600">Nossos princípios e valores fundamentais</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Confidencialidade</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Todas as informações compartilhadas em nossa plataforma são tratadas com absoluta confidencialidade. 
                  Nossos profissionais seguem rigorosamente o sigilo profissional estabelecido pelo Conselho Federal de Psicologia.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proteção integral de dados pessoais e clínicos</li>
                  <li>Acesso restrito apenas aos profissionais designados</li>
                  <li>Não compartilhamento de informações sem consentimento explícito</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">2. Respeito e Dignidade</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Tratamos todos os usuários com respeito, dignidade e sem qualquer forma de discriminação:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acolhimento humanizado e empático</li>
                  <li>Respeito à diversidade cultural, sexual e religiosa</li>
                  <li>Tratamento igualitário independente de condição social</li>
                  <li>Valorização da autonomia e decisões do usuário</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Competência Profissional</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Nossos profissionais mantêm os mais altos padrões de competência:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formação acadêmica e registro profissional válidos</li>
                  <li>Educação continuada e atualização constante</li>
                  <li>Atuação dentro dos limites de competência</li>
                  <li>Encaminhamento responsável quando necessário</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilidade Social</h2>
              <div className="text-gray-700 space-y-4">
                <p>Comprometemo-nos com o bem-estar social e a promoção da saúde mental:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Democratização do acesso aos cuidados psicológicos</li>
                  <li>Educação e prevenção em saúde mental</li>
                  <li>Combate ao estigma e preconceito</li>
                  <li>Contribuição para políticas públicas de saúde</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Transparência</h2>
              <div className="text-gray-700 space-y-4">
                <p>Mantemos total transparência em nossas práticas:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informações claras sobre métodos e processos</li>
                  <li>Comunicação aberta sobre limitações dos serviços</li>
                  <li>Consentimento informado para todos os procedimentos</li>
                  <li>Prestação de contas regular à comunidade</li>
                </ul>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Nosso Compromisso</h3>
              <p className="text-gray-700">
                A Mindhelper se compromete a seguir rigorosamente estes princípios éticos, 
                garantindo que cada usuário receba o melhor cuidado possível em um ambiente 
                seguro, respeitoso e profissional.
              </p>
            </section>

            <section className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Denúncias Éticas</h3>
              <p className="text-red-700 mb-2">
                Para reportar violações éticas ou fazer denúncias:
              </p>
              <p className="text-red-700 font-semibold">etica@mindhelper.com</p>
              <p className="text-red-600 text-sm mt-2">
                Todas as denúncias são tratadas com sigilo e investigadas adequadamente.
              </p>
            </section>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700">
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfEthics;
