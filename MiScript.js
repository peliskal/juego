/*
abajo-ArrowDown
arriba-ArrowUp
izquierda-ArrowLeft
derecha-ArrowRight
*/


window.onload = () => {//funcion flecha
	const player = {//objeto player

		element : document.getElementById("player"),//element almacena el div player del html

		topPosition : 0,
		leftPosition : 0,
		step : 30,//variable de "velocidad" seria cantidad de pixeles

		move : function(direction){//move guarda la funcion de mover
			switch(direction){
			case "ArrowUp":
				//console.log("me muevo hacia arriba");
				this.topPosition = this.topPosition - this.step; //actualizamos la variable de arriba en el objeto, 0 - 30 = -30px hacia arriba
				this.element.style.top = this.topPosition + "px";//actualizamos el css, osea el div = element
				break;

			case "ArrowDown":
				this.topPosition = this.topPosition + this.step;
				this.element.style.top = this.topPosition + "px";
				break;

			case "ArrowLeft":
				this.leftPosition = this.leftPosition - this.step;
				this.element.style.left = this.leftPosition + "px";
				break;

			case "ArrowRight":
					this.leftPosition = this.leftPosition + this.step;
					this.element.style.left = this.leftPosition + "px";
					break;

					//tambien teclas w,s,a,d

			case "KeyW" :
				
				this.topPosition = this.topPosition - this.step; 
				this.element.style.top = this.topPosition + "px";
				break;

			case "KeyS":
				this.topPosition = this.topPosition + this.step;
				this.element.style.top = this.topPosition + "px";
				break;

			case "KeyA":
				this.leftPosition = this.leftPosition - this.step;
				this.element.style.left = this.leftPosition + "px";
				break;

			case "KeyD":
					this.leftPosition = this.leftPosition + this.step;
					this.element.style.left = this.leftPosition + "px";
				break;

			default:
				break;
			}

		}


	};
	onkeydown = (key) => {//funcion que determina que tecla apretamos en formato key
		//console.log(key.code);//muestro por console 
		player.move(key.code);
		//al tocar una letra voy a la funcion move y la ejecuto
		//pasando como parametro key.code

	}

}