var jardim;
var gato, gatopara, gatoanda, gatomorre;
var rato, ratopara, ratoprovoca, ratolupa;

function apertar(){

    if (keyDown("left")){
         rato.addAnimation("rataprovocar", ratoprovoca);
         rato.changeAnimation("ratoprovocar");
         rato.frameDelay = 25;

         gato.velocityX = -5;
        gato.addAnimation("gatoandar", gatoanda);
        gato.changeAnimation("gatoandar");
        
    }


}

function preload(){

    jardim = loadImage("garden.png");

    gatopara = loadImage("cat1.png");
    gatoanda = loadAnimation("cat2.png", "cat3.png");
    gatomorre = loadImage("cat4.png");

    ratopara = loadImage("mouse1.png");
    ratoprovoca = loadAnimation("mouse2.png", "mouse3.png");
    ratolupa = loadImage("mouse4.png");

}


function setup(){
    createCanvas(1000,800);

    gato = createSprite(870,680);
    gato.addAnimation("gatoparado", gatopara);
    gato.scale = 0.2;

    rato = createSprite(130,680);
    rato.addAnimation("ratoparado", ratopara);
    rato.scale = 0.2;




}


function draw(){

background (jardim);

if(gato.x - rato.x < gato.width/2 - rato.width/2){
    gato.velocityX = 0;
    gato.addImage("gatofeliz", gatomorre);
    gato.changeImage("gatofeliz");
    gato.x = 300;
    gato.scale = 0.2;

    rato.addImage("ratolupaa", ratolupa);
    rato.changeImage("ratolupaa");
    rato.scale = 0.2;


}

drawSprites();

}