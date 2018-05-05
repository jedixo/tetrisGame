function TBlock(board) {
    block.call(this, board, [160, 0, 240]);
    this.positions = [[[7, 2], [8, 2], [8, 1], [9, 2]],
    [[8, 1], [8, 2], [8, 3], [9, 2]],
    [[7, 2], [8, 2], [8, 3], [9, 2]],
    [[7, 2], [8, 2], [8, 1], [8, 3]]];
    //this.position = 3;
}

TBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("T Block Executed");
        }
    }
});

TBlock.prototype.constructor = TBlock;
