// Dados do site de demonstração "Aurélia". Marca, profissional e imagens fictícias.
// Para criar o site de um cliente real: copiar esta pasta, trocar os dados e as imagens, e ajustar `demo` e `noindex`.

export default {
  slug: 'aurelia',
  layout: 'editorial',
  demo: true, // mostra a faixa "site de demonstração"
  noindex: true,
  lang: 'pt-BR',

  nome: 'Aurélia',
  descritor: 'Dermatologia & Estética Avançada',
  assinatura: 'A beleza de cuidar de si.',
  conceito: 'Ciência, cuidado e beleza em equilíbrio.',
  cidade: 'Porto Alegre',
  uf: 'RS',

  tema: {
    marrom: '#5B3F2E',
    dourado: '#B18C6A',
    douradoTexto: '#8A6A4B', // dourado mais escuro para texto pequeno (contraste)
    bege: '#D7C2AE',
    offwhite: '#EFE6DC',
    branco: '#FAF9F6',
    fonteTitulo: 'Cormorant Garamond',
    fonteTexto: 'Montserrat',
    googleFonts:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@400;500;600&display=swap',
  },

  contato: {
    // Vazio na demonstração: os botões levam à seção de contato. Preencher com DDI+DDD+número (ex.: 5531999999999).
    whatsapp: '',
    whatsappExibicao: '(51) 90000-0000',
    mensagemWhatsapp: 'Olá! Gostaria de agendar uma avaliação.',
    instagram: '',
    endereco: ['Rua 24 de Outubro, 1681', 'Centro Empresarial 24 de Outubro · Time Tower', 'Auxiliadora, Porto Alegre – RS'],
    mapaConsulta: 'Rua 24 de Outubro, 1681, Auxiliadora, Porto Alegre, RS',
    horarios: 'Horários de atendimento a definir',
  },

  responsavel: {
    nome: 'Dra. Marina Alves',
    cargo: 'Dermatologista e fundadora',
    registro: 'CRM-UF 00000 · RQE 00000',
    registroNota: 'Dados ilustrativos. Preencher com o registro real da responsável técnica.',
  },

  seo: {
    titulo: 'Aurélia | Dermatologia & Estética Avançada em Porto Alegre',
    descricao:
      'Dermatologia clínica, estética facial e tecnologias dermatológicas, com avaliação individualizada. Agende sua avaliação na Aurélia, no Auxiliadora, em Porto Alegre.',
    tituloTratamentos: 'Tratamentos | Aurélia Dermatologia & Estética Avançada',
    descricaoTratamentos:
      'Conheça as áreas de atuação da Aurélia: dermatologia clínica, estética facial, tecnologias dermatológicas e tratamentos personalizados.',
  },

  home: {
    hero: {
      eyebrow: 'Dermatologia & Estética Avançada · Porto Alegre',
      titulo: 'Seu cuidado merece atenção *em cada detalhe.*',
      subtitulo:
        'Na Aurélia, unimos dermatologia, tecnologia e atendimento humanizado para cuidar da saúde e da beleza da sua pele.',
      cta: 'Agende sua avaliação',
      ctaSecundario: 'Conheça os tratamentos',
      imagem: 'retrato.webp',
      imagemAlt: 'Retrato de uma mulher com pele natural e luminosa, em luz suave',
      imagemApoio: 'toalha.webp',
      imagemApoioAlt: 'Toalha clara com o monograma da clínica bordado',
      cartao: 'Ciência, cuidado e beleza em equilíbrio.',
      destaques: [
        { icone: 'gota', texto: 'Saúde da pele' },
        { icone: 'brilho', texto: 'Estética facial' },
        { icone: 'camadas', texto: 'Tecnologia e cuidado' },
      ],
    },
    apresentacao: {
      eyebrow: 'A Aurélia',
      titulo: 'Uma nova forma de *cuidar de si.*',
      texto: [
        'Na Aurélia, acreditamos que cada pessoa merece um cuidado que respeite sua individualidade. Unimos conhecimento dermatológico, tecnologia e atenção aos detalhes para proporcionar uma experiência completa de cuidado com a pele.',
        'Cada pele possui características e necessidades próprias. Por isso, nossos tratamentos começam com uma avaliação individualizada, que permite identificar as abordagens mais adequadas para cada paciente.',
      ],
      imagem: 'planta.webp',
      imagemAlt: 'Ramo de oliveira em um copo de vidro sobre bancada de mármore claro',
      imagem2: 'marmore.webp',
      imagem2Alt: 'Textura de mármore claro com veios dourados',
    },
    citacao: {
      texto: 'Ciência, cuidado e beleza *em equilíbrio.*',
      apoio: 'Cuidado especializado que respeita sua individualidade.',
      imagem: 'recepcao.webp',
    },
    faixa: ['marmore.webp', 'gel.webp', 'maca.webp', 'planta.webp', 'toalha.webp'],
    especialidades: {
      eyebrow: 'Especialidades',
      titulo: 'Quatro áreas de cuidado, *um mesmo olhar.*',
      linkTexto: 'Ver todos os tratamentos',
    },
    fundadora: {
      eyebrow: 'Conheça a fundadora',
      titulo: 'Conhecimento e cuidado *em cada escolha.*',
      frase: 'Cuidado especializado que respeita a sua individualidade.',
      texto: [
        'A Dra. Marina Alves é dermatologista e fundadora da Aurélia. Seu olhar integra a saúde da pele, a naturalidade e o bem-estar de cada paciente, com atendimento próximo e planejamento individualizado.',
        'Cada indicação parte de uma avaliação cuidadosa, com informação clara sobre possibilidades, limites e acompanhamento.',
      ],
      pilares: ['Dermatologia clínica', 'Estética avançada', 'Beleza natural e personalizada'],
      imagem: 'fundadora.webp',
      imagemAlt: 'Dermatologista de blazer claro, sentada em consultório elegante',
    },
    diferenciais: {
      titulo: 'O que orienta *o nosso atendimento*',
      itens: [
        { titulo: 'Atendimento individualizado', texto: 'Cada plano nasce da escuta e da avaliação do paciente.' },
        { titulo: 'Tecnologia dermatológica', texto: 'Recursos selecionados conforme a pele e a indicação profissional.' },
        { titulo: 'Conhecimento especializado', texto: 'Condução médica, com responsabilidade e atualização científica.' },
        { titulo: 'Abordagem humanizada', texto: 'Acolhimento e clareza em todas as etapas do cuidado.' },
        { titulo: 'Experiência diferenciada', texto: 'Ambiente, privacidade e atenção aos detalhes.' },
      ],
    },
    estrutura: {
      eyebrow: 'Nossa estrutura',
      titulo: 'Ambientes pensados *para o seu conforto.*',
      texto: 'Recepção, consultório e salas de procedimento planejados para oferecer privacidade e tranquilidade.',
      nota: 'Imagens ilustrativas.',
      fotos: [
        { src: 'fachada.webp', alt: 'Fachada da clínica com letreiro iluminado e vegetação', area: 'a', legenda: 'Fachada' },
        { src: 'recepcao.webp', alt: 'Recepção com balcão de mármore, painel de madeira e orquídeas', area: 'b', legenda: 'Recepção' },
        { src: 'sala-procedimento.webp', alt: 'Sala de procedimentos com maca e equipamento dermatológico', area: 'c', legenda: 'Sala de procedimentos' },
      ],
    },
    contato: {
      eyebrow: 'Contato',
      titulo: 'Seu próximo passo começa *com uma avaliação.*',
      texto: 'Conheça a Aurélia e descubra as possibilidades de cuidado para sua pele.',
      cta: 'Fale com nossa equipe',
    },
  },

  tratamentos: {
    hero: {
      eyebrow: 'Tratamentos',
      titulo: 'Cuidado conduzido com *conhecimento e precisão.*',
      texto:
        'Conheça as áreas de atuação da Aurélia. Conteúdo informativo: toda indicação depende de avaliação médica individual.',
    },
    areas: [
      {
        id: 'dermatologia-clinica',
        numero: '01',
        titulo: 'Dermatologia clínica',
        descricao:
          'Cuidado especializado para a saúde da pele, com avaliação individualizada, investigação de alterações dermatológicas e acompanhamento de diferentes condições cutâneas.',
        imagem: 'marmore.webp',
        imagemAlt: 'Textura de mármore claro com veios dourados',
        imagem2: 'gel.webp',
        imagem2Alt: 'Textura de gel transparente com gotas',
        servicos: [
          { nome: 'Tratamento de acne', texto: 'Avaliação e acompanhamento, com plano definido conforme o tipo de pele e a história de cada paciente.' },
          { nome: 'Tratamento de rosácea', texto: 'Acompanhamento de vermelhidão persistente e sensibilidade, com orientações de cuidado.' },
          { nome: 'Manchas e pigmentação', texto: 'Investigação da origem das alterações de cor para definir a abordagem adequada.' },
          { nome: 'Doenças dermatológicas', texto: 'Seguimento contínuo de condições da pele, com reavaliações periódicas.' },
          { nome: 'Avaliação da saúde da pele', texto: 'Consulta para mapear a saúde da pele, incluindo orientações de prevenção.' },
        ],
      },
      {
        id: 'estetica-facial',
        numero: '02',
        titulo: 'Estética facial e injetáveis',
        descricao:
          'Procedimentos estéticos personalizados, planejados para valorizar a harmonia facial e respeitar a individualidade de cada pessoa.',
        imagem: 'toalha.webp',
        imagemAlt: 'Toalhas claras dobradas com monograma bordado',
        imagem2: 'planta.webp',
        imagem2Alt: 'Ramo de oliveira em um copo de vidro',
        servicos: [
          { nome: 'Toxina botulínica', texto: 'Procedimento injetável indicado, após avaliação, para suavizar linhas de expressão com foco em naturalidade.' },
          { nome: 'Preenchimento com ácido hialurônico', texto: 'Utilizado, quando indicado, para repor volume e definir contornos, respeitando as proporções do rosto.' },
          { nome: 'Bioestimuladores de colágeno', texto: 'Estimulam a produção de colágeno pela própria pele, de forma gradual, conforme a indicação.' },
          { nome: 'Rejuvenescimento facial', texto: 'Planejamento que combina abordagens para qualidade e firmeza da pele, de acordo com os objetivos do paciente.' },
        ],
      },
      {
        id: 'tecnologias',
        numero: '03',
        titulo: 'Tecnologias dermatológicas',
        descricao:
          'Recursos tecnológicos aplicados aos cuidados dermatológicos e estéticos, selecionados conforme as características da pele e a indicação profissional.',
        imagem: 'sala-procedimento.webp',
        imagemAlt: 'Sala de procedimentos com equipamento dermatológico',
        imagem2: 'recepcao.webp',
        imagem2Alt: 'Recepção com balcão de mármore e painel de madeira',
        servicos: [
          { nome: 'Laser dermatológico', texto: 'Tecnologia aplicada a diferentes indicações, escolhida conforme o tipo de pele e a necessidade.' },
          { nome: 'Tecnologias para manchas', texto: 'Recursos indicados após avaliação para o tratamento de alterações de pigmentação.' },
          { nome: 'Tecnologias para qualidade da pele', texto: 'Abordagens voltadas à textura e ao aspecto geral da pele.' },
          { nome: 'Tecnologias para rejuvenescimento', texto: 'Recursos que podem compor o planejamento de rejuvenescimento, quando indicados.' },
        ],
      },
      {
        id: 'tratamentos-personalizados',
        numero: '04',
        titulo: 'Tratamentos personalizados',
        descricao:
          'Cada pele possui necessidades próprias. Por isso, desenvolvemos planos de cuidado individualizados, considerando características, objetivos e possibilidades terapêuticas.',
        imagem: 'maca.webp',
        imagemAlt: 'Maca de atendimento com manta clara e painel de madeira',
        imagem2: 'marmore.webp',
        imagem2Alt: 'Textura de mármore claro',
        servicos: [
          { nome: 'Protocolos para melasma', texto: 'Plano individual que costuma exigir acompanhamento e proteção solar contínuos.' },
          { nome: 'Planejamento de rejuvenescimento facial', texto: 'Organização das etapas e prioridades do cuidado ao longo do tempo.' },
          { nome: 'Estratégias combinadas', texto: 'Associação de abordagens para a qualidade da pele, conforme avaliação.' },
          { nome: 'Acompanhamento dermatológico contínuo', texto: 'Reavaliações periódicas para ajustar o plano de cuidado.' },
        ],
      },
    ],
    cta: {
      titulo: 'Cada tratamento começa *com uma avaliação.*',
      texto: 'Converse com a nossa equipe e agende o seu atendimento.',
      botao: 'Agende sua avaliação',
    },
  },
}
