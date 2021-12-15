var x = 0;
var y = 0;
var velox = 2;
var veloy = 3;
var canvas_width = 300;
var canvas_height = 300;
var boxsize = 50;

var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
anim_img = new Image(0, 0);
anim_img.onload = function () {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas_width, canvas_height);
        if (x < 0 || x + boxsize > canvas_width) { 
            velox *= -1; 
        }
        if (y < 0 || y + boxsize > canvas_height) { 
            veloy *= -1; 
        }
        x += velox;
        y += veloy;
        ctx.drawImage(anim_img, x, y, boxsize, boxsize);
    }, 10);
}
anim_img.src = 'assets/bouncing-burger.jpg';
