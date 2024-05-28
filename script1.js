// Une simple alerte
document.getElementById("boutonValider").addEventListener("click", afficherBienvenue);

function afficherBienvenue() {
  var mycomments = document.getElementById("mycomments").value;
  document.getElementById("zoneMessage").textContent = "Votre commentaire: " + mycomments + " merci de votre commentaire!";

  
}
function choix(color){
    document.body.style.background = color;
    document.getElementById("resultat").textContent=color;
}