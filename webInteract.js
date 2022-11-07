var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 2;
var scaling = window.innerWidth / 3;
var scale = window.devicePixelRatio; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '10px Arial';

var cord1 = window.innerWidth / 3;
var cord2 = window.innerWidth - scaling;
c.fillRect(cords[1], 200, 20, 20);
c.fillRect(cords[2], 200, 20, 20);