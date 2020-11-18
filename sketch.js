var bullet
var speed
var weight
var wall,thickness
function setup() {
  createCanvas(1600,400);
speed = random(223,321)
weight = random(30,52)
thickness=random(22,83)
bullet = createSprite(50,200,21,50)
bullet.shapeColor = ("white")
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80) 
bullet.velocityX = speed;
}

function draw() {
  background("black");  
  drawSprites();

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness)
    
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0)
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,225,0)
    }
  }  
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}


