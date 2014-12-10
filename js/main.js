//declaracion de variables

var comenzar = document.getElementById('play');


//funciones

comenzar.onclick = function(){
	var myplay = document.getElementById('reflex');
	myplay.style.display = "block";
	
	//variables de tiempo
	var creoTime; var clickTime;


	//desabilitando el boton de start
	comenzar.disabled = true;
	comenzar.style.background = "aliceblue";

	//variables de cada boton
	var myball1 = document.getElementById('bola1');
	var myball2 = document.getElementById('bola2');
	var myball3 = document.getElementById('bola3');
	var myball4 = document.getElementById('bola4');

	//variables de para poner en el html los times
	var putTime = document.getElementById('times');

	//Comienzo del juego llamando a la funcion encendido
	encendido();

	function encendido(){
		var x = Math.random();
		x = 4*x
		x = Math.floor(x);
		console.log(x);
		creoTime = Date.now();
		if (x === 0 ){
			
			myball1.style.background = 'white';
			myball1.style.color = "black";
			myball1.onclick = function(){
				
				myball1.style.background = 'black';
				myball1.style.color = 'white';
				clickTime = Date.now();
				var diff = (clickTime - creoTime)/1000;
				console.log(diff+'s');
				putTime.innerHTML = diff+'s';
				myball1.onclick=function(){
					return false;
				}
				encendido();
			}
		}

		if (x === 1 ){
			//myball2.disabled = false;
			myball2.style.background = 'white';
			myball2.style.color = "black";
			myball2.onclick = function(){
				
				
				myball2.style.background = 'black';
				myball2.style.color = 'white';
				clickTime = Date.now();
				var diff = (clickTime - creoTime)/1000;
				console.log(diff+'s');
				putTime.innerHTML = diff+'s';
				myball2.onclick=function(){
					return false;
				}
				encendido();
			}
		}

		if (x === 2 ){
			myball3.style.background = 'white';
			myball3.style.color = "black";
			myball3.onclick = function(){
				myball3.style.background = 'black';
				myball3.style.color = 'white';
				clickTime = Date.now();
				var diff = (clickTime - creoTime)/1000;
				console.log(diff+'s');
				putTime.innerHTML = diff+'s';
				myball3.onclick=function(){
					return false;
				}
				encendido();
			}
		}

		if (x === 3 ){
			myball4.style.background = 'white';
			myball4.style.color = "black";
			myball4.onclick = function(){
				myball4.style.background = 'black';
				myball4.style.color = 'white';
				clickTime = Date.now();
				var diff = (clickTime - creoTime)/1000;
				console.log(diff+'s');
				putTime.innerHTML = diff+'s';
				myball4.onclick=function(){
					return false;
				}
				encendido();
			}
		}
	}

}







