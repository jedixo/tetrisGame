function IBlock(board) {
    block.call(this, board, "#00F0F0");
    this.blocks = [[4, 1], [5, 1], [6, 1], [7, 1]];
    
}

IBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("I Block Executed");
        }
    }
});

IBlock.prototype.constructor = IBlock;
