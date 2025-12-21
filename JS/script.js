// Função para abrir
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

// Função para fechar
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Fechar clicando fora
window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
};