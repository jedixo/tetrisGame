function JBlock(board) {
    block.call(this, board, "#0000F0");
    this.blocks = [[7, 1], [7, 2], [8,2], [9,2]];
    
}

JBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("J Block Executed");
        }
    }
});

JBlock.prototype.constructor = JBlock;
