var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(200, 200, 80, 30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 500, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(100, 100, 50, 50);
  box1.shapeColor = "blue";

  box2 = createSprite(300, 100, 50, 50);
  box2.shapeColor = "yellow";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(collisionDetection(movingRect,box1)){
    box1.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    box1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}

