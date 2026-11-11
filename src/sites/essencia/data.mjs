// Essência — Estética Avançada (marca conceitual). Linha "acolhedor": acessível, feminina, próxima.
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70"><rect width="80" height="70" rx="14" fill="#F7F5F2"/><g fill="none" stroke="#5B2E52" stroke-width="3" stroke-linejoin="round"><path d="M40 8C31 21 31 40 40 56 49 40 49 21 40 8z"/><path d="M44 56C56 54 69 43 71 26 58 28 46 39 44 56z"/><path d="M36 56C24 54 11 43 9 26 22 28 34 39 36 56z"/></g></svg>`

export default {
  slug: 'essencia',
  layout: 'acolhedor',
  lang: 'pt-BR',
  demo: true,
  noindex: true,
  nome: 'Essência',
  descritor: 'Estética Avançada',
  cidade: 'Betim — MG',
  assinatura: 'A beleza de ser você.',
  favicon: fav,

  tema: {
    cores: { ameixa: '#5B2E52', malva: '#A8748F', nude: '#D9B8A8', offwhite: '#F7F5F2', branco: '#FFFFFF', tinta: '#3A2436', suave: '#6E5868', nudeclaro: '#F1E4DD' },
    branco: '#FFFFFF',
    fonteTitulo: 'Playfair Display',
    fonteTexto: 'Montserrat',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap',
  },

  contato: {
    whatsapp: '',
    whatsappExibicao: '(31) 90000-0000',
    mensagemWhatsapp: 'Olá! Vim pelo site da Essência e gostaria de saber mais sobre os tratamentos.',
    endereco: ['Centro, Betim — MG', 'Endereço completo após validação'],
    horarios: 'Horários de atendimento a definir',
  },

  responsavel: {
    nome: 'Camila Ribeiro',
    cargo: 'Biomédica Esteta | Fundadora da Essência',
    registro: '',
    registroNota: 'Personagem fictícia. Dados profissionais e registros devem ser informados e comprovados antes de qualquer uso real.',
  },

  seo: {
    titulo: 'Essência Estética Avançada | Clínica de estética em Betim',
    descricao: 'Clínica de estética em Betim com tratamentos faciais e corporais, atendimento acolhedor e cuidado personalizado. Converse com a equipe pelo WhatsApp.',
    tituloTratamentos: 'Tratamentos faciais e corporais em Betim | Essência Estética Avançada',
    descricaoTratamentos: 'Conheça os tratamentos faciais e corporais da Essência: limpeza de pele, peelings, microagulhamento, massagem modeladora, drenagem linfática e protocolos personalizados.',
  },

  // enquadramento (object-position) por imagem
  foco: {
    'rosto.webp': '50% 30%', 'camila.webp': '50% 25%', 'massagem.webp': '50% 40%',
    'microagulhamento.webp': '50% 40%', 'fachada.webp': '50% 50%', 'sala.webp': '55% 50%',
    'recepcao.webp': '50% 55%', 'facial.webp': '55% 40%', 'corporal.webp': '50% 55%',
    'produtos.webp': '50% 50%', 'camila-ambiente.webp': '25% 40%',
  },

  home: {
    hero: {
      selo: 'Estética avançada · Betim',
      titulo: 'A beleza de *ser você.*',
      subtitulo: 'Cuidados estéticos faciais e corporais com atenção, carinho e qualidade. Descubra uma nova forma de cuidar de você, respeitando sua beleza e sua individualidade.',
      cta: 'Conheça nossos tratamentos',
      ctaSecundario: 'Fale pelo WhatsApp',
      imagem: 'rosto.webp',
      imagemAlt: 'Mulher sorrindo com a mão apoiada no queixo, pele com textura natural',
      apoio: 'produtos.webp',
      apoioAlt: 'Produtos e toalha com a marca Essência sobre bancada de mármore',
      chips: ['Facial', 'Corporal', 'Protocolos'],
    },
    apresentacao: {
      eyebrow: 'A Essência',
      titulo: 'Um espaço pensado para *cuidar de você.*',
      texto: [
        'A Essência é um espaço dedicado ao cuidado estético, à autoestima e ao bem-estar. Acreditamos que cada pessoa possui sua própria beleza e merece ser acolhida em todas as etapas do seu cuidado.',
        'Por isso, trabalhamos com tratamentos faciais e corporais, atendimento próximo e uma proposta que une qualidade, atenção e acessibilidade.',
      ],
      fotos: [
        { src: 'recepcao.webp', alt: 'Recepção clara com poltronas e balcão da Essência' },
        { src: 'facial.webp', alt: 'Atendimento facial em sala de procedimentos' },
        { src: 'sala.webp', alt: 'Sala de procedimentos com maca e prateleiras iluminadas' },
      ],
    },
    categorias: {
      eyebrow: 'Tratamentos',
      titulo: 'Cuidado para o *rosto e para o corpo.*',
      botao: 'Conheça os tratamentos',
      itens: [
        { id: 'facial', titulo: 'Estética Facial', texto: 'Cuidados especiais para sua pele, com tratamentos voltados à revitalização, hidratação e valorização da beleza facial.', imagem: 'facial.webp', alt: 'Profissional realizando cuidado facial' },
        { id: 'corporal', titulo: 'Estética Corporal', texto: 'Tratamentos corporais e momentos de cuidado pensados para promover bem-estar e valorizar sua autoestima.', imagem: 'massagem.webp', alt: 'Massagem corporal com toalhas claras' },
        { id: 'protocolos', titulo: 'Protocolos Especiais', texto: 'Combinações personalizadas de tratamentos, desenvolvidas conforme as necessidades individuais.', imagem: 'produtos.webp', alt: 'Produtos de cuidado com a marca Essência' },
      ],
    },
    fundadora: {
      eyebrow: 'Quem cuida',
      titulo: 'Um cuidado que começa *na escuta.*',
      texto: [
        'À frente da Essência, Camila Ribeiro acredita que a estética deve respeitar a individualidade e valorizar a beleza de cada pessoa.',
        'Sua proposta é proporcionar uma experiência de cuidado próxima e acolhedora, na qual cada cliente possa conhecer suas possibilidades e encontrar tratamentos adequados às suas necessidades.',
      ],
      imagem: 'camila.webp',
      imagemAlt: 'Camila Ribeiro, fundadora da Essência, sorrindo de jaleco claro',
      apoio: 'camila-ambiente.webp',
    },
    diferenciais: {
      titulo: 'Por que escolher a *Essência?*',
      itens: [
        { titulo: 'Cuidado acessível', texto: 'Uma proposta de tratamentos com valores competitivos e atenção à qualidade.' },
        { titulo: 'Atendimento acolhedor', texto: 'Cada pessoa é recebida com atenção, respeito e proximidade.' },
        { titulo: 'Cuidado personalizado', texto: 'Atenção às necessidades individuais para orientar escolhas mais adequadas.' },
      ],
    },
    ambiente: {
      eyebrow: 'Experiência e ambiente',
      titulo: 'Seu momento de *cuidar de você.*',
      texto: 'Conforto, organização, delicadeza e acolhimento em cada ambiente.',
      nota: 'Imagens conceituais geradas para demonstração, sem relação com uma clínica física real.',
      fotos: [
        { src: 'fachada.webp', alt: 'Fachada da clínica com letreiro Essência', area: 'a', legenda: 'Fachada' },
        { src: 'recepcao.webp', alt: 'Recepção e sala de espera', area: 'b', legenda: 'Recepção' },
        { src: 'sala.webp', alt: 'Sala de procedimentos', area: 'c', legenda: 'Sala de procedimentos' },
        { src: 'corporal.webp', alt: 'Atendimento corporal', area: 'd', legenda: 'Cuidado corporal' },
      ],
    },
    cta: {
      titulo: 'Vamos encontrar o cuidado *ideal para você?*',
      texto: 'Converse com nossa equipe, conheça nossos tratamentos e tire suas dúvidas.',
      botao: 'Fale com a Essência pelo WhatsApp',
    },
    local: {
      eyebrow: 'Onde estamos',
      titulo: 'Centro de *Betim — MG*',
      texto: 'Estamos na região central de Betim, de fácil acesso. O endereço completo será divulgado após a validação.',
    },
  },

  tratamentos: {
    hero: {
      eyebrow: 'Tratamentos',
      titulo: 'Encontre o cuidado *ideal para você.*',
      texto: 'Conheça nossos tratamentos faciais e corporais e descubra as possibilidades de cuidar da sua beleza e autoestima com atenção e carinho.',
      botao: 'Converse com nossa equipe',
    },
    aviso: 'Conteúdo informativo. A indicação de cada procedimento depende de avaliação individual com profissional habilitado, e os cuidados são realizados conforme a habilitação profissional e as normas aplicáveis.',
    categorias: [
      {
        id: 'facial', titulo: 'Estética Facial',
        texto: 'Cuidados faciais pensados para valorizar a beleza e atender às necessidades individuais da sua pele.',
        imagem: 'facial.webp', alt: 'Atendimento facial com profissional de máscara e luvas',
        servicos: [
          { nome: 'Toxina botulínica', texto: 'Procedimento realizado por profissional habilitado, após avaliação individual.', objetivo: 'Suavizar linhas de expressão, respeitando a naturalidade do rosto.' },
          { nome: 'Microagulhamento', texto: 'Técnica que utiliza microagulhas para trabalhar a pele de forma controlada.', objetivo: 'Cuidar da textura e do aspecto geral da pele.', img: 'microagulhamento.webp' },
          { nome: 'Limpeza de pele', texto: 'Higienização profunda, com cuidados escolhidos conforme o tipo de pele.', objetivo: 'Manter a pele limpa, equilibrada e confortável.' },
          { nome: 'Peelings', texto: 'Aplicação de ativos para renovação superficial da pele, definidos caso a caso.', objetivo: 'Cuidar do aspecto e da uniformidade da pele.' },
          { nome: 'Hidratação facial', texto: 'Cuidado com ativos hidratantes e momento de relaxamento.', objetivo: 'Devolver conforto e viço à pele.' },
          { nome: 'Revitalização facial', texto: 'Combinação de cuidados para a pele ter um aspecto mais descansado.', objetivo: 'Valorizar a beleza natural do rosto.' },
        ],
      },
      {
        id: 'corporal', titulo: 'Estética Corporal',
        texto: 'Cuide do seu corpo com tratamentos personalizados e momentos dedicados ao seu bem-estar.',
        imagem: 'massagem.webp', alt: 'Massagem corporal com toalhas claras',
        servicos: [
          { nome: 'Massagem modeladora', texto: 'Massagem com manobras firmes, voltada ao cuidado com o contorno corporal.', objetivo: 'Proporcionar bem-estar e valorizar suas curvas.' },
          { nome: 'Drenagem linfática', texto: 'Massagem suave e ritmada, muito procurada pela sensação de leveza.', objetivo: 'Promover relaxamento e conforto.' },
          { nome: 'Cuidados para a aparência da celulite', texto: 'Tratamentos corporais voltados ao aspecto da pele, definidos após avaliação.', objetivo: 'Cuidar da pele nas regiões que mais incomodam você.' },
          { nome: 'Protocolos corporais personalizados', texto: 'Combinação de cuidados corporais montada conforme a sua necessidade.', objetivo: 'Oferecer uma experiência de cuidado sob medida.' },
        ],
      },
    ],
    protocolos: {
      id: 'protocolos',
      titulo: 'Cuidados pensados *para você.*',
      texto: 'Alguns objetivos podem exigir uma combinação de cuidados. Na Essência, os protocolos especiais são pensados considerando as necessidades e características individuais de cada cliente.',
      nota: 'Exemplos conceituais de combinações. Nada é definido sem avaliação individual.',
      itens: [
        { titulo: 'Revitalização facial', texto: 'Combinação de cuidados com a pele do rosto, escolhidos conforme sua rotina e necessidade.' },
        { titulo: 'Rotina de autocuidado', texto: 'Cuidados faciais e corporais reunidos para um momento completo de bem-estar.' },
        { titulo: 'Plano de manutenção', texto: 'Acompanhamento periódico para manter a rotina de cuidados que faz sentido para você.' },
      ],
    },
    faq: {
      titulo: 'Dúvidas *frequentes*',
      itens: [
        { p: 'Como saber qual tratamento é indicado para mim?', r: 'A indicação depende das suas necessidades e das características da sua pele. Converse com nossa equipe: a partir de uma avaliação individual, você recebe orientações adequadas ao seu caso.' },
        { p: 'Preciso agendar uma avaliação antes do procedimento?', r: 'Na maioria dos casos, sim. A avaliação ajuda a entender o que faz sentido para você e a esclarecer dúvidas antes de começar.' },
        { p: 'Como funciona o agendamento?', r: 'É simples: você chama nossa equipe pelo WhatsApp, conta o que procura e escolhe o melhor horário disponível.' },
        { p: 'Os tratamentos possuem contraindicações?', r: 'Cada procedimento tem suas particularidades. Por isso, é importante informar seu histórico durante a avaliação, para que a equipe indique o cuidado mais adequado.' },
        { p: 'Como posso consultar os valores?', r: 'Os valores são passados pela equipe pelo WhatsApp, de acordo com o tratamento de interesse.' },
      ],
    },
    cta: {
      titulo: 'Seu próximo momento de cuidado *começa aqui.*',
      texto: 'Estamos prontas para ajudar você a conhecer nossos tratamentos e encontrar opções de cuidado que façam sentido para suas necessidades.',
      botao: 'Agendar pelo WhatsApp',
    },
  },
}
