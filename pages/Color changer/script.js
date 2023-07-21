function changeBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("container").style.backgroundColor = `#${randomColor}`

    var info = document.getElementById('infoColor')
    info.innerHTML = `#${randomColor}`

    console.log(`#${randomColor}`)
}

console.log('Colors history:')