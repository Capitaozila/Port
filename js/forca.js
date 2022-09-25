let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [palavra001 = {
    nome: "IRLANDA", categoria: "LUGAR"
}, palavra002 = {
    "nome": "BAHIA", "categoria": "LUGAR"
}, palavra003 = {
    nome: "PARIS", categoria: "LUGAR"
}, palavra004 = {
    nome: "LONDRES", categoria: "LUGAR"
}, palavra005 = {
    nome: "MADRI", categoria: "LUGAR"

}, palavra006 = {
    nome: "MOSCOU", categoria: "LUGAR"
},

    palavra007 = {
        nome: "SALVADOR", categoria: "LUGAR"
    }, palavra008 = {
        nome: "SANTOS", categoria: "LUGAR"

    },

    palavra009 = {
        nome: "SÃO PAULO", categoria: "LUGAR"

    },

    palavra010 = {
        nome: "RIO DE JANEIRO", categoria: "LUGAR"
    }, palavra011 = {
        nome: "BRASILIA", categoria: "LUGAR"
    },

    palavra012 = {
        nome: "PORTO ALEGRE", categoria: "LUGAR"
    },

    palavra013 = {
        nome: "CURITIBA", categoria: "LUGAR"
    },

    palavra014 = {
        nome: "BELO HORIZONTE", categoria: "LUGAR"
    },

    palavra015 = {
        nome: "MANAUS", categoria: "LUGAR"
    },

    palavra016 = {
        nome: "RECIFE", categoria: "LUGAR"
    },

    palavra017 = {
        nome: "JOINVILLE", categoria: "LUGAR"
    },

    palavra018 = {
        nome: "FLORIANOPOLIS", categoria: "LUGAR"
    },

    palavra019 = {
        nome: "NATAL", categoria: "LUGAR"
    },

    palavra020 = {
        nome: "FORTALEZA", categoria: "LUGAR"
    },

    palavra021 = {
        nome: "ARACAJU", categoria: "LUGAR"
    }, palavra022 = {
        nome: "PALMAS", categoria: "LUGAR"
    },

    palavra023 = {
        nome: "CAMPO GRANDE", categoria: "LUGAR"
    }, palavra024 = {
        nome: "VITORIA", categoria: "LUGAR"
    }, palavra025 = {
        nome: "PORTO VELHO", categoria: "LUGAR"
    }, palavra026 = {
        nome: "BOA VISTA", categoria: "LUGAR"
    },

    palavra027 = {
        nome: "MACAPA", categoria: "LUGAR"
    },

    palavra028 = {
        nome: "RIO BRANCO", categoria: "LUGAR"
    },

    palavra029 = {
        nome: "MACEIO", categoria: "LUGAR"

    },

    palavra030 = {
        nome: "TERESINA", categoria: "LUGAR"

    },

    palavra031 = {
        nome: "SAO LUIS", categoria: "LUGAR"
    },

    palavra032 = {
        nome: "CUIABA", categoria: "LUGAR"
    },

    palavra033 = {
        nome: "BELEM", categoria: "LUGAR"
    },

    palavra034 = {
        nome: "PORTO VELHO", categoria: "LUGAR"

    },

    palavra035 = {
        nome: "BRASIL", categoria: "LUGAR"
    },

    palavra036 = {
        nome: "ALEMANHA", categoria: "LUGAR"
    },

    palavra037 = {
        nome: "ARGENTINA", categoria: "LUGAR"
    },

    palavra038 = {
        nome: "AUSTRALIA", categoria: "LUGAR"
    },

    palavra039 = {
        nome: "BOLIVIA", categoria: "LUGAR"
    },

    palavra040 = {
        nome: "TUTOIA", categoria: "LUGAR"
    },

    palavra041 = {
        nome: "banana", categoria: "FRUTA"
    },

    palavra042 = {
        nome: "abacaxi", categoria: "FRUTA"
    },

    palavra043 = {
        nome: "abacate", categoria: "FRUTA"
    },

    palavra044 = {
        nome: "acerola", categoria: "FRUTA"
    },

    palavra045 = {
        nome: "amora", categoria: "FRUTA"
    },

    palavra046 = {
        nome: "ameixa", categoria: "FRUTA"
    },

    palavra047 = {
        nome: "cacau", categoria: "FRUTA"
    },

    palavra048 = {
        nome: "goiaba", categoria: "FRUTA"
    },

    palavra049 = {
        nome: "buriti", categoria: "FRUTA"
    },

    palavra050 = {
        nome: "cereja", categoria: "FRUTA"
    },

    palavra051 = {
        nome: "caneta", categoria: "OBJETO"
    },

    palavra052 = {
        nome: "caderno", categoria: "OBJETO"
    },

    palavra053 = {
        nome: "lapis", categoria: "OBJETO"
    },

    palavra054 = {
        nome: "borracha", categoria: "OBJETO"
    },

    palavra055 = {
        nome: "copo", categoria: "OBJETO"
    },

    palavra056 = {
        nome: "garrafa", categoria: "OBJETO"
    },

    palavra057 = {
        nome: "caneca", categoria: "OBJETO"
    },

    palavra058 = {
        nome: "copo", categoria: "OBJETO"
    },

    palavra059 = {
        nome: "hipopotamo", categoria: "ANIMAL"
    },

    palavra060 = {
        nome: "elefante", categoria: "ANIMAL"
    }


]

criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexpalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexpalavra].nome;
    palavraSecretaCategoria = palavras[indexpalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] === undefined) {
            listaDinamica[i] = "&nbsp;";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificarLetraEscolhida(letra) {
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaLista(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.backgroundColor = "#c71585";
    document.getElementById(tecla).style.color = "#fff";
}

function comparaLista(letra) {
    const position = palavraSecretaSorteada.indexOf(letra);
    if (position < 0) {
        tentativas--;
    } else {
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] === letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] !== listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria === true) {
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_1.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('../image/img_forca/forca_6.png')";
            break;
    }
}