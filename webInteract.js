var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 1;
var scale = window.devicePixelRatio; 
var mouseX;
var mouseY;
var mouseInput;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '50px Arial';
var cord1 = canvas.width / 3;
var cord2 = cord1 + cord1;
c.fillRect(cord1, 200, 20, 20);
c.fillRect(cord2, 200, 20, 20);

document.addEventListener('mousemove', e => {
mouseX = e.screenX;
mouseY = e.screenY;
});

document.addEventListener('mousedown', e => {
mouseInput = e.returnValue;
});

function draw(){
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.abs(mouseX) < cord1){
        c.fillText("Left", canvas.width / 2, 200);
    }
    if (Math.abs(mouseX) > cord2){
        c.fillText("Right", canvas.width / 2, 200);
    }
    if (mouseInput){
        c.fillText("Clicked", canvas.width / 2, 400);
    }
    c.font = '50px Arial';
    c.fillText("Title", 20, 20);
    c.font = '25px Arial';
    c.fillText("Content", 20, 50);
}

draw();