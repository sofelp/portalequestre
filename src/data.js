export const events = [
  {
    id: 'trofeu-tres-tambores',
    title: 'Troféu Três Tambores',
    date: '14 de junho de 2026',
    location: 'Haras Vale do Sol',
    status: 'Em andamento',
    category: 'Três Tambores',
    summary: 'Competição de destaque com etapas de velocidade e precisão em percurso com três tambores.',
    description:
      'Evento demonstrativo da modalidade Três Tambores, organizado para apresentar provas, participantes e resultados em uma estrutura realista de portal esportivo.',
    races: [
      {
        id: 'bateria-a',
        title: 'Corrida 1 · Bateria A',
        date: '14/06/2026',
        time: '08:30',
        status: 'Em andamento',
        description: 'Primeira bateria da categoria principal, com foco em tempo e precisão no percurso.',
        proofs: [
          {
            id: 'categoria-open',
            title: 'Categoria Open',
            description: 'Disputa principal da Bateria A.',
            participants: [
              { name: 'Arthur Reis', horse: 'Fênix', status: 'Classificado', time: '1:42.38' },
              { name: 'Breno Almeida', horse: 'Nobre', status: 'Classificado', time: '1:43.10' },
              { name: 'Caio Mendes', horse: 'Luna', status: 'Desclassificado', time: 'N/A' },
              { name: 'Davi Moreira', horse: 'Trovão', status: 'Sem resultado', time: '-' },
            ],
            results: [
              { position: 1, rider: 'Arthur Reis', horse: 'Fênix', time: '1:42.38', status: 'Classificado' },
              { position: 2, rider: 'Breno Almeida', horse: 'Nobre', time: '1:43.10', status: 'Classificado' },
              { position: 3, rider: 'Caio Mendes', horse: 'Luna', time: 'N/A', status: 'Desclassificado' },
              { position: 4, rider: 'Davi Moreira', horse: 'Trovão', time: '-', status: 'Sem resultado' },
            ],
          },
          {
            id: 'categoria-jovem',
            title: 'Categoria Jovem',
            description: 'Disputa específica para competidores em formação.',
            participants: [
              { name: 'Érica Nunes', horse: 'Estrela', status: 'Classificada', time: '2:02.17' },
              { name: 'Felipe Costa', horse: 'Sol', status: 'Classificado', time: '2:06.12' },
            ],
            results: [
              { position: 1, rider: 'Érica Nunes', horse: 'Estrela', time: '2:02.17', status: 'Classificada' },
              { position: 2, rider: 'Felipe Costa', horse: 'Sol', time: '2:06.12', status: 'Classificado' },
            ],
          },
        ],
      },
      {
        id: 'bateria-b',
        title: 'Corrida 2 · Bateria B',
        date: '15/06/2026',
        time: '09:20',
        status: 'Programada',
        description: 'Segunda bateria para a categoria estadual.',
        proofs: [
          {
            id: 'categoria-estadual',
            title: 'Categoria Estadual',
            description: 'Disputa classificada com participantes da região.',
            participants: [
              { name: 'Gustavo Lima', horse: 'Alvorada', status: 'Inscrito', time: '—' },
              { name: 'Helena Prado', horse: 'Bela', status: 'Inscrita', time: '—' },
            ],
            results: [],
          },
        ],
      },
    ],
    regulations: ['Regulamento geral da prova', 'Critérios de tempo e penalidade', 'Documentação de inscrição'],
    gallery: ['Paisagem da arena', 'Treino matinal', 'Análise de percurso'],
  },
  {
    id: 'circuito-regional-saltos',
    title: 'Circuito Regional de Saltos',
    date: '28 de junho de 2026',
    location: 'Arena Canto do Rio',
    status: 'Futuro',
    category: 'Saltos',
    summary: 'Etapa regional com provas de salto em altura e velocidade.',
    description: 'Evento demonstrativo para representar uma prova de saltos em uma estrutura esportiva que pode ser expandida mais tarde.',
    races: [
      {
        id: 'ronda-1',
        title: 'Ronda 1 · Saltos',
        date: '28/06/2026',
        time: '15:00',
        status: 'Programada',
        description: 'Primeira etapa do circuito regional.',
        proofs: [
          {
            id: 'salto-1m20',
            title: 'Salto 1,20 m',
            description: 'Prova de obstáculos com altura de 1,20 m.',
            participants: [],
            results: [],
          },
        ],
      },
    ],
    regulations: ['Inscrição e documentação', 'Padrões de obstáculo', 'Critérios de classificação'],
    gallery: ['Arena principal', 'Pista de saltos'],
  },
  {
    id: 'festival-equestre-de-verao',
    title: 'Festival Equestre de Verão',
    date: '05 de julho de 2026',
    location: 'Centro de Equitação Aurora',
    status: 'Futuro',
    category: 'Cultural',
    summary: 'Festival com competição, demonstrações e presença de patrocinadores.',
    description: 'Evento demonstrativo para organizar differentes categorias e público em um festival multiuso.',
    races: [
      {
        id: 'apresentacao',
        title: 'Apresentação e competições',
        date: '05/07/2026',
        time: '10:00',
        status: 'Programada',
        description: 'Abertura do festival com apresentações e categorias de demonstração.',
        proofs: [
          {
            id: 'demonstacao',
            title: 'Demonstrações livres',
            description: 'Prova aberta com critérios de avaliação mais flexíveis.',
            participants: [],
            results: [],
          },
        ],
      },
    ],
    regulations: ['Normas gerais do festival', 'Acesso ao público'],
    gallery: ['Arena externa', 'Atrações do festival'],
  },
];

export const news = [
  {
    id: 'novidades-tres-tambores',
    title: 'Novidades da prova de Três Tambores e critérios de avaliação',
    category: 'Regulamento',
    date: '08 de junho de 2026',
    summary: 'A organização anuncia ajustes na ordem das baterias e reforça a leitura do percurso.',
    content: [
      'A prova de Três Tambores entra em uma nova fase de organização com ajustes importantes na leitura do percurso e na ordem das baterias.',
      'Os competidores receberão instruções específicas sobre os pontos de atenção do circuito, além de orientações sobre tempo e penalidade.',
      'O conteúdo desta notícia é demonstrativo e foi criado apenas para ilustrar o feed editorial do portal.',
    ],
    relatedEventId: 'trofeu-tres-tambores',
  },
  {
    id: 'carreira-de-competidores',
    title: 'Perfil do mês: como a preparação física influencia o tempo final',
    category: 'Competidores',
    date: '01 de junho de 2026',
    summary: 'Entenda como foco, resistência e consistência impactam o desempenho do conjunto cavalo e competidor.',
    content: [
      'A preparação física e a leitura do percurso entram diretamente na performance final em provas de velocidade e precisão.',
      'O conjunto cavalo e competidor precisa se adaptar ao tempo, ao espaço e ao nível de exigência da prova.',
      'Este conteúdo é fictício e serve apenas como exemplo editorial.',
    ],
    relatedEventId: null,
  },
  {
    id: 'pista-e-sobrevivencia',
    title: 'Como a pista e a estratégia mudam o resultado final',
    category: 'Estratégia',
    date: '22 de maio de 2026',
    summary: 'Entenda o papel da estratégia de percurso e da decisão do cavaleiro durante a prova.',
    content: [
      'Em competições de Três Tambores, a estratégia de percurso pode alterar de forma decisiva a classificação final.',
      'A escolha de ritmo e a atenção aos três tambores são fatores importantes na composição do tempo final.',
      'Os exemplos apresentados são demonstrativos e não representam dados oficiais.',
    ],
    relatedEventId: 'trofeu-tres-tambores',
  },
];

export const participants = [
  {
    id: 'arthur-reis',
    name: 'Arthur Reis',
    horse: 'Fênix',
    category: 'Open',
    city: 'São João del Rei',
    avatar: 'AR',
    bio: 'Competidor demonstrativo com foco em velocidade, equilíbrio e leitura do percurso.',
    history: ['Troféu Três Tambores 2026', 'Circuito Mineiro 2025'],
  },
  {
    id: 'breno-almeida',
    name: 'Breno Almeida',
    horse: 'Nobre',
    category: 'Open',
    city: 'Belo Horizonte',
    avatar: 'BA',
    bio: 'Participante de exemplo com histórico recente em competições regionais.',
    history: ['Troféu Três Tambores 2026', 'Arena Central 2025'],
  },
  {
    id: 'erica-nunes',
    name: 'Érica Nunes',
    horse: 'Estrela',
    category: 'Jovem',
    city: 'Lavras',
    avatar: 'EN',
    bio: 'Competidora demonstrativa da categoria juvenil, com foco em precisão e consistência.',
    history: ['Categoria Jovem 2026', 'Festival Equestre 2025'],
  },
];

export const results = [
  { eventId: 'trofeu-tres-tambores', eventName: 'Troféu Três Tambores', race: 'Bateria A', proof: 'Categoria Open', position: 1, rider: 'Arthur Reis', horse: 'Fênix', time: '1:42.38', status: 'Classificado' },
  { eventId: 'trofeu-tres-tambores', eventName: 'Troféu Três Tambores', race: 'Bateria A', proof: 'Categoria Open', position: 2, rider: 'Breno Almeida', horse: 'Nobre', time: '1:43.10', status: 'Classificado' },
  { eventId: 'trofeu-tres-tambores', eventName: 'Troféu Três Tambores', race: 'Bateria A', proof: 'Categoria Open', position: 3, rider: 'Caio Mendes', horse: 'Luna', time: 'N/A', status: 'Desclassificado' },
  { eventId: 'trofeu-tres-tambores', eventName: 'Troféu Três Tambores', race: 'Bateria A', proof: 'Categoria Jovem', position: 1, rider: 'Érica Nunes', horse: 'Estrela', time: '2:02.17', status: 'Classificada' },
];

export const modalities = [
  { id: 'tres-tambores', title: 'Três Tambores', description: 'Modalidade com foco em velocidade, precisão e leitura do percurso.' },
  { id: 'saltos', title: 'Saltos', description: 'Prova com obstáculos e avaliação de técnica e controle.' },
  { id: 'concurso-completo', title: 'Concurso completo', description: 'Desafios de velocidade, resistência e técnica.' },
];

export const sponsors = ['Haras Vale do Sol', 'Riders Supply', 'EquiMetria', 'Bronze Arena'];

export const regulations = [
  { title: 'Regulamento geral', description: 'Diretrizes gerais para participação e organização da prova.' },
  { title: 'Critérios de tempo', description: 'Como tempo, penalidade e classificação são avaliados.' },
  { title: 'Documentação necessária', description: 'Requisitos para confirmação da inscrição e condução da prova.' },
];
