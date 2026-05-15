let tentativas = 3;
let numeroCorreto = Math.floor(Math.random() * 5) +1; //Número aleatório entre 1 e 5


function procurarTesouro(){
    let escolhaJogador = parseInt(document.getElementById('escolha').value);
    if (tentativas > 0){
        if (escolhaJogador === numeroCorreto){
            document.getElementById('resultado').innerText = "Parabéns, você encontrou o tesouro!";
            tentativas = 0;
        } else if (tentativas > 1){
            tentativas--;
            document.getElementById('resultado').innerText = "Você errou! Restam " + tentativas + " tentativas.";
        } else {
            document.getElementById('resultado').innerText = "Game over! O monstro te econtrou e acabaram as tentativas :(";
            tentativas = 0;
        }
    }else {
        document.getElementById('resultado').innerText = "Suas tentativas acabaram!";
    }
}