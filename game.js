var canvas = document.getElementById("tetrisCanvas");
// board goes 1-31 not 0-30 as 0 is off screen
var hud;
var blocks = [];
var board = [];
var boardLength = canvas.width / 40 + 1;
console.log(this.boardLength);
for (var i = 0; i < boardLength; ++i) {
    board[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

var currentFrame = 0;
var speed = 40; //decrease this to increase speed

/**
 * main game loop
 * 
 * waits for load before running
 */
window.onload = function () {
    ctx = canvas.getContext("2d");
    hud = new HUD(canvas.width, canvas.height);
    generateBlock();

    hud.draw(ctx);

    window.onkeyup = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key === 37) {
            //direction = 'w';
            //go left
        } else if (key === 38) {
            blocks[blocks.length - 1].rotate(0);
        } else if (key === 39) {
            //direction = 'e';
            //go right
        } else if (key === 40) {
            blocks[blocks.length - 1].rotate(1);
        } else if (key === 32) {
            //drop to bottom
        }
    }

    function game() {

        if (currentFrame === speed) {
            //control detection here and movement
            //console.log("drawing happening");
            if (blocks[blocks.length - 1].bottom < board[0].length - 2) {
            blocks[blocks.length - 1].gravity();
            } else {
                generateBlock();
            }
            currentFrame = 0;
        } else {
            //blocks[blocks.length - 1].gravity();
            currentFrame++;
        }
        
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        hud.draw(ctx);
        for (var i = 0; i < blocks.length; i++) {
            blocks[i].draw(ctx);
        }
        requestAnimationFrame(game);
        

    }
    game();
}

function generateBlock() {
    // 6 blocks total
    // generate randomly for now implement look ahead later
    type = Math.floor(Math.random() * 7);
    if (type === 0) {
        blocks.push(new IBlock(board));
    } else if (type === 1) {
        blocks.push(new JBlock(board));
    } else if (type === 2) {
        blocks.push(new LBlock(board));
    } else if (type === 3) {
        blocks.push(new OBlock(board));
    } else if (type === 4) {
        blocks.push(new SBlock(board));
    } else if (type === 5) {
        blocks.push(new TBlock(board));
    } else {
        blocks.push(new ZBlock(board));
    }
}

function reset() {

}