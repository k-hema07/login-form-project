function validateLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("message").innerText = "Login Successful ";
    } else {
        document.getElementById("message").innerText = "Invalid Username or Password ";
    }

    return false;
}
