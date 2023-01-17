/*   function showTextAndChangeColor() {
    var clicker = document.getElementById("clicker");
    var textoAdicional = document.getElementById("Quien-soy");
    if (textoAdicional.style.display === "none") {
        textoAdicional.style.display = "block";
        clicker.style.color = "pink";
    } else {
        textoAdicional.style.display = "none";
        clicker.style.color = "#E75480";
    }
}
document.getElementById("clicker").onclick = showTextAndChangeColor;
*/

document.getElementById("clicker").style.color = "white";

function showTextAndChangeColor() {
    var clicker = document.getElementById("clicker");
    var textoAdicional = document.getElementById("Quien-soy");
    if (textoAdicional.style.display === "none") {
        textoAdicional.style.display = "block";
        clicker.style.color = "pink";
    } else {
        textoAdicional.style.display = "none";
        clicker.style.color = "#E75480";
    }
}

document.getElementById("clicker").onclick = showTextAndChangeColor;
