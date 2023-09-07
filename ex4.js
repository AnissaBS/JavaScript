alert("Exercice 4 :")

let budget = Number (prompt("Entrez à combien s'élève votre budget"));
alert("Voici votre budget : " + budget);
document.write("Voici votre budget : " + budget)

let achats = Number (prompt("Entrez le montant de la totalité de vos achats"));
alert("Voici le montant de vos achats : " + achats);
document.write("Voici le montant de vos achats : " + achats)

if(budget>=achats){
    alert("Votre budget peut couvrir la totalité de vos achats. Impeccable !")
    document.write("Voici ce qu'il va vous rester : " + (budget-achats))
}
else{
    alert("C'est la hess tu peux pas payer là c'est chaud...")
}
console.log(budget-achats);

