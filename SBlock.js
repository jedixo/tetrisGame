function SBlock(board) {
    block.call(this, board, "#00F000");
    this.blocks = [[4, 2], [5, 2], [5,1], [6,1]];
    
}

SBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("S Block Executed");
        }
    }
});

SBlock.prototype.constructor = SBlock;
