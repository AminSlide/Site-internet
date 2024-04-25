let idC = new URLSearchParams(window.location.search).get("id");
//initialisation Couleur lame et poignée
var Carme = "basique";
var Cpoi = "basique";
var listec =[];
var commandajout;
//ajout couleur spécifique Lame
function CouleurArmeB(){
    Carme = "basique";
}
function CouleurArmeR(){
    Carme = "rouge";
}
function CouleurArmeN(){
    Carme = "noir";
}
//ajout couleur spécifique poigne
function CouleurPoiB(){
    Cpoi = "basique";
}
function CouleurPoiR(){
    Cpoi = "rouge";
}
function CouleurPoiN(){
    Cpoi = "noir";
}
//ajout produit Panier + ouverture page panier et reset des valeurs Carme et Cpoi

function AjoutCommande(){
    var NBobjet = document.getElementById("NBobjet").value;
    if (NBobjet == ''){
        alert("veillez choisir une quantité");
    }
    else{
        let pro = tab[idC-1]
        commandajout = new Commande(pro._nom,pro._prix ,pro._type,pro._Nbmain,pro._id,Carme,Cpoi,NBobjet);
        var commandajout_json = JSON.stringify(commandajout);
        sessionStorage.setItem("objet",commandajout_json);        
    }
    Carme = "basique";
    Cpoi = "basique";
    location.replace("pagepanier.html");
    

}
