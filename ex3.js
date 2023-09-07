alert("Exercice 3 :")

var maths = Number (prompt("Entrez la note pour la matière de Maths"));
alert("Voici la première note donnée : " + maths);

var francais = Number (prompt("Entrez la note pour la matière de Français"));
alert("Voici la seconde note donnée : " + francais);

var hg = Number (prompt("Entrez la note pour la matière d'Histoire-Géographie"));
alert("Voici la troisième note donnée : " + hg);

var result = ((maths+francais+hg)/3);
console.log((maths+francais+hg)/3);
alert("Voici la moyenne :" + ((maths+francais+hg)/3));
document.write("Voici la moyenne de l'élève : " + ((maths+francais+hg)/3))