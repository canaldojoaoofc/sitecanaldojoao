// Função para mostrar a hora atual
function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toLocaleString('pt-BR');
}

// Mostrar hora atual ao carregar a página
showTime();

// Atualizar a hora a cada segundo
setInterval(function () {
  showTime();
}, 1000);

// Adicionar efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Adicionar animação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 300);
  });
});
