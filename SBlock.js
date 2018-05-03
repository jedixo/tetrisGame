function SBlock(board) {
    block.call(this, board, "#00F000");
    this.blocks = [[7, 2], [8, 2], [8,1], [9,1]];
    
}

SBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("S Block Executed");
        }
    }
});

SBlock.prototype.constructor = SBlock;
