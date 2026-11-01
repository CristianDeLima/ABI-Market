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
window.PENDENCIAS = [];

window.ITENS = [
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
      "Durab.": 40,
      "Peso": "1,90 kg",
      "Material": "Alumínio",
      "Bloqueio sonoro": "Nenhum",
      "Área": "Cabeça",
      "Vel. movimento": "-1%",
      "Acessórios": "Máscara, Equipamento",
      "Máscara compatível": "DK8"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    },
    "img": "img/capacete-tatico-kss.webp"
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
      "Durab.": 45,
      "Peso": "2,40 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Nenhum",
      "Vel. movimento": "-3%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara, Equipamento"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    },
    "img": "img/capacete-tatico-kss2.webp"
  },
  {
    "nome": "Capacete de Helicóptero 56K",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 160650,
      "comoNovo": 61424,
      "usado": 50908
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "2,20 kg",
      "Material": "Aramida",
      "Bloqueio sonoro": "Nenhum",
      "Ergonomia": -5,
      "Vel. movimento": "-6%",
      "Área": "Cabeça; Ouvidos; Rosto",
      "Captador de som": "Fraco",
      "Redução de ruído": "Fraco"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/capacete-de-helicoptero-56k.webp"
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
      "Durab.": 65,
      "Peso": "3,90 kg",
      "Material": "Aço Endurecido",
      "Bloqueio sonoro": "Grave",
      "Ergonomia": -10,
      "Vel. movimento": "-4%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    },
    "img": "img/capacete-sh-matzka-2.webp"
  },
  {
    "nome": "Capacete Militar SH60",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 198720,
      "comoNovo": 159027,
      "usado": 152693
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50,
      "Peso": "3,20 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Ligeiro",
      "Ergonomia": -9,
      "Vel. movimento": "-3%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/capacete-militar-sh60.webp"
  },
  {
    "nome": "Capacete Militar SH50",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 122360,
      "comoNovo": 110732,
      "usado": 106974
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 60,
      "Peso": "3,20 kg",
      "Material": "Aço Endurecido",
      "Bloqueio sonoro": "Ligeiro",
      "Ergonomia": -7,
      "Vel. movimento": "-4%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    },
    "img": "img/capacete-militar-sh50.webp"
  },
  {
    "nome": "Capacete Tático de Assalto FA",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 249602,
      "comoNovo": 125173,
      "usado": 157412
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50,
      "Peso": "2,10 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Nenhum",
      "Ergonomia": -2,
      "Vel. movimento": "-1%",
      "Área": "Cabeça"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/capacete-tatico-de-assalto-fa.webp"
  },
  {
    "nome": "Capacete Tático Pesado 03",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 397082,
      "comoNovo": 283020,
      "usado": 255668
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 45,
      "Peso": "2,10 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Nenhum",
      "Vel. movimento": "-1%",
      "Área": "Cabeça",
      "Acessórios": "Máscara, Equipamento"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    },
    "img": "img/capacete-tatico-pesado-03.webp"
  },
  {
    "nome": "Capacete Tático Pesado RSP",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 256360,
      "comoNovo": 170600,
      "usado": 161082
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55,
      "Peso": "2,50 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Ligeiro",
      "Ergonomia": -2,
      "Vel. movimento": "-4%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara, Equipamento"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    },
    "img": "img/capacete-tatico-pesado-rsp.webp"
  },
  {
    "nome": "Capacete Explosão Pesada AN95",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 410400,
      "comoNovo": 328440,
      "usado": 297366
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55,
      "Peso": "3,10 kg",
      "Material": "Titânio",
      "Bloqueio sonoro": "Nenhum",
      "Ergonomia": -5,
      "Vel. movimento": "-5%",
      "Área": "Cabeça; Ouvidos",
      "Captador de som": "Médio",
      "Redução de ruído": "Forte",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    },
    "img": "img/capacete-explosao-pesada-an95.webp"
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
      "Durab.": 75,
      "Peso": "4,10 kg",
      "Material": "Aço Endurecido",
      "Bloqueio sonoro": "Grave",
      "Ergonomia": -9,
      "Vel. movimento": "-4%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    },
    "img": "img/capacete-6bnt.webp"
  },
  {
    "nome": "Capacete das Forças Especiais RST",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 656513,
      "comoNovo": 602475,
      "usado": 521649
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 75,
      "Peso": "2,60 kg",
      "Material": "Alumínio",
      "Bloqueio sonoro": "Normal",
      "Ergonomia": -10,
      "Vel. movimento": "-6%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    },
    "img": "img/capacete-das-forcas-especiais-rst.webp"
  },
  {
    "nome": "Capacete Ofensivo HG84",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 301506,
      "comoNovo": 289055,
      "usado": 326304
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70,
      "Peso": "2,70 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Normal",
      "Ergonomia": -3,
      "Vel. movimento": "-4%",
      "Área": "Cabeça; Ouvidos"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/capacete-ofensivo-hg84.webp"
  },
  {
    "nome": "Capacete Tático Pesado IND50",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 529317,
      "comoNovo": 404114,
      "usado": 380046
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 60,
      "Peso": "2,30 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Nenhum",
      "Ergonomia": -1,
      "Vel. movimento": "-1%",
      "Área": "Cabeça",
      "Acessórios": "Máscara, Equipamento"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    },
    "img": "img/capacete-tatico-pesado-ind50.webp"
  },
  {
    "nome": "Capacete Explosão DOD9",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 708468,
      "comoNovo": 586460,
      "usado": 552816
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 75,
      "Peso": "3,50 kg",
      "Material": "Composto",
      "Bloqueio sonoro": "Grave",
      "Ergonomia": -10,
      "Vel. movimento": "-8%",
      "Área": "Cabeça; Ouvidos; Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 75,
      "comoNovo": 64,
      "usado": 52
    },
    "img": "img/capacete-explosao-dod9.webp"
  },
  {
    "nome": "Capacete Tático Pesado AS200",
    "grupo": "Equipamento",
    "categoria": "Capacete",
    "precos": {
      "novo": 648000,
      "comoNovo": 434400,
      "usado": 407175
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 65,
      "Peso": "1,60 kg",
      "Material": "Polietileno",
      "Bloqueio sonoro": "Nenhum",
      "Vel. movimento": "-7%",
      "Área": "Cabeça; Ouvidos",
      "Acessórios": "Máscara"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    },
    "img": "img/capacete-tatico-pesado-as200.webp"
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
      "Durab.": 35,
      "Peso": "1,50 kg",
      "Material": "Composto",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 35,
      "comoNovo": 30,
      "usado": 24
    },
    "img": "img/protetor-facial-sh60.webp"
  },
  {
    "nome": "Máscara à Prova de Balas Militar DK8",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 42673,
      "comoNovo": 37391,
      "usado": 8550
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 45,
      "Peso": "1,00 kg",
      "Material": "Vidro",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    },
    "img": "img/mascara-a-prova-de-balas-militar-dk8.webp"
  },
  {
    "nome": "Protetor Facial à Prova de Balas Avançado DK7",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 21012,
      "comoNovo": 19728,
      "usado": 8626
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "1,80 kg",
      "Material": "Vidro",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/protetor-facial-a-prova-de-balas-avancado-dk7.webp"
  },
  {
    "nome": "Protetor Facial à Prova de Balas Militar AN95",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 28350,
      "comoNovo": 28840,
      "usado": 8816
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "1,40 kg",
      "Material": "Vidro",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/protetor-facial-a-prova-de-balas-militar-an95.webp"
  },
  {
    "nome": "Protetor Facial Matzka SH",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 89913,
      "comoNovo": 26502,
      "usado": 20938
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 50,
      "Peso": "2,00 kg",
      "Material": "Aço Endurecido",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/protetor-facial-matzka-sh.webp"
  },
  {
    "nome": "Protetor Facial Militar A SH65",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 27360,
      "comoNovo": 31296,
      "usado": 25650
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55,
      "Peso": "0,70 kg",
      "Material": "Vidro",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    },
    "img": "img/protetor-facial-militar-a-sh65.webp"
  },
  {
    "nome": "Protetor Facial Explosão 6BNT",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 101520,
      "comoNovo": 37544,
      "usado": 31312
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70,
      "Peso": "2,30 kg",
      "Material": "Aço Endurecido",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/protetor-facial-explosao-6bnt.webp"
  },
  {
    "nome": "Protetor Facial Militar B SH65",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 126000,
      "comoNovo": 51604,
      "usado": 43472
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 65,
      "Peso": "0,80 kg",
      "Material": "Composto",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    },
    "img": "img/protetor-facial-militar-b-sh65.webp"
  },
  {
    "nome": "Protetor Facial das Forças Especiais RST",
    "grupo": "Equipamento",
    "categoria": "Máscara",
    "precos": {
      "novo": 286848,
      "comoNovo": 163980,
      "usado": 57722
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 70,
      "Peso": "1,40 kg",
      "Material": "Alumínio",
      "Área": "Rosto"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/protetor-facial-das-forcas-especiais-rst.webp"
  },
  {
    "nome": "Colete Balístico Fortaleza SEK",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 99484,
      "comoNovo": 63504,
      "usado": 66588
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "5,60 kg",
      "Material": "Alumínio",
      "Vel. movimento": "-3%",
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/colete-balistico-fortaleza-sek.webp"
  },
  {
    "nome": "Colete Balístico 6B23",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 177016,
      "comoNovo": 106808,
      "usado": 112000
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 70,
      "Peso": "11,20 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -6,
      "Vel. movimento": "-9%",
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/colete-balistico-6b23.webp"
  },
  {
    "nome": "Colete Balístico 6B13",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 93960,
      "comoNovo": 76832,
      "usado": 64344
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 65,
      "Peso": "7,00 kg",
      "Material": "Composto",
      "Ergonomia": -5,
      "Vel. movimento": "-5%",
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    },
    "img": "img/colete-balistico-6b13.webp"
  },
  {
    "nome": "Colete Balístico IND401",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 74250,
      "comoNovo": 59327,
      "usado": 50904
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 55,
      "Peso": "6,80 kg",
      "Material": "Alumínio",
      "Ergonomia": -2,
      "Vel. movimento": "-4%",
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    },
    "img": "img/colete-balistico-ind401.webp"
  },
  {
    "nome": "Colete Balístico Spartan B",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 133980,
      "comoNovo": 108491,
      "usado": 98368
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "5,40 kg",
      "Material": "Aramida",
      "Ergonomia": -2,
      "Vel. movimento": "-4%",
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/colete-balistico-spartan-b.webp"
  },
  {
    "nome": "Colete Balístico Composto 926",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 318246,
      "comoNovo": 278730,
      "usado": 249044
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70,
      "Peso": "6,20 kg",
      "Material": "Composto",
      "Ergonomia": -3,
      "Vel. movimento": "-4%",
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/colete-balistico-composto-926.webp"
  },
  {
    "nome": "Colete Balístico Tático H-LC",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 333024,
      "comoNovo": 292020,
      "usado": 244216
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70,
      "Peso": "5,90 kg",
      "Material": "Composto",
      "Ergonomia": -1,
      "Vel. movimento": "-5%",
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/colete-balistico-tatico-h-lc.webp"
  },
  {
    "nome": "Colete Balístico Pesado Defender M4",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 321376,
      "comoNovo": 257790,
      "usado": 245565
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80,
      "Peso": "11,80 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -5,
      "Vel. movimento": "-11%",
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    },
    "img": "img/colete-balistico-pesado-defender-m4.webp"
  },
  {
    "nome": "Colete Balístico Pesado Defender M4 (Visual de Oficial)",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 304859,
      "comoNovo": 269244,
      "usado": 238210
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80,
      "Peso": "11,80 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -5,
      "Vel. movimento": "-10%",
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    },
    "img": "img/colete-balistico-pesado-defender-m4-visual-de-oficial.webp"
  },
  {
    "nome": "Colete Balístico Ofensivo Samurai IMTV",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 393274,
      "comoNovo": 290560,
      "usado": 269875
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 80,
      "Peso": "10,00 kg",
      "Material": "Alumínio",
      "Ergonomia": -7,
      "Vel. movimento": "-10%",
      "Área": "Tórax; Ombro; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 80,
      "comoNovo": 68,
      "usado": 56
    },
    "img": "img/colete-balistico-ofensivo-samurai-imtv.webp"
  },
  {
    "nome": "Colete Balístico Padrão Samurai IMTV",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 380880,
      "comoNovo": 254796,
      "usado": 242350
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 70,
      "Peso": "9,60 kg",
      "Material": "Alumínio",
      "Ergonomia": -3,
      "Vel. movimento": "-9%",
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 70,
      "comoNovo": 60,
      "usado": 49
    },
    "img": "img/colete-balistico-padrao-samurai-imtv.webp"
  },
  {
    "nome": "Colete Balístico Proteção Total Samurai IMTV",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 332304,
      "comoNovo": 295350,
      "usado": 258170
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 90,
      "Peso": "11,00 kg",
      "Material": "Alumínio",
      "Ergonomia": -8,
      "Vel. movimento": "-14%",
      "Área": "Tórax; Ombro; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    },
    "img": "img/colete-balistico-protecao-total-samurai-imtv.webp"
  },
  {
    "nome": "Colete Balístico Pesado BT6",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 609120,
      "comoNovo": 463335,
      "usado": 451088
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 90,
      "Peso": "8,60 kg",
      "Material": "Titânio",
      "Ergonomia": -4,
      "Vel. movimento": "-6%",
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    },
    "img": "img/colete-balistico-pesado-bt6.webp"
  },
  {
    "nome": "Colete Balístico Tático BT101",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 1279938,
      "comoNovo": 1243138,
      "usado": 824694
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100,
      "Peso": "5,50 kg",
      "Material": "Cerâmica",
      "Vel. movimento": "-4%",
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    },
    "img": "img/colete-balistico-tatico-bt101.webp"
  },
  {
    "nome": "Colete Balístico Pesado 6B45",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 1124011,
      "comoNovo": 964176,
      "usado": 803904
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 120,
      "Peso": "14,00 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -10,
      "Vel. movimento": "-18%",
      "Área": "Tórax; Ombro; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 120,
      "comoNovo": 102,
      "usado": 84
    },
    "img": "img/colete-balistico-pesado-6b45.webp"
  },
  {
    "nome": "Colete Balístico Pesado do Xerife",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 1144500,
      "comoNovo": 1045330,
      "usado": 760665
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 115,
      "Peso": "7,80 kg",
      "Material": "Cerâmica",
      "Ergonomia": -7,
      "Vel. movimento": "-12%",
      "Área": "Tórax; Ombro; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 115,
      "comoNovo": 98,
      "usado": 80
    },
    "img": "img/colete-balistico-pesado-do-xerife.webp"
  },
  {
    "nome": "Colete Balístico Composto KN",
    "grupo": "Equipamento",
    "categoria": "Colete",
    "precos": {
      "novo": 1746816,
      "comoNovo": 1460160,
      "usado": 905322
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 110,
      "Peso": "6,90 kg",
      "Material": "Cerâmica",
      "Ergonomia": -3,
      "Vel. movimento": "-7%",
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 110,
      "comoNovo": 94,
      "usado": 77
    },
    "img": "img/colete-balistico-composto-kn.webp"
  },
  {
    "nome": "Colete Peitoral de Infantaria BH",
    "grupo": "Equipamento",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 2385,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "atributos": {
      "Peso": "1,00 kg",
      "Espaço": 10
    },
    "img": "img/colete-peitoral-de-infantaria-bh.webp"
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
    "nome": "Colete Peitoral Tático Stormtrooper Tipo 3",
    "grupo": "Equipamento",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 120354,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-11-01",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "1,90 kg",
      "Espaço": 20
    },
    "img": "img/colete-peitoral-tatico-stormtrooper-tipo-3.webp"
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
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "1,50 kg",
      "Espaço": 14
    },
    "img": "img/colete-cacador-926.webp"
  },
  {
    "nome": "Colete Peitoral Multifuncional FA",
    "grupo": "Equipamento",
    "categoria": "Colete não blindado",
    "precos": {
      "novo": 103086,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "1,60 kg",
      "Espaço": 18
    },
    "img": "img/colete-peitoral-multifuncional-fa.webp"
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
    "nome": "Colete Peitoral Blindado Sentry 305",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 134640,
      "comoNovo": 128525,
      "usado": 117486
    },
    "atributos": {
      "Classe": 4,
      "Durab.": 50,
      "Peso": "10,00 kg",
      "Material": "Composto",
      "Ergonomia": -1,
      "Vel. movimento": "-3%",
      "Espaço": 16,
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 50,
      "comoNovo": 42,
      "usado": 35
    },
    "img": "img/colete-peitoral-blindado-sentry-305.webp"
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
      "Durab.": 40,
      "Peso": "8,20 kg",
      "Material": "Titânio",
      "Ergonomia": -2,
      "Vel. movimento": "-5%",
      "Espaço": 14,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 40,
      "comoNovo": 34,
      "usado": 28
    },
    "img": "img/colete-blindado-tm1.webp"
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
      "Durab.": 45,
      "Peso": "10,00 kg",
      "Material": "Alumínio",
      "Ergonomia": -1,
      "Vel. movimento": "-4%",
      "Espaço": 16,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 45,
      "comoNovo": 38,
      "usado": 32
    },
    "img": "img/colete-blindado-tm2.webp"
  },
  {
    "nome": "Colete Blindado H-Tac A8",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 316192,
      "comoNovo": 296565,
      "usado": 247050
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 60,
      "Peso": "5,90 kg",
      "Material": "Composto",
      "Ergonomia": -5,
      "Vel. movimento": "-4%",
      "Espaço": 18,
      "Área": "Tórax"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 60,
      "comoNovo": 51,
      "usado": 42
    },
    "img": "img/colete-blindado-h-tac-a8.webp"
  },
  {
    "nome": "Colete Tático Blindado Guerreiro Pesado",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 347336,
      "comoNovo": 296476,
      "usado": 259126
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 55,
      "Peso": "7,40 kg",
      "Material": "Composto",
      "Ergonomia": -7,
      "Vel. movimento": "-6%",
      "Espaço": 16,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 55,
      "comoNovo": 47,
      "usado": 38
    },
    "img": "img/colete-tatico-blindado-guerreiro-pesado.webp"
  },
  {
    "nome": "Colete Blindado H-Tac A9",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 326025,
      "comoNovo": 377760,
      "usado": 233852
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 65,
      "Peso": "6,60 kg",
      "Material": "Cerâmica",
      "Ergonomia": -5,
      "Vel. movimento": "-8%",
      "Espaço": 20,
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 65,
      "comoNovo": 55,
      "usado": 46
    },
    "img": "img/colete-blindado-h-tac-a9.webp"
  },
  {
    "nome": "Colete Blindado Pesado Defender M4",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 394632,
      "comoNovo": 351006,
      "usado": 301392
    },
    "atributos": {
      "Classe": 5,
      "Durab.": 100,
      "Peso": "12,00 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -7,
      "Vel. movimento": "-10%",
      "Espaço": 20,
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    },
    "img": "img/colete-blindado-pesado-defender-m4.webp"
  },
  {
    "nome": "Colete Blindado Pesado Spartan C",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 994665,
      "comoNovo": 840311,
      "usado": 700631
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100,
      "Peso": "14,40 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -10,
      "Vel. movimento": "-18%",
      "Espaço": 23,
      "Área": "Tórax; Ombro; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    },
    "img": "img/colete-blindado-pesado-spartan-c.webp"
  },
  {
    "nome": "Colete blindado tático AL",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1005888,
      "comoNovo": 1272570,
      "usado": 618600
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 95,
      "Peso": "7,20 kg",
      "Material": "Cerâmica",
      "Ergonomia": -5,
      "Vel. movimento": "-6%",
      "Espaço": 18,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 95,
      "comoNovo": 81,
      "usado": 66
    },
    "img": "img/colete-blindado-tatico-al.webp"
  },
  {
    "nome": "Colete Blindado Pesado AVS",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1146600,
      "comoNovo": 1260375,
      "usado": 706188
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 90,
      "Peso": "6,90 kg",
      "Material": "Cerâmica",
      "Ergonomia": -6,
      "Vel. movimento": "-10%",
      "Espaço": 20,
      "Área": "Tórax; Abdômen Superior; Abdômen Inferior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    },
    "img": "img/colete-blindado-pesado-avs.webp"
  },
  {
    "nome": "Colete blindado de comandante AL",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1203417,
      "comoNovo": 914871,
      "usado": 707584
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 100,
      "Peso": "8,60 kg",
      "Material": "Aço Endurecido",
      "Ergonomia": -5,
      "Vel. movimento": "-7%",
      "Espaço": 20,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 100,
      "comoNovo": 85,
      "usado": 70
    },
    "img": "img/colete-blindado-de-comandante-al.webp"
  },
  {
    "nome": "Colete blindado de assalto AL",
    "grupo": "Equipamento",
    "categoria": "Colete Blindado",
    "precos": {
      "novo": 1200644,
      "comoNovo": 816790,
      "usado": 692168
    },
    "atributos": {
      "Classe": 6,
      "Durab.": 90,
      "Peso": "6,80 kg",
      "Material": "Composto",
      "Ergonomia": -3,
      "Vel. movimento": "-8%",
      "Espaço": 18,
      "Área": "Tórax; Abdômen Superior"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "durabilidade": {
      "novo": 90,
      "comoNovo": 76,
      "usado": 63
    },
    "img": "img/colete-blindado-de-assalto-al.webp"
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
    "nome": "Fone de Ouvido Tático Com1",
    "grupo": "Equipamento",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 4600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "atributos": {
      "Peso": "0,40 kg",
      "Captador de som": "Fraco",
      "Redução de ruído": "Fraco"
    },
    "img": "img/fone-de-ouvido-tatico-com1.webp"
  },
  {
    "nome": "Fone de Ouvido Tático M32",
    "grupo": "Equipamento",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 21842,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "0,60 kg",
      "Captador de som": "Médio",
      "Redução de ruído": "Fraco"
    },
    "img": "img/fone-de-ouvido-tatico-m32.webp"
  },
  {
    "nome": "Fone de Ouvido Tático Z038",
    "grupo": "Equipamento",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 44589,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "0,65 kg",
      "Captador de som": "Médio",
      "Redução de ruído": "Médio"
    },
    "img": "img/fone-de-ouvido-tatico-z038.webp"
  },
  {
    "nome": "Fone de Ouvido Tático Commander A",
    "grupo": "Equipamento",
    "categoria": "Fone de ouvido",
    "precos": {
      "novo": 53600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "0,70 kg",
      "Captador de som": "Médio",
      "Redução de ruído": "Forte"
    },
    "img": "img/fone-de-ouvido-tatico-commander-a.webp"
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
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Peso": "0,80 kg",
      "Captador de som": "Forte",
      "Redução de ruído": "Médio"
    },
    "img": "img/auricular-tatico-gs2.webp"
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
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
    "qualidadeUnica": true
  },
  {
    "nome": "Munição PB 5,45×39 mm",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 2002,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 41,
      "Dano": 45,
      "Dano blindagem": 17,
      "Ferimento": "2,8",
      "Velocidade": "890 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -2,
      "Ctrl. recuo 2": -1,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-pb-5-4539-mm.webp"
  },
  {
    "nome": "Munição BS 5,45×39 mm",
    "grupo": "Munição",
    "categoria": "5,45×39 mm",
    "precos": {
      "novo": 6960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 52,
      "Dano": 40,
      "Dano blindagem": 26,
      "Ferimento": "2,3",
      "Velocidade": "830 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -7,
      "Ctrl. recuo 2": -4,
      "Peso": "0,03 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-bs-5-4539-mm.webp"
  },
  {
    "nome": "Munição M855A1 5,56×45 mm",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 836,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 40,
      "Dano": 44,
      "Dano blindagem": 17,
      "Ferimento": "2,6",
      "Velocidade": "945 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -2,
      "Ctrl. recuo 2": -1,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-m855a1-5-5645-mm.webp"
  },
  {
    "nome": "Munição M855A2 5,56×45 mm",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 2310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 41,
      "Dano": 48,
      "Dano blindagem": 20,
      "Ferimento": "2,9",
      "Velocidade": "945 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -2,
      "Ctrl. recuo 2": -1,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-m855a2-5-5645-mm.webp"
  },
  {
    "nome": "Munição M995 5,56×45 mm",
    "grupo": "Munição",
    "categoria": "5,56×45 mm",
    "precos": {
      "novo": 6840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 52,
      "Dano": 41,
      "Dano blindagem": 27,
      "Ferimento": "2,3",
      "Velocidade": "1.013 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -7,
      "Ctrl. recuo 2": -4,
      "Peso": "0,03 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-m995-5-5645-mm.webp"
  },
  {
    "nome": "Munição SS190 5,7×28 mm",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 1800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 42,
      "Dano": 47,
      "Dano blindagem": 19,
      "Ferimento": "2,8",
      "Velocidade": "716 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -3,
      "Ctrl. recuo 2": -2,
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-ss190-5-728-mm.webp"
  },
  {
    "nome": "Munição SS198 5,7×28 mm",
    "grupo": "Munição",
    "categoria": "5,7×28 mm",
    "precos": {
      "novo": 7169,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 53,
      "Dano": 43,
      "Dano blindagem": 23,
      "Ferimento": "2,4",
      "Velocidade": "792 m/s",
      "Precisão": "+1",
      "Ctrl. recuo 1": -7,
      "Ctrl. recuo 2": -4,
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-ss198-5-728-mm.webp"
  },
  {
    "nome": "Munição DVP88 5,8×42 mm",
    "grupo": "Munição",
    "categoria": "5,8×42 mm",
    "precos": {
      "novo": 1846,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 44,
      "Dano": 47,
      "Dano blindagem": 19,
      "Ferimento": "2,8",
      "Velocidade": "870 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -2,
      "Ctrl. recuo 2": -1,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-dvp88-5-842-mm.webp"
  },
  {
    "nome": "Munição DVC12 5,8×42 mm",
    "grupo": "Munição",
    "categoria": "5,8×42 mm",
    "precos": {
      "novo": 7866,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 53,
      "Dano": 44,
      "Dano blindagem": 29,
      "Ferimento": "2,4",
      "Velocidade": "915 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -7,
      "Ctrl. recuo 2": -4,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-dvc12-5-842-mm.webp"
  },
  {
    "nome": "Munição PB 7,62×39 mm",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 1596,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 45,
      "Dano": 55,
      "Dano blindagem": 23,
      "Ferimento": "3,2",
      "Velocidade": "730 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -3,
      "Ctrl. recuo 2": -2,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-pb-7-6239-mm.webp"
  },
  {
    "nome": "Munição AP 7,62×39 mm",
    "grupo": "Munição",
    "categoria": "7,62×39 mm",
    "precos": {
      "novo": 6800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 54,
      "Dano": 45,
      "Dano blindagem": 32,
      "Ferimento": "2,5",
      "Velocidade": "730 m/s",
      "Precisão": "+1",
      "Ctrl. recuo 1": -7,
      "Ctrl. recuo 2": -4,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-ap-7-6239-mm.webp"
  },
  {
    "nome": "Munição M80 7,62×51 mm",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 1406,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 42,
      "Dano": 63,
      "Dano blindagem": 21,
      "Ferimento": "3,2",
      "Velocidade": "833 m/s",
      "Precisão": "+3",
      "Ctrl. recuo 1": -3,
      "Ctrl. recuo 2": -3,
      "Peso": "0,04 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-m80-7-6251-mm.webp"
  },
  {
    "nome": "Munição M62 7,62×51 mm",
    "grupo": "Munição",
    "categoria": "7,62×51 mm",
    "precos": {
      "novo": 18620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 53,
      "Dano": 56,
      "Dano blindagem": 28,
      "Ferimento": "2,6",
      "Velocidade": "816 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -9,
      "Ctrl. recuo 2": -9,
      "Peso": "0,04 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-m62-7-6251-mm.webp"
  },
  {
    "nome": "Munição LPS 7,62×54 mm",
    "grupo": "Munição",
    "categoria": "7,62×54 mm",
    "precos": {
      "novo": 1700,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 42,
      "Dano": 75,
      "Dano blindagem": 27,
      "Ferimento": "6,0",
      "Velocidade": "865 m/s",
      "Precisão": "+1",
      "Ctrl. recuo 1": -3,
      "Ctrl. recuo 2": -1,
      "Peso": "0,03 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "img": "img/municao-lps-7-6254-mm.webp"
  },
  {
    "nome": "Munição 7BT1 7,62×54 mm",
    "grupo": "Munição",
    "categoria": "7,62×54 mm",
    "precos": {
      "novo": 4522,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 54,
      "Dano": 65,
      "Dano blindagem": 38,
      "Ferimento": "6,0",
      "Velocidade": "820 m/s",
      "Precisão": "+2",
      "Ctrl. recuo 1": -4,
      "Ctrl. recuo 2": -2,
      "Peso": "0,03 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-7bt1-7-6254-mm.webp"
  },
  {
    "nome": "Munição 7N31 9×19 mm",
    "grupo": "Munição",
    "categoria": "9×19 mm",
    "precos": {
      "novo": 855,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 40,
      "Dano": 44,
      "Dano blindagem": 19,
      "Ferimento": "2,9",
      "Velocidade": "600 m/s",
      "Precisão": "+5",
      "Ctrl. recuo 1": -3,
      "Ctrl. recuo 2": -2,
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-7n31-919-mm.webp"
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
      "Nível": 4,
      "Penetração": 41,
      "Dano": 53,
      "Dano blindagem": 18,
      "Ferimento": "3,2",
      "Velocidade": "305 m/s",
      "Precisão": "+2",
      "Ctrl. recuo 1": "+2",
      "Ctrl. recuo 2": "+1",
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-sp6-939-mm.webp"
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
      "Nível": 4,
      "Penetração": 47,
      "Dano": 56,
      "Dano blindagem": 13,
      "Ferimento": "2,8",
      "Velocidade": "310 m/s",
      "Precisão": "+3",
      "Ctrl. recuo 1": -1,
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-7n9-939-mm.webp"
  },
  {
    "nome": "Munição 7N12 9×39 mm",
    "grupo": "Munição",
    "categoria": "9×39 mm",
    "precos": {
      "novo": 4536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 50,
      "Dano": 50,
      "Dano blindagem": 22,
      "Ferimento": "2,7",
      "Velocidade": "295 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -6,
      "Ctrl. recuo 2": -3,
      "Peso": "0,01 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-7n12-939-mm.webp"
  },
  {
    "nome": "Munição JSP Calibre .44",
    "grupo": "Munição",
    "categoria": "Calibre .44",
    "precos": {
      "novo": 740,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 42,
      "Dano": 67,
      "Dano blindagem": 18,
      "Ferimento": "5,4",
      "Velocidade": "450 m/s",
      "Precisão": "+3",
      "Ctrl. recuo 1": "+2",
      "Ctrl. recuo 2": "+2",
      "Peso": "0,02 kg",
      "Chance de causar…": "Baixo"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "img": "img/municao-jsp-calibre-44.webp"
  },
  {
    "nome": "Munição UPZ Calibre .338",
    "grupo": "Munição",
    "categoria": "Calibre .338",
    "precos": {
      "novo": 3458,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 4,
      "Penetração": 42,
      "Dano": 110,
      "Dano blindagem": 30,
      "Ferimento": "9,0",
      "Velocidade": "849 m/s",
      "Precisão": "+3",
      "Ctrl. recuo 1": -1,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "img": "img/municao-upz-calibre-338.webp"
  },
  {
    "nome": "Munição FMJ Calibre .338",
    "grupo": "Munição",
    "categoria": "Calibre .338",
    "precos": {
      "novo": 5472,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atributos": {
      "Nível": 5,
      "Penetração": 54,
      "Dano": 94,
      "Dano blindagem": 41,
      "Ferimento": "9,0",
      "Velocidade": "900 m/s",
      "Precisão": "+4",
      "Ctrl. recuo 1": -6,
      "Ctrl. recuo 2": -3,
      "Peso": "0,02 kg"
    },
    "atualizado": "2026-10-31",
    "obs": "",
    "img": "img/municao-fmj-calibre-338.webp"
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
  },
  {
    "nome": "Mira Frontal Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 118,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 138,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "QC61 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 192,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "QC61 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 189,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 284,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Clássic…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Clássi…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 288,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Anel Curto",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 340,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Clássic…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 165,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Clássi…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 175,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 805,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Linear…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Milita…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 805,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Linear …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 438,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "BM59 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 522,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 594,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Multif…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 564,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "T85 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 498,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "T85 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 606,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "MF Dobrável",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1026,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Tambo…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1580,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Formato…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 890,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 910,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira S12K c…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 970,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Anel S…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 407,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Anel SE…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 481,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Rápida …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira frontal SG550",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira SG550",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira frontal dedicad…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1940,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira traseira dedica…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2024,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Formato…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2350,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "F57 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "F57 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "ACE31 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "ACE31 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 4150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal SCAR-L",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1825,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira do SCA…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2025,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira traseira G3",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2325,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira do Rif…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 925,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal do Rifl…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3225,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira da PP1…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2825,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Alça A…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1479,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Dobráv…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Dobráve…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3264,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Dobráv…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Dobráve…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2976,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Curtida MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3434,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1517,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal T19X",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 6142,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Rápida…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 4240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Red Dot Simples Are…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 38025,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira AK12",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 9620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Padrão…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SJ16 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 10089,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SJ16 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 11269,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Reflex Red Dot …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3481,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Mira Reflex EPK 8 18",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 2360,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "OK MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 5166,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Tática …",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 10004,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Tática…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 9266,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "M24 MF",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 13202,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "M24 MT",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3116,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Óptica F2000 1…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3268,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Reflex EPK 8 02",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3686,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Luneta Red Dot Tátic…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 3686,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Frontal do AK-1…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 12272,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira do AK-…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 11648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Reflex OKP 7",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 4408,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira de precisão tri…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 4522,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Reflex Compacta",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 14105,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Reflex Visão Co…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 10764,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira 4x PSO",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 7334,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Red Dot Elevada…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 15840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta de Rifle 3.5x…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 9310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Reflex PK 06",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 9576,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 3×/10× do T88",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 30602,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Dobráve…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 11058,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Traseira Dobráv…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 11058,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Prisma 2×",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 18240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Holográfica T…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 15360,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 1× da P90",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 33582,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Holográfica 553",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 16340,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira óptica Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 18202,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Red Dot Simples",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 23040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Luneta 3x T951",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 21280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Red Dot Tática M1",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 28273,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Red Dot Clássic…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 45006,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Holográfica C…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 22040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Holográfica O…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 35960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Red Dot Simple…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 22306,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 2x/7x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 141015,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 6.5x/20x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 36452,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 4x/16x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 85644,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta PSPU 2,5x/5x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 28386,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Luneta 3x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 28880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 4x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 29602,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Luneta 3.5x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 31160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Luneta 1x/4x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 100536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Híbrida Periscó…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 63048,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Prisma 3,5×",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 95648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta PSPU 4x/10x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 42104,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira tática 2x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 43434,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Alpha3 1x/6x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 141298,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta 1x/6x",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 61318,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Holográfica Híb…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 148610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Luneta Holográfica T…",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 137802,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Térmica PZ 3",
    "grupo": "Peça de Arma",
    "categoria": "Mira",
    "precos": {
      "novo": 1777728,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 7 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 900,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 8 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 845,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Desert E…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 624,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 8 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 518,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 7 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 15 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Metal …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1106,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Pequeno …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 518,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 11 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1372,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1215,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Pequeno …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Pequeno …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1245,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 17 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 585,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Padrão M…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1155,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 592,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 15 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 592,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 5 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1248,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1232,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 32 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1422,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1440,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 15 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 5 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 777,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Padrão M…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2068,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2208,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2392,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1971,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador M14 de 2…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2573,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 5 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2013,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3486,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1672,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 1840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Liga Leve de 30 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2773,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2736,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4550,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4743,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3233,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3685,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2750,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2420,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4592,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5656,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Translúci…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 10488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 11102,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5551,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5704,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 32 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2728,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 25 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2394,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador Padrão M…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 2925,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador Estendid…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5525,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 6006,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 15 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5082,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 7910,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3024,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 25 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 10439,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5328,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador M14 de 3…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 7770,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 9240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 45 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 8190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Translúci…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3698,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador Estendid…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4872,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3560,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 3420,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 16150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Câmara de Carregad…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 16744,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 42 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 13843,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5886,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 19980,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 23484,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 11615,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 6500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador Padrão In…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de Metal …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5418,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de 40 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 18090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Padrão M…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 11152,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 6500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador Encaixe d…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5421,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Estendid…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 12320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 5920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Gold Dea…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 8607,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Estendid…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 17936,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 17442,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 40 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 41310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 27224,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Transpar…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 21106,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 35 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 14532,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 17014,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 21539,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de 20 Balas …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 18700,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Estendid…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 33233,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 24766,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Padrão A…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 7956,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 27846,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 15762,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Rápido d…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 25868,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Rápido E…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 23463,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 5 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 54264,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 20640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 30012,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Padrão V…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 20825,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de 50 Balas …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 33561,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Aço S…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 29997,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Padrão V…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 11514,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 40610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Aço S…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 16380,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 20 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 32017,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tambor de 50 Balas …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 16000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador Transpar…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 35310,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador Padrão V…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 32340,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 30 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 43230,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tambor de 50 Balas …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 34692,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de 50 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 22491,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 42408,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 43956,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Rifle …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 27671,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tambor de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 37044,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 5 Bala…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 67195,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 45390,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 65262,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 83148,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 60 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 55216,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de FAL de 50 …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 36630,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 42 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 76884,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 60 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 34905,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor Compatível …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 52452,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 56133,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
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
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 26720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de 75 Balas …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 101959,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 50 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 29526,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Polím…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 32472,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Carregador de Alta C…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 66177,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 100 B…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 32097,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 69056,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 50 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 84051,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tambor Universal co…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 63000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de 10 Bal…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 146923,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tambor XG de 100 pr…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 63063,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Carregador de Tamb…",
    "grupo": "Peça de Arma",
    "categoria": "Carregador",
    "precos": {
      "novo": 130092,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cabo Frontal Tático Leve",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 2508,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato",
    "atributos": {
      "Recuo V.": "+2",
      "Recuo H.": "+4",
      "Vel. verif. carregador": "+10%",
      "Peso": "0,12 kg"
    },
    "img": "img/cabo-frontal-tatico-leve.webp"
  },
  {
    "nome": "Cabo Curto Leve",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 9108,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Ergonomia": "+6",
      "Estabilidade": "+5",
      "Peso": "0,07 kg"
    },
    "img": "img/cabo-curto-leve.webp"
  },
  {
    "nome": "Cabo Longo Leve",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 10100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Precisão": "+7",
      "Estabilidade": "+10",
      "Peso": "0,07 kg"
    },
    "img": "img/cabo-longo-leve.webp"
  },
  {
    "nome": "Mini Apoio",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 4532,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Ergonomia": "+6",
      "Peso": "0,07 kg"
    },
    "img": "img/mini-apoio.webp"
  },
  {
    "nome": "Mini Apoio T",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 6656,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Ergonomia": "+9",
      "Peso": "0,07 kg"
    },
    "img": "img/mini-apoio-t.webp"
  },
  {
    "nome": "Cabo Frontal Vertical Curto",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 3990,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+3",
      "Recuo H.": "+6",
      "Vel. verif. carregador": "+10%",
      "Peso": "0,13 kg"
    },
    "img": "img/cabo-frontal-vertical-curto.webp"
  },
  {
    "nome": "Apoio de Alumínio",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 14105,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Ergonomia": "+12",
      "Peso": "0,07 kg"
    },
    "img": "img/apoio-de-aluminio.webp"
  },
  {
    "nome": "Cabo Frontal Tático de Liga",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 7137,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+4",
      "Recuo H.": "+8",
      "Vel. verif. carregador": "+15%",
      "Peso": "0,10 kg"
    },
    "img": "img/cabo-frontal-tatico-de-liga.webp"
  },
  {
    "nome": "Cabo Frontal RK-6",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 10044,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+5",
      "Recuo H.": "+8",
      "Estabilidade": "+6",
      "Peso": "0,13 kg"
    },
    "img": "img/cabo-frontal-rk-6.webp"
  },
  {
    "nome": "CF Confortável",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 11844,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Ergonomia": "+8",
      "Estabilidade": "+10",
      "Peso": "0,14 kg"
    },
    "img": "img/cf-confortavel.webp"
  },
  {
    "nome": "Cabo Frontal de Inclinação Leve",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 10200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+4",
      "Recuo H.": "+8",
      "Ergonomia": "+1",
      "Peso": "0,14 kg"
    },
    "img": "img/cabo-frontal-de-inclinacao-leve.webp"
  },
  {
    "nome": "Cabo Frontal de Controle RK 0",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 28644,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+6",
      "Recuo H.": "+9",
      "Vel. verif. carregador": "+25%",
      "Peso": "0,13 kg"
    },
    "img": "img/cabo-frontal-de-controle-rk-0.webp"
  },
  {
    "nome": "Cabo Frontal Compacto Tático AR",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 27028,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+8",
      "Recuo H.": "+9",
      "Ergonomia": "+5",
      "Peso": "0,14 kg"
    },
    "img": "img/cabo-frontal-compacto-tatico-ar.webp"
  },
  {
    "nome": "Cabo Frontal Inclinado KIR",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 15120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+4",
      "Recuo H.": "+6",
      "Estab. sem mirar": "+5",
      "Ergonomia": "-4",
      "Peso": "0,14 kg"
    },
    "img": "img/cabo-frontal-inclinado-kir.webp"
  },
  {
    "nome": "Cabo Frontal Vertical de Alumínio",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 10412,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+5",
      "Recuo H.": "+7",
      "Estabilidade": "+3",
      "Vel. verif. carregador": "+30%",
      "Peso": "0,12 kg"
    },
    "img": "img/cabo-frontal-vertical-de-aluminio.webp"
  },
  {
    "nome": "Cabo Frontal Angulado",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 46151,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Recuo V.": "+6",
      "Recuo H.": "+9",
      "Ergonomia": "+3",
      "Peso": "0,15 kg"
    },
    "img": "img/cabo-frontal-angulado.webp"
  },
  {
    "nome": "Cabo frontal",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 15542,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Recuo V.": "+5",
      "Recuo H.": "+9",
      "Vel. verif. carregador": "+20%",
      "Peso": "0,15 kg"
    },
    "img": "img/cabo-frontal.webp"
  },
  {
    "nome": "Cabo Frontal Inclinado B25",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 69216,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "",
    "atributos": {
      "Recuo V.": "+5",
      "Recuo H.": "+11",
      "Ergonomia": "+4",
      "Peso": "0,14 kg"
    },
    "img": "img/cabo-frontal-inclinado-b25.webp"
  },
  {
    "nome": "Cabo Frontal Tático Vertical Leve",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Frontal",
    "precos": {
      "novo": 113844,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato",
    "atributos": {
      "Recuo V.": "+7",
      "Recuo H.": "+11",
      "Ergonomia": "+4",
      "Peso": "0,14 kg"
    },
    "img": "img/cabo-frontal-tatico-vertical-leve.webp"
  },
  {
    "nome": "Cabo Padrão M1911",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 553,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de Pistola QC61",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 621,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de Pistola CZ52",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
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
    "nome": "Cabo Especial M1911",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 756,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Especial M45A1",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 1134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro de Pol…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 658,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Moder…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 1701,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR Manufatura …",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2604,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Compa…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 1428,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Compatível co…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2465,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Texturizado SC…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2262,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro de Pol…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2436,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro AR Co…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Tático…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 3588,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Confor…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 4284,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cabo Traseiro AR Lev…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 8170,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Empunhadura traseir…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 1786,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR para M870",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 2050,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro da PP1…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 6254,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Leve A…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 3840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro de Fra…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 6175,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Empunhadura Trasei…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 10971,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro do AN-…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 9828,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Empunhadura traseir…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 5394,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Especí…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
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
    "nome": "Cabo Traseiro Tático…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 8265,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro SCAR-L",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 10403,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro KGB Le…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 11128,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro de Pol…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
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
    "nome": "Cabo Traseiro Confor…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 14690,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro SAW T…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 11921,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Borracha par…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 10200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cabo Traseiro AR Lev…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 25800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR Tático para …",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 20468,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Padrão Banshee",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 23985,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Moder…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 16380,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro RK3 In…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 18424,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 10143,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR Industrial",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 8436,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Indust…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 30975,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo traseiro design…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 11505,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro AR Lev…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 50052,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR Industrial E…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 66582,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Traseiro Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 26418,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo AR Tático Oco",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 98073,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo FO do MK14",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 45824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo Especial MK14",
    "grupo": "Peça de Arma",
    "categoria": "Cabo Traseiro",
    "precos": {
      "novo": 30856,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão QC61",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 657,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Coronha MP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 780,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Antiderrapa…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1148,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Clássica T79",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável MP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1218,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Carvalho …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1184,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Crn. Dobrável M3A1",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Trilho Guard…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1376,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cabo de Polímero MP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1615,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão MAC…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1743,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Proteç…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Madeira UZI",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Equilibrada …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7744,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Modernizad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 9888,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão T85",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2883,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão UMP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2013,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha PT1 AK",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3230,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tampa MP5",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3348,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Máscara …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2052,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Traseira Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Rifle de …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4477,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3182,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha dobrável de…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1786,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão G3",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3159,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Metal MP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3784,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Ergonômica …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3960,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Extensão Es…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3735,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador UZI",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2021,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador AKS para …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de coronha ded…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4368,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Metal AK…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 1813,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão S12K",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3528,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Traseira Uni…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável da …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5724,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrátil da …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5778,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2090,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "UZI Conv.",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrô para …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2109,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada de Recuo d…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Ébano M…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Leve Retrát…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6534,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão M16",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Modernizad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6164,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável da …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 2584,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Modernizad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6188,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Fixa EA da S…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6392,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Esqueleto p…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7590,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Tubo AR",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 12600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha premium SG…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Dobrável Av…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Almofada Esqueleto …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 9040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Sniper Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 13284,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tática FA Ge…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7055,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Moderna G3",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 8330,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Proteção…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7395,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3306,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Retrátil SCA…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável AC…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 8096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador AKM para …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3686,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador AK para PT",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 8415,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Padrão do Z…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Franco-a…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 10200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Fixa MP5",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 3914,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Padrão do A…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 11770,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Leve Carabi…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 17227,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão M4",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4066,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tática do M…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 30080,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Leve do FAL",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 10780,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão AK12",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4950,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha PT3 AK",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 23805,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Tubo R…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6069,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Retrátil Clá…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 9600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 17802,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 16383,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Tubo S…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 8060,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha MCX Especial",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4940,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrátil Pad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 12576,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável Es…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada da USAS-12",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 15982,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Leve ACE 31",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 4978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada traseira p…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 10824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha T951",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Desc. B. T19X",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 26004,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Estável do S…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 18744,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Tática MP5",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6384,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Padrão do A…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
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
    "nome": "Coronha Integrada AR",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 8512,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão T19X",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 12901,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Dobrável T03",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 14985,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Moderna do …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 26190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5548,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada traseira p…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 16498,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Tática do ZC…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 35100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tática da PP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22348,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrátil Pro…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 5814,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Leve GL Sho…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 13244,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Descanso de Bochec…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6004,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 19840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Integrado Li…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 14280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 14790,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tubo de Extensão RP…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 6498,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha integrada A…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 21177,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Retrátil da …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 19055,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Compatível …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7030,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão AEK",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7486,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Traseira Lev…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22261,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Madeira …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7562,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Original P90",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 16281,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Leve AK-100",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 20100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tática AK12",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 42840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Alto Des…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 37536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo Universal Série…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 9384,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha dobrável MP9",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 7828,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Type 81.",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 10350,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22600,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Industrial d…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 40454,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Moderna M1…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 21792,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Proteção…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 19720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Moderna MCX",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 11985,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão Mod…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 29140,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Tática AP S…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 26196,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrátil da …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
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
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 32912,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Integrada AK",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 10086,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Precisão …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 14094,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Triangular F…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 25839,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Alto Des…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 24196,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha-padrão FAM…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 11970,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Alto Des…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 127300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 31137,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Tubo B…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 36792,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha do M24 Flor…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 14650,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Coronha Ava…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 27342,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Almofada traseira a…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 37338,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Padrão de B…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 26640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Descanso de Bochec…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 11286,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Especial FAL",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 20562,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Retrátil do …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 48574,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Padrão do T…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 19966,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Estável do F…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 32292,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Polímero …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22425,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Retrátil MPX",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 59400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Dobrável M24",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 106200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Alto Des…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 52548,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Leve AK-Ser…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 37750,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Traseira Apr…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 40299,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Tática Mode…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 53328,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Aprimorada …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 46359,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Modernizad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 50020,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Moderna M24",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 96075,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Modernizad…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 51102,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha do Rifle de …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 53111,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha RPK Dedicada",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 39424,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de design m…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 30591,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Rápida MK14",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22980,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha-padrão SJ16",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 90240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 37056,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha FAB da série…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 16074,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada de Coronh…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 22880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada de Recuo d…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 116865,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Estável AEK",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 155601,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Ajustável S…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 100254,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Precisão …",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 58800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de 2 Geraçã…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 50292,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Tubo F…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 23400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha Tática T03",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 20330,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de Assalto d…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 39812,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha especial MK…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 25470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo Estendido Avan…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 56396,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Coronha de alto dese…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 107864,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha de Franco-a…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 86940,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Coronha Moderna SJ…",
    "grupo": "Peça de Arma",
    "categoria": "Coronha",
    "precos": {
      "novo": 162071,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas M9 M…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 305,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Híbri…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 729,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 852,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Supressor de chama …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1056,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1152,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de Boca",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1292,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Padr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1785,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 2046,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de boca leve 9…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 2002,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1058,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Quebra-chamas Tátic…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1944,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Multi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1170,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 2240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador Mosin 7,6…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1504,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Adaptador Mosin 7,6…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 3136,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de boca 9mm",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4983,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Espe…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 2706,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas QC61",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1813,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1628,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6116,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Padr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 1824,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas T79",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4730,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 5460,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Longo",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8092,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador universa…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6210,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8211,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bocal Integrado da U…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8023,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Cano Vector",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6278,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6399,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Estrangulador da US…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 9912,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Estr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 7830,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de Boca da PP1…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 7047,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8613,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 7920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de boca univer…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 3588,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Escope…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4416,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Freio de Boca da Sér…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 13192,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Multi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10197,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador T85",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 9048,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Clás…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 3990,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Vect…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10137,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador QC61",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8475,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Convenci…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 9945,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Univ…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4956,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Long…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10496,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4902,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador AMB-17",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 12900,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas RPK …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 4902,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Está…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 13000,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador da P50A",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 16380,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Quebra…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8190,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de boca dedica…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 14430,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Está…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10530,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de boca dedica…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 13200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 9916,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador M1911",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 11919,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador dedicado…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 15207,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Corrediça de Bocal E…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 16756,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Série AK…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8614,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Multi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 12118,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador 556 do M…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 22230,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de Pr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 28372,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador 7,62x39",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 25519,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Padr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 6536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador MPF45",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 7052,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de boca indust…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 15750,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Convenci…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 16287,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Está…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 18624,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Freio de Boca AN-94",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10864,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas do T…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 22620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de Pr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 20475,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Clás…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 17355,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Supressor de chama …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 19404,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Espir…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 20882,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Multi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 15169,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador de Rifle…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 36582,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda de Corrediça …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 19497,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas Multi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 7828,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas Garr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 17181,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Leve 9x1…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 8346,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador de Liga …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 16206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador MK14/M14",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 16800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Série AK…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 21565,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas do A…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 22368,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Sil. U191",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 31440,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador universa…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 22413,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador SureFire…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 25546,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas T19X",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 137781,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador de Escop…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 20007,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Hexagon…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 21420,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Hexagon…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 27285,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda de Freio de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 34170,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador 9x19",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas MCX",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 9804,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador MP5SD",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 14448,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de boca leve d…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 20202,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 31460,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Multi-ca…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 19875,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Vector45",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 21432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de Boca AK12",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 33796,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de Quebra…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 27930,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Adaptador de bocal d…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 10906,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador do T88",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 40608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Adaptador de Bocal …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 37120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 11058,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de Pr…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 32883,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Quebra-chamas do Z…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 33174,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador dedicado…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 11096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 49640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Quebra-chamas de B…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 22484,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador Exclusi…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 49640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador leve 7,6…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 34164,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Integrad…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 31096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador dedicado…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 30885,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador de AK-12",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 42237,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador MCX",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 23168,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 18432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Convenci…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 38016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador T951",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 30646,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Integrad…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 18012,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Supressor de chama …",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 53136,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Hexagon…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 19494,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador Integrad…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 20330,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 67344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador de Rifle…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 26082,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Silenciador 5,56x45",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 21698,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Freio de Boca do AK-…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 61692,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador de Preci…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
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
    "nome": "Freio de Boca Modern…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 25346,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Silenciador .338",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 104247,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Compensador de Boc…",
    "grupo": "Peça de Arma",
    "categoria": "Bocal",
    "precos": {
      "novo": 103125,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Minimira Laser Azul",
    "grupo": "Peça de Arma",
    "categoria": "Ponta Laser",
    "precos": {
      "novo": 5124,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Ponta Laser Multifun…",
    "grupo": "Peça de Arma",
    "categoria": "Ponta Laser",
    "precos": {
      "novo": 29488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Mira Laser Verde",
    "grupo": "Peça de Arma",
    "categoria": "Ponta Laser",
    "precos": {
      "novo": 30894,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano-padrão M1911",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 259,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão M3A1",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 630,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Roscado M1911",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 738,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Médio QC61",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Serrado M870",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 510mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 624,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 540mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 629,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 610mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1258,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano G17 C",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1411,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "G17 Rosc. Cano",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1428,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Roscado M9A3",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
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
    "nome": "Cano-padrão M870",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1615,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 660mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1440,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão T85",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão UMP45",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 1800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido da M…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2635,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão M14",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano G da Submetral…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3362,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de 18\" G3",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3906,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido da U…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5618,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 750mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 4760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de 12\" G3",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5428,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SG550 Cano Curto",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5369,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Curto do Mosin",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 6180,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Curto PCC-9",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5612,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano da carabina SG…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2394,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Carabina Mo…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2898,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Cano Médio Vector 45",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5985,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Médio PCC-9",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano com Silenciado…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 13926,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Longo PCC-9",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 7169,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano da carabina M16",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 7169,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido MAC …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão MAC 10",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2660,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Carabina MA…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 6930,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 710mm MP-133",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 6106,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano da Pistola 18C …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2812,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "SG550 Cano Longo",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 2926,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Estendido M14",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 6880,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Exclusivo da PP…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3230,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de 16\" G3",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3268,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano ACE31 (8.31\")",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3698,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão T951",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 3268,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 14\" SCAR-L",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
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
    "nome": "Cano Dedicado F57",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
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
    "nome": "Cano da Sniper Mosin",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 11286,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 10\" SCAR-L",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 11100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Franco-atira…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 10608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão do AK-1…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 11128,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano ACE31 (16\")",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 32032,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Estendido T951",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 15012,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Thunder F57",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 13221,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Serrado Exclusi…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
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
    "nome": "Cano-padrão Vector9",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 10209,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Padrão do AMB-…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 13716,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 320 mm FAMAS",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 10033,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Convencional d…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 20701,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Serrado MPX",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 11392,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão M110",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
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
    "nome": "Cano de Carabina Ve…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 17810,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Longo da PP19",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 8308,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão Vector45",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 5206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Dedicado AR57",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 20727,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Serrado Exclusi…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 8056,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Universal H416…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 17901,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Acessório de Teste: …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 310388,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão Exclusiv…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 15106,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano-padrão Exclusiv…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 6574,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Acessório de Teste: …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 226800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano XS MPX",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 10472,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Regulação …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 7296,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão FAMAS",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 7720,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Carabina Ve…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 24638,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Estendido M110",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 25608,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Curto da Bansh…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 19110,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Serrado Univer…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 8664,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão RPK16",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 8778,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Médio Universal…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 29232,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano-padrão Univers…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 52320,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano 18\" SCAR-L",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 30861,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Curto de Rifle …",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 24030,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido Exclu…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 17088,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano-padrão MPX",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 10830,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano 22\" SVDS",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 35136,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Padrão do T88",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 22116,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano de Rifle Autom…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 31536,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Padrão Banshee",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 26370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Longo da Bansh…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 31860,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido MPX",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 51471,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano de Rifle de Pre…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 56776,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano estendido de M…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 38586,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano Serrado para P…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 15745,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido RPK16",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 46035,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano Estendido Exclu…",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 31773,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cano-padrão P90",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 122850,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Cano 620 mm FAMAS",
    "grupo": "Peça de Arma",
    "categoria": "Cano",
    "precos": {
      "novo": 59808,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Faia …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 1575,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2697,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Made…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2508,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Guarda-mã…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3827,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Meta…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2964,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Polí…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2704,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Compos…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2970,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Aprimor…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2915,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Plást…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2530,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Modern…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 5270,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Polí…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 2508,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Modern…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 5544,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Básico T…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4020,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4958,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 5775,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão curto SG…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Médio P…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Longo P…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 8667,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão I…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3078,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Curto PC…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4293,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3078,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Made…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Retrô p…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3686,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão curto tá…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 8924,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Antiderr…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 3838,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Longo d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 9579,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão longo pa…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4576,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Exclusiv…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11130,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão em Liga …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 6649,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 5390,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Portátil …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 9130,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4180,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Tático p…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11770,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 9240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Premiu…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 5264,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4636,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Integra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13260,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4940,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 4978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Modern…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13433,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Longo d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 20502,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão longo pa…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 10366,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Plást…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 24915,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 6123,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Aprimor…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13973,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 12324,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 18170,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 16218,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Polí…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 16366,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 6688,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 9152,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 7144,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 17100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 7372,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19594,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Longo Ó…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 21728,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Curto Ót…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19206,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão aprimor…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 20176,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19110,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Longo d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19695,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Industri…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 12285,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 25545,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Tático d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 9750,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático M…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 10140,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 22620,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Avançad…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 7448,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão MCX Esp…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 8036,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão AMB-17",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 17640,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 7524,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Integra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 21721,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão aprimor…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 27261,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11232,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Exte…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 28905,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 20296,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 34220,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 25724,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático M…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 31416,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Frontal …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 25704,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Made…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 24745,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11760,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 31496,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11352,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19684,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Clássico…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 10108,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão aprimor…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 37808,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Adap…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 29120,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 31866,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Tático M…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 20878,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 10982,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Frontal …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 17520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 29007,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Quick-m…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 29007,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Compos…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 15822,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 27930,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Curto da…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 12054,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11248,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão com Tril…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 47223,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 11514,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Frontal …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 12312,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 12312,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Especial…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19546,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13072,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13110,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13262,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão em Liga …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 13300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Avançad…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 20064,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 49128,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 64979,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Modern…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 45952,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Polí…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 50140,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Tático T…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 77703,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão Longo d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 81955,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 17746,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Carabin…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 17784,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Univers…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 35100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19188,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão com Tra…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 37908,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Estendi…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 87234,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Perfura…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 68005,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão de Trav…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 49245,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 42300,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão melhora…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 41919,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão flutuant…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 46256,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Tático d…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 86699,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Trav…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 19646,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Médio-lo…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 23355,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Guarda-mão Avançad…",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 88687,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Guarda-mão de Fibra …",
    "grupo": "Peça de Arma",
    "categoria": "Guarda-mão",
    "precos": {
      "novo": 56160,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 616,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 657,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Es…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
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
    "nome": "Receptor Superior Es…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
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
    "nome": "Corrediça Clássica d…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 1134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 546,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira de Tr…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 1743,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3912,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor de Fibra de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2100,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 1809,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor de Fibra de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2214,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Corrediça de Pistola…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 1107,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 1221,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa do Receptor Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
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
    "nome": "Capa de Poeira de Tr…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3498,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior M…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2244,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Usinado e…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2937,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3036,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Acessório de Teste: …",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 104040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior PC…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Corrediça Clássica d…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2584,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor de Trilho S…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 5256,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Armação superior de …",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 2774,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Trilh…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 7098,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Conjunto de Recepto…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 7820,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Capa do Receptor Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Es…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 9240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior S…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior da…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 5104,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 7920,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor superior m…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 5340,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor Superior S…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 5520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor Superior A…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 9016,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca-padrão T951",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 3610,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior do…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 11128,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Padrão M1…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 10388,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Trilho L…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 12096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor de Liga da …",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 8450,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 20410,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior do…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 13624,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Es…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 4978,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior do…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 10611,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior M…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 15065,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira AK12",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 24890,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 13886,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca Tática T951",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 12672,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Receptor Superior FA…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 14256,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior M…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 10184,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Acessório de Teste: …",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 130854,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa do Receptor Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 5434,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior M…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 13932,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa do Receptor Su…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 17424,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Cabo aprimorado T951",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 24024,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 7448,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de poeira de de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 23912,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior P9…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 9850,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 21867,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 29747,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Longo do Z…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 14454,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 7790,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Es…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 30444,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Poeira Padrã…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 28616,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior do…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 48052,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 11134,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 23520,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 40866,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Ex…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 27930,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa Contra Poeira E…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 37926,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior Pa…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 34220,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Receptor Superior de…",
    "grupo": "Peça de Arma",
    "categoria": "Receptor/Capa de Poeira",
    "precos": {
      "novo": 29304,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Base de Mira Univers…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1360,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior UZI",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
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
    "nome": "Trilho Longo Carabin…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Tático M1911",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1312,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Especial M191…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1488,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Especial M3A1",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1360,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior de L…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1344,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior Espe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1653,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior T79",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1740,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Almofada de elevaçã…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1701,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Minitrilho de Mira R…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1886,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Suporte de Mira de R…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1863,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Suporte de Mira de E…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2280,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior Espe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2088,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho T85",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2232,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Encaixe do…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2002,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Estendido MP5",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2314,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Base de Mira Tática …",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2314,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Base de Mira de Pist…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2366,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior Mini…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1196,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Cabo Frontal …",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2262,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior de M…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1363,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Inferior de M…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1363,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho de Mira de Al…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1682,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Suporte de Luneta d…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1504,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho de Mira de Fe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3150,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Almofada de elevaçã…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3096,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Trava Modu…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3852,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Suporte de Mira Híbr…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2652,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Anel de Luneta 34mm",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2925,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Inferior FAMA…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 5109,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior FAMA…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 5148,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior T03",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3783,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Trava Modu…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 7240,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho superior de M…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3864,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho AKS 74U",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2112,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Tático ACE31",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2112,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Inferior SCAR…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 1848,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Rifle Acio…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6688,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho RMR Especial …",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4500,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "F57 Mul.T",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4545,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Lateral Vecto…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4464,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho de Mira Exclu…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4032,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Trava Modu…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
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
    "nome": "Trilho Inferior Vect…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4450,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho Superior Vaza…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4590,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Suporte de Mira de T…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 5151,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Base de Mira Especia…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 4674,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Base de Mira SVTU Es…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 5358,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho Especial UMP4…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
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
    "nome": "Base Anel Visor 3.5x",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2580,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho de Trava Modu…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6784,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior T951",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2432,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Lateral T951",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3648,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Mira Trase…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior do R…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6955,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Guarda-mã…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa de Trilho Longo…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2470,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Lateral MAC10",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6370,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Triplo T951",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 2925,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Capa do Receptor Su…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6435,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Tático RPK16",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3102,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Lateral do Re…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 7840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Mira de Am…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 3384,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Venda por Contato"
  },
  {
    "nome": "Trilho Lateral Incli…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
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
    "nome": "Trilho de Extensão d…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 9040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Painel do Trilho Sér…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 6800,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Anel Guarda-mão SV…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 10962,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho VSS B 3",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 9483,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior SJ16",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 18270,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior Espe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 5238,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho Superior Espe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 17363,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Triplo de Mir…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 11856,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho Lateral SCAR-…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 13456,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Triplo VSS",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 17292,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Inferior SVD",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 22752,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Combo VSS B 3",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 8164,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Receptor Supe…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 17400,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Trilho de Capa Contr…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 19359,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Especial MK14",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 31070,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Inferior SVDS",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 27550,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Superior do T…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 23571,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho de Luneta Pic…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 33060,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Trilho Picatinny Cob…",
    "grupo": "Peça de Arma",
    "categoria": "Trilho",
    "precos": {
      "novo": 22040,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Gás do AK-1…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 1207,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Gás Universa…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 1073,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Gás Persona…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 6890,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Mira Frontal Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 2546,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 5751,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Gás da PP19",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 7830,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tubo de Gás Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 4200,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Gás Trilho …",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 9516,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Tubo de Gás do ACE",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 12740,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Gás Univers…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 5548,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Combo de bloco de g…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 16740,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Bloco de Gás Padrão …",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 31122,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Bloco de Gás Especia…",
    "grupo": "Peça de Arma",
    "categoria": "Bloco de Gás",
    "precos": {
      "novo": 19270,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tampa da Alavanca d…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 574,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2460,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2158,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2106,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
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
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2852,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2030,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tampa de Alavanca d…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 4515,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2975,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tampa de Alavanca d…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 3827,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 4988,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 8464,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 8996,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
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
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 10036,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 8840,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 2496,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Tampa de Alavanca d…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 8584,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 8658,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
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
    "nome": "Alça de Carregament…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 13968,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  },
  {
    "nome": "Alavanca de Carrega…",
    "grupo": "Peça de Arma",
    "categoria": "Alavanca de Ferrolho",
    "precos": {
      "novo": 11330,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": "Pode ser trocado com Contato"
  },
  {
    "nome": "Lanterna Tática X30…",
    "grupo": "Peça de Arma",
    "categoria": "Lanterna",
    "precos": {
      "novo": 21812,
      "comoNovo": null,
      "usado": null
    },
    "qualidadeUnica": true,
    "atualizado": "2026-10-31",
    "obs": ""
  }
];
