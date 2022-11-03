var slide = document.getElementById('slide');
slide.height = window.innerHeight;
slide.width = window.innerWidth;
var c = slide.getContext("2d");

function fullScreen(){
slide.requestFullscreen();
}

c.beginPath();
c.fillStyle = "white";
c.fillRect(0, 0, slide.width, slide.height);