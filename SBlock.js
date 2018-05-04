function SBlock(board) {
    block.call(this, board, [0, 240, 0]);
    this.positions = [[[7, 2], [8, 2], [8, 1], [9, 1]],
                      [[8, 1], [8, 2], [9, 2], [9, 3]],
                      [[7, 3], [8, 3], [8, 2], [9, 2]],
                      [[7, 1], [7, 2], [8, 2], [8, 3]]];
    //this.position = 3;
}

SBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("S Block Executed");
        }
    }
});

SBlock.prototype.constructor = SBlock;
