var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

spaeed = random(55, 90);
weight = random(400, 1500);

car=createSprite(50, 200, 50, 50);

wall=createSprite(1500, 200, 60, 200);
wall.shapeColour(80, 80, 80);
}

function draw() {
  background(255,255,255);

car.velocityX = speed;

if(wall.x - car.x < (car.width + wall.width)/2){

  car.velovityX = 0}

  var deformation = 0.5 * width * speed * speed/22509;

  if(deformation > 180)
  {car.shapeColour(255, 0, 0)}

if(deformation<100 && deformation>100){
  car.shapeColour(230, 230, 0)
}

if(deformation<100){
  car.shapeColour(0, 255, 0)
}

  drawSprites();
}