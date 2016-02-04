var $liste = document.getElementById("liste");
var $texte = document.getElementById("texte");
var $ajouter = document.getElementById("ajouter");
var $annuler = document.getElementById("annuler")

var tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
    var elements = "";
    for (var i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}

function annuler() {
    tableau.pop($texte.value);
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();
$annuler.onclick = annuler;
afficherListe();