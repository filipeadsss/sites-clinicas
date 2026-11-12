// Site de demonstração: Dra. Camila Ferreira, Consultório Odontológico (landing page de página única).
// Para um cliente real: demo:false, noindex:false, preencher whatsapp, CRO e fotos autorizadas.
export default {
  slug: 'camila',
  layout: 'landing',
  demo: true,
  noindex: true,
  lang: 'pt-BR',

  favicon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56"><rect width="64" height="56" fill="#F5F5F5"/><path d="M32 13C28 4 14 2.500 9 12c-3 6 3 14 6 24 2 7 3 15 5.500 15 2.500 0 2.500-9 5-12h13c2.500 3 2.500 12 5 12 2.500 0 3.500-8 5.500-15 3-10 9-18 6-24C50 2.500 36 4 32 13z" fill="none" stroke="#0E6B6B" stroke-width="4.500" stroke-linejoin="round"/><path d="M19 25c7 9 20 9 29-2" fill="none" stroke="#D9B37A" stroke-width="4.500" stroke-linecap="round"/></svg>`,

  nome: 'Dra. Camila Ferreira',
  descritor: 'Consultório Odontológico',
  assinatura: 'Cuidar do seu sorriso é cuidar de você.',
  cidade: 'Contagem',
  uf: 'MG',

  tema: {
    branco: '#FFFFFF',
    cores: {
      petroleo: '#0E6B6B',
      turquesa: '#2FA8A8',
      botao: '#1A7F7F',
      botaoHover: '#0E6B6B',
      offwhite: '#F5F5F5',
      dourado: '#D9B37A',
      tinta: '#0F3434',
      suave: '#43605F',
      noite: '#08403F',
      linha: '#D9E4E3',
      menta: '#DDEEEE',
    },
    fonteTitulo: 'Montserrat',
    fonteTexto: 'Montserrat',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
  },

  foco: {
    'retrato.webp': '50% 30%',
    'dra-braco.webp': '50% 20%',
    'atendimento.webp': '60% 40%',
    'sorriso.webp': '45% 30%',
    'cadeira.webp': '45% 50%',
  },

  contato: {
    // Vazio na demonstração: os botões abrem o WhatsApp sem contato definido. Formato: 5531999999999.
    whatsapp: '',
    whatsappExibicao: '(31) 00000-0000',
    mensagemWhatsapp: 'Olá! Encontrei o consultório da Dra. Camila Ferreira pelo site e gostaria de agendar uma consulta.',
    instagram: '',
    endereco: ['Av. Pedro Olímpio da Fonseca, 444', 'Santa Cruz Industrial, Contagem – MG'],
    mapaConsulta: 'Av. Pedro Olímpio da Fonseca, 444, Santa Cruz Industrial, Contagem, MG',
    horarios: [
      ['Segunda a sexta', '08h às 18h'],
      ['Sábado', '08h às 12h'],
      ['Domingos e feriados', 'Sem atendimento regular'],
    ],
  },

  responsavel: {
    nome: 'Dra. Camila Ferreira',
    registro: 'CRO-MG nº 00000',
    registroNota: 'Dados ilustrativos. Preencher com o registro real da responsável técnica.',
  },

  seo: {
    titulo: 'Dentista em Santa Cruz Industrial, Contagem | Dra. Camila Ferreira',
    descricao:
      'Conheça o consultório odontológico da Dra. Camila Ferreira em Contagem. Atendimento particular, cuidado individualizado e agendamento pelo WhatsApp.',
  },

  home: {
    hero: {
      titulo: 'Seu sorriso merece cuidado e atenção.',
      subtitulo: 'Atendimento odontológico particular, com acolhimento, orientação clara e cuidado individualizado em Contagem.',
      cta: 'Agendar consulta pelo WhatsApp',
      ctaSecundario: 'Conheça nossos tratamentos',
      imagem: 'retrato.webp',
      imagemAlt: 'A Dra. Camila Ferreira sorrindo, de jaleco branco, em seu consultório',
      fatos: ['Santa Cruz Industrial, Contagem', 'Segunda a sexta, 8h às 18h · Sábado, 8h às 12h'],
    },
    sobre: {
      titulo: 'Prazer, sou a Dra. Camila Ferreira.',
      texto: [
        'Minha trajetória na odontologia parte do compromisso com a saúde bucal, o cuidado individualizado e a atenção às necessidades de cada paciente.',
        'Acredito que um bom atendimento começa com escuta, orientação e transparência. Por isso, você entende o que está acontecendo e conhece as possibilidades de tratamento antes de decidir.',
        'Meu objetivo é oferecer uma experiência acolhedora, com responsabilidade profissional em cada etapa.',
      ],
      imagem: 'dra-braco.webp',
      imagemAlt: 'A Dra. Camila Ferreira de braços cruzados, sorrindo, no consultório',
    },
    tratamentos: {
      titulo: 'Cuidados completos para a saúde do seu sorriso.',
      itens: [
        { icone: 'dente', titulo: 'Avaliação e clínica geral', texto: 'Consulta para entender como estão seus dentes e gengivas, com diagnóstico, planejamento, restaurações e acompanhamento.' },
        { icone: 'escudo', titulo: 'Prevenção e higiene bucal', texto: 'Limpeza, profilaxia e orientação de higiene para cuidar antes que os problemas apareçam.' },
        { icone: 'canal', titulo: 'Endodontia', texto: 'Avaliação da necessidade de tratamento endodôntico e, quando indicado, tratamento de canal.' },
        { icone: 'gengiva', titulo: 'Periodontia', texto: 'Cuidado com a saúde das gengivas e orientação para prevenir doenças gengivais.' },
        { icone: 'implante', titulo: 'Prótese e reabilitação oral', texto: 'Planejamento para repor ou restaurar dentes, de acordo com a indicação de cada caso.' },
        { icone: 'brilho', titulo: 'Estética odontológica', texto: 'Clareamento dental e avaliação estética, com procedimentos indicados para cada paciente.' },
      ],
      botaoItem: 'Perguntar pelo WhatsApp',
      nota: 'Procedimentos especializados podem ser realizados com profissionais parceiros habilitados. A indicação de cada tratamento depende da avaliação clínica.',
      cta: 'Agendar minha avaliação',
    },
    diferenciais: {
      titulo: 'Um atendimento pensado em você.',
      imagem: 'atendimento.webp',
      imagemAlt: 'Dentista conversando com uma paciente sorridente durante a consulta',
      itens: [
        { titulo: 'Atendimento próximo', texto: 'Você é recebida com atenção e respeito, desde a primeira mensagem até o acompanhamento depois do tratamento.' },
        { titulo: 'Orçamento explicado', texto: 'Etapas, custos e condições são apresentados com clareza antes de qualquer tratamento começar.' },
        { titulo: 'Orientação transparente', texto: 'Cada necessidade encontrada na avaliação é explicada em linguagem simples.' },
        { titulo: 'Agendamento prático', texto: 'Você escolhe data e horário pelo WhatsApp e recebe a confirmação da equipe.' },
      ],
    },
    etapas: {
      titulo: 'Você acompanhada em cada etapa.',
      itens: [
        { titulo: 'Agendamento', texto: 'Você informa a data e o horário pelo WhatsApp e a equipe confirma.' },
        { titulo: 'Avaliação', texto: 'A dentista examina e explica o que encontrou.' },
        { titulo: 'Planejamento', texto: 'Você conhece as opções, as etapas e os custos.' },
        { titulo: 'Tratamento', texto: 'A execução segue o planejamento que você aprovou.' },
        { titulo: 'Acompanhamento', texto: 'Orientações e retorno conforme a necessidade.' },
      ],
    },
    espaco: {
      titulo: 'Um ambiente preparado para receber você.',
      texto: 'Espaço claro, organizado e tranquilo, pensado para você se sentir à vontade.',
      fotos: [
        { src: 'recepcao.webp', alt: 'Recepção do consultório com poltronas e o logotipo na parede', legenda: 'Recepção' },
        { src: 'consultorio.webp', alt: 'Sala de atendimento com cadeira odontológica e equipamentos', legenda: 'Consultório' },
      ],
      nota: 'Imagens ilustrativas desta demonstração. Em um site real, entram as fotos do espaço e da profissional.',
    },
    local: {
      titulo: 'Estamos perto de você.',
      texto: 'Atendimento em Santa Cruz Industrial, em Contagem. Chame pelo WhatsApp para combinar o melhor horário.',
      mapa: 'Abrir no Google Maps',
      botao: 'Agendar pelo WhatsApp',
    },
    faq: {
      titulo: 'Perguntas frequentes',
      itens: [
        { p: 'O atendimento é particular?', r: 'Sim. O consultório trabalha com atendimento particular. Consulte as condições diretamente pelo WhatsApp.' },
        { p: 'Como faço para agendar uma consulta?', r: 'Chame pelo WhatsApp, informe a data e o horário que prefere e aguarde a confirmação da equipe.' },
        { p: 'Quanto custa a consulta?', r: 'Chame pelo WhatsApp para consultar o valor atualizado da avaliação.' },
        { p: 'Quais tratamentos são realizados?', r: 'O consultório oferece diferentes categorias de atendimento odontológico. A indicação depende da avaliação clínica.' },
        { p: 'Posso consultar os valores dos tratamentos pelo WhatsApp?', r: 'Sim. A equipe orienta sobre os valores e explica quando é preciso fazer uma avaliação para elaborar o orçamento.' },
      ],
    },
    cta: {
      titulo: 'Vamos cuidar do seu sorriso?',
      texto: 'Entre em contato e consulte os horários disponíveis para a sua avaliação odontológica.',
      botao: 'Agendar pelo WhatsApp',
      imagem: 'cadeira.webp',
      imagemAlt: 'Cadeira odontológica azul-petróleo em um consultório claro',
    },
  },
}
