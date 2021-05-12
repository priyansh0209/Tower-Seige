const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block22 = new Block(640,175,30,40);
  block33 = new Block(670,175,30,40);
  block44 = new Block(700,175,30,40);
  block55 = new Block(730,175,30,40);
  block66 = new Block(760,175,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block88 = new Block(670,135,30,40);
  block99 = new Block(700,135,30,40);
  block1010 = new Block(730,135,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block1414 = new Block(700,95,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  polygon = new Polygon(100,250,20,20);

  chain=new Chain(polygon.body,{x:150,y:250});


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  chain.display();
  polygon.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block22.display();
  block33.display();
  block44.display();
  block55.display();
  block66.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block88.display();
  block99.display();
  block1010.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block1414.display();
  fill("grey");
  block16.display();
  fill("yellow");
  chain.display();
  
strokeWeight(10)
stroke("black")
fill("rose")
textSize(20);
textFont("Elephanta")
text("Press the space key to get second chance",50,50)


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    chain.fly();
  }
  
  function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(polygon.body,{x:50,y:250});
      chain.attach(polygon.body);
    }
  }
