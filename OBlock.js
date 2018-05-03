function OBlock(board) {
    block.call(this, board, "#F0F000");
    this.positions = [[[7, 1], [7, 2], [8,2], [8,1]]];    
}

OBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("O Block Executed");
        }
    }
});

OBlock.prototype.constructor = OBlock;
