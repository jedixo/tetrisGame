function LBlock(board) {
    block.call(this, board, "#F0A000");
    this.positions = [[[9, 1], [7, 2], [8,2], [9,2]],
                      [[9, 3], [8, 1], [8, 2], [8, 3]],
                      [[7, 3], [9, 2], [8, 2], [7, 2]],
                      [[7, 1], [8, 3], [8, 2], [8, 1]]];
    //this.position = 3;
}

LBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("L Block Executed");
        }
    }
});

LBlock.prototype.constructor = LBlock;
