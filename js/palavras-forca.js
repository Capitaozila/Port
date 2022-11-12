const palavras = [

  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGAR",
  }),
  
  (palavra002 = {
    nome: "BAHIA",
    categoria: "LUGAR",
  }),

  (palavra003 = {
    nome: "PARIS",
    categoria: "LUGAR",
  }),

  (palavra004 = {
    nome: "LONDRES",
    categoria: "LUGAR",
  }),

  (palavra005 = {
    nome: "MADRI",
    categoria: "LUGAR",
  }),

  (palavra006 = {
    nome: "MOSCOU",
    categoria: "LUGAR",
  }),

  (palavra007 = {
    nome: "SALVADOR",
    categoria: "LUGAR",
  }),
  (palavra008 = {
    nome: "SANTOS",
    categoria: "LUGAR",
  }),

  (palavra009 = {
    nome: "SAO PAULO",
    categoria: "LUGAR",
  }),

  (palavra010 = {
    nome: "RIO DE JANEIRO",
    categoria: "LUGAR",
  }),

  (palavra011 = {
    nome: "BRASILIA",
    categoria: "LUGAR",
  }),

  (palavra012 = {
    nome: "PORTO ALEGRE",
    categoria: "LUGAR",
  }),

  (palavra013 = {
    nome: "CURITIBA",
    categoria: "LUGAR",
  }),

  (palavra014 = {
    nome: "BELO HORIZONTE",
    categoria: "LUGAR",
  }),

  (palavra015 = {
    nome: "MANAUS",
    categoria: "LUGAR",
  }),

  (palavra016 = {
    nome: "RECIFE",
    categoria: "LUGAR",
  }),

  (palavra017 = {
    nome: "JOINVILLE",
    categoria: "LUGAR",
  }),

  (palavra018 = {
    nome: "FLORIANOPOLIS",
    categoria: "LUGAR",
  }),

  (palavra019 = {
    nome: "NATAL",
    categoria: "LUGAR",
  }),

  (palavra020 = {
    nome: "FORTALEZA",
    categoria: "LUGAR",
  }),

  (palavra021 = {
    nome: "ARACAJU",
    categoria: "LUGAR",
  }),
  (palavra022 = {
    nome: "PALMAS",
    categoria: "LUGAR",
  }),

  (palavra023 = {
    nome: "CAMPO GRANDE",
    categoria: "LUGAR",
  }),
  (palavra024 = {
    nome: "VITORIA",
    categoria: "LUGAR",
  }),
  (palavra025 = {
    nome: "PORTO VELHO",
    categoria: "LUGAR",
  }),
  (palavra026 = {
    nome: "BOA VISTA",
    categoria: "LUGAR",
  }),

  (palavra027 = {
    nome: "MACAPA",
    categoria: "LUGAR",
  }),

  (palavra028 = {
    nome: "RIO BRANCO",
    categoria: "LUGAR",
  }),

  (palavra029 = {
    nome: "MACEIO",
    categoria: "LUGAR",
  }),

  (palavra030 = {
    nome: "TERESINA",
    categoria: "LUGAR",
  }),

  (palavra031 = {
    nome: "SAO LUIS",
    categoria: "LUGAR",
  }),

  (palavra032 = {
    nome: "CUIABA",
    categoria: "LUGAR",
  }),

  (palavra033 = {
    nome: "BELEM",
    categoria: "LUGAR",
  }),

  (palavra034 = {
    nome: "PORTO VELHO",
    categoria: "LUGAR",
  }),

  (palavra035 = {
    nome: "BRASIL",
    categoria: "LUGAR",
  }),

  (palavra036 = {
    nome: "ALEMANHA",
    categoria: "LUGAR",
  }),

  (palavra037 = {
    nome: "ARGENTINA",
    categoria: "LUGAR",
  }),

  (palavra038 = {
    nome: "AUSTRALIA",
    categoria: "LUGAR",
  }),

  (palavra039 = {
    nome: "BOLIVIA",
    categoria: "LUGAR",
  }),

  (palavra040 = {
    nome: "TUTOIA",
    categoria: "LUGAR",
  }),

  (palavra041 = {
    nome: "BANANA",
    categoria: "FRUTA",
  }),

  (palavra042 = {
    nome: "ABACAXI",
    categoria: "FRUTA",
  }),

  (palavra043 = {
    nome: "ABACATE",
    categoria: "FRUTA",
  }),

  (palavra044 = {
    nome: "ACEROLA",
    categoria: "FRUTA",
  }),

  (palavra045 = {
    nome: "AMORA",
    categoria: "FRUTA",
  }),

  (palavra046 = {
    nome: "AMEIXA",
    categoria: "FRUTA",
  }),

  (palavra047 = {
    nome: "CACAU",
    categoria: "FRUTA",
  }),

  (palavra048 = {
    nome: "GOIABA",
    categoria: "FRUTA",
  }),

  (palavra049 = {
    nome: "BURITI",
    categoria: "FRUTA",
  }),

  (palavra050 = {
    nome: "CEREJA",
    categoria: "FRUTA",
  }),

  (palavra051 = {
    nome: "CANETA",
    categoria: "OBJETO",
  }),

  (palavra052 = {
    nome: "CADERNO",
    categoria: "OBJETO",
  }),

  (palavra053 = {
    nome: "LAPIS",
    categoria: "OBJETO",
  }),

  (palavra054 = {
    nome: "BORRACHA",
    categoria: "OBJETO",
  }),

  (palavra055 = {
    nome: "COPO",
    categoria: "OBJETO",
  }),

  (palavra056 = {
    nome: "GARRAFA",
    categoria: "OBJETO",
  }),

  (palavra057 = {
    nome: "CANECA",
    categoria: "OBJETO",
  }),

  (palavra058 = {
    nome: "copo",
    categoria: "OBJETO",
  }),

  (palavra059 = {
    nome: "hipopotamo",
    categoria: "ANIMAL",
  }),

  (palavra060 = {
    nome: "elefante",
    categoria: "ANIMAL",
  }),

  (palavra061 = {
    nome: "HOMEM ARANHA",
    categoria: "PERSONAGEM",
  }),

  (palavra062 = {
    nome: "HOMEM DE FERRO",
    categoria: "PERSONAGEM",
  }),

  (palavra063 = {
    nome: "CAPITAO AMERICA",
    categoria: "PERSONAGEM",
  }),

  (palavra064 = {
    nome: "HULK",
    categoria: "PERSONAGEM",
  }),

  (palavra065 = {
    nome: "THOR",
    categoria: "PERSONAGEM",
  }),

  (palavra066 = {
    nome: "VIUVA NEGRA",
    categoria: "PERSONAGEM",
  }),
];


criarPalavraSecreta();

function criarPalavraSecreta() {
  const indexpalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexpalavra].nome;
  palavraSecretaCategoria = palavras[indexpalavra].categoria;
  console.log(palavraSecretaSorteada);
}


montarPalavraNaTela();

function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] === undefined) {
      if (palavraSecretaSorteada[i] === " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp;";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if (palavraSecretaSorteada[i] === " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
}