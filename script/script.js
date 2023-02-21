// Detectar quando o card é exibido na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
});

// Observar todos os elementos com a classe "card"
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
