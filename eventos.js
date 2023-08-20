function createAlert() {
    window.alert("Hola! Soy el div!");
}

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('btnSaludar');
    btn.addEventListener("click", createAlert); 
});

