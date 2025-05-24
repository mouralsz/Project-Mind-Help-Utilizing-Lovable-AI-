
import React, { useState } from 'react';
import { Star, Award, Clock, CheckCircle, User, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PsychologistProps {
  psychologist: {
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    image: string;
    available: boolean;
    languages: string[];
    education: string[];
    certifications: string[];
    approach: string;
    location: string;
    bio: string;
  };
}

const PsychologistCard = ({ psychologist }: PsychologistProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-red-500" />
          <span>{psychologist.location}</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <Button
          variant="outline"
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <User className="w-4 h-4 mr-2" />
          {showDetails ? 'Ocultar Currículo' : 'Ver Currículo'}
        </Button>

        {showDetails && (
          <Card className="mt-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Currículo Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Biografia</h4>
                <p className="text-sm text-gray-600">{psychologist.bio}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Formação Acadêmica</h4>
                <ul className="space-y-1">
                  {psychologist.education.map((edu, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <Calendar className="w-3 h-3 mt-1 text-blue-500 flex-shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Certificações</h4>
                <ul className="space-y-1">
                  {psychologist.certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <Award className="w-3 h-3 mt-1 text-purple-500 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Abordagem Terapêutica</h4>
                <p className="text-sm text-gray-600">{psychologist.approach}</p>
              </div>
            </CardContent>
          </Card>
        )}
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
  );
};

export default PsychologistCard;
