const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var helicopter, helicopter_image;
var package, package_image;

var ground;

var box1, box2, box3;

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

	var ground_options = {
		isStatic:true
	}

	ground = createSprite(width / 2, height - 35, width, 10);
	ground.shapeColor = color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
	World.add(world, ground);

	box1 = new Box(400, 640, 100, 20);
	box2 = new Box(460, 590, 20, 100);
	box3 = new Box(340, 590, 20, 100);

	Engine.run(engine);
}


function draw() {
	background(0);

	Engine.update(engine);

	rectMode(CENTER); 

	if(keyDown(DOWN_ARROW) && package.y < 625){
		package.velocityY = 2;
	}
	if(package.y >= 605){
		package.velocityY = 0;
	}

	box1.display();
	box2.display();
	box3.display();

	console.log(package.y)

	drawSprites();
}



