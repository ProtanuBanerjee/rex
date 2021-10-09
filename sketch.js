var trex, trex_running , edges,ground,groundimg
var cloud,cloudimg
//preload
function preload(){
  trex_running=loadAnimation('trex1.png','trex2.png',"trex3.png")
 groundimg=loadImage('2.png')
 cloudimg=loadImage("cloud.png")
}
//preload end
// function setup
function setup() 
{
  createCanvas(600,200);
  trex=createSprite(50,160,20,50)
  trex.addAnimation('running',trex_running)
// trex scaleing
trex.scale=0.5
edges=createEdgeSprites()
// grund create
ground=createSprite(200,180,400,20);
ground.addImage(groundimg);
}          
// function setup end 
function draw() 
{
  background(200);
  if (ground.x<0){
  ground.x=ground.width/2;  
  }
  ground.velocityX=-2
  //jumping
if(keyDown("space")&& trex.y>= 100) {
  trex.velocityY = -5;
}
trex.velocityY= trex.velocityY+0.5;
//jumping end
//trex dont fall
trex.collide(ground)
//trex ground end
spawncloud();
drawSprites();

}
function spawncloud()
{  
  if(frameCount%80===0)
  {
  cloud=createSprite(600,100,40,15)
  cloud.addImage(cloudimg);
  cloud.scale=0.6;
  cloud.velocityX=-3;
  cloud.y=Math.round(random(15,55));
  cloud.depth=trex.depth
  trex.depth+=1;
}}

