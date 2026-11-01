// Tabela de preços — Arena Breakout Infinite
// Preenchida SOMENTE com dados das fotos enviadas pelo dono do site.
// Nada aqui vem da internet.
//
// Formato de cada item:
// {
//   nome: "Nome exato do item",
//   grupo: "Equipamento",            // seção do mercado no jogo
//   categoria: "Munição",            // Arma, Munição, Colete, Capacete, Rig, Mochila, Medicamento...
//   precos: { novo: 12345, comoNovo: null, usado: null },  // Koen; null = sem foto ainda
//   atributos: { "Classe": 4, "Durab.": 60 },  // opcional; Durab. = máxima
//   durabilidade: { novo: 60, comoNovo: 51, usado: null },  // durabilidade atual vista em cada qualidade
//   atualizado: "2026-10-31",        // data da foto (AAAA-MM-DD)
//   obs: ""                          // opcional
// }

// Grupos do mercado, na ordem do jogo.
window.GRUPOS = ["Equipamento", "Peça de Arma", "Ferrolhos", "Munição", "Item Médico", "Item Tático", "Chave", "Variedade", "Provisão"];

// Pendências: categorias ou dados que ainda faltam enviar.
window.PENDENCIAS = [
  { item: "Peça de Arma", nota: "Grupo pulado por enquanto. Enviar as fotos depois." },
  { item: "Máscaras de Gás", nota: "Confirmar se existem preços Como nova e Usada." }
];

window.ITENS = [
  {
    "nome": "Capacete de Incêndi…",
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
    "grupo": "Equipamento",
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
  },
  {
    "nome": "Munição PRS 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 86,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição PS 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 111,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição PP 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 180,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição HP 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição PB 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 2002,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição BS 5,45×39…",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 6960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição M193 5,56×…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 74,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição FMJ de Caça…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 136,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição HP de Caça …",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição M855 5,56×…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 504,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição M855A1 5,5…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 836,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição M855A2 5,5…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 2310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição M995 5,56×…",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 6840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "R37.F 5,7×28 mm",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 291,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "R37.X 5,7×28 mm",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 288,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "L191 5,7×28 mm",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 441,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição SS197SR 5,…",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição SS190 5,7×2…",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 1800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição SS198 5,7×2…",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 7169,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição DBP87 5,8×4…",
    "grupo": "Munição",
    "categoria": "5,8×42 mm",
    "precos": {
      "novo": 192,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição DVP88 5,8×4…",
    "grupo": "Munição",
    "categoria": "5,8×42 mm",
    "precos": {
      "novo": 1846,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição DVC12 5,8×4…",
    "grupo": "Munição",
    "categoria": "5,8×42 mm",
    "precos": {
      "novo": 7866,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição AKBS 7,62×…",
    "grupo": "Munição",
    "categoria": "7,62×25 mm",
    "precos": {
      "novo": 25,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição PT 7,62×25 …",
    "grupo": "Munição",
    "categoria": "7,62×25 mm",
    "precos": {
      "novo": 38,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição LRN 7,62×25…",
    "grupo": "Munição",
    "categoria": "7,62×25 mm",
    "precos": {
      "novo": 150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição Pst 7,62×25 …",
    "grupo": "Munição",
    "categoria": "7,62×25 mm",
    "precos": {
      "novo": 100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição LP 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 88,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição US 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição HP 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 498,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição PS 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 342,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição T45M 7,62×…",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição PB 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 1596,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição AP 7,62×39 …",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 6800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição UN 7,62×51 …",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 132,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição BPZ FMJ 7,6…",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 629,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição M80 7,62×5…",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 1406,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição M62 7,62×5…",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 18620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição T46M 7,62×…",
    "grupo": "Munição",
    "categoria": "7,62×54 mm",
    "precos": {
      "novo": 272,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição LPS 7,62×54…",
    "grupo": "Munição",
    "categoria": "7,62×54 mm",
    "precos": {
      "novo": 1700,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição 7BT1 7,62×5…",
    "grupo": "Munição",
    "categoria": "7,62×54 mm",
    "precos": {
      "novo": 4522,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição Pst 9×19 mm",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 30,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição PSO 9×19 mm",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 48,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Dum-Dum 9×19 mm",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 272,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição AP6.3 9×19 …",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 259,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição 7N31 9×19 …",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 855,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição SP5 9×39 mm",
    "grupo": "Munição",
    "categoria": "9×39 mm",
    "precos": {
      "novo": 210,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição SP6 9×39 mm",
    "grupo": "Munição",
    "categoria": "9×39 mm",
    "precos": {
      "novo": 1036,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição 7N9 9×39 mm",
    "grupo": "Munição",
    "categoria": "9×39 mm",
    "precos": {
      "novo": 1764,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição 7N12 9×39 …",
    "grupo": "Munição",
    "categoria": "9×39 mm",
    "precos": {
      "novo": 4536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chumbo Grosso Tipo …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 61,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Chumbo Grosso Tipo …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chumbo Grosso Tipo …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chumbo Grosso Flech…",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 315,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho RIP 12×70 …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 0
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho Grizzly 12×…",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 352,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho Led 12×70 …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 420,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho Duplo 12×7…",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 444,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho GT 12×70 m…",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 576,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cartucho Perfurante …",
    "grupo": "Munição",
    "categoria": "12×70 mm",
    "precos": {
      "novo": 592,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição LFNP Calibre…",
    "grupo": "Munição",
    "categoria": "Calibre .44",
    "precos": {
      "novo": 120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição SJHP Calibr…",
    "grupo": "Munição",
    "categoria": "Calibre .44",
    "precos": {
      "novo": 280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição JSP Calibre …",
    "grupo": "Munição",
    "categoria": "Calibre .44",
    "precos": {
      "novo": 740,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição FMJ Calibre …",
    "grupo": "Munição",
    "categoria": "Calibre .45",
    "precos": {
      "novo": 40,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição HS Calibre .…",
    "grupo": "Munição",
    "categoria": "Calibre .45",
    "precos": {
      "novo": 114,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Munição AP Calibre .…",
    "grupo": "Munição",
    "categoria": "Calibre .45",
    "precos": {
      "novo": 518,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 3
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Munição UPZ Calibre …",
    "grupo": "Munição",
    "categoria": "Calibre .338",
    "precos": {
      "novo": 3458,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Munição FMJ Calibre …",
    "grupo": "Munição",
    "categoria": "Calibre .338",
    "precos": {
      "novo": 5472,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bebida Energética",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 2088,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "NSAID",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 1000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Analgésico Cond.",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 2880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Analgésico Rápido",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 13500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 3
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Analgésico AP",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 29400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 6
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Analgésico Forte",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 70488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 8
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  }
];
