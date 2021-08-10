var Runner_Running, pathImg, path, runner, left_boundary, right_boundary;
function preload(){
  Runner_Running=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
 }

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200,20,20);
  path.addImage(pathImg);
  path.velocityY=4;
  path.y=path.height/2;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",Runner_Running);
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background("red");
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
 }
 runner.collide(left_boundary);
 runner.collide(right_boundary);
 edges=createEdgeSprites();
 runner.collide(edges[3]);
 
drawSprites();
}
 

