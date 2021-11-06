class Joyy
{
    constructor()
    {
        var options = {isStatic: false};
        this.body = Bodies.rectangle(200,200,40,40,options);
        this.image = loadImage("bgwrWrr.png");
        World.add(world, this.body);
    }

    display()
    {
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,40,40);
        pop();
    }
}