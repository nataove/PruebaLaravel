var puntosSelec4 = new Array();

var puntosXSelect4 = new Array();
var puntosYSelect4 = new Array();

var puntosXSelect4First = new Array();
var puntosYSelect4First = new Array();

var puntoX4 = [14,63,111,62,112,64,13,14,111];
var puntoY4 = [42,13,13,43,64,93,94,13,94];

var stage4 = document.getElementById('canvas4');
stage4.width = 120;
stage4.height = 100;

var x14 =0;
var x24 =0;
var y14 =0;
var y24 =0;
var val4=0;

var selectCorrect4 = [0,0,0,0,0,0,0];
var totalSelect4 = 0;

var pSelect4 = [0,0,0,0,0,0,0,0,0];
var totalPSelect4 = 0;

var mouseDown4 = false;
var mouseClick4 = false;
var ctx4 = stage4.getContext("2d");

function validarF4(){
	var validar4 = 0;

	for(var i=0; i<puntosXSelect4First.length-1; i++){
		if(puntosXSelect4[0]>=puntoX4[0]-5&&puntosXSelect4[0]<=puntoX4[0]+5&&puntosYSelect4[0]>=puntoY4[0]-5&&puntosYSelect4[0]<=puntoY4[0]+5){
			if(puntosXSelect4[1]>=puntoX4[1]-5&&puntosXSelect4[1]<=puntoX4[1]+5&&puntosYSelect4[1]>=puntoY4[1]-5&&puntosYSelect4[1]<=puntoY4[1]+5){
				val4 = val4;
				pSelect4[0]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[6]-5&&puntosXSelect4[1]<=puntoX4[6]+5&&puntosYSelect4[1]>=puntoY4[6]-5&&puntosYSelect4[1]<=puntoY4[6]+5){
				val4 = val4;
				pSelect4[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[3]-5&&puntosXSelect4[1]<=puntoX4[3]+5&&puntosYSelect4[1]>=puntoY4[3]-5&&puntosYSelect4[1]<=puntoY4[3]+5){
				val4 = val4;
				pSelect4[7]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[0]-5&&puntosXSelect4[1]<=puntoX4[0]+5&&puntosYSelect4[1]>=puntoY4[0]-5&&puntosYSelect4[1]<=puntoY4[0]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX4[1]-5&&puntosXSelect4[0]<=puntoX4[1]+5&&puntosYSelect4[0]>=puntoY4[1]-5&&puntosYSelect4[0]<=puntoY4[1]+5){
			if(puntosXSelect4[1]>=puntoX4[2]-5&&puntosXSelect4[1]<=puntoX4[2]+5&&puntosYSelect4[1]>=puntoY4[2]-5&&puntosYSelect4[1]<=puntoY4[2]+5){
				val4 = val4;
				pSelect4[1]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[0]-5&&puntosXSelect4[1]<=puntoX4[0]+5&&puntosYSelect4[1]>=puntoY4[0]-5&&puntosYSelect4[1]<=puntoY4[0]+5){
				val4 = val4;
				pSelect4[0]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[1]-5&&puntosXSelect4[1]<=puntoX4[1]+5&&puntosYSelect4[1]>=puntoY4[1]-5&&puntosYSelect4[1]<=puntoY4[1]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		
		else if(puntosXSelect4[0]>=puntoX4[2]-5&&puntosXSelect4[0]<=puntoX4[2]+5&&puntosYSelect4[0]>=puntoY4[2]-5&&puntosYSelect4[0]<=puntoY4[2]+5){
			if(puntosXSelect4[1]>=puntoX4[3]-5&&puntosXSelect4[1]<=puntoX4[3]+5&&puntosYSelect4[1]>=puntoY4[3]-5&&puntosYSelect4[1]<=puntoY4[3]+5){
				val4 = val4;
				pSelect4[2]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[1]-5&&puntosXSelect4[1]<=puntoX4[1]+5&&puntosYSelect4[1]>=puntoY4[1]-5&&puntosYSelect4[1]<=puntoY4[1]+5){
				val4 = val4;
				pSelect4[1]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[4]-5&&puntosXSelect4[1]<=puntoX4[4]+5&&puntosYSelect4[1]>=puntoY4[4]-5&&puntosYSelect4[1]<=puntoY4[4]+5){
				val4 = val4;
				pSelect4[3]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[2]-5&&puntosXSelect4[1]<=puntoX4[2]+5&&puntosYSelect4[1]>=puntoY4[2]-5&&puntosYSelect4[1]<=puntoY4[2]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX4[3]-5&&puntosXSelect4[0]<=puntoX4[3]+5&&puntosYSelect4[0]>=puntoY4[3]-5&&puntosYSelect4[0]<=puntoY4[3]+5){
			if(puntosXSelect4[1]>=puntoX4[2]-5&&puntosXSelect4[1]<=puntoX4[2]+5&&puntosYSelect4[1]>=puntoY4[2]-5&&puntosYSelect4[1]<=puntoY4[2]+5){
				val4 = val4;
				pSelect4[2]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[0]-5&&puntosXSelect4[1]<=puntoX4[0]+5&&puntosYSelect4[1]>=puntoY4[0]-5&&puntosYSelect4[1]<=puntoY4[0]+5){
				val4 = val4;
				pSelect4[7]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[5]-5&&puntosXSelect4[1]<=puntoX4[5]+5&&puntosYSelect4[1]>=puntoY4[5]-5&&puntosYSelect4[1]<=puntoY4[5]+5){
				val4 = val4;
				pSelect4[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[3]-5&&puntosXSelect4[1]<=puntoX4[3]+5&&puntosYSelect4[1]>=puntoY4[3]-5&&puntosYSelect4[1]<=puntoY4[3]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX4[4]-5&&puntosXSelect4[0]<=puntoX4[4]+5&&puntosYSelect4[0]>=puntoY4[4]-5&&puntosYSelect4[0]<=puntoY4[4]+5){
			if(puntosXSelect4[1]>=puntoX4[2]-5&&puntosXSelect4[1]<=puntoX4[2]+5&&puntosYSelect4[1]>=puntoY4[2]-5&&puntosYSelect4[1]<=puntoY4[2]+5){
				val4 = val4;
				pSelect4[3]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[5]-5&&puntosXSelect4[1]<=puntoX4[5]+5&&puntosYSelect4[1]>=puntoY4[5]-5&&puntosYSelect4[1]<=puntoY4[5]+5){
				val4 = val4;
				pSelect4[8]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[4]-5&&puntosXSelect4[1]<=puntoX4[4]+5&&puntosYSelect4[1]>=puntoY4[4]-5&&puntosYSelect4[1]<=puntoY4[4]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX4[5]-5&&puntosXSelect4[0]<=puntoX4[5]+5&&puntosYSelect4[0]>=puntoY4[5]-5&&puntosYSelect4[0]<=puntoY4[5]+5){
			if(puntosXSelect4[1]>=puntoX4[6]-5&&puntosXSelect4[1]<=puntoX4[6]+5&&puntosYSelect4[1]>=puntoY4[6]-5&&puntosYSelect4[1]<=puntoY4[6]+5){
				val4 = val4;
				pSelect4[5]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[4]-5&&puntosXSelect4[1]<=puntoX4[4]+5&&puntosYSelect4[1]>=puntoY4[4]-5&&puntosYSelect4[1]<=puntoY4[4]+5){
				val4 = val4;
				pSelect4[8]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[3]-5&&puntosXSelect4[1]<=puntoX4[3]+5&&puntosYSelect4[1]>=puntoY4[3]-5&&puntosYSelect4[1]<=puntoY4[3]+5){
				val4 = val4;
				pSelect4[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[5]-5&&puntosXSelect4[1]<=puntoX4[5]+5&&puntosYSelect4[1]>=puntoY4[5]-5&&puntosYSelect4[1]<=puntoY4[5]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX4[6]-5&&puntosXSelect4[0]<=puntoX4[6]+5&&puntosYSelect4[0]>=puntoY4[6]-5&&puntosYSelect4[0]<=puntoY4[6]+5){
			if(puntosXSelect4[1]>=puntoX4[0]-5&&puntosXSelect4[1]<=puntoX4[0]+5&&puntosYSelect4[1]>=puntoY4[0]-5&&puntosYSelect4[1]<=puntoY4[0]+5){
				val4 = val4;
				pSelect4[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[5]-5&&puntosXSelect4[1]<=puntoX4[5]+5&&puntosYSelect4[1]>=puntoY4[5]-5&&puntosYSelect4[1]<=puntoY4[5]+5){
				val4 = val4;
				pSelect4[5]=1;
			}
			else if(puntosXSelect4[1]>=puntoX4[6]-5&&puntosXSelect4[1]<=puntoX4[6]+5&&puntosYSelect4[1]>=puntoY4[6]-5&&puntosYSelect4[1]<=puntoY4[6]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		
		
		else{
			val4++;
		}

		puntosXSelect4.splice(0, 1);
		puntosYSelect4.splice(0, 1);
		
	}

	for(var k=0; k<pSelect4.length; k++){
		totalPSelect4 = totalPSelect4+pSelect4[k];
	}

	for(var j=0; j<selectCorrect4.length; j++){
		totalSelect4 =  totalSelect4+ selectCorrect4[j];
	}

	if(val4==0 && totalPSelect4==9  && totalSelect4==7){
		validar = 1;
	}
	else{
		validar = 0;
	}
	console.log(totalPSelect4 + " - "+val4+" - "+totalSelect4);
	return validar;
}

$(document).ready(function(){


	function getMousePosition(eve){
		var stgData = stage4.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}


	stage4.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx4.beginPath();
		mouseDown = true;
	}, false);

	stage4.addEventListener("mouseup", function(eve){
		mouseDown = true;
	}, false);


	stage4.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick4){
			x24 = axi.x;
			y24 = axi.y;
			console.log(x24+ " - "+ y24);
			for(var i=0; i<puntoY4.length; i++){
				if(x24>=puntoX4[i]-5&&x24<=puntoX4[i]+5&&y24>=puntoY4[i]-5&&y24<=puntoY4[i]+5){
					if(i==0){
						selectCorrect4[0]=1;
					}
					else if(i==1){
						selectCorrect4[1]=1;
					}
					else if(i==2){
						selectCorrect4[2]=1;
					}
					else if(i==3){
						selectCorrect4[3]=1;
					}
					else if(i==4){
						selectCorrect4[4]=1;
					}
					else if(i==5){
						selectCorrect4[5]=1;
					}
					else if(i==6){
						selectCorrect4[6]=1;
					}
					ctx4.fillStyle = "red";
					ctx4.arc(x24,y24,1,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					ctx4.lineTo(x14, y14);
					ctx4.lineTo(x24, y24);
					ctx4.strokeStyle = "red";
					ctx4.lineWidth = 2;
					ctx4.stroke();
					console.log(x24 + ' - ' + y24)
					puntosXSelect4.push(x24);
					puntosYSelect4.push(y24);
					puntosXSelect4First.push(x24);
					puntosYSelect4First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x14 = axi.x;
			y14 = axi.y;
			console.log(x14+ " - "+ y14);
			for(var i=0; i<puntoY4.length; i++){
				if(x14>=puntoX4[i]-5&&x14<=puntoX4[i]+5&&y14>=puntoY4[i]-5&&y14<=puntoY4[i]+5){
					if(i==0){
						selectCorrect4[0]=1;
					}
					else if(i==1){
						selectCorrect4[1]=1;
					}
					else if(i==2){
						selectCorrect4[2]=1;
					}
					else if(i==3){
						selectCorrect4[3]=1;
					}
					else if(i==4){
						selectCorrect4[4]=1;
					}
					else if(i==5){
						selectCorrect4[5]=1;
					}
					else if(i==6){
						selectCorrect4[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosXSelect4.push(x14);
					puntosYSelect4.push(y14);
					puntosXSelect4First.push(x14);
					puntosYSelect4First.push(y14);
					console.log(x14 + ' - ' + y14);
					document.getElementById("fc4").checked = true;
				}
			}
			console.log(mouseDown);
		}
		if(puntosXSelect4.length>0){
			document.getElementById("fc4").checked = true;
		}
		else{
			document.getElementById("fc4").checked = false;
		}
	}, false);


$('#limpiarF4').on('click', function(){
	mouseClick4=false;
	val4=0;
	puntosXSelect4.splice(0, puntosXSelect4.length);
	puntosYSelect4.splice(0, puntosYSelect4.length);
	puntosXSelect4First.splice(0, puntosXSelect4First.length);
	puntosYSelect4First.splice(0, puntosYSelect4First.length);
	selectCorrect4 = [0,0,0,0,0,0,0];
	totalSelect4 = 0;
	pSelect4 = [0,0,0,0,0,0,0,0,0];
	totalPSelect4 = 0;
	if(puntosXSelect4.length>0){
		document.getElementById("fc4").checked = true;
	}
	else{
		document.getElementById("fc4").checked = false;
	}
});

$('#ultimoF4').on('click', function(){
	var fin = puntosXSelect4First.length-1;
	for(var i2=0; i2<puntosXSelect4.length; i2++){
		if(puntosXSelect4[fin]>=puntoX4[i2]-5&&puntosXSelect4[fin]<=puntoX4[i2]+5&&puntosYSelect4[fin]>=puntoY4[i2]-5&&puntosYSelect4[fin]<=puntoY4[i2]+5){
			if(i2==0){
				selectCorrect4[0]=0;
			}
			else if(i2==1){
				selectCorrect4[1]=0;
			}
			else if(i2==2){
				selectCorrect4[2]=0;
			}
			else if(i2==3){
				selectCorrect4[3]=0;
			}
			else if(i2==4){
				selectCorrect4[4]=0;
			}
			else if(i2==5){
				selectCorrect4[5]=0;
			}
			else if(i2==6){
				selectCorrect4[6]=0;
			}
		}
	}
	puntosXSelect4.pop();
	puntosYSelect4.pop();
	puntosXSelect4First.pop();
	puntosYSelect4First.pop();
	if (puntosXSelect4.length==1) {
		puntosXSelect4.pop();
		puntosYSelect4.pop();

		puntosXSelect4First.pop();
		puntosYSelect4First.pop();
	}
	for(var i=0; i<puntosXSelect4First.length-1; i++){
		ctx4.beginPath();
		ctx4.fillStyle = "red";
		ctx4.arc(puntosXSelect4[i], puntosYSelect4[i],1,0,2*Math.PI, false);
		ctx4.fill();
		ctx4.lineTo(puntosXSelect4[i], puntosYSelect4[i]);
		ctx4.lineTo(puntosXSelect4[i+1], puntosYSelect4[i+1]);
		ctx4.strokeStyle = "red";
		ctx4.lineWidth = 2;
		ctx4.fillStyle = "red";
		ctx4.arc(puntosXSelect4[i+1], puntosYSelect4[i+1],1,0,2*Math.PI, false);
		ctx4.fill();
		ctx4.closePath();
		ctx4.stroke();
	}	
	x14 = puntosXSelect4First[puntosXSelect4First.length-1];
	y14 = puntosYSelect4First[puntosYSelect4First.length-1];
	console.log(puntosXSelect4First + " - " +puntosYSelect4First);
	if(puntosXSelect4.length>0){
		document.getElementById("fc4").checked = true;
	}
	else{
		document.getElementById("fc4").checked = false;
	}
});




});
