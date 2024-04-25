//pour chacun de nos produit viens completer le template

let produits = tab;

for (const produit of produits) {
    let templateproduit = document.importNode(produittemp.content, true);

    newContent1 = templateproduit.firstElementChild.innerHTML
        .replace("{{Nom}}",produit._nom)
        .replace("{{Type}}",produit._type)
        .replace("{{Prix}}",produit._prix)
        .replaceAll("{{numid}}", produit._id);   
    templateproduit.firstElementChild.innerHTML = newContent1;

    document.getElementById("parent").appendChild(templateproduit)

}