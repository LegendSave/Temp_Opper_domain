<<<<<<< HEAD
var slide = document.querySelector('body');
var button = document.querySelector('button');
function fullScreen(){
slide.requestFullscreen();
button.style.display = 'none';
}
=======
var slide = document.getElementById('slide');
slide.height = window.innerHeight;
slide.width = window.innerWidth;
var c = slide.getContext("2d");

function fullScreen(){
slide.requestFullscreen();
}

c.beginPath();
c.fillStyle = "green";
c.fillRect(0, 0, slide.width, slide.height);
>>>>>>> a77954b78894d9c6c53bd758981d7b755cc2390d
