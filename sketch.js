const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var helicopter, helicopter_image;
var package, package_image;

var ground;

function preload()
{
	helicopter_image=loadImage("helicopter.png")
	package_image=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	package = createSprite(width / 2, 200, 10, 10);
	package.addImage(package_image)
	package.scale=0.2
	World.add(world, package);

	helicopter = createSprite(width / 2, 200, 10, 10);
	helicopter.addImage(helicopter_image)
	helicopter.scale=0.6
	World.add(world, helicopter);

	ground = createSprite(width / 2, height - 35, width, 10);
	ground.shapeColor = color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
	background(0);

	Engine.update(engine);

	rectMode(CENTER); 

	if(keyDown(DOWN_ARROW) && package.y < 625){
		package.velocityY = 2;
	}
	if(package.y >= 625){
		package.velocityY = 0;
	}

	drawSprites();
}



