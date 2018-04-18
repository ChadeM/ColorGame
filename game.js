
 var numberOfSq = 6;
 var square = document.querySelectorAll('.square');
 var colors = generateRandomColors(numberOfSq);

 var pickedColor = pickcolor();
 var colorDisplay = document.getElementById('colorDisplay');
 var messageDisplay = document.querySelector('#message');
 var h1 = document.querySelector('h1');
 var resetButton = document.querySelector('#reset');
 var modeButtons = document.querySelectorAll(".mode");
 var easy = document.querySelector(".easy");
 var hard = document.querySelector(".hard");

 for(var i = 0; i < modeButtons.length; i++){
 	modeButtons[i].addEventListener('click', function (){
 		modeButtons[0].classList.remove('selected');
 		modeButtons[1].classList.remove('selected');
 		this.classList.add('selected');
 	 this.textContent === "Easy" ? numberOfSq = 3: numberOfSq = 6;
 		reset();


 	});
 }


 colorDisplay.textContent = pickedColor;
 h1.style.backgroundColor = "#005B96";

 function reset(){

 	 colors = generateRandomColors(numberOfSq);
 	 //pick  a new random color from array
 	 pickedColor = pickcolor();
 	 //change display color to match picked color
 	  colorDisplay.textContent = pickedColor;
 	  resetButton.textContent = "New Colors "
 	  messageDisplay.textContent = "";
 	 //change color of square
 	 for (var i = 0; i < square.length; i++){
     if(colors[i]){
       square[i].style.display = "block";
       square[i].style.backgroundColor = colors[i];
     }else {
       square[i].style.display = "none";
     }


 	 }

 	 h1.style.backgroundColor = "#005B96";

 }

 // the play agagin/new color option
 resetButton.addEventListener("click", function(){
   reset();

 });


 for (var i = 0; i < square.length; i++){
 	//add colors to squares
 	square[i].style.backgroundColor = colors[i];

 	//add click listeners to square
 	square[i].addEventListener('click', function(){

 		var userSelect = this.style.backgroundColor;

 		if(userSelect === pickedColor){
 			messageDisplay.textContent = "Correct";
 			resetButton.textContent = "Play Again? "
 			changeColor(pickedColor);
 			h1.style.backgroundColor = userSelect;

 		}else {
 			 this.style.backgroundColor = "#232323";
 			 messageDisplay.textContent = "Try Again";

 		}

 	});

 }

//Change the color of square when correct answer is picker
function changeColor (color){
	for (var i = 0; i < square.length; i++){

		square[i].style.backgroundColor = color;

	}
}

// The RGB that is displayed in H1 header
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);

	var colorsz = colors[random]
	console.log(colorsz);


	return colors[random];

}

function generateRandomColors (num){
	//make array
	var arr = [];
	for(var i = 0; i < num; i++){

		var red = Math.floor(Math.random() * 256);
         // picks a green rgb
     	var green = Math.floor(Math.random() * 256);
            // picks a blue rgb
	    var blue = Math.floor(Math.random() * 256);

	    var rgb =  "rgb(" + red + ", " + green + ", " + blue + ")";
		//get random color and push into array
		arr.push(rgb);
	}

	return arr;

}
