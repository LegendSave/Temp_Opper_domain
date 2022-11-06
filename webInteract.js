var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 2;

var scale = window.devicePixelRatio; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '10px Arial';

c.fillText("content", 300, 300);

var item = ["H", "He", "Hel", "Hell", "Hello"];
var itemCount = 0;

function draw(){
    requestAnimationFrame(draw);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillText(item[itemCount], 100, 100);
    for(var i = 0; i < 4;){
        setTimeout( e=> {
            itemCount = i;
        }, 1000);
    }
}

draw();