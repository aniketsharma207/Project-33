const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var bg;
var snow = [];
var engine, world;
var walk;
var bgSprite;

function preload(){
  bg = loadImage("snow2.jpg");
  walk = loadAnimation("1.png","2.png","3.png","4.png","5.png");
}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;
  bgSprite = createSprite(500,300,1000,600);
  bgSprite.addImage(bg);
  bgSprite.velocityX = 2;
  //bgSprite.scale = 1.2

  if(frameCount % 150 == 0){
    for(var i = 0; i < 100; i ++){
      snow.push(new Snowfall(random(0,1000),random(0,300)))
    }
  }
  boy = createSprite(500,500);
  boy.addAnimation("walking",walk);
  boy.scale = 0.5;
}

function draw() {
  background("light blue");  
  Engine.update(engine);
  for(var i = 0; i < snow.length; i ++){
    snow[i].display();
    snow[i].updateY();
    }

    if(bgSprite.x > 600){
      bgSprite.x = 500;
    }

  drawSprites();
}