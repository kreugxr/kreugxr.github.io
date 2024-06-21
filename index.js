var i = 0;
var txt = 'Programmer and machine learning enthusiast.';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}