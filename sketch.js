
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(0,350,3200,30);
  paper = new Paper(350,200);
  
  side1 = new Dustbin(1100,290,10,90);
  side2 = new Dustbin(1140,340,90,10);
  side3 = new Dustbin(1190,290,10,90);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  

  ground.display();
  paper.display();

  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}

function keyPressed() {    
    if(keyCode === UP_ARROW) {
        
        Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});

    }

}