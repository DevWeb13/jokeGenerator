const header = document.getElementById("header");
const content = document.getElementById("content");

/**
 * Récupération de l'API + affichage de la blague dans son container
 *
 * @return  {void}  Affiche une blague aléatoire dans son container
 */
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();
/**
 * Au clic affichage d'une nouvelle blague
 */
document.body.addEventListener("click", getJoke);
