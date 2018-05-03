function LBlock(board) {
    block.call(this, board, "#F0A000");
    this.blocks = [[6, 1], [4, 2], [5,2], [6,2]];
}

LBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("L Block Executed");
        }
    }
});

LBlock.prototype.constructor = LBlock;
