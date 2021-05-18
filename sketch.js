const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var polygon,polygonImg;
var ball;
var base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var blueblock1,blueblock2,blueblock3,blueblock4,blueblock5,blueblock6,blueblock7,blueblock8,blueblock9,blueblock10;
var purpleblock1,purpleblock2,purpleblock3,purpleblock4,purpleblock5,purpleblock6;
var greenblock1,greenblock2;
var slingshot;
var score=0;



function preload(){

    polygonImg=loadImage("polygon.png");

}

function setup(){
    createCanvas(1200,700);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(450,680,1200,20);

    base1=new Base(400,500,340,20);
    base2=new Base(800,300,340,20);

    block1=new Pinkblock(280,460,40,50);
    block2=new Pinkblock(320,460,40,50);
    block3=new Pinkblock(360,460,40,50);
    block4=new Pinkblock(400,460,40,50);
    block5=new Pinkblock(440,460,40,50);
    block6=new Pinkblock(480,460,40,50);
    block7=new Pinkblock(520,460,40,50);
    
   block8=new Pinkblock(680,260,40,50);
   block9=new Pinkblock(720,260,40,50);
   block10=new Pinkblock(760,260,40,50);
   block11=new Pinkblock(800,260,40,50);
   block12=new Pinkblock(840,260,40,50);
   block13=new Pinkblock(880,260,40,50);
   block14=new Pinkblock(920,260,40,50);

   blueblock1=new Blueblock(320,410,40,50);
   blueblock2=new Blueblock(360,410,40,50);
   blueblock3=new Blueblock(400,410,40,50);
   blueblock4=new Blueblock(440,410,40,50);
   blueblock5=new Blueblock(480,410,40,50);
   
   blueblock6=new Blueblock(720,210,40,50);
   blueblock7=new Blueblock(760,210,40,50);
   blueblock8=new Blueblock(800,210,40,50);
   blueblock9=new Blueblock(840,210,40,50);
   blueblock10=new Blueblock(880,210,40,50);

   purpleblock1=new Purpleblock(360,360,40,50);
   purpleblock2=new Purpleblock(400,360,40,50);
   purpleblock3=new Purpleblock(440,360,40,50);
 
   purpleblock4=new Purpleblock(760,160,40,50);
   purpleblock5=new Purpleblock(800,160,40,50);
   purpleblock6=new Purpleblock(840,160,40,50);

   greenblock1=new Greenblock(400,310,40,50);

   greenblock2=new Greenblock(800,110,40,50);

   ball=Bodies.circle(50,200,20);
   World.add(world,ball);


   slingshot=new Sling(this.ball,{x:100,y:200});


}

function draw(){
    background("red");
    Engine.update(engine);

    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);

   fill(255);
   textSize(20);
   text("Press SPACE for a second chance",700,650);

   fill(255);
   text("SCORE:"+score,100,100);

    ground.display();

    base1.display();

    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    blueblock1.display();
    blueblock2.display();
    blueblock3.display();
    blueblock4.display();
    blueblock5.display();

    blueblock6.display();
    blueblock7.display();
    blueblock8.display();
    blueblock9.display();
    blueblock10.display();

    purpleblock1.display();
    purpleblock2.display();
    purpleblock3.display();

    purpleblock4.display();
    purpleblock5.display();
    purpleblock6.display();

    greenblock1.display();
    greenblock2.display();


    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();

    blueblock1.score();
    blueblock2.score();
    blueblock3.score();
    blueblock4.score();
    blueblock5.score();

    blueblock6.score();
    blueblock7.score();
    blueblock8.score();
    blueblock9.score();
    blueblock10.score();

    purpleblock1.score();
    purpleblock2.score();
    purpleblock3.score();

    purpleblock4.score();
    purpleblock5.score();
    purpleblock6.score();

    greenblock1.score();
    greenblock2.score();
  
}

function keyPressed(){
  if(keyCode===32){
   slingshot.attach(this.ball);
   }
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

