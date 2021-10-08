const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world;
var box,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  var box_option = {
    restitution:1.0


  }
  box = Bodies.rectangle(200,200,30,30,box_option)
  World.add(world,box)

var ground_option={
  isStatic:true
}
ground = Bodies.rectangle(0,350,800,30,ground_option);
World.add(world,ground)
 
}

function draw() {
  background("black");  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,600,30);
rect(box.position.x,box.position.y,30,30);
   
  drawSprites();
}