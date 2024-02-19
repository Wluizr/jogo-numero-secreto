let listaNumerosSorteados = [];
let qtdNumeros = 2;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();



function exibirTextoNaTela(tag, text){
    document.querySelector(tag).innerHTML = text;

    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial(){
    exibirTextoNaTela('H1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${qtdNumeros}`);
}

function gerarNumeroAleatorio(){

    let numeroGerado =  parseInt( Math.random() * qtdNumeros + 1);

    if(listaNumerosSorteados.length == qtdNumeros){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }

    console.log(listaNumerosSorteados);
    listaNumerosSorteados.push(numeroGerado);

    return numeroGerado;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
       exibirTextoNaTela('h1', 'Você acertou');

       textoTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
       exibirTextoNaTela('p', `Parabéns!!! Você encontrou o número secreto  com ${tentativas} ${textoTentativa}`);
       
       document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if( chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é MENOR');
        }else{
            exibirTextoNaTela('p', 'O número secreto é MAIOR');
        }
    }

    limparCampo();
    tentativas++;
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

