
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ballGroup

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ballGroup = new Balls(400,300,100,100);
	mainBall = new Shooter(100,100)
	sling = new SlingShot()
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ballGroup.display();
 
}



