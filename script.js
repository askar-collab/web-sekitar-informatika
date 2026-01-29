function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user !== "" && pass !== "") {
        localStorage.setItem("login", "true");
        window.location.href = "index.html";
    } else {
        alert("Isi username dan password!");
    }
}

function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
    }
}
