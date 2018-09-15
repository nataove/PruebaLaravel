var puntosSelec9 = new Array();

var puntosXSelect9 = new Array();
var puntosYSelect9 = new Array();

var puntosXSelect9First = new Array();
var puntosYSelect9First = new Array();

var puntoX9 = [12,22,30,39,49,49,49,48,49,61,69,69,72,70,91,103,112,112,112,102,91,82,70,72,72,72,72,52,50,50,49,49,40,29,19,12   ,20,30,41,40,40,31,61,60,60,  20,29,41,41,28,84,91,,104,92,85,83,83,91,103, 68,68,82,82,82,82,84,93,93,93,93,93,97,102,113,114,115,115,113,125,124,124,124,134,133,134,144,145,152,151,147,135,125,116,115,125,134,144,134,125,123];
var puntoY9 = [90,90,89,89,89,81,70,60,54,50,50,60,67,91,91,91,91,99,112,114,114,114,114,124,134,142,152,152,141,132,122,114,114,114,114,114,    80,72,62,68,78,78,80,71,60,  121,133,143,133,120,122,121,121,120,131,124,132,138,104,102, 41,35,21,30,41,49,57,49,39,31,21,11,67,58,10,20,32,40,48,48,42,30,32,34,39,48,41,47,48,72,72,72,72,72,82,82,82,81,88,91,102];

var selectCorrect9 = [0,0,0,0,0,0,0,0,0,0,0,0];
var totalSelect9 = 0;
var pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect9 = 0;

var stage9 = document.getElementById('canvas9');
stage9.width = 170;
stage9.height = 160;

var x19 =0;
var x29 =0;
var y19 =0;
var y29 =0;
var val9=0;

var mouseDown9 = false;
var mouseClick9 = false;
var ctx9 = stage9.getContext("2d");

function validarF9(){
	var validar=0;
	for(var i=0; i<puntosXSelect9First.length-1; i++){
		if(puntosXSelect9[0]>=puntoX9[0]-5&&puntosXSelect9[0]<=puntoX9[0]+5&&puntosYSelect9[0]>=puntoY9[0]-5&&puntosYSelect9[0]<=puntoY9[0]+5){
			if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[3]-5&&puntosXSelect9[1]<=puntoX9[3]+5&&puntosYSelect9[1]>=puntoY9[3]-5&&puntosYSelect9[1]<=puntoY9[3]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
				val9 = val9;
				pSelect9[78]=1;
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
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[3]-5&&puntosXSelect9[1]<=puntoX9[3]+5&&puntosYSelect9[1]>=puntoY9[3]-5&&puntosYSelect9[1]<=puntoY9[3]+5){
				val9 = val9;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
				pSelect9[8]=1;
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
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
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
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[8]=1;
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
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[2]-5&&puntosXSelect9[1]<=puntoX9[2]+5&&puntosYSelect9[1]>=puntoY9[2]-5&&puntosYSelect9[1]<=puntoY9[2]+5){
				val9 = val9;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[1]-5&&puntosXSelect9[1]<=puntoX9[1]+5&&puntosYSelect9[1]>=puntoY9[1]-5&&puntosYSelect9[1]<=puntoY9[1]+5){
				val9 = val9;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[0]=1;
				pSelect9[1]=1;
				pSelect9[2]=1;
				pSelect9[3]=1;
				pSelect9[4]=1;
				pSelect9[5]=1;
				pSelect9[6]=1;
				pSelect9[7]=1;
				pSelect9[8]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
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
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
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
				pSelect9[16]=1;
				pSelect9[17]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
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
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
				pSelect9[16]=1;
				pSelect9[17]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
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
				pSelect9[19]=1;
				pSelect9[20]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
				pSelect9[19]=1;
				pSelect9[20]=1;
				pSelect9[21]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[7]-5&&puntosXSelect9[1]<=puntoX9[7]+5&&puntosYSelect9[1]>=puntoY9[7]-5&&puntosYSelect9[1]<=puntoY9[7]+5){
				val9 = val9;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[6]-5&&puntosXSelect9[1]<=puntoX9[6]+5&&puntosYSelect9[1]>=puntoY9[6]-5&&puntosYSelect9[1]<=puntoY9[6]+5){
				val9 = val9;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[5]-5&&puntosXSelect9[1]<=puntoX9[5]+5&&puntosYSelect9[1]>=puntoY9[5]-5&&puntosYSelect9[1]<=puntoY9[5]+5){
				val9 = val9;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[4]-5&&puntosXSelect9[1]<=puntoX9[4]+5&&puntosYSelect9[1]>=puntoY9[4]-5&&puntosYSelect9[1]<=puntoY9[4]+5){
				val9 = val9;
				pSelect9[9]=1;
				pSelect9[10]=1;
				pSelect9[11]=1;
				pSelect9[12]=1;
				pSelect9[13]=1;
				pSelect9[14]=1;
				pSelect9[15]=1;
				pSelect9[16]=1;
				pSelect9[17]=1;
				pSelect9[18]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[9]-5&&puntosXSelect9[0]<=puntoX9[9]+5&&puntosYSelect9[0]>=puntoY9[9]-5&&puntosYSelect9[0]<=puntoY9[9]+5){
			if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
				pSelect9[21]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[19]=1;
				pSelect9[20]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}

		else if(puntosXSelect9[0]>=puntoX9[10]-5&&puntosXSelect9[0]<=puntoX9[10]+5&&puntosYSelect9[0]>=puntoY9[10]-5&&puntosYSelect9[0]<=puntoY9[10]+5){
			if(puntosXSelect9[1]>=puntoX9[8]-5&&puntosXSelect9[1]<=puntoX9[8]+5&&puntosYSelect9[1]>=puntoY9[8]-5&&puntosYSelect9[1]<=puntoY9[8]+5){
				val9 = val9;
				pSelect9[19]=1;
				pSelect9[20]=1;
				pSelect9[21]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[9]-5&&puntosXSelect9[1]<=puntoX9[9]+5&&puntosYSelect9[1]>=puntoY9[9]-5&&puntosYSelect9[1]<=puntoY9[9]+5){
				val9 = val9;
				pSelect9[21]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[11]-5&&puntosXSelect9[1]<=puntoX9[11]+5&&puntosYSelect9[1]>=puntoY9[11]-5&&puntosYSelect9[1]<=puntoY9[11]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[12]-5&&puntosXSelect9[1]<=puntoX9[12]+5&&puntosYSelect9[1]>=puntoY9[12]-5&&puntosYSelect9[1]<=puntoY9[12]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
				pSelect9[25]=1;
				pSelect9[26]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
				pSelect9[25]=1;
				pSelect9[26]=1;
				pSelect9[27]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}

		else if(puntosXSelect9[0]>=puntoX9[11]-5&&puntosXSelect9[0]<=puntoX9[11]+5&&puntosYSelect9[0]>=puntoY9[11]-5&&puntosYSelect9[0]<=puntoY9[11]+5){
			if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[12]-5&&puntosXSelect9[1]<=puntoX9[12]+5&&puntosYSelect9[1]>=puntoY9[12]-5&&puntosYSelect9[1]<=puntoY9[12]+5){
				val9 = val9;
				pSelect9[25]=1;
				pSelect9[26]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[25]=1;
				pSelect9[26]=1;
				pSelect9[27]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[11]-5&&puntosXSelect9[1]<=puntoX9[11]+5&&puntosYSelect9[1]>=puntoY9[11]-5&&puntosYSelect9[1]<=puntoY9[11]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[12]-5&&puntosXSelect9[0]<=puntoX9[12]+5&&puntosYSelect9[0]>=puntoY9[12]-5&&puntosYSelect9[0]<=puntoY9[12]+5){
			if(puntosXSelect9[1]>=puntoX9[11]-5&&puntosXSelect9[1]<=puntoX9[11]+5&&puntosYSelect9[1]>=puntoY9[11]-5&&puntosYSelect9[1]<=puntoY9[11]+5){
				val9 = val9;
				pSelect9[25]=1;
				pSelect9[26]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
				pSelect9[25]=1;
				pSelect9[26]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[27]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[12]-5&&puntosXSelect9[1]<=puntoX9[12]+5&&puntosYSelect9[1]>=puntoY9[12]-5&&puntosYSelect9[1]<=puntoY9[12]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	

		}
		else if(puntosXSelect9[0]>=puntoX9[13]-5&&puntosXSelect9[0]<=puntoX9[13]+5&&puntosYSelect9[0]>=puntoY9[13]-5&&puntosYSelect9[0]<=puntoY9[13]+5){
			if(puntosXSelect9[1]>=puntoX9[11]-5&&puntosXSelect9[1]<=puntoX9[11]+5&&puntosYSelect9[1]>=puntoY9[11]-5&&puntosYSelect9[1]<=puntoY9[11]+5){
				val9 = val9;
				pSelect9[25]=1;
				pSelect9[26]=1;
				pSelect9[27]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[10]-5&&puntosXSelect9[1]<=puntoX9[10]+5&&puntosYSelect9[1]>=puntoY9[10]-5&&puntosYSelect9[1]<=puntoY9[10]+5){
				val9 = val9;
				pSelect9[22]=1;
				pSelect9[23]=1;
				pSelect9[24]=1;
				pSelect9[25]=1;
				pSelect9[26]=1;
				pSelect9[27]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[12]-5&&puntosXSelect9[1]<=puntoX9[12]+5&&puntosYSelect9[1]>=puntoY9[12]-5&&puntosYSelect9[1]<=puntoY9[12]+5){
				val9 = val9;
				pSelect9[25]=1;
				pSelect9[26]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[14]-5&&puntosXSelect9[1]<=puntoX9[14]+5&&puntosYSelect9[1]>=puntoY9[14]-5&&puntosYSelect9[1]<=puntoY9[14]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[15]-5&&puntosXSelect9[1]<=puntoX9[15]+5&&puntosYSelect9[1]>=puntoY9[15]-5&&puntosYSelect9[1]<=puntoY9[15]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
				pSelect9[31]=1;
				pSelect9[32]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
				pSelect9[31]=1;
				pSelect9[32]=1;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[14]-5&&puntosXSelect9[0]<=puntoX9[14]+5&&puntosYSelect9[0]>=puntoY9[14]-5&&puntosYSelect9[0]<=puntoY9[14]+5){
			if(puntosXSelect9[1]>=puntoX9[15]-5&&puntosXSelect9[1]<=puntoX9[15]+5&&puntosYSelect9[1]>=puntoY9[15]-5&&puntosYSelect9[1]<=puntoY9[15]+5){
				val9 = val9;
				pSelect9[31]=1;
				pSelect9[32]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
				pSelect9[31]=1;
				pSelect9[32]=1;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[14]-5&&puntosXSelect9[1]<=puntoX9[14]+5&&puntosYSelect9[1]>=puntoY9[14]-5&&puntosYSelect9[1]<=puntoY9[14]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[15]-5&&puntosXSelect9[0]<=puntoX9[15]+5&&puntosYSelect9[0]>=puntoY9[15]-5&&puntosYSelect9[0]<=puntoY9[15]+5){
			if(puntosXSelect9[1]>=puntoX9[14]-5&&puntosXSelect9[1]<=puntoX9[14]+5&&puntosYSelect9[1]>=puntoY9[14]-5&&puntosYSelect9[1]<=puntoY9[14]+5){
				val9 = val9;
				pSelect9[31]=1;
				pSelect9[32]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
				pSelect9[31]=1;
				pSelect9[32]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[15]-5&&puntosXSelect9[1]<=puntoX9[15]+5&&puntosYSelect9[1]>=puntoY9[15]-5&&puntosYSelect9[1]<=puntoY9[15]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[16]-5&&puntosXSelect9[0]<=puntoX9[16]+5&&puntosYSelect9[0]>=puntoY9[16]-5&&puntosYSelect9[0]<=puntoY9[16]+5){
			if(puntosXSelect9[1]>=puntoX9[15]-5&&puntosXSelect9[1]<=puntoX9[15]+5&&puntosYSelect9[1]>=puntoY9[15]-5&&puntosYSelect9[1]<=puntoY9[15]+5){
				val9 = val9;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[14]-5&&puntosXSelect9[1]<=puntoX9[14]+5&&puntosYSelect9[1]>=puntoY9[14]-5&&puntosYSelect9[1]<=puntoY9[14]+5){
				val9 = val9;
				pSelect9[31]=1;
				pSelect9[32]=1;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[13]-5&&puntosXSelect9[1]<=puntoX9[13]+5&&puntosYSelect9[1]>=puntoY9[13]-5&&puntosYSelect9[1]<=puntoY9[13]+5){
				val9 = val9;
				pSelect9[28]=1;
				pSelect9[29]=1;
				pSelect9[30]=1;
				pSelect9[31]=1;
				pSelect9[32]=1;
				pSelect9[33]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[17]-5&&puntosXSelect9[1]<=puntoX9[17]+5&&puntosYSelect9[1]>=puntoY9[17]-5&&puntosYSelect9[1]<=puntoY9[17]+5){
				val9 = val9;
				pSelect9[34]=1;
				pSelect9[35]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[34]=1;
				pSelect9[35]=1;
				pSelect9[36]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[17]-5&&puntosXSelect9[0]<=puntoX9[17]+5&&puntosYSelect9[0]>=puntoY9[17]-5&&puntosYSelect9[0]<=puntoY9[17]+5){
			if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
				pSelect9[34]=1;
				pSelect9[35]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[36]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[17]-5&&puntosXSelect9[1]<=puntoX9[17]+5&&puntosYSelect9[1]>=puntoY9[17]-5&&puntosYSelect9[1]<=puntoY9[17]+5){
				val9 = val9;
			}
			else{
				val9++;
			}		
		}
		else if(puntosXSelect9[0]>=puntoX9[18]-5&&puntosXSelect9[0]<=puntoX9[18]+5&&puntosYSelect9[0]>=puntoY9[18]-5&&puntosYSelect9[0]<=puntoY9[18]+5){
			if(puntosXSelect9[1]>=puntoX9[17]-5&&puntosXSelect9[1]<=puntoX9[17]+5&&puntosYSelect9[1]>=puntoY9[17]-5&&puntosYSelect9[1]<=puntoY9[17]+5){
				val9 = val9;
				pSelect9[36]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[16]-5&&puntosXSelect9[1]<=puntoX9[16]+5&&puntosYSelect9[1]>=puntoY9[16]-5&&puntosYSelect9[1]<=puntoY9[16]+5){
				val9 = val9;
				pSelect9[34]=1;
				pSelect9[35]=1;
				pSelect9[36]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[19]-5&&puntosXSelect9[1]<=puntoX9[19]+5&&puntosYSelect9[1]>=puntoY9[19]-5&&puntosYSelect9[1]<=puntoY9[19]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[20]-5&&puntosXSelect9[1]<=puntoX9[20]+5&&puntosYSelect9[1]>=puntoY9[20]-5&&puntosYSelect9[1]<=puntoY9[20]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[21]-5&&puntosXSelect9[1]<=puntoX9[21]+5&&puntosYSelect9[1]>=puntoY9[21]-5&&puntosYSelect9[1]<=puntoY9[21]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
			}
			else{
				val9++;
			}		
		}
		else if(puntosXSelect9[0]>=puntoX9[19]-5&&puntosXSelect9[0]<=puntoX9[19]+5&&puntosYSelect9[0]>=puntoY9[19]-5&&puntosYSelect9[0]<=puntoY9[19]+5){
			if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[21]-5&&puntosXSelect9[1]<=puntoX9[21]+5&&puntosYSelect9[1]>=puntoY9[21]-5&&puntosYSelect9[1]<=puntoY9[21]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[20]-5&&puntosXSelect9[1]<=puntoX9[20]+5&&puntosYSelect9[1]>=puntoY9[20]-5&&puntosYSelect9[1]<=puntoY9[20]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[19]-5&&puntosXSelect9[1]<=puntoX9[19]+5&&puntosYSelect9[1]>=puntoY9[19]-5&&puntosYSelect9[1]<=puntoY9[19]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[20]-5&&puntosXSelect9[0]<=puntoX9[20]+5&&puntosYSelect9[0]>=puntoY9[20]-5&&puntosYSelect9[0]<=puntoY9[20]+5){
			if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[19]-5&&puntosXSelect9[1]<=puntoX9[19]+5&&puntosYSelect9[1]>=puntoY9[19]-5&&puntosYSelect9[1]<=puntoY9[19]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[21]-5&&puntosXSelect9[1]<=puntoX9[21]+5&&puntosYSelect9[1]>=puntoY9[21]-5&&puntosYSelect9[1]<=puntoY9[21]+5){
				val9 = val9;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[20]-5&&puntosXSelect9[1]<=puntoX9[20]+5&&puntosYSelect9[1]>=puntoY9[20]-5&&puntosYSelect9[1]<=puntoY9[20]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[21]-5&&puntosXSelect9[0]<=puntoX9[21]+5&&puntosYSelect9[0]>=puntoY9[21]-5&&puntosYSelect9[0]<=puntoY9[21]+5){
			if(puntosXSelect9[1]>=puntoX9[20]-5&&puntosXSelect9[1]<=puntoX9[20]+5&&puntosYSelect9[1]>=puntoY9[20]-5&&puntosYSelect9[1]<=puntoY9[20]+5){
				val9 = val9;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[19]-5&&puntosXSelect9[1]<=puntoX9[19]+5&&puntosYSelect9[1]>=puntoY9[19]-5&&puntosYSelect9[1]<=puntoY9[19]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[21]-5&&puntosXSelect9[1]<=puntoX9[21]+5&&puntosYSelect9[1]>=puntoY9[21]-5&&puntosYSelect9[1]<=puntoY9[21]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[22]-5&&puntosXSelect9[0]<=puntoX9[22]+5&&puntosYSelect9[0]>=puntoY9[22]-5&&puntosYSelect9[0]<=puntoY9[22]+5){
			if(puntosXSelect9[1]>=puntoX9[18]-5&&puntosXSelect9[1]<=puntoX9[18]+5&&puntosYSelect9[1]>=puntoY9[18]-5&&puntosYSelect9[1]<=puntoY9[18]+5){
				val9 = val9;
				pSelect9[37]=1;
				pSelect9[38]=1;
				pSelect9[39]=1;
				pSelect9[40]=1;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[19]-5&&puntosXSelect9[1]<=puntoX9[19]+5&&puntosYSelect9[1]>=puntoY9[19]-5&&puntosYSelect9[1]<=puntoY9[19]+5){
				val9 = val9;
				pSelect9[41]=1;
				pSelect9[42]=1;
				pSelect9[43]=1;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[20]-5&&puntosXSelect9[1]<=puntoX9[20]+5&&puntosYSelect9[1]>=puntoY9[20]-5&&puntosYSelect9[1]<=puntoY9[20]+5){
				val9 = val9;
				pSelect9[44]=1;
				pSelect9[45]=1;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[21]-5&&puntosXSelect9[1]<=puntoX9[21]+5&&puntosYSelect9[1]>=puntoY9[21]-5&&puntosYSelect9[1]<=puntoY9[21]+5){
				val9 = val9;
				pSelect9[46]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[23]-5&&puntosXSelect9[1]<=puntoX9[23]+5&&puntosYSelect9[1]>=puntoY9[23]-5&&puntosYSelect9[1]<=puntoY9[23]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[24]-5&&puntosXSelect9[1]<=puntoX9[24]+5&&puntosYSelect9[1]>=puntoY9[24]-5&&puntosYSelect9[1]<=puntoY9[24]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[25]-5&&puntosXSelect9[1]<=puntoX9[25]+5&&puntosYSelect9[1]>=puntoY9[25]-5&&puntosYSelect9[1]<=puntoY9[25]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
			}
			else{
				val9++;
			}		
		}
		else if(puntosXSelect9[0]>=puntoX9[23]-5&&puntosXSelect9[0]<=puntoX9[23]+5&&puntosYSelect9[0]>=puntoY9[23]-5&&puntosYSelect9[0]<=puntoY9[23]+5){
			if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[24]-5&&puntosXSelect9[1]<=puntoX9[24]+5&&puntosYSelect9[1]>=puntoY9[24]-5&&puntosYSelect9[1]<=puntoY9[24]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[25]-5&&puntosXSelect9[1]<=puntoX9[25]+5&&puntosYSelect9[1]>=puntoY9[25]-5&&puntosYSelect9[1]<=puntoY9[25]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[23]-5&&puntosXSelect9[1]<=puntoX9[23]+5&&puntosYSelect9[1]>=puntoY9[23]-5&&puntosYSelect9[1]<=puntoY9[23]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[24]-5&&puntosXSelect9[0]<=puntoX9[24]+5&&puntosYSelect9[0]>=puntoY9[24]-5&&puntosYSelect9[0]<=puntoY9[24]+5){
			if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[23]-5&&puntosXSelect9[1]<=puntoX9[23]+5&&puntosYSelect9[1]>=puntoY9[23]-5&&puntosYSelect9[1]<=puntoY9[23]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[25]-5&&puntosXSelect9[1]<=puntoX9[25]+5&&puntosYSelect9[1]>=puntoY9[25]-5&&puntosYSelect9[1]<=puntoY9[25]+5){
				val9 = val9;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[24]-5&&puntosXSelect9[1]<=puntoX9[24]+5&&puntosYSelect9[1]>=puntoY9[24]-5&&puntosYSelect9[1]<=puntoY9[24]+5){
				val9 = val9;
			}
			else{
				val9++;
			}

		}
		else if(puntosXSelect9[0]>=puntoX9[25]-5&&puntosXSelect9[0]<=puntoX9[25]+5&&puntosYSelect9[0]>=puntoY9[25]-5&&puntosYSelect9[0]<=puntoY9[25]+5){
			if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[23]-5&&puntosXSelect9[1]<=puntoX9[23]+5&&puntosYSelect9[1]>=puntoY9[23]-5&&puntosYSelect9[1]<=puntoY9[23]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[24]-5&&puntosXSelect9[1]<=puntoX9[24]+5&&puntosYSelect9[1]>=puntoY9[24]-5&&puntosYSelect9[1]<=puntoY9[24]+5){
				val9 = val9;
				pSelect9[54]=1;
				pSelect9[55]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[25]-5&&puntosXSelect9[1]<=puntoX9[25]+5&&puntosYSelect9[1]>=puntoY9[25]-5&&puntosYSelect9[1]<=puntoY9[25]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[26]-5&&puntosXSelect9[0]<=puntoX9[26]+5&&puntosYSelect9[0]>=puntoY9[26]-5&&puntosYSelect9[0]<=puntoY9[26]+5){
			if(puntosXSelect9[1]>=puntoX9[22]-5&&puntosXSelect9[1]<=puntoX9[22]+5&&puntosYSelect9[1]>=puntoY9[22]-5&&puntosYSelect9[1]<=puntoY9[22]+5){
				val9 = val9;
				pSelect9[47]=1;
				pSelect9[48]=1;
				pSelect9[49]=1;
				pSelect9[50]=1;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[23]-5&&puntosXSelect9[1]<=puntoX9[23]+5&&puntosYSelect9[1]>=puntoY9[23]-5&&puntosYSelect9[1]<=puntoY9[23]+5){
				val9 = val9;
				pSelect9[51]=1;
				pSelect9[52]=1;
				pSelect9[53]=1;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[24]-5&&puntosXSelect9[1]<=puntoX9[24]+5&&puntosYSelect9[1]>=puntoY9[24]-5&&puntosYSelect9[1]<=puntoY9[24]+5){
				val9 = val9;
				pSelect9[54]=1;
				pSelect9[55]=1;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[25]-5&&puntosXSelect9[1]<=puntoX9[25]+5&&puntosYSelect9[1]>=puntoY9[25]-5&&puntosYSelect9[1]<=puntoY9[25]+5){
				val9 = val9;
				pSelect9[56]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
				pSelect9[57]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[27]-5&&puntosXSelect9[0]<=puntoX9[27]+5&&puntosYSelect9[0]>=puntoY9[27]-5&&puntosYSelect9[0]<=puntoY9[27]+5){
			if(puntosXSelect9[1]>=puntoX9[26]-5&&puntosXSelect9[1]<=puntoX9[26]+5&&puntosYSelect9[1]>=puntoY9[26]-5&&puntosYSelect9[1]<=puntoY9[26]+5){
				val9 = val9;
				pSelect9[57]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[28]-5&&puntosXSelect9[1]<=puntoX9[28]+5&&puntosYSelect9[1]>=puntoY9[28]-5&&puntosYSelect9[1]<=puntoY9[28]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[29]-5&&puntosXSelect9[1]<=puntoX9[29]+5&&puntosYSelect9[1]>=puntoY9[29]-5&&puntosYSelect9[1]<=puntoY9[29]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[30]-5&&puntosXSelect9[1]<=puntoX9[30]+5&&puntosYSelect9[1]>=puntoY9[30]-5&&puntosYSelect9[1]<=puntoY9[30]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[28]-5&&puntosXSelect9[0]<=puntoX9[28]+5&&puntosYSelect9[0]>=puntoY9[28]-5&&puntosYSelect9[0]<=puntoY9[28]+5){
			if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[29]-5&&puntosXSelect9[1]<=puntoX9[29]+5&&puntosYSelect9[1]>=puntoY9[29]-5&&puntosYSelect9[1]<=puntoY9[29]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[30]-5&&puntosXSelect9[1]<=puntoX9[30]+5&&puntosYSelect9[1]>=puntoY9[30]-5&&puntosYSelect9[1]<=puntoY9[30]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[28]-5&&puntosXSelect9[1]<=puntoX9[28]+5&&puntosYSelect9[1]>=puntoY9[28]-5&&puntosYSelect9[1]<=puntoY9[28]+5){
				val9 = val9;
			}
			else{
				val9++;
			}		
		}
		else if(puntosXSelect9[0]>=puntoX9[29]-5&&puntosXSelect9[0]<=puntoX9[29]+5&&puntosYSelect9[0]>=puntoY9[29]-5&&puntosYSelect9[0]<=puntoY9[29]+5){
			if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[28]-5&&puntosXSelect9[1]<=puntoX9[28]+5&&puntosYSelect9[1]>=puntoY9[28]-5&&puntosYSelect9[1]<=puntoY9[28]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[30]-5&&puntosXSelect9[1]<=puntoX9[30]+5&&puntosYSelect9[1]>=puntoY9[30]-5&&puntosYSelect9[1]<=puntoY9[30]+5){
				val9 = val9;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[29]-5&&puntosXSelect9[1]<=puntoX9[29]+5&&puntosYSelect9[1]>=puntoY9[29]-5&&puntosYSelect9[1]<=puntoY9[29]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[30]-5&&puntosXSelect9[0]<=puntoX9[30]+5&&puntosYSelect9[0]>=puntoY9[30]-5&&puntosYSelect9[0]<=puntoY9[30]+5){
			if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[28]-5&&puntosXSelect9[1]<=puntoX9[28]+5&&puntosYSelect9[1]>=puntoY9[28]-5&&puntosYSelect9[1]<=puntoY9[28]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[29]-5&&puntosXSelect9[1]<=puntoX9[29]+5&&puntosYSelect9[1]>=puntoY9[29]-5&&puntosYSelect9[1]<=puntoY9[29]+5){
				val9 = val9;
				pSelect9[65]=1;
				pSelect9[66]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[30]-5&&puntosXSelect9[1]<=puntoX9[30]+5&&puntosYSelect9[1]>=puntoY9[30]-5&&puntosYSelect9[1]<=puntoY9[30]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[31]-5&&puntosXSelect9[0]<=puntoX9[31]+5&&puntosYSelect9[0]>=puntoY9[31]-5&&puntosYSelect9[0]<=puntoY9[31]+5){
			if(puntosXSelect9[1]>=puntoX9[27]-5&&puntosXSelect9[1]<=puntoX9[27]+5&&puntosYSelect9[1]>=puntoY9[27]-5&&puntosYSelect9[1]<=puntoY9[27]+5){
				val9 = val9;
				pSelect9[58]=1;
				pSelect9[59]=1;
				pSelect9[60]=1;
				pSelect9[61]=1;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[28]-5&&puntosXSelect9[1]<=puntoX9[28]+5&&puntosYSelect9[1]>=puntoY9[28]-5&&puntosYSelect9[1]<=puntoY9[28]+5){
				val9 = val9;
				pSelect9[62]=1;
				pSelect9[63]=1;
				pSelect9[64]=1;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[29]-5&&puntosXSelect9[1]<=puntoX9[29]+5&&puntosYSelect9[1]>=puntoY9[29]-5&&puntosYSelect9[1]<=puntoY9[29]+5){
				val9 = val9;
				pSelect9[65]=1;
				pSelect9[66]=1;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[30]-5&&puntosXSelect9[1]<=puntoX9[30]+5&&puntosYSelect9[1]>=puntoY9[30]-5&&puntosYSelect9[1]<=puntoY9[30]+5){
				val9 = val9;
				pSelect9[67]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[32]-5&&puntosXSelect9[1]<=puntoX9[32]+5&&puntosYSelect9[1]>=puntoY9[32]-5&&puntosYSelect9[1]<=puntoY9[32]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[33]-5&&puntosXSelect9[1]<=puntoX9[33]+5&&puntosYSelect9[1]>=puntoY9[33]-5&&puntosYSelect9[1]<=puntoY9[33]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[34]-5&&puntosXSelect9[1]<=puntoX9[34]+5&&puntosYSelect9[1]>=puntoY9[34]-5&&puntosYSelect9[1]<=puntoY9[34]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[32]-5&&puntosXSelect9[0]<=puntoX9[32]+5&&puntosYSelect9[0]>=puntoY9[32]-5&&puntosYSelect9[0]<=puntoY9[32]+5){
			if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[33]-5&&puntosXSelect9[1]<=puntoX9[33]+5&&puntosYSelect9[1]>=puntoY9[33]-5&&puntosYSelect9[1]<=puntoY9[33]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[34]-5&&puntosXSelect9[1]<=puntoX9[34]+5&&puntosYSelect9[1]>=puntoY9[34]-5&&puntosYSelect9[1]<=puntoY9[34]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[32]-5&&puntosXSelect9[1]<=puntoX9[32]+5&&puntosYSelect9[1]>=puntoY9[32]-5&&puntosYSelect9[1]<=puntoY9[32]+5){
				val9 = val9;
			}
			else{
				val9++;
			}
		}
		else if(puntosXSelect9[0]>=puntoX9[33]-5&&puntosXSelect9[0]<=puntoX9[33]+5&&puntosYSelect9[0]>=puntoY9[33]-5&&puntosYSelect9[0]<=puntoY9[33]+5){
			if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[32]-5&&puntosXSelect9[1]<=puntoX9[32]+5&&puntosYSelect9[1]>=puntoY9[32]-5&&puntosYSelect9[1]<=puntoY9[32]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[34]-5&&puntosXSelect9[1]<=puntoX9[34]+5&&puntosYSelect9[1]>=puntoY9[34]-5&&puntosYSelect9[1]<=puntoY9[34]+5){
				val9 = val9;
				pSelect9[75]=1;
				pSelect9[76]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
				val9 = val9;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[33]-5&&puntosXSelect9[1]<=puntoX9[33]+5&&puntosYSelect9[1]>=puntoY9[33]-5&&puntosYSelect9[1]<=puntoY9[33]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[34]-5&&puntosXSelect9[0]<=puntoX9[34]+5&&puntosYSelect9[0]>=puntoY9[34]-5&&puntosYSelect9[0]<=puntoY9[34]+5){
			if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[32]-5&&puntosXSelect9[1]<=puntoX9[32]+5&&puntosYSelect9[1]>=puntoY9[32]-5&&puntosYSelect9[1]<=puntoY9[32]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[33]-5&&puntosXSelect9[1]<=puntoX9[33]+5&&puntosYSelect9[1]>=puntoY9[33]-5&&puntosYSelect9[1]<=puntoY9[33]+5){
				val9 = val9;
				pSelect9[75]=1;
				pSelect9[76]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
				val9 = val9;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[34]-5&&puntosXSelect9[1]<=puntoX9[34]+5&&puntosYSelect9[1]>=puntoY9[34]-5&&puntosYSelect9[1]<=puntoY9[34]+5){
				val9 = val9;
			}
			else{
				val9++;
			}	
		}
		else if(puntosXSelect9[0]>=puntoX9[35]-5&&puntosXSelect9[0]<=puntoX9[35]+5&&puntosYSelect9[0]>=puntoY9[35]-5&&puntosYSelect9[0]<=puntoY9[35]+5){
			if(puntosXSelect9[1]>=puntoX9[31]-5&&puntosXSelect9[1]<=puntoX9[31]+5&&puntosYSelect9[1]>=puntoY9[31]-5&&puntosYSelect9[1]<=puntoY9[31]+5){
				val9 = val9;
				pSelect9[68]=1;
				pSelect9[69]=1;
				pSelect9[70]=1;
				pSelect9[71]=1;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[32]-5&&puntosXSelect9[1]<=puntoX9[32]+5&&puntosYSelect9[1]>=puntoY9[32]-5&&puntosYSelect9[1]<=puntoY9[32]+5){
				val9 = val9;
				pSelect9[72]=1;
				pSelect9[73]=1;
				pSelect9[74]=1;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[33]-5&&puntosXSelect9[1]<=puntoX9[33]+5&&puntosYSelect9[1]>=puntoY9[33]-5&&puntosYSelect9[1]<=puntoY9[33]+5){
				val9 = val9;
				pSelect9[75]=1;
				pSelect9[76]=1;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[34]-5&&puntosXSelect9[1]<=puntoX9[34]+5&&puntosYSelect9[1]>=puntoY9[34]-5&&puntosYSelect9[1]<=puntoY9[34]+5){
				val9 = val9;
				pSelect9[77]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[0]-5&&puntosXSelect9[1]<=puntoX9[0]+5&&puntosYSelect9[1]>=puntoY9[0]-5&&puntosYSelect9[1]<=puntoY9[0]+5){
				val9 = val9;
				pSelect9[78]=1;
			}
			else if(puntosXSelect9[1]>=puntoX9[35]-5&&puntosXSelect9[1]<=puntoX9[35]+5&&puntosYSelect9[1]>=puntoY9[35]-5&&puntosYSelect9[1]<=puntoY9[35]+5){
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
	if(val9==0&&totalPSelect9==79&&totalSelect9==12){
		validar=1;
	}
	else{
		validar=0;
	}
	console.log(val9+ " - "+ totalSelect9 + " - "+totalPSelect9 +" - " +puntoY9.length + " "+puntoX9.length);
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
					else if(i==4){
						selectCorrect9[1]=1;
					}
					else if(i==8){
						selectCorrect9[2]=1;
					}
					else if(i==10){
						selectCorrect9[3]=1;
					}
					else if(i==13){
						selectCorrect9[4]=1;
					}
					else if(i==16){
						selectCorrect9[5]=1;
					}
					else if(i==18){
						selectCorrect9[6]=1;
					}
					else if(i==22){
						selectCorrect9[7]=1;
					}
					else if(i==26){
						selectCorrect9[8]=1;
					}
					else if(i==27){
						selectCorrect9[9]=1;
					}
					else if(i==31){
						selectCorrect9[10]=1;
					}
					else if(i==35){
						selectCorrect9[11]=1;
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
			console.log(mouseDown);
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
					else if(i==4){
						selectCorrect9[1]=1;
					}
					else if(i==8){
						selectCorrect9[2]=1;
					}
					else if(i==10){
						selectCorrect9[3]=1;
					}
					else if(i==13){
						selectCorrect9[4]=1;
					}
					else if(i==16){
						selectCorrect9[5]=1;
					}
					else if(i==18){
						selectCorrect9[6]=1;
					}
					else if(i==22){
						selectCorrect9[7]=1;
					}
					else if(i==26){
						selectCorrect9[8]=1;
					}
					else if(i==27){
						selectCorrect9[9]=1;
					}
					else if(i==31){
						selectCorrect9[10]=1;
					}
					else if(i==35){
						selectCorrect9[11]=1;
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
	selectCorrect9 = [0,0,0,0,0,0,0,0,0,0,0,0];
	pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect9 = 0;
	if(puntosXSelect9.length>0){
		document.getElementById("fc9").checked = true;
	}
	else{
		document.getElementById("fc9").checked = false;
	}
});

$('#ultimoF9').on('click', function(){
	pSelect9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect9 = 0;
	var fin = puntosXSelect9.length-1;
	for(var i2=0; i2<puntosXSelect9.length; i2++){
		if(puntosXSelect9[fin]>=puntoX9[i2]-5&&puntosXSelect9[fin]<=puntoX9[i2]+5&&puntosYSelect9[fin]>=puntoY9[i2]-5&&puntosYSelect9[fin]<=puntoY9[i2]+5){
			if(i2==0){
				selectCorrect9[0]=0;
			}
			else if(i2==4){
				selectCorrect9[1]=0;
			}
			else if(i2==8){
				selectCorrect9[2]=0;
			}
			else if(i2==10){
				selectCorrect9[3]=0;
			}
			else if(i2==13){
				selectCorrect9[4]=0;
			}
			else if(i2==16){
				selectCorrect9[5]=0;
			}
			else if(i2==18){
				selectCorrect9[6]=0;
			}
			else if(i2==22){
				selectCorrect9[7]=0;
			}
			else if(i2==26){
				selectCorrect9[8]=0;
			}
			else if(i2==27){
				selectCorrect9[9]=0;
			}
			else if(i2==31){
				selectCorrect9[10]=0;
			}
			else if(i2==35){
				selectCorrect9[11]=0;
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

