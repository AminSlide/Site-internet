//viens chercher l'id spécifique
let idpage = new URLSearchParams(window.location.search).get("id");

let cloneperso = document.importNode(perso.content, true);

let produit = tab[idpage-1]

//en fonction de l'id montre le bon produit
$(function() {
    newContent3 = cloneperso.firstElementChild.innerHTML
        .replaceAll("{{num}}", produit._id)
        .replace("{{Nom}}",produit._nom);
    cloneperso.firstElementChild.innerHTML = newContent3;
    
    document.getElementById("Partieperso").appendChild(cloneperso);
})