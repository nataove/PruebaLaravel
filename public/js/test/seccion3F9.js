var puntosSelec9 = new Array();

var puntosXSelect9 = new Array();
var puntosYSelect9 = new Array();

var puntosXSelect9First = new Array();
var puntosYSelect9First = new Array();

var selectCorrect9 = [0,0,0,0,0,0,0,0,0,0];
var totalSelect9 = 0;
var pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect9 = 0;

var puntoX9 = [33,49,57,87,136,162,147,138,112,58,59,99,136,96,12,183];
var puntoY9 = [50,28,11,11,11,50,72,88,89,86,40,25,59,72,87,12];

var stage9 = document.getElementById('canvas9');
stage9.width = 200;
stage9.height = 100;

var x19 =0;
var x29 =0;
var y19 =0;
var y29 =0;
var val9=0;


var mouseDown9 = false;
var mouseClick9 = false;
var ctx9 = stage9.getContext("2d");

function validarF9(){
	var validar = 0;
	for(var i=0; i<puntosXSelect9First.length-1; i++){
		if(puntosXSelect9[0]>=puntoX9[0]-5&&puntosXSelect9[0]<=puntoX9[0]+5&&puntosYSelect9[0]>=puntoY9[0]-5&&puntosYSelect9[0]<=puntoY9[0]+5){
			if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
				pSelect9[13]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[1]-5&&puntosXSelect9[0]<=puntoX9[1]+5&&puntosYSelect9[0]>=puntoY9[1]-5&&puntosYSelect9[0]<=puntoY9[1]+5){
			if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[2]=1;
				pSelect9[1]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[2]-5&&puntosXSelect9[0]<=puntoX9[2]+5&&puntosYSelect9[0]>=puntoY9[2]-5&&puntosYSelect9[0]<=puntoY9[2]+5){
			if(puntosXSelect9[1]>=puntoX9[3]-5&&puntosXSelect9[1]<=puntoX9[3]+5&&puntosYSelect9[1]>=puntoY9[3]-5&&puntosYSelect9[1]<=puntoY9[3]+5){
				val9 = val9;
				pSelect9[3]=1;
				pSelect9[4]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[2]=1;
				pSelect9[1]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[3]-5&&puntosXSelect9[0]<=puntoX9[3]+5&&puntosYSelect9[0]>=puntoY9[3]-5&&puntosYSelect9[0]<=puntoY9[3]+5){
			if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[3]=1;
				pSelect9[4]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[5]=1;
				pSelect9[4]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[3]-5&&puntosXSelect9[1]<=puntoX9[3]+5&&puntosYSelect9[1]>=puntoY9[3]-5&&puntosYSelect9[1]<=puntoY9[3]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[4]-5&&puntosXSelect9[0]<=puntoX9[4]+5&&puntosYSelect9[0]>=puntoY9[4]-5&&puntosYSelect9[0]<=puntoY9[4]+5){
			if(puntosXSelect9[1]>=puntoX9[3]-5&&puntosXSelect9[1]<=puntoX9[3]+5&&puntosYSelect9[1]>=puntoY9[3]-5&&puntosYSelect9[1]<=puntoY9[3]+5){
				val9 = val9;
				pSelect9[5]=1;
				pSelect9[4]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[6]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[5]-5&&puntosXSelect9[0]<=puntoX9[5]+5&&puntosYSelect9[0]>=puntoY9[5]-5&&puntosYSelect9[0]<=puntoY9[5]+5){
			if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
				pSelect9[9]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[6]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[6]-5&&puntosXSelect9[0]<=puntoX9[6]+5&&puntosYSelect9[0]>=puntoY9[6]-5&&puntosYSelect9[0]<=puntoY9[6]+5){
			if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		
		else if(puntosXSelect9[0]>=puntoX9[7]-5&&puntosXSelect9[0]<=puntoX9[7]+5&&puntosYSelect9[0]>=puntoY9[7]-5&&puntosYSelect9[0]<=puntoY9[7]+5){
			if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[10]=1;
				pSelect9[11]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
				pSelect9[9]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}

		else if(puntosXSelect9[0]>=puntoX9[8]-5&&puntosXSelect9[0]<=puntoX9[8]+5&&puntosYSelect9[0]>=puntoY9[8]-5&&puntosYSelect9[0]<=puntoY9[8]+5){
			if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
				pSelect9[12]=1;
				pSelect9[11]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[10]=1;
				pSelect9[11]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[9]-5&&puntosXSelect9[0]<=puntoX9[9]+5&&puntosYSelect9[0]>=puntoY9[9]-5&&puntosYSelect9[0]<=puntoY9[9]+5){
			if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[13]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[12]=1;
				pSelect9[11]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}


		else{
			val9++;
		}	
		puntosXSelect9.splice(0, 1);
		puntosYSelect9.splice(0, 1);
		
	}
	
	for(var k=0; k<pSelect9.length; k++){
		totalPSelect9 = totalPSelect9+pSelect9[k];
	}

	for(var j=0; j<selectCorrect9.length; j++){
		totalSelect9 =  totalSelect9+ selectCorrect9[j];
	}
	console.log(val9 + " - " + totalPSelect9 + " - " +totalSelect9);

	if((val9==0 && totalPSelect9==14 && totalSelect9==6)){
	validar = 1;
}
else{
	validar = 0;
}
return validar;
}

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage9.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage9.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx9.beginPath();
		mouseDown9 = true;
	}, false);

	stage9.addEventListener("mouseup", function(eve){
		mouseDown9 = true;
	}, false);


	stage9.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick9){
			x29 = axi.x;
			y29 = axi.y;
			console.log(x29+ " - "+ y29);
			for(var i=0; i<puntoY9.length; i++){
				if(x29>=puntoX9[i]-5&&x29<=puntoX9[i]+5&&y29>=puntoY9[i]-5&&y29<=puntoY9[i]+5){
					if(i==0){
						selectCorrect9[0]=1;
					}
					else if(i==2){
						selectCorrect9[1]=1;
					}
					else if(i==4){
						selectCorrect9[2]=1;
					}
					else if(i==5){
						selectCorrect9[3]=1;
					}
					else if(i==7){
						selectCorrect9[4]=1;
					}
					else if(i==9){
						selectCorrect9[5]=1;
					}
					ctx9.fillStyle = "red";
					ctx9.arc(x29,y29,1,0,2*Math.PI, false);
					ctx9.fill();
					ctx9.closePath();
					ctx9.lineTo(x19, y19);
					ctx9.lineTo(x29, y29);
					ctx9.strokeStyle = "red";
					ctx9.lineWidth = 2;
					ctx9.stroke();
					puntosXSelect9.push(x29);
					puntosYSelect9.push(y29);
					puntosXSelect9First.push(x29);
					puntosYSelect9First.push(y29);
					mouseClick9 =true;
					x19 = axi.x;
					y19 = axi.y;
				}
			}
			console.log(mouseDown9);
		}
		else{
			x19 = axi.x;
			y19 = axi.y;
			console.log(x19+ " - "+ y19);
			for(var i=0; i<puntoY9.length; i++){
				if(x19>=puntoX9[i]-5&&x19<=puntoX9[i]+5&&y19>=puntoY9[i]-5&&y19<=puntoY9[i]+5){
					if(i==0){
						selectCorrect9[0]=1;
					}
					else if(i==2){
						selectCorrect9[1]=1;
					}
					else if(i==4){
						selectCorrect9[2]=1;
					}
					else if(i==5){
						selectCorrect9[3]=1;
					}
					else if(i==7){
						selectCorrect9[4]=1;
					}
					else if(i==9){
						selectCorrect9[5]=1;
					}
					mouseClick9 =true;
					var punto = [axi.x, axi.y];
					puntosSelec9.push(punto);
					ctx9.fillStyle = "red";
					ctx9.arc(x19,y19,2,0,2*Math.PI, false);
					ctx9.fill();
					ctx9.closePath();
					puntosXSelect9.push(x19);
					puntosYSelect9.push(y19);
					puntosXSelect9First.push(x19);
					puntosYSelect9First.push(y19);
				}
			}
		}
		if(puntosXSelect9.length>0){
			document.getElementById("fc9").checked = true;
		}
		else{
			document.getElementById("fc9").checked = false;
		}
	}, false);


$('#limpiarF9').on('click', function(){
	mouseClick9=false;
	val9=0;
	puntosXSelect9.splice(0, puntosXSelect9.length);
	puntosYSelect9.splice(0, puntosYSelect9.length);
	puntosXSelect9First.splice(0, puntosXSelect9First.length);
	puntosYSelect9First.splice(0, puntosYSelect9First.length);
	totalSelect9 = 0;
	selectCorrect9 = [0,0,0,0,0,0];
	pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect9 = 0;
	if(puntosXSelect9.length>0){
		document.getElementById("fc9").checked = true;
	}
	else{
		document.getElementById("fc9").checked = false;
	}
});

$('#ultimoF9').on('click', function(){
	pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect9 = 0;
	var fin = puntosXSelect9.length-1;
	for(var i2=0; i2<puntosXSelect9.length; i2++){
		if(puntosXSelect9[fin]>=puntoX9[i2]-5&&puntosXSelect9[fin]<=puntoX9[i2]+5&&puntosYSelect9[fin]>=puntoY9[i2]-5&&puntosYSelect9[fin]<=puntoY9[i2]+5){
			if(i2==0){
				selectCorrect9[0]=0;
			}
			else if(i2==1){
				selectCorrect9[1]=0;
			}
			else if(i2==2){
				selectCorrect9[2]=0;
			}
			else if(i2==3){
				selectCorrect9[3]=0;
			}
			else if(i2==4){
				selectCorrect9[4]=0;
			}
			else if(i2==6){
				selectCorrect9[5]=0;
			}
		}
	}
	puntosXSelect9.pop();
	puntosYSelect9.pop();

	puntosXSelect9First.pop();
	puntosYSelect9First.pop();
	if (puntosXSelect9.length==1) {
		puntosXSelect9.pop();
		puntosYSelect9.pop();

		puntosXSelect9First.pop();
		puntosYSelect9First.pop();
	}
	for(var i=0; i<puntosXSelect9First.length-1; i++){
		ctx9.beginPath();
		ctx9.fillStyle = "red";
		ctx9.arc(puntosXSelect9[i], puntosYSelect9[i],1,0,2*Math.PI, false);
		ctx9.fill();
		ctx9.lineTo(puntosXSelect9[i], puntosYSelect9[i]);
		ctx9.lineTo(puntosXSelect9[i+1], puntosYSelect9[i+1]);
		ctx9.strokeStyle = "red";
		ctx9.lineWidth = 2;
		ctx9.fillStyle = "red";
		ctx9.arc(puntosXSelect9[i+1], puntosYSelect9[i+1],1,0,2*Math.PI, false);
		ctx9.fill();
		ctx9.closePath();
		ctx9.stroke();
	}	
	x19 = puntosXSelect9First[puntosXSelect9First.length-1];
	y19 = puntosYSelect9First[puntosYSelect9First.length-1];
	console.log(puntosXSelect9First + " - " +puntosYSelect9First);
	if(puntosXSelect9.length>0){
		document.getElementById("fc9").checked = true;
	}
	else{
		document.getElementById("fc9").checked = false;
	}
});

});

