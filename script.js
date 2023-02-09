// Ecrire le text HTML

analogies.forEach(function(analogie){
    document.querySelector("main").innerHTML = document.querySelector("main").innerHTML + "<section id="+ classBox[numCase]+ "> <div class='box " +classBox[numCase] + "'> <img alt='' src= " +images[numCase] + "> <div class='box-text'><h2> Si j'étais <span>" + analogie + "</span><br> je serais <span>" + valueurAnalogie[numCase] + "</span></h2> </div> </div> <div class='description " + classDescription[numCase] + " description-invisible'><p>"+ description[numCase] + "</p> <button type='button' class=" + classBouton[numCase] +">X</bouton></div></section>"
    numCase=numCase+1
})

var Afficher = document.querySelector('.Afficher')

Afficher.addEventListener('click', function(analogieValue){  //Quand on clique sur le bouton Afficher
    var form = document.querySelector("form") //sélectionner le formulaire
if(form.checkValidity()) { //vérifie si le formulaire est bien remli
    var analogieValue = document.querySelector('.analogie').value //on récupère ce que l'utilisateur a écrit dans le champ analogie du formulaire
    document.querySelector('.visualisation-analogie').innerHTML=analogieValue //et on le met sur le site
    
    var Explication = document.querySelector('textarea').value
    document.querySelector('.visualisation-description').innerHTML=Explication

    var valeurAnalogieValue = document.querySelector('.valeurAnalogie').value
    document.querySelector('.visualisation-valeurAnalogie').innerHTML=valeurAnalogieValue

    document.querySelector('.visualisation').classList.remove('visualisation-invisible') //faire apparaitre la nouvelle analogie
    
    //ajouter une image
    var boxVisual = document.querySelector(".box-visualisation") //sélectionner la div dans laquelle vont se trouver les élements
    var form = document.querySelector("form") //sélectionner le formulaire

    var image = form.querySelector("input[type='file']"); //récuperer le fichier que l'utilisateur va déposer
    var img = document.createElement("img"); //créer l'élement pour img pour l'image
    img.src = URL.createObjectURL(image.files[0]); //lier le lien de l'image sélectionnée à la balise
    // Vérifie si une image existe déjà dans la div
    var oldImg = boxVisual.querySelector("img");
    if (oldImg) {
    boxVisual.removeChild(oldImg);
    }
    boxVisual.prepend(img); //placer l'image dans la div  
    } else {
        console.log("C'est mal rempli")
      }
    //Afficher le contenu ajouté
})

//Emepecher la page de se récharger au submit
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault(); 
    //Envoyer les données du formulaire
var mail = document.querySelector(".mail").value
var prenom = document.querySelector(".prenom").value
var analogie = document.querySelector(".analogie").value
var valeurAnalogie = document.querySelector(".valeurAnalogie").value
var pourquoi = document.querySelector("textarea").value

var Envoyer = document.querySelector('.envoyer')

var data = prenom + analogie + valeurAnalogie + pourquoi
Envoyer.addEventListener('click', function(e){
    var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=alina&courriel="+mail+"&message="+data
    fetch(urlVisitee).then(function(response) {
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data);
        })
      })      
})
});

//ouvrir desscription animal en supprimant la classe "description-invisible" et en ajoutant "description-visible"
var boxanimal = document.querySelector(".box-animal")
var descriptionanimal = document.querySelector(".description-animal")

boxanimal.addEventListener('click',function(e){
    document.querySelector('.description-animal').classList.remove('description-invisible')
    document.querySelector('.description-animal').classList.add('description-visible')
    document.querySelector('.box-animal').classList.add('box-description')
})

//fermer description animal
var boutonanimal = document.querySelector(".bouton-animal")

boutonanimal.addEventListener('click',function(e){
    document.querySelector('.description-animal').classList.remove('description-visible')
    document.querySelector('.description-animal').classList.add('description-invisible')
    document.querySelector('.box-animal').classList.remove('box-description')
})


//ouvrir description du Deesse
var boxDeesse = document.querySelector(".box-Deesse")
var descriptionDeesse = document.querySelector(".description-Deesse")

boxDeesse.addEventListener('click',function(e){
    document.querySelector('.description-Deesse').classList.remove('description-invisible')
    document.querySelector('.description-Deesse').classList.add('description-visible')
    document.querySelector('.box-Deesse').classList.add('box-description')
})
//fermer description du Deesse
var boutonDeesse = document.querySelector(".bouton-Deesse")

boutonDeesse.addEventListener('click',function(e){
    document.querySelector('.description-Deesse').classList.remove('description-visible')
    document.querySelector('.description-Deesse').classList.add('description-invisible')
    document.querySelector('.box-Deesse').classList.remove('box-description')
})


//ouvrir description transport
var boxtransport = document.querySelector(".box-transport")
var descriptiontransport = document.querySelector(".description-transport")

boxtransport.addEventListener('click',function(e){
    document.querySelector('.description-transport').classList.remove('description-invisible')
    document.querySelector('.description-transport').classList.add('description-visible')
    document.querySelector('.box-transport').classList.add('box-description')
})

//fermer description transport
var boutontransport = document.querySelector(".bouton-transport")

boutontransport.addEventListener('click',function(e){
    document.querySelector('.description-transport').classList.remove('description-visible')
    document.querySelector('.description-transport').classList.add('description-invisible')
    document.querySelector('.box-transport').classList.remove('box-description')
})


//ouvrir desscription element
var boxelement = document.querySelector(".box-element")
var descriptionelement = document.querySelector(".description-element")

boxelement.addEventListener('click',function(e){
    document.querySelector('.description-element').classList.remove('description-invisible')
    document.querySelector('.description-element').classList.add('description-visible')
    document.querySelector('.box-element').classList.add('box-description')
})

//fermer description element
var boutonelement = document.querySelector(".bouton-element")

boutonelement.addEventListener('click',function(e){
    document.querySelector('.description-element').classList.remove('description-visible')
    document.querySelector('.description-element').classList.add('description-invisible')
    document.querySelector('.box-element').classList.remove('box-description')
})

//ouvrir desscription chaussure
var boxchaussure = document.querySelector(".box-chaussure")
var descriptionchaussure = document.querySelector(".description-chaussure")

boxchaussure.addEventListener('click',function(e){
    document.querySelector('.description-chaussure').classList.remove('description-invisible')
    document.querySelector('.description-chaussure').classList.add('description-visible')
    document.querySelector('.box-chaussure').classList.add('box-description')
})

//fermer description chaussure
var boutonchaussure = document.querySelector(".bouton-chaussure")

boutonchaussure.addEventListener('click',function(e){
    document.querySelector('.description-chaussure').classList.remove('description-visible')
    document.querySelector('.description-chaussure').classList.add('description-invisible')
    document.querySelector('.box-chaussure').classList.remove('box-description')
})

//ouvrir desscription crystal
var boxcrystal = document.querySelector(".box-crystal")
var descriptioncrystal = document.querySelector(".description-crystal")

boxcrystal.addEventListener('click',function(e){
    document.querySelector('.description-crystal').classList.remove('description-invisible')
    document.querySelector('.description-crystal').classList.add('description-visible')
    document.querySelector('.box-crystal').classList.add('box-description')
})

//fermer description crystal
var boutoncrystal = document.querySelector(".bouton-crystal")

boutoncrystal.addEventListener('click',function(e){
    document.querySelector('.description-crystal').classList.remove('description-visible')
    document.querySelector('.description-crystal').classList.add('description-invisible')
    document.querySelector('.box-crystal').classList.remove('box-description')
})

//ouvrir desscription jeu
var boxjeu = document.querySelector(".box-jeu")
var descriptionjeu = document.querySelector(".description-jeu")

boxjeu.addEventListener('click',function(e){
    document.querySelector('.description-jeu').classList.remove('description-invisible')
    document.querySelector('.description-jeu').classList.add('description-visible')
    document.querySelector('.box-jeu').classList.add('box-description')
})

//fermer description jeu
var boutonjeu = document.querySelector(".bouton-jeu")

boutonjeu.addEventListener('click',function(e){
    document.querySelector('.description-jeu').classList.remove('description-visible')
    document.querySelector('.description-jeu').classList.add('description-invisible')
    document.querySelector('.box-jeu').classList.remove('box-description')
})

//ouvrir desscription visualisation
var boxvisualisation = document.querySelector(".box-visualisation")
var descriptionvisualisation = document.querySelector(".description-visualisation")

boxvisualisation.addEventListener('click',function(e){
    document.querySelector('.description-visualisation').classList.remove('description-invisible')
    document.querySelector('.description-visualisation').classList.add('description-visible')
    document.querySelector('.box-visualisation').classList.add('box-description')
})

//fermer description visualisation
var boutonvisualisation = document.querySelector(".bouton-visualisation")

boutonvisualisation.addEventListener('click',function(e){
    document.querySelector('.description-visualisation').classList.remove('description-visible')
    document.querySelector('.description-visualisation').classList.add('description-invisible')
    document.querySelector('.box-visualisation').classList.remove('box-description')
})

//ouvrir desscription mentions
var ouvrirMentions = document.querySelector(".mention-bouton")

ouvrirMentions.addEventListener('click',function(e){
    document.querySelector('.mentions').classList.remove('mentions-invisible')
})

//ouvrir desscription mentions
var fermerMentions = document.querySelector(".fermer-mentions")
fermerMentions.addEventListener('click',function(e){
    document.querySelector('.mentions').classList.add('mentions-invisible')
})

//code trouvé avec l'aide de internet sur un forum
// récuperer le body
var bg = document.querySelector("body");

// Attendre le scroll
window.addEventListener("scroll", function() {
  // Récuperer la position du scroll
  var y = window.pageYOffset;

  // Mettre la position de l'arrière plan par rapport à la position du reste
  bg.style.backgroundPosition = "center " + (y * -0.3) + "px";
});