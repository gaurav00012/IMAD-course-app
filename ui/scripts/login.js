var users = ["user1","user2","user3","user4"];
var passwords = ["123","132","312","213"];
var totalUsers = 4;

$(document).keypress(function(e) {
    if(e.which == 13) {
        // enter pressed
        var request = new XMLHttpRequest();
        var tempNames;
        
        request.onreadystatechange = function() {
          if(request.status === 200){
              console.log(tempNames = request.responceText);
          }
        };
        
        request.open('GET', 'http://akshatbhargava123.imad.hasura-app.io/', true);
        request.send(null);
        
        validateAll();
    }
});

function validateAll() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
      if(request.status === 200){
          var tempNames = request.responceText.toString();
      }
    };
    
    request.open('GET', 'http://akshatbhargava123.imad.hasura-app.io/', true);
    request.send(null);
    
    
    var inputname;
    var password;
    var statusSpan = document.getElementById('status');
    var temp = document.getElementById('status-message');
    var found = false;
    var userIndex;
    
    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value;
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value;
    
    // SEARCH FOR USER IN USERS LIST
    for(var i = 0; i < totalUsers; i++) {
        if(inputname === users[i]) {
            userIndex = i;
            found = true;
        }
    }
    
    if(!found) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "wrong username or password...";
        statusSpan.style.display = 'block';
    }
    else if(password !== passwords[userIndex]) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "wrong username or password...";
        statusSpan.style.display = 'block';
    }
    else if (found){
        temp.style.color = "#20FF00";
        temp.innerHTML = "Logging you back...";
        setTimeout(window.location.href = "user-work.html",2000);
        statusSpan.style.display = 'block';
    }
}


/*$('.message a').click(function(){
$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});*/