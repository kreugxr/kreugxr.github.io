function Send(){
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var subject = document.getElementById('subject').value

    var warn = document.getElementById('warn')

    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(fname == ''){
        alert('Please enter your first name');
    } 

    else if (!letters.test(fname)){
        alert("Your name field required only alphabet characters")
    } 

    else if(lname == ''){
        alert("Please enter your last name")
    }

    else if(!letters.test(lname)){
        alert ('')
    }

    else if(subject == ''){
        alert('Please write a message')
    }

    else{
        warn.innerHTML = 'Sucess!'
    }
}

