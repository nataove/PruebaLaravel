var puntosSelec7 = new Array();

var puntosXSelect7 = new Array();
var puntosYSelect7 = new Array();

var puntosXSelect7First = new Array();
var puntosYSelect7First = new Array();

var puntoX7 = [13,35,117,140,118,34,12,141,143,10];
var puntoY7 = [50,11,11,51,89,89,12,12,89,91];

var stage7 = document.getElementById('canvas7');
stage7.width = 150;
stage7.height = 100;

var x17 =0;
var x27 =0;
var y17 =0;
var y27 =0;
var val7=0;

var selectCorrect7 = [0,0,0,0,0,0];
var totalSelect7 = 0;

var pSelect7 = [0,0,0,0,0,0];
var totalPSelect7 = 0;

var mouseDown7 = false;
var mouseClick7 = false;
var ctx7 = stage7.getContext("2d");

function validarF7(){
	var validar = 0;

	for(var i=0; i<puntosXSelect7First.length-1; i++){
		if(puntosXSelect7[0]>=puntoX7[0]-5&&puntosXSelect7[0]<=puntoX7[0]+5&&puntosYSelect7[0]>=puntoY7[0]-5&&puntosYSelect7[0]<=puntoY7[0]+5){
			if(puntosXSelect7[1]>=puntoX7[1]-5&&puntosXSelect7[1]<=puntoX7[1]+5&&puntosYSelect7[1]>=puntoY7[1]-5&&puntosYSelect7[1]<=puntoY7[1]+5){
				val7 = val7;
				pSelect7[0]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[5]-5&&puntosXSelect7[1]<=puntoX7[5]+5&&puntosYSelect7[1]>=puntoY7[5]-5&&puntosYSelect7[1]<=puntoY7[5]+5){
				val7 = val7;
				pSelect7[5]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[0]-5&&puntosXSelect7[1]<=puntoX7[0]+5&&puntosYSelect7[1]>=puntoY7[0]-5&&puntosYSelect7[1]<=puntoY7[0]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX7[1]-5&&puntosXSelect7[0]<=puntoX7[1]+5&&puntosYSelect7[0]>=puntoY7[1]-5&&puntosYSelect7[0]<=puntoY7[1]+5){
			if(puntosXSelect7[1]>=puntoX7[2]-5&&puntosXSelect7[1]<=puntoX7[2]+5&&puntosYSelect7[1]>=puntoY7[2]-5&&puntosYSelect7[1]<=puntoY7[2]+5){
				val7 = val7;
				pSelect7[1]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[0]-5&&puntosXSelect7[1]<=puntoX7[0]+5&&puntosYSelect7[1]>=puntoY7[0]-5&&puntosYSelect7[1]<=puntoY7[0]+5){
				val7 = val7;
				pSelect7[0]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[1]-5&&puntosXSelect7[1]<=puntoX7[1]+5&&puntosYSelect7[1]>=puntoY7[1]-5&&puntosYSelect7[1]<=puntoY7[1]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		
		else if(puntosXSelect7[0]>=puntoX7[2]-5&&puntosXSelect7[0]<=puntoX7[2]+5&&puntosYSelect7[0]>=puntoY7[2]-5&&puntosYSelect7[0]<=puntoY7[2]+5){
			if(puntosXSelect7[1]>=puntoX7[3]-5&&puntosXSelect7[1]<=puntoX7[3]+5&&puntosYSelect7[1]>=puntoY7[3]-5&&puntosYSelect7[1]<=puntoY7[3]+5){
				val7 = val7;
				pSelect7[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[1]-5&&puntosXSelect7[1]<=puntoX7[1]+5&&puntosYSelect7[1]>=puntoY7[1]-5&&puntosYSelect7[1]<=puntoY7[1]+5){
				val7 = val7;
				pSelect7[1]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[2]-5&&puntosXSelect7[1]<=puntoX7[2]+5&&puntosYSelect7[1]>=puntoY7[2]-5&&puntosYSelect7[1]<=puntoY7[2]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX7[3]-5&&puntosXSelect7[0]<=puntoX7[3]+5&&puntosYSelect7[0]>=puntoY7[3]-5&&puntosYSelect7[0]<=puntoY7[3]+5){
			if(puntosXSelect7[1]>=puntoX7[2]-5&&puntosXSelect7[1]<=puntoX7[2]+5&&puntosYSelect7[1]>=puntoY7[2]-5&&puntosYSelect7[1]<=puntoY7[2]+5){
				val7 = val7;
				pSelect7[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[4]-5&&puntosXSelect7[1]<=puntoX7[4]+5&&puntosYSelect7[1]>=puntoY7[4]-5&&puntosYSelect7[1]<=puntoY7[4]+5){
				val7 = val7;
				pSelect7[3]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[3]-5&&puntosXSelect7[1]<=puntoX7[3]+5&&puntosYSelect7[1]>=puntoY7[3]-5&&puntosYSelect7[1]<=puntoY7[3]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX7[4]-5&&puntosXSelect7[0]<=puntoX7[4]+5&&puntosYSelect7[0]>=puntoY7[4]-5&&puntosYSelect7[0]<=puntoY7[4]+5){
			if(puntosXSelect7[1]>=puntoX7[3]-5&&puntosXSelect7[1]<=puntoX7[3]+5&&puntosYSelect7[1]>=puntoY7[3]-5&&puntosYSelect7[1]<=puntoY7[3]+5){
				val7 = val7;
				pSelect7[3]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[5]-5&&puntosXSelect7[1]<=puntoX7[5]+5&&puntosYSelect7[1]>=puntoY7[5]-5&&puntosYSelect7[1]<=puntoY7[5]+5){
				val7 = val7;
				pSelect7[4]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[4]-5&&puntosXSelect7[1]<=puntoX7[4]+5&&puntosYSelect7[1]>=puntoY7[4]-5&&puntosYSelect7[1]<=puntoY7[4]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX7[5]-5&&puntosXSelect7[0]<=puntoX7[5]+5&&puntosYSelect7[0]>=puntoY7[5]-5&&puntosYSelect7[0]<=puntoY7[5]+5){
			if(puntosXSelect7[1]>=puntoX7[0]-5&&puntosXSelect7[1]<=puntoX7[0]+5&&puntosYSelect7[1]>=puntoY7[0]-5&&puntosYSelect7[1]<=puntoY7[0]+5){
				val7 = val7;
				pSelect7[5]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[4]-5&&puntosXSelect7[1]<=puntoX7[4]+5&&puntosYSelect7[1]>=puntoY7[4]-5&&puntosYSelect7[1]<=puntoY7[4]+5){
				val7 = val7;
				pSelect7[4]=1;
			}
			else if(puntosXSelect7[1]>=puntoX7[5]-5&&puntosXSelect7[1]<=puntoX7[5]+5&&puntosYSelect7[1]>=puntoY7[5]-5&&puntosYSelect7[1]<=puntoY7[5]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}

		else{
			val7++;	
		}
		

		puntosXSelect7.splice(0, 1);
		puntosYSelect7.splice(0, 1);
		
	}

	for(var k=0; k<pSelect7.length; k++){
		totalPSelect7 = totalPSelect7+pSelect7[k];
	}

	for(var j=0; j<selectCorrect7.length; j++){
		totalSelect7 =  totalSelect7+ selectCorrect7[j];
	}

	if(val7==0 && totalPSelect7==6 && totalSelect7==6){
		validar = 1;
	}

	else{
		validar = 0;
	}

	console.log(val7 + " - " + totalPSelect7 + " - " +totalSelect7);
	console.log(totalPSelect7);
	return validar;
}



$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage7.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage7.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx7.beginPath();
		mouseDown7 = true;
	}, false);

	stage7.addEventListener("mouseup", function(eve){
		mouseDown7 = true;
	}, false);


	stage7.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick7){
			x27 = axi.x;
			y27 = axi.y;
			console.log(x27+ " - "+ y27);
			for(var i=0; i<puntoY7.length; i++){
				if(x27>=puntoX7[i]-5&&x27<=puntoX7[i]+5&&y27>=puntoY7[i]-5&&y27<=puntoY7[i]+5){
					if(i==0){
						selectCorrect7[0]=1;
					}
					else if(i==1){
						selectCorrect7[1]=1;
					}
					else if(i==2){
						selectCorrect7[2]=1;
					}
					else if(i==3){
						selectCorrect7[3]=1;
					}
					else if(i==4){
						selectCorrect7[4]=1;
					}
					else if(i==5){
						selectCorrect7[5]=1;
					}
					ctx7.fillStyle = "red";
					ctx7.arc(x27,y27,1,0,2*Math.PI, false);
					ctx7.fill();
					ctx7.closePath();
					ctx7.lineTo(x17, y17);
					ctx7.lineTo(x27, y27);
					ctx7.strokeStyle = "red";
					ctx7.lineWidth = 2;
					ctx7.stroke();
					console.log(x27 + ' - ' + y27)
					puntosXSelect7.push(x27);
					puntosYSelect7.push(y27);
					puntosXSelect7First.push(x27);
					puntosYSelect7First.push(y27);
					mouseClick7 =true;
					x17 = axi.x;
					y17 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x17 = axi.x;
			y17 = axi.y;
			console.log(x17+ " - "+ y17);
			for(var i=0; i<puntoY7.length; i++){
				if(x17>=puntoX7[i]-5&&x17<=puntoX7[i]+5&&y17>=puntoY7[i]-5&&y17<=puntoY7[i]+5){
					if(i==0){
						selectCorrect7[0]=1;
					}
					else if(i==1){
						selectCorrect7[1]=1;
					}
					else if(i==2){
						selectCorrect7[2]=1;
					}
					else if(i==3){
						selectCorrect7[3]=1;
					}
					else if(i==4){
						selectCorrect7[4]=1;
					}
					else if(i==5){
						selectCorrect7[5]=1;
					}
					mouseClick7 =true;
					var punto = [axi.x, axi.y];
					puntosSelec7.push(punto);
					ctx7.fillStyle = "red";
					ctx7.arc(x17,y17,2,0,2*Math.PI, false);
					ctx7.fill();
					ctx7.closePath();
					puntosXSelect7.push(x17);
					puntosYSelect7.push(y17);
					puntosXSelect7First.push(x17);
					puntosYSelect7First.push(y17);
					console.log(x17 + ' - ' + y17);
				}
			}
			console.log(mouseDown);
		}
		if(puntosXSelect7.length>0){
			document.getElementById("fc7").checked = true;
		}
		else{
			document.getElementById("fc7").checked = false;
		}
	}, false)


$('#limpiarF7').on('click', function(){
	mouseClick7=false;
	val7=0;
	puntosXSelect7.splice(0, puntosXSelect7.length);
	puntosYSelect7.splice(0, puntosYSelect7.length);
	puntosXSelect7First.splice(0, puntosXSelect7First.length);
	puntosYSelect7First.splice(0, puntosYSelect7First.length);
	selectCorrect7 = [0,0,0,0,0,0];
	totalSelect7 = 0;
	pSelect7 = [0,0,0,0,0,0];
	totalPSelect7 = 0;
	if(puntosXSelect7.length>0){
		document.getElementById("fc7").checked = true;
	}
	else{
		document.getElementById("fc7").checked = false;
	}
});

$('#ultimoF7').on('click', function(){
	var fin = puntosXSelect7First.length-1;
	for(var i2=0; i2<puntosXSelect7.length; i2++){
		if(puntosXSelect7[fin]>=puntoX7[i2]-5&&puntosXSelect7[fin]<=puntoX7[i2]+5&&puntosYSelect7[fin]>=puntoY7[i2]-5&&puntosYSelect7[fin]<=puntoY7[i2]+5){
			if(i2==0){
				selectCorrect7[0]=0;
			}
			else if(i2==1){
				selectCorrect7[1]=0;
			}
			else if(i2==2){
				selectCorrect7[2]=0;
			}
			else if(i2==3){
				selectCorrect7[3]=0;
			}
			else if(i2==4){
				selectCorrect7[4]=0;
			}
			else if(i2==5){
				selectCorrect7[5]=0;
			}
		}
	}
	puntosXSelect7.pop();
	puntosYSelect7.pop();

	puntosXSelect7First.pop();
	puntosYSelect7First.pop();

	if (puntosXSelect7.length==1) {
		puntosXSelect7.pop();
		puntosYSelect7.pop();

		puntosXSelect7First.pop();
		puntosYSelect7First.pop();
	}
	for(var i=0; i<puntosXSelect7First.length-1; i++){
		ctx7.beginPath();
		ctx7.fillStyle = "red";
		ctx7.arc(puntosXSelect7[i], puntosYSelect7[i],1,0,2*Math.PI, false);
		ctx7.fill();
		ctx7.lineTo(puntosXSelect7[i], puntosYSelect7[i]);
		ctx7.lineTo(puntosXSelect7[i+1], puntosYSelect7[i+1]);
		ctx7.strokeStyle = "red";
		ctx7.lineWidth = 2;
		ctx7.fillStyle = "red";
		ctx7.arc(puntosXSelect7[i+1], puntosYSelect7[i+1],1,0,2*Math.PI, false);
		ctx7.fill();
		ctx7.closePath();
		ctx7.stroke();
	}	
	x17 = puntosXSelect7First[puntosXSelect7First.length-1];
	y17 = puntosYSelect7First[puntosYSelect7First.length-1];
	console.log(puntosXSelect7First + " - " +puntosYSelect7First);
	if(puntosXSelect7.length>0){
		document.getElementById("fc7").checked = true;
	}
	else{
		document.getElementById("fc7").checked = false;
	}
});

});
