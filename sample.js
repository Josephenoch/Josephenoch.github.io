function forhard(){

	var div4to6=document.getElementsByClassName("hidden");

	if (div4to6.length==0){

		var div= document.getElementById("div");

		for (var i = 0; i <3; i++) {

		newElement=document.createElement("div");

		newElement.setAttribute("class","d hidden");

		div.appendChild(newElement);

	}

	newgame();

}


}

function foreasy(){

	var div4to6=document.getElementsByClassName("hidden");	

	if (div4to6.length==3){

	for (var i=0; i<div4to6.length;i++){

		div4to6[0].parentNode.removeChild(div4to6[0]);

		
	}	

	div4to6[0].parentNode.removeChild(div4to6[0]);	

	newgame()

	}
	
}


function newrgb(){

	for(var i=0; i<=5;i++){

		var r=(Math.floor(Math.random()*(256-0)+0));
		
		var g=(Math.floor(Math.random()*(255-0)+0));

		var b=(Math.floor(Math.random()*(255-0)+0));	
		
	} 

	return "rgb("+ r + ", " + g + ", " + b +")"

}

function randomColors(num){
	// make an array
	var newcolors = [];
	// repeat num times
	for(var i=0; i<num; i++){
		// get random color and push into arr
		newcolors.push(newrgb())
	}
	// return that array
	return newcolors;
}

function shuffle(o){
	for (var x,j,i = o.length; i; j=parseInt(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
return o;
};

var div=document.getElementsByTagName("div");

var d=document.getElementsByClassName("d");

function newgame(){

	document.getElementById("firstdiv").style.background="repeating-linear-gradient(90deg, #222, #191970, #191970 ,#222, #191970)";

	h1=document.getElementsByTagName("h1")[0];

	if (d.length==6){

	var num =[0,1,2,3,4,5]

	var rand=shuffle(num)

	var colors=randomColors(6);

	h1.innerHTML=colors[Math.floor(Math.random()*(6-0)+0)];}

	else{

	var num =[0,1,2]

	var rand=shuffle(num)

	var colors=randomColors(3);

	h1.innerHTML=colors[Math.floor(Math.random()*(3-0)+0)];

	}

	var answer=h1.innerHTML;

	for(var i=0; i<d.length;i++){
										
			d[rand[i]].style.backgroundColor=colors[i];

	
	}

	for (var i=0; i<d.length;i++){

		d[i].addEventListener("click",done);

}

	function done(){

		var clickedcolor=this;

			if (clickedcolor.style.backgroundColor===answer){

				changeColors(answer);

				for (var i=0;i<d.length;i++)

					d[i].style.visibility="visible"; 

			}

			else{

				this.style.visibility="hidden";


			}

}
}




function changeColors(color){
	// Loop through all squares
	for(var i=0; i<div.length; i++){
		// Change each color to match given color
		div[i].style.background = color;
	}
}



