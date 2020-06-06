var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite;
var box1,box2,box3;
var engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}



function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

		engine = Engine.create();
		world = engine.world;

		box1 = new Container(315,619,20,80);
		box2 = new Container(485,619,20,80);
		box3 = new Container(400,649,150,20);
		box3.fill=color(255,17,0); 

	var ground_options ={
        isStatic: true
    }
	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);
	 

		
	//	ground  = new Ground(200,390,400,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box1.display();
  drawSprites();
  box2.display();
  drawSprites();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false); 
  }
  
}


/*
function draw(){
    background(0);
    
}*/


