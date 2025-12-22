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

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-bg");
  if (!canvas) return; // segurança se o elemento não existir

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const letters = "01<>[]{}#@$%&*+-/\\|";
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    // leve “fade” para formar o rastro
    ctx.fillStyle = "rgba(11,18,32,0.12)"; // usa seu bg escuro
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // cor neon (accent)
    ctx.fillStyle = "#0c008dff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      // reset aleatório quando chega no fim
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
        drops[i] = 0;
      }
      drops[i] += 0.5;
    }

    requestAnimationFrame(draw);
  }

  draw();
});