let herois = [];

function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function consultarNivel() {
    // Obtém os valores dos campos de entrada
    let nomeHeroi = document.getElementById('username').value;
    let xpHeroi = parseInt(document.getElementById('userxp').value);

    // Verifica se o XP é um número válido
    if (isNaN(xpHeroi)) {
        alert("Por favor, insira um valor numérico para XP.");
        return;
    }

    // Determina o nível do herói
    let nivel = determinarNivel(xpHeroi);

    // Adiciona o herói ao array
    herois.push({ nome: nomeHeroi, xp: xpHeroi });

    // Irá adicionar/remover a classe `box__none`
    const box = document.querySelector('div');
    box.classList.toggle('box__none');   

    // Exibe o resultado na tela
    let resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
}