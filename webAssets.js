var slide = document.querySelector('body');
var button = document.querySelector('button');
function fullScreen(){
slide.requestFullscreen();
button.style.display = 'none';
}