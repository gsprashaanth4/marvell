class sVillain
{
    constructor(x, y, radius)
    {
        var options = {isStatic: false, density: 0.001, restitution: 0};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("robot3real.png");
        this.burst = loadAnimation("blueExplosion1.png","blueExplosion2.png","blueExplosion3.png","blueExplosion4.png","blueExplosion5.png","blueExplosion6.png","blueExplosion7.png","blueExplosion8.png","blueExplosion9.png","blueExplosion10.png","blueExplosion11.png","blueExplosion12.png","blueExplosion13.png");
        this.burst.frameDelay = 2;
        this.timeO = 0;
        this.letout = 6;
        World.add(world, this.body);
    }

    display()
    {
        if(this.timeO === 0)
        {
            push();
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y,23,23);
            pop();
        }else if(this.timeO === 1)
        {
            push();
            animation(this.burst, this.body.position.x, this.body.position.y);
            pop();
        }else if(this.timeO === 2){}
    }

    over()
    {
        if(frameCount % 2 === 0 && this.letout > 0)
        {
            this.letout--;
        }
        
        if(this.letout > 0)
        {
            this.timeO = 1;
            setTimeout(() => {this.timeO = 2;}, 600);
            setTimeout(() => {World.remove(world, this.body)}, 1000);
        }
    }

    hover()
    {
        Matter.Body.applyForce(this.body, this.body.position, {x:0, y:-0.0006887});

        if(frameCount % 3 === 0)
        {
            Matter.Body.applyForce(this.body, this.body.position, {x:0, y:0.0002805});
        }
    }

    added()
    {
        World.add(world, this.body);
        this.timeO = 0;
        this.letout = 6;
    }
}