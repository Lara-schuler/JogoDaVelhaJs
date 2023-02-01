let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#button-container button');
let mensagemContainer = document.querySelector('#mensagem');
let mensagemText = document.querySelector('#mensagem p');
let escolha; //secondPlayer

//contador
let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //quando alguém clica na caixa
    boxes[i].addEventListener('click', function () {

        let el = checkel(player1, player2);



        //verifica se já tem X ou O

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            //computar jogada
            if (player1 == player2) {
                player1++;

                if(escolha == 'jogador-ai') {
                    //função para executar a jogada

                    jogadaDoComputador();

                    player2++
                }
            } else {
                player2++;
            }

            //checa quem venceu
            checaCondicao();

        }
    });
}

//evento para saber se é 2 jogadores ou IA

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        escolha = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function() {

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);
    });
}

//vê quem vai jogar
function checkel(player1, player2) {
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}

//vê quem venceu
function checaCondicao() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //verifica a horizontal

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    //verifica vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    //verfica diagonal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            declaraVencedor('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            declaraVencedor('o');
        }

    }

    //deu velha

    let contador = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++;
        }

    }

    if(contador == 9) {
        declaraVencedor("Deu velha!");
    }


}

//limpa o jogo, declara o vencedor e atualiza o placar
function declaraVencedor(vencedor) {
   let scoreX = document.querySelector('#placar-1');
   let scoreO = document.querySelector('#placar-2');
   let msg = "";

   if(vencedor == 'x') {

    scoreX.textContent = parseInt(scoreX.textContent) + 1;
    msg ="Jogador 1 venceu!";

   } else if(vencedor == 'o') {

    scoreO.textContent = parseInt(scoreO.textContent) + 1;
    msg ="Jogador 2 venceu!";

   } else {
    msg = "Deu Velha!"
   }

   //exibe mensagem

   mensagemText.innerHTML = msg;
   mensagemContainer.classList.remove("hide");

   //esconde mensagem

   setTimeout(function(){
    mensagemContainer.classList.add("hide");
   }, 3000);

   //zera as jogadas
   player1 = 0;
   player2 = 0;

   //remove o X e O

   let boxestoRemove = document.querySelectorAll(".box div");

   for(let i = 0; boxestoRemove.length; i++){
    boxestoRemove[i].parentNode.removeChild(boxestoRemove[i]);
   }


}

//adicionar lógica da jogada do cpu

function jogadaDoComputador(){
    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        //só preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                contador++;
                break;
            }
            //checagem de quantas estão preenchidas
        } else {
            preenchido++;
        }
    }

    if(contador == 0 && preenchido < 9) {
        jogadaDoComputador(); 
    }
}

