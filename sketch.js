
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(width/2-40*2,400,20);
	bob2 = new Bob(width/2-40,400,20);
	bob3 = new Bob(width/2,400,20);
	bob4 = new Bob(width/2+40,400,20);
	bob5 = new Bob(width/2+40*2,400,20);
    roof = new Roof(width/2,100,width/10*3,20);
	rope1 = new Rope(bob1.body,roof.body,-bob1.radius*4,0);
	rope2 = new Rope(bob2.body,roof.body,-bob1.radius*2,0);
	rope3 = new Rope(bob3.body,roof.body,bob1.radius*0,0);
	rope4 = new Rope(bob4.body,roof.body,bob1.radius*2,0);
	rope5 = new Rope(bob5.body,roof.body,bob1.radius*4,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  textSize(15);
  fill(0);
  text("press UP ARROW pull",width/2,70);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
  keyPressed()
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-5});
    fill(0);
    text("press DOWN ARROW to leave",50,150);
	} 
}

