function IBlock(board) {
    block.call(this, board, "#00F0F0");
    this.blocks = [[7, 1], [8, 1], [9, 1], [10, 1]];
    
}

IBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("I Block Executed");
        }
    }
});

IBlock.prototype.constructor = IBlock;
