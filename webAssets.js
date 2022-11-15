var fullscreenContent = document.getElementById("fullscreenContent");
var button = document.querySelector('button');
function fullScreen(){
fullscreenContent.requestFullscreen();
button.style.display = 'none';
}