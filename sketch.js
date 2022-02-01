var leftKey, rightKey, upKey, downKey
var leftKeyImg, rightKeyImg, upKeyImg, downKeyImg
var circle1, circle2, circle3, circle4
var scene, sceneIMG
var leftKeyGroup, rightKeyGroup



function preload() {

  sceneIMG=loadImage("bg.jpg")
  leftKeyImg=loadImage("left arrow.png")
//rightKeyImg=loadImage("right arrow.jpg")
}

function setup() {
  canvas = createCanvas(800,700);
  // circle1 = createSprite(200,200,50,50)
  // circle2 = createSprite(350,700,10,10)
   //circle3 = createSprite(500,700,10,10)
   //circle4 = createSprite(650,700,10,10)
   
   scene = createSprite(0,0,800,800)
  scene.addImage(sceneIMG)
  scene.scale = 5

  leftKeyGroup= new Group()
   rightKeyGroup= new Group()



}

function draw() {
 background(0)

 scene.velocityY= 2;
 if(scene.y>800){
   scene.y= scene.height/2
 }

 if(leftKeyGroup.isTouching(circle1)&& keyDown("LEFT_ARROW")){
leftKeyGroup.destroyEach();
 }
//leftArrow()
//rightArrow()
 arrowKeys();
 circles();
 drawSprites()
}

function arrowKeys(){
if(frameCount%80===0){
  leftKey = createSprite(200,50,10,50)
  leftKey.addImage(leftKeyImg)
  leftKey.scale= 0.5
  leftKey.velocityY= 5
  leftKeyGroup.add(leftKey)
}
if(frameCount%40===0){
  rightKey = createSprite(350,50,10,50)
  rightKey.velocityY= 5 
}
if(frameCount%60===0){
  upKey = createSprite(500,50,10,50)
  upKey.velocityY= 5 
}
if(frameCount%45===0){
  downKey = createSprite(650,50,10,50)
  downKey.velocityY= 5 
}

}
/*function leftArrow(){
  leftKey = createSprite(100,40,10,50)
  leftKey.addImage(leftKeyImg)
  leftKey.velocityY= 2
  leftKey.scale= 0.5
  
  leftKeyGroup.add(leftKey)
}
function rightArrow(){
  rightKey = createSprite(300,40,10,50)
  rightKey.addImage(rightKeyImg)
  rightKey.velocityY= 2
 rightKey.scale= 0.5
  
 rightKeyGroup.add(rightKey)
}*/

function circles(){
  circle1 = createSprite(200,600,50,50)
}