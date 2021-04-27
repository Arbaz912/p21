var fixedRect, movingRect;

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

  object3= createSprite(200,200,60,60);
  object3.velocityX=3;
  object4 = createSprite(800,200,60,60);
  object4.velocityX=-3;
}

function draw() {
  background(0,0,0);  

 bounceOff(fixedRect,movingRect);

 bounceOff(object3,object4)
  drawSprites();
}

