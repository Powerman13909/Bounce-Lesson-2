const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var wall1,wall1_options;
var wall2,wall2_options;
var ball,ball_options;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  wall1_options ={
    isStatic : true
  }
  wall2_options = {
    isStatic : true
  }
  wall1 = Bodies.rectangle(200,390,400,50,wall1_options)
  wall2 = Bodies.rectangle(200,10,300,50,wall2_options)

  World.add(world,wall1)
  World.add(world,wall2)


  ball_options = {
    restitution : 1.49
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);
  
}

function draw() {
  background(200); 
   Engine.update(engine);
   fill("green")
   rectMode(CENTER) ;
   rect(wall1.position.x,wall1.position.y,400,50);
   rectMode(CENTER);
   rect(wall2.position.x,wall2.position.y,400,50)
   fill("red")
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);

}