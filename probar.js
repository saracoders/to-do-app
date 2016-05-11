
function getInputValue(){
var inputBox = document.getElementById("inputBox");
return inputBox.value;

}

// Si no tinee contenido no crea un tweeted
function tweet() {
	var inputBoxValue= getInputValue();
	if (inputBoxValue !== "") {
		dotweet(inputBoxValue);
		clean();
	}
}
// Funcion para  crear los tweeeted 
function dotweet(tweetText){
	var tweets = document.getElementById("tweets");

	// Crear elementos
	var tweeted = document.createElement("div");
	var checkBox = document.createElement("input");
	var elemento = document.createElement("div");
	var eliminar = document.createElement("span");
	
	// Agregar Clases 
	tweeted.className = "tweeted";
	eliminar.className = "borrar glyphicon glyphicon-trash" ;
	elemento.className = "tweet";
	
	// Colocar el tipo checkbox
	checkBox.type = 'checkBox';

	
	// Subrayar elemento (strike) 
	checkBox.onchange = function() {
		if (checkBox.checked == true) {
			elemento.innerHTML = tweetText.strike();
		} else {
			elemento.innerHTML = tweetText;
		}	
	}

	// Eliminar el elemento
	eliminar.onclick = function(){
		tweets.removeChild(tweeted);
	}
	

	checkBox.innerHTML = tweetText;
	elemento.innerHTML = tweetText;

	// agragar elementos o tweets

	tweeted.appendChild(checkBox);
	tweeted.appendChild(elemento);
	tweeted.appendChild(eliminar);

	tweets.appendChild(tweeted);
}


// Eliminar el textarea al presionar el button
function clean(){
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

