class bomb
{
    constructor(x,y,radius)
    {
        var options = {restitution:0.1, isStatic:false, density:0.0001};
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("coin2.png");
        this.flame = loadAnimation("burst11r.png", "burst12r.png", "burst13r.png", "burst14r.png", "burst15r.png"); 
        this.flame.frameDelay = 2;
        World.add(world,this.body);
        this.timer = 2;
    }

    blastFlameOn()
    {

        if(frameCount % 10 === 0)
        {
            this.timer--;
        }

        if(this.timer > 0.6 && this.timer > -1)
        {
            push();
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 8, 8);
            pop();
        }
        
        if(this.timer > -1 && this.timer < 0.4)
        {
            push();
            animation(this.flame, this.body.position.x, this.body.position.y);
            pop();
            if(moo === "on" && moo !== "off")
            {
                bomb1Blast.play();
                setTimeout(()=> {bomb1Blast.pause();}, 50);
            }
        }

        if(this.timer === 0)
        {  
            World.remove(world, this.body);
        }
    }

    throw(velX,velY)
    {
        Matter.Body.setVelocity(this.body, {x:velX, y:velY});
    }
}    