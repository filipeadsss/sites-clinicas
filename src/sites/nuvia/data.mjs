// Núvia — Cirurgia Plástica Avançada (marca conceitual). Linha "institucional": premium, médica, discreta.
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><rect width="100" height="60" fill="#FAFAFA"/><path d="M6 40C24 6 44 8 54 28 62 44 80 38 94 8" fill="none" stroke="#8B6A4E" stroke-width="5" stroke-linecap="round"/></svg>`

const proc = (nome, texto, objetivo) => ({ nome, texto, objetivo })

export default {
  slug: 'nuvia',
  layout: 'institucional',
  lang: 'pt-BR',
  demo: true,
  noindex: true,
  nome: 'Núvia',
  descritor: 'Cirurgia Plástica Avançada',
  cidade: 'São Paulo — SP',
  assinatura: 'Forma, contorno e confiança.',
  favicon: fav,

  tema: {
    cores: { bronze: '#8B6A4E', dourado: '#C7A98A', bege: '#E3D6C9', cinza: '#F1EEEA', branco: '#FAFAFA', tinta: '#33271F', suave: '#6B5A4D', linha: '#E6DDD3' },
    branco: '#FAFAFA',
    fonteTitulo: 'Playfair Display',
    fonteTexto: 'Montserrat',
    googleFonts: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap',
  },

  contato: {
    whatsapp: '',
    whatsappExibicao: '(11) 90000-0000',
    mensagemWhatsapp: 'Olá! Vim pelo site da Núvia e gostaria de solicitar uma avaliação.',
    endereco: ['Jardim Paulista · Jardins', 'São Paulo — SP', 'Endereço completo após validação'],
    horarios: 'Atendimento com hora marcada',
  },

  responsavel: {
    nome: 'Dr. Rafael Monteiro',
    cargo: 'Cirurgião Plástico | Fundador da Núvia',
    registroNota: 'Personagem fictício. Registros profissionais (CRM, RQE), titulações e credenciais devem ser informados e comprovados antes de qualquer uso real.',
  },

  seo: {
    titulo: 'Núvia Cirurgia Plástica Avançada | Cirurgia plástica em São Paulo',
    descricao: 'Centro de cirurgia plástica nos Jardins, São Paulo: planejamento individualizado, estrutura especializada e acompanhamento pós-operatório. Solicite uma avaliação.',
    tituloTratamentos: 'Cirurgias faciais, corporais e mamárias e Núvia Recovery | Núvia',
    descricaoTratamentos: 'Conheça as especialidades da Núvia em cirurgia plástica e o Núvia Recovery, unidade de recuperação pós-operatória. Cada procedimento começa com avaliação médica individualizada.',
  },

  foco: {
    'fachada.webp': '50% 50%', 'recepcao.webp': '50% 55%', 'consultorio.webp': '50% 55%',
    'dr.webp': '50% 25%', 'consulta.webp': '55% 30%', 'suite.webp': '50% 55%',
    'kit.webp': '50% 50%', 'cirurgico.webp': '50% 40%',
  },

  home: {
    hero: {
      selo: 'Jardim Paulista · São Paulo',
      titulo: 'Forma, contorno *e confiança.*',
      subtitulo: 'Cirurgia plástica com planejamento individualizado, excelência médica e uma experiência de cuidado que acompanha cada etapa da sua jornada.',
      cta: 'Agende uma consulta',
      ctaSecundario: 'Conheça nossas especialidades',
      imagem: 'fachada.webp',
      imagemAlt: 'Fachada da Núvia com letreiro em bronze e recepção iluminada ao fundo',
    },
    numeros: {
      rotulo: 'Estrutura prevista no projeto conceitual',
      itens: [
        { n: '2', t: 'salas cirúrgicas' },
        { n: '4', t: 'suítes privativas no Recovery' },
        { n: '500–800', t: 'm² de área estimada' },
        { n: '7', t: 'áreas profissionais integradas' },
      ],
    },
    apresentacao: {
      eyebrow: 'A Núvia',
      titulo: 'Uma nova perspectiva sobre o cuidado em *cirurgia plástica.*',
      texto: [
        'A Núvia integra conhecimento médico, planejamento individualizado e estrutura especializada para proporcionar uma experiência de atendimento organizada em todas as etapas.',
        'Nossa proposta é conduzir cada jornada com atenção aos detalhes, respeito à individualidade e compromisso com a qualidade assistencial.',
      ],
      imagem: 'consulta.webp',
      imagemAlt: 'Médico avaliando a face de uma paciente durante consulta',
      pilares: ['Autoridade médica', 'Excelência técnica', 'Segurança assistencial', 'Experiência integral', 'Atendimento personalizado'],
    },
    especialidades: {
      eyebrow: 'Especialidades',
      titulo: 'Especialidades que respeitam sua *individualidade.*',
      botao: 'Ver procedimentos',
      itens: [
        { id: 'faciais', n: 'I', titulo: 'Cirurgia Facial', texto: 'Procedimentos cirúrgicos da face, com planejamento individualizado e avaliação das características de cada paciente.', lista: ['Rinoplastia', 'Blefaroplastia', 'Lifting facial', 'Otoplastia'] },
        { id: 'corporais', n: 'II', titulo: 'Cirurgia Corporal', texto: 'Procedimentos voltados ao contorno corporal, considerando as condições anatômicas e clínicas individuais.', lista: ['Abdominoplastia', 'Lipoaspiração', 'Lipoescultura', 'Lifting corporal'] },
        { id: 'mamarias', n: 'III', titulo: 'Cirurgia Mamária', texto: 'Procedimentos mamários planejados conforme as necessidades, características e expectativas de cada paciente.', lista: ['Mamoplastia de aumento', 'Mamoplastia redutora', 'Mastopexia'] },
      ],
    },
    fundador: {
      eyebrow: 'Autoridade médica',
      titulo: 'Conhecimento médico e *atenção individualizada.*',
      texto: [
        'À frente da Núvia, o Dr. Rafael Monteiro representa uma visão de cirurgia plástica baseada em planejamento, responsabilidade e atenção ao paciente.',
        'Sua proposta é integrar conhecimento médico, estrutura especializada e acompanhamento próximo durante toda a jornada.',
      ],
      imagem: 'dr.webp',
      imagemAlt: 'Dr. Rafael Monteiro, cirurgião plástico, de jaleco, diante da recepção da clínica',
    },
    equipe: {
      eyebrow: 'Equipe multidisciplinar',
      titulo: 'Conhecimento integrado em *cada etapa.*',
      texto: 'A jornada cirúrgica envolve diferentes profissionais e áreas de conhecimento. A proposta multidisciplinar da Núvia valoriza a integração entre especialidades para organizar o atendimento e o acompanhamento do paciente.',
      itens: [
        { t: 'Cirurgião fundador', d: 'Representante institucional' },
        { t: 'Cirurgiões plásticos', d: 'Atuação nas especialidades cirúrgicas' },
        { t: 'Anestesiologia', d: 'Avaliação e assistência anestésica' },
        { t: 'Enfermagem', d: 'Assistência perioperatória e recuperação' },
        { t: 'Fisioterapia', d: 'Acompanhamento, quando indicado' },
        { t: 'Nutrição', d: 'Orientação, quando indicada' },
        { t: 'Coordenação assistencial', d: 'Organização dos fluxos e integração da equipe' },
      ],
      nota: 'Estrutura profissional prevista no conceito. A equipe efetiva depende das exigências profissionais e sanitárias aplicáveis.',
      imagem: 'cirurgico.webp',
      imagemAlt: 'Equipe em ambiente cirúrgico, com luminária e monitor ao fundo',
    },
    estrutura: {
      eyebrow: 'Estrutura médica',
      titulo: 'Uma estrutura pensada para *a jornada cirúrgica.*',
      nota: 'Imagens conceituais geradas para demonstração, sem relação com instalações reais.',
      fotos: [
        { src: 'recepcao.webp', alt: 'Recepção com balcão em pedra clara e poltronas', legenda: 'Recepção', area: 'a' },
        { src: 'consultorio.webp', alt: 'Consultório médico com mesa em pedra e poltronas', legenda: 'Consultórios', area: 'b' },
        { src: 'cirurgico.webp', alt: 'Ambiente cirúrgico', legenda: 'Centro cirúrgico', area: 'c' },
        { src: 'suite.webp', alt: 'Suíte de recuperação com cama hospitalar e poltrona', legenda: 'Áreas de recuperação', area: 'd' },
      ],
    },
    recovery: {
      eyebrow: 'Núvia Recovery',
      titulo: 'O cuidado continua *depois da cirurgia.*',
      texto: 'O Núvia Recovery integra a experiência assistencial da instituição, com uma proposta de recuperação pós-operatória que valoriza privacidade, conforto e acompanhamento adequado.',
      botao: 'Conheça o Núvia Recovery',
      imagem: 'suite.webp',
      imagemAlt: 'Suíte privativa do Núvia Recovery com cama hospitalar, poltrona e iluminação indireta',
      aviso: 'A elegibilidade para o Recovery é definida clinicamente.',
    },
    jornada: {
      eyebrow: 'Jornada integral',
      titulo: 'Da primeira consulta *ao acompanhamento.*',
      etapas: [
        { t: 'Primeiro contato', d: 'Atendimento inicial e agendamento com o concierge.' },
        { t: 'Avaliação médica', d: 'Consulta e avaliação individual.' },
        { t: 'Planejamento', d: 'Orientações e preparo pré-operatório.' },
        { t: 'Procedimento cirúrgico', d: 'Equipe organizada e cuidados perioperatórios.' },
        { t: 'Recuperação', d: 'Recuperação pós-anestésica e Recovery, quando indicado.' },
        { t: 'Acompanhamento', d: 'Orientações de alta e retornos médicos.' },
      ],
    },
    cta: {
      titulo: 'Sua jornada começa *com uma avaliação.*',
      texto: 'Conheça a proposta da Núvia e converse com nossa equipe para receber informações sobre consultas e especialidades.',
      botao: 'Agende uma consulta',
      botaoSec: 'Fale com nosso concierge',
    },
    formulario: {
      titulo: 'Solicitar avaliação',
      texto: 'Deixe seus dados de contato. Não pedimos histórico médico nem fotos por aqui.',
      procedimentos: ['Cirurgia facial', 'Cirurgia corporal', 'Cirurgia mamária', 'Núvia Recovery', 'Ainda não sei'],
      botao: 'Enviar solicitação',
      demo: 'Demonstração: nenhum dado é enviado ou armazenado.',
    },
    local: {
      eyebrow: 'Localização',
      titulo: 'Jardim Paulista, *Jardins.*',
      texto: 'São Paulo — SP. O endereço completo será divulgado após a validação.',
    },
  },

  tratamentos: {
    hero: {
      eyebrow: 'Cirurgias e Recovery',
      titulo: 'Conhecimento médico, planejamento *e cuidado integral.*',
      texto: 'Conheça nossas especialidades em cirurgia plástica e descubra como funciona a jornada de atendimento da Núvia.',
      botao: 'Solicite uma avaliação',
    },
    aviso: 'Conteúdo informativo, sem promessa de resultado e sem substituir consulta médica. Toda cirurgia envolve riscos, e a indicação depende de avaliação médica individual.',
    grupos: [
      {
        id: 'faciais', n: 'I', titulo: 'Cirurgias faciais',
        texto: 'Procedimentos cirúrgicos faciais planejados de acordo com as características individuais, necessidades e condições clínicas de cada paciente.',
        itens: [
          proc('Rinoplastia', 'Cirurgia que atua na estrutura e na forma do nariz.', 'Harmonizar o nariz com as proporções da face e, quando indicado, cuidar de aspectos funcionais.'),
          proc('Blefaroplastia', 'Procedimento realizado nas pálpebras superiores, inferiores ou em ambas.', 'Tratar o excesso de pele e de bolsas das pálpebras.'),
          proc('Lifting facial', 'Cirurgia que reposiciona tecidos da face e do pescoço.', 'Tratar a flacidez e o contorno do rosto, respeitando a expressão natural.'),
          proc('Otoplastia', 'Cirurgia que ajusta a forma e a posição das orelhas.', 'Equilibrar a posição das orelhas em relação à face.'),
        ],
      },
      {
        id: 'corporais', n: 'II', titulo: 'Cirurgias corporais',
        texto: 'Procedimentos voltados ao contorno corporal, com planejamento individualizado e avaliação das características anatômicas e condições clínicas de cada paciente.',
        itens: [
          proc('Abdominoplastia', 'Cirurgia que atua na parede abdominal e no excesso de pele da região.', 'Tratar flacidez e excesso de pele do abdome, conforme a avaliação.'),
          proc('Lipoaspiração', 'Procedimento para remoção de gordura localizada com o uso de cânulas.', 'Contribuir para o contorno de regiões específicas. Não é um tratamento para emagrecimento.'),
          proc('Lipoescultura', 'Combina a remoção e o reaproveitamento de gordura para modelar o contorno.', 'Trabalhar as proporções do corpo de forma individualizada.'),
          proc('Lifting corporal', 'Conjunto de técnicas para tratar excesso de pele e flacidez em diferentes regiões.', 'Reposicionar tecidos e cuidar do contorno corporal, após avaliação.'),
        ],
      },
      {
        id: 'mamarias', n: 'III', titulo: 'Cirurgias mamárias',
        texto: 'Procedimentos mamários planejados considerando as características anatômicas, expectativas e condições individuais de cada paciente.',
        itens: [
          proc('Mamoplastia de aumento', 'Inclusão de implantes para alterar o volume das mamas.', 'Adequar o volume das mamas às características e expectativas de cada paciente.'),
          proc('Mamoplastia redutora', 'Redução do volume das mamas, com remodelagem.', 'Adequar volume e proporção, inclusive quando há desconforto físico.'),
          proc('Mastopexia', 'Reposicionamento das mamas e tratamento do excesso de pele.', 'Tratar flacidez e posição das mamas, com ou sem implante, conforme avaliação.'),
        ],
      },
    ],
    avaliacao: {
      eyebrow: 'Avaliação e planejamento',
      titulo: 'Cada procedimento começa com uma *avaliação individualizada.*',
      texto: [
        'A indicação de uma cirurgia depende de uma avaliação médica que considere as condições clínicas, características individuais, expectativas e possíveis riscos envolvidos.',
        'Na Núvia, o planejamento é parte fundamental da jornada cirúrgica.',
      ],
      imagem: 'consultorio.webp',
      imagemAlt: 'Consultório médico da Núvia',
    },
    recovery: {
      eyebrow: 'Núvia Recovery',
      titulo: 'Uma experiência de cuidado *após a cirurgia.*',
      texto: [
        'O Núvia Recovery é a unidade dedicada à experiência de recuperação pós-operatória da instituição.',
        'Sua proposta combina privacidade, conforto, organização e assistência compatível com as necessidades de cada paciente.',
      ],
      suites: {
        titulo: 'Quatro suítes privativas',
        texto: 'Cada ambiente é pensado para unir privacidade, conforto, organização, funcionalidade e sofisticação discreta, em estilo boutique hospital.',
        aviso: 'Nem todas as cirurgias ou pacientes exigem ou podem utilizar o Recovery. A elegibilidade é definida clinicamente.',
        imagens: [
          { src: 'suite.webp', alt: 'Suíte privativa com cama hospitalar, poltrona e luminária' },
        ],
      },
      kit: {
        titulo: 'Um cuidado pensado nos detalhes.',
        texto: 'O Núvia Recovery Kit representa a atenção aos detalhes da experiência de recuperação, com uma apresentação personalizada e organização dos itens de cuidado conforme a orientação profissional.',
        aviso: 'Os itens dependem do procedimento e da orientação profissional. O kit não substitui medicamentos, materiais ou cuidados prescritos.',
        imagem: 'kit.webp',
        imagemAlt: 'Caixa do Núvia Recovery Kit com guia de recuperação e itens de cuidado',
      },
      jornada: {
        titulo: 'Jornada pós-operatória',
        etapas: ['Orientações médicas', 'Preparação para a recuperação', 'Acomodação, quando indicada', 'Assistência durante o período previsto', 'Orientações de alta', 'Continuidade do acompanhamento'],
      },
    },
    faq: {
      titulo: 'Perguntas *frequentes*',
      itens: [
        { p: 'Como funciona a primeira consulta?', r: 'A primeira consulta é uma conversa com o médico, para entender suas queixas, seu histórico e suas expectativas. A partir dela, o profissional orienta sobre as possibilidades e os próximos passos.' },
        { p: 'Como é definido o procedimento mais adequado?', r: 'A indicação é definida pelo médico em avaliação individual, considerando condições clínicas, características anatômicas, expectativas e possíveis riscos.' },
        { p: 'Todos os pacientes podem realizar cirurgia plástica?', r: 'Não. A cirurgia depende de avaliação clínica e, quando necessário, de exames. Só o médico pode dizer se o procedimento é indicado no seu caso.' },
        { p: 'Como funciona o planejamento pré-operatório?', r: 'Inclui avaliação médica, orientações e, conforme o caso, exames e avaliação anestésica. Cada etapa é explicada pela equipe antes do procedimento.' },
        { p: 'O Núvia Recovery está disponível para todos os pacientes?', r: 'Não. O uso do Recovery depende de indicação e elegibilidade definidas clinicamente.' },
        { p: 'Quantos dias de recuperação são necessários?', r: 'O período varia conforme o procedimento e as condições de cada pessoa. A equipe médica informa as orientações específicas na avaliação.' },
        { p: 'Como funciona o acompanhamento após a alta?', r: 'Inclui orientações de alta, retornos médicos e continuidade do acompanhamento, conforme o plano definido pela equipe.' },
      ],
    },
    cta: {
      titulo: 'Conheça *a Núvia.*',
      texto: 'Converse com nossa equipe e conheça nossa proposta de atendimento em cirurgia plástica.',
      botao: 'Agende uma consulta',
      botaoSec: 'Fale com nosso concierge',
    },
  },
}
