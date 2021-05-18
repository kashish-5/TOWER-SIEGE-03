class Blueblock{
    constructor(x,y,width,height){

     var options={
         isStatic:false,
         'friction':0,
         'restitution':0.4

     }

     this.x=x;
     this.y=y;
     this.height=height;
     this.width=width;

     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);

    }
    score(){
        if(this.visibility<0 && this.visibility>-105){
            score++
        }
    }
    display(){
    if(this.body.speed<3){
        var pos=this.body.position;
        var angle=this.body.position;
       push()
        translate(pos.x,pos.y);
        rotate(angle);   
        rectMode(CENTER);
        strokeWeight(4);
        fill("lightblue");
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-15;
          pop();
      }
   

    }
};