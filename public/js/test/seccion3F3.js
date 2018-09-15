var puntosSelec3 = new Array();

	var puntosXSelect3 = new Array();
	var puntosYSelect3 = new Array();

	var puntosXSelect3First = new Array();
	var puntosYSelect3First = new Array();

	var puntoX3 = [26,59,58,71,73,13,26,18,137,73,115,112,99,100,140]
	var puntoY3 = [123,125,92,78,140,138,92,77,12,9,76,64,76,88,77]

	var stage3 = document.getElementById('canvas3');
	stage3.width = 150;
	stage3.height = 160;

	var x13 =0;
	var x23 =0;
	var y13 =0;
	var y23 =0;
	var val3=0;

var selectCorrect3 = [0,0,0,0,0,0];
var totalSelect3 = 0;
var pSelect3 = [0,0,0,0,0,0];
var totalPSelect3 = 0;


var mouseDown3 = false;
var mouseClick3 = false;
var ctx3 = stage3.getContext("2d");

function validarF3(){
var validar =0;
	for(var i=0; i<puntosXSelect3First.length-1; i++){
		if(puntosXSelect3[0]>=puntoX3[0]-5&&puntosXSelect3[0]<=puntoX3[0]+5&&puntosYSelect3[0]>=puntoY3[0]-5&&puntosYSelect3[0]<=puntoY3[0]+5){
			if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[0]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[5]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[1]-5&&puntosXSelect3[0]<=puntoX3[1]+5&&puntosYSelect3[0]>=puntoY3[1]-5&&puntosYSelect3[0]<=puntoY3[1]+5){
			if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
				pSelect3[1]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		
		else if(puntosXSelect3[0]>=puntoX3[2]-5&&puntosXSelect3[0]<=puntoX3[2]+5&&puntosYSelect3[0]>=puntoY3[2]-5&&puntosYSelect3[0]<=puntoY3[2]+5){
			if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
				pSelect3[2]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[1]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[3]-5&&puntosXSelect3[0]<=puntoX3[3]+5&&puntosYSelect3[0]>=puntoY3[3]-5&&puntosYSelect3[0]<=puntoY3[3]+5){
			if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
				pSelect3[2]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[3]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[4]-5&&puntosXSelect3[0]<=puntoX3[4]+5&&puntosYSelect3[0]>=puntoY3[4]-5&&puntosYSelect3[0]<=puntoY3[4]+5){
			if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
				pSelect3[3]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[4]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		
		else if(puntosXSelect3[0]>=puntoX3[5]-5&&puntosXSelect3[0]<=puntoX3[5]+5&&puntosYSelect3[0]>=puntoY3[5]-5&&puntosYSelect3[0]<=puntoY3[5]+5){
			if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[4]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[5]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		
		else{
			val3++;
		}

		puntosXSelect3.splice(0, 1);
		puntosYSelect3.splice(0, 1);
		
	}

	for(var k=0; k<pSelect3.length; k++){
		totalPSelect3 = totalPSelect3+pSelect3[k];
	}

	for(var j=0; j<selectCorrect3.length; j++){
		totalSelect3 =  totalSelect3+ selectCorrect3[j];
	}
	if(val3==0 && totalPSelect3==6 && totalSelect3==6){
		validar3 = 1;
	}

	else{
		validar3 = 0;
	}
	console.log(totalPSelect3 + " - "+val3+" - "+totalSelect3);
	return validar3;
	console.log(totalPSelect3);
}

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage3.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage3.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx3.beginPath();
		mouseDown3 = true;
	}, false);

	stage3.addEventListener("mouseup", function(eve){
		mouseDown3 = true;
	}, false);


	stage3.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick3){
			x23 = axi.x;
			y23 = axi.y;
			console.log(x23+ " - "+ y23);
			for(var i=0; i<puntoY3.length; i++){
				if(x23>=puntoX3[i]-5&&x23<=puntoX3[i]+5&&y23>=puntoY3[i]-5&&y23<=puntoY3[i]+5){
					if(i==0){
						selectCorrect3[0]=1;
					}
					else if(i==1){
						selectCorrect3[1]=1;
					}
					else if(i==2){
						selectCorrect3[2]=1;
					}
					else if(i==3){
						selectCorrect3[3]=1;
					}
					else if(i==4){
						selectCorrect3[4]=1;
					}
					else if(i==5){
						selectCorrect3[5]=1;
					}
					ctx3.fillStyle = "red";
					ctx3.arc(x23,y23,1,0,2*Math.PI, false);
					ctx3.fill();
					ctx3.closePath();
					ctx3.lineTo(x13, y13);
					ctx3.lineTo(x23, y23);
					ctx3.strokeStyle = "red";
					ctx3.lineWidth = 2;
					ctx3.stroke();
					puntosXSelect3.push(x23);
					puntosYSelect3.push(y23);
					puntosXSelect3First.push(x23);
					puntosYSelect3First.push(y23);
					mouseClick3 =true;
					x13 = axi.x;
					y13 = axi.y;
				}
			}
		}
		else{
			x13 = axi.x;
			y13 = axi.y;
			console.log(x13+ " - "+ y13);
			for(var i=0; i<puntoY3.length; i++){
				if(x13>=puntoX3[i]-5&&x13<=puntoX3[i]+5&&y13>=puntoY3[i]-5&&y13<=puntoY3[i]+5){
					if(i==0){
						selectCorrect3[0]=1;
					}
					else if(i==1){
						selectCorrect3[1]=1;
					}
					else if(i==2){
						selectCorrect3[2]=1;
					}
					else if(i==3){
						selectCorrect3[3]=1;
					}
					else if(i==4){
						selectCorrect3[4]=1;
					}
					else if(i==5){
						selectCorrect3[5]=1;
					}
					mouseClick3 =true;
					var punto = [axi.x, axi.y];
					puntosSelec3.push(punto);
					ctx3.fillStyle = "red";
					ctx3.arc(x13,y13,2,0,2*Math.PI, false);
					ctx3.fill();
					ctx3.closePath();
					puntosXSelect3.push(x13);
					puntosYSelect3.push(y13);
					puntosXSelect3First.push(x13);
					puntosYSelect3First.push(y13);
				}
			}
		}
		if(puntosXSelect3.length>0){
			document.getElementById("fc3").checked = true;
		}
		else{
			document.getElementById("fc3").checked = false;
		}
	}, false);


$('#limpiarF3').on('click', function(){
	mouseClick3=false;
	val3=0;
	puntosXSelect3.splice(0, puntosXSelect3.length);
	puntosYSelect3.splice(0, puntosYSelect3.length);
	puntosXSelect3First.splice(0, puntosXSelect3First.length);
	puntosYSelect3First.splice(0, puntosYSelect3First.length);
	selectCorrect3 = [0,0,0,0,0,0];
	totalSelect3 = 0;
	pSelect3 = [0,0,0,0,0,0,0,0];
	totalPSelect3 = 0;
		if(puntosXSelect3.length>0){
		document.getElementById("fc3").checked = true;
	}
	else{
		document.getElementById("fc3").checked = false;
	}
});

$('#ultimoF3').on('click', function(){
	pSelect3 = [0,0,0,0,0,0,0,0];
	var fin = puntosXSelect3First.length-1;
	for(var i2=0; i2<puntosXSelect3.length; i2++){
		if(puntosXSelect3[fin]>=puntoX3[i2]-5&&puntosXSelect3[fin]<=puntoX3[i2]+5&&puntosYSelect3[fin]>=puntoY3[i2]-5&&puntosYSelect3[fin]<=puntoY3[i2]+5){
			if(i2==0){
				selectCorrect3[0]=0;
			}
			else if(i2==1){
				selectCorrect3[1]=0;
			}
			else if(i2==2){
				selectCorrect3[2]=0;
			}
			else if(i2==3){
				selectCorrect3[3]=0;
			}
			else if(i2==4){
				selectCorrect3[4]=0;
			}
			else if(i2==5){
				selectCorrect3[5]=0;
			}
		}
	}
	puntosXSelect3.pop();
	puntosYSelect3.pop();

	puntosXSelect3First.pop();
	puntosYSelect3First.pop();
	if (puntosXSelect3.length==1) {
		puntosXSelect3.pop();
		puntosYSelect3.pop();

		puntosXSelect3First.pop();
		puntosYSelect3First.pop();
	}
	for(var i=0; i<puntosXSelect3First.length-1; i++){
			ctx3.beginPath();
			ctx3.fillStyle = "red";
			ctx3.arc(puntosXSelect3[i], puntosYSelect3[i],1,0,2*Math.PI, false);
			ctx3.fill();
			ctx3.lineTo(puntosXSelect3[i], puntosYSelect3[i]);
			ctx3.lineTo(puntosXSelect3[i+1], puntosYSelect3[i+1]);
			ctx3.strokeStyle = "red";
			ctx3.lineWidth = 2;
			ctx3.fillStyle = "red";
			ctx3.arc(puntosXSelect3[i+1], puntosYSelect3[i+1],1,0,2*Math.PI, false);
			ctx3.fill();
			ctx3.closePath();
			ctx3.stroke();
	}	
	x13 = puntosXSelect3First[puntosXSelect3First.length-1];
	y13 = puntosYSelect3First[puntosYSelect3First.length-1];
	console.log(puntosXSelect3First + " - " +puntosYSelect3First);
		if(puntosXSelect3.length>0){
		document.getElementById("fc3").checked = true;
	}
	else{
		document.getElementById("fc3").checked = false;
	}
});

});
