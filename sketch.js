var gamestate = "serve";
var startImg, gameoverImg, bgImg, logoImg;

function preload() {
  startImg = loadImage("images/start.png");
  gameoverImg = loadImage("images/gameOver.png");
  bgImg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  form = new Form()
}

function draw() {
  background("white");

  drawSprites();

  if (gamestate === "serve") {
    form.replaceImg();
    console.log("Lollllllllllllllllll")
  }
  else if (gamestate === "Play") {
    

  }
}

