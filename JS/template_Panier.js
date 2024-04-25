//viens completer le template panier en fonction des commandes
var commandajout_json = sessionStorage.getItem("objet");
var commandajout = JSON.parse(commandajout_json);

var listec = [commandajout]

for (const Com of listec) {
    let templateCom = document.importNode(temppanier.content, true);

    newContent5 = templateCom.firstElementChild.innerHTML
        .replace("{{Nom}}",Com._nom)
        .replace("{{type}}",Com._type)
        .replace("{{Nbmain}}",Com._Nbmain)
        .replace("{{Prix}}",Com._prix)
        .replace("{{Nb}}",Com._Nb)
        .replace("{{Clame}}",Com._Carme)       
        .replace("{{Cpoi}}",Com._Cpoi);

    templateCom.firstElementChild.innerHTML = newContent5;

    document.getElementById("panierParent").appendChild(templateCom)

}

