function block(board, colour) {
    this.colour = colour || '#FFF';
    this.topShade = "";
    this.sideShade = "";
    this.bottomShade= "";
    this.blocks = [];
    this.bottom = 0;

    colourRGB = hexToRgb(this.colour);
    topRGB = colourRGB;
    sideRGB = colourRGB;
    bottomRGB = colourRGB;

    //top shade
    if (colourRGB.r === 0) {
        topRGB.r = topRGB.r + 179;
    } else if (colourRGB.r === 240) {
        topRGB.r = topRGB.r + 11;
    } else {
        topRGB.r = topRGB.r + 67;
    }
    
    if (colourRGB.g === 0) {
        topRGB.g = topRGB.g + 179;
    } else if (colourRGB.g === 240) {
        topRGB.g = topRGB.g + 11;
    } else {
        topRGB.g = topRGB.g + 67;
    }

    if (colourRGB.b === 0) {
        topRGB.b = topRGB.b + 179;
    } else if (colourRGB.b === 240) {
        topRGB.b = topRGB.b + 11;
    } else {
        topRGB.b = topRGB.b + 67;
    }

    this.topShade = rgbToHex(topRGB.r, topRGB.g, topRGB.b);


    //side shade
    if (colourRGB.r === 0) {
        sideRGB.r = sideRGB.r;
    } else if (colourRGB.r === 240) {
        sideRGB.r = sideRGB.r - 24;
    } else {
        sideRGB.r = sideRGB.r - 16;
    }

    if (colourRGB.g === 0) {
        sideRGB.g = sideRGB.g;
    } else if (colourRGB.g === 240) {
        sideRGB.g = sideRGB.g - 24;
    } else {
        sideRGB.g = sideRGB.g - 16;
    }

    if (colourRGB.b === 0) {
        sideRGB.b = sideRGB.b;
    } else if (colourRGB.b === 240) {
        sideRGB.b = sideRGB.b - 24;
    } else {
        sideRGB.b = sideRGB.b - 16;
    }

    this.sideShade = rgbToHex(sideRGB.r, sideRGB.g, sideRGB.b);

    //bottom shade
    if (colourRGB.r === 0) {
        bottomRGB.r = bottomRGB.r;
    } else if (colourRGB.r === 240) {
        bottomRGB.r = bottomRGB.r - 120;
    } else {
        bottomRGB.r = bottomRGB.r - 80;
    }

    if (colourRGB.g === 0) {
        bottomRGB.g = bottomRGB.g;
    } else if (colourRGB.g === 240) {
        bottomRGB.g = bottomRGB.g - 120;
    } else {
        bottomRGB.g = bottomRGB.g - 80;
    }

    if (colourRGB.b === 0) {
        bottomRGB.b = bottomRGB.b;
    } else if (colourRGB.b === 240) {
        bottomRGB.b = bottomRGB.b - 120;
    } else {
        bottomRGB.b = bottomRGB.b - 80;
    }


    this.bottomShade = rgbToHex(bottomRGB.r, bottomRGB.g, bottomRGB.g);
    console.log(this.topShade);
    console.log(this.sideShade);
    console.log(this.bottomShade);

    

    this.move = function (board, direction) {
        // if on bottom of board no longer move
    };

    this.rotate = function (board) {
        //rotate shape
    };

    this.draw = function (ctx) {
        //ctx.fillStyle = this.colour;
        for (var i = 0; i < this.blocks.length; i++) {
            ctx.fillStyle = this.colour;
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 19, 19);
            ctx.fillStyle = this.topShade;
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 19, 2);
            ctx.fillStyle = this.sideShade;
            ctx.fillRect((this.blocks[i][0] * 20) - 3, (this.blocks[i][1] * 20) - 20, 2, 19);
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 2, 19);
            ctx.fillStyle = this.bottomShade;
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20)-3, 19, 2);

            



        }
    };

    this.execute = function () {
        console.log('PowerUp Execute');
    }


    function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
    
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }


};