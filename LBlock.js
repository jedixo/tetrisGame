function LBlock(board) {
    block.call(this, board, "#F0A000");
    this.blocks = [[9, 1], [7, 2], [8,2], [9,2]];
}

LBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("L Block Executed");
        }
    }
});

LBlock.prototype.constructor = LBlock;
