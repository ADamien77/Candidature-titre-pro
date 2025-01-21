"use strict";

// Sélectionne tous les liens (<a>) dans la barre de navigation (nav) et leur applique un événement de clic.
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien, qui est de rediriger vers une autre page.

        // Récupère la cible du lien (valeur de l'attribut href) et sélectionne l'élément correspondant dans le DOM.
        const target = document.querySelector(this.getAttribute('href'));

        // Fait défiler la page de manière fluide jusqu'à l'élément ciblé.
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Sélectionne tous les éléments <section> de la page.
const sections = document.querySelectorAll('section');

// Crée un observateur d'intersection pour détecter quand une section entre ou sort du champ de vision.
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Vérifie si la section est visible dans la fenêtre.
            entry.target.classList.add('active'); // Ajoute une classe 'active' pour marquer la section visible.
        } else {
            entry.target.classList.remove('active'); // Retire la classe 'active' lorsque la section n'est plus visible.
        }
    });
}, {
    threshold: 0.15 // Déclenche l'événement lorsque 15% de la section est visible.
});

// Associe chaque section à l'observateur pour surveiller leur visibilité.
sections.forEach(section => observer.observe(section));

// Attache un événement qui s'exécute lorsque le DOM est entièrement chargé.
document.addEventListener('DOMContentLoaded', () => {
    // Définit les lignes de texte à afficher avec un effet "machine à écrire".
    const textLines = [
        "Candidature pour le titre professionnel de Développeur Web et Web Mobile",
        "ABADIE Damien - 2025"
    ];

    // Sélectionne l'élément où le texte sera affiché.
    const typewriter = document.getElementById('typewriter-text');

    let lineIndex = 0; // Index de la ligne actuelle dans le tableau textLines.
    let charIndex = 0; // Index du caractère actuel dans la ligne en cours.

    // Fonction récursive pour l'effet "machine à écrire".
    function typeWriterEffect() {
        if (lineIndex < textLines.length) { // Vérifie s'il reste des lignes à afficher.
            const currentLine = textLines[lineIndex]; // Récupère la ligne en cours.

            if (charIndex < currentLine.length) { // Vérifie s'il reste des caractères à afficher dans la ligne actuelle.
                typewriter.innerHTML += currentLine.charAt(charIndex); // Ajoute le caractère suivant à l'élément.
                charIndex++; // Passe au caractère suivant.
                setTimeout(typeWriterEffect, 50); // Attend 50ms avant d'afficher le prochain caractère.
            } else {
                typewriter.innerHTML += "<br>"; // Ajoute un saut de ligne après la fin de la ligne actuelle.
                charIndex = 0; // Réinitialise l'index des caractères pour la prochaine ligne.
                lineIndex++; // Passe à la ligne suivante.
                setTimeout(typeWriterEffect, 500); // Attend 500ms avant de commencer à afficher la prochaine ligne.
            }
        }
    }

    // Démarre l'effet "machine à écrire".
    typeWriterEffect();
});





