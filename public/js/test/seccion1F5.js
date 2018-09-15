var puntosSelec5 = new Array();

var puntosXSelect5 = new Array();
var puntosYSelect5 = new Array();

var puntosXSelect5First = new Array();
var puntosYSelect5First = new Array();

var puntoX5 = [29,60,60,75,77,13,29,13];
var puntoY5 = [58,58,29,14,74,75,29,14];

var stage5 = document.getElementById('canvas5');
stage5.width = 90;
stage5.height = 90;

var x15 =0;
var x25 =0;
var y15 =0;
var y25 =0;
var val5=0;

var selectCorrect5 = [0,0,0,0,0,0];
var totalSelect5 = 0;

var pSelect5 = [0,0,0,0,0,0];
var totalPSelect5 = 0;

var mouseDown5 = false;
var mouseClick5 = false;
var ctx5 = stage5.getContext("2d");

function validarF5(){

	var validar5 =0;
	for(var i=0; i<puntosXSelect5First.length-1; i++){
		if(puntosXSelect5[0]>=puntoX5[0]-5&&puntosXSelect5[0]<=puntoX5[0]+5&&puntosYSelect5[0]>=puntoY5[0]-5&&puntosYSelect5[0]<=puntoY5[0]+5){
			if(puntosXSelect5[1]>=puntoX5[1]-5&&puntosXSelect5[1]<=puntoX5[1]+5&&puntosYSelect5[1]>=puntoY5[1]-5&&puntosYSelect5[1]<=puntoY5[1]+5){
				val5 = val5;
				pSelect5[0]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[5]-5&&puntosXSelect5[1]<=puntoX5[5]+5&&puntosYSelect5[1]>=puntoY5[5]-5&&puntosYSelect5[1]<=puntoY5[5]+5){
				val5 = val5;
				pSelect5[5]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[0]-5&&puntosXSelect5[1]<=puntoX5[0]+5&&puntosYSelect5[1]>=puntoY5[0]-5&&puntosYSelect5[1]<=puntoY5[0]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX5[1]-5&&puntosXSelect5[0]<=puntoX5[1]+5&&puntosYSelect5[0]>=puntoY5[1]-5&&puntosYSelect5[0]<=puntoY5[1]+5){
			if(puntosXSelect5[1]>=puntoX5[2]-5&&puntosXSelect5[1]<=puntoX5[2]+5&&puntosYSelect5[1]>=puntoY5[2]-5&&puntosYSelect5[1]<=puntoY5[2]+5){
				val5 = val5;
				pSelect5[1]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[0]-5&&puntosXSelect5[1]<=puntoX5[0]+5&&puntosYSelect5[1]>=puntoY5[0]-5&&puntosYSelect5[1]<=puntoY5[0]+5){
				val5 = val5;
				pSelect5[0]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[1]-5&&puntosXSelect5[1]<=puntoX5[1]+5&&puntosYSelect5[1]>=puntoY5[1]-5&&puntosYSelect5[1]<=puntoY5[1]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		
		else if(puntosXSelect5[0]>=puntoX5[2]-5&&puntosXSelect5[0]<=puntoX5[2]+5&&puntosYSelect5[0]>=puntoY5[2]-5&&puntosYSelect5[0]<=puntoY5[2]+5){
			if(puntosXSelect5[1]>=puntoX5[3]-5&&puntosXSelect5[1]<=puntoX5[3]+5&&puntosYSelect5[1]>=puntoY5[3]-5&&puntosYSelect5[1]<=puntoY5[3]+5){
				val5 = val5;
				pSelect5[2]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[1]-5&&puntosXSelect5[1]<=puntoX5[1]+5&&puntosYSelect5[1]>=puntoY5[1]-5&&puntosYSelect5[1]<=puntoY5[1]+5){
				val5 = val5;
				pSelect5[1]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[2]-5&&puntosXSelect5[1]<=puntoX5[2]+5&&puntosYSelect5[1]>=puntoY5[2]-5&&puntosYSelect5[1]<=puntoY5[2]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX5[3]-5&&puntosXSelect5[0]<=puntoX5[3]+5&&puntosYSelect5[0]>=puntoY5[3]-5&&puntosYSelect5[0]<=puntoY5[3]+5){
			if(puntosXSelect5[1]>=puntoX5[2]-5&&puntosXSelect5[1]<=puntoX5[2]+5&&puntosYSelect5[1]>=puntoY5[2]-5&&puntosYSelect5[1]<=puntoY5[2]+5){
				val5 = val5;
				pSelect5[2]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[4]-5&&puntosXSelect5[1]<=puntoX5[4]+5&&puntosYSelect5[1]>=puntoY5[4]-5&&puntosYSelect5[1]<=puntoY5[4]+5){
				val5 = val5;
				pSelect5[3]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[3]-5&&puntosXSelect5[1]<=puntoX5[3]+5&&puntosYSelect5[1]>=puntoY5[3]-5&&puntosYSelect5[1]<=puntoY5[3]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX5[4]-5&&puntosXSelect5[0]<=puntoX5[4]+5&&puntosYSelect5[0]>=puntoY5[4]-5&&puntosYSelect5[0]<=puntoY5[4]+5){
			if(puntosXSelect5[1]>=puntoX5[3]-5&&puntosXSelect5[1]<=puntoX5[3]+5&&puntosYSelect5[1]>=puntoY5[3]-5&&puntosYSelect5[1]<=puntoY5[3]+5){
				val5 = val5;
				pSelect5[3]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[5]-5&&puntosXSelect5[1]<=puntoX5[5]+5&&puntosYSelect5[1]>=puntoY5[5]-5&&puntosYSelect5[1]<=puntoY5[5]+5){
				val5 = val5;
				pSelect5[4]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[4]-5&&puntosXSelect5[1]<=puntoX5[4]+5&&puntosYSelect5[1]>=puntoY5[4]-5&&puntosYSelect5[1]<=puntoY5[4]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		
		else if(puntosXSelect5[0]>=puntoX5[5]-5&&puntosXSelect5[0]<=puntoX5[5]+5&&puntosYSelect5[0]>=puntoY5[5]-5&&puntosYSelect5[0]<=puntoY5[5]+5){
			if(puntosXSelect5[1]>=puntoX5[4]-5&&puntosXSelect5[1]<=puntoX5[4]+5&&puntosYSelect5[1]>=puntoY5[4]-5&&puntosYSelect5[1]<=puntoY5[4]+5){
				val5 = val5;
				pSelect5[4]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[0]-5&&puntosXSelect5[1]<=puntoX5[0]+5&&puntosYSelect5[1]>=puntoY5[0]-5&&puntosYSelect5[1]<=puntoY5[0]+5){
				val5 = val5;
				pSelect5[5]=1;
			}
			else if(puntosXSelect5[1]>=puntoX5[5]-5&&puntosXSelect5[1]<=puntoX5[5]+5&&puntosYSelect5[1]>=puntoY5[5]-5&&puntosYSelect5[1]<=puntoY5[5]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		
		else{
			val++;
		}

		puntosXSelect5.splice(0, 1);
		puntosYSelect5.splice(0, 1);
		
	}

	for(var k=0; k<pSelect5.length; k++){
		totalPSelect5 = totalPSelect5+pSelect5[k];
	}

	for(var j=0; j<selectCorrect5.length; j++){
		totalSelect5 =  totalSelect5+ selectCorrect5[j];
	}

	if(val5==0 && totalPSelect5==6 && totalSelect5==6){
		validar = 1;
	}

	else{
		validar = 0;
	}
	console.log(val5 + " - " + totalPSelect5 + " - " +totalSelect5);
	console.log(totalPSelect5);
	return validar;
}

$(document).ready(function(){


	function getMousePosition(eve){
		var stgData = stage5.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage5.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx5.beginPath();
		mouseDown5 = true;
	}, false);

	stage5.addEventListener("mouseup", function(eve){
		mouseDown5 = true;
	}, false);


	stage5.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick5){
			x25 = axi.x;
			y25 = axi.y;
			console.log(x25+ " - "+ y25);
			for(var i=0; i<puntoY5.length; i++){
				if(x25>=puntoX5[i]-5&&x25<=puntoX5[i]+5&&y25>=puntoY5[i]-5&&y25<=puntoY5[i]+5){
					if(i==0){
						selectCorrect5[0]=1;
					}
					else if(i==1){
						selectCorrect5[1]=1;
					}
					else if(i==2){
						selectCorrect5[2]=1;
					}
					else if(i==3){
						selectCorrect5[3]=1;
					}
					else if(i==4){
						selectCorrect5[4]=1;
					}
					else if(i==5){
						selectCorrect5[5]=1;
					}
					ctx5.fillStyle = "red";
					ctx5.arc(x25,y25,1,0,2*Math.PI, false);
					ctx5.fill();
					ctx5.closePath();
					ctx5.lineTo(x15, y15);
					ctx5.lineTo(x25, y25);
					ctx5.strokeStyle = "red";
					ctx5.lineWidth = 2;
					ctx5.stroke();
					console.log(x25 + ' - ' + y25)
					puntosXSelect5.push(x25);
					puntosYSelect5.push(y25);
					puntosXSelect5First.push(x25);
					puntosYSelect5First.push(y25);
					mouseClick5 =true;
					x15 = axi.x;
					y15 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x15 = axi.x;
			y15 = axi.y;
			console.log(x15+ " - "+ y15);
			for(var i=0; i<puntoY5.length; i++){
				if(x15>=puntoX5[i]-5&&x15<=puntoX5[i]+5&&y15>=puntoY5[i]-5&&y15<=puntoY5[i]+5){
					if(i==0){
						selectCorrect5[0]=1;
					}
					else if(i==1){
						selectCorrect5[1]=1;
					}
					else if(i==2){
						selectCorrect5[2]=1;
					}
					else if(i==3){
						selectCorrect5[3]=1;
					}
					else if(i==4){
						selectCorrect5[4]=1;
					}
					else if(i==5){
						selectCorrect5[5]=1;
					}
					mouseClick5 =true;
					var punto = [axi.x, axi.y];
					puntosSelec5.push(punto);
					ctx5.fillStyle = "red";
					ctx5.arc(x15,y15,2,0,2*Math.PI, false);
					ctx5.fill();
					ctx5.closePath();
					puntosXSelect5.push(x15);
					puntosYSelect5.push(y15);
					puntosXSelect5First.push(x15);
					puntosYSelect5First.push(y15);
					console.log(x15 + ' - ' + y15);
				}
			}
			

			console.log(mouseDown);
		}
		if(puntosXSelect5.length>0){
			document.getElementById("fc5").checked = true;
		}
		else{
			document.getElementById("fc5").checked = false;
		}
	}, false)


$('#limpiarF5').on('click', function(){
	mouseClick5=false;
	val5=0;
	puntosXSelect5.splice(0, puntosXSelect5.length);
	puntosYSelect5.splice(0, puntosYSelect5.length);
	puntosXSelect5First.splice(0, puntosXSelect5First.length);
	puntosYSelect5First.splice(0, puntosYSelect5First.length);
	selectCorrect5 = [0,0,0,0,0,0];
	totalSelect5 = 0;
	pSelect5 = [0,0,0,0,0,0];
	totalPSelect5 = 0;
	if(puntosXSelect5.length>0){
		document.getElementById("fc5").checked = true;
	}
	else{
		document.getElementById("fc5").checked = false;
	}
});

$('#ultimoF5').on('click', function(){
	var fin = puntosXSelect5First.length-1;
	for(var i2=0; i2<puntosXSelect5.length; i2++){
		if(puntosXSelect5[fin]>=puntoX5[i2]-5&&puntosXSelect5[fin]<=puntoX5[i2]+5&&puntosYSelect5[fin]>=puntoY5[i2]-5&&puntosYSelect5[fin]<=puntoY5[i2]+5){
			if(i2==0){
				selectCorrect5[0]=0;
			}
			else if(i2==1){
				selectCorrect5[1]=0;
			}
			else if(i2==2){
				selectCorrect5[2]=0;
			}
			else if(i2==3){
				selectCorrect5[3]=0;
			}
			else if(i2==4){
				selectCorrect5[4]=0;
			}
			else if(i2==5){
				selectCorrect5[5]=0;
			}
		}
	}

	puntosXSelect5.pop();
	puntosYSelect5.pop();
	puntosXSelect5First.pop();
	puntosYSelect5First.pop();
	if (puntosXSelect5.length==1) {
		puntosXSelect5.pop();
		puntosYSelect5.pop();

		puntosXSelect5First.pop();
		puntosYSelect5First.pop();
	}
	for(var i=0; i<puntosXSelect5First.length-1; i++){
		ctx5.beginPath();
		ctx5.fillStyle = "red";
		ctx5.arc(puntosXSelect5[i], puntosYSelect5[i],1,0,2*Math.PI, false);
		ctx5.fill();
		ctx5.lineTo(puntosXSelect5[i], puntosYSelect5[i]);
		ctx5.lineTo(puntosXSelect5[i+1], puntosYSelect5[i+1]);
		ctx5.strokeStyle = "red";
		ctx5.lineWidth = 2;
		ctx5.fillStyle = "red";
		ctx5.arc(puntosXSelect5[i+1], puntosYSelect5[i+1],1,0,2*Math.PI, false);
		ctx5.fill();
		ctx5.closePath();
		ctx5.stroke();
	}	
	x15 = puntosXSelect5First[puntosXSelect5First.length-1];
	y15 = puntosYSelect5First[puntosYSelect5First.length-1];
	console.log(puntosXSelect5First + " - " +puntosYSelect5First);
	if(puntosXSelect5.length>0){
		document.getElementById("fc5").checked = true;
	}
	else{
		document.getElementById("fc5").checked = false;
	}

});





});
