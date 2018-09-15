$(document).ready(function(){
	var puntosSelec = new Array();

	var puntosXSelect = new Array();
	var puntosYSelect = new Array();

	var puntosXSelectFirst = new Array();
	var puntosYSelectFirst = new Array();

	var puntoX = [23,40,57,57,57,73,73,73,73,73,11];
	var puntoY = [179,179,178,162,145,130,145,164,177,192,192];

	var stageColor = "rgba(255,255,255,1)"

	var stage = document.getElementById('canvas6');
	stage.width = 250;
	stage.height = 200;

	var x1 =0;
	var x2 =0;
	var y1 =0;
	var y2 =0;
	var val=0;



var mouseDown = false;
var mouseClick = false;
var ctx = stage.getContext("2d");

	var color1 = "red";

	function getMousePosition(eve){
		var stgData = stage.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	function draw(x, y){
		ctx.lineTo(x, y);
		ctx.strokeStyle = color1;
		ctx.lineWidth = 2;
		ctx.stroke();

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
			console.log(x1+ " - "+ y1);
			for(var i=0; i<puntoY.length; i++){
				if(x2>=puntoX[i]-5&&x2<=puntoX[i]+5&&y2>=puntoY[i]-5&&y2<=puntoY[i]+5){
					ctx.fillStyle = "red";
					ctx.arc(x2,y2,1,0,2*Math.PI, false);
					ctx.fill();
					ctx.closePath();
					ctx.lineTo(x1, y1);
					ctx.lineTo(x2, y2);
					ctx.strokeStyle = "red";
					ctx.lineWidth = 2;
					ctx.stroke();
					console.log(x2 + ' - ' + y2)
					puntosXSelect.push(x2);
					puntosYSelect.push(y2);
					puntosXSelectFirst.push(x2);
					puntosYSelectFirst.push(y2);
					mouseClick =true;
					x1 = axi.x;
					y1 = axi.y;
				}
			}
			console.log(mouseDown);
		}
		else{
			x1 = axi.x;
			y1 = axi.y;
			console.log(x1+ " - "+ y1);
			for(var i=0; i<puntoY.length; i++){
				if(x1>=puntoX[i]-5&&x1<=puntoX[i]+5&&y1>=puntoY[i]-5&&y1<=puntoY[i]+5){
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
					console.log(x1 + ' - ' + y1)
				}
			}
			

			console.log(mouseDown);
		}
	}, false);


$('#limpiarF6').on('click', function(){
	mouseClick=false;
	val=0;
	puntosXSelect.splice(0, puntosXSelect.length);
	puntosYSelect.splice(0, puntosYSelect.length);
	puntosXSelectFirst.splice(0, puntosXSelectFirst.length);
	puntosYSelectFirst.splice(0, puntosYSelectFirst.length);
});

$('#ultimoF6').on('click', function(){
	puntosXSelect.pop();
	puntosYSelect.pop();

	puntosXSelectFirst.pop();
	puntosYSelectFirst.pop();
	for(var i=0; i<puntosXSelectFirst.length-1; i++){
			ctx.beginPath();
			ctx.fillStyle = "red";
			ctx.arc(puntosXSelect[i], puntosYSelect[i],1,0,2*Math.PI, false);
			ctx.fill();
			ctx.closePath();

			ctx.beginPath();
			ctx.lineTo(puntosXSelect[i], puntosYSelect[i]);
			ctx.lineTo(puntosXSelect[i+1], puntosYSelect[i+1]);
			ctx.strokeStyle = "red";
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.fillStyle = "red";
			ctx.arc(puntosXSelect[i+1], puntosYSelect[i+1],1,0,2*Math.PI, false);
			ctx.fill();
			ctx.closePath();
	}	
	x1 = puntosXSelectFirst[puntosXSelectFirst.length-1];
	y1 = puntosYSelectFirst[puntosYSelectFirst.length-1];
	console.log(puntosXSelectFirst + " - " +puntosYSelectFirst);
});

$('#validarF6').on('click', function(){


	for(var i=0; i<puntosXSelectFirst.length-1; i++){
		if(puntosXSelect[0]>=puntoX[0]-5&&puntosXSelect[0]<=puntoX[0]+5&&puntosYSelect[0]>=puntoY[0]-5&&puntosYSelect[0]<=puntoY[0]+5){
			if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
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
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[2]-5&&puntosXSelect[0]<=puntoX[2]+5&&puntosYSelect[0]>=puntoY[2]-5&&puntosYSelect[0]<=puntoY[2]+5){
			if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
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
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
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
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
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
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
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
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		
		else if(puntosXSelect[0]>=puntoX[7]-5&&puntosXSelect[0]<=puntoX[7]+5&&puntosYSelect[0]>=puntoY[7]-5&&puntosYSelect[0]<=puntoY[7]+5){
			if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
			}
			else{
				val++;
			}	
		}

		else if(puntosXSelect[0]>=puntoX[8]-5&&puntosXSelect[0]<=puntoX[8]+5&&puntosYSelect[0]>=puntoY[8]-5&&puntosYSelect[0]<=puntoY[8]+5){
			if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[9]-5&&puntosXSelect[0]<=puntoX[9]+5&&puntosYSelect[0]>=puntoY[9]-5&&puntosYSelect[0]<=puntoY[9]+5){
			if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
			}
			else{
				val++;
			}	
		}


		else if(puntosXSelect[0]>=puntoX[10]-5&&puntosXSelect[0]<=puntoX[10]+5&&puntosYSelect[0]>=puntoY[10]-5&&puntosYSelect[0]<=puntoY[10]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[11]-5&&puntosXSelect[0]<=puntoX[11]+5&&puntosYSelect[0]>=puntoY[11]-5&&puntosYSelect[0]<=puntoY[11]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[12]-5&&puntosXSelect[0]<=puntoX[12]+5&&puntosYSelect[0]>=puntoY[12]-5&&puntosYSelect[0]<=puntoY[12]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[13]-5&&puntosXSelect[0]<=puntoX[13]+5&&puntosYSelect[0]>=puntoY[13]-5&&puntosYSelect[0]<=puntoY[13]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[14]-5&&puntosXSelect[0]<=puntoX[14]+5&&puntosYSelect[0]>=puntoY[14]-5&&puntosYSelect[0]<=puntoY[14]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[15]-5&&puntosXSelect[0]<=puntoX[15]+5&&puntosYSelect[0]>=puntoY[15]-5&&puntosYSelect[0]<=puntoY[15]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[16]-5&&puntosXSelect[0]<=puntoX[16]+5&&puntosYSelect[0]>=puntoY[16]-5&&puntosYSelect[0]<=puntoY[16]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[17]-5&&puntosXSelect[0]<=puntoX[17]+5&&puntosYSelect[0]>=puntoY[17]-5&&puntosYSelect[0]<=puntoY[17]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[18]-5&&puntosXSelect[0]<=puntoX[18]+5&&puntosYSelect[0]>=puntoY[18]-5&&puntosYSelect[0]<=puntoY[18]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[19]-5&&puntosXSelect[0]<=puntoX[19]+5&&puntosYSelect[0]>=puntoY[19]-5&&puntosYSelect[0]<=puntoY[19]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[20]-5&&puntosXSelect[0]<=puntoX[20]+5&&puntosYSelect[0]>=puntoY[20]-5&&puntosYSelect[0]<=puntoY[20]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[21]-5&&puntosXSelect[0]<=puntoX[21]+5&&puntosYSelect[0]>=puntoY[21]-5&&puntosYSelect[0]<=puntoY[21]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[22]-5&&puntosXSelect[0]<=puntoX[22]+5&&puntosYSelect[0]>=puntoY[22]-5&&puntosYSelect[0]<=puntoY[22]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[23]-5&&puntosXSelect[0]<=puntoX[23]+5&&puntosYSelect[0]>=puntoY[23]-5&&puntosYSelect[0]<=puntoY[23]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[24]-5&&puntosXSelect[0]<=puntoX[24]+5&&puntosYSelect[0]>=puntoY[24]-5&&puntosYSelect[0]<=puntoY[24]+5){
				val++;	
		}
		else if(puntosXSelect[0]>=puntoX[25]-5&&puntosXSelect[0]<=puntoX[25]+5&&puntosYSelect[0]>=puntoY[25]-5&&puntosYSelect[0]<=puntoY[25]+5){
				val++;	
		}
		puntosXSelect.splice(0, 1);
		puntosYSelect.splice(0, 1);
		
	}
	if(val==0 && puntosXSelectFirst.length>=7){
		alert("Correcto");
	}
	else{
		alert("Incorrecto");
	}
	console.log(val);
});





});
