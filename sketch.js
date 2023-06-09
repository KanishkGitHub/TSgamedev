var trex, trex_running,waveImg,wave,waveG,roar
var forest,forestImage,introForest
var burger,burgerImage,burgerG,brSound
var mango,mangoImage,mangoG,mSound
var bomb,bombImage,bombG,bSound
var electric,electricImage,electricG,eSound
var gameover,gameoverImage,gameoverSound
var boss,boss_flying,bossG,dieSound
var score=0
var gameState


function preload(){
trex_running = loadAnimation("trex-0.png","trex-10.png","trex-20.png","trex-30.png","trex-40.png","trex-50.png")
forestImage = loadImage("light forest aakhree umeed.jpg")
bombImage = loadImage("bomb-154456_960_720.webp")
electricImage = loadImage("unnamed.png")
burgerImage = loadImage("1503001226-sonic-jr-burger.png")
mangoImage = loadImage("928_1647320862435.webp")
boss_flying = loadAnimation("8c598e19095371.562d6e420261c (1)-0.png","8c598e19095371.562d6e420261c (1)-1.png","8c598e19095371.562d6e420261c (1)-2.png","8c598e19095371.562d6e420261c (1)-3.png","8c598e19095371.562d6e420261c (1)-4.png","8c598e19095371.562d6e420261c (1)-5.png","8c598e19095371.562d6e420261c (1)-6.png","8c598e19095371.562d6e420261c (1)-7.png","8c598e19095371.562d6e420261c (1)-8.png","8c598e19095371.562d6e420261c (1)-9.png","8c598e19095371.562d6e420261c (1)-10.png","8c598e19095371.562d6e420261c (1)-11.png","8c598e19095371.562d6e420261c (1)-12.png","8c598e19095371.562d6e420261c (1)-13.png","8c598e19095371.562d6e420261c (1)-14.png","8c598e19095371.562d6e420261c (1)-15.png","8c598e19095371.562d6e420261c (1)-16.png","8c598e19095371.562d6e420261c (1)-17.png","8c598e19095371.562d6e420261c (1)-18.png","8c598e19095371.562d6e420261c (1)-19.png")
waveImg = loadImage("sound.png")
gameoverSound = loadSound("mixkit-cartoon-whistle-game-over-606.wav")
eSound = loadSound("mixkit-lightning-whip-1508.wav")
bSound = loadSound("mixkit-firework-rockets-exploding-in-the-sky-2993.wav")
mSound = loadSound("mixkit-chewing-something-crunchy-2244.wav")
brSound = loadSound("mixkit-chewing-something-crunchy-2244.wav")
//dieSound  = loadSound("dinosaur-growl-106744.mp3")
roar = loadSound("dinosaur-4-104903.mp3")
introForest = loadImage("istockphoto-1312993170-612x612.jpg")

}

function setup(){
  createCanvas(920, 300);
  
  forest = createSprite(120,90,50,20);
  forest.addImage("forest",forestImage);
  forest.velocityX=-4
  forest.scale=1.5
  

  trex = createSprite(120,200,30,50);
  trex.addAnimation("running", trex_running);

  //gameState===0
  score=0
  bossLife=5
  
  
  burgerG= new Group()
  mangoG= new Group()
  bombG= new Group()
  electricG= new Group()
  bossG= new Group()
  waveG= new Group()


}

function draw() {
  
  background(introForest)
  textSize(40)
  stroke(100)
  fill("black")
  text("Instructions",350,30)
  textSize(20)
  stroke(100)
  fill("black")
  text("Hello!!! I am Kanishk Verma",20,90)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("Use arrow keys, and press left arrow whole time while playing the Dinosaur life game.",20,120)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("To see instructions just release the left arrow key.",20,150)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("Eat mango and burger to increase score and avoid bomb and electric shocker.",20,180)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("After score 500 your new level starts and the you can growl",20,210)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("After score 500 get ready to face the BOSS. To defeat it growl at it by pressing right arrow.",20,240)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("DO NOT GO OUTSIDE THE FRAME!",20,270)
  textSize(20)
  stroke(100)
  fill("yellow")
  text("press left arrow key to start the game and press it whole time.",20,292)
  if(keyIsDown(LEFT_ARROW)){
   
 
  trex.scale=0.25

  if(forest.x < 0){
    forest.x = width/2
  } 
if(keyDown("UP_ARROW")){
trex.y=trex.y-2
}

if(keyDown("DOWN_ARROW")){
  trex.y=trex.y+2
  }

  if(score<0){
    trex.destroy()
    electricG.destroyEach()
    mangoG.destroyEach()
    bossG.destroyEach()
    burgerG.destroyEach()
   trex.destroy()
   bombG.destroyEach()
 
  }

  if(score>500){
    if(keyDown("UP_ARROW")){
      trex.y=trex.y-5
     
      }
      
      if(keyDown("DOWN_ARROW")){
        trex.y=trex.y+5
        }
  }
 
  if(trex.y>300){
    trex.destroy()
    gameoverSound.play()
      }
if(trex.y<0){
  trex.destroy()
  gameoverSound.play()
   }
   if(waveG.isTouching(bossG)){
    bossLife-=1
   waveG.destroyEach()
 } 
 if(bossLife<1){
  bossG.destroyEach()
  //dieSound.play()
 } 
 if (trex.isTouching(bossG)){
    electricG.destroyEach()
    mangoG.destroyEach()
    bossG.destroyEach()
    burgerG.destroyEach()
   trex.destroy()
   bombG.destroyEach()
   gameoverSound.play()
 }
  if (trex.isTouching(mangoG)){
     score+=150
    mangoG.destroyEach()
    mSound.play()
  }
  if (trex.isTouching(bombG)){
    electricG.destroyEach()
    mangoG.destroyEach()
    bombG.destroyEach()
    burgerG.destroyEach()
   trex.destroy()
   bSound.play()
  }
 if (trex.isTouching(electricG)){
    score-=30
    electricG.destroyEach()
    eSound.play()
  }
  if (trex.isTouching(burgerG)){
    score+=100
    burgerG.destroyEach()
    brSound.play()
  }

    
    createBurger()
    createMango()
    createBomb()
    createElectric()
    if(score>500){
      
      createBoss()

      if(keyDown("Right_ARROW")){
         createWave()
         roar.play()
      }
    }



    drawSprites();
    textSize(20)
    stroke(100)
    fill("red")
    text("Score:"+score,12,50)
    textSize(20)
    stroke(100)
    fill("red")
    text("BossLife:"+bossLife,180,50)
   

  }
}
function createBoss(){
  if (World.frameCount % 500==0){
  var boss = createSprite(1100,bossG.y=trex.y,10,10)
  boss.addAnimation("flying",boss_flying)
  boss.velocityX = -2
  boss.lifetime = 10000
 boss.scale = 0.5
 bossG.add(boss)
  }
}

function createWave(){
  if (World.frameCount % 10==0){
  wave = createSprite(300,waveG.y=trex.y-9,50,50)
  wave.addImage(waveImg)
  wave.scale=0.5
  wave.velocityX=7
  waveG.add(wave)
  }
}

function createBurger(){
  if (World.frameCount % 230==0){
  var burger = createSprite(1100,Math.round(random(20,200)),10,10)
  burger.addImage(burgerImage)
  burger.velocityX = -5
  burger.lifetime = 300
  burger.scale = 0.06
  burgerG.add(burger)
  }
}


function createBomb(){
  if (World.frameCount % 250==0){
  var bomb = createSprite(1100,Math.round(random(20,200)),10,10)
  bomb .addImage(bombImage)
  bomb.velocityX = -6
  bomb.lifetime = 300
  bomb.scale=0.05
  bombG.add(bomb)
  }
}
function createMango(){
  if (World.frameCount % 300==0){
  var mango = createSprite(1100,Math.round(random(20,200)),10,10)
  mango .addImage(mangoImage)
  mango.velocityX = -5
  mango.lifetime = 300
  mango.scale=0.09
  mangoG.add(mango)
  }
}
function createElectric(){
  if (World.frameCount % 315==0){
  var electric = createSprite(1100,Math.round(random(20,200)),10,10)
  electric .addImage(electricImage)
  electric.velocityX = -9
  electric.lifetime = 300
  electric.scale=0.08
  electricG.add(electric)
  }
}












