function JBlock(board) {
    block.call(this, board, "#0000F0");
    this.blocks = [[4, 1], [4, 2], [5,2], [6,2]];
    
}

JBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("J Block Executed");
        }
    }
});

JBlock.prototype.constructor = JBlock;
