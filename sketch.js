var runner,run_running
var road,road_image
var invisiblewall,invisiblewall2
function preload(){
  //pre-load images
  run_running=loadAnimation("Runner-1.png","Runner-2.png")
  road_image=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 road = createSprite(200,200,40,20);
 road.addAnimation("road",road_image)
road.scale=1.3
road.velocityY=4
runner= createSprite(100,300);
runner.addAnimation("runner",run_running)
runner.scale=0.1
invisiblewall=createSprite(400,160,10,500)
invisiblewall2=createSprite(20,200,5,400)
invisiblewall.visible=false
invisiblewall2.visible=false
}

function draw() {
  background(0);
  if(road.y > 400){
    road.y=height/2;
  }
runner.x=mouseX
runner.collide(invisiblewall)
runner.collide(invisiblewall2)
runner.bounceOff(invisiblewall2)
/*if(runner.collide(invisiblewall)){
  velocityY=0.0
}
if(runner.collide(invisiblewall2)){
  velocityY=0.0
}
*/




  drawSprites()
}
