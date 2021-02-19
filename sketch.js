var fixedRect, movingRect;
var gameO1, gameO2, gameO3, gameO4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameO1 = createSprite(600,200,40,40);
  gameO1.velocityY = 4;
  gameO2 = createSprite(600,450,60,60);
  gameO2.velocityY = -6;
  gameO3 = createSprite(500,500,75,30);
  gameO3.velocityX = -3;
  gameO4 = createSprite(100,500,30,75);
  gameO4.velocityX = 7;
}

function draw() {
  background(0,0,0);  
bounceOff(gameO1,gameO2);
bounceOff(gameO3,gameO4);

  
  drawSprites();
}

