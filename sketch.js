var bg;
var spaceCraft, capsule;
var hasDocked = false;
var spacecraftImg, capsuleImg;

function preload(){
  bg = loadImage("spacebg.jpg");
  capsuleImg = loadImage("spacecraft1.png");
  spacecraftImg = loadImage("iss.png");
}

function setup() {
  createCanvas(1200,800);
  spaceCraft = createSprite(400, 200, 50, 50);
  spaceCraft.addImage(spacecraftImg);
  
  capsule = createSprite(800, 600, 50, 50);
  capsule.addImage(capsuleImg);
  capsule.scale = 0.5;
  
}

function draw() {
  background(bg);  

  if(keyDown(UP_ARROW)){
    capsule.y -= 10;
  }

  if(keyDown(DOWN_ARROW)){
    capsule.y += 10;
  }

  if(keyDown(RIGHT_ARROW)){
    capsule.x += 10;
  }

  if(keyDown(LEFT_ARROW)){
    capsule.x -= 10;
  }

  if(capsule.x > 300 && capsule.y < 220 && capsule.x < 400 && capsule.y > 150){
    hasDocked = true;
  }
  drawSprites();

  if(hasDocked){
    textSize(20);
    fill("white");
    text("DOCKED SUCCESSFULLY", 500, 600);
    
  }
}