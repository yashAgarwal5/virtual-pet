var dog,happyDog,database,foodS,foodStock;
var dogImg;
var happyImg

function preload()
{
 // dogImg=loadImage("doglmg.png");
 // happpyImg=loadImage("doglmg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
dog=createSprite(250,250,20,20);

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87)

  if (keyWentDown(UP_ARROW)){
    writeSock(foodS);
  }

  drawSprites();

  textSize(20);
  fill("lightyellow")
  text('Note:press UP_ARROW key To feed drago milk',50,40);
  fill("lightyellow")
}

function readStock(data){
foodS=data.val();
}

function writeSock(){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

database.ref('/').update({
  Food:x
})
}