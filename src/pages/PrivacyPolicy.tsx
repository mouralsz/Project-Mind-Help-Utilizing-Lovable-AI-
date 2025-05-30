
import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
            <p className="text-xl text-gray-600">Última atualização: Janeiro 2024</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">1. Informações que Coletamos</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Coletamos as seguintes informações para fornecer nossos serviços:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informações Pessoais:</strong> Nome, e-mail, telefone, data de nascimento</li>
                  <li><strong>Informações de Saúde:</strong> Dados relacionados ao seu bem-estar emocional (com seu consentimento)</li>
                  <li><strong>Dados de Uso:</strong> Como você interage com nossa plataforma</li>
                  <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de dispositivo, navegador</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">2. Como Usamos suas Informações</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer serviços de apoio psicológico personalizado</li>
                  <li>Conectar você com profissionais qualificados</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar comunicações importantes sobre nossos serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">3. Proteção de Dados</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Implementamos medidas rigorosas de segurança:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Acesso restrito apenas a pessoal autorizado</li>
                  <li>Auditoria regular de segurança</li>
                  <li>Conformidade com LGPD e padrões internacionais</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">4. Seus Direitos</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Portabilidade de dados</li>
                  <li>Retirar consentimento a qualquer momento</li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contato para Questões de Privacidade</h3>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span>privacidade@mindhelper.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 mt-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
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

export default PrivacyPolicy;
