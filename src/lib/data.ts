export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "familia" | "trabalho" | "atendimento";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Susimara Teixeira Bidin Advocacia",
  shortName: "Susimara Bidin Advocacia",
  lawyerName: "Dra. Susimara Teixeira Bidin",
  oab: "OAB/PR 94.840",
  tagline: "Advocacia Estratégica e Humanizada com Foco em Soluções Seguras para Famílias e Relações de Trabalho",
  address: "Rua Heitor Alves Guimarães, 819, Sala 4 - Centro, Araucária - PR, CEP 83702-130",
  addressShort: "Centro, Araucária - PR",
  cityState: "Araucária - PR",
  phone: "(41) 98484-9550",
  whatsappNumber: "5541984849550",
  whatsappFormatted: "(41) 98484-9550",
  whatsappUrl: "https://wa.me/5541984849550?text=Ol%C3%A1%2C%20Dra.%20Susimara.%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  mapsDirectionsUrl: "https://maps.google.com/?q=Rua+Heitor+Alves+Guimar%C3%A3es,+819+-+Sala+4+-+Centro,+Arauc%C3%A1ria+-+PR,+83702-130",
  email: "",
  experienceYears: "+8 anos",
  workingHours: {
    weekdays: "Segunda a Quinta: 09:00 às 17:00 | Sexta: 09:00 às 16:00",
    weekends: "Sábado e Domingo: Encerrado",
  },
  social: {
    instagram: "https://www.instagram.com/susibidin.adv/",
  },
  instagramUrl: "https://www.instagram.com/susibidin.adv/",
  pillars: {
    mission: "Oferecer orientação jurídica humanizada, transparente e estratégica nas áreas do Direito do Trabalho e Direito de Família, garantindo segurança patrimonial, justiça nas relações laborais e acolhimento em momentos decisivos.",
    vision: "Ser referência regional em Araucária e no Paraná por uma advocacia próxima, assertiva e focada na solução ágil e pacífica de conflitos, sem abrir mão do rigor técnico contencioso.",
    values: [
      "Atendimento Humanizado, Empático e Personalizado",
      "Rigor Técnico e Estratégia Jurídica Sob Medida",
      "Ética e Transparência Estrita (Provimento 205/2021 CFOAB)",
      "Compromisso Firme com a Dignidade da Pessoa e do Trabalhador",
    ],
  },
  metrics: [
    { value: "+8 Anos", label: "Experiência consolidada na advocacia prática" },
    { value: "100%", label: "Atendimento direto com a advogada titular" },
    { value: "Estratégia", label: "Soluções preventivas e contenciosas eficientes" },
    { value: "Ética", label: "Conformidade integral ao CFOAB e sigilo profissional" },
  ],
};

export const LAWYER_PROFILE = {
  name: "Dra. Susimara Teixeira Bidin",
  role: "Advogada Titular & Fundadora",
  oab: "OAB/PR 94.840",
  specialties: "Pós-graduada em Direito e Processo do Trabalho • Atuação Especializada em Direito de Família",
  photo: "/foto_perfil.jpeg",
  bioShort: "Com mais de 8 anos de prática forense consolidada em Araucária/PR e região, a Dra. Susimara Teixeira Bidin conduz uma advocacia estratégica que alia pós-graduação em Direito e Processo do Trabalho a um atendimento acolhedor e humanizado em demandas de família e trabalhistas.",
  bio: "Susimara Teixeira Bidin é advogada inscrita na OAB/PR sob o nº 94.840, com pós-graduação em Direito e Processo do Trabalho e mais de 8 anos de experiência na advocacia trabalhista e de família.\n\nSua atuação é pautada no atendimento humanizado, na orientação clara e em soluções jurídicas estratégicas tanto para pessoas físicas quanto para empresas. Na seara trabalhista, possui sólida vivência na defesa de empresas (assessoria preventiva e contenciosa) e na proteção irrestrita dos direitos dos trabalhadores. No Direito de Família, atua com sensibilidade e firmeza técnica na condução de divórcios, fixação e revisão de pensão alimentícia, guarda, regulamentação de convivência e processos de adoção.",
  academicSummary: [
    {
      institution: "Especialização Lato Sensu",
      course: "Pós-Graduação em Direito e Processo do Trabalho",
      details: "Aprofundamento técnico em rotinas trabalhistas, cálculos de verbas, audiências de instrução e jurisprudência dos Tribunais Regionais e TST.",
    },
    {
      institution: "Prática Forense & Assessoria",
      course: "Mais de 8 Anos de Advocacia Trabalhista & Família",
      details: "Atuação mista e estratégica: defesa contenciosa de trabalhadores e assessoria jurídica preventiva para empresas e empregadores.",
    },
    {
      institution: "Direito das Famílias & Sucessões",
      course: "Capacitação Contínua em Mediação e Conflitos Familiares",
      details: "Condução conciliadora e combativa em divórcios, partilhas de bens patrimoniais, guarda compartilhada e ações de alimentos.",
    },
  ],
  quote: "Cada história de vida ou relação de trabalho exige um olhar atento, humano e tecnicamente impecável. Nosso propósito é transformar incertezas em segurança jurídica, orientando cada cliente com clareza e dedicação.",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "divorcio-partilha",
    code: "01",
    title: "Divórcio & Partilha de Bens",
    subtitle: "Dissolução Humanizada em Cartório ou Judicial",
    description: "Condução acolhedora e segura de divórcios consensuais (em cartório, ágil e econômico) e litigiosos, garantindo a justa partilha do patrimônio e a proteção da estabilidade financeira.",
    highlights: [
      "Divórcio extrajudicial rápido em cartório por escritura pública",
      "Partilha de imóveis, veículos, contas bancárias e dívidas do casal",
      "Reconhecimento e dissolução de união estável com divisão de bens",
      "Medidas cautelares de proteção patrimonial contra dilapidação de bens",
    ],
  },
  {
    id: "guarda-convivencia-adocao",
    code: "02",
    title: "Guarda, Convivência Parental & Adoção",
    subtitle: "Prioridade Absoluta ao Bem-Estar dos Filhos",
    description: "Estruturação equilibrada da convivência familiar, guarda compartilhada ou unilateral, combate à alienação parental e assessoria jurídica em processos de adoção.",
    highlights: [
      "Definição e regulamentação de guarda compartilhada na prática",
      "Regime de convivência, férias e visitas sem atritos desnecessários",
      "Combate jurídico firme a atos de alienação parental",
      "Procedimentos e orientações para processos de adoção regular",
    ],
  },
  {
    id: "pensao-alimenticia",
    code: "03",
    title: "Pensão Alimentícia (Fixação, Revisão & Cobrança)",
    subtitle: "Sustento Justo sem Prejuízo da Dignidade",
    description: "Ações para fixação de pensão com base no binômio necessidade e possibilidade, pedidos revisionais para adequação de valores e execuções de débitos em atraso sob pena de penhora ou prisão.",
    highlights: [
      "Ação de fixação de alimentos provisórios e definitivos para menores",
      "Revisão de pensão alimentícia por alteração de renda de quem paga ou recebe",
      "Execução e cobrança de parcelas em atraso com pedido de prisão e penhora",
      "Exoneração de alimentos quando o filho atinge independência financeira",
    ],
  },
  {
    id: "rescisao-horas-extras",
    code: "04",
    title: "Rescisão Contratual, Verbas & Horas Extras",
    subtitle: "Defesa dos Direitos Laborais e Cálculos Exatos",
    description: "Apuração minuciosa de haveres rescisórios na demissão sem justa causa, pedido de demissão ou acordo mútuo, bem como cobrança de horas suplementares e intervalos suprimidos.",
    highlights: [
      "Conferência de saldo de salário, aviso prévio, férias proporcionais e 13º",
      "Cobrança de horas extras além da 8ª diária e 44ª semanal e reflexos",
      "Liberação e conferência da multa de 40% do FGTS e seguro-desemprego",
      "Indenização por intervalos de refeição e descanso não usufruídos",
    ],
  },
  {
    id: "vinculo-clt-pejotizacao",
    code: "05",
    title: "Reconhecimento de Vínculo CLT & Falsa PJ",
    subtitle: "Nulidade de Contratos Simulados (Art. 9º da CLT)",
    description: "Atuação enérgica para profissionais contratados como PJ (Pessoa Jurídica) ou sem assinatura na carteira que cumprem horário, ordens diretas e subordinação jurídica típica de empregado.",
    highlights: [
      "Declaração judicial de nulidade da falsa contratação por PJ",
      "Recuperação retroativa de FGTS, férias + 1/3, 13º e aviso prévio",
      "Registro e anotação obrigatória na Carteira de Trabalho (CTPS)",
      "Recolhimento integral de contribuições previdenciárias do período",
    ],
  },
  {
    id: "assedio-acidente-empresarial",
    code: "06",
    title: "Assédio Moral, Acidentes & Defesa Empresarial",
    subtitle: "Proteção Integral e Consultoria Preventiva",
    description: "Ações de rescisão indireta e indenizações por assédio moral ou acidentes de trabalho, e atuação estratégica defensiva e preventiva para empresas e empregadores.",
    highlights: [
      "Ação de Rescisão Indireta (art. 483 da CLT) por falta patronal grave",
      "Indenizações por danos morais, materiais e estabilidade acidentária (CAT)",
      "Consultoria e conformidade trabalhista preventiva para empresas",
      "Defesa técnica em audiências trabalhistas e redução de passivos",
    ],
  },
];

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "artigo-01",
    number: "01",
    title: "Partilha de Bens e Moradia: Quem Fica com a Casa Após o Divórcio?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "Entenda os critérios jurídicos sobre a permanência no imóvel do casal e a compensação patrimonial pela ocupação exclusiva.",
    content: [
      "Uma das principais dúvidas no momento da dissolução matrimonial é a definição de quem permanecerá no imóvel comum. A legislação não impõe a saída automática de nenhum dos cônjuges sem decisão judicial ou acordo prévio entre as partes.",
      "Quando existem filhos menores, o magistrado costuma priorizar a estabilidade emocional e rotina das crianças, deferindo a permanência daquele que exercerá a residência habitual dos filhos até a conclusão definitiva da partilha de bens.",
      "Caso um dos cônjuges permaneça com exclusividade no imóvel pertencente a ambos, a jurisprudência consolidada reconhece a possibilidade de arbitramento de aluguel proporcional em favor do outro coproprietário até que se realize a venda ou adjudicação do bem.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-02",
    number: "02",
    title: "Pensão Alimentícia: Como é Fixado o Valor e Quais São os Limites Legais?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "Desmistificando a ideia da porcentagem fixa e compreendendo o trinômio necessidade, possibilidade e proporcionalidade.",
    content: [
      "Ao contrário da crença comum, a lei brasileira não estabelece um percentual automático de 30% sobre os vencimentos para a pensão alimentícia. O valor é apurado segundo as necessidades reais da criança e a real capacidade financeira do genitor obrigado.",
      "As despesas avaliadas compreendem não apenas a alimentação em sentido estrito, mas também saúde, vestuário, moradia, transporte, material escolar e atividades de lazer adequadas à realidade socioeconômica da família.",
      "Havendo oscilação comprovada nas finanças (como desemprego, nascimento de outro filho ou promoção salarial), a Ação Revisional de Alimentos é o instrumento adequado para reequilibrar o encargo, vedada a redução unilateral sem autorização judicial.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-03",
    number: "03",
    title: "Guarda Compartilhada na Prática: Desmistificando a Convivência e Alimentos",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "Como a guarda compartilhada divide decisões e responsabilidades parentais sem extinguir a obrigação alimentar.",
    content: [
      "A guarda compartilhada é a regra geral prevista no Código Civil brasileiro, aplicando-se mesmo quando não há consenso harmônico entre os pais, salvo em situações comprovadas de incapacidade ou inaptidão para o exercício do poder familiar.",
      "Compartilhar a guarda significa tomar em conjunto as decisões cruciais sobre a vida dos filhos, tais como escolha de escola, tratamentos médicos, atividades extracurriculares e viagens, assegurando que ambos os genitores participem ativamente do desenvolvimento.",
      "Importante salientar que a guarda compartilhada não elimina a pensão alimentícia. O genitor com o qual o filho não reside majoritariamente continua com o dever de contribuir para o sustento e custeio das despesas rotineiras do menor.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-04",
    number: "04",
    title: "Pejotização e Subordinação: Quando a Exigência de CNPJ Configura Fraude?",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary: "Critérios de pessoalidade e subordinação jurídica que anulam contratos de prestação de serviços simulados.",
    content: [
      "A contratação de trabalhadores como pessoa jurídica (PJ ou MEI) para o exercício de tarefas rotineiras que envolvam subordinação direta a superiores, cumprimento de horários pré-fixados e pessoalidade é considerada nula pelo artigo 9º da CLT.",
      "No Direito do Trabalho vigora o Princípio da Primazia da Realidade: independentemente da existência de contrato assinado entre CNPJs ou da emissão de notas fiscais, o que define a relação jurídica é a rotina fática de trabalho prestado.",
      "Reconhecido o vínculo pela Justiça do Trabalho, a empresa é condenada a registrar a Carteira de Trabalho e pagar todas as verbas celetistas retroativas, como 13º salários, férias com 1/3, depósitos de FGTS com multa e adicionais legais.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-05",
    number: "05",
    title: "Horas Extras e Intervalo de Refeição: Direitos e Limites pela CLT",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary: "Como funciona a apuração da jornada extraordinária e os reflexos nas demais verbas trabalhistas.",
    content: [
      "A jornada máxima constitucional é de 8 horas diárias e 44 horas semanais. Qualquer labor realizado além desse limite deve ser remunerado com o acréscimo mínimo de 50% sobre o valor da hora normal, ou percentual maior estipulado em acordo coletivo.",
      "Para jornadas contínuas que excedam seis horas, o trabalhador tem direito garantido a um intervalo mínimo de uma hora para refeição e descanso. A concessão parcial ou a supressão do intervalo gera o direito à indenização do período suprimido com adicional de 50%.",
      "As horas extras habituais geram reflexos obrigatórios em férias, 13º salário, repouso semanal remunerado (DSR), aviso prévio e depósitos na conta vinculada do FGTS.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
];

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento Humanizado & Escuta Atenta",
    subtitle: "Compreensão aprofundada da sua realidade",
    description: "Você conversa diretamente com a Dra. Susimara Teixeira Bidin via WhatsApp ou presencialmente em Araucária. Analisamos com atenção seus documentos e o contexto específico do caso.",
  },
  {
    number: "02",
    title: "Diagnóstico Jurídico & Estratégia Sob Medida",
    subtitle: "Clareza total sobre alternativas e riscos",
    description: "Apresentamos as soluções mais adequadas e seguras: oportunidade de acordo extrajudicial rápido e conciliador ou necessidade de medidas judiciais firmes e protetivas.",
  },
  {
    number: "03",
    title: "Atuação Técnica & Rigor Processual",
    subtitle: "Defesa combativa e cálculos minuciosos",
    description: "Elaboração cuidadosa de minutas, petições judiciais e acompanhamento estratégico de audiências com fundamentação na jurisprudência atualizada dos Tribunais.",
  },
  {
    number: "04",
    title: "Acompanhamento Próximo & Atualização Contínua",
    subtitle: "Transparência total até a conclusão do caso",
    description: "Cada movimentação relevante é comunicada de forma acessível e transparente, mantendo você sempre informado sobre todas as fases do procedimento.",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "familia",
    label: "Direito de Família",
    iconName: "HeartHandshake",
    items: [
      {
        id: "faq-f1",
        question: "Quando o divórcio pode ser feito rapidamente em cartório?",
        answer: "O divórcio extrajudicial em cartório pode ser realizado sempre que houver consenso mútuo entre o casal sobre a partilha de bens e não houver filhos menores ou incapazes não emancipados (salvo se as questões de guarda e pensão já tiverem sido previamente homologadas em juízo). É o procedimento mais rápido, exigindo a assistência de advogado.",
      },
      {
        id: "faq-f2",
        question: "Quem fica com o imóvel comum da família logo após a separação?",
        answer: "Não há regra de saída forçada sem determinação judicial. Havendo filhos menores, a residência da família tende a ser mantida temporariamente em favor do genitor que exerce a custódia diária dos filhos. O uso exclusivo prolongado do imóvel por um dos cônjuges pode ensejar a cobrança de indenização locatícia proporcional ao outro até a partilha final.",
      },
      {
        id: "faq-f3",
        question: "Posso proibir o outro genitor de ver os filhos se a pensão estiver atrasada?",
        answer: "Não. A convivência com os pais e a pensão alimentícia são direitos autônomos. A falta de pagamento de alimentos deve ser cobrada por meio da Ação de Execução de Alimentos (que pode levar à penhora de bens ou prisão civil do devedor), mas não autoriza a suspensão do direito de convivência e afeto da criança.",
      },
    ],
  },
  {
    id: "trabalho",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-t1",
        question: "Fui contratado como 'PJ' ou MEI, mas cumpro horários e ordens. Tenho direitos?",
        answer: "Sim. Se você cumpre horário determinado, recebe ordens diretas de chefia, não pode se fazer substituir e depende desse trabalho habitual, a relação é de emprego disfarçada (pejotização fraudulenta). A Justiça do Trabalho anula o contrato de PJ e condena a empresa ao registro da carteira e pagamento de todos os direitos retroativos.",
      },
      {
        id: "faq-t2",
        question: "Fui demitido sem justa causa. Quais verbas tenho direito de receber?",
        answer: "Na dispensa imotivada, o trabalhador faz jus ao saldo de salário, aviso prévio proporcional ao tempo de serviço, férias vencidas e proporcionais com o terço constitucional, 13º salário proporcional, levantamento integral do saldo do FGTS com acréscimo da multa de 40% paga pelo empregador e guias do seguro-desemprego.",
      },
      {
        id: "faq-t3",
        question: "Qual o prazo máximo para entrar com uma ação trabalhista após sair da empresa?",
        answer: "O prazo constitucional é de até 2 (dois) anos contados a partir da data de rescisão do contrato de trabalho. Nesse processo, é possível cobrar as verbas e direitos referentes aos últimos 5 (cinco) anos contados a partir do ajuizamento da ação.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Consultas",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-a1",
        question: "Como funciona a primeira conversa com a Dra. Susimara Teixeira Bidin?",
        answer: "O atendimento inicial pode ser realizado online via WhatsApp ou agendado presencialmente no escritório no Centro de Araucária/PR. A Dra. Susimara analisa os documentos e a situação de forma individualizada, esclarecendo direitos e viabilidade com total discrição e sigilo.",
      },
      {
        id: "faq-a2",
        question: "O escritório atende empresas ou apenas trabalhadores?",
        answer: "A Dra. Susimara possui atuação mista, defendendo os direitos de trabalhadores prejudicados e também prestando assessoria jurídica consultiva, preventiva e contenciosa para empresas, prevenindo litígios e reduzindo riscos e passivos trabalhistas.",
      },
    ],
  },
];