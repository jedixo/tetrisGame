function TBlock(board) {
    block.call(this, board, "#A000F0");
    this.blocks = [[7, 2], [8, 2], [8,1], [9,2]];
    
}

TBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("T Block Executed");
        }
    }
});

TBlock.prototype.constructor = TBlock;
