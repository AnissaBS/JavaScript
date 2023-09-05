    // Algorithme Inconnu

var nombre_inc = 10;
var nombre_entre;

nombre_entre = prompt("Quel est le nombre inconnu ?")

if(nombre_entre > nombre_inc){
    alert("C'est trop grand");
}

if(nombre_entre < nombre_inc){
    alert("C'est trop petit");
}

if(nombre_entre == nombre_inc){ // " == " : pour que ce ne soit pas une affectation ("=") mais plutôt pour vérifier si les deux sont égaux
    alert("C'est top !");
} 
    