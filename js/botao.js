const modal = document.getElementById("modal-alerta");
const btnAbreModal = document.getElementById("abreModalAddPalavra");

btnAbreModal.onclick = function () {
  modal.style.display = "block";
}

const btnFechaModal = document.getElementById("fechaModal");

btnFechaModal.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}