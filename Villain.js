class Villain
{
    constructor(x, y, radius)
    {
        var options = {isStatic: false, density: 0.001, restitution:0};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("spaceProbe11real.png");
        this.burst = loadAnimation("greenExplosion1.png","greenExplosion2.png","greenExplosion3.png","greenExplosion4.png","greenExplosion5.png","greenExplosion6.png","greenExplosion7.png","greenExplosion8.png");
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
        
        if(this.letout > 4)
        {
            this.timeO = 1;
            setTimeout(() => {this.timeO = 2;}, 400);
            setTimeout(() => {World.remove(world, this.body)}, 500);
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