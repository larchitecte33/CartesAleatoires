// Fonction qui va chercher un nombre aléatoire
// Retourne un nombre aléatoire entre 0 et max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Fonction qui va permettre d'obtenir un code couleur hexadécimal aléatoire
// Retourne le code couleur
function getCouleurAleatoire() {
  const tabLettreCouleur = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let couleur = '';

  for(let i = 0; i < 6; i++) {
    const indexCouleur = getRandomInt(15);
    couleur = couleur + tabLettreCouleur[indexCouleur];
  }

  return couleur;
}

// Fonction qui va retourner un prénom qui n'a pas déjà été tiré
// Paramètres =>
//   prenomTires : liste des prénoms qui ont déjà été tirés au sort
//   cartesTires : liste des cartes qui ont déjà été dévoilées
//   carte : l'id de la carte sur laquelle l'utilisateur vient de cliquer
// Renvoie un prénom
function getTexteAleatoire(prenomTires, cartesTires, carte) {
  const prenoms = ['Esteban', 'Dylan', 'Melissa', 'Lionel', 'Mathis', 'Christophe', 'Gauthier', 'Joelle', 'Loic', 'Morgane', 'Philippe', 'David']

  do {
    indexPrenom = getRandomInt(12);
  }
  while(prenomTires.indexOf(prenoms[indexPrenom]) != -1)

  prenomTires.push(prenoms[indexPrenom]);

  cartesTires.push(carte);
  return prenoms[indexPrenom];
}

// Fonction qui permet de recharger la page
function reloadPage() {
  document.location.reload();
}

window.onload = function(){
    const cards = document.getElementsByClassName('card');

    let prenomTires = [];
    let cartesTires = [];

    // Pour chacune de nos cartes, on ajoute un eventListener sur le clic
    Object.keys(cards).forEach(function(k) {
      cards[k].addEventListener('click', function() {
        if(cartesTires.indexOf(cards[k].attributes[1].value) == -1) {
          cards[k].getElementsByTagName('img')[0].src = "https://via.placeholder.com/200/" + getCouleurAleatoire(cartesTires) + "/" +
            "FFFFFF" + "/?text=" + getTexteAleatoire(prenomTires, cartesTires, cards[k].attributes[1].value);
        }
      }, false);
    });
}
