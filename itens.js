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
  },
  {
    "nome": "Curativo Rápido",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 246,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Curativo de Campo",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 736,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 2
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Curativo OPM",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 2000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Pacote Cirúrgico Sim…",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 2500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 1
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Kit Cirúrgico Milita…",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 30960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Nebulizador G-96",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 27501,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 4
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Kit Cirúrgico Milita…",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 50112,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 8
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Conjunto Cirúrgico d…",
    "grupo": "Item Médico",
    "categoria": "Tratamento de Lesões",
    "precos": {
      "novo": 91584,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 12
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Caixa de Socorros Si…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 1372,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 80
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Kit P. Socorros Mili…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 2000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 120
    },
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Kit P. Socorros Rápi…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 9200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 220
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Kit Médico Militar E…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 14760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 300
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Kit Médico Campo de…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 40950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 400
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Kit Médico de Campo…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 71262,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 960
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Conjunto P. Socorros…",
    "grupo": "Item Médico",
    "categoria": "Kit Médico",
    "precos": {
      "novo": 91575,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Pontos de cura": 1200
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Injeção Intramuscula…",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 8760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Injeção de Resistênc…",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 12705,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Injeção Regenerativa",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 27800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Reforço Intramuscul…",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 26040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Reforço de Resistên…",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 62160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Reforço de Regenera…",
    "grupo": "Item Médico",
    "categoria": "Medicamentos",
    "precos": {
      "novo": 89280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de Atordoa…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 10500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coquetel Molotov",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 7500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de fumaça …",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 11520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de Flash M84",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 9280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Gás Lacrimogêneo GL…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 10960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de Fragmen…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 30107,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada Ofensiva GH…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 30191,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de Fragmen…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 28404,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Granada de Choque E…",
    "grupo": "Item Tático",
    "categoria": "Arma Arremessável",
    "precos": {
      "novo": 27200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Limonada Viena",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 861,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Leite Canary",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Refrigerante Pacific",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1243,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Suco de Laranja Can…",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1392,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Água de Nascente de…",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "atributos": {
      "Porções": 60
    }
  },
  {
    "nome": "Suco de Manga C++",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1521,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Porções": 60
    }
  },
  {
    "nome": "Suco de Maçã Fresco",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1582,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Porções": 60
    }
  },
  {
    "nome": "Suco de Abacaxi C++",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 1695,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Porções": 60
    }
  },
  {
    "nome": "Térmica Original Wyl…",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 2400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Porções": 100
    }
  },
  {
    "nome": "Bebida de Taurina",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 3381,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bebida Energética Ho…",
    "grupo": "Provisão",
    "categoria": "Bebida",
    "precos": {
      "novo": 6992,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Biscoito Duro Compri…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 315,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Salgadinho Sabor Pe…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 324,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Salgadinho Clássico",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 345,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carne Enlatada",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 798,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Molho de Feijão Doce…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 763,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Feijão Cozido Hongy…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 832,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Peixe Assado Com To…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 936,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pescado Enlatado",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1044,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Leite Condensado Ca…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 927,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ração de Campo de C…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Açúcar Hongyang",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1254,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ensopado Enlatado",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1298,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Floco de Milho",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ração Especial de Ca…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1456,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mel Nightingale",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Arenque Salgado Enl…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 1512,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bolacha",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 933,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Barra Energética Ori…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 2520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Barra Energética Ult…",
    "grupo": "Provisão",
    "categoria": "Comida",
    "precos": {
      "novo": 2691,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AKS…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 4218,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto SG5…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 7258,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AKM",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 7486,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AK …",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 8160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto PCC…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 28272,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto FAL",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 17316,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto G3",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 29625,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto T95…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 15580,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto ACE…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 19364,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto SCA…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 17138,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto M4A…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 19874,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AK1…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 76708,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AK-…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 52456,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AK1…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 24624,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto ZC8…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 29295,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AMB…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 36850,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto MDR",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 26258,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto MCX",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 26258,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto T03",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 29830,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AR5…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 119000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,7×28"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto FAM…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 95448,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AN9…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 65585,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto F20…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 133836,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto Cur…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 126140,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AUG",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 140768,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto AEK",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 99636,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto T19…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 60598,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto A54…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 292992,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Assalto H41…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Assalto",
    "precos": {
      "novo": 214404,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora QC…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 4068,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×25"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora UZI",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 3021,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora MP…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 3248,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora T79",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 6554,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×25"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora MP…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 7068,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora M3…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 2652,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora UM…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 12320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora M…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 13761,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora T85",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 17328,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×25"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Microssubmetralhad…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 8550,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Microssubmetralhad…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 32249,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora PP…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 15808,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora Ve…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 51606,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Microssubmetralhad…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 58053,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora Ba…",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 84821,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,7×28"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora P90",
    "grupo": "Ferrolhos",
    "categoria": "Submetralhadora",
    "precos": {
      "novo": 125910,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,7×28"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escopeta MP-133",
    "grupo": "Ferrolhos",
    "categoria": "Escopeta",
    "precos": {
      "novo": 4588,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "12×70"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escopeta M870",
    "grupo": "Ferrolhos",
    "categoria": "Escopeta",
    "precos": {
      "novo": 7821,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "12×70"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escopeta de Cano Du…",
    "grupo": "Ferrolhos",
    "categoria": "Escopeta",
    "precos": {
      "novo": 11730,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "12×70"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escopeta S12K",
    "grupo": "Ferrolhos",
    "categoria": "Escopeta",
    "precos": {
      "novo": 15035,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "12×70"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escopeta USAS 12",
    "grupo": "Ferrolhos",
    "categoria": "Escopeta",
    "precos": {
      "novo": 52065,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "12×70"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Metralhadora Leve RPK6",
    "grupo": "Ferrolhos",
    "categoria": "Metralhadora Leve",
    "precos": {
      "novo": 84626,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,45×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Ferrolho Mo…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Ação de Ferrolho",
    "precos": {
      "novo": 28688,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×54"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Ferrolho M2…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Ação de Ferrolho",
    "precos": {
      "novo": 315827,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Ferrolho SJ…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Ação de Ferrolho",
    "precos": {
      "novo": 418660,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".338"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle Acionado por A…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 44165,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".44"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Atirador VS…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 79994,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Atirador M1…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 42256,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle DMR T88",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 129270,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle DMR U191",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 75992,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,8×42"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Atirador MK…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 271072,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rifle de Atirador SV…",
    "grupo": "Ferrolhos",
    "categoria": "Rifle de Atirador",
    "precos": {
      "novo": 307098,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×54"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina SA85M",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 6018,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina M96",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 2457,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina SKS",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 2432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×39"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina BM59",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 8023,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina Mini14",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 7275,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina M16",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 30590,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,56×45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina M14",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 32431,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×51"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carabina SVTU",
    "grupo": "Ferrolhos",
    "categoria": "Carabina",
    "precos": {
      "novo": 22066,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×54"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola M1911",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 3696,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola T54",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 2046,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×25"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola G17",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 4200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola M9A3",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 1938,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola M45A1",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 2442,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".45"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola T05",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 7452,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola CZ52",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 3268,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "7,62×25"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola Desert Eagle",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 3720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".44"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola F57",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 19140,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "5,7×28"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola G18C",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 8702,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Submetralhadora MP9",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 9956,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": "9×19"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola Golden Deagl…",
    "grupo": "Ferrolhos",
    "categoria": "Pistola",
    "precos": {
      "novo": 12008,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Calibre": ".44"
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave Estábulo Arm…",
    "grupo": "Chave",
    "categoria": "Chaves da Fazenda",
    "precos": {
      "novo": 277286,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 75
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave 201 Hotel",
    "grupo": "Chave",
    "categoria": "Chaves da Fazenda",
    "precos": {
      "novo": 798100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Escritório …",
    "grupo": "Chave",
    "categoria": "Chaves da Fazenda",
    "precos": {
      "novo": 1036035,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Quarto Prin…",
    "grupo": "Chave",
    "categoria": "Chaves da Fazenda",
    "precos": {
      "novo": 526368,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Hotel Quart…",
    "grupo": "Chave",
    "categoria": "Chaves da Fazenda",
    "precos": {
      "novo": 5346846,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Escritório …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 78128,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 3
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Salão 1 do …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 398962,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Edifício B …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 410514,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Escritório …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 430692,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Edifício D …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 487198,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Oficina da …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 495938,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave de Salão do Qu…",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 686774,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave de Edifício B …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 728042,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Lounge da …",
    "grupo": "Chave",
    "categoria": "Chaves de Northridge",
    "precos": {
      "novo": 1096566,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do porão do q…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 747054,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Depósito d…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 1056818,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do restaurant…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 325622,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da sala de arq…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 838480,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do dormitório …",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 377160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do vestiário d…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 971125,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Quarto Prin…",
    "grupo": "Chave",
    "categoria": "Chaves do Vale",
    "precos": {
      "novo": 2184228,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Comporta …",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 615264,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 3
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Salão Priva…",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 1442176,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso do …",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 409760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave para o Salão d…",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 1602793,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso da …",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 1786250,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso da …",
    "grupo": "Chave",
    "categoria": "Chaves do Arsenal",
    "precos": {
      "novo": 1843410,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Escritório …",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 1722570,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala Escura",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 2297120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Enfermaria",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 2353384,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 45
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão do Escritório…",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 2330028,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala de Pós…",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 2840700,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala de Edi…",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 2813799,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala de Pla…",
    "grupo": "Chave",
    "categoria": "Chaves Estação de TV",
    "precos": {
      "novo": 3172727,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala dos Fu…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 252852,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Armazém d…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 612902,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala de Uti…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 619590,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Área de Ins…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 620958,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave do Salão Exec…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 621452,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Permissão…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 992160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave da Sala de Con…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 760702,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso da …",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 637488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso Ar…",
    "grupo": "Chave",
    "categoria": "Chaves do Aeroporto",
    "precos": {
      "novo": 1487130,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Usos": 30
    },
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fósforo",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 714,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Isqueiro",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 2592,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Vela",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 2904,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Isqueiro de Metal",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 4400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pólvora Azul",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 6519,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pólvora Verde",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 13050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pólvora Vermelha",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 20960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Óleo",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 11895,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tambor de Óleo",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 29014,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Nitrocelulose",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 95370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lata de Combustível…",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 22610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lâmpada de Querose…",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 30750,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tanque de Propano",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 48282,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pederneira de Magné…",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 41520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Combustível de Alta …",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 85034,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tanque de Combustí…",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 100760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pacote de Pólvora de…",
    "grupo": "Variedade",
    "categoria": "Itens Inflamáveis",
    "precos": {
      "novo": 243884,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Porcas",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 1330,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Parafusos",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 1386,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fita",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 1485,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fio de Energia",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 1515,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fita IMP",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 2568,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Uma Caixa de Pregos",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 2550,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Acrílico",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 2575,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Plugue em Forma de T",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
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
    "nome": "Tubo",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 5371,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Silicone",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 6642,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Latão",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 6270,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 8509,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lasca de Carvalho",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 21812,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada de Borracha",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 23716,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Painel Acústico",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 25542,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Espuma de Vedação",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 23040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Gel à Prova de Balas",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 41860,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Aço",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 32076,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Saco de Cimento",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 40016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Borracha Dura Resist…",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 92976,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Placa Liga de Titâni…",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 104099,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Algodão de isolamen…",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 110037,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fio de paládio",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 227360,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Placa de Aço Arquea…",
    "grupo": "Variedade",
    "categoria": "Materiais de Construção",
    "precos": {
      "novo": 231686,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capacitores",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 4788,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Dissipador de calor …",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 4687,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cooler CPU",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 7072,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Placa de Circuito",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 6279,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pendrive",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 6860,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Disquete",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 6461,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de Energia",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 8448,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de vídeo VGA",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 11481,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Notas",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 15008,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chip Semicondutor",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 11968,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "LCD Quebrado",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 19754,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Leitor de disquete",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 17976,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "CPU",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 12549,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SAS",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 27976,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chip Processador",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 33062,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "RAM",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 10374,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "GPU",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 20254,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SSD",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 20482,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Placa de Circuito De…",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 20672,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "LCD Funcionando",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 22269,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "PSU",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 49691,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mon. Estúdio",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 81760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Placa de Vídeo",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 100760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Unidade UPS",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 255760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Processador Vector",
    "grupo": "Variedade",
    "categoria": "Acessórios de Computador",
    "precos": {
      "novo": 245328,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bateria",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 2574,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bateria tamanho-D",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 5588,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bateria do Celular",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 9144,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Powerbank",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 8760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Painel Solar",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 44469,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Analisador de Capaci…",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 23142,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Solar",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 39040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pack de Bateria Ni-C…",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 40280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bateria de Carro",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 147003,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Módulo de Eletrodo P…",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 243352,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pacote de Bateria",
    "grupo": "Variedade",
    "categoria": "Item de Energia",
    "precos": {
      "novo": 262880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Abridor de Garrafa",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 1560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Abridor de Latas",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 1504,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fita Métrica",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 2886,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave de Fenda",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 2990,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave Inglesa",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 2295,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Furador",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 2835,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alicate",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 4884,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tesoura de Corte",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 5085,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ímã",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 5244,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lanterna",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 5432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ferramentas MF",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 7104,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fita Estática",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 9028,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Vela de Ignição",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 6000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave de Cano",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 11880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pistola de cola quen…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 7735,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Martelo de Segurança",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 15870,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caixa de Ferramentas",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 15640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lanterna de Alta Pot…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 18920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Dispositivo de Desci…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 10450,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Kit de limpeza de ca…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 12587,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almotolia",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 11742,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Macaco Portátil",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 21888,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Furadeira Elétrica",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 71755,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Kit de Ferramentas",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 62080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Secador",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 36765,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cortador de Vergalhã…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 51824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Chave Hidráulica",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 69560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Maçarico",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 72480,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Expansor hidráulico",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 246354,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Indutor de Alta Freq…",
    "grupo": "Variedade",
    "categoria": "Ferramenta",
    "precos": {
      "novo": 691950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pasta de Dentes",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 1712,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Sabonete",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 1664,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Papel Higiênico",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 1683,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caneca",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 1700,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Colher de Metal",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 1802,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Removedor de Entup…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 2781,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lâmpada Elétrica",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 3108,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pote de Esmalte",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 3164,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Removedor de Ferru…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 3220,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pente de cavalo de …",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 3190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lâmpada ES",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 5734,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Barbeador",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 5760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Saco de sementes",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 5952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Inseticida",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 6832,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Limpador de Superfí…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 7068,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Água Sanitária",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 6496,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ureia",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 6726,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Linho",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 6720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lata de Café",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 9424,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cola",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 7007,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carta de Baralho",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 9204,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Apontador de Lápis",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10191,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Shampoo",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10948,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cantil",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 11904,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Porta-retratos",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 9682,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fibra Química",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 9310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lâmpada UV",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 17920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tweed",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 22968,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pano de Algodão",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 16016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lona de acampamen…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 22250,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lanterna de acampa…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 16200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carrinho de Mão",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartucho de Jogo",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10564,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Perfume",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Relógio",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10716,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pássaro kamona de …",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 10792,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Saco de fertilizante…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 26070,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Aparelho Auditivo",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 21090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alaúde",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 48216,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luz de preenchiment…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 40089,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fogão de acampame…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 47523,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cartão de Acesso da …",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 42760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rolo de filme",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 81560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Conjunto de Chá Sofi…",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 84200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caixa de Brinquedos …",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 255200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Skate",
    "grupo": "Variedade",
    "categoria": "Bens Domésticos",
    "precos": {
      "novo": 260800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Termômetro Simples",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 1818,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bolas de Algodão",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 1854,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "NaCl",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 3277,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Esponja Médica",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 3306,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "H2O2",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 5831,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tesoura Médica",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 5600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Desinf.",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 4641,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Injeção de Glicose",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 10400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Seringa",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 11502,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caixa de Itens Varia…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 10332,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Nebulizador de Medic…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 10192,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Termômetro",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 28028,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Amostra Biológica",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 25920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Estetoscópio Eletrôn…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 22724,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Examinador Portátil",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 48111,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Injetor de Bloqueado…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 42160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Massa de Tecido Mut…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 43400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bomba de insulina",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 63960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Conjunto Medidor de…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 67488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Desfibrilador extern…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 236652,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coração Metálico",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 388710,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lâmpada de Terapia …",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 232864,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Amostra de Coração …",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 257520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Kit de Teste de Fero…",
    "grupo": "Variedade",
    "categoria": "Itens Médicos Diversos",
    "precos": {
      "novo": 259320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Espora",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 10464,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Emblema de Prata",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 10508,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Selo",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 16992,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Moeda Comemorativa",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 14500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Corrente de Prata",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 14600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Relógio de Bolso",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 28224,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Relógio de Mesa",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 54591,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Óculos com Armação …",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 29600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Faca de Caça Artesa…",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 32150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Escultura de Gesso",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 57507,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Relógio de Ouro",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 80950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pulseira de Ouro",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 81950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Anel de Diamante",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 82950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Broche",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 83950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Estátua de Leopardo…",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 87950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bengala decorativa",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 90950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Álbum de Selo",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 92950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cubo de Rubik Doura…",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 293040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Ouro",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 270850,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Taça de Ouro",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 275300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Porcelana",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 293050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Toca Discos",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 297500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Máquina de escrever …",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 301950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bracelete de Jade",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 456650,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caneta de Ouro",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 458400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Modelo de Satélite S…",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 516175,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Minério de Diamante …",
    "grupo": "Variedade",
    "categoria": "Item Colecionável",
    "precos": {
      "novo": 538272,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Notas Adesivas",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 1980,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Livro Antigo",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 1919,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Caderno",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 2610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Calendário de Mesa",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 3090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa Dura",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 11155,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Diário de um operári…",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 12160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Documento",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 12880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quadrinho do Space …",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 12008,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pacote de Papel de A…",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 16497,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Marca-página de Flor…",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 40920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Documento Secreto",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 72939,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Diário de Voss",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 87318,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fragmentos de Diagr…",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 232408,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Esboço da Evolução d…",
    "grupo": "Variedade",
    "categoria": "Produtos de Papel",
    "precos": {
      "novo": 243320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Retificador",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 5824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Medidor de Pressão",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 11662,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Filtro de Ondas",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 7884,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Multímetro",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 22134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fotômetro",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 16520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Analisador de Gás",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 39808,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Testador de Estanqu…",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 23162,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Estabilizador",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 51520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Osciloscópio",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 37611,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Portátil",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 22876,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Calculadora Portátil",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 23028,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Medidor de Salinidad…",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 39680,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Antena",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 103950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Máquina de Cifras K7…",
    "grupo": "Variedade",
    "categoria": "Instrumento",
    "precos": {
      "novo": 234688,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Recipiente de Filtro",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 9545,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bússola Militar",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 9660,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cantil Militar",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 11781,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Corda de Segurança",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 16428,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Apito do contramest…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 5550,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Peças de Armas",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 22560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 21090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Inibidor de Sinal",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 12672,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Binóculos de Longo A…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 12246,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rádio portátil",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 24648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Paracord",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 36520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bala de Canhão",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 22914,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rádio",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 23104,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Kit de Ferramentas …",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 30600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Binóculos periscópic…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 23294,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Dispositivo de Comu…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 68058,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Detector de Nós Não-…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 69198,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rádio Militar",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 83960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Nivelador",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 223800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Módulo do ponteiro l…",
    "grupo": "Variedade",
    "categoria": "Itens Militares Diversos",
    "precos": {
      "novo": 245120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Faca Bem Conservada",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 19800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Aliança do Frade",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 38050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ouro Feito à Mão",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 111356,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mosquetão Imaculado",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 47880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Emblema paraquedis…",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 163100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Emblema Forjado em…",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 250572,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Soqueiras",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 152904,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bússola",
    "grupo": "Variedade",
    "categoria": "Ficha do Chefe",
    "precos": {
      "novo": 178500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fusível",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 5980,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Pager",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 8075,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Fita de Walkman",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 9890,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Celular Quebrado",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 10353,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Rádio Clássico",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 8910,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmera",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 12464,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Câmera de segurança"
  },
  {
    "nome": "Leitor de Cartão",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 18942,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Celular",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 17628,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo disparador",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 10112,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "DVD",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 19594,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Lente",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 26433,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Gravador Portátil GU…",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 12046,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de dados",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 13038,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmera",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 21470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Câmera fotográfica"
  },
  {
    "nome": "Petso",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 37554,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Assistente Pessoal …",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 22990,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Telefone Dourado",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 67960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Console de Jogos",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 71960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmera de vídeo",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 254856,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Laptop",
    "grupo": "Variedade",
    "categoria": "Eletrônicos",
    "precos": {
      "novo": 283725,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  }
];
