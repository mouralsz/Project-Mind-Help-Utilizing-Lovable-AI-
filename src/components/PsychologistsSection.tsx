
import React from 'react';
import PsychologistCard from './PsychologistCard';

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
      languages: ["Português", "Inglês"],
      location: "São Paulo, SP",
      bio: "Especialista em terapia cognitivo-comportamental com foco em transtornos de ansiedade e depressão. Dedica-se ao atendimento humanizado e personalizado, utilizando técnicas baseadas em evidências científicas.",
      education: [
        "Psicologia - Universidade de São Paulo (2016)",
        "Mestrado em Psicologia Clínica - USP (2018)",
        "Especialização em TCC - Instituto Beck (2019)"
      ],
      certifications: [
        "Certificação em Terapia Cognitivo-Comportamental",
        "Formação em Mindfulness para Ansiedade",
        "Curso de Primeiros Socorros Psicológicos"
      ],
      approach: "Utilizo a abordagem cognitivo-comportamental combinada com técnicas de mindfulness, focando na identificação e modificação de padrões de pensamento disfuncionais."
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Terapia Cognitivo Comportamental",
      experience: "12 anos",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=faces",
      available: true,
      languages: ["Português", "Espanhol"],
      location: "Rio de Janeiro, RJ",
      bio: "Psicólogo clínico com vasta experiência em TCC, especializado no tratamento de transtornos de humor, fobias e transtornos alimentares. Atua com uma abordagem acolhedora e baseada em evidências.",
      education: [
        "Psicologia - Universidade Federal do Rio de Janeiro (2012)",
        "Doutorado em Psicologia Clínica - UFRJ (2017)",
        "Pós-doutorado em Neuropsicologia - PUC-Rio (2019)"
      ],
      certifications: [
        "Certificação Internacional em TCC",
        "Formação em Terapia Familiar Sistêmica",
        "Especialização em Transtornos Alimentares"
      ],
      approach: "Combino técnicas de TCC com abordagens sistêmicas, priorizando a construção de uma aliança terapêutica sólida e o desenvolvimento de estratégias práticas de enfrentamento."
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Relacionamentos e Família",
      experience: "10 anos",
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1594824883271-d32c57b15dce?w=300&h=300&fit=crop&crop=faces",
      available: false,
      languages: ["Português"],
      location: "Belo Horizonte, MG",
      bio: "Especialista em terapia de casal e familiar, com formação em psicanálise e abordagem sistêmica. Dedica-se ao fortalecimento de vínculos e resolução de conflitos familiares.",
      education: [
        "Psicologia - Pontifícia Universidade Católica de Minas Gerais (2014)",
        "Especialização em Terapia Familiar - PUC-MG (2016)",
        "Formação em Psicanálise - Círculo Psicanalítico de MG (2020)"
      ],
      certifications: [
        "Certificação em Terapia de Casal",
        "Formação em Constelação Familiar",
        "Especialização em Mediação de Conflitos"
      ],
      approach: "Trabalho com uma abordagem integrativa que combina técnicas sistêmicas e psicanalíticas, focando na compreensão das dinâmicas familiares e na promoção de comunicação saudável."
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
            <PsychologistCard key={index} psychologist={psychologist} />
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
