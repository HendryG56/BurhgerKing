var x = 0;
var y = 0;
var velox = 2;
var veloy = 3;
var canvas_width = 900;
var canvas_height = 400;
var boxsize = 100;

var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
anim_img = new Image(0, 0);
anim_img.onload = function () {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas_width, canvas_height);
        ctx.drawImage(anim_img, x, y, boxsize, boxsize);
        x += velox;
        y += veloy;
        if (x <= 0 || x + boxsize >= canvas_width) {
            velox *= -1;
        }
        if (y <= 0 || y + boxsize >= canvas_height) {
            veloy *= -1;
        }
    }, 10);
};
anim_img.src = "assets/bouncing-burger.jpg";
