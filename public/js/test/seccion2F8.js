var puntosSelec8 = new Array();

var puntosXSelect8 = new Array();
var puntosYSelect8 = new Array();

var puntosXSelect8First = new Array();
var puntosYSelect8First = new Array();

var puntoX8 = [13,39,64,86,85,49,11,49,93,66,121,122];
var puntoY8 = [70,42,70,71,116,115,118,69,40,10,71,117];

var stage8 = document.getElementById('canvas8');
stage8.width = 130;
stage8.height = 130;

var x18 =0;
var x28 =0;
var y18 =0;
var y28 =0;
var val8=0;

var selectCorrect8 = [0,0,0,0,0,0];
var totalSelect8 = 0;
var pSelect8 = [0,0,0,0,0,0,0,0];
var totalPSelect8 = 0;

var mouseDown8 = false;
var mouseClick8 = false;
var ctx8 = stage8.getContext("2d");

function validarF8(){
	var validar=0;
	for(var i=0; i<puntosXSelect8First.length-1; i++){
		if(puntosXSelect8[0]>=puntoX8[0]-5&&puntosXSelect8[0]<=puntoX8[0]+5&&puntosYSelect8[0]>=puntoY8[0]-5&&puntosYSelect8[0]<=puntoY8[0]+5){
			if(puntosXSelect8[1]>=puntoX8[1]-5&&puntosXSelect8[1]<=puntoX8[1]+5&&puntosYSelect8[1]>=puntoY8[1]-5&&puntosYSelect8[1]<=puntoY8[1]+5){
				val8 = val8;
				pSelect8[0]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[6]-5&&puntosXSelect8[1]<=puntoX8[6]+5&&puntosYSelect8[1]>=puntoY8[6]-5&&puntosYSelect8[1]<=puntoY8[6]+5){
				val8 = val8;
				pSelect8[7]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[0]-5&&puntosXSelect8[1]<=puntoX8[0]+5&&puntosYSelect8[1]>=puntoY8[0]-5&&puntosYSelect8[1]<=puntoY8[0]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[1]-5&&puntosXSelect8[0]<=puntoX8[1]+5&&puntosYSelect8[0]>=puntoY8[1]-5&&puntosYSelect8[0]<=puntoY8[1]+5){
			if(puntosXSelect8[1]>=puntoX8[2]-5&&puntosXSelect8[1]<=puntoX8[2]+5&&puntosYSelect8[1]>=puntoY8[2]-5&&puntosYSelect8[1]<=puntoY8[2]+5){
				val8 = val8;
				pSelect8[1]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[0]-5&&puntosXSelect8[1]<=puntoX8[0]+5&&puntosYSelect8[1]>=puntoY8[0]-5&&puntosYSelect8[1]<=puntoY8[0]+5){
				val8 = val8;
				pSelect8[0]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[1]-5&&puntosXSelect8[1]<=puntoX8[1]+5&&puntosYSelect8[1]>=puntoY8[1]-5&&puntosYSelect8[1]<=puntoY8[1]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[2]-5&&puntosXSelect8[0]<=puntoX8[2]+5&&puntosYSelect8[0]>=puntoY8[2]-5&&puntosYSelect8[0]<=puntoY8[2]+5){
			if(puntosXSelect8[1]>=puntoX8[3]-5&&puntosXSelect8[1]<=puntoX8[3]+5&&puntosYSelect8[1]>=puntoY8[3]-5&&puntosYSelect8[1]<=puntoY8[3]+5){
				val8 = val8;
				pSelect8[2]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[1]-5&&puntosXSelect8[1]<=puntoX8[1]+5&&puntosYSelect8[1]>=puntoY8[1]-5&&puntosYSelect8[1]<=puntoY8[1]+5){
				val8 = val8;
				pSelect8[1]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[2]-5&&puntosXSelect8[1]<=puntoX8[2]+5&&puntosYSelect8[1]>=puntoY8[2]-5&&puntosYSelect8[1]<=puntoY8[2]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[3]-5&&puntosXSelect8[0]<=puntoX8[3]+5&&puntosYSelect8[0]>=puntoY8[3]-5&&puntosYSelect8[0]<=puntoY8[3]+5){
			if(puntosXSelect8[1]>=puntoX8[2]-5&&puntosXSelect8[1]<=puntoX8[2]+5&&puntosYSelect8[1]>=puntoY8[2]-5&&puntosYSelect8[1]<=puntoY8[2]+5){
				val8 = val8;
				pSelect8[2]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[4]-5&&puntosXSelect8[1]<=puntoX8[4]+5&&puntosYSelect8[1]>=puntoY8[4]-5&&puntosYSelect8[1]<=puntoY8[4]+5){
				val8 = val8;
				pSelect8[3]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[3]-5&&puntosXSelect8[1]<=puntoX8[3]+5&&puntosYSelect8[1]>=puntoY8[3]-5&&puntosYSelect8[1]<=puntoY8[3]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[4]-5&&puntosXSelect8[0]<=puntoX8[4]+5&&puntosYSelect8[0]>=puntoY8[4]-5&&puntosYSelect8[0]<=puntoY8[4]+5){
			if(puntosXSelect8[1]>=puntoX8[3]-5&&puntosXSelect8[1]<=puntoX8[3]+5&&puntosYSelect8[1]>=puntoY8[3]-5&&puntosYSelect8[1]<=puntoY8[3]+5){
				val8 = val8;
				pSelect8[3]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[5]-5&&puntosXSelect8[1]<=puntoX8[5]+5&&puntosYSelect8[1]>=puntoY8[5]-5&&puntosYSelect8[1]<=puntoY8[5]+5){
				val8 = val8;
				pSelect8[4]=1;
				pSelect8[5]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[6]-5&&puntosXSelect8[1]<=puntoX8[6]+5&&puntosYSelect8[1]>=puntoY8[6]-5&&puntosYSelect8[1]<=puntoY8[6]+5){
				val8 = val8;
				pSelect8[4]=1;
				pSelect8[5]=1;
				pSelect8[6]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[4]-5&&puntosXSelect8[1]<=puntoX8[4]+5&&puntosYSelect8[1]>=puntoY8[4]-5&&puntosYSelect8[1]<=puntoY8[4]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[5]-5&&puntosXSelect8[0]<=puntoX8[5]+5&&puntosYSelect8[0]>=puntoY8[5]-5&&puntosYSelect8[0]<=puntoY8[5]+5){
			if(puntosXSelect8[1]>=puntoX8[6]-5&&puntosXSelect8[1]<=puntoX8[6]+5&&puntosYSelect8[1]>=puntoY8[6]-5&&puntosYSelect8[1]<=puntoY8[6]+5){
				val8 = val8;
				pSelect8[6]=1;
				pSelect8[4]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[4]-5&&puntosXSelect8[1]<=puntoX8[4]+5&&puntosYSelect8[1]>=puntoY8[4]-5&&puntosYSelect8[1]<=puntoY8[4]+5){
				val8 = val8;
				pSelect8[4]=1;
				pSelect8[5]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[5]-5&&puntosXSelect8[1]<=puntoX8[5]+5&&puntosYSelect8[1]>=puntoY8[5]-5&&puntosYSelect8[1]<=puntoY8[5]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		else if(puntosXSelect8[0]>=puntoX8[6]-5&&puntosXSelect8[0]<=puntoX8[6]+5&&puntosYSelect8[0]>=puntoY8[6]-5&&puntosYSelect8[0]<=puntoY8[6]+5){
			if(puntosXSelect8[1]>=puntoX8[0]-5&&puntosXSelect8[1]<=puntoX8[0]+5&&puntosYSelect8[1]>=puntoY8[0]-5&&puntosYSelect8[1]<=puntoY8[0]+5){
				val8 = val8;
				pSelect8[7]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[5]-5&&puntosXSelect8[1]<=puntoX8[5]+5&&puntosYSelect8[1]>=puntoY8[5]-5&&puntosYSelect8[1]<=puntoY8[5]+5){
				val8 = val8;
				pSelect8[6]=1;
				pSelect8[5]=1;
			}
			else if(puntosXSelect8[1]>=puntoX8[6]-5&&puntosXSelect8[1]<=puntoX8[6]+5&&puntosYSelect8[1]>=puntoY8[6]-5&&puntosYSelect8[1]<=puntoY8[6]+5){
				val8 = val8;
			}
			else{
				val8++;
			}	
		}
		
		else{
			val8++;
		}
		puntosXSelect8.splice(0, 1);
		puntosYSelect8.splice(0, 1);
		
	}
	for(var k=0; k<pSelect8.length; k++){
		totalPSelect8 = totalPSelect8+pSelect8[k];
	}

	for(var j=0; j<selectCorrect8.length; j++){
		totalSelect8 =  totalSelect8+ selectCorrect8[j];
	}

	console.log(val8 + " - " + totalPSelect8 + " - " +totalSelect8);
	if(val8==0 && totalPSelect8==8&&totalSelect8==6){
		validar=1;
	}
	else{
		validar=0;
	}
	console.log(totalPSelect8);
	return validar;
}

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage8.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}
	stage8.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx8.beginPath();
		mouseDown8 = true;
	}, false);

	stage8.addEventListener("mouseup", function(eve){
		mouseDown8 = true;
	}, false);


	stage8.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick8){
			x28 = axi.x;
			y28 = axi.y;
			console.log(x28+ " - "+ y28);
			for(var i=0; i<puntoY8.length; i++){
				if(x28>=puntoX8[i]-5&&x28<=puntoX8[i]+5&&y28>=puntoY8[i]-5&&y28<=puntoY8[i]+5){
					if(i==0){
						selectCorrect8[0]=1;
					}
					else if(i==1){
						selectCorrect8[1]=1;
					}
					else if(i==2){
						selectCorrect8[2]=1;
					}
					else if(i==3){
						selectCorrect8[3]=1;
					}
					else if(i==4){
						selectCorrect8[4]=1;
					}
					else if(i==6){
						selectCorrect8[5]=1;
					}
					ctx8.fillStyle = "red";
					ctx8.arc(x28,y28,1,0,2*Math.PI, false);
					ctx8.fill();
					ctx8.closePath();
					ctx8.lineTo(x18, y18);
					ctx8.lineTo(x28, y28);
					ctx8.strokeStyle = "red";
					ctx8.lineWidth = 2;
					ctx8.stroke();
					puntosXSelect8.push(x28);
					puntosYSelect8.push(y28);
					puntosXSelect8First.push(x28);
					puntosYSelect8First.push(y28);
					mouseClick8 =true;
					x18 = axi.x;
					y18 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x18 = axi.x;
			y18 = axi.y;
			console.log(x18+ " - "+ y18);
			for(var i=0; i<puntoY8.length; i++){
				if(x18>=puntoX8[i]-5&&x18<=puntoX8[i]+5&&y18>=puntoY8[i]-5&&y18<=puntoY8[i]+5){
					if(i==0){
						selectCorrect8[0]=1;
					}
					else if(i==1){
						selectCorrect8[1]=1;
					}
					else if(i==2){
						selectCorrect8[2]=1;
					}
					else if(i==3){
						selectCorrect8[3]=1;
					}
					else if(i==4){
						selectCorrect8[4]=1;
					}
					else if(i==6){
						selectCorrect8[5]=1;
					}
					mouseClick8 =true;
					var punto = [axi.x, axi.y];
					puntosSelec8.push(punto);
					ctx8.fillStyle = "red";
					ctx8.arc(x18,y18,2,0,2*Math.PI, false);
					ctx8.fill();
					ctx8.closePath();
					puntosXSelect8.push(x18);
					puntosYSelect8.push(y18);
					puntosXSelect8First.push(x18);
					puntosYSelect8First.push(y18);
				}
			}
			console.log(mouseDown);
		}
		if(puntosXSelect8.length>0){
			document.getElementById("fc8").checked = true;
		}
		else{
			document.getElementById("fc8").checked = false;
		}
	}, false);


$('#limpiarF8').on('click', function(){
	mouseClick8=false;
	val8=0;
	puntosXSelect8.splice(0, puntosXSelect8.length);
	puntosYSelect8.splice(0, puntosYSelect8.length);
	puntosXSelect8First.splice(0, puntosXSelect8First.length);
	puntosYSelect8First.splice(0, puntosYSelect8First.length);
	totalSelect8 = 0;
	selectCorrect8 = [0,0,0,0,0,0];
	pSelect8 = [0,0,0,0,0,0,0,0];
	totalPSelect8 = 0;
	if(puntosXSelect8.length>0){
		document.getElementById("fc8").checked = true;
	}
	else{
		document.getElementById("fc8").checked = false;
	}
});

$('#ultimoF8').on('click', function(){
	var fin = puntosXSelect8.length-1;
	for(var i2=0; i2<puntosXSelect8.length; i2++){
		if(puntosXSelect8[fin]>=puntoX8[i2]-5&&puntosXSelect8[fin]<=puntoX8[i2]+5&&puntosYSelect8[fin]>=puntoY8[i2]-5&&puntosYSelect8[fin]<=puntoY8[i2]+5){
			if(i2==0){
				selectCorrect8[0]=0;
			}
			else if(i2==1){
				selectCorrect8[1]=0;
			}
			else if(i2==2){
				selectCorrect8[2]=0;
			}
			else if(i2==3){
				selectCorrect8[3]=0;
			}
			else if(i2==4){
				selectCorrect8[4]=0;
			}
			else if(i2==6){
				selectCorrect8[5]=0;
			}
		}
	}
	puntosXSelect8.pop();
	puntosYSelect8.pop();

	puntosXSelect8First.pop();
	puntosYSelect8First.pop();
	if (puntosXSelect8.length==1) {
		puntosXSelect8.pop();
		puntosYSelect8.pop();

		puntosXSelect8First.pop();
		puntosYSelect8First.pop();
	}
	for(var i=0; i<puntosXSelect8First.length-1; i++){
		ctx8.beginPath();
		ctx8.fillStyle = "red";
		ctx8.arc(puntosXSelect8[i], puntosYSelect8[i],1,0,2*Math.PI, false);
		ctx8.fill();
		ctx8.lineTo(puntosXSelect8[i], puntosYSelect8[i]);
		ctx8.lineTo(puntosXSelect8[i+1], puntosYSelect8[i+1]);
		ctx8.strokeStyle = "red";
		ctx8.lineWidth = 2;
		ctx8.fillStyle = "red";
		ctx8.arc(puntosXSelect8[i+1], puntosYSelect8[i+1],1,0,2*Math.PI, false);
		ctx8.fill();
		ctx8.closePath();
		ctx8.stroke();
	}	
	x18 = puntosXSelect8First[puntosXSelect8First.length-1];
	y18 = puntosYSelect8First[puntosYSelect8First.length-1];
	console.log(puntosXSelect8First + " - " +puntosYSelect8First);
	if(puntosXSelect8.length>0){
		document.getElementById("fc8").checked = true;
	}
	else{
		document.getElementById("fc8").checked = false;
	}
});


});
