class Bob{
    constructor(x,y,radius){
        
        var options={
          isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
      this.radius=radius;
      this.x=x;
      this.y=y;
        
        World.add(world,this.body);
    }
    display(){
      
      var pos=this.body.position;
      push();
       translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill(color(rgb(150,0,255)));
     ellipse(pos.x,pos.y,this.radius);
     pop();
     
    }
}