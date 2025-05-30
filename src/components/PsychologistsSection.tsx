
import React from 'react';
import PsychologistCard from './PsychologistCard';

const PsychologistsSection = () => {
  const psychologists = [
    {
      name: "Dr. Eduardo Moura",
      specialty: "Ansiedade e Transtornos do Humor",
      experience: "8 anos",
      rating: 4.9,
      reviews: 156,
      image: "/lovable-uploads/5bced0e8-d85a-4b74-b192-a26521e01a2e.png",
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
      name: "Dr. Denner Cauan",
      specialty: "Terapia Cognitivo Comportamental",
      experience: "12 anos",
      rating: 4.8,
      reviews: 203,
      image: "/lovable-uploads/8ec36a05-5a09-4ce0-a0ee-0c9a8620f7b8.png",
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
      name: "Dr. Lucas Santos",
      specialty: "Relacionamentos e Família",
      experience: "10 anos",
      rating: 4.9,
      reviews: 189,
      image: "/lovable-uploads/cf656348-cfac-499e-a8dc-23633115ada3.png",
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
    },
    {
      name: "Dr. Pedro Araújo",
      specialty: "Terapia Cognitivo Comportamental",
      experience: "6 anos",
      rating: 4.7,
      reviews: 98,
      image: "/lovable-uploads/ef5cf4e8-6191-49d8-bcc2-2884c8783074.png",
      available: true,
      languages: ["Português", "Inglês"],
      location: "Brasília, DF",
      bio: "Psicólogo clínico especializado em TCC, com foco no tratamento de transtornos de ansiedade, depressão e desenvolvimento pessoal. Utiliza abordagem empática e técnicas inovadoras.",
      education: [
        "Psicologia - Universidade de Brasília (2018)",
        "Especialização em TCC - Instituto de Terapia Cognitiva (2020)",
        "Curso de Aperfeiçoamento em Mindfulness (2021)"
      ],
      certifications: [
        "Certificação em Terapia Cognitivo-Comportamental",
        "Formação em Terapia Baseada em Aceitação e Compromisso",
        "Curso de Intervenções em Crise"
      ],
      approach: "Utilizo uma abordagem integrada de TCC com técnicas de mindfulness e aceitação, focando no desenvolvimento de habilidades práticas para o manejo de sintomas e melhoria da qualidade de vida."
    },
    {
      name: "Dr. Gabriel",
      specialty: "Psicoterapia Integrativa",
      experience: "9 anos",
      rating: 4.8,
      reviews: 142,
      image: "/lovable-uploads/b6f55cdb-b190-4426-b434-bb2a47bec044.png",
      available: true,
      languages: ["Português", "Inglês", "Francês"],
      location: "Porto Alegre, RS",
      bio: "Psicólogo clínico com formação em psicoterapia integrativa, especializado em trauma, luto e crescimento pós-traumático. Combina diferentes abordagens terapêuticas para um atendimento personalizado.",
      education: [
        "Psicologia - Universidade Federal do Rio Grande do Sul (2015)",
        "Mestrado em Psicologia Clínica - UFRGS (2017)",
        "Especialização em Trauma e EMDR - Instituto Brasileiro EMDR (2019)"
      ],
      certifications: [
        "Certificação em EMDR (Eye Movement Desensitization and Reprocessing)",
        "Formação em Terapia Narrativa",
        "Especialização em Psicologia do Luto"
      ],
      approach: "Utilizo uma abordagem integrativa que combina EMDR, terapia narrativa e técnicas humanísticas, adaptando o tratamento às necessidades específicas de cada pessoa."
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
