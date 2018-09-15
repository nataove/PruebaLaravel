var puntosSelec6 = new Array();

var puntosXSelect6 = new Array();
var puntosYSelect6 = new Array();

var puntosXSelect6First = new Array();
var puntosYSelect6First = new Array();

var puntoX6 = [16,41,66,40,9,70];
var puntoY6 = [108,13,105,129,130,129];

var stage6 = document.getElementById('canvas6');
stage6.width = 85;
stage6.height = 140;

var x16 =0;
var x26 =0;
var y16 =0;
var y26 =0;
var val6=0;

var selectCorrect6 = [0,0,0,0];
var totalSelect6 = 0;

var pSelect6 = [0,0,0,0];
var totalPSelect6 = 0;

var mouseDown6 = false;
var mouseClick6 = false;
var ctx6 = stage6.getContext("2d");

function validarF6(){
	var validar=0;
	for(var i=0; i<puntosXSelect6First.length-1; i++){
		if(puntosXSelect6[0]>=puntoX6[0]-5&&puntosXSelect6[0]<=puntoX6[0]+5&&puntosYSelect6[0]>=puntoY6[0]-5&&puntosYSelect6[0]<=puntoY6[0]+5){
			if(puntosXSelect6[1]>=puntoX6[1]-5&&puntosXSelect6[1]<=puntoX6[1]+5&&puntosYSelect6[1]>=puntoY6[1]-5&&puntosYSelect6[1]<=puntoY6[1]+5){
				val6 = val6;
				pSelect6[0]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[3]-5&&puntosXSelect6[1]<=puntoX6[3]+5&&puntosYSelect6[1]>=puntoY6[3]-5&&puntosYSelect6[1]<=puntoY6[3]+5){
				val6 = val6;
				pSelect6[3]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[0]-5&&puntosXSelect6[1]<=puntoX6[0]+5&&puntosYSelect6[1]>=puntoY6[0]-5&&puntosYSelect6[1]<=puntoY6[0]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX6[1]-5&&puntosXSelect6[0]<=puntoX6[1]+5&&puntosYSelect6[0]>=puntoY6[1]-5&&puntosYSelect6[0]<=puntoY6[1]+5){
			if(puntosXSelect6[1]>=puntoX6[2]-5&&puntosXSelect6[1]<=puntoX6[2]+5&&puntosYSelect6[1]>=puntoY6[2]-5&&puntosYSelect6[1]<=puntoY6[2]+5){
				val6 = val6;
				pSelect6[1]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[0]-5&&puntosXSelect6[1]<=puntoX6[0]+5&&puntosYSelect6[1]>=puntoY6[0]-5&&puntosYSelect6[1]<=puntoY6[0]+5){
				val6 = val6;
				pSelect6[0]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[1]-5&&puntosXSelect6[1]<=puntoX6[1]+5&&puntosYSelect6[1]>=puntoY6[1]-5&&puntosYSelect6[1]<=puntoY6[1]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		
		else if(puntosXSelect6[0]>=puntoX6[2]-5&&puntosXSelect6[0]<=puntoX6[2]+5&&puntosYSelect6[0]>=puntoY6[2]-5&&puntosYSelect6[0]<=puntoY6[2]+5){
			if(puntosXSelect6[1]>=puntoX6[3]-5&&puntosXSelect6[1]<=puntoX6[3]+5&&puntosYSelect6[1]>=puntoY6[3]-5&&puntosYSelect6[1]<=puntoY6[3]+5){
				val6 = val6;
				pSelect6[2]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[1]-5&&puntosXSelect6[1]<=puntoX6[1]+5&&puntosYSelect6[1]>=puntoY6[1]-5&&puntosYSelect6[1]<=puntoY6[1]+5){
				val6 = val6;
				pSelect6[1]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[2]-5&&puntosXSelect6[1]<=puntoX6[2]+5&&puntosYSelect6[1]>=puntoY6[2]-5&&puntosYSelect6[1]<=puntoY6[2]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX6[3]-5&&puntosXSelect6[0]<=puntoX6[3]+5&&puntosYSelect6[0]>=puntoY6[3]-5&&puntosYSelect6[0]<=puntoY6[3]+5){
			if(puntosXSelect6[1]>=puntoX6[2]-5&&puntosXSelect6[1]<=puntoX6[2]+5&&puntosYSelect6[1]>=puntoY6[2]-5&&puntosYSelect6[1]<=puntoY6[2]+5){
				val6 = val6;
				pSelect6[2]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[0]-5&&puntosXSelect6[1]<=puntoX6[0]+5&&puntosYSelect6[1]>=puntoY6[0]-5&&puntosYSelect6[1]<=puntoY6[0]+5){
				val6 = val6;
				pSelect6[3]=1;
			}
			else if(puntosXSelect6[1]>=puntoX6[3]-5&&puntosXSelect6[1]<=puntoX6[3]+5&&puntosYSelect6[1]>=puntoY6[3]-5&&puntosYSelect6[1]<=puntoY6[3]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		
		else {
			val6++;
		}

		puntosXSelect6.splice(0, 1);
		puntosYSelect6.splice(0, 1);
		
	}
	for(var k=0; k<pSelect6.length; k++){
		totalPSelect6 = totalPSelect6+pSelect6[k];
	}

	for(var j=0; j<selectCorrect6.length; j++){
		totalSelect6 =  totalSelect6+ selectCorrect6[j];
	}

	if(val6==0 && totalSelect6==4 &&totalPSelect6==4){
		validar = 1;
	}

	else{
		validar = 0;
	}
	console.log(val6 + " - " + totalPSelect6 + " - " +totalSelect6);
	console.log(totalPSelect6);
	return validar;
}

$(document).ready(function(){
	

	function getMousePosition(eve){
		var stgData = stage6.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage6.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx6.beginPath();
		mouseDown6 = true;
	}, false);

	stage6.addEventListener("mouseup", function(eve){
		mouseDown6 = true;
	}, false);


	stage6.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick6){
			x26 = axi.x;
			y26 = axi.y;
			console.log(x26+ " - "+ y26);
			for(var i=0; i<puntoY6.length; i++){
				if(x26>=puntoX6[i]-5&&x26<=puntoX6[i]+5&&y26>=puntoY6[i]-5&&y26<=puntoY6[i]+5){
					if(i==0){
						selectCorrect6[0]=1;
					}
					else if(i==1){
						selectCorrect6[1]=1;
					}
					else if(i==2){
						selectCorrect6[2]=1;
					}
					else if(i==3){
						selectCorrect6[3]=1;
					}
					ctx6.fillStyle = "red";
					ctx6.arc(x26,y26,1,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					ctx6.lineTo(x16, y16);
					ctx6.lineTo(x26, y26);
					ctx6.strokeStyle = "red";
					ctx6.lineWidth = 2;
					ctx6.stroke();
					console.log(x26 + ' - ' + y26)
					puntosXSelect6.push(x26);
					puntosYSelect6.push(y26);
					puntosXSelect6First.push(x26);
					puntosYSelect6First.push(y26);
					mouseClick6 =true;
					x16 = axi.x;
					y16 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x16 = axi.x;
			y16 = axi.y;
			console.log(x16+ " - "+ y16);
			for(var i=0; i<puntoY6.length; i++){
				if(x16>=puntoX6[i]-5&&x16<=puntoX6[i]+5&&y16>=puntoY6[i]-5&&y16<=puntoY6[i]+5){
					if(i==0){
						selectCorrect6[0]=1;
					}
					else if(i==1){
						selectCorrect6[1]=1;
					}
					else if(i==2){
						selectCorrect6[2]=1;
					}
					else if(i==3){
						selectCorrect6[3]=1;
					}
					mouseClick6 =true;
					var punto = [axi.x, axi.y];
					puntosSelec6.push(punto);
					ctx6.fillStyle = "red";
					ctx6.arc(x16,y16,2,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					puntosXSelect6.push(x16);
					puntosYSelect6.push(y16);
					puntosXSelect6First.push(x16);
					puntosYSelect6First.push(y16);
					console.log(x16 + ' - ' + y16);
				}
			}
			console.log(mouseDown);
		}
		if(puntosXSelect6.length>0){
			document.getElementById("fc6").checked = true;
		}
		else{
			document.getElementById("fc6").checked = false;
		}
	}, false)


$('#limpiarF6').on('click', function(){
	mouseClick6=false;
	val6=0;
	puntosXSelect6.splice(0, puntosXSelect6.length);
	puntosYSelect6.splice(0, puntosYSelect6.length);
	puntosXSelect6First.splice(0, puntosXSelect6First.length);
	puntosYSelect6First.splice(0, puntosYSelect6First.length);
	selectCorrect6 = [0,0,0,0];
	totalSelect6 = 0;
	pSelect6 = [0,0,0,0];
	totalPSelect6 = 0;
	if(puntosXSelect6.length>0){
		document.getElementById("fc6").checked = true;
	}
	else{
		document.getElementById("fc6").checked = false;
	}
});

$('#ultimoF6').on('click', function(){
	var fin = puntosXSelect6First.length-1;
	for(var i2=0; i2<puntosXSelect6.length; i2++){
		if(puntosXSelect6[fin]>=puntoX6[i2]-5&&puntosXSelect6[fin]<=puntoX6[i2]+5&&puntosYSelect6[fin]>=puntoY6[i2]-5&&puntosYSelect6[fin]<=puntoY6[i2]+5){
			if(i2==0){
				selectCorrect6[0]=0;
			}
			else if(i2==1){
				selectCorrect6[1]=0;
			}
			else if(i2==2){
				selectCorrect6[2]=0;
			}
			else if(i2==3){
				selectCorrect6[3]=0;
			}
		}
	}
	puntosXSelect6.pop();
	puntosYSelect6.pop();

	puntosXSelect6First.pop();
	puntosYSelect6First.pop();

	if (puntosXSelect6.length==1) {
		puntosXSelect6.pop();
		puntosYSelect6.pop();

		puntosXSelect6First.pop();
		puntosYSelect6First.pop();
	}
	for(var i=0; i<puntosXSelect6First.length-1; i++){
		ctx6.beginPath();
		ctx6.fillStyle = "red";
		ctx6.arc(puntosXSelect6[i], puntosYSelect6[i],1,0,2*Math.PI, false);
		ctx6.fill();
		ctx6.lineTo(puntosXSelect6[i], puntosYSelect6[i]);
		ctx6.lineTo(puntosXSelect6[i+1], puntosYSelect6[i+1]);
		ctx6.strokeStyle = "red";
		ctx6.lineWidth = 2;
		ctx6.fillStyle = "red";
		ctx6.arc(puntosXSelect6[i+1], puntosYSelect6[i+1],1,0,2*Math.PI, false);
		ctx6.fill();
		ctx6.closePath();
		ctx6.stroke();
	}	
	x16 = puntosXSelect6First[puntosXSelect6First.length-1];
	y16 = puntosYSelect6First[puntosYSelect6First.length-1];
	console.log(puntosXSelect6First + " - " +puntosYSelect6First);
	if(puntosXSelect6.length>0){
		document.getElementById("fc6").checked = true;
	}
	else{
		document.getElementById("fc6").checked = false;
	}
});





});
