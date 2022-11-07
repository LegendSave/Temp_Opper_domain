var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
window.devicePixelRatio = 2;

var scale = window.devicePixelRatio; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.scale(scale, scale);
c.font = '10px Arial';

var cords = [`${window.innerWidth - (window.innerWidth / 3)}`, `${window.innerWidth / 3}`];

c.fillText(cords[1], 300, 300);
