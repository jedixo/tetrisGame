function IBlock(board) {
    block.call(this, board, [0, 240, 240]);
    this.positions = [[[7, 1], [8, 1], [9, 1], [10, 1]],
    [[9, 0], [9, 1], [9, 2], [9, 3]],
    [[7, 2], [8, 2], [9, 2], [10, 2]],
    [[8, 0], [8, 1], [8, 2], [8, 3]]];


}

IBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("I Block Executed");
        }
    }
});

IBlock.prototype.constructor = IBlock;
