var tom,tomImg;
var jerry,jerryImg;
var garden,gardenImg;

function preload() {
  tomImg=loadImage("cat1.png");
  tomImg2=loadImage("cat2.png")
  jerryImg=loadImage("mouse1.png");
  gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
   tom=createSprite(650,700);
   tom.addImage(tomImg)
   tom.scale=0.08
   jerry=createSprite(20,700);
   jerry.addImage(jerryImg);
   jerry.scale=0.08
   
  
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("cat2.png",tomImg);
        tom.changeAnimation("cat2.png");
    }
    drawSprites();

tom.display();
jerry.display();



keyPressed()
}


function keyPressed(){
if(keyDown("space")){
	jerry.x=jerry.x+20
    
	jerry.frameDelay=25
}



  


}
