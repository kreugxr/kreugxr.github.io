function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var audio = new Audio('./src/129.mp3');

while(true){
    audio.play();
    sleep(1000);
}