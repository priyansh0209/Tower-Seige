class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var PointA=this.chain.bodyA.position;
            var PointB=this.chain.pointB;
            strokeWeight(6);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            
        }
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(bodyA){
this.chain.bodyA=bodyA;
    }
}