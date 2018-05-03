function ZBlock(board) {
    block.call(this, board, "#F00000");
    this.blocks = [[7, 1], [8, 1], [8,2], [9,2]];
    
}

ZBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("Z Block Executed");
        }
    }
});

ZBlock.prototype.constructor = ZBlock;
