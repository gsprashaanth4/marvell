class sprBorder1
{
    constructor(x,y,width,height)
    {
        var options = {isStatic:true};
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bg111rr.jpg");
        World.add(world,this.body);
    }

    display()
    {
        push();
        //fill("red");
        //stroke(10);
        //rectMode(CENTER);
        //fill("black");
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}