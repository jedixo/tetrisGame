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
    blocks.push(new JBlock(board));

    hud.draw(ctx)

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
            console.log("drawing happening");
            if (blocks[blocks.length - 1].bottom < board[0].length - 2) {
            blocks[blocks.length - 1].gravity();
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

function reset() {

}