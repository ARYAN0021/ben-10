 const Engine = Matter.Engine;
 const World = Matter.World;
 const Constraint=Matter.Constraint;
 const Bodies = Matter.Bodies;

 var engine,world
var bg;
var flag;
 
function preload() {
//preload the images here
//bg=loadImage("images (23).jpg")
//ben1=loadImage("images (3).jpg")
}

function setup() {
  createCanvas(1400, 700);
  // create sprites here

  engine=Engine.create();
  world = engine.world;
  
hero =new Hero(200,400,160,160)
  ground=new Ground(490,450,1000,20)
  ground2=new Ground(1150,350,20,20)
  box=new Box(560,412,60,60);
  box1=new Box(620,412,60,60);
  box2=new Box(680,412,60,60);
  box3=new Box(740,412,60,60);
  box4=new Box(800,412,60,60);
  box5=new Box(860,412,60,60);
 box6=new Box(590,363,60,60);
 box7=new Box(650,363,60,60);
 box8=new Box(710,363,60,60);
 box9=new Box(770,363,60,60);
 box10=new Box(830,363,60,60);
 box11=new Box(620,312,60,60);
 box12=new Box(680,312,60,60);
 box13=new Box(740,312,60,60);
 box14=new Box(800,312,60,60);
 box15=new Box(650,263,60,60);
 box16=new Box(710,263,60,60);
 box17=new Box(770,263,60,60);
 box18=new Box(680,214,60,60);
 box19=new Box(740,214,60,60);
 box20=new Box(710,165,60,60);
sling=new SlingShot(hero.body,{x:150,y:100});
robot=new Monster(1150,200,160,160);
}

function draw() {
  background(0);
  Engine.update(engine);
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ground.display();
hero.display();
robot.display();
var collision=Matter.SAT.collides(robot.body,hero.body)
 if(collision.collided){
   flag=1
 }
 if(flag===1){
  textSize(60);
  fill(random(0,255),random(0,255),random(0,255));
  strokeWeight(3);
  text("Mission Sucessful",350,200)
}

//drawSprites()


}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

