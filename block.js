function block(board, colour) {
    this.colour = colour || [240, 160, 0];
    this.topShade = [];
    this.sideShade = [];
    this.bottomShade= [];
    ///this.shaders = [this.topShade, this.sideShade, this.bottomShade];
    this.positions = [[]];
    this.position = 0;
    this.bottom = 0;


    for (var c = 0; c < this.colour.length; c++) {
        if (this.colour[c] === 0) {
            this.topShade.push(this.colour[c] + 170);
            this.sideShade.push(this.colour[c]);
            this.bottomShade.push(this.colour[c]);
        } else if (this.colour[c] === 240) {
            this.topShade.push(this.colour[c] + 11);
            this.sideShade.push(this.colour[c] - 24);
            this.bottomShade.push(this.colour[c] - 120);
        } else {
            this.topShade.push(this.colour[c] + 67);
            this.sideShade.push(this.colour[c] - 16);
            this.bottomShade.push(this.colour[c] - 80);
        }
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
           //console.log(this.bottom);
           
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
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 32.33, 38, 3);

            ctx.fillStyle = "rgb(" + this.sideShade[0] + ", " + this.sideShade[1] + ", " + this.sideShade[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 4, (this.positions[this.position][i][1] * 33.33) - 32.33, 3, 31.33);
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 32.33, 3, 32);

            ctx.fillStyle = "rgb(" + this.bottomShade[0] + ", " + this.bottomShade[1] + ", " + this.bottomShade[2] + ")";
            ctx.fillRect((this.positions[this.position][i][0] * 40) - 39, (this.positions[this.position][i][1] * 33.33) - 3, 38, 3);

        }
    };

};