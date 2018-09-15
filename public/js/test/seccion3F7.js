var puntosSelec7 = new Array();

var puntosXSelect7T = new Array();
var puntosYSelect7T = new Array();
var puntosXSelect7TFirst = [];
var puntosYSelect7TFirst = [];
var cantSelect7 = 0;

var puntosXSelect7 = new Array();
var puntosYSelect7 = new Array();

var puntosXSelect7First = new Array();
var puntosYSelect7First = new Array();

var puntoX71 = [58,  82, 126, 161, 185, 162, 128, 83,  71,  36,12,84,208,231,133];
var puntoY71 = [137, 97, 97,  97,  135, 173, 174, 174, 154, 175,134,14,12,56,116];

var selectCorrect71 = [0,0,0,0,0,0];
var totalSelect71 = 0;
var pSelect71 = [0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect71 = 0;

var puntosX2Select7 = new Array();
var puntosY2Select7 = new Array();

var puntosX2Select7First = new Array();
var puntosY2Select7First = new Array();

var puntoX72 = [210, 185, 144, 103, 82, 105, 141, 187, 98];
var puntoY72 = [94,  135, 136, 134, 97, 56,  56,  56,  76];

var selectCorrect72 = [0,0,0,0,0,0];
var totalSelect72 = 0;
var pSelect72 = [0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect72 = 0;

var stage7 = document.getElementById('canvas7');
stage7.width = 250;
stage7.height = 180;

var x17 =0;
var x27 =0;
var y17 =0;
var y27 =0;
var val7=0;
var val72=0;

var mouseDown7 = false;
var mouseClick7 = false;
var ctx7 = stage7.getContext("2d");

function validarF7(){
	var validar = 0;
	for(var i=0; i<puntosXSelect7First.length-1; i++){
		if(puntosXSelect7[0]>=puntoX71[0]-5&&puntosXSelect7[0]<=puntoX71[0]+5&&puntosYSelect7[0]>=puntoY71[0]-5&&puntosYSelect7[0]<=puntoY71[0]+5){
			if(puntosXSelect7[1]>=puntoX71[1]-5&&puntosXSelect7[1]<=puntoX71[1]+5&&puntosYSelect7[1]>=puntoY71[1]-5&&puntosYSelect7[1]<=puntoY71[1]+5){
				val7 = val7;
				pSelect71[0]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[8]-5&&puntosXSelect7[1]<=puntoX71[8]+5&&puntosYSelect7[1]>=puntoY71[8]-5&&puntosYSelect7[1]<=puntoY71[8]+5){
				val7 = val7;
				pSelect71[11]=1;
				pSelect71[10]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[7]-5&&puntosXSelect7[1]<=puntoX71[7]+5&&puntosYSelect7[1]>=puntoY71[7]-5&&puntosYSelect7[1]<=puntoY71[7]+5){
				val7 = val7;
				pSelect71[11]=1;
				pSelect71[10]=1;
				pSelect71[9]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[0]-5&&puntosXSelect7[1]<=puntoX71[0]+5&&puntosYSelect7[1]>=puntoY71[0]-5&&puntosYSelect7[1]<=puntoY71[0]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[1]-5&&puntosXSelect7[0]<=puntoX71[1]+5&&puntosYSelect7[0]>=puntoY71[1]-5&&puntosYSelect7[0]<=puntoY71[1]+5){
			if(puntosXSelect7[1]>=puntoX71[2]-5&&puntosXSelect7[1]<=puntoX71[2]+5&&puntosYSelect7[1]>=puntoY71[2]-5&&puntosYSelect7[1]<=puntoY71[2]+5){
				val7 = val7;
				pSelect71[1]=1;
				pSelect71[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[3]-5&&puntosXSelect7[1]<=puntoX71[3]+5&&puntosYSelect7[1]>=puntoY71[3]-5&&puntosYSelect7[1]<=puntoY71[3]+5){
				val7 = val7;
				pSelect71[1]=1;
				pSelect71[2]=1;
				pSelect71[3]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[0]-5&&puntosXSelect7[1]<=puntoX71[0]+5&&puntosYSelect7[1]>=puntoY71[0]-5&&puntosYSelect7[1]<=puntoY71[0]+5){
				val7 = val7;
				pSelect71[0]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[1]-5&&puntosXSelect7[1]<=puntoX71[1]+5&&puntosYSelect7[1]>=puntoY71[1]-5&&puntosYSelect7[1]<=puntoY71[1]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[2]-5&&puntosXSelect7[0]<=puntoX71[2]+5&&puntosYSelect7[0]>=puntoY71[2]-5&&puntosYSelect7[0]<=puntoY71[2]+5){
			if(puntosXSelect7[1]>=puntoX71[3]-5&&puntosXSelect7[1]<=puntoX71[3]+5&&puntosYSelect7[1]>=puntoY71[3]-5&&puntosYSelect7[1]<=puntoY71[3]+5){
				val7 = val7;
				pSelect71[3]=1;
				pSelect71[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[1]-5&&puntosXSelect7[1]<=puntoX71[1]+5&&puntosYSelect7[1]>=puntoY71[1]-5&&puntosYSelect7[1]<=puntoY71[1]+5){
				val7 = val7;
				pSelect71[1]=1;
				pSelect71[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[2]-5&&puntosXSelect7[1]<=puntoX71[2]+5&&puntosYSelect7[1]>=puntoY71[2]-5&&puntosYSelect7[1]<=puntoY71[2]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[3]-5&&puntosXSelect7[0]<=puntoX71[3]+5&&puntosYSelect7[0]>=puntoY71[3]-5&&puntosYSelect7[0]<=puntoY71[3]+5){
			if(puntosXSelect7[1]>=puntoX71[2]-5&&puntosXSelect7[1]<=puntoX71[2]+5&&puntosYSelect7[1]>=puntoY71[2]-5&&puntosYSelect7[1]<=puntoY71[2]+5){
				val7 = val7;
				pSelect71[3]=1;
				pSelect71[2]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[4]-5&&puntosXSelect7[1]<=puntoX71[4]+5&&puntosYSelect7[1]>=puntoY71[4]-5&&puntosYSelect7[1]<=puntoY71[4]+5){
				val7 = val7;
				pSelect71[4]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[1]-5&&puntosXSelect7[1]<=puntoX71[1]+5&&puntosYSelect7[1]>=puntoY71[1]-5&&puntosYSelect7[1]<=puntoY71[1]+5){
				val7 = val7;
				pSelect71[1]=1;
				pSelect71[2]=1;
				pSelect71[3]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[3]-5&&puntosXSelect7[1]<=puntoX71[3]+5&&puntosYSelect7[1]>=puntoY71[3]-5&&puntosYSelect7[1]<=puntoY71[3]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[4]-5&&puntosXSelect7[0]<=puntoX71[4]+5&&puntosYSelect7[0]>=puntoY71[4]-5&&puntosYSelect7[0]<=puntoY71[4]+5){
			if(puntosXSelect7[1]>=puntoX71[3]-5&&puntosXSelect7[1]<=puntoX71[3]+5&&puntosYSelect7[1]>=puntoY71[3]-5&&puntosYSelect7[1]<=puntoY71[3]+5){
				val7 = val7;
				pSelect71[4]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[5]-5&&puntosXSelect7[1]<=puntoX71[5]+5&&puntosYSelect7[1]>=puntoY71[5]-5&&puntosYSelect7[1]<=puntoY71[5]+5){
				val7 = val7;
				pSelect71[5]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[4]-5&&puntosXSelect7[1]<=puntoX71[4]+5&&puntosYSelect7[1]>=puntoY71[4]-5&&puntosYSelect7[1]<=puntoY71[4]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[5]-5&&puntosXSelect7[0]<=puntoX71[5]+5&&puntosYSelect7[0]>=puntoY71[5]-5&&puntosYSelect7[0]<=puntoY71[5]+5){
			if(puntosXSelect7[1]>=puntoX71[6]-5&&puntosXSelect7[1]<=puntoX71[6]+5&&puntosYSelect7[1]>=puntoY71[6]-5&&puntosYSelect7[1]<=puntoY71[6]+5){
				val7 = val7;
				pSelect71[6]=1;
				pSelect71[7]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[7]-5&&puntosXSelect7[1]<=puntoX71[7]+5&&puntosYSelect7[1]>=puntoY71[7]-5&&puntosYSelect7[1]<=puntoY71[7]+5){
				val7 = val7;
				pSelect71[6]=1;
				pSelect71[7]=1;
				pSelect71[8]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[4]-5&&puntosXSelect7[1]<=puntoX71[4]+5&&puntosYSelect7[1]>=puntoY71[4]-5&&puntosYSelect7[1]<=puntoY71[4]+5){
				val7 = val7;
				pSelect71[5]=1;
			}
			
			else if(puntosXSelect7[1]>=puntoX71[5]-5&&puntosXSelect7[1]<=puntoX71[5]+5&&puntosYSelect7[1]>=puntoY71[5]-5&&puntosYSelect7[1]<=puntoY71[5]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		else if(puntosXSelect7[0]>=puntoX71[6]-5&&puntosXSelect7[0]<=puntoX71[6]+5&&puntosYSelect7[0]>=puntoY71[6]-5&&puntosYSelect7[0]<=puntoY71[6]+5){
			if(puntosXSelect7[1]>=puntoX71[7]-5&&puntosXSelect7[1]<=puntoX71[7]+5&&puntosYSelect7[1]>=puntoY71[7]-5&&puntosYSelect7[1]<=puntoY71[7]+5){
				val7 = val7;
				pSelect71[8]=1;
				pSelect71[7]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[5]-5&&puntosXSelect7[1]<=puntoX71[5]+5&&puntosYSelect7[1]>=puntoY71[5]-5&&puntosYSelect7[1]<=puntoY71[5]+5){
				val7 = val7;
				pSelect71[6]=1;
				pSelect71[7]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[6]-5&&puntosXSelect7[1]<=puntoX71[6]+5&&puntosYSelect7[1]>=puntoY71[6]-5&&puntosYSelect7[1]<=puntoY71[6]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}
		
		else if(puntosXSelect7[0]>=puntoX71[7]-5&&puntosXSelect7[0]<=puntoX71[7]+5&&puntosYSelect7[0]>=puntoY71[7]-5&&puntosYSelect7[0]<=puntoY71[7]+5){
			if(puntosXSelect7[1]>=puntoX71[8]-5&&puntosXSelect7[1]<=puntoX71[8]+5&&puntosYSelect7[1]>=puntoY71[8]-5&&puntosYSelect7[1]<=puntoY71[8]+5){
				val7 = val7;
				pSelect71[9]=1;
				pSelect71[10]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[6]-5&&puntosXSelect7[1]<=puntoX71[6]+5&&puntosYSelect7[1]>=puntoY71[6]-5&&puntosYSelect7[1]<=puntoY71[6]+5){
				val7 = val7;
				pSelect71[8]=1;
				pSelect71[7]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[5]-5&&puntosXSelect7[1]<=puntoX71[5]+5&&puntosYSelect7[1]>=puntoY71[5]-5&&puntosYSelect7[1]<=puntoY71[5]+5){
				val7 = val7;
				pSelect71[6]=1;
				pSelect71[7]=1;
				pSelect71[8]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[0]-5&&puntosXSelect7[1]<=puntoX71[0]+5&&puntosYSelect7[1]>=puntoY71[0]-5&&puntosYSelect7[1]<=puntoY71[0]+5){
				val7 = val7;
				pSelect71[11]=1;
				pSelect71[10]=1;
				pSelect71[9]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[7]-5&&puntosXSelect7[1]<=puntoX71[7]+5&&puntosYSelect7[1]>=puntoY71[7]-5&&puntosYSelect7[1]<=puntoY71[7]+5){
				val7 = val7;
			}
			else{
				val7++;
			}	
		}

		else if(puntosXSelect7[0]>=puntoX71[8]-5&&puntosXSelect7[0]<=puntoX71[8]+5&&puntosYSelect7[0]>=puntoY71[8]-5&&puntosYSelect7[0]<=puntoY71[8]+5){
			if(puntosXSelect7[1]>=puntoX71[0]-5&&puntosXSelect7[1]<=puntoX71[0]+5&&puntosYSelect7[1]>=puntoY71[0]-5&&puntosYSelect7[1]<=puntoY71[0]+5){
				val7 = val7;
				pSelect71[11]=1;
				pSelect71[10]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[7]-5&&puntosXSelect7[1]<=puntoX71[7]+5&&puntosYSelect7[1]>=puntoY71[7]-5&&puntosYSelect7[1]<=puntoY71[7]+5){
				val7 = val7;
				pSelect71[9]=1;
				pSelect71[10]=1;
			}
			else if(puntosXSelect7[1]>=puntoX71[8]-5&&puntosXSelect7[1]<=puntoX71[8]+5&&puntosYSelect7[1]>=puntoY71[8]-5&&puntosYSelect7[1]<=puntoY71[8]+5){
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

	for(var k=0; k<pSelect71.length; k++){
		totalPSelect71 = totalPSelect71+pSelect71[k];
	}

	for(var j=0; j<selectCorrect71.length; j++){
		totalSelect71 =  totalSelect71+ selectCorrect71[j];
	}

	console.log(val7 + " - " + totalPSelect71 + " - " +totalSelect71);

//val
for(var i=0; i<puntosX2Select7First.length-1; i++){
	if(puntosX2Select7[0]>=puntoX72[0]-5&&puntosX2Select7[0]<=puntoX72[0]+5&&puntosY2Select7[0]>=puntoY72[0]-5&&puntosY2Select7[0]<=puntoY72[0]+5){
		if(puntosX2Select7[1]>=puntoX72[1]-5&&puntosX2Select7[1]<=puntoX72[1]+5&&puntosY2Select7[1]>=puntoY72[1]-5&&puntosY2Select7[1]<=puntoY72[1]+5){
			val72 = val72;
			pSelect72[0]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[8]-5&&puntosX2Select7[1]<=puntoX72[8]+5&&puntosY2Select7[1]>=puntoY72[8]-5&&puntosY2Select7[1]<=puntoY72[8]+5){
			val72 = val72;
			pSelect72[11]=1;
			pSelect72[10]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[7]-5&&puntosX2Select7[1]<=puntoX72[7]+5&&puntosY2Select7[1]>=puntoY72[7]-5&&puntosY2Select7[1]<=puntoY72[7]+5){
			val72 = val72;
			pSelect72[11]=1;
			pSelect72[10]=1;
			pSelect72[9]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[0]-5&&puntosX2Select7[1]<=puntoX72[0]+5&&puntosY2Select7[1]>=puntoY72[0]-5&&puntosY2Select7[1]<=puntoY72[0]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[1]-5&&puntosX2Select7[0]<=puntoX72[1]+5&&puntosY2Select7[0]>=puntoY72[1]-5&&puntosY2Select7[0]<=puntoY72[1]+5){
		if(puntosX2Select7[1]>=puntoX72[2]-5&&puntosX2Select7[1]<=puntoX72[2]+5&&puntosY2Select7[1]>=puntoY72[2]-5&&puntosY2Select7[1]<=puntoY72[2]+5){
			val72 = val72;
			pSelect72[1]=1;
			pSelect72[2]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[3]-5&&puntosX2Select7[1]<=puntoX72[3]+5&&puntosY2Select7[1]>=puntoY72[3]-5&&puntosY2Select7[1]<=puntoY72[3]+5){
			val72 = val72;
			pSelect72[1]=1;
			pSelect72[2]=1;
			pSelect72[3]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[0]-5&&puntosX2Select7[1]<=puntoX72[0]+5&&puntosY2Select7[1]>=puntoY72[0]-5&&puntosY2Select7[1]<=puntoY72[0]+5){
			val72 = val72;
			pSelect72[0]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[1]-5&&puntosX2Select7[1]<=puntoX72[1]+5&&puntosY2Select7[1]>=puntoY72[1]-5&&puntosY2Select7[1]<=puntoY72[1]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[2]-5&&puntosX2Select7[0]<=puntoX72[2]+5&&puntosY2Select7[0]>=puntoY72[2]-5&&puntosY2Select7[0]<=puntoY72[2]+5){
		if(puntosX2Select7[1]>=puntoX72[3]-5&&puntosX2Select7[1]<=puntoX72[3]+5&&puntosY2Select7[1]>=puntoY72[3]-5&&puntosY2Select7[1]<=puntoY72[3]+5){
			val72 = val72;
			pSelect72[3]=1;
			pSelect72[2]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[1]-5&&puntosX2Select7[1]<=puntoX72[1]+5&&puntosY2Select7[1]>=puntoY72[1]-5&&puntosY2Select7[1]<=puntoY72[1]+5){
			val72 = val72;
			pSelect72[1]=1;
			pSelect72[2]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[2]-5&&puntosX2Select7[1]<=puntoX72[2]+5&&puntosY2Select7[1]>=puntoY72[2]-5&&puntosY2Select7[1]<=puntoY72[2]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[3]-5&&puntosX2Select7[0]<=puntoX72[3]+5&&puntosY2Select7[0]>=puntoY72[3]-5&&puntosY2Select7[0]<=puntoY72[3]+5){
		if(puntosX2Select7[1]>=puntoX72[2]-5&&puntosX2Select7[1]<=puntoX72[2]+5&&puntosY2Select7[1]>=puntoY72[2]-5&&puntosY2Select7[1]<=puntoY72[2]+5){
			val72 = val72;
			pSelect72[3]=1;
			pSelect72[2]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[4]-5&&puntosX2Select7[1]<=puntoX72[4]+5&&puntosY2Select7[1]>=puntoY72[4]-5&&puntosY2Select7[1]<=puntoY72[4]+5){
			val72 = val72;
			pSelect72[4]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[1]-5&&puntosX2Select7[1]<=puntoX72[1]+5&&puntosY2Select7[1]>=puntoY72[1]-5&&puntosY2Select7[1]<=puntoY72[1]+5){
			val72 = val72;
			pSelect72[1]=1;
			pSelect72[2]=1;
			pSelect72[3]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[3]-5&&puntosX2Select7[1]<=puntoX72[3]+5&&puntosY2Select7[1]>=puntoY72[3]-5&&puntosY2Select7[1]<=puntoY72[3]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[4]-5&&puntosX2Select7[0]<=puntoX72[4]+5&&puntosY2Select7[0]>=puntoY72[4]-5&&puntosY2Select7[0]<=puntoY72[4]+5){
		if(puntosX2Select7[1]>=puntoX72[3]-5&&puntosX2Select7[1]<=puntoX72[3]+5&&puntosY2Select7[1]>=puntoY72[3]-5&&puntosY2Select7[1]<=puntoY72[3]+5){
			val72 = val72;
			pSelect72[4]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[5]-5&&puntosX2Select7[1]<=puntoX72[5]+5&&puntosY2Select7[1]>=puntoY72[5]-5&&puntosY2Select7[1]<=puntoY72[5]+5){
			val72 = val72;
			pSelect72[5]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[4]-5&&puntosX2Select7[1]<=puntoX72[4]+5&&puntosY2Select7[1]>=puntoY72[4]-5&&puntosY2Select7[1]<=puntoY72[4]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[5]-5&&puntosX2Select7[0]<=puntoX72[5]+5&&puntosY2Select7[0]>=puntoY72[5]-5&&puntosY2Select7[0]<=puntoY72[5]+5){
		if(puntosX2Select7[1]>=puntoX72[6]-5&&puntosX2Select7[1]<=puntoX72[6]+5&&puntosY2Select7[1]>=puntoY72[6]-5&&puntosY2Select7[1]<=puntoY72[6]+5){
			val72 = val72;
			pSelect72[6]=1;
			pSelect72[7]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[7]-5&&puntosX2Select7[1]<=puntoX72[7]+5&&puntosY2Select7[1]>=puntoY72[7]-5&&puntosY2Select7[1]<=puntoY72[7]+5){
			val72 = val72;
			pSelect72[6]=1;
			pSelect72[7]=1;
			pSelect72[8]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[4]-5&&puntosX2Select7[1]<=puntoX72[4]+5&&puntosY2Select7[1]>=puntoY72[4]-5&&puntosY2Select7[1]<=puntoY72[4]+5){
			val72 = val72;
			pSelect72[5]=1;
		}
		
		else if(puntosX2Select7[1]>=puntoX72[5]-5&&puntosX2Select7[1]<=puntoX72[5]+5&&puntosY2Select7[1]>=puntoY72[5]-5&&puntosY2Select7[1]<=puntoY72[5]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else if(puntosX2Select7[0]>=puntoX72[6]-5&&puntosX2Select7[0]<=puntoX72[6]+5&&puntosY2Select7[0]>=puntoY72[6]-5&&puntosY2Select7[0]<=puntoY72[6]+5){
		if(puntosX2Select7[1]>=puntoX72[7]-5&&puntosX2Select7[1]<=puntoX72[7]+5&&puntosY2Select7[1]>=puntoY72[7]-5&&puntosY2Select7[1]<=puntoY72[7]+5){
			val72 = val72;
			pSelect72[8]=1;
			pSelect72[7]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[5]-5&&puntosX2Select7[1]<=puntoX72[5]+5&&puntosY2Select7[1]>=puntoY72[5]-5&&puntosY2Select7[1]<=puntoY72[5]+5){
			val72 = val72;
			pSelect72[6]=1;
			pSelect72[7]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[6]-5&&puntosX2Select7[1]<=puntoX72[6]+5&&puntosY2Select7[1]>=puntoY72[6]-5&&puntosY2Select7[1]<=puntoY72[6]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	
	else if(puntosX2Select7[0]>=puntoX72[7]-5&&puntosX2Select7[0]<=puntoX72[7]+5&&puntosY2Select7[0]>=puntoY72[7]-5&&puntosY2Select7[0]<=puntoY72[7]+5){
		if(puntosX2Select7[1]>=puntoX72[8]-5&&puntosX2Select7[1]<=puntoX72[8]+5&&puntosY2Select7[1]>=puntoY72[8]-5&&puntosY2Select7[1]<=puntoY72[8]+5){
			val72 = val72;
			pSelect72[9]=1;
			pSelect72[10]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[6]-5&&puntosX2Select7[1]<=puntoX72[6]+5&&puntosY2Select7[1]>=puntoY72[6]-5&&puntosY2Select7[1]<=puntoY72[6]+5){
			val72 = val72;
			pSelect72[8]=1;
			pSelect72[7]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[5]-5&&puntosX2Select7[1]<=puntoX72[5]+5&&puntosY2Select7[1]>=puntoY72[5]-5&&puntosY2Select7[1]<=puntoY72[5]+5){
			val72 = val72;
			pSelect72[6]=1;
			pSelect72[7]=1;
			pSelect72[8]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[0]-5&&puntosX2Select7[1]<=puntoX72[0]+5&&puntosY2Select7[1]>=puntoY72[0]-5&&puntosY2Select7[1]<=puntoY72[0]+5){
			val72 = val72;
			pSelect72[11]=1;
			pSelect72[10]=1;
			pSelect72[9]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[7]-5&&puntosX2Select7[1]<=puntoX72[7]+5&&puntosY2Select7[1]>=puntoY72[7]-5&&puntosY2Select7[1]<=puntoY72[7]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}

	else if(puntosX2Select7[0]>=puntoX72[8]-5&&puntosX2Select7[0]<=puntoX72[8]+5&&puntosY2Select7[0]>=puntoY72[8]-5&&puntosY2Select7[0]<=puntoY72[8]+5){
		if(puntosX2Select7[1]>=puntoX72[0]-5&&puntosX2Select7[1]<=puntoX72[0]+5&&puntosY2Select7[1]>=puntoY72[0]-5&&puntosY2Select7[1]<=puntoY72[0]+5){
			val72 = val72;
			pSelect72[11]=1;
			pSelect72[10]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[7]-5&&puntosX2Select7[1]<=puntoX72[7]+5&&puntosY2Select7[1]>=puntoY72[7]-5&&puntosY2Select7[1]<=puntoY72[7]+5){
			val72 = val72;
			pSelect72[9]=1;
			pSelect72[10]=1;
		}
		else if(puntosX2Select7[1]>=puntoX72[8]-5&&puntosX2Select7[1]<=puntoX72[8]+5&&puntosY2Select7[1]>=puntoY72[8]-5&&puntosY2Select7[1]<=puntoY72[8]+5){
			val72 = val72;
		}
		else{
			val72++;
		}	
	}
	else{
		val72++;
	}
	puntosX2Select7.splice(0, 1);
	puntosY2Select7.splice(0, 1);
	
}

for(var k=0; k<pSelect72.length; k++){
	totalPSelect72 = totalPSelect72+pSelect72[k];
}

for(var j=0; j<selectCorrect72.length; j++){
	totalSelect72 =  totalSelect72+ selectCorrect72[j];
}

console.log(val72 + " - " + totalPSelect72 + " - " +totalSelect72);

if((val7==0 && totalPSelect71==12 && totalSelect71==6)|| (val72==0&& totalPSelect72==12 && totalSelect72==6)){
	validar = 1;
}
else{
	validar = 0;
}
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
		cantSelect7 = 0;
		if(mouseClick7){
			x27 = axi.x;
			y27 = axi.y;
			console.log(x27+ " - "+ y27);
			for(var i=0; i<puntoY71.length; i++){
				if((x27>=puntoX71[i]-5&&x27<=puntoX71[i]+5&&y27>=puntoY71[i]-5&&y27<=puntoY71[i]+5)){
					if(i==0){
						selectCorrect71[0]=1;
					}
					else if(i==1){
						selectCorrect71[1]=1;
					}
					else if(i==3){
						selectCorrect71[2]=1;
					}
					else if(i==4){
						selectCorrect71[3]=1;
					}
					else if(i==5){
						selectCorrect71[4]=1;
					}
					else if(i==7){
						selectCorrect71[5]=1;
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
					puntosXSelect7.push(x27);
					puntosYSelect7.push(y27);
					puntosXSelect7First.push(x27);
					puntosYSelect7First.push(y27);
					mouseClick7 =true;
					x17 = axi.x;
					y17 = axi.y;
					cantSelect7 = 1;
				}
				if((x27>=puntoX72[i]-5&x27<=puntoX72[i]+5&&y27>=puntoY72[i]-5&&y27<=puntoY72[i]+5)){
					if(i==0){
						selectCorrect72[0]=1;
					}
					else if(i==1){
						selectCorrect72[1]=1;
					}
					else if(i==3){
						selectCorrect72[2]=1;
					}
					else if(i==4){
						selectCorrect72[3]=1;
					}
					else if(i==5){
						selectCorrect72[4]=1;
					}
					else if(i==7){
						selectCorrect72[5]=1;
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
					puntosX2Select7.push(x27);
					puntosY2Select7.push(y27);
					puntosX2Select7First.push(x27);
					puntosY2Select7First.push(y27);
					mouseClick7 =true;
					x17 = axi.x;
					y17 = axi.y;
					cantSelect7 = 1;
				}
			}
			if(cantSelect7 == 1){
				puntosXSelect7T.push(x27);
				puntosYSelect7T.push(y27);
				puntosXSelect7TFirst.push(x27);
				puntosYSelect7TFirst.push(y27);
			}
			console.log(mouseDown7);
		}
		else{
			x17 = axi.x;
			y17 = axi.y;
			console.log(x17+ " - "+ y17);
			for(var i=0; i<puntoY71.length; i++){
				if((x17>=puntoX71[i]-5&&x17<=puntoX71[i]+5&&y17>=puntoY71[i]-5&&y17<=puntoY71[i]+5)){
					if(i==0){
						selectCorrect71[0]=1;
					}
					else if(i==1){
						selectCorrect71[1]=1;
					}
					else if(i==3){
						selectCorrect71[2]=1;
					}
					else if(i==4){
						selectCorrect71[3]=1;
					}
					else if(i==5){
						selectCorrect71[4]=1;
					}
					else if(i==7){
						selectCorrect71[5]=1;
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
					cantSelect7 = 1;
				}
				if((x17>=puntoX72[i]-5&&x17<=puntoX72[i]+5&&y17>=puntoY72[i]-5&&y17<=puntoY72[i]+5)){
					if(i==0){
						selectCorrect72[0]=1;
					}
					else if(i==1){
						selectCorrect72[1]=1;
					}
					else if(i==3){
						selectCorrect72[2]=1;
					}
					else if(i==4){
						selectCorrect72[3]=1;
					}
					else if(i==5){
						selectCorrect72[4]=1;
					}
					else if(i==7){
						selectCorrect72[5]=1;
					}
					mouseClick7=true;
					var punto = [axi.x, axi.y];
					puntosSelec7.push(punto);
					ctx7.fillStyle = "red";
					ctx7.arc(x17,y17,2,0,2*Math.PI, false);
					ctx7.fill();
					ctx7.closePath();
					puntosX2Select7.push(x17);
					puntosY2Select7.push(y17);
					puntosX2Select7First.push(x17);
					puntosY2Select7First.push(y17);
					cantSelect7 = 1;
				}
			}
			if(cantSelect7 == 1){
				puntosXSelect7T.push(x17);
				puntosYSelect7T.push(y17);
				puntosXSelect7TFirst.push(x17);
				puntosYSelect7TFirst.push(y17);
			}			
			console.log(mouseDown7);
		}
		if(puntosXSelect7.length>0 || puntosX2Select7.length>0){
			document.getElementById("fc7").checked = true;
		}
		else{
			document.getElementById("fc7").checked = false;
		}
	}, false);


$('#limpiarF7').on('click', function(){
	mouseClick7=false;
	val7=0;
	val72 = 0;
	puntosXSelect7.splice(0, puntosXSelect7.length);
	puntosYSelect7.splice(0, puntosYSelect7.length);
	puntosXSelect7First.splice(0, puntosXSelect7First.length);
	puntosYSelect7First.splice(0, puntosYSelect7First.length);
	selectCorrect71 = [0,0,0,0,0,0];
	totalSelect71 = 0;
	pSelect71 = [0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect71 = 0;
	puntosX2Select7.splice(0, puntosX2Select7.length);
	puntosY2Select7.splice(0, puntosY2Select7.length);
	puntosX2Select7First.splice(0, puntosX2Select7First.length);
	puntosY2Select7First.splice(0, puntosY2Select7First.length);
	selectCorrect72 = [0,0,0,0,0,0];
	totalSelect72 = 0;
	pSelect72 = [0,0,0,0,0,0,0,0,0,0,0,0];
	puntosXSelect7TFirst = new Array();
	puntosYSelect7TFirst = new Array();
	puntosXSelect7T = new Array();
	puntosYSelect7T = new Array();
	totalPSelect72 = 0;
	if(puntosXSelect7.length>0 || puntosX2Select7.length>0){
		document.getElementById("fc7").checked = true;
	}
	else{
		document.getElementById("fc7").checked = false;
	}
});

$('#ultimoF7').on('click', function(){
	pSelect71 =  [0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect71 = 0;
	pSelect72 =  [0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect72 = 0;
	var finX = puntosXSelect7TFirst[puntosXSelect7TFirst.length-1];
	var finY = puntosYSelect7TFirst[puntosYSelect7TFirst.length-1];
	var f1=false;
	var f2=false;
	for(var i2=0; i2<puntoX71.length; i2++){
		if((finX>=puntoX71[i2]-5&&finX<=puntoX71[i2]+5&&finY>=puntoY71[i2]-5&&finY<=puntoY71[i2]+5)){
			f1=true;
		}
		if(finX>=puntoX72[i2]-5&&finX<=puntoX72[i2]+5&&finY>=puntoY72[i2]-5&&finY<=puntoY72[i2]+5){
			f2=true;
		}
	}

	puntosXSelect7TFirst.pop();
	puntosYSelect7TFirst.pop();
	puntosXSelect7T.pop();
	puntosYSelect7T.pop();
	if (puntosXSelect7T.length==1) {
		puntosXSelect7TFirst.pop();
		puntosYSelect7TFirst.pop();
		puntosXSelect7T.pop();
		puntosYSelect7T.pop();
	}

	console.log(f1+" "+f2);
	if(f1){
		var fin = puntosXSelect7First.length-1;
		for(var i2=0; i2<puntoY71.length; i2++){
			if(puntosXSelect7[fin]>=puntoX71[i2]-5&&puntosXSelect7[fin]<=puntoX71[i2]+5&&puntosYSelect7[fin]>=puntoY71[i2]-5&&puntosYSelect7[fin]<=puntoY71[i2]+5){
				if(i2==0){
					selectCorrect71[0]=0;
				}
				else if(i2==1){
					selectCorrect71[1]=0;
				}
				else if(i2==3){
					selectCorrect71[2]=0;
				}
				else if(i2==4){
					selectCorrect71[3]=0;
				}
				else if(i2==5){
					selectCorrect71[4]=0;
				}
				else if(i2==7){
					selectCorrect71[5]=0;
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
	}


	if(f2){
		var fin2 = puntosX2Select7First.length-1;
		for(var i2=0; i2<puntoY72.length; i2++){
			if(puntosX2Select7[fin2]>=puntoX72[i2]-5&&puntosX2Select7[fin2]<=puntoX72[i2]+5&&puntosY2Select7[fin2]>=puntoY72[i2]-5&&puntosY2Select7[fin2]<=puntoY72[i2]+5){
				if(i2==0){
					selectCorrect72[0]=0;
				}
				else if(i2==1){
					selectCorrect72[1]=0;
				}
				else if(i2==3){
					selectCorrect72[2]=0;
				}
				else if(i2==4){
					selectCorrect72[3]=0;
				}
				else if(i2==5){
					selectCorrect72[4]=0;
				}
				else if(i2==7){
					selectCorrect72[5]=0;
				}
			}
		}
		puntosX2Select7.pop();
		puntosY2Select7.pop();
		puntosX2Select7First.pop();
		puntosY2Select7First.pop();
		if (puntosX2Select7.length==1) {
			puntosX2Select7.pop();
			puntosY2Select7.pop();

			puntosX2Select7First.pop();
			puntosY2Select7First.pop();
		}
	}
	for(var i=0; i<puntosXSelect7TFirst.length-1; i++){
		ctx7.beginPath();
		ctx7.fillStyle = "red";
		ctx7.arc(puntosXSelect7T[i], puntosYSelect7T[i],1,0,2*Math.PI, false);
		ctx7.fill();
		ctx7.lineTo(puntosXSelect7T[i], puntosYSelect7T[i]);
		ctx7.lineTo(puntosXSelect7T[i+1], puntosYSelect7T[i+1]);
		ctx7.strokeStyle = "red";
		ctx7.lineWidth = 2;
		ctx7.fillStyle = "red";
		ctx7.arc(puntosXSelect7T[i+1], puntosYSelect7T[i+1],1,0,2*Math.PI, false);
		ctx7.fill();
		ctx7.closePath();
		ctx7.stroke();
	}
	x17 = puntosXSelect7TFirst[puntosXSelect7TFirst.length-1];
	y17 = puntosYSelect7TFirst[puntosYSelect7TFirst.length-1];

	console.log(puntosXSelect7First + " - " +puntosYSelect7First);
	if(puntosXSelect7T.length>0){
		document.getElementById("fc7").checked = true;
	}
	else{
		document.getElementById("fc7").checked = false;
	}
});

});
