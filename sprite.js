class sprite
{
    constructor(x,y,radius)
    {
        var options = {isStatic:false , friction:0, restitution:0, density:0.0008};
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.image1 = loadImage("sprHeroStilLeft11.png");
        this.image2 = loadImage("sprHeroStillRight11.png");

        this.imageJump1 = loadImage("sprHeroJumpLeft.png");
        this.imageJump2 = loadImage("sprHeroJumpRight.png");

        this.animation1 = loadAnimation("sprHeroRun1right.png", "sprHeroRun2right.png", "sprHeroRun3right.png", "sprHeroRun4right.png", "sprHeroRun5right.png", "sprHeroRun6right.png");
        this.animation1.frameDelay = 2;

        this.animation2 = loadAnimation("sprHeroRun1left.png", "sprHeroRun2left.png", "sprHeroRun3left.png", "sprHeroRun4left.png", "sprHeroRun5left.png", "sprHeroRun6left.png");
        this.animation2.frameDelay = 2;

        this.animationPunch1 = loadAnimation("sprHeroPunch1right.png", "sprHeroPunch2right.png", "sprHeroPunch3right.png", "sprHeroPunch4right.png", "sprHeroPunch5right.png"); 

        this.animationPunch2 = loadAnimation("sprHeroPunch1left.png", "sprHeroPunch2left.png", "sprHeroPunch3left.png", "sprHeroPunch4left.png", "sprHeroPunch5left.png");
        
        World.add(world,this.body);
    }

    display()
    {
        if(this.body.velocity.x < -0.6 && this.body.velocity.y < 0.7 && this.body.velocity.y > -0.7 && dpoo !== 1)
        {
            push();
            animation(this.animation2,this.body.position.x,this.body.position.y);
            pop();
            if(frameCount % 6 === 0)
            {
              if(moo === "on" && moo !== "no")
              {  
                running.play();
              }
            }
        }

        if(this.body.velocity.x > 0.6 && this.body.velocity.y < 0.7 && this.body.velocity.y > -0.7 && dpoo !== 1)
        {
            push();
            animation(this.animation1,this.body.position.x,this.body.position.y);
            pop();  
            if(frameCount % 6 === 0)
            {
              if(moo === "on" && moo !== "no")
              {  
                running.play();
              }
            }         
        }

        if(this.body.velocity.x > -0.6 && this.body.velocity.x < 0.6 && this.body.velocity.y > -0.7 && this.body.velocity.y < 0.7 && dsjrd === 1 && dpoo !== 1)
        {
            push();
            imageMode(CENTER);
            image(this.image2,this.body.position.x,this.body.position.y);
            pop();
        }

        if(this.body.velocity.x > -0.6 && this.body.velocity.x < 0.6 && this.body.velocity.y > -0.7 && this.body.velocity.y < 0.7 && dsjrd === 2 && dpoo !== 1)
        {
            push();
            imageMode(CENTER);
            image(this.image1,this.body.position.x,this.body.position.y);
            pop();             
        }

        if(this.body.velocity.y > 0.7 || this.body.velocity.y < -0.7)
        {
            if(dsjrd === 2 && dpoo !== 1)
            {
                push();
                imageMode(CENTER);
                image(this.imageJump1,this.body.position.x,this.body.position.y);
                pop();
            }
                        
        }  

        if(this.body.velocity.y > 0.7 || this.body.velocity.y < -0.7)
        {
            if(dsjrd === 1 && dpoo !== 1)
            {
                push();
                imageMode(CENTER);
                image(this.imageJump2,this.body.position.x,this.body.position.y);
                pop();
            }            
        }
        
        if(dpoo === 1 && dsjrd === 1)
        {
            push();
            animation(this.animationPunch1, this.body.position.x, this.body.position.y);
            pop();
        }

        if(dpoo === 1 && dsjrd === 2)
        {
            push();
            animation(this.animationPunch2, this.body.position.x, this.body.position.y);
            pop();
        }
    }
}