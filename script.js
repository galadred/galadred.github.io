// Mettre un style Special
document.getElementById("boutonValider").addEventListener("click", afficherBienvenue);

function afficherBienvenue() {
  var mymail = document.getElementById("mymail").value;
  document.getElementById("zoneMessage").textContent = "Votre mail: " + mymail + " a bien été enregistré!";

  
}
function informations(symboles) {
  if (symboles == "rien") {
    document.getElementById("infoSymbole").classList.remove("special");
    document.getElementById("infoSymbole").textContent="";
  }
  else {
    document.getElementById("infoSymbole").classList.add("special");
    if (symboles == "Aigle") {
    document.getElementById("infoSymbole").textContent="Selon la légende, l'aigle blanche serait née quand Lech, le mythique fondateur de la Pologne, vit un nid d'aigle blanc et, le considérant de bon augure, fonda la ville de Gniezno (gniazdo qui veut dire nid en polonais). Au moment où l'aigle déploya ses ailes pour s'envoler dans le ciel, un rayon de soleil couchant rouge illumina ses ailes, de telle manière qu'elles paraissaient dorées ; mais le reste de son corps était blanc !";
    }
    if (symboles== "Couleur du drapeau") {
    document.getElementById("infoSymbole").textContent="Les couleurs nationales ont une origine héraldique dérivant des couleurs des armoiries de la Pologne et de la Lituanie. Elles furent officiellement adoptées en 1831. Le drapeau fut pour sa part adopté officiellement en 1919. Depuis 2004, il est fêté le 2 mai !";
    }
    if (symboles == "Hymne National") {
    document.getElementById("infoSymbole").textContent="Mazurek Dąbrowskiego (« La Mazurka de Dombrowski ») est un chant patriotique polonais écrit en 1797 en Italie, lors de la création des Légions polonaises au service de la République française, précisément dans le cadre de l'armée d'Italie du général Bonaparte, dont le nom est cité dans le chant !";
    }
  }
}
