class Windo
{
    constructor()
    {
        var options = {isStatic: false};
        this.body = Bodies.rectangle(spr1.body.position.x, spr1.body.position.y,20,20,options);
        this.image = loadImage("bgwrWrr.png");
        World.add(world, this.body);
    }

    display()
    {
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        pop();

        push();
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,20,20);
        pop();
    }
}