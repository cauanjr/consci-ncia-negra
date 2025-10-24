// Função para alterar o estilo da página quando o botão é clicado
document.getElementById('change-style').addEventListener('click', () => {
    const body = document.body;
    const currentColor = body.style.backgroundColor;

    if (currentColor === 'rgb(30, 30, 30)') {
        // Trocar para um estilo mais claro
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#333';
        document.querySelector('header').style.backgroundColor = '#444';
        document.querySelector('button').style.backgroundColor = '#555';
        document.querySelector('button').style.color = '#ddd';
    } else {
        // Reverter para o estilo original
        body.style.backgroundColor = '#1e1e1e';
        body.style.color = '#f5f5f5';
        document.querySelector('header').style.backgroundColor = '#333';
        document.querySelector('button').style.backgroundColor = '#ff6347';
        document.querySelector('button').style.color = 'white';
    }
});
