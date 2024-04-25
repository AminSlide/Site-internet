//fonction menu déroulant, fait apparaitre le menu
function MenuD() {
    var x = document.getElementById("Lien");
    var e = document.getElementById("Content");
    if (x.style.display == "flex") {
        x.style.display = "none";
        e.style.top = "270px";
    } 
    else {
        x.style.display = "flex";
        e.style.top = "350px";
    }
} 
