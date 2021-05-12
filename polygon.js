class Polygon{
    constructor(x,y,r){
        var options={
        restituion:0.5,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position
        
        stroke("blue")
        image(this.image,pos.x,pos.y,50,50);

    }
}