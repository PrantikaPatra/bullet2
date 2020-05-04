var bullet , wall;
var speed , weight;
var thickness;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

bullet = createSprite(50,200,50,10);
bullet.shapeColor=color(255)
bullet.velocityX=20;

wall = createSprite(1200,200,thickness,height/2);

wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0);

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;

  deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);



      if(deformation<10 ){
        wall.shapeColor=color(255,8,0)

      }

      else{
        wall.shapeColor=color(80,220,100)   
      }
    }
  

  drawSprites();
}