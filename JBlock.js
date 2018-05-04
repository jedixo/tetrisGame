function JBlock(board) {
    block.call(this, board, [0, 0, 240]);
    this.positions = [[[7, 1], [7, 2], [8, 2], [9, 2]], 
                      [[9, 1], [8, 1], [8, 2], [8, 3]], 
                      [[9, 3], [9, 2], [8, 2], [7, 2]],
                      [[7, 3], [8, 3], [8, 2], [8, 1]]];
    //this.position = 3;
}

JBlock.prototype = Object.create(block.prototype, {
    execute: {
        value: function () {
            console.log("J Block Executed");
        }
    }
});

JBlock.prototype.constructor = JBlock;
