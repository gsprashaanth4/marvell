class Timer
{
    constructor()
    {
        this.textSO = createElement('h3');
        this.textST = createElement('h3');
        this.textMO = createElement('h3');
        this.textMT = createElement('h3');
        this.divider = createElement('h3');
        this.warning = createElement("h3");
    } 
    
    hideer()
    {
        this.textSO.hide();
        this.textST.hide();
        this.textMO.hide();
        this.textMT.hide();
        this.divider.hide();
    }

    showw()
    {
        this.textSO.show();
        this.textST.show();
        this.textMO.show();
        this.textMT.show();
        this.divider.show();
    }

    hiide()
    {
        this.warning.hide();
    }

    shoow()
    {
        this.warning.show();
    }

    display()
    {
        this.textMT.html(minutesTens);
        this.textMT.position(50,50);

        this.textMO.html(minutesOnes);
        this.textMO.position(60,50);

        this.divider.html(":");
        this.divider.position(70,50);

        this.textST.html(secondsTens);
        this.textST.position(80,50);

        this.textSO.html(secondsOnes);
        this.textSO.position(90,50);

        this.warning.html("get out before the base explodes");
        this.warning.position(520, 750);
    }

}    