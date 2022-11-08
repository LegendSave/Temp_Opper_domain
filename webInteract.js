var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 1;
var scale = window.devicePixelRatio; 
var mouseX;
var mouseY;
var mouseInput;
var slideNum = 0;
var slideContent = ["1st content", "2nd content"];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '50px Arial';
var cord1 = canvas.width / 3;
var cord2 = cord1 + cord1;

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
    if (Math.abs(mouseX) < cord1 && mouseInput){
        c.fillText("Left", canvas.width / 2, 200);
        if (slideNum == 0){
            slideNum = 0;
        }
        else{
            slideNum -= 1;
        }
        mouseInput = false;
    }
    if (Math.abs(mouseX) > cord2 && mouseInput){
        c.fillText("Right", canvas.width / 2, 200);
        if(slideNum == 1){
            slideNum = 1;
        }
        else{
            slideNum += 1;
        }
        mouseInput = false;
    }
    if (slideNum == 1){
        c.fillStyle = "green";
        c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    if (slideNum == 0){
        c.fillStyle = "pink";
        c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    c.font = '50px Arial';
    c.fillText("Title", 20, 20);
    c.font = '25px Arial';
    c.fillText(slideContent[slideNum], 20, 50);
}

draw();