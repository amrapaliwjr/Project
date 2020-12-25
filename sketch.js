const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var weight;
var crane;




function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    b1 = new Mass (500,350,50,50);
    b2 = new Mass (500,350,50,50);
    b3 = new Mass (500,350,50,50);
    b4 = new Mass (500,350,50,50);
    b5 = new Mass (500,350,50,50);
    b6 = new Mass (500,350,50,50);
    b7 = new Mass (500,350,50,50);
    b8 = new Mass (500,350,50,50);
    b9 = new Mass (500,350,50,50);
    b10 = new Mass (500,350,50,50);

    b11 = new Mass (600,300,50,50);
    b12 = new Mass (600,300,50,50);
    b13 = new Mass (600,300,50,50);
    b14 = new Mass (600,300,50,50);
    b15 = new Mass (600,300,50,50);
    b16 = new Mass (600,300,50,50);
    b17 = new Mass (600,300,50,50);
    b18 = new Mass (600,300,50,50);
    b19 = new Mass (600,300,50,50);
    

    weight = new Ball(200,200,50,50);

    crane = new Rope(weight.body,{x:400, y:200});
}

function draw(){
   
        background("lightblue");
    
    Engine.update(engine);
    
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();

   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   b17.display();
   b18.display();
   b19.display();

   weight.display();
   crane.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(weight.body, {x: mouseX , y: mouseY});
}




