// VITRA — Odontologia Especializada | Cirurgia Bucomaxilofacial (marca conceitual).
// Linha "tecnologico": azul profundo, planejamento digital, índice lateral, grade assimétrica.
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#173653"/><path d="M10 14h14l9 22-6 8z" fill="#E9EDF0"/><path d="M54 14H41l-9 22 6 8z" fill="#B99A68"/></svg>`

const proc = (nome, descricao, finalidade, indicacoes) => ({ nome, descricao, finalidade, indicacoes })

export default {
  slug: 'vitra',
  layout: 'tecnologico',
  lang: 'pt-BR',
  demo: true,
  noindex: true,
  nome: 'Vitra',
  marcaSub: 'Odontologia Especializada',
  descritor: 'Cirurgia Bucomaxilofacial',
  cidade: 'Belo Horizonte — MG',
  assinatura: 'Precisão técnica. Confiança em cada etapa.',
  favicon: fav,

  tema: {
    cores: { azul: '#173653', azulclaro: '#607F96', ouro: '#B99A68', cinza: '#E9EDF0', branco: '#FAFAF8', tinta: '#14283A', suave: '#51657A', linha: '#D5DDE4', noite: '#0F2740' },
    branco: '#173653',
    fonteTitulo: 'Playfair Display',
    fonteTexto: 'Montserrat',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap',
  },

  contato: {
    whatsapp: '',
    whatsappExibicao: '(31) 90000-0000',
    mensagemWhatsapp: 'Olá! Gostaria de obter informações sobre uma avaliação na VITRA.',
    endereco: ['Belvedere · Belo Horizonte — MG', 'Endereço completo após validação'],
    horarios: 'Atendimento com hora marcada',
  },

  responsavel: {
    nome: 'Dr. Rafael Andrade',
    cargo: 'Cirurgião Bucomaxilofacial | Fundador da VITRA',
    registroNota: 'Personagem fictício. Registros profissionais (CRO, RQE), formação e credenciais devem ser informados e comprovados antes de qualquer uso real.',
  },

  seo: {
    titulo: 'VITRA | Odontologia Especializada em Belo Horizonte',
    descricao: 'Clínica odontológica especializada em cirurgia bucomaxilofacial, implantodontia, ortodontia e planejamento digital, no Belvedere, em Belo Horizonte.',
    tituloTratamentos: 'Especialidades e Tratamentos | VITRA',
    descricaoTratamentos: 'Conheça as especialidades odontológicas da VITRA e suas possibilidades de avaliação e tratamento. Cada caso começa com avaliação individualizada.',
  },

  foco: {
    'dr.webp': '50% 22%', 'fachada.webp': '60% 50%', 'recepcao.webp': '60% 50%', 'consultorio.webp': '55% 50%',
    'ambiente.webp': '50% 50%', 'cranio.webp': '50% 40%', 'planejamento.webp': '50% 45%', 'implante.webp': '50% 50%',
  },

  home: {
    hero: {
      selo: 'Odontologia especializada · Belvedere, Belo Horizonte',
      titulo: 'Precisão técnica. *Confiança em cada etapa.*',
      subtitulo: 'Odontologia especializada com foco em cirurgia bucomaxilofacial, tecnologia e planejamento individualizado para cuidar da sua saúde com atenção em cada etapa.',
      cta: 'Agendar avaliação',
      ctaSecundario: 'Conhecer a VITRA',
      imagem: 'dr.webp',
      imagemAlt: 'Dr. Rafael Andrade, cirurgião bucomaxilofacial, de jaleco, sentado à mesa de atendimento',
      indice: ['Cirurgia Bucomaxilofacial', 'Implantodontia', 'Ortodontia', 'Diagnóstico e Planejamento Digital'],
    },
    apresentacao: {
      eyebrow: 'A VITRA',
      titulo: 'Especialização que integra conhecimento, tecnologia *e cuidado.*',
      texto: 'A VITRA reúne diferentes especialidades odontológicas em uma proposta de atendimento coordenado, com foco em avaliação criteriosa, planejamento individualizado e acompanhamento próximo.',
      imagem: 'ambiente.webp',
      imagemAlt: 'Detalhe do ambiente de espera com flores, chá e toalha sobre bandeja de mármore',
    },
    principal: {
      eyebrow: 'Especialidade principal',
      titulo: 'Cirurgia *Bucomaxilofacial*',
      texto: 'Uma especialidade dedicada à avaliação e ao tratamento de condições que envolvem os ossos da face, maxilares, estruturas bucais e articulação temporomandibular.',
      itens: ['Cirurgia ortognática', 'Extração de terceiros molares (sisos)', 'Alterações da articulação temporomandibular', 'Traumatismos faciais', 'Patologias bucomaxilofaciais', 'Reconstruções ósseas'],
      botao: 'Conheça nossa especialidade',
      aviso: 'Cirurgias de maior complexidade podem demandar ambiente hospitalar.',
      imagem: 'cranio.webp',
      imagemAlt: 'Imagem em estilo radiográfico do crânio e dos maxilares em perfil, em tons de azul',
    },
    especialidades: {
      eyebrow: 'Especialidades',
      titulo: 'Quatro frentes, *uma abordagem integrada.*',
      itens: [
        { id: 'cirurgia', titulo: 'Cirurgia Bucomaxilofacial', texto: 'Especialidade central da VITRA, com avaliação individual de cada caso.', destaque: true },
        { id: 'implantodontia', titulo: 'Implantodontia', texto: 'Reabilitação oral por meio de implantes dentários, com planejamento prévio.', imagem: 'implante.webp', imagemAlt: 'Imagem em estilo radiográfico de um implante dentário na mandíbula' },
        { id: 'ortodontia', titulo: 'Ortodontia', texto: 'Avaliação, correção e acompanhamento das relações dentárias e oclusais.' },
        { id: 'diagnostico', titulo: 'Diagnóstico e Planejamento Digital', texto: 'Recursos digitais de apoio à avaliação e ao planejamento, conforme indicação.' },
      ],
      link: 'Ver no detalhe',
    },
    diferenciais: {
      eyebrow: 'Diferenciais',
      titulo: 'Uma abordagem integrada para *cada necessidade.*',
      itens: [
        { t: 'Especialização', d: 'Protagonismo da cirurgia bucomaxilofacial, com atuação complementar em outras especialidades odontológicas.' },
        { t: 'Tecnologia', d: 'Recursos digitais de apoio ao diagnóstico, à avaliação e ao planejamento, conforme disponibilidade e indicação clínica.' },
        { t: 'Integração multidisciplinar', d: 'Atuação coordenada entre profissionais de diferentes especialidades.' },
        { t: 'Acompanhamento integral', d: 'Atendimento individualizado, comunicação transparente e acompanhamento ao longo do tratamento.' },
      ],
    },
    tecnologia: {
      eyebrow: 'Tecnologia',
      titulo: 'Planejamento apoiado *por tecnologia.*',
      texto: 'Recursos digitais podem contribuir para avaliações mais detalhadas e planejamentos individualizados, de acordo com as necessidades de cada caso.',
      recursos: [
        { t: 'Tomografia de feixe cônico', d: 'Quando disponível e indicada.' },
        { t: 'Escaneamento intraoral', d: 'Registro digital das arcadas dentárias.' },
        { t: 'Planejamento virtual e 3D', d: 'Análise tridimensional para apoiar a avaliação.' },
        { t: 'Integração de exames', d: 'Exames e registros reunidos no planejamento.' },
      ],
      nota: 'Recursos previstos no conceito da clínica. Antes de qualquer uso real, é preciso distinguir o que está disponível na estrutura do que é feito por parceiros ou serviços externos.',
      imagem: 'planejamento.webp',
      imagemAlt: 'Monitor com tomografia tridimensional da face e modelo físico de mandíbula sobre a mesa',
    },
    fundador: {
      eyebrow: 'Dr. Rafael Andrade',
      titulo: 'Conhecimento especializado com uma *abordagem individualizada.*',
      texto: [
        'O Dr. Rafael Andrade representa a visão técnica e assistencial da VITRA, com uma proposta de atendimento baseada em avaliação criteriosa, comunicação clara e planejamento individualizado.',
        'A proposta é explicar procedimentos, avaliações e possibilidades de tratamento com clareza, sem excesso de termos técnicos.',
      ],
      botao: 'Conheça as especialidades',
      nota: 'Trajetória, formação e registros profissionais entram após validação documental.',
    },
    jornada: {
      eyebrow: 'Experiência VITRA',
      titulo: 'Acompanhamento *em cada etapa.*',
      etapas: [
        { t: 'Avaliação', d: 'Atendimento inicial e avaliação especializada das necessidades clínicas.' },
        { t: 'Diagnóstico', d: 'Quando indicado, exames e recursos digitais apoiam a avaliação.' },
        { t: 'Planejamento', d: 'O plano é apresentado com possibilidades, etapas, cuidados e alternativas.' },
        { t: 'Tratamento', d: 'Realizado na estrutura adequada à complexidade, na clínica ou em ambiente hospitalar autorizado.' },
        { t: 'Acompanhamento', d: 'Orientações, retornos e continuidade do cuidado conforme o plano terapêutico.' },
      ],
    },
    estrutura: {
      eyebrow: 'Estrutura',
      titulo: 'Ambientes pensados para *o atendimento especializado.*',
      nota: 'Imagens conceituais geradas para demonstração, sem relação com instalações reais.',
      fotos: [
        { src: 'fachada.webp', alt: 'Fachada da clínica com letreiro VITRA em chapa escura e recepção iluminada ao fundo', legenda: 'Fachada', area: 'a' },
        { src: 'recepcao.webp', alt: 'Recepção com balcão em pedra clara, painel azul com o símbolo da marca e poltronas', legenda: 'Recepção', area: 'b' },
        { src: 'consultorio.webp', alt: 'Sala de avaliação com mesa em pedra, monitor com tomografia e painel azul', legenda: 'Sala de avaliação', area: 'c' },
      ],
    },
    cta: {
      titulo: 'O primeiro passo começa com *uma avaliação especializada.*',
      texto: 'Entre em contato com nossa equipe para conhecer a VITRA e obter informações sobre agendamento.',
      botao: 'Falar pelo WhatsApp',
    },
    formulario: {
      titulo: 'Solicitar avaliação',
      texto: 'Deixe seus dados de contato. Não pedimos informações de saúde por aqui.',
      especialidades: ['Cirurgia Bucomaxilofacial', 'Implantodontia', 'Ortodontia', 'Diagnóstico e Planejamento Digital', 'Ainda não sei'],
      consentimento: 'Concordo em ser contatado(a) para tratar desta solicitação, conforme a política de privacidade (a ser publicada antes do uso real).',
      botao: 'Enviar solicitação',
    },
  },

  tratamentos: {
    hero: {
      eyebrow: 'Especialidades e Tratamentos',
      imagem: 'planejamento.webp',
      titulo: 'Especialidades que *trabalham em conjunto.*',
      texto: 'Conheça as áreas de atuação da VITRA e as possibilidades de avaliação e tratamento em odontologia especializada.',
    },
    intro: {
      titulo: 'Um modelo multidisciplinar, com avaliação individualizada.',
      texto: 'Cada caso é único. Por isso, a indicação de qualquer procedimento depende de avaliação especializada. As informações desta página são educativas e não substituem a consulta.',
    },
    aviso: 'Conteúdo informativo, sem promessa de resultado e sem substituir consulta odontológica. Todo procedimento envolve riscos, e a indicação depende de avaliação individual.',
    areas: [
      {
        id: 'cirurgia', n: '01', titulo: 'Cirurgia Bucomaxilofacial', imagem: 'cranio.webp', imagemAlt: 'Imagem em estilo radiográfico do crânio e dos maxilares em perfil',
        texto: 'Especialidade central da VITRA, dedicada à avaliação e ao tratamento de condições que envolvem os ossos da face, maxilares, estruturas bucais e articulação temporomandibular. Cirurgias de maior complexidade podem demandar ambiente hospitalar.',
        itens: [
          proc('Cirurgia ortognática', 'Cirurgia que reposiciona os maxilares para corrigir desproporções entre eles.', 'Melhorar a função mastigatória e o equilíbrio entre maxilares e face, em conjunto com a ortodontia.', 'Em geral, discrepâncias esqueléticas dos maxilares, avaliadas por exame clínico e de imagem.'),
          proc('Extração de terceiros molares (sisos)', 'Remoção cirúrgica dos dentes do siso, quando indicada.', 'Prevenir ou tratar problemas associados a dentes sem espaço ou posicionados de forma inadequada.', 'Em geral, dentes inclusos ou semi-inclusos, dor, infecções recorrentes ou necessidade ortodôntica.'),
          proc('Alterações da articulação temporomandibular', 'Avaliação das alterações da ATM e, quando indicado, tratamento cirúrgico.', 'Entender a causa do desconforto e definir a abordagem mais adequada, cirúrgica ou não.', 'Em geral, dor ou limitação ao abrir a boca, estalos e outros sintomas persistentes, após avaliação.'),
          proc('Traumatismos faciais', 'Avaliação e tratamento de lesões que atingem os ossos da face e os maxilares.', 'Restabelecer a função e a estrutura da região atingida.', 'Em geral, fraturas e lesões decorrentes de acidentes ou quedas. Pode exigir atendimento hospitalar.'),
          proc('Patologias bucomaxilofaciais', 'Avaliação de alterações nos tecidos da boca, dos maxilares e da face.', 'Investigar a natureza da alteração e definir a conduta adequada.', 'Em geral, lesões, cistos e outras alterações identificadas em exame clínico ou de imagem.'),
          proc('Reconstruções ósseas', 'Procedimentos que recompõem a estrutura óssea dos maxilares.', 'Criar condições estruturais para tratamentos posteriores, como a reabilitação sobre implantes.', 'Em geral, perda óssea decorrente de ausência dentária, trauma ou outras condições, após avaliação.'),
        ],
      },
      {
        id: 'implantodontia', n: '02', titulo: 'Implantodontia', imagem: 'implante.webp', imagemAlt: 'Imagem em estilo radiográfico de um implante dentário na mandíbula',
        texto: 'Área destinada à reabilitação oral por meio de implantes dentários, com planejamento prévio e acompanhamento.',
        itens: [
          proc('Implantes dentários', 'Colocação de pinos no osso para sustentar dentes artificiais.', 'Repor dentes ausentes, recuperando função mastigatória e estética.', 'Em geral, ausência de um ou mais dentes, conforme avaliação clínica e de imagem.'),
          proc('Enxertos ósseos', 'Procedimento que acrescenta osso em regiões com volume insuficiente.', 'Oferecer suporte adequado para a colocação de implantes.', 'Em geral, perda de volume ósseo após a perda dentária, avaliada em exame de imagem.'),
          proc('Reabilitação oral sobre implantes', 'Conjunto de etapas que recompõe os dentes sobre os implantes.', 'Devolver função e conforto, de acordo com o plano individual.', 'Em geral, pacientes com implantes instalados ou em planejamento, após avaliação.'),
          proc('Planejamento de implantes', 'Etapa de análise prévia, que pode contar com recursos digitais.', 'Organizar o posicionamento e as etapas do tratamento.', 'Antecede os procedimentos e depende de avaliação especializada.'),
        ],
      },
      {
        id: 'ortodontia', n: '03', titulo: 'Ortodontia', imagem: '',
        texto: 'Área destinada à avaliação, correção e acompanhamento das relações dentárias e oclusais.',
        itens: [
          proc('Ortodontia convencional', 'Tratamento com aparelhos fixos para alinhar os dentes.', 'Corrigir o posicionamento dos dentes e a relação entre as arcadas.', 'Em geral, desalinhamentos e alterações de mordida, após avaliação.'),
          proc('Alinhadores', 'Tratamento com placas removíveis, conforme disponibilidade.', 'Alinhar os dentes de forma planejada, quando indicado.', 'Depende do caso. Nem todo paciente é candidato a alinhadores.'),
          proc('Planejamento ortodôntico', 'Análise das relações dentárias e oclusais antes do tratamento.', 'Definir a abordagem, as etapas e a duração estimada.', 'Antecede o tratamento e depende de avaliação individualizada.'),
          proc('Preparação para cirurgia ortognática', 'Fase ortodôntica que antecede a cirurgia dos maxilares.', 'Organizar os dentes para que a cirurgia seja planejada em conjunto com a ortodontia.', 'Em pacientes com indicação de cirurgia ortognática, após avaliação.'),
        ],
      },
      {
        id: 'diagnostico', n: '04', titulo: 'Diagnóstico e Planejamento Digital', imagem: 'planejamento.webp', imagemAlt: 'Monitor com tomografia tridimensional da face e modelo físico de mandíbula',
        texto: 'Área de suporte tecnológico às especialidades. O diagnóstico e a indicação dos recursos são feitos por profissionais habilitados.',
        itens: [
          proc('Tomografia de feixe cônico', 'Exame de imagem tridimensional da região dos maxilares e da face.', 'Apoiar a avaliação com uma visão detalhada das estruturas.', 'Quando disponível e indicada pelo profissional responsável.'),
          proc('Escaneamento intraoral', 'Registro digital da boca por meio de um scanner.', 'Reunir informações das arcadas dentárias para o planejamento.', 'Conforme a necessidade do tratamento.'),
          proc('Planejamento tridimensional', 'Análise virtual a partir de exames e registros do paciente.', 'Organizar as etapas do tratamento com apoio de imagens.', 'Conforme indicação clínica e disponibilidade.'),
          proc('Recursos digitais de apoio', 'Integração de exames e registros clínicos.', 'Apresentar o plano terapêutico de forma clara ao paciente.', 'Em todas as especialidades, quando indicado.'),
        ],
      },
    ],
    integracao: {
      titulo: 'Integração multidisciplinar',
      texto: 'Dependendo do caso, diferentes profissionais podem atuar em conjunto. Um tratamento de cirurgia ortognática, por exemplo, costuma envolver ortodontia e cirurgia no mesmo plano. A estrutura de equipe é conceitual e será definida antes de qualquer uso real.',
      passos: ['Avaliação', 'Plano em conjunto', 'Execução coordenada', 'Acompanhamento'],
    },
    faq: {
      titulo: 'Perguntas *frequentes.*',
      itens: [
        { p: 'Preciso de encaminhamento para a primeira avaliação?', r: 'Em geral, não. O contato pode ser feito diretamente pelo WhatsApp, e a equipe orienta sobre o agendamento.' },
        { p: 'Toda cirurgia é feita na clínica?', r: 'Não. Procedimentos de maior complexidade podem exigir ambiente hospitalar. A indicação do local depende do caso e é explicada na avaliação.' },
        { p: 'A tomografia é sempre necessária?', r: 'Não necessariamente. Os exames são solicitados quando indicados pelo profissional, de acordo com a necessidade de cada caso.' },
        { p: 'Posso fazer a avaliação apenas para entender as possibilidades?', r: 'Sim. A avaliação serve para conhecer o caso e apresentar possibilidades, etapas e alternativas, sem compromisso com o tratamento.' },
        { p: 'O resultado é garantido?', r: 'Não. Nenhum tratamento de saúde tem resultado garantido. A resposta varia de pessoa para pessoa, e os riscos são explicados na avaliação.' },
      ],
    },
    cta: {
      titulo: 'Cada tratamento começa com *uma avaliação individualizada.*',
      botao: 'Agendar avaliação pelo WhatsApp',
    },
  },
}
