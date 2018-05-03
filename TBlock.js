function TBlock(board) {
    block.call(this, board, "#A000F0");
    this.blocks = [[4, 2], [5, 2], [5,1], [6,2]];
    
}

TBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("T Block Executed");
        }
    }
});

TBlock.prototype.constructor = TBlock;
