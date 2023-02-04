
function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraCarro();
    mostraAtor();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }