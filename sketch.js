var fixedRect, movingRect;
var gameobj1,gameobj2,gameobj3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameobj1 = createSprite(350,50,80,20);
gameobj2 = createSprite(200,50,80,20);
gameobj3 = createSprite(150,50,80,20);
gameobj1.velocityX = -5;
gameobj2.velocityX = 5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobj1.shapeColor = "lightblue";
  gameobj2.shapeColor = "blue";
  gameobj3.shapeColor = "darkblue";
}

function draw() {
  background(0,0,0);  
bounce(gameobj1,gameobj2);
  drawSprites();
}
