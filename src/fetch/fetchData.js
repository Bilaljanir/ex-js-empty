/**
 * En JavaScript, nous pouvons utiliser la fonction fetch pour effectuer des appels HTTP vers le réseau
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * Dans l'exercice suivant, lorsque l'utilisateur clique sur le bouton avec l'id "click-to-fetch",
 * vous devez appeler cette URL : https://api.github.com/octocat
 * Ensuite, vous devez afficher le contenu renvoyé par l'API dans la balise "pre" avec l'id "display-here"
 */


export async function fetchDataOnClick() {
    try {
        const response = await fetch("https://api.github.com/octocat");

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        // Récupère le contenu de la réponse sous forme de texte et stocker dans le variable const
        const data = await response.text();

        const displayHere = document.getElementById("display-here");

        // Met à jour le contenu de l'élément <pre>
        if (displayHere) {
            displayHere.textContent = data;
        } else {
            console.error("Élément avec l'id 'display-here' non trouvé.");
        }
    } catch (error) {
        console.error("Une erreur s'est produite :", error);
    }
}


// Ajoute un écouteur d'événements au bouton avec l'id "click-to-fetch"
const fetchButton = document.getElementById("click-to-fetch");

if (fetchButton) {
    fetchButton.addEventListener("click", fetchDataOnClick);
} else {
    console.error("Bouton pas trouvé.");
}
