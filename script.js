// script.js

// Animações de entrada ao rolar
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll();

  // Feedback aprimorado do formulário
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
      let erro = '';
      if (!nome) erro = 'Por favor, preencha o nome.';
      else if (!email) erro = 'Por favor, preencha o email.';
      else if (!mensagem) erro = 'Por favor, escreva sua mensagem.';
      if (erro) {
        form.classList.remove('form-loading');
        alert(erro);
        return;
      }
      form.classList.add('form-loading');
      setTimeout(() => {
        form.classList.remove('form-loading');
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        form.reset();
      }, 1200);
    });
  }

  // Rolagem suave para navegação
  document.querySelectorAll('a.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Garantir botão WhatsApp flutuante
  if (!document.querySelector('.whatsapp-float')) {
    const wa = document.createElement('a');
    wa.href = 'https://wa.me/244923954828';
    wa.className = 'whatsapp-float';
    wa.target = '_blank';
    wa.setAttribute('aria-label', 'WhatsApp');
    wa.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.472 19.458c-.355-.177-2.1-1.037-2.424-1.155-.324-.119-.56-.177-.797.177-.237.355-.917 1.155-1.125 1.392-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.857-1.763-1.056-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.62.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.62-.089-.177-.797-1.92-1.09-2.63-.287-.691-.58-.597-.797-.608-.207-.009-.444-.011-.68-.011-.237 0-.62.089-.945.444-.324.355-1.24 1.211-1.24 2.951 0 1.74 1.267 3.422 1.444 3.659.178.237 2.5 3.82 6.063 5.207.849.292 1.51.466 2.027.596.851.203 1.627.174 2.24.106.683-.077 2.1-.858 2.397-1.687.296-.83.296-1.54.207-1.687-.089-.148-.324-.237-.68-.414z" fill="#fff"/></svg>`;
    document.body.appendChild(wa);
  }
}); 