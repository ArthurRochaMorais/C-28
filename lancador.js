class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.004,
            length: 0
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
}