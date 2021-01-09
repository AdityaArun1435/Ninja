  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg 
var ninja 
var ninjaImg
var scenery

function preload(){
    
bg= loadImage("desertbg/png/Bg.png")
ninjaImg=loadAnimation("Idle/Idle__001.png","Idle/Idle__002.png","Idle/Idle__003.png","Idle/Idle__004.png","Idle/Idle__005.png","Idle/Idle__006.png","Idle/Idle__007.png",
"Idle/Idle__008.png","Idle/Idle__009.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;
  createCanvas(1200,800)
scenery=createSprite(500,300,100,50)
  scenery.addImage(bg)
  scenery.scale=1.2

  ninja= createSprite(500,300,20,20)
  ninja.addAnimation("ninja",ninjaImg)
  ninja.scale=0.5
  
}

function draw(){
    Engine.update(engine);
    background("yellow"); 
    //scenery.velocityX=-2
   
    
   
drawSprites();
}





