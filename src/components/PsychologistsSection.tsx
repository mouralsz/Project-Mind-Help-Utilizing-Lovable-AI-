
import React from 'react';
import { Star, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PsychologistsSection = () => {
  const psychologists = [
    {
      name: "Dra. Ana Silva",
      specialty: "Ansiedade e Transtornos do Humor",
      experience: "8 anos",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=faces",
      available: true,
      languages: ["Português", "Inglês"]
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Terapia Cognitivo Comportamental",
      experience: "12 anos",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=faces",
      available: true,
      languages: ["Português", "Espanhol"]
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Relacionamentos e Família",
      experience: "10 anos",
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1594824883271-d32c57b15dce?w=300&h=300&fit=crop&crop=faces",
      available: false,
      languages: ["Português"]
    }
  ];

  return (
    <section id="psicologos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Psicólogos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais qualificados e especializados, prontos para oferecer o suporte que você precisa 
            com toda a empatia e competência técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {psychologists.map((psychologist, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src={psychologist.image} 
                  alt={psychologist.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
                {psychologist.available && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      Online
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{psychologist.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{psychologist.specialty}</p>
                <p className="text-gray-500 text-sm">{psychologist.experience} de experiência</p>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(psychologist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {psychologist.rating} ({psychologist.reviews} avaliações)
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>CRP verificado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Responde em até 5 minutos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span>{psychologist.languages.join(", ")}</span>
                </div>
              </div>

              <Button 
                className={`w-full ${psychologist.available 
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!psychologist.available}
              >
                {psychologist.available ? 'Conversar Agora' : 'Indisponível'}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Psicólogos Certificados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <p className="text-gray-600">Atendimento Disponível</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8★</div>
              <p className="text-gray-600">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologistsSection;
