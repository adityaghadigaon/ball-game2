
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;
var ball1;
var con;
var con1
var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,10,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball1);

  con=Matter.Constraint.create({
    pointA:{x:200,y:50},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1


  })
  World.add(world,con)

  con1=Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0,y:0},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1


  })



  World.add(world,con1)
   
  
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,20);
  ground.show();
  strokeWeight(2)
  stroke(255)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  line(ball.position.x,ball.position.y,ball1.position.x,ball1.position.y)
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
}
  