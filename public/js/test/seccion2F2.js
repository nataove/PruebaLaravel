var puntosSelec2 = new Array();

var puntosXSelect2 = new Array();
var puntosYSelect2 = new Array();

var puntosXSelect2First = new Array();
var puntosYSelect2First = new Array();

var puntoX2 = [33,51,56,139,147,164,148,142,59,50,19,11,74,99,121,120,75,177,185,125,100,75];
var puntoY2 = [163,134,123,122,132,161,189,201,203,191,137,122,11,51,11,133,188,189,199,313,272,312,202];

var selectCorrect2 = [0,0,0,0,0,0];
var totalSelect2 =0;

var stage2 = document.getElementById('canvas2');
stage2.width = 210;
stage2.height = 340;

var pSelect2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect2 = 0;

var x12 =0;
var x22 =0;
var y12 =0;
var y22 =0;
var val2=0;


var mouseDown2 = false;
var mouseClick2 = false;
var ctx2 = stage2.getContext("2d");

function validarF2(){
	var validar = 0;
	for(var i=0; i<puntosXSelect2First.length-1; i++){
		if(puntosXSelect2[0]>=puntoX2[0]-5&&puntosXSelect2[0]<=puntoX2[0]+5&&puntosYSelect2[0]>=puntoY2[0]-5&&puntosYSelect2[0]<=puntoY2[0]+5){
			if(puntosXSelect2[1]>=puntoX2[1]-5&&puntosXSelect2[1]<=puntoX2[1]+5&&puntosYSelect2[1]>=puntoY2[1]-5&&puntosYSelect2[1]<=puntoY2[1]+5){
				val2 = val2;
				pSelect2[0]=1;
				pSelect2[1]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[2]-5&&puntosXSelect2[1]<=puntoX2[2]+5&&puntosYSelect2[1]>=puntoY2[2]-5&&puntosYSelect2[1]<=puntoY2[2]+5){
				val2 = val2;
				pSelect2[0]=1;
				pSelect2[1]=1;
				pSelect2[2]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[9]-5&&puntosXSelect2[1]<=puntoX2[9]+5&&puntosYSelect2[1]>=puntoY2[9]-5&&puntosYSelect2[1]<=puntoY2[9]+5){
				val2 = val2;
				pSelect2[13]=1;
				pSelect2[12]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[8]-5&&puntosXSelect2[1]<=puntoX2[8]+5&&puntosYSelect2[1]>=puntoY2[8]-5&&puntosYSelect2[1]<=puntoY2[8]+5){
				pSelect2[13]=1;
				pSelect2[12]=1;
				pSelect2[11]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[0]-5&&puntosXSelect2[1]<=puntoX2[0]+5&&puntosYSelect2[1]>=puntoY2[0]-5&&puntosYSelect2[1]<=puntoY2[0]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[1]-5&&puntosXSelect2[0]<=puntoX2[1]+5&&puntosYSelect2[0]>=puntoY2[1]-5&&puntosYSelect2[0]<=puntoY2[1]+5){
			if(puntosXSelect2[1]>=puntoX2[2]-5&&puntosXSelect2[1]<=puntoX2[2]+5&&puntosYSelect2[1]>=puntoY2[2]-5&&puntosYSelect2[1]<=puntoY2[2]+5){
				val2 = val2;
				pSelect2[2]=1;
				pSelect2[1]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[0]-5&&puntosXSelect2[1]<=puntoX2[0]+5&&puntosYSelect2[1]>=puntoY2[0]-5&&puntosYSelect2[1]<=puntoY2[0]+5){
				val2 = val2;
				pSelect2[0]=1;
				pSelect2[1]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[1]-5&&puntosXSelect2[1]<=puntoX2[1]+5&&puntosYSelect2[1]>=puntoY2[1]-5&&puntosYSelect2[1]<=puntoY2[1]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[2]-5&&puntosXSelect2[0]<=puntoX2[2]+5&&puntosYSelect2[0]>=puntoY2[2]-5&&puntosYSelect2[0]<=puntoY2[2]+5){
			if(puntosXSelect2[1]>=puntoX2[3]-5&&puntosXSelect2[1]<=puntoX2[3]+5&&puntosYSelect2[1]>=puntoY2[3]-5&&puntosYSelect2[1]<=puntoY2[3]+5){
				val2 = val2;
				pSelect2[3]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[1]-5&&puntosXSelect2[1]<=puntoX2[1]+5&&puntosYSelect2[1]>=puntoY2[1]-5&&puntosYSelect2[1]<=puntoY2[1]+5){
				val2 = val2;
				pSelect2[2]=1;
				pSelect2[1]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[0]-5&&puntosXSelect2[1]<=puntoX2[0]+5&&puntosYSelect2[1]>=puntoY2[0]-5&&puntosYSelect2[1]<=puntoY2[0]+5){
				val2 = val2;
				pSelect2[0]=1;
				pSelect2[1]=1;
				pSelect2[2]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[2]-5&&puntosXSelect2[1]<=puntoX2[2]+5&&puntosYSelect2[1]>=puntoY2[2]-5&&puntosYSelect2[1]<=puntoY2[2]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[3]-5&&puntosXSelect2[0]<=puntoX2[3]+5&&puntosYSelect2[0]>=puntoY2[3]-5&&puntosYSelect2[0]<=puntoY2[3]+5){
			if(puntosXSelect2[1]>=puntoX2[2]-5&&puntosXSelect2[1]<=puntoX2[2]+5&&puntosYSelect2[1]>=puntoY2[2]-5&&puntosYSelect2[1]<=puntoY2[2]+5){
				val2 = val2;
				pSelect2[3]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[4]-5&&puntosXSelect2[1]<=puntoX2[4]+5&&puntosYSelect2[1]>=puntoY2[4]-5&&puntosYSelect2[1]<=puntoY2[4]+5){
				val2 = val2;
				pSelect2[4]=1;
				pSelect2[5]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[5]-5&&puntosXSelect2[1]<=puntoX2[5]+5&&puntosYSelect2[1]>=puntoY2[5]-5&&puntosYSelect2[1]<=puntoY2[5]+5){
				val2 = val2;
				pSelect2[4]=1;
				pSelect2[5]=1;
				pSelect2[6]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[3]-5&&puntosXSelect2[1]<=puntoX2[3]+5&&puntosYSelect2[1]>=puntoY2[3]-5&&puntosYSelect2[1]<=puntoY2[3]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[4]-5&&puntosXSelect2[0]<=puntoX2[4]+5&&puntosYSelect2[0]>=puntoY2[4]-5&&puntosYSelect2[0]<=puntoY2[4]+5){
			if(puntosXSelect2[1]>=puntoX2[3]-5&&puntosXSelect2[1]<=puntoX2[3]+5&&puntosYSelect2[1]>=puntoY2[3]-5&&puntosYSelect2[1]<=puntoY2[3]+5){
				val2 = val2;
				pSelect2[4]=1;
				pSelect2[5]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[5]-5&&puntosXSelect2[1]<=puntoX2[5]+5&&puntosYSelect2[1]>=puntoY2[5]-5&&puntosYSelect2[1]<=puntoY2[5]+5){
				val2 = val2;
				pSelect2[6]=1;
				pSelect2[5]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[4]-5&&puntosXSelect2[1]<=puntoX2[4]+5&&puntosYSelect2[1]>=puntoY2[4]-5&&puntosYSelect2[1]<=puntoY2[4]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[5]-5&&puntosXSelect2[0]<=puntoX2[5]+5&&puntosYSelect2[0]>=puntoY2[5]-5&&puntosYSelect2[0]<=puntoY2[5]+5){
			if(puntosXSelect2[1]>=puntoX2[6]-5&&puntosXSelect2[1]<=puntoX2[6]+5&&puntosYSelect2[1]>=puntoY2[6]-5&&puntosYSelect2[1]<=puntoY2[6]+5){
				val2 = val2;
				pSelect2[7]=1;
				pSelect2[8]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[7]-5&&puntosXSelect2[1]<=puntoX2[7]+5&&puntosYSelect2[1]>=puntoY2[7]-5&&puntosYSelect2[1]<=puntoY2[7]+5){
				val2 = val2;
				pSelect2[7]=1;
				pSelect2[8]=1;
				pSelect2[9]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[4]-5&&puntosXSelect2[1]<=puntoX2[4]+5&&puntosYSelect2[1]>=puntoY2[4]-5&&puntosYSelect2[1]<=puntoY2[4]+5){
				val2 = val2;
				pSelect2[6]=1;
				pSelect2[5]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[3]-5&&puntosXSelect2[1]<=puntoX2[3]+5&&puntosYSelect2[1]>=puntoY2[3]-5&&puntosYSelect2[1]<=puntoY2[3]+5){
				val2 = val2;
				pSelect2[4]=1;
				pSelect2[5]=1;
				pSelect2[6]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[5]-5&&puntosXSelect2[1]<=puntoX2[5]+5&&puntosYSelect2[1]>=puntoY2[5]-5&&puntosYSelect2[1]<=puntoY2[5]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[6]-5&&puntosXSelect2[0]<=puntoX2[6]+5&&puntosYSelect2[0]>=puntoY2[6]-5&&puntosYSelect2[0]<=puntoY2[6]+5){
			if(puntosXSelect2[1]>=puntoX2[7]-5&&puntosXSelect2[1]<=puntoX2[7]+5&&puntosYSelect2[1]>=puntoY2[7]-5&&puntosYSelect2[1]<=puntoY2[7]+5){
				val2 = val2;
				pSelect2[9]=1;
				pSelect2[8]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[5]-5&&puntosXSelect2[1]<=puntoX2[5]+5&&puntosYSelect2[1]>=puntoY2[5]-5&&puntosYSelect2[1]<=puntoY2[5]+5){
				val2 = val2;
				pSelect2[7]=1;
				pSelect2[8]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[6]-5&&puntosXSelect2[1]<=puntoX2[6]+5&&puntosYSelect2[1]>=puntoY2[6]-5&&puntosYSelect2[1]<=puntoY2[6]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		
		else if(puntosXSelect2[0]>=puntoX2[7]-5&&puntosXSelect2[0]<=puntoX2[7]+5&&puntosYSelect2[0]>=puntoY2[7]-5&&puntosYSelect2[0]<=puntoY2[7]+5){
			if(puntosXSelect2[1]>=puntoX2[8]-5&&puntosXSelect2[1]<=puntoX2[8]+5&&puntosYSelect2[1]>=puntoY2[8]-5&&puntosYSelect2[1]<=puntoY2[8]+5){
				val2 = val2;
				pSelect2[10]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[6]-5&&puntosXSelect2[1]<=puntoX2[6]+5&&puntosYSelect2[1]>=puntoY2[6]-5&&puntosYSelect2[1]<=puntoY2[6]+5){
				val2 = val2;
				pSelect2[9]=1;
				pSelect2[8]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[5]-5&&puntosXSelect2[1]<=puntoX2[5]+5&&puntosYSelect2[1]>=puntoY2[5]-5&&puntosYSelect2[1]<=puntoY2[5]+5){
				val2 = val2;
				pSelect2[7]=1;
				pSelect2[8]=1;
				pSelect2[9]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[7]-5&&puntosXSelect2[1]<=puntoX2[7]+5&&puntosYSelect2[1]>=puntoY2[7]-5&&puntosYSelect2[1]<=puntoY2[7]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}

		else if(puntosXSelect2[0]>=puntoX2[8]-5&&puntosXSelect2[0]<=puntoX2[8]+5&&puntosYSelect2[0]>=puntoY2[8]-5&&puntosYSelect2[0]<=puntoY2[8]+5){
			if(puntosXSelect2[1]>=puntoX2[9]-5&&puntosXSelect2[1]<=puntoX2[9]+5&&puntosYSelect2[1]>=puntoY2[9]-5&&puntosYSelect2[1]<=puntoY2[9]+5){
				val2 = val2;
				pSelect2[11]=1;
				pSelect2[12]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[0]-5&&puntosXSelect2[1]<=puntoX2[0]+5&&puntosYSelect2[1]>=puntoY2[0]-5&&puntosYSelect2[1]<=puntoY2[0]+5){
				val2 = val2;
				pSelect2[13]=1;
				pSelect2[12]=1;
				pSelect2[11]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[7]-5&&puntosXSelect2[1]<=puntoX2[7]+5&&puntosYSelect2[1]>=puntoY2[7]-5&&puntosYSelect2[1]<=puntoY2[7]+5){
				val2 = val2;
				pSelect2[10]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[8]-5&&puntosXSelect2[1]<=puntoX2[8]+5&&puntosYSelect2[1]>=puntoY2[8]-5&&puntosYSelect2[1]<=puntoY2[8]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}
		else if(puntosXSelect2[0]>=puntoX2[9]-5&&puntosXSelect2[0]<=puntoX2[9]+5&&puntosYSelect2[0]>=puntoY2[9]-5&&puntosYSelect2[0]<=puntoY2[9]+5){
			if(puntosXSelect2[1]>=puntoX2[0]-5&&puntosXSelect2[1]<=puntoX2[0]+5&&puntosYSelect2[1]>=puntoY2[0]-5&&puntosYSelect2[1]<=puntoY2[0]+5){
				val2 = val2;
				pSelect2[13]=1;
				pSelect2[12]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[8]-5&&puntosXSelect2[1]<=puntoX2[8]+5&&puntosYSelect2[1]>=puntoY2[8]-5&&puntosYSelect2[1]<=puntoY2[8]+5){
				val2 = val2;
				pSelect2[11]=1;
				pSelect2[12]=1;
			}
			else if(puntosXSelect2[1]>=puntoX2[9]-5&&puntosXSelect2[1]<=puntoX2[9]+5&&puntosYSelect2[1]>=puntoY2[9]-5&&puntosYSelect2[1]<=puntoY2[9]+5){
				val2 = val2;
			}
			else{
				val2++;
			}	
		}


		else{
			val2++;	
		}
		puntosXSelect2.splice(0, 1);
		puntosYSelect2.splice(0, 1);
		
	}
	for(var k=0; k<pSelect2.length; k++){
		totalPSelect2 = totalPSelect2+pSelect2[k];
	}

	for(var j=0; j<selectCorrect2.length; j++){
		totalSelect2 =  totalSelect2+ selectCorrect2[j];
	}

	if(val2==0 && totalPSelect2==14 && totalSelect2==6){
		validar = 1;
	}

	else{
		validar = 0;
	}
	console.log(val2 + " - " + totalPSelect2 + " - " +totalSelect2);
	return validar;
}

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage2.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage2.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx2.beginPath();
		mouseDown2 = true;
	}, false);

	stage2.addEventListener("mouseup", function(eve){
		mouseDown2 = true;
	}, false);


	stage2.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick2){
			x22 = axi.x;
			y22 = axi.y;
			console.log(x22+ " - "+ y22);
			for(var i=0; i<puntoY2.length; i++){
				if(x22>=puntoX2[i]-5&&x22<=puntoX2[i]+5&&y22>=puntoY2[i]-5&&y22<=puntoY2[i]+5){
					if(i==0){
						selectCorrect2[0]=1;
					}
					else if(i==2){
						selectCorrect2[1]=1;
					}
					else if(i==3){
						selectCorrect2[2]=1;
					}
					else if(i==5){
						selectCorrect2[3]=1;
					}
					else if(i==7){
						selectCorrect2[4]=1;
					}
					else if(i==8){
						selectCorrect2[5]=1;
					}
					ctx2.fillStyle = "red";
					ctx2.arc(x22,y22,1,0,2*Math.PI, false);
					ctx2.fill();
					ctx2.closePath();
					ctx2.lineTo(x12, y12);
					ctx2.lineTo(x22, y22);
					ctx2.strokeStyle = "red";
					ctx2.lineWidth = 2;
					ctx2.stroke();
					puntosXSelect2.push(x22);
					puntosYSelect2.push(y22);
					puntosXSelect2First.push(x22);
					puntosYSelect2First.push(y22);
					mouseClick2 =true;
					x12 = axi.x;
					y12 = axi.y;
				}
			}
			console.log(mouseDown2);
		}
		else{
			x12 = axi.x;
			y12 = axi.y;
			console.log(x12+ " - "+ y12);
			for(var i=0; i<puntoY2.length; i++){
				if(x12>=puntoX2[i]-5&&x12<=puntoX2[i]+5&&y12>=puntoY2[i]-5&&y12<=puntoY2[i]+5){
					if(i==0){
						selectCorrect2[0]=1;
					}
					else if(i==2){
						selectCorrect2[1]=1;
					}
					else if(i==3){
						selectCorrect2[2]=1;
					}
					else if(i==5){
						selectCorrect2[3]=1;
					}
					else if(i==7){
						selectCorrect2[4]=1;
					}
					else if(i==8){
						selectCorrect2[5]=1;
					}
					mouseClick2 =true;
					var punto = [axi.x, axi.y];
					puntosSelec2.push(punto);
					ctx2.fillStyle = "red";
					ctx2.arc(x12,y12,2,0,2*Math.PI, false);
					ctx2.fill();
					ctx2.closePath();
					puntosXSelect2.push(x12);
					puntosYSelect2.push(y12);
					puntosXSelect2First.push(x12);
					puntosYSelect2First.push(y12);
				}
			}
			console.log(mouseDown2);
		}
		if(puntosXSelect2.length>0){
			document.getElementById("fc2").checked = true;
		}
		else{
			document.getElementById("fc2").checked = false;
		}
	}, false);


$('#limpiarF2').on('click', function(){
	mouseClick2=false;
	val2=0;
	puntosXSelect2.splice(0, puntosXSelect2.length);
	puntosYSelect2.splice(0, puntosYSelect2.length);
	puntosXSelect2First.splice(0, puntosXSelect2First.length);
	puntosYSelect2First.splice(0, puntosYSelect2First.length);
	selectCorrect22 =  [0,0,0,0,0,0];
	totalSelect2 = 0;
	pSelect2 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect2 = 0;
	if(puntosXSelect2.length>0){
		document.getElementById("fc2").checked = true;
	}
	else{
		document.getElementById("fc2").checked = false;
	}
});

$('#ultimoF2').on('click', function(){
	var fin = puntosXSelect2First.length-1;
	for(var i2=0; i2<puntosXSelect2.length; i2++){
		if(puntosXSelect2[fin]>=puntoX2[i2]-5&&puntosXSelect2[fin]<=puntoX2[i2]+5&&puntosYSelect2[fin]>=puntoY2[i2]-5&&puntosYSelect2[fin]<=puntoY2[i2]+5){
			if(i2==0){
				selectCorrect2[0]=0;
			}
			else if(i2==2){
				selectCorrect2[1]=0;
			}
			else if(i2==3){
				selectCorrect2[2]=0;
			}
			else if(i2==5){
				selectCorrect2[3]=0;
			}
			else if(i2==7){
				selectCorrect2[4]=0;
			}
			else if(i2==8){
				selectCorrect2[5]=0;
			}
		}
	}
	puntosXSelect2.pop();
	puntosYSelect2.pop();

	puntosXSelect2First.pop();
	puntosYSelect2First.pop();
	if (puntosXSelect2.length==1) {
		puntosXSelect2.pop();
		puntosYSelect2.pop();

		puntosXSelect2First.pop();
		puntosYSelect2First.pop();
	}
	for(var i=0; i<puntosXSelect2First.length-1; i++){
		ctx2.beginPath();
		ctx2.fillStyle = "red";
		ctx2.arc(puntosXSelect2[i], puntosYSelect2[i],1,0,2*Math.PI, false);
		ctx2.fill();
		ctx2.lineTo(puntosXSelect2[i], puntosYSelect2[i]);
		ctx2.lineTo(puntosXSelect2[i+1], puntosYSelect2[i+1]);
		ctx2.strokeStyle = "red";
		ctx2.lineWidth = 2;
		ctx2.fillStyle = "red";
		ctx2.arc(puntosXSelect2[i+1], puntosYSelect2[i+1],1,0,2*Math.PI, false);
		ctx2.fill();
		ctx2.closePath();
		ctx2.stroke();
	}	
	x12 = puntosXSelect2First[puntosXSelect2First.length-1];
	y12 = puntosYSelect2First[puntosYSelect2First.length-1];
	console.log(puntosXSelect2First + " - " +puntosYSelect2First);
	if(puntosXSelect2.length>0){
		document.getElementById("fc2").checked = true;
	}
	else{
		document.getElementById("fc2").checked = false;
	}
});

});
