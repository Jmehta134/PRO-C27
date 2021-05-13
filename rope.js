class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
           bodyA : body1,
           bodyB : body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
       this.Rope =Matter.Constraint.create(options);
       World.add(world, this.Rope);
       this.bodyA=body1;
       this.bodyB=body2;
    }
    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x+this.offsetX,this.bodyB.position.y+this.offsetY)
    }
}
    