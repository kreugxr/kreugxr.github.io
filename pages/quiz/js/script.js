function CreateUser(){
    const username = window.prompt('What is your name?')
    window.prompt = `Welcome, enjoy!`
}

function Submit(){         
    var amountCorrect = 0;          
    for(var i = 1; i <= 45; i++) {
    var radios = document.getElementsByName('quest_0'+i);
    for(var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if(radio.value == "correct" && radio.checked) {
            amountCorrect++;
        }
    }
}
    alert("Correct Responses: " + amountCorrect);
    if(amountCorrect === 3){
        window.alert('UNEXPECTED ERRORu$!&*@$¨%&¨%*@#&')
        window.location = "192859.html"
    }
}

