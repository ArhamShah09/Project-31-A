class Plinko {
  constructor(x,y,radius) {
    var options = {
      isStatic: true
    }
    this.radius = radius;
    this.body = Bodies.circle(x,y,diameter/2,options);
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    ellipseMode(CENTER); 
    ellipse(pos.x, pos.y, 10);
  }
}