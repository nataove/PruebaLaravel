var puntosSelec3 = new Array();

var puntosXSelect3 = new Array();
var puntosYSelect3 = new Array();

var puntosXSelect3First = new Array();
var puntosYSelect3First = new Array();

var puntoX3 = [13,12,12,13,11,11,22,50,65,78,89,107,141,143,143,142,129,109,85,49,24,   35,62,40,74,84,13,13,13,13,15,21,31,45,72,81,105,133,144,144,144,144,26,46,66,51,37,86,94,99,108,106,134];
			   

var puntoY3 = [138,128,119,104,95,84,84,87,72,60,70,83,88,101,119,137,137,137,137,137,138,  101,97,119,89,78,68,52,44,20,15,15,14,14,14,14,15,15,14,28,56,72,56,65,49,36,21,30,52,66,58,39,34];
			   
var stage3 = document.getElementById('canvas3');
stage3.width = 160;
stage3.height = 150;

var selectCorrect3 = [0,0,0,0,0,0];
var totalSelect3 = 0;

var x13 =0;
var x23 =0;
var y13 =0;
var y23 =0;
var val3=0;

var pSelect3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect3 = 0;

var mouseDown3 = false;
var mouseClick3 = false;
var ctx3 = stage3.getContext("2d");

function validarF3(){
	var validar=0;
	for(var i=0; i<puntosXSelect3First.length-1; i++){
		if(puntosXSelect3[0]>=puntoX3[0]-5&&puntosXSelect3[0]<=puntoX3[0]+5&&puntosYSelect3[0]>=puntoY3[0]-5&&puntosYSelect3[0]<=puntoY3[0]+5){
			if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;
				pSelect3[51]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
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
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
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
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
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
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
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
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[5]-5&&puntosXSelect3[0]<=puntoX3[5]+5&&puntosYSelect3[0]>=puntoY3[5]-5&&puntosYSelect3[0]<=puntoY3[5]+5){
			if(puntosXSelect3[1]>=puntoX3[6]-5&&puntosXSelect3[1]<=puntoX3[6]+5&&puntosYSelect3[1]>=puntoY3[6]-5&&puntosYSelect3[1]<=puntoY3[6]+5){
				val3 = val3;
				pSelect3[15]=1;
				pSelect3[16]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[7]-5&&puntosXSelect3[1]<=puntoX3[7]+5&&puntosYSelect3[1]>=puntoY3[7]-5&&puntosYSelect3[1]<=puntoY3[7]+5){
				val3 = val3;
				pSelect3[15]=1;
				pSelect3[16]=1;
				pSelect3[17]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[4]-5&&puntosXSelect3[1]<=puntoX3[4]+5&&puntosYSelect3[1]>=puntoY3[4]-5&&puntosYSelect3[1]<=puntoY3[4]+5){
				val3 = val3;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[3]-5&&puntosXSelect3[1]<=puntoX3[3]+5&&puntosYSelect3[1]>=puntoY3[3]-5&&puntosYSelect3[1]<=puntoY3[3]+5){
				val3 = val3;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[2]-5&&puntosXSelect3[1]<=puntoX3[2]+5&&puntosYSelect3[1]>=puntoY3[2]-5&&puntosYSelect3[1]<=puntoY3[2]+5){
				val3 = val3;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[1]-5&&puntosXSelect3[1]<=puntoX3[1]+5&&puntosYSelect3[1]>=puntoY3[1]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[0]+5){
				val3 = val3;
				pSelect3[0]=1;
				pSelect3[1]=1;
				pSelect3[2]=1;
				pSelect3[3]=1;
				pSelect3[4]=1;
				pSelect3[5]=1;
				pSelect3[6]=1;
				pSelect3[7]=1;
				pSelect3[8]=1;
				pSelect3[9]=1;
				pSelect3[10]=1;
				pSelect3[11]=1;
				pSelect3[12]=1;
				pSelect3[13]=1;
				pSelect3[14]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[6]-5&&puntosXSelect3[0]<=puntoX3[6]+5&&puntosYSelect3[0]>=puntoY3[6]-5&&puntosYSelect3[0]<=puntoY3[6]+5){
			if(puntosXSelect3[1]>=puntoX3[7]-5&&puntosXSelect3[1]<=puntoX3[7]+5&&puntosYSelect3[1]>=puntoY3[7]-5&&puntosYSelect3[1]<=puntoY3[7]+5){
				val3 = val3;
				pSelect3[17]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[15]=1;
				pSelect3[16]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[6]-5&&puntosXSelect3[1]<=puntoX3[6]+5&&puntosYSelect3[1]>=puntoY3[6]-5&&puntosYSelect3[1]<=puntoY3[6]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[7]-5&&puntosXSelect3[0]<=puntoX3[7]+5&&puntosYSelect3[0]>=puntoY3[7]-5&&puntosYSelect3[0]<=puntoY3[7]+5){
			if(puntosXSelect3[1]>=puntoX3[8]-5&&puntosXSelect3[1]<=puntoX3[8]+5&&puntosYSelect3[1]>=puntoY3[8]-5&&puntosYSelect3[1]<=puntoY3[8]+5){
				val3 = val3;
				pSelect3[18]=1;
				pSelect3[19]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[9]-5&&puntosXSelect3[1]<=puntoX3[9]+5&&puntosYSelect3[1]>=puntoY3[9]-5&&puntosYSelect3[1]<=puntoY3[9]+5){
				val3 = val3;
				pSelect3[18]=1;
				pSelect3[19]=1;
				pSelect3[20]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[6]-5&&puntosXSelect3[1]<=puntoX3[6]+5&&puntosYSelect3[1]>=puntoY3[6]-5&&puntosYSelect3[1]<=puntoY3[6]+5){
				val3 = val3;
				pSelect3[17]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[5]-5&&puntosXSelect3[1]<=puntoX3[5]+5&&puntosYSelect3[1]>=puntoY3[5]-5&&puntosYSelect3[1]<=puntoY3[5]+5){
				val3 = val3;
				pSelect3[15]=1;
				pSelect3[16]=1;
				pSelect3[17]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[7]-5&&puntosXSelect3[1]<=puntoX3[7]+5&&puntosYSelect3[1]>=puntoY3[7]-5&&puntosYSelect3[1]<=puntoY3[7]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[8]-5&&puntosXSelect3[0]<=puntoX3[8]+5&&puntosYSelect3[0]>=puntoY3[8]-5&&puntosYSelect3[0]<=puntoY3[8]+5){
			if(puntosXSelect3[1]>=puntoX3[9]-5&&puntosXSelect3[1]<=puntoX3[9]+5&&puntosYSelect3[1]>=puntoY3[9]-5&&puntosYSelect3[1]<=puntoY3[9]+5){
				val3 = val3;
				pSelect3[20]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[7]-5&&puntosXSelect3[1]<=puntoX3[7]+5&&puntosYSelect3[1]>=puntoY3[7]-5&&puntosYSelect3[1]<=puntoY3[7]+5){
				val3 = val3;
				pSelect3[18]=1;
				pSelect3[19]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[8]-5&&puntosXSelect3[1]<=puntoX3[8]+5&&puntosYSelect3[1]>=puntoY3[8]-5&&puntosYSelect3[1]<=puntoY3[8]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[9]-5&&puntosXSelect3[0]<=puntoX3[9]+5&&puntosYSelect3[0]>=puntoY3[9]-5&&puntosYSelect3[0]<=puntoY3[9]+5){
			if(puntosXSelect3[1]>=puntoX3[8]-5&&puntosXSelect3[1]<=puntoX3[8]+5&&puntosYSelect3[1]>=puntoY3[8]-5&&puntosYSelect3[1]<=puntoY3[8]+5){
				val3 = val3;
				pSelect3[20]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[7]-5&&puntosXSelect3[1]<=puntoX3[7]+5&&puntosYSelect3[1]>=puntoY3[7]-5&&puntosYSelect3[1]<=puntoY3[7]+5){
				val3 = val3;
				pSelect3[18]=1;
				pSelect3[19]=1;
				pSelect3[20]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[10]-5&&puntosXSelect3[1]<=puntoX3[10]+5&&puntosYSelect3[1]>=puntoY3[10]-5&&puntosYSelect3[1]<=puntoY3[10]+5){
				val3 = val3;
				pSelect3[21]=1;
				pSelect3[22]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[11]-5&&puntosXSelect3[1]<=puntoX3[11]+5&&puntosYSelect3[1]>=puntoY3[11]-5&&puntosYSelect3[1]<=puntoY3[11]+5){
				val3 = val3;
				pSelect3[21]=1;
				pSelect3[22]=1;
				pSelect3[23]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[9]-5&&puntosXSelect3[1]<=puntoX3[9]+5&&puntosYSelect3[1]>=puntoY3[9]-5&&puntosYSelect3[1]<=puntoY3[9]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}


		else if(puntosXSelect3[0]>=puntoX3[10]-5&&puntosXSelect3[0]<=puntoX3[10]+5&&puntosYSelect3[0]>=puntoY3[10]-5&&puntosYSelect3[0]<=puntoY3[10]+5){
			if(puntosXSelect3[1]>=puntoX3[9]-5&&puntosXSelect3[1]<=puntoX3[9]+5&&puntosYSelect3[1]>=puntoY3[9]-5&&puntosYSelect3[1]<=puntoY3[9]+5){
				val3 = val3;
				pSelect3[21]=1;
				pSelect3[22]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[11]-5&&puntosXSelect3[1]<=puntoX3[11]+5&&puntosYSelect3[1]>=puntoY3[11]-5&&puntosYSelect3[1]<=puntoY3[11]+5){
				val3 = val3;
				pSelect3[23]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[10]-5&&puntosXSelect3[1]<=puntoX3[10]+5&&puntosYSelect3[1]>=puntoY3[10]-5&&puntosYSelect3[1]<=puntoY3[10]+5){
				val3 = val3;
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[11]-5&&puntosXSelect3[0]<=puntoX3[11]+5&&puntosYSelect3[0]>=puntoY3[11]-5&&puntosYSelect3[0]<=puntoY3[11]+5){
			if(puntosXSelect3[1]>=puntoX3[12]-5&&puntosXSelect3[1]<=puntoX3[12]+5&&puntosYSelect3[1]>=puntoY3[12]-5&&puntosYSelect3[1]<=puntoY3[12]+5){
				val3 = val3;
				pSelect3[24]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[10]-5&&puntosXSelect3[1]<=puntoX3[10]+5&&puntosYSelect3[1]>=puntoY3[10]-5&&puntosYSelect3[1]<=puntoY3[10]+5){
				val3 = val3;
				pSelect3[23]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[9]-5&&puntosXSelect3[1]<=puntoX3[9]+5&&puntosYSelect3[1]>=puntoY3[9]-5&&puntosYSelect3[1]<=puntoY3[9]+5){
				val3 = val3;
				pSelect3[21]=1;
				pSelect3[22]=1;
				pSelect3[23]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[11]-5&&puntosXSelect3[1]<=puntoX3[11]+5&&puntosYSelect3[1]>=puntoY3[11]-5&&puntosYSelect3[1]<=puntoY3[11]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[12]-5&&puntosXSelect3[0]<=puntoX3[12]+5&&puntosYSelect3[0]>=puntoY3[12]-5&&puntosYSelect3[0]<=puntoY3[12]+5){
			if(puntosXSelect3[1]>=puntoX3[11]-5&&puntosXSelect3[1]<=puntoX3[11]+5&&puntosYSelect3[1]>=puntoY3[11]-5&&puntosYSelect3[1]<=puntoY3[11]+5){
				val3 = val3;	
				pSelect3[30]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[13]-5&&puntosXSelect3[1]<=puntoX3[13]+5&&puntosYSelect3[1]>=puntoY3[13]-5&&puntosYSelect3[1]<=puntoY3[13]+5){
				val3 = val3;	
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[14]-5&&puntosXSelect3[1]<=puntoX3[14]+5&&puntosYSelect3[1]>=puntoY3[14]-5&&puntosYSelect3[1]<=puntoY3[14]+5){
				val3 = val3;	
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
				pSelect3[28]=1;	
				pSelect3[29]=1;		
			}
			else if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
				pSelect3[28]=1;	
				pSelect3[29]=1;	
				pSelect3[30]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[12]-5&&puntosXSelect3[1]<=puntoX3[12]+5&&puntosYSelect3[1]>=puntoY3[12]-5&&puntosYSelect3[1]<=puntoY3[12]+5){
				val3 = val3;	
			}	
			else{
				val3++;
			}	
		}
		else if(puntosXSelect3[0]>=puntoX3[13]-5&&puntosXSelect3[0]<=puntoX3[13]+5&&puntosYSelect3[0]>=puntoY3[13]-5&&puntosYSelect3[0]<=puntoY3[13]+5){
			if(puntosXSelect3[1]>=puntoX3[12]-5&&puntosXSelect3[1]<=puntoX3[12]+5&&puntosYSelect3[1]>=puntoY3[12]-5&&puntosYSelect3[1]<=puntoY3[12]+5){
				val3 = val3;	
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[14]-5&&puntosXSelect3[1]<=puntoX3[14]+5&&puntosYSelect3[1]>=puntoY3[14]-5&&puntosYSelect3[1]<=puntoY3[14]+5){
				val3 = val3;
				pSelect3[28]=1;	
				pSelect3[29]=1;		
			}
			else if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;
				pSelect3[28]=1;	
				pSelect3[29]=1;	
				pSelect3[30]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[13]-5&&puntosXSelect3[1]<=puntoX3[13]+5&&puntosYSelect3[1]>=puntoY3[13]-5&&puntosYSelect3[1]<=puntoY3[13]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[14]-5&&puntosXSelect3[0]<=puntoX3[14]+5&&puntosYSelect3[0]>=puntoY3[14]-5&&puntosYSelect3[0]<=puntoY3[14]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;
				pSelect3[30]=1;		
			}
			else if(puntosXSelect3[1]>=puntoX3[12]-5&&puntosXSelect3[1]<=puntoX3[12]+5&&puntosYSelect3[1]>=puntoY3[12]-5&&puntosYSelect3[1]<=puntoY3[12]+5){
				val3 = val3;
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
				pSelect3[28]=1;	
				pSelect3[29]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[13]-5&&puntosXSelect3[1]<=puntoX3[13]+5&&puntosYSelect3[1]>=puntoY3[13]-5&&puntosYSelect3[1]<=puntoY3[13]+5){
				val3 = val3;
				pSelect3[28]=1;	
				pSelect3[29]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[14]-5&&puntosXSelect3[1]<=puntoX3[14]+5&&puntosYSelect3[1]>=puntoY3[14]-5&&puntosYSelect3[1]<=puntoY3[14]+5){
				val3 = val3;	
			}	
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[15]-5&&puntosXSelect3[0]<=puntoX3[15]+5&&puntosYSelect3[0]>=puntoY3[15]-5&&puntosYSelect3[0]<=puntoY3[15]+5){
			if(puntosXSelect3[1]>=puntoX3[12]-5&&puntosXSelect3[1]<=puntoX3[12]+5&&puntosYSelect3[1]>=puntoY3[12]-5&&puntosYSelect3[1]<=puntoY3[12]+5){
				val3 = val3;	
				pSelect3[25]=1;
				pSelect3[26]=1;		
				pSelect3[27]=1;	
				pSelect3[28]=1;	
				pSelect3[29]=1;	
				pSelect3[30]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[14]-5&&puntosXSelect3[1]<=puntoX3[14]+5&&puntosYSelect3[1]>=puntoY3[14]-5&&puntosYSelect3[1]<=puntoY3[14]+5){
				val3 = val3;	
				pSelect3[30]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[13]-5&&puntosXSelect3[1]<=puntoX3[13]+5&&puntosYSelect3[1]>=puntoY3[13]-5&&puntosYSelect3[1]<=puntoY3[13]+5){
				val3 = val3;	
				pSelect3[28]=1;	
				pSelect3[29]=1;	
				pSelect3[30]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[16]-5&&puntosXSelect3[0]<=puntoX3[16]+5&&puntosYSelect3[0]>=puntoY3[16]-5&&puntosYSelect3[0]<=puntoY3[16]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;	
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;	
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;	
			}	
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[17]-5&&puntosXSelect3[0]<=puntoX3[17]+5&&puntosYSelect3[0]>=puntoY3[17]-5&&puntosYSelect3[0]<=puntoY3[17]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;	
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;	
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;	
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;	
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}			
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}


		else if(puntosXSelect3[0]>=puntoX3[18]-5&&puntosXSelect3[0]<=puntoX3[18]+5&&puntosYSelect3[0]>=puntoY3[18]-5&&puntosYSelect3[0]<=puntoY3[18]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;	
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;	
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[46]=1;	
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;
				pSelect3[46]=1;	
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}			
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[19]-5&&puntosXSelect3[0]<=puntoX3[19]+5&&puntosYSelect3[0]>=puntoY3[19]-5&&puntosYSelect3[0]<=puntoY3[19]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;	
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;	
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;	
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;
				pSelect3[46]=1;	
				pSelect3[47]=1;
				pSelect3[48]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
				val3 = val3;	
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[49]=1;
				pSelect3[50]=1;
				pSelect3[51]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;	
			}
			else{
				val3++;
			}	
		}

		else if(puntosXSelect3[0]>=puntoX3[20]-5&&puntosXSelect3[0]<=puntoX3[20]+5&&puntosYSelect3[0]>=puntoY3[20]-5&&puntosYSelect3[0]<=puntoY3[20]+5){
			if(puntosXSelect3[1]>=puntoX3[15]-5&&puntosXSelect3[1]<=puntoX3[15]+5&&puntosYSelect3[1]>=puntoY3[15]-5&&puntosYSelect3[1]<=puntoY3[15]+5){
				val3 = val3;	
				pSelect3[31]=1;
				pSelect3[32]=1;
				pSelect3[33]=1;
				pSelect3[34]=1;
				pSelect3[35]=1;
				pSelect3[36]=1;
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[16]-5&&puntosXSelect3[1]<=puntoX3[16]+5&&puntosYSelect3[1]>=puntoY3[16]-5&&puntosYSelect3[1]<=puntoY3[16]+5){
				val3 = val3;	
				pSelect3[37]=1;
				pSelect3[38]=1;
				pSelect3[39]=1;
				pSelect3[40]=1;
				pSelect3[41]=1;
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[17]-5&&puntosXSelect3[1]<=puntoX3[17]+5&&puntosYSelect3[1]>=puntoY3[17]-5&&puntosYSelect3[1]<=puntoY3[17]+5){
				val3 = val3;	
				pSelect3[42]=1;
				pSelect3[43]=1;
				pSelect3[44]=1;
				pSelect3[45]=1;
				pSelect3[46]=1;
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;
			}
			else if(puntosXSelect3[1]>=puntoX3[18]-5&&puntosXSelect3[1]<=puntoX3[18]+5&&puntosYSelect3[1]>=puntoY3[18]-5&&puntosYSelect3[1]<=puntoY3[18]+5){
				val3 = val3;
				pSelect3[46]=1;	
				pSelect3[47]=1;
				pSelect3[48]=1;
				pSelect3[49]=1;
				pSelect3[50]=1;		
			}
			else if(puntosXSelect3[1]>=puntoX3[19]-5&&puntosXSelect3[1]<=puntoX3[19]+5&&puntosYSelect3[1]>=puntoY3[19]-5&&puntosYSelect3[1]<=puntoY3[19]+5){
				val3 = val3;
				pSelect3[49]=1;
				pSelect3[50]=1;	
			}
			else if(puntosXSelect3[1]>=puntoX3[0]-5&&puntosXSelect3[1]<=puntoX3[0]+5&&puntosYSelect3[1]>=puntoY3[0]-5&&puntosYSelect3[1]<=puntoY3[1]+5){
				val3 = val3;
				pSelect3[51]=1;
			}	
			else if(puntosXSelect3[1]>=puntoX3[20]-5&&puntosXSelect3[1]<=puntoX3[20]+5&&puntosYSelect3[1]>=puntoY3[20]-5&&puntosYSelect3[1]<=puntoY3[20]+5){
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
	if(val3==0&&totalPSelect3==52&&totalSelect3==7){
		validar=1;
	}
	else{
		validar =0;
	}

	return validar;
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
					else if(i==5){
						selectCorrect3[1]=1;
					}
					else if(i==7){
						selectCorrect3[2]=1;
					}
					else if(i==9){
						selectCorrect3[3]=1;
					}
					else if(i==11){
						selectCorrect3[4]=1;
					}
					else if(i==12){
						selectCorrect3[5]=1;
					}
					else if(i==15){
						selectCorrect3[6]=1;
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
			console.log(mouseDown);
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
					else if(i==5){
						selectCorrect3[1]=1;
					}
					else if(i==7){
						selectCorrect3[2]=1;
					}
					else if(i==9){
						selectCorrect3[3]=1;
					}
					else if(i==11){
						selectCorrect3[4]=1;
					}
					else if(i==12){
						selectCorrect3[5]=1;
					}
					else if(i==15){
						selectCorrect3[6]=1;
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


			console.log(mouseDown);
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
	selectCorrect3 = [0,0,0,0,0,0,0];
	totalSelect3 = 0;
	pSelect3 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect3 = 0;
	if(puntosXSelect3.length>0){
		document.getElementById("fc3").checked = true;
	}
	else{
		document.getElementById("fc3").checked = false;
	}
});

$('#ultimoF3').on('click', function(){
	pSelect3 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var fin = puntosXSelect3First.length-1;
	for(var i2=0; i2<puntosXSelect3.length; i2++){
		if(puntosXSelect3[fin]>=puntoX3[i2]-5&&puntosXSelect3[fin]<=puntoX3[i2]+5&&puntosYSelect3[fin]>=puntoY3[i2]-5&&puntosYSelect3[fin]<=puntoY3[i2]+5){
			if(i2==0){
				selectCorrect3[0]=0;
			}
			else if(i2==5){
				selectCorrect3[1]=0;
			}
			else if(i2==7){
				selectCorrect3[2]=0;
			}
			else if(i2==9){
				selectCorrect3[3]=0;
			}
			else if(i2==11){
				selectCorrect3[4]=0;
			}
			else if(i2==12){
				selectCorrect3[5]=0;
			}
			else if(i2==15){
				selectCorrect3[6]=0;
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
