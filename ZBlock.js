function ZBlock(board) {
    block.call(this, board, [240, 0, 0]);
    this.positions = [[[7, 1], [8, 1], [8, 2], [9, 2]],
                      [[9, 1], [9, 2], [8, 2], [8, 3]],
                      [[7, 2], [8, 2], [8, 3], [9, 3]],
                      [[7, 3], [7, 2], [8, 2], [8, 1]]];
    //this.position = 3;
}

ZBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("Z Block Executed");
        }
    }
});

ZBlock.prototype.constructor = ZBlock;
