class roboLaser
{
    constructor(x,y,radius)
    {
        var options = {isStatic:false, friction:0};
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image1 = loadImage("opp11.png");
        World.add(world, this.body);
        this.timer = 2;
    }

    display()
    {
        if(frameCount % 23 === 0 && this.timer > 0)
        {
            this.timer--;
        }

        if(this.timer > 0.5)
        {
            push();
            imageMode(CENTER);
            image(this.image1, this.body.position.x, this.body.position.y, 6, 6);
            pop();
        }

        if(this.timer < 0.5)
        {
            World.remove(world, this.body);
        }
    }
}