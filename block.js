function block(board, colour) {
    this.colour = colour || [240, 160, 0];
    this.topShade = [];
    this.sideShade = [];
    this.bottomShade= [];
    this.positions = [[]];
    this.position = 0;
    this.bottom = 0;

    //this.colour = [240,160,0];

    //top shade
    if (this.colour[0] === 0) {
        this.topShade.push(this.colour[0] + 170);
    } else if (this.colour[0] === 240) {
        this.topShade.push(this.colour[0] + 11);
    } else {
        this.topShade.push(this.colour[0] + 67);
    }
    
    if (this.colour[1] === 0) {
        this.topShade.push(this.colour[1] + 170);
    } else if (this.colour[1] === 240) {
        this.topShade.push(this.colour[1] + 11);
    } else {
        this.topShade.push(this.colour[1] + 67);
    }

    if (this.colour[2] === 0) {
        this.topShade.push(this.colour[2] + 170);
    } else if (this.colour[2] === 240) {
        this.topShade.push(this.colour[2] + 11);
    } else {
        this.topShade.push(this.colour[2] + 67);
    }

  

    //side shade
    if (this.colour[0] === 0) {
        this.sideShade.push(this.colour[0]);
    } else if (this.colour[0] === 240) {
        this.sideShade.push(this.colour[0] - 24); 
    } else {
        this.sideShade.push(this.colour[0] - 16);
    }

    if (this.colour[1] === 0) {
        this.sideShade.push(this.colour[1]);
    } else if (this.colour[1] === 240) {
        this.sideShade.push(this.colour[1] - 24); 
    } else {
        this.sideShade.push(this.colour[1] - 16); 
    }

    if (this.colour[2] === 0) {
        this.sideShade.push(this.colour[2]);
    } else if (this.colour[2] === 240) {
        this.sideShade.push(this.colour[2] - 24); 
    } else {
        this.sideShade.push(this.colour[2] - 16);
    }

  
    //bottom shade
    if (this.colour[0] === 0) {
        this.bottomShade.push(this.colour[0]);
    } else if (this.colour[0] === 240) {
        this.bottomShade.push(this.colour[0] - 120);
    } else {
        this.bottomShade.push(this.colour[0] - 80);
    }

    if (this.colour[1] === 0) {
        this.bottomShade.push(this.colour[1]);
    } else if (this.colour[1] === 240) {
        this.bottomShade.push(this.colour[1] - 120);
    } else {
        this.bottomShade.push(this.colour[1] - 80);
    }

    if (this.colour[2] === 0) {
        this.bottomShade.push(this.colour[2]);
    } else if (this.colour[2] === 240) {
        this.bottomShade.push(this.colour[2] - 120);
    } else {
        this.bottomShade.push(this.colour[2] - 80);
    }
    

    this.move = function (board, direction) {
        // if on bottom of board no longer move
    };

    this.gravity = function () {
        for (var i = 0; i < this.positions.length; i++) {
           this.positions[i][0][1]++;
           this.positions[i][1][1]++;
           this.positions[i][2][1]++;
           this.positions[i][3][1]++;
           console.log(this.bottom);
           
        }
        this.bottom++;
    };

    this.rotate = function (direction) {
        if (direction === 0) {
            if (this.position - 1 < 0) {
                this.position = this.positions.length - 1;
            } else {
                this.position--;
            }
        } else {
            if (this.position + 1 > this.positions.length - 1) {
                this.position = 0;
            } else {
                this.position++;
            }
        }
    };

    this.draw = function (ctx) {
        
        for (var i = 0; i < this.positions[this.position].length; i++) {

            ctx.fillStyle = "rgb(" + this.colour[0] + ", " + this.colour[1] + ", " + this.colour[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 32.33, 38, 31.33);

            ctx.fillStyle = "rgb(" + this.topShade[0] + ", " + this.topShade[1] + ", " + this.topShade[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33) - 32.33, 38, 3);

            ctx.fillStyle = "rgb(" + this.sideShade[0] + ", " + this.sideShade[1] + ", " + this.sideShade[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 4, (this.positions[this.position][i][1] * 33.33) - 32.33, 3, 31.33);
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 32.33, 3, 32);

            ctx.fillStyle = "rgb(" + this.bottomShade[0] + ", " + this.bottomShade[1] + ", " + this.bottomShade[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 3, 38, 3);

        }
    };

};