var backgroundImg,deerImg,obstacleImg
var END =0;
var PLAY =1;
var gameState = PLAY;

var score=0;
var gameOver, restart
function preload(){
backgroundImg=loadImage("GOODbg.png")
deerImg=loadImage("deer.png")
spikyspikyImg=loadImage("spikyspiky.png")
spikyspikyImg.scale=0.65
carrotImg=loadImage("carrot.png")
food1Img=loadImage("food1.png")
food2Img=loadImage("food2.png")
obstacleballImg=loadImage("obstacleball.png")
obstacleballImg.scale=0.2
obstaclebladeyImg=loadImage("bladey.png")
obstaclecoronaImg=loadImage("corona.png")
obstaclekifeImg=loadImage("kife.png")
obstacleweaponImg=loadImage("weapon.png")
dedDeerImg=loadImage("dedDeer.png")
}

function setup() {
 createCanvas(800,800)
//  backgroundImg=createSprite(100,150);

// background.addImage(backgroundImg);


// background.velocityX = -5;

 deer = createSprite(50,700,50,50)
 deer.addImage(deerImg);
 deer.scale=0.65

//  obstacle.addImage(spikyspikyImg);
 
 obstacleballImg.scale=0

 ground = createSprite(400,785,800,10)
 ground2 = createSprite(400,390,800,10)
 ground.velocityX=-2
//  backgroundImg.velocityX=-2
 ground.visible=true
 ground2.velocityX=-2
 ground2.visible=false
//  obstacle.addImage(obstacleImg);

 deer.setCollider("rectangle",0,0,300,400);
 deer.debug = false

//  obstaclesGroup = createGroup();
 score = 0;
}

function draw() {

    background(backgroundImg)

 text("Score: "+ score, 500,50);
 if(gameState === PLAY){
 score = score + Math.round(frameCount/60);
 }
spawnBall();
spawnCarrot();
//  if(obstaclesGroup.isTouching(deer)){
//     gameState = END;
// }
if (gameState === END) {
  ground.velocityX = 0;
//  obstaclesGroup.setVelocityXEach(0);
//  obstaclesGroup.setLifetimeEach(-10)
 deer.changeAnimation("dead",dedDeer)
}

if(keyDown("UP_ARROW"))
deer.velocityY=-10
deer.velocityY+=1
deer.collide(ground)
deer.collide(ground2)
// obstacleImg.collide(ground)
if(ground.x<=0)
ground.x=ground.width/2

if(ground2.x<=0)
ground2.x=ground2.width/2

score = score + Math.round(getFrameRate()/50);
   background.velocityX = -(6 + 2*score/150);
// if(backgroundImg.x<=0)
// backgroundImg.x=backgroundImg.width/2
 drawSprites()
}
function spawnBall(){
    if (frameCount % 357 === 0){
      var ball = createSprite(750,720,10,40);
      ball.velocityX = -6;
      ball.scale=0.15
      ball.addImage(obstacleballImg)
    }

}
function spawnCarrot(){
    if (frameCount % 60 === 0){
      var carrot = createSprite(750,720,10,40);
      carrot.velocityX = -6;
      carrot.scale=0.15
      carrot.addImage(carrotImg)
    }

}