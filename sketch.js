const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7;
var triangle1,triangle2,triangle3;

var grnd;

function setup() {
  
  
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  stick1 = new stick(200,200,70,100);
  stick2 = new stick(255,200,40,140);
  stick3 = new stick(145,200,40,140);
  stick4 = new stick(115,200,20,170);
  stick5 = new stick(285,200,20,170);
  stick6 = new stick(320,200,50,200);
  stick7 = new stick(80,200,50,200);

  triangle1 = new head(160,275,240,278,205,200);
  triangle2 = new head(360,185,320,150,290,180);
  triangle3 = new head(40,180,110,176,80,150);

 var staticopt = {

  isStatic : true 

}

 grnd = Bodies.rectangle(200,380,400,10,staticopt);
  World.add(world,grnd);
 
  
}
 



function draw() {
  background("black");
  Engine.update(engine);
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
 
  triangle1.display();
  triangle2.display();
  triangle3.display();
  
  
  
  rectMode(CENTER); 

  rect(grnd.position.x,grnd.position.y,400,10);  
    drawSprites();
}