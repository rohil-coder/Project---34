
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var pendulum1,pendulum2,pendulum3, pendulum4,pendulum5;
var sling1,sling2,sling3, sling4,sling5;
var world;


function setup() 
{
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = 
	{
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);
	pendulumDiameter=40;

	startpendulumPositionX=width/2;
	startpendulumPositionY=height/4+500;
	pendulum1 = new Pendulum(startpendulumPositionX-pendulumDiameter*2, startpendulumPositionY, pendulumDiameter);
	pendulum2 = new Pendulum(startpendulumPositionX-pendulumDiameter, startpendulumPositionY, pendulumDiameter);
	pendulum3 = new Pendulum(startpendulumPositionX, startpendulumPositionY, pendulumDiameter);
	pendulum4 = new Pendulum(startpendulumPositionX+pendulumDiameter, startpendulumPositionY, pendulumDiameter);
	pendulum5 = new Pendulum(startpendulumPositionX+pendulumDiameter*2, startpendulumPositionY, pendulumDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	sling1 = new Sling(pendulum1.body);
	sling2 = new Sling(pendulum2.body);
	sling3 = new Sling(pendulum3.body);
	sling4 = new Sling(pendulum4.body);
	sling5 = new Sling(pendulum5.body);

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	Engine.run(engine);
  
}


function draw() 
{
	engine.update(engine);
	rectMode(CENTER);
	background(230);
	roofObject.display();

	sling1.display()
	sling2.display()
	sling3.display()
	sling4.display()
	sling5.display()	
	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
}

function mouseDragged()
{
	Matter.body.setPosition(pendulum1.body, {x:mouseX, y:mouseY});
}






