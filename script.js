// script.js

document.addEventListener('DOMContentLoaded', function() {
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
        alert(erro);
        return;
      }
      // Simula envio
      alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
      form.reset();
    });
  }
}); 