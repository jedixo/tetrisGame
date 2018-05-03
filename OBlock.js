function OBlock(board) {
    block.call(this, board, "#F0F000");
    this.blocks = [[4, 1], [4, 2], [5,2], [5,1]];    
}

OBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("O Block Executed");
        }
    }
});

OBlock.prototype.constructor = OBlock;
