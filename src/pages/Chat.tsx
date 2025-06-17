
import React, { useState } from 'react';
import { ArrowLeft, Send, Phone, Video, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Dr. Eduardo Moura',
      content: 'Olá! Como posso ajudar você hoje? Estou aqui para oferecer um espaço seguro e acolhedor.',
      time: '14:30',
      isDoctor: true
    },
    {
      id: 2,
      sender: 'Você',
      content: 'Olá, doutor. Estou me sentindo um pouco ansioso ultimamente.',
      time: '14:32',
      isDoctor: false
    },
    {
      id: 3,
      sender: 'Dr. Eduardo Moura',
      content: 'Entendo. A ansiedade é algo muito comum e é corajoso da sua parte buscar ajuda. Pode me contar um pouco mais sobre quando você tem sentido isso?',
      time: '14:33',
      isDoctor: true
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'Você',
        content: message,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isDoctor: false
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simular resposta do psicólogo
      setTimeout(() => {
        const doctorResponse = {
          id: messages.length + 2,
          sender: 'Dr. Eduardo Moura',
          content: 'Obrigado por compartilhar isso comigo. Vamos trabalhar juntos para encontrar estratégias que possam te ajudar.',
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          isDoctor: true
        };
        setMessages(prev => [...prev, doctorResponse]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header onMenuToggle={() => {}} isMenuOpen={false} />
      <div className="container mx-auto px-4 py-8 pt-32 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header do Chat */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/servicos')}
                  className="text-white hover:text-blue-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold">EM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dr. Eduardo Moura</h3>
                    <p className="text-sm text-blue-100">Online • Psicólogo Clínico</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-white">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white">
                  <Video className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Área de Mensagens */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isDoctor ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.isDoctor
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isDoctor ? 'text-gray-500' : 'text-blue-100'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Campo de Digitação */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
