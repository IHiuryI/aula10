function clicar() {
    let area = document.getElementById ("area");
    area.innerHTML = "Você clicou!";
    area.style.background = "red";
}

function entrar() {
    let area = document.getElementById ("area");
    area.innerHTML = 'Entrou!';
}

function sair() {
    let area = document.getElementById ("area");
    area.innerHTML = 'Saiu!';
    area.style.background = 'none';
}