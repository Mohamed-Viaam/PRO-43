var backImg, treasureImg, form, system, code, security;
var clue1, clue2, clue3, clueImg;
var score = 0;

function preload() {
  backImg = loadImage("images/backImg.jpg");
  treasureImg = loadImage("images/treasure.jpg");
  clueImg = loadImage("images/clueImg.png");
}

function setup() {
  createCanvas(1000,600);
  security = new Security();
  system = new System();

  clue1 = createSprite(200, 150, 20, 20);
  clue1.addImage(clueImg);
  clue1.scale = 0.8;

  clue2 = createSprite(200, 450, 20, 20);
  clue2.addImage(clueImg);
  clue2.scale = 0.8;

  clue3 = createSprite(800, 450, 20, 20);
  clue3.addImage(clueImg);
  clue3.scale = 0.8;
}

function draw() {
  background(backImg);


  security.display();
  textSize(35);
  fill("white");
  text("Score: " + score, 700, 150);
  

  drawSprites();

  clues();

  if(score === 3) {
    clear()
    background(treasureImg);
    fill("white");
    textSize(35);
    text("TREASURE UNLOCKED", 550, 100);
  }

}