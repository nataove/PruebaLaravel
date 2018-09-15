var puntosSelec = new Array();

var puntosXSelect = new Array();
var puntosYSelect = new Array();

var puntosXSelectFirst = new Array();
var puntosYSelectFirst = new Array();

var selectCorrect = [0,0,0,0,0,0,0,0];
var totalSelect = 0;

var puntoX = [13,117,117,77,76,53,53,12,53,75,54,77];
var puntoY = [75,75,95,95,156,156,96,96,13,13,74,74];

var stage = document.getElementById('canvas1');
stage.width = 130;
stage.height = 160;
var ctx = stage.getContext("2d");

var x1 =0;
var x2 =0;
var y1 =0;
var y2 =0;
var val=0;

var pSelect = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect = 0;

var mouseDown = false;
var mouseClick = false;

function validarF1(){
	var validar =0;
	val=0;
	for(var i=0; i<puntosXSelectFirst.length-1; i++){
		if(puntosXSelect[0]>=puntoX[0]-5&&puntosXSelect[0]<=puntoX[0]+5&&puntosYSelect[0]>=puntoY[0]-5&&puntosYSelect[0]<=puntoY[0]+5){
			if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
				pSelect[0] =1;
				pSelect[1] =1;
				pSelect[2] =1;
				pSelect[3] =1;
				pSelect[4] =1;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;			
				pSelect[12] =1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;		
				pSelect[0] =1;
				pSelect[1] =1;
				pSelect[2] =1;
				pSelect[3] =1;
				pSelect[4] =1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;			
				pSelect[0] =1;
				pSelect[1] =1;
				pSelect[2] =1;
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[1]-5&&puntosXSelect[0]<=puntoX[1]+5&&puntosYSelect[0]>=puntoY[1]-5&&puntosYSelect[0]<=puntoY[1]+5){
			if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;		
				pSelect[6] =1;
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
				pSelect[0] =1;
				pSelect[1] =1;
				pSelect[2] =1;
				pSelect[3] =1;
				pSelect[4] =1;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;			
				pSelect[3] =1;
				pSelect[4] =1;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[11]-5&&puntosXSelect[0]<=puntoX[11]+5&&puntosYSelect[0]>=puntoY[11]-5&&puntosYSelect[0]<=puntoY[11]+5){
			if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;		
				pSelect[3] =1;
				pSelect[4] =1;	
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;			
					pSelect[0] =1;
					pSelect[1] =1;
					pSelect[2] =1;
					pSelect[3] =1;
					pSelect[4] =1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[10]-5&&puntosXSelect[0]<=puntoX[10]+5&&puntosYSelect[0]>=puntoY[10]-5&&puntosYSelect[0]<=puntoY[10]+5){
			if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[3] =1;
				pSelect[4] =1;			
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;			
				pSelect[0] =1;
				pSelect[1] =1;
				pSelect[2] =1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;			
				pSelect[3] =1;
				pSelect[4] =1;
				pSelect[5] =1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[2]-5&&puntosXSelect[0]<=puntoX[2]+5&&puntosYSelect[0]>=puntoY[2]-5&&puntosYSelect[0]<=puntoY[2]+5){
			if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;		
				pSelect[7] =1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;		
				pSelect[6] =1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[3]-5&&puntosXSelect[0]<=puntoX[3]+5&&puntosYSelect[0]>=puntoY[3]-5&&puntosYSelect[0]<=puntoY[3]+5){
			if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;		
				pSelect[7] =1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;		
				pSelect[8] =1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[4]-5&&puntosXSelect[0]<=puntoX[4]+5&&puntosYSelect[0]>=puntoY[4]-5&&puntosYSelect[0]<=puntoY[4]+5){
			if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;		
				pSelect[8] =1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;		
				pSelect[9] =1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[5]-5&&puntosXSelect[0]<=puntoX[5]+5&&puntosYSelect[0]>=puntoY[5]-5&&puntosYSelect[0]<=puntoY[5]+5){
			if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				pSelect[10] =1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;		
				pSelect[9] =1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[6]-5&&puntosXSelect[0]<=puntoX[6]+5&&puntosYSelect[0]>=puntoY[6]-5&&puntosYSelect[0]<=puntoY[6]+5){
			if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;		
				pSelect[11] =1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;		
				pSelect[10] =1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
			}
			else{
				val++;
			}	
		}

		else if(puntosXSelect[0]>=puntoX[7]-5&&puntosXSelect[0]<=puntoX[7]+5&&puntosYSelect[0]>=puntoY[7]-5&&puntosYSelect[0]<=puntoY[7]+5){
			if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
				pSelect[12] =1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;		
				pSelect[11] =1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else{
			val++;
		}
		puntosXSelect.splice(0, 1);
		puntosYSelect.splice(0, 1);

	}

	for(var k=0; k<pSelect.length; k++){
		totalPSelect = totalPSelect+pSelect[k];
}
		for(var j=0; j<selectCorrect.length; j++){
		totalSelect =  totalSelect+ selectCorrect[j];
	}

	if(val==0 && totalPSelect==13 && totalSelect==8){
		validar = 1;
	}

	else{
		validar = 0;
	}
	console.log(val + " - " + totalPSelect + " - " +totalSelect);
	return validar;
};

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx.beginPath();
		mouseDown = true;
	}, false);

	stage.addEventListener("mouseup", function(eve){
		mouseDown = true;
	}, false);


	stage.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		if(mouseClick){
			x2 = axi.x;
			y2 = axi.y;
			console.log(x2 + ' - ' + y2)
			for(var i=0; i<puntoY.length; i++){
				if(x2>=puntoX[i]-5&&x2<=puntoX[i]+5&&y2>=puntoY[i]-5&&y2<=puntoY[i]+5){
					if(i==0){
						selectCorrect[0]=1;
					}
					else if(i==1){
						selectCorrect[1]=1;
					}
					else if(i==2){
						selectCorrect[2]=1;
					}
					else if(i==3){
						selectCorrect[3]=1;
					}
					else if(i==4){
						selectCorrect[4]=1;
					}
					else if(i==5){
						selectCorrect[5]=1;
					}
					else if(i==6){
						selectCorrect[6]=1;
					}
					else if(i==7){
						selectCorrect[7]=1;
					}
					ctx.fillStyle = "red";
					ctx.arc(x2,y2,1,0,2*Math.PI, false);
					ctx.fill();
					ctx.closePath();
					ctx.lineTo(x1, y1);
					ctx.lineTo(x2, y2);
					ctx.strokeStyle = "red";
					ctx.lineWidth = 2;
					ctx.stroke();
					puntosXSelect.push(x2);
					puntosYSelect.push(y2);
					puntosXSelectFirst.push(x2);
					puntosYSelectFirst.push(y2);
					mouseClick =true;
					x1 = axi.x;
					y1 = axi.y;
				}
			}
		}
		else{
			x1 = axi.x;
			y1 = axi.y;
			console.log(x1 + ' - ' + y1)
			for(var i=0; i<puntoY.length; i++){
				if(x1>=puntoX[i]-5&&x1<=puntoX[i]+5&&y1>=puntoY[i]-5&&y1<=puntoY[i]+5){
					if(i==0){
						selectCorrect[0]=1;
					}
					else if(i==1){
						selectCorrect[1]=1;
					}
					else if(i==2){
						selectCorrect[2]=1;
					}
					else if(i==3){
						selectCorrect[3]=1;
					}
					else if(i==4){
						selectCorrect[4]=1;
					}
					else if(i==5){
						selectCorrect[5]=1;
					}
					else if(i==6){
						selectCorrect[6]=1;
					}
					else if(i==7){
						selectCorrect[7]=1;
					}

					mouseClick =true;
					var punto = [axi.x, axi.y];
					puntosSelec.push(punto);
					ctx.fillStyle = "red";
					ctx.arc(x1,y1,2,0,2*Math.PI, false);
					ctx.fill();
					ctx.closePath();
					puntosXSelect.push(x1);
					puntosYSelect.push(y1);
					puntosXSelectFirst.push(x1);
					puntosYSelectFirst.push(y1);
				}
			}
		}
		if(puntosXSelect.length>0){
			document.getElementById("fc1").checked = true;
		}
		else{
			document.getElementById("fc1").checked = false;
		}
	}, false);


$('#limpiarF1').on('click', function(){
	mouseClick=false;
	val=0;
	puntosXSelect.splice(0, puntosXSelect.length);
	puntosYSelect.splice(0, puntosYSelect.length);
	puntosXSelectFirst.splice(0, puntosXSelectFirst.length);
	puntosYSelectFirst.splice(0, puntosYSelectFirst.length);
	totalSelect = 0;
	selectCorrect = [0,0,0,0,0,0,0,0];
	pSelect = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var totalPSelect = 0;
	if(puntosXSelect.length>0){
		document.getElementById("fc1").checked = true;
	}
	else{
		document.getElementById("fc1").checked = false;
	}
});

$('#ultimoF1').on('click', function(){
	pSelect = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var fin = puntosXSelect.length-1;
	for(var i2=0; i2<puntosXSelect.length; i2++){
		if(puntosXSelect[fin]>=puntoX[i2]-5&&puntosXSelect[fin]<=puntoX[i2]+5&&puntosYSelect[fin]>=puntoY[i2]-5&&puntosYSelect[fin]<=puntoY[i2]+5){
			if(i2==0){
				selectCorrect[0]=0;
			}
			else if(i2==1){
				selectCorrect[1]=0;
			}
			else if(i2==2){
				selectCorrect[2]=0;
			}
			else if(i2==3){
				selectCorrect[3]=0;
			}
			else if(i2==4){
				selectCorrect[4]=0;
			}
			else if(i2==5){
				selectCorrect[5]=0;
			}
			else if(i2==6){
				selectCorrect[6]=0;
			}
			else if(i2==7){
				selectCorrect[7]=0;
			}
		}
	}
	puntosXSelect.pop();
	puntosYSelect.pop();

	puntosXSelectFirst.pop();
	puntosYSelectFirst.pop();
	if (puntosXSelect.length==1) {
		puntosXSelect.pop();
		puntosYSelect.pop();

		puntosXSelectFirst.pop();
		puntosYSelectFirst.pop();
	}
	for(var i=0; i<puntosXSelectFirst.length-1; i++){
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(puntosXSelect[i], puntosYSelect[i],1,0,2*Math.PI, false);
		ctx.fill();
		ctx.lineTo(puntosXSelect[i], puntosYSelect[i]);
		ctx.lineTo(puntosXSelect[i+1], puntosYSelect[i+1]);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 2;
		ctx.fillStyle = "red";
		ctx.arc(puntosXSelect[i+1], puntosYSelect[i+1],1,0,2*Math.PI, false);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
	}	
	x1 = puntosXSelectFirst[puntosXSelectFirst.length-1];
	y1 = puntosYSelectFirst[puntosYSelectFirst.length-1];
	if(puntosXSelect.length>0){
		document.getElementById("fc1").checked = true;
	}
	else{
		document.getElementById("fc1").checked = false;
	}
});
});


