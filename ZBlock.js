function ZBlock(board) {
    block.call(this, board, "#F00000");
    this.blocks = [[4, 1], [5, 1], [5,2], [6,2]];
    
}

ZBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("Z Block Executed");
        }
    }
});

ZBlock.prototype.constructor = ZBlock;
