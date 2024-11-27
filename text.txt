const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ground_options;
var ball,ball_options;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground_options ={
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,50,ground_options)
  World.add(world,ground)


  ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);
  
}

function draw() {
  background(200); 
   Engine.update(engine);
   fill("green")
   rectMode(CENTER) ;
   rect(ground.position.x,ground.position.y,400,50);
   fill("red")
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);

}