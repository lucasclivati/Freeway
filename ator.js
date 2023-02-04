//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
        }
    if (keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
          yAtor += 3;
        }
        }
      }

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      if (pontosMaiorQueZero()) {
       meusPontos -= 1;
      }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,0));
  textSize(25);
  text(meusPontos, width / 3, 27)
}

function marcaPonto(){
  if(yAtor <15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor < 366;
}