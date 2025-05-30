
import React from 'react';
import { FileText, Users, AlertTriangle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
            <p className="text-xl text-gray-600">Última atualização: Janeiro 2024</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Aceitação dos Termos</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Ao acessar e usar a plataforma Mindhelper, você concorda com estes Termos de Uso e nossa Política de Privacidade. 
                  Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">2. Descrição dos Serviços</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>A Mindhelper oferece:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Triagem emocional online</li>
                  <li>Chat com psicólogos licenciados</li>
                  <li>Videochamadas para sessões terapêuticas</li>
                  <li>Recursos educativos sobre saúde mental</li>
                  <li>Acompanhamento contínuo do bem-estar</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Limitações Importantes</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="font-semibold text-amber-800 mb-2">AVISO IMPORTANTE:</p>
                  <ul className="list-disc pl-4 space-y-1 text-amber-700">
                    <li>Nossos serviços NÃO substituem tratamento médico ou psicológico presencial</li>
                    <li>Em caso de emergência, procure atendimento médico imediato</li>
                    <li>Para crises de saúde mental, ligue 188 (CVV) ou 192 (SAMU)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilidades do Usuário</h2>
              <div className="text-gray-700 space-y-4">
                <p>Ao usar nossos serviços, você se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Manter a confidencialidade de suas credenciais de acesso</li>
                  <li>Usar a plataforma de forma respeitosa e ética</li>
                  <li>Não compartilhar conteúdo inadequado ou ofensivo</li>
                  <li>Respeitar os profissionais e outros usuários</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Todo o conteúdo da plataforma Mindhelper, incluindo textos, imagens, logotipos e software, 
                  é protegido por direitos autorais e outras leis de propriedade intelectual.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificações dos Termos</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações serão comunicadas através da plataforma e entrarão em vigor imediatamente.
                </p>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dúvidas sobre os Termos</h3>
              <p className="text-gray-700">
                Para esclarecimentos sobre estes termos, entre em contato conosco através de 
                <span className="font-semibold"> contato@mindhelper.com</span>
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

export default TermsOfUse;
