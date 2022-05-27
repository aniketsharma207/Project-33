class Snowfall {
    constructor(x,y) {
        var option = {
            friction: 0.001
        }
        this.snow = Bodies.circle(x,y,5,option);
        World.add(world,this.snow);
        this.radius = 5;
        this.image = loadImage("snow5.webp");
    }
    updateY(){
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow,{x:random(0,1000),y:random(0,300)})
        }    
    }
    display(){
        var pos = this.snow.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}