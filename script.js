/* Quand je clique sur l'icône */
let icons = document.getElementById('icons');

/*Au clic j'aimerais que tu me sortes et caches la clsse active */
icons.addEventListener("click", function(){
    nav.classList.toggle("active");
})

/* En cliquant sur un de ces boutons, le navbar se re-range */
// Pour ce faire, on pointe tous nos liens //
const links = document.querySelectorAll("nav li"); /* On place toutes nos balises enfants (li) dans la variable links */

links.forEach(link =>{
    link.addEventListener("click", ()=>{    /* ()=> équivaut à function{}; */
        /* Les trois <li>, je les appelle link qui est un paramètre, puis j'ajoute un évènement click sur chacun des li, vérifiable avec un console.log(links);  */
        nav.classList.remove("active"); /*Enfin, j'enlève la classe li si jamais on clique */
    })
});