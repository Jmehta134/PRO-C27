class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0.1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        fill(200,240,230);
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2);
        pop();
    }
}