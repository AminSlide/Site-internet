

const m1 = document.getElementById("main1");
const m2 = document.getElementById("main2");
const t1 = document.getElementById("type1");
const t2 = document.getElementById("type2");
const t3 = document.getElementById("type3");


//Les filtres viennent cacher les élements non selectionnés
function FiltreNbmain1(){
    if (m1.checked == true) {
        for (const produit of produits) {
            if (produit._Nbmain != 1) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "none";
            }
        }
    }
    if (m1.checked == false) {
        for (const produit of produits) {
            if (Verification(produit) == true) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "block";
            }
        }
    }
}
function FiltreNbmain2(){
    if (m2.checked == true){
        for (const produit of produits) {
            if (produit._Nbmain != 2) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "none";
            }
        }
    } 
    if (m2.checked == false) {
        for (const produit of produits) {
            if (Verification(produit) == true) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "block";
            }
        }
    }
}
function FiltreType1(){
    if (t1.checked == true) {
        for (const produit of produits) {
            if (produit._type != "courte") {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "none";
            }
        }
    }
    if (t1.checked == false) {
        for (const produit of produits) {
            if (Verification(produit) == true) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "block";
            }
        }
    }
}
function FiltreType2(){
    if (t2.checked == true){
        for (const produit of produits) {
            if (produit._type != "longue") {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "none";
            }
        }
    }
    if (t2.checked == false) {
        for (const produit of produits) {
            if (Verification(produit) == true) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "block";
            }
        }
    }
}
function FiltreType3(){
    if (t3.checked == true){
        for (const produit of produits) {
            if (produit._type != "arme special") {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "none";
            }
        }
    }
    if (t3.checked == false) {
        for (const produit of produits) {
            if (Verification(produit) == true) {
                var x = document.getElementById("div"+produit._id);
                x.style.display = "block";
            }
        }
    }
}
//Gere les conflits entre filtre
function Verification(arme){
    if (m1.checked == true && m2.checked == true) {
        return false
    }
    if (t1.checked == true && t2.checked == true) {
        return false
    }
    if (t1.checked == true && t3.checked == true) {
        return false
    }
    if (t2.checked == true && t3.checked == true) {
        return false
    }
    if (m1.checked == true) {
        if (arme._Nbmain ==1) {
            if (t1.checked == true) {
                if(arme._type =="courte" ) {
                    return true
                }
                else {
                    return false
                }
            }
            if (t2.checked == true) {
                if(arme._type =="longue") {
                    return true
                }
                else {
                    return false
                }
            }
            if (t3.checked == true) {
                if(arme._type =="arme special") {
                    return true
                }
                else {
                    return false
                }
            }
            else {
                return true
            } 
        }
        else {
            return false
        }
    }
    if (m2.checked == true) {
        if (arme._Nbmain ==2) {
            if (t1.checked == true) {
                if(arme._type =="courte" ) {
                    return true
                }
                else {
                    return false
                }
            }
            if (t2.checked == true) {
                if(arme._type =="longue") {
                    return true
                }
                else {
                    return false
                }
            }
            if (t3.checked == true) {
                if(arme._type =="arme special") {
                    return true
                }
                else {
                    return false
                }
            }
            else {
                return true
            } 
        }
        else {
            return false
        }
    }
    if (t1.checked == true) {
        if(arme._type =="courte" ) {
            return true
        }
        else {
            return false
        }
    }
    if (t2.checked == true) {
        if(arme._type =="longue") {
            return true
        }
        else {
            return false
        }
    }
    if (t3.checked == true) {
        if(arme._type =="arme special") {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    } 
}

