//Construcion class Produit et créatio de nos 5 produits
class Produit {
    constructor(nom,prix,type,Nbmain,id){
        this._nom = nom;
        this._prix = prix; 
        this._type = type;
        this._Nbmain = Nbmain;
        this._id = id;
    }
}
/* type 1 = courte // type 2 = longue // type 3 = arme special*/ 
var arme1 = new Produit("Le Colt M1911A1","2000 £","courte","1","1")
var arme2 = new Produit("Anneaux sonic","2 500 000 £","arme special","1","2")
var arme3 = new Produit("zanpakuto","15 000£","longue","2","3")
var arme4 = new Produit("desert eagle","10 000 £","courte","2","4")
var arme5 = new Produit("Le Smith & Wesson M&P","4000 £","courte","1","5")

const tab = [arme1,arme2,arme3,arme4,arme5];
//Construction class Commande dans laquelle on va créer la commande a effectuer
class Commande {
    constructor(nom,prix,type,Nbmain,id,Carme,Cpoi,nombre){
        this._nom = nom;
        this._prix = prix; 
        this._type = type;
        this._Nbmain = Nbmain;
        this._id = id;
        this._Carme = Carme;
        this._Cpoi = Cpoi;
        this._Nb = nombre
    }
}

//fonction qui load nos header et footer
$(function(){
    $("#headerG").load("header.html");
    $("#footer").load("footer.html");
})


//fonction qui detecte le scroll pour afficher notre bouton up

window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var y = document.getElementById("scrollUp");
    if (document.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        y.style.display = "block";
    } 
    else {
        y.style.display = "none";
    }
}

