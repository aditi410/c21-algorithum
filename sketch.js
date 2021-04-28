var fixedRect,gameobject1,gameobject2, movingRect;
var gameobject3,gameobject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameobject1 = createSprite(680, 400, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;

  gameobject2 = createSprite(750, 400, 50, 80);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;

  gameobject3 = createSprite(10, 10, 50, 80);
  gameobject3.shapeColor = "green";
  gameobject3.debug = true;
gameobject3.velocityX=2;

gameobject4 = createSprite(400, 10, 50, 80);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
gameobject4.velocityX=-2;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 // isTouching(movingRect,fixedRect); //arguments
bounceOff(gameobject3,gameobject4)
 if (isTouching(movingRect,fixedRect))
 {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 if (isTouching(movingRect,gameobject1))
 {
  movingRect.shapeColor = "yellow";
  gameobject1.shapeColor = "yellow";

 }
 else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
 }




  drawSprites();
}



  
