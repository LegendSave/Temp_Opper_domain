var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 2;

var scale = window.devicePixelRatio; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '10px Arial';

var cords = [`${window.innerWidth - (window.innerWidth / 3)}`, `${window.innerWidth / 3}`];
var cordTs = cords[1] + cords[0];
c.beginPath();
c.strokeStyle = "black";
c.moveTo(cords[0], 0);
c.lineTo(cords[0], window.innerHeight);
c.moveTo(cords[1], 0);
c.lineTo(cords[1], window.innerHeight);
c.stroke();

c.fillText(cords[0] + "Exit" + cords[1] + "Exit" + window.innerWidth + "Exit" + cordTs, 200, 200);