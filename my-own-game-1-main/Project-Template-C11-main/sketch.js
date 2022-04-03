const Engine  = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies


var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var obs;
var gameState = 1
var engine,world;

function preload(){
  pathImg = loadImage("Path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  potImg = loadImage("gold pot.png")
  bombImg = loadImage("bomb.png")
  coinImg=loadImage("coin.png")
}

function setup(){
  
  createCanvas(800,900);
  engine = Engine.create()
  world = engine.world
// Moving background
// path=createSprite(400,50);
// path.addImage(pathImg);
// path.velocityY = 4;
// path.scale=3; 





pot = createSprite(width/2,-3000)
pot.addImage(potImg)
pot.scale = 0.6

//creating boy running
boy = createSprite(180,750,30,30);
//boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(80,500,200,1000);


leftBoundary.visible = false;


rightBoundary=createSprite(725,500,200,1000);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  Engine.update(engine)
  
  if (gameState ==1){
  boy.y = camera.y+300
  leftBoundary.y = camera.y
  rightBoundary.y = camera.y
  image(pathImg,0,-height*4,width,height*5)
 // path.velocityY = 4
 spawnBomb();
  
  if(keyDown("right")){
    boy.x+=10;
  }
  
  if(keyDown("left")){
    boy.x-=10;
  }
  if(keyDown(UP_ARROW)){
    // boy.y+=10;
    camera.y = camera.y-10
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
 if (boy.y == -3000){
  gameState = 2
 }
}
if(gameState ==2){

  background(0)
  textSize(50)
  fill("white")
  stroke("yellow")
  strokeWeight(3)
  text("You Win",camera.x-100,camera.y)
  boy.visible = false
  pot.visible = false
}
  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}

function spawnBomb(){
  if(frameCount%100 == 0){
    bomb = createSprite(camera.x,camera.y-300)
    bomb.addImage(bombImg)
    bomb.scale = 0.2
  }
}

function spawnCoins(){
  if(frameCount%100 == 0){
    coin = createSprite(camera.x,camera.y-200)
    coin.addImage(coin.pmg)
    coin.scale = 0.2
  }
}

