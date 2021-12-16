function registry() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var pwExpress = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(username == ''){
        alert('Please enter your username');
    } 

    else if (!letters.test(username)){
        alert("Username field required only alphabet characters")
    } 
    
    else if(password == ''){
        alert("Please enter your password")
    }

    else if(!pwExpress.test(password)){
        alert ('Upper case, Lower case, Special character and Numeric letter are required in password filed')
    }

    else if(document.getElementById("password").value.length < 6){
        alert("Password minimum length is 6")
    }

    else if(document.getElementById("password").value.length > 32){
        alert("Password max length is 32")
    }

    else{
        alert('Thanks for joining the community! You will now be redirected.')
        window.location = "https://www.youtube.com/watch?v=-6MyBZwC5Ac" // <------ Roblox video.
    }

}
