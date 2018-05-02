function block(board) {
    this.colour = "#FFF";
    this.blocks = [[5, 1]];
    this.bottom = 0;

    //board[5][0] = 1;

    this.move = function (board, direction) {
        // if on bottom of board no longer move
    }

    this.rotate = function (board) {
        //rotate shape
    }

    this.draw = function (ctx) {
        ctx.fillStyle = this.colour;
        for (var i = 0; i < this.blocks.length; i++) {
            ctx.fillRect((this.blocks[i][0] * 20) - 20, (this.blocks[i][1] * 20) - 20, 19, 19);
        }
    }


}