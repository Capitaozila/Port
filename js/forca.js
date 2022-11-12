let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

function verificarLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaLista(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla, condicao) {
  if (condicao === false) {
    document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#fff";
  } else {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#fff";
  }
}

function comparaLista(letra) {
  const position = palavraSecretaSorteada.indexOf(letra);
  if (position < 0) {
    tentativas--;
    carregaImagemForca();

    if (tentativas === 0) {
      abreModal(
        "Você perdeu!",
        "A palavra secreta era:<br> " + palavraSecretaSorteada
      );
      piscarBotaoJogarNovamente();
    }
  } else {
    mudarStyleLetra("tecla-" + letra, false);
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
    abreModal("Você venceu!", "Parabéns, você acertou a palavra secreta!");
    piscarBotaoJogarNovamente();
  }
}

async function atraso(tempo) {
  return new Promise((resolve) => setTimeout(resolve, tempo));
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('../image/img_forca/forca.png')";
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}

async function piscarBotaoJogarNovamente() {
  while (jogarNovamente === true) {
    document.getElementById("btn-reiniciar").style.backgroundColor = "yellow";
    await atraso(500);
    document.getElementById("btn-reiniciar").style.backgroundColor = "black";
    await atraso(500);
    document.getElementById("btn-reiniciar").style.backgroundColor = "white";
    await atraso(500);
    document.getElementById("btn-reiniciar").style.backgroundColor = "red";
    await atraso(500);
    document.getElementById("btn-reiniciar").style.backgroundColor = "blue";
    await atraso(500);
  }
}

let btnReiniciar = document.querySelector("#btn-reiniciar");
btnReiniciar.addEventListener("click", function () {
  jogarNovamente = false;
  location.reload();
});
