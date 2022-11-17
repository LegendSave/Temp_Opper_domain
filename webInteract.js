/*var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 1;
var scale = window.devicePixelRatio;
var mouseX;
var mouseY;
var mouseInput;
var keyInput;
var slideNum = 0;
var slideContent = ["1st content", "2nd content"];
var slideImages = [document.getElementById("img1"), document.getElementById("img2")];
var textValue;
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

document.addEventListener('keydown', e => {
    keyInput = e.keyCode;
});

//Double spaces document, used for MLA format.
function dblSpc(startText, fontSize) {
    this.startText = startText;
    this.fontSize = fontSize;
    fontSize = fontSize * 2;
    let value = startText + fontSize;
    return value;
}

//Generates a link for the user to click on, Used for works sited.
function link(text, x, y, fontSize, colorString, url) {
    //refer to color assets for number clarification
    this.text = text;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.colorString = colorString;
    this.url = url;

    let textLength = c.measureText(text).width;
    let height = (y + fontSize) - 20;
    let fontSz = `${fontSize}` + 'px';
    c.beginPath();
    c.fillStyle = colorString;
    c.strokeStyle = colorString;
    c.font = `${fontSz} Times New Roman`;
    c.fillText(text, x, y);
    c.moveTo(x, height);
    c.lineTo(x + textLength, height);
    c.stroke();
    c.fill();

    //Add conditionals to read mouse position relative to the text.
}

function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.shadowColor = "black";
    c.shadowBlur = 5;
    c.shadowOffsetX = -5;
    c.shadowOffsetY = -5;
    if (Math.abs(mouseX) < cord1 && mouseInput) {
        c.fillText("Left", canvas.width / 2, 200);
        if (slideNum == 0) {
            slideNum = 0;
        }
    }
        if (keyInput == 37) {
            c.fillText("Left", canvas.width / 2, 200);
            if (slideNum == 0) {
                slideNum = 0;
            }
            else {
                slideNum -= 1;
            }
            mouseInput = false;
        }
        if (keyInput == 39) {
            c.fillText("Right", canvas.width / 2, 200);
            if (slideNum == 1) {
                slideNum = 1;
            }
            else {
                slideNum += 1;
            }
            mouseInput = false;
        }
        if (Math.abs(mouseX) > cord2 && mouseInput) {
            c.fillText("Right", canvas.width / 2, 200);
            if (slideNum == 1) {
                slideNum = 1;
            }
            else {
                slideNum += 1;
            }
            mouseInput = false;
        }
        if (slideNum == 1) {
            c.fillStyle = "green";
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }
        if (slideNum == 0) {

            c.fillStyle = "pink";
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);
        }
        if (mouseInput) {
            mouseInput = false;
        }
        c.fillStyle = "black";
        c.font = '50px Times New Roman';
        c.fillText("Title", 20, 20);
        c.font = '25px Times New Roman';
        c.fillText(slideContent[slideNum], 20, dblSpc(20, 25));
        //Edit code before checking if link works.
        link("Random url", 20, dblSpc(dblSpc(20, 25), 25), 25, "blue");
        c.shadowColor = "black";
        c.shadowBlur = 10;
        c.shadowOffsetX = 10;
        c.shadowOffsetY = 10;
        //c.drawImage(slideImages[slideNum], 80, 80);
    }

    draw();
    */

