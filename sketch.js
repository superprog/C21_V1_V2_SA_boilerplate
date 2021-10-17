var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(100,200,80,30);
  gameObj1.shapeColor = "green";
  gameObj1.debug = true;

  gameObj2 = createSprite(200,200,80,30);
  gameObj2.shapeColor = "green";
  gameObj2.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameObj1)){
   movingRect.shapeColor="yellow";
   gameObj1.shapeColor="blue"
 }
 else{
  movingRect.shapeColor="green";
  gameObj1.shapeColor="green"
 }
  
  drawSprites();
}

function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
return true;
}
else {
  return false;
}
}