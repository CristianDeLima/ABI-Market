// Tabela de preços — Arena Breakout Infinite
// Preenchida SOMENTE com dados das fotos enviadas pelo dono do site.
// Nada aqui vem da internet.
//
// Formato de cada item:
// {
//   nome: "Nome exato do item",
//   categoria: "Munição",            // Arma, Munição, Colete, Capacete, Rig, Mochila, Medicamento...
//   precos: { novo: 12345, comoNovo: null, usado: null },  // Koen; null = sem foto ainda
//   atributos: { "Classe": 4, "Durab.": 60 },  // opcional; Durab. = máxima
//   durabilidade: { novo: 60, comoNovo: 51, usado: null },  // durabilidade atual vista em cada qualidade
//   atualizado: "2026-10-31",        // data da foto (AAAA-MM-DD)
//   obs: ""                          // opcional
// }

// Pendências: categorias ou dados que ainda faltam enviar.
window.PENDENCIAS = [
  { item: "Peças de armas", nota: "Categoria pulada por enquanto. Enviar as fotos depois." },
  { item: "Máscaras de Gás", nota: "Confirmar se existem preços Como nova e Usada." }
];

window.ITENS = [
  {
    "nome": "Capacete de Incêndi…",
    "categoria": "Capacete",
    "precos": {
      "novo": 4368,
      "comoNovo": 3813,
      "usado": 3162
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 10
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 10,
      "comoNovo": 8,
      "usado": 7
    }
  },
  {
    "nome": "Capacete de Segura…",
    "categoria": "Capacete",
    "precos": {
      "novo": 4940,
      "comoNovo": 4136,
      "usado": 3441
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 15
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 15,
      "comoNovo": 13,
      "usado": 10
    }
  },
  {
    "nome": "Capacete de Motocic…",
    "categoria": "Capacete",
    "precos": {
      "novo": 4428,
      "comoNovo": 1840,
      "usado": 3549
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 15
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 15,
      "comoNovo": 13,
      "usado": 10
    }
  },
  {
    "nome": "Capacete Protetor p…",
    "categoria": "Capacete",
    "precos": {
      "novo": 5220,
      "comoNovo": 4500,
      "usado": 3738
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Capacete Militar Clá…",
    "categoria": "Capacete",
    "precos": {
      "novo": 11615,
      "comoNovo": 3861,
      "usado": 7462
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Capacete de Aço Clá…",
    "categoria": "Capacete",
    "precos": {
      "novo": 6000,
      "comoNovo": 3939,
      "usado": 4930
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Capacete de Segura…",
    "categoria": "Capacete",
    "precos": {
      "novo": 11830,
      "comoNovo": 4218,
      "usado": 8556
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Capacete de Aviador",
    "categoria": "Capacete",
    "precos": {
      "novo": 12236,
      "comoNovo": 10235,
      "usado": 8544
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Capacete de Choque …",
    "categoria": "Capacete",
    "precos": {
      "novo": 13015,
      "comoNovo": 9477,
      "usado": 8624
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 22
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 22,
      "comoNovo": 19,
      "usado": 15
    }
  },
  {
    "nome": "Capacete Padrão PAS",
    "categoria": "Capacete",
    "precos": {
      "novo": 6624,
      "comoNovo": 6888,
      "usado": 5871
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Capacete PAS2",
    "categoria": "Capacete",
    "precos": {
      "novo": 27648,
      "comoNovo": 10535,
      "usado": 17544
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 28
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 28,
      "comoNovo": 24,
      "usado": 20
    }
  },
  {
    "nome": "Capacete Tático F70",
    "categoria": "Capacete",
    "precos": {
      "novo": 45326,
      "comoNovo": 24360,
      "usado": 31476
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Capacete Militar SH1…",
    "categoria": "Capacete",
    "precos": {
      "novo": 38500,
      "comoNovo": 35937,
      "usado": 35074
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Capacete 6B4",
    "categoria": "Capacete",
    "precos": {
      "novo": 42622,
      "comoNovo": 24344,
      "usado": 24734
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Capacete Equipe Ca…",
    "categoria": "Capacete",
    "precos": {
      "novo": 39246,
      "comoNovo": 23270,
      "usado": 28012
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Capacete 6B5",
    "categoria": "Capacete",
    "precos": {
      "novo": 43200,
      "comoNovo": 24684,
      "usado": 25315
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Capacete Militar SH4…",
    "categoria": "Capacete",
    "precos": {
      "novo": 45632,
      "comoNovo": 32600,
      "usado": 31860
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Capacete Tático IND",
    "categoria": "Capacete",
    "precos": {
      "novo": 54390,
      "comoNovo": 34050,
      "usado": 37620
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Capacete Tático par…",
    "categoria": "Capacete",
    "precos": {
      "novo": 49984,
      "comoNovo": 37620,
      "usado": 36672
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Capacete IND200",
    "categoria": "Capacete",
    "precos": {
      "novo": 64464,
      "comoNovo": 32535,
      "usado": 43128
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 40
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    }
  },
  {
    "nome": "Capacete Tático F80",
    "categoria": "Capacete",
    "precos": {
      "novo": 45414,
      "comoNovo": 34639,
      "usado": 40788
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Capacete Militar SH1…",
    "categoria": "Capacete",
    "precos": {
      "novo": 66600,
      "comoNovo": 53652,
      "usado": 50897
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Capacete Tático KSS",
    "categoria": "Capacete",
    "precos": {
      "novo": 104720,
      "comoNovo": 46424,
      "usado": 64578
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 40
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    }
  },
  {
    "nome": "Capacete Tático KSS2",
    "categoria": "Capacete",
    "precos": {
      "novo": 106400,
      "comoNovo": 46648,
      "usado": 41880
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Capacete de Helicóp…",
    "categoria": "Capacete",
    "precos": {
      "novo": 160650,
      "comoNovo": 61424,
      "usado": 50908
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Capacete SH Matzka 2",
    "categoria": "Capacete",
    "precos": {
      "novo": 296478,
      "comoNovo": 256816,
      "usado": 228456
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 65
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    }
  },
  {
    "nome": "Capacete Militar SH6…",
    "categoria": "Capacete",
    "precos": {
      "novo": 198720,
      "comoNovo": 159027,
      "usado": 152693
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Capacete Militar SH5…",
    "categoria": "Capacete",
    "precos": {
      "novo": 122360,
      "comoNovo": 110732,
      "usado": 106974
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 60
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    }
  },
  {
    "nome": "Capacete Tático de A…",
    "categoria": "Capacete",
    "precos": {
      "novo": 249602,
      "comoNovo": 125173,
      "usado": 157412
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Capacete Tático Pes…",
    "categoria": "Capacete",
    "precos": {
      "novo": 397082,
      "comoNovo": 283020,
      "usado": 255668
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Capacete Tático Pes…",
    "categoria": "Capacete",
    "precos": {
      "novo": 256360,
      "comoNovo": 170600,
      "usado": 161082
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "Capacete Explosão P…",
    "categoria": "Capacete",
    "precos": {
      "novo": 410400,
      "comoNovo": 328440,
      "usado": 297366
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "Capacete 6BNT",
    "categoria": "Capacete",
    "precos": {
      "novo": 622512,
      "comoNovo": 539856,
      "usado": 487808
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 75
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    }
  },
  {
    "nome": "Capacete das Forças …",
    "categoria": "Capacete",
    "precos": {
      "novo": 656513,
      "comoNovo": 602475,
      "usado": 521649
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 75
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    }
  },
  {
    "nome": "Capacete Ofensivo H…",
    "categoria": "Capacete",
    "precos": {
      "novo": 301506,
      "comoNovo": 289055,
      "usado": 326304
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Capacete Tático Pes…",
    "categoria": "Capacete",
    "precos": {
      "novo": 529317,
      "comoNovo": 404114,
      "usado": 380046
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 60
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    }
  },
  {
    "nome": "Capacete Explosão D…",
    "categoria": "Capacete",
    "precos": {
      "novo": 708468,
      "comoNovo": 586460,
      "usado": 552816
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 75
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    }
  },
  {
    "nome": "Capacete Tático Pes…",
    "categoria": "Capacete",
    "precos": {
      "novo": 648000,
      "comoNovo": 434400,
      "usado": 407175
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 65
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    }
  },
  {
    "nome": "Protetor Facial à Pr…",
    "categoria": "Máscara",
    "precos": {
      "novo": 11556,
      "comoNovo": 9393,
      "usado": 2964
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 40
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    }
  },
  {
    "nome": "Protetor Facial à Pr…",
    "categoria": "Máscara",
    "precos": {
      "novo": 20736,
      "comoNovo": 16137,
      "usado": 5168
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Protetor Facial Prot…",
    "categoria": "Máscara",
    "precos": {
      "novo": 27675,
      "comoNovo": 23247,
      "usado": 6042
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Protetor Facial SH60",
    "categoria": "Máscara",
    "precos": {
      "novo": 21754,
      "comoNovo": 9918,
      "usado": 11607
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Máscara à Prova de B…",
    "categoria": "Máscara",
    "precos": {
      "novo": 42673,
      "comoNovo": 37391,
      "usado": 8550
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Protetor Facial à Pr…",
    "categoria": "Máscara",
    "precos": {
      "novo": 21012,
      "comoNovo": 19728,
      "usado": 8626
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Protetor Facial à Pr…",
    "categoria": "Máscara",
    "precos": {
      "novo": 28350,
      "comoNovo": 28840,
      "usado": 8816
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Protetor Facial Matz…",
    "categoria": "Máscara",
    "precos": {
      "novo": 89913,
      "comoNovo": 26502,
      "usado": 20938
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Protetor Facial Mili…",
    "categoria": "Máscara",
    "precos": {
      "novo": 27360,
      "comoNovo": 31296,
      "usado": 25650
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "Protetor Facial Expl…",
    "categoria": "Máscara",
    "precos": {
      "novo": 101520,
      "comoNovo": 37544,
      "usado": 31312
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Protetor Facial Mili…",
    "categoria": "Máscara",
    "precos": {
      "novo": 126000,
      "comoNovo": 51604,
      "usado": 43472
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 65
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    }
  },
  {
    "nome": "Protetor Facial das …",
    "categoria": "Máscara",
    "precos": {
      "novo": 286848,
      "comoNovo": 163980,
      "usado": 57722
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Peitoral à Prova de …",
    "categoria": "Colete",
    "precos": {
      "novo": 8075,
      "comoNovo": 6552,
      "usado": 5612
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Antigo Colete Balíst…",
    "categoria": "Colete",
    "precos": {
      "novo": 9405,
      "comoNovo": 7614,
      "usado": 6324
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Colete Blindado Clás…",
    "categoria": "Colete",
    "precos": {
      "novo": 9024,
      "comoNovo": 5063,
      "usado": 6486
    },
    "atributos": {
      "Classe": 1,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Colete Balístico de …",
    "categoria": "Colete",
    "precos": {
      "novo": 10437,
      "comoNovo": 7020,
      "usado": 9120
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Colete à Prova de Ba…",
    "categoria": "Colete",
    "precos": {
      "novo": 23004,
      "comoNovo": 9516,
      "usado": 14841
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Colete Balístico 220",
    "categoria": "Colete",
    "precos": {
      "novo": 11760,
      "comoNovo": 8034,
      "usado": 9976
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Colete Balístico Lev…",
    "categoria": "Colete",
    "precos": {
      "novo": 52272,
      "comoNovo": 35322,
      "usado": 34441
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "SWAT H-Tac",
    "categoria": "Colete",
    "precos": {
      "novo": 44712,
      "comoNovo": 27336,
      "usado": 39102
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Colete Balístico de …",
    "categoria": "Colete",
    "precos": {
      "novo": 27378,
      "comoNovo": 25560,
      "usado": 25776
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Colete Balístico PCA…",
    "categoria": "Colete",
    "precos": {
      "novo": 27456,
      "comoNovo": 25536,
      "usado": 25364
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Colete Balístico de …",
    "categoria": "Colete",
    "precos": {
      "novo": 71628,
      "comoNovo": 36232,
      "usado": 43040
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Blindagem SWAT Pa…",
    "categoria": "Colete",
    "precos": {
      "novo": 45144,
      "comoNovo": 25270,
      "usado": 29627
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Colete Balístico For…",
    "categoria": "Colete",
    "precos": {
      "novo": 99484,
      "comoNovo": 63504,
      "usado": 66588
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Colete Balístico 6B2…",
    "categoria": "Colete",
    "precos": {
      "novo": 177016,
      "comoNovo": 106808,
      "usado": 112000
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Colete Balístico 6B1…",
    "categoria": "Colete",
    "precos": {
      "novo": 93960,
      "comoNovo": 76832,
      "usado": 64344
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 65
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    }
  },
  {
    "nome": "Colete Balístico IND…",
    "categoria": "Colete",
    "precos": {
      "novo": 74250,
      "comoNovo": 59327,
      "usado": 50904
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "Colete Balístico Spa…",
    "categoria": "Colete",
    "precos": {
      "novo": 133980,
      "comoNovo": 108491,
      "usado": 98368
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Colete Balístico Com…",
    "categoria": "Colete",
    "precos": {
      "novo": 318246,
      "comoNovo": 278730,
      "usado": 249044
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Colete Balístico Tát…",
    "categoria": "Colete",
    "precos": {
      "novo": 333024,
      "comoNovo": 292020,
      "usado": 244216
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Colete Balístico Pes…",
    "categoria": "Colete",
    "precos": {
      "novo": 321376,
      "comoNovo": 257790,
      "usado": 245565
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    }
  },
  {
    "nome": "Colete Balístico Pes…",
    "categoria": "Colete",
    "precos": {
      "novo": 304859,
      "comoNovo": 269244,
      "usado": 238210
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    }
  },
  {
    "nome": "Colete Balístico Ofe…",
    "categoria": "Colete",
    "precos": {
      "novo": 393274,
      "comoNovo": 290560,
      "usado": 269875
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    }
  },
  {
    "nome": "Colete Balístico Pad…",
    "categoria": "Colete",
    "precos": {
      "novo": 380880,
      "comoNovo": 254796,
      "usado": 242350
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    }
  },
  {
    "nome": "Colete Balístico Pro…",
    "categoria": "Colete",
    "precos": {
      "novo": 332304,
      "comoNovo": 295350,
      "usado": 258170
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 90
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    }
  },
  {
    "nome": "Colete Balístico Pes…",
    "categoria": "Colete",
    "precos": {
      "novo": 609120,
      "comoNovo": 463335,
      "usado": 451088
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 90
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    }
  },
  {
    "nome": "Colete Balístico Tát…",
    "categoria": "Colete",
    "precos": {
      "novo": 1279938,
      "comoNovo": 1243138,
      "usado": 824694
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    }
  },
  {
    "nome": "Colete Balístico Pes…",
    "categoria": "Colete",
    "precos": {
      "novo": 1124011,
      "comoNovo": 964176,
      "usado": 803904
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 120
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 120,
      "comoNovo": 102,
      "usado": 84
    }
  },
  {
    "nome": "Colete Balístico Pes…",
    "categoria": "Colete",
    "precos": {
      "novo": 1144500,
      "comoNovo": 1045330,
      "usado": 760665
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 115
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 115,
      "comoNovo": 98,
      "usado": 80
    }
  },
  {
    "nome": "Colete Balístico Com…",
    "categoria": "Colete",
    "precos": {
      "novo": 1746816,
      "comoNovo": 1460160,
      "usado": 905322
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 110
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 110,
      "comoNovo": 94,
      "usado": 77
    }
  },
  {
    "nome": "Colete Peitoral de I…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 2385,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Colete de Transport…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 2673,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Colete de Caça",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 3072,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Colete de Couro para…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 5040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Colete Punk para Mo…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 4896,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Colete Peitoral BH2",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 15755,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Leve 926",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 19560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Tático de Ser…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 33264,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Simp…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 50040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Stor…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 40986,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Univ…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 65436,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Caçador 926",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 66300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Mult…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 103086,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Táti…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 64155,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Táti…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 123440,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Com…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 138773,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Táti…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 108000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral Táti…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 119250,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete Peitoral de C…",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 166830,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Colete de Combate …",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 25200,
      "comoNovo": 21917,
      "usado": 17557
    },
    "atributos": {
      "Classe": 2,
      "Durab.": 20
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 20,
      "comoNovo": 17,
      "usado": 14
    }
  },
  {
    "nome": "Colete Blindado 6B5",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 89012,
      "comoNovo": 43890,
      "usado": 63888
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    }
  },
  {
    "nome": "Colete Peitoral Blin…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 89490,
      "comoNovo": 35298,
      "usado": 68142
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": 26,
      "usado": 21
    }
  },
  {
    "nome": "Colete Peitoral Blin…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 95680,
      "comoNovo": 46068,
      "usado": 69853
    },
    "atributos": {
      "Classe": 3,
      "Durab.": 25
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 25,
      "comoNovo": 21,
      "usado": 18
    }
  },
  {
    "nome": "Colete Peitoral Blin…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 134640,
      "comoNovo": 128525,
      "usado": 117486
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    }
  },
  {
    "nome": "Colete Blindado TM1",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 123984,
      "comoNovo": 123606,
      "usado": 109968
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 40
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    }
  },
  {
    "nome": "Colete Blindado TM2",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 188897,
      "comoNovo": 150381,
      "usado": 143736
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    }
  },
  {
    "nome": "Colete Blindado H-Ta…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 316192,
      "comoNovo": 296565,
      "usado": 247050
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 60
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    }
  },
  {
    "nome": "Colete Tático Blinda…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 347336,
      "comoNovo": 296476,
      "usado": 259126
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    }
  },
  {
    "nome": "Colete Blindado H-Ta…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 326025,
      "comoNovo": 377760,
      "usado": 233852
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 65
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    }
  },
  {
    "nome": "Colete Blindado Pesa…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 394632,
      "comoNovo": 351006,
      "usado": 301392
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 100
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    }
  },
  {
    "nome": "Colete Blindado Pesa…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 994665,
      "comoNovo": 840311,
      "usado": 700631
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    }
  },
  {
    "nome": "Colete blindado táti…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1005888,
      "comoNovo": 1272570,
      "usado": 618600
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 95
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 95,
      "comoNovo": 81,
      "usado": 66
    }
  },
  {
    "nome": "Colete Blindado Pesa…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1146600,
      "comoNovo": 1260375,
      "usado": 706188
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 90
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    }
  },
  {
    "nome": "Colete blindado de c…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1203417,
      "comoNovo": 914871,
      "usado": 707584
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    }
  },
  {
    "nome": "Colete blindado de a…",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1200644,
      "comoNovo": 816790,
      "usado": 692168
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 90
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    }
  },
  {
    "nome": "Bolsa Lateral",
    "categoria": "Mochila",
    "precos": {
      "novo": 3300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mochila de Acampam…",
    "categoria": "Mochila",
    "precos": {
      "novo": 2800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mochila de Acampam…",
    "categoria": "Mochila",
    "precos": {
      "novo": 2400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Mochila Simples",
    "categoria": "Mochila",
    "precos": {
      "novo": 8064,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mochila de Lona",
    "categoria": "Mochila",
    "precos": {
      "novo": 9120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mochila de Acampam…",
    "categoria": "Mochila",
    "precos": {
      "novo": 28431,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila Esportiva",
    "categoria": "Mochila",
    "precos": {
      "novo": 34200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Viagem p…",
    "categoria": "Mochila",
    "precos": {
      "novo": 37480,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila Tática RUSH",
    "categoria": "Mochila",
    "precos": {
      "novo": 67464,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Couro",
    "categoria": "Mochila",
    "precos": {
      "novo": 43875,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila Tática XA4",
    "categoria": "Mochila",
    "precos": {
      "novo": 45296,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Campo M…",
    "categoria": "Mochila",
    "precos": {
      "novo": 46892,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Acampam…",
    "categoria": "Mochila",
    "precos": {
      "novo": 47614,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila Militar Chap…",
    "categoria": "Mochila",
    "precos": {
      "novo": 50426,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Assalto A…",
    "categoria": "Mochila",
    "precos": {
      "novo": 55965,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Marcha R…",
    "categoria": "Mochila",
    "precos": {
      "novo": 68400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila Tática Expan…",
    "categoria": "Mochila",
    "precos": {
      "novo": 153900,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mochila de Campo 926",
    "categoria": "Mochila",
    "precos": {
      "novo": 185760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Fone de Ouvido Tátic…",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 4600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Fone de Ouvido Tátic…",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 21842,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Fone de Ouvido Tátic…",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 44589,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Fone de Ouvido Tátic…",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 53600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Auricular Tático GS2",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 85760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Máscara de Gás SH-3",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 21420,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 30
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 30,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Meia-máscara RAL20",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 22784,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Máscara de Gás Com…",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 37168,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Máscara de Gás Univ…",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 38250,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 35
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Máscara de Gás SH-4",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 36281,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 45
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Máscara de Gás Ócul…",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 42525,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 55
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": null,
      "usado": null
    }
  },
  {
    "nome": "Máscara de Gás Avan…",
    "categoria": "Máscara de Gás",
    "precos": {
      "novo": 56700,
      "comoNovo": null,
      "usado": null
    },
    "atributos": {
      "Durab.": 60
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 60,
      "comoNovo": null,
      "usado": null
    }
  }
];
