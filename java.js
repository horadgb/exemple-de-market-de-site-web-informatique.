let slides = document.querySelectorAll(".slide");
let index = 0;

// fonction pour afficher une slide
function showSlide() {

    // cacher toutes les slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // afficher la slide actuelle
    slides[index].classList.add("active");

    // passer à la suivante
    index++;

    // revenir au début
    if (index >= slides.length) {
        index = 0;
    }
}
// démarrage automatique
setInterval(showSlide, 4000);




// section formulaire

// On récupère le bouton "Se connecter" depuis le HTML grâce à son ID
const btnConnexion = document.getElementById("btnConnexion");

// On récupère le bouton "S'inscrire" depuis le HTML grâce à son ID
const btnInscription = document.getElementById("btnInscription");

// On récupère le formulaire de connexion depuis le HTML grâce à son ID
const formConnexion = document.getElementById("formConnexion");

// On récupère le formulaire d'inscription depuis le HTML grâce à son ID
const formInscription = document.getElementById("formInscription");


// Quand on clique sur le bouton "Se connecter"
btnConnexion.addEventListener("click", function() {

    // On affiche le formulaire de connexion
    formConnexion.style.display = "block";

    // On cache le formulaire d'inscription
    formInscription.style.display = "none";
});


// Quand on clique sur le bouton "S'inscrire"
btnInscription.addEventListener("click", function() {

    // On affiche le formulaire d'inscription
    formInscription.style.display = "block";

    // On cache le formulaire de connexion
    formConnexion.style.display = "none";
});