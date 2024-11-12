
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");
const quantidadeCapitulos = 10; //variável de controle que determina a quantidade de capítulos
let estaTocando = false;//variável de controle que inicia como false controlando o estado de execução do áudio
let capitulo = 1;//variável de controle que garante o início da execução no capítulo 1


function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play"); //remove o ícone de play do botão
    botaoPlayPause.classList.add("bi-pause");//remove o ícone de pause do botão
    estaTocando = true;//altera o estado da variável para true para que a função tocarOuPausarFaixa execute a condição pausarFaixa no click do botão
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause");//remove o ícone de pause do botão
    botaoPlayPause.classList.add("bi-play");//remove o ícone de play do botão
    estaTocando = false;//altera o estado da variável para false para que a função tocarOuPausarFaixa execute a condição tocarFaixa no click do botão
}

function tocarOuPausarFaixa(){ // função que determina que se a variável estaTocando seja True, executa a função para pausar a faixa. Caso contrário executa a função para tocar a faixa
    if (estaTocando===true) {
        pausarFaixa();
    }
    else{
        tocarFaixa();
    }
}

function proximoCapitulo(){// função que avança a faixa para o próximo capítulo, incrementando a variável capítulo se a variável capítulo for menor do que a variável de controle quantidadeCapitulos, caso a condição não seja verdadeira, a variável capitulo recebe 1, voltando à primeira faixa
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audioCapitulo.src = "assets/books/dom-casmurro/" + capitulo + ".mp3";//atualiza a url do audio
    nomeCapitulo.innerText = "Capítulo " + capitulo; //atualiza o texto com o capítulo atual
    tocarFaixa();
}

function capituloAnterior(){// função que volta a faixa para o capítulo anterior. Se a variável capitulo for igua a 1, a variável capítulo recebe o valor de quantidadeCapitulos, voltando a faixa para o capítulo 10. Caso contrário, a variável capítulo será decrementada, retornando à faixa anterior
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos;
    }else{
        capitulo -= 1;
    }
    audioCapitulo.src = "assets/books/dom-casmurro/" + capitulo + ".mp3";//atualiza a url do audio
    nomeCapitulo.innerText = "Capítulo " + capitulo; //atualiza o texto com o capítulo atual
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);// aciona a função tocarOuPausarFaixa quando houver click no botão para Tocar ou Pausar a faixa
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);//aciona a função próximo campitulo quando houver click no botao de Adiantar a faixa
botaoCapituloAnterior.addEventListener("click", capituloAnterior);//aciona a função campitulo anterior quando houver click no botao de Voltar a Faixa
audioCapitulo.addEventListener("ended", proximoCapitulo);//aciona a função próximo capitulo quando o evento da reprodução do audio atual terminar, executando a função próximo capitulo, iniciando o próximo capitulo automaticamente