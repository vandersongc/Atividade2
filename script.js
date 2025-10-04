// Aguarda o HTML da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o formulário pelo ID que adicionamos
    const form = document.getElementById('loginForm');

    // Adiciona um "ouvinte" que espera pelo evento de "submit" (envio) do formulário
    form.addEventListener('submit', function(event) {
        // 1. Previne o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 2. Pega os valores digitados nos campos de email e senha
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        // 3. Define as credenciais corretas
        const correctEmail = 'usuario@email.com';
        const correctPassword = '12345';

        // 4. Compara os valores digitados com os valores corretos
        if (email === correctEmail && password === correctPassword) {
            // Se estiverem corretos, libera o acesso redirecionando para 'index.html'
            window.location.href = 'index.html';
        } else {
            // Se estiverem incorretos, exibe uma mensagem de erro
            alert('Email ou senha incorretos. Tente novamente.');
        }
    });
});