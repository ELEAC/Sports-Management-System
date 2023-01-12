function savefunc(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username ==="admin" && password === "admin"){
        location.href="index.html";
    }
    else{
        alert("sorry try again")
    }
}