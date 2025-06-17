
import React, { useState } from 'react';
import { ArrowLeft, Video, VideoOff, Mic, MicOff, Phone, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const VideoCall = () => {
  const navigate = useNavigate();
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header onMenuToggle={() => {}} isMenuOpen={false} />
      <div className="container mx-auto px-4 py-8 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4 text-white">
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
                  <h3 className="font-semibold">Sessão com Dr. Eduardo Moura</h3>
                </div>
                <div className="text-sm">
                  Duração: 45 min restantes
                </div>
              </div>
            </div>

            {/* Área de Vídeo */}
            <div className="relative bg-gray-900 aspect-video">
              {/* Vídeo do Psicólogo (Principal) */}
              <div className="w-full h-full bg-gradient-to-br from-blue-800 to-teal-800 flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-semibold">EM</span>
                  </div>
                  <h4 className="text-lg font-semibold">Dr. Eduardo Moura</h4>
                  <p className="text-blue-100">Psicólogo Clínico</p>
                </div>
              </div>

              {/* Seu Vídeo (Pequeno) */}
              <div className="absolute top-4 right-4 w-48 h-36 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center border-2 border-white/20">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-sm font-semibold">EU</span>
                  </div>
                  <p className="text-xs">Você</p>
                </div>
              </div>

              {/* Controles de Vídeo */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAudioOn(!isAudioOn)}
                    className={`text-white hover:text-gray-300 ${!isAudioOn ? 'bg-red-600 hover:bg-red-700' : ''}`}
                  >
                    {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`text-white hover:text-gray-300 ${!isVideoOn ? 'bg-red-600 hover:bg-red-700' : ''}`}
                  >
                    {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-gray-300"
                  >
                    <Settings className="w-5 h-5" />
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => navigate('/servicos')}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Phone className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Informações da Sessão */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Informações da Sessão</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Início:</strong> 14:00</p>
                    <p><strong>Duração:</strong> 60 minutos</p>
                    <p><strong>Tipo:</strong> Consulta individual</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Anotações da Sessão</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      Esta é uma sessão privada e confidencial. Todas as informações 
                      compartilhadas são protegidas pelo sigilo profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
