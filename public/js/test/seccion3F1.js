var puntosSelec = new Array();

var puntosXSelect = new Array();
var puntosYSelect = new Array();

var puntosXSelectFirst = new Array();
var puntosYSelectFirst = new Array();

var selectCorrect = [0,0,0,0,0,0,0,0,0,0];
var totalSelect = 0;

var pSelect = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect = 0;

var puntoX = [128,155,150,147,142,141,135,132,127,124,120,117,113,109,106,101, 10,20,27,33,42,48,59,67,71,82,91,99,109,116,10,23,39,48,61,70,76,83,87,94,101,105,113,120,62,58,55,54,52,51,47,45,41,47,55,66,77,82,90,97,97,93,88,87,94,101,112,119,115,105,128,128,128,129,127,130,136,144,153,161,171,163,155,141,157  ,162,176,181,187,190,198,203,213,209,206,206,201,202,194,193,192,185,177,170,180,176,171,165,158,149,146,138,143,151,160,167,179,185,192,199,210,217,224,232,237,241,232,222,215,197,190]; 
var puntoY = [134,110,97,85,69,59,44,29,14,32,43,57,67,81,96,108,  123,116,109,102,94,89,79,70,62,53,45,43,30,23,124,120,121,118,114,108,96,87,76,66,55,46,36,25,121,127,130,134,138,139,143,148,152,152,151,146,146,146,141,119,135,143,156,171,161,154,144,137,136,137,115,99,80,64,50,35,138,145,153,160,163,142,141,135,121 , 134,147,147,147,149,153,153,156,149,146,140,138,132,126,118,112,115,113,110,98,90,77,70,58,45,37,25,23,30,39,48,57,62,74,78,92,99,102,109,116,120,120,119,116,115,115];
var stage = document.getElementById('canvas1');
stage.width = 260;
stage.height = 190;

var x1 =0;
var x2 =0;
var y1 =0;
var y2 =0;
var val=0;

var mouseDown = false;
var mouseClick = false;
var ctx = stage.getContext("2d");

function validarF1(){
	var validar = 0;
	for(var i=0; i<puntosXSelectFirst.length-1; i++){
		if(puntosXSelect[0]>=puntoX[0]-5&&puntosXSelect[0]<=puntoX[0]+5&&puntosYSelect[0]>=puntoY[0]-5&&puntosYSelect[0]<=puntoY[0]+5){
			if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
				pSelect[0]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[58]=1;
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
				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
				pSelect[0]=1;
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
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[3]-5&&puntosXSelect[0]<=puntoX[3]+5&&puntosYSelect[0]>=puntoY[3]-5&&puntosYSelect[0]<=puntoY[3]+5){
			if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[4]-5&&puntosXSelect[0]<=puntoX[4]+5&&puntosYSelect[0]>=puntoY[4]-5&&puntosYSelect[0]<=puntoY[4]+5){
			if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
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
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
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
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
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
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				pSelect[27]=1;
				pSelect[28]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
			}
			else{
				val++;
			}	
		}

		else if(puntosXSelect[0]>=puntoX[8]-5&&puntosXSelect[0]<=puntoX[8]+5&&puntosYSelect[0]>=puntoY[8]-5&&puntosYSelect[0]<=puntoY[8]+5){
			if(puntosXSelect[1]>=puntoX[1]-5&&puntosXSelect[1]<=puntoX[1]+5&&puntosYSelect[1]>=puntoY[1]-5&&puntosYSelect[1]<=puntoY[1]+5){
				val = val;

				pSelect[1]=1;
				pSelect[2]=1;
				pSelect[3]=1;
				pSelect[4]=1;
				pSelect[5]=1;
				pSelect[6]=1;
				pSelect[7]=1;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[2]-5&&puntosXSelect[1]<=puntoX[2]+5&&puntosYSelect[1]>=puntoY[2]-5&&puntosYSelect[1]<=puntoY[2]+5){
				val = val;
				pSelect[8]=1;
				pSelect[9]=1;
				pSelect[10]=1;
				pSelect[11]=1;
				pSelect[12]=1;
				pSelect[13]=1;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[3]-5&&puntosXSelect[1]<=puntoX[3]+5&&puntosYSelect[1]>=puntoY[3]-5&&puntosYSelect[1]<=puntoY[3]+5){
				val = val;
				pSelect[14]=1;
				pSelect[15]=1;
				pSelect[16]=1;
				pSelect[17]=1;
				pSelect[18]=1;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[4]-5&&puntosXSelect[1]<=puntoX[4]+5&&puntosYSelect[1]>=puntoY[4]-5&&puntosYSelect[1]<=puntoY[4]+5){
				val = val;
				pSelect[19]=1;
				pSelect[20]=1;
				pSelect[21]=1;
				pSelect[22]=1;
				pSelect[23]=1;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[5]-5&&puntosXSelect[1]<=puntoX[5]+5&&puntosYSelect[1]>=puntoY[5]-5&&puntosYSelect[1]<=puntoY[5]+5){
				val = val;
				pSelect[24]=1;
				pSelect[25]=1;
				pSelect[26]=1;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[6]-5&&puntosXSelect[1]<=puntoX[6]+5&&puntosYSelect[1]>=puntoY[6]-5&&puntosYSelect[1]<=puntoY[6]+5){
				val = val;
				pSelect[27]=1;
				pSelect[28]=1;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[7]-5&&puntosXSelect[1]<=puntoX[7]+5&&puntosYSelect[1]>=puntoY[7]-5&&puntosYSelect[1]<=puntoY[7]+5){
				val = val;
				pSelect[29]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;

			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[9]-5&&puntosXSelect[0]<=puntoX[9]+5&&puntosYSelect[0]>=puntoY[9]-5&&puntosYSelect[0]<=puntoY[9]+5){
			if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
			}
			else{
				val++;
			}	
		}


		else if(puntosXSelect[0]>=puntoX[10]-5&&puntosXSelect[0]<=puntoX[10]+5&&puntosYSelect[0]>=puntoY[10]-5&&puntosYSelect[0]<=puntoY[10]+5){
			if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
			}
			else{
				val++;
			}
		}
		else if(puntosXSelect[0]>=puntoX[11]-5&&puntosXSelect[0]<=puntoX[11]+5&&puntosYSelect[0]>=puntoY[11]-5&&puntosYSelect[0]<=puntoY[11]+5){
			if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
			}
			
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[12]-5&&puntosXSelect[0]<=puntoX[12]+5&&puntosYSelect[0]>=puntoY[12]-5&&puntosYSelect[0]<=puntoY[12]+5){
			if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
			}
			else{
				val++;
			}		
		}
		else if(puntosXSelect[0]>=puntoX[13]-5&&puntosXSelect[0]<=puntoX[13]+5&&puntosYSelect[0]>=puntoY[13]-5&&puntosYSelect[0]<=puntoY[13]+5){
			if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
			}

			else{
				val++;
			}		
		}
		else if(puntosXSelect[0]>=puntoX[14]-5&&puntosXSelect[0]<=puntoX[14]+5&&puntosYSelect[0]>=puntoY[14]-5&&puntosYSelect[0]<=puntoY[14]+5){
			if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
				val = val;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[55]=1;
				pSelect[56]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
			}
			else{
				val++;
			}	
		}
		else if(puntosXSelect[0]>=puntoX[15]-5&&puntosXSelect[0]<=puntoX[15]+5&&puntosYSelect[0]>=puntoY[15]-5&&puntosYSelect[0]<=puntoY[15]+5){

			if(puntosXSelect[1]>=puntoX[0]-5&&puntosXSelect[1]<=puntoX[0]+5&&puntosYSelect[1]>=puntoY[0]-5&&puntosYSelect[1]<=puntoY[0]+5){
				val = val;
				pSelect[58]=1;
			}

			else if(puntosXSelect[1]>=puntoX[8]-5&&puntosXSelect[1]<=puntoX[8]+5&&puntosYSelect[1]>=puntoY[8]-5&&puntosYSelect[1]<=puntoY[8]+5){
				val = val;
				pSelect[30]=1;
				pSelect[31]=1;
				pSelect[32]=1;
				pSelect[33]=1;
				pSelect[34]=1;
				pSelect[35]=1;
				pSelect[36]=1;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[9]-5&&puntosXSelect[1]<=puntoX[9]+5&&puntosYSelect[1]>=puntoY[9]-5&&puntosYSelect[1]<=puntoY[9]+5){
				val = val;
				pSelect[37]=1;
				pSelect[38]=1;
				pSelect[39]=1;
				pSelect[40]=1;
				pSelect[41]=1;
				pSelect[42]=1;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[10]-5&&puntosXSelect[1]<=puntoX[10]+5&&puntosYSelect[1]>=puntoY[10]-5&&puntosYSelect[1]<=puntoY[10]+5){
				val = val;
				pSelect[43]=1;
				pSelect[44]=1;
				pSelect[45]=1;
				pSelect[46]=1;
				pSelect[47]=1;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[11]-5&&puntosXSelect[1]<=puntoX[11]+5&&puntosYSelect[1]>=puntoY[11]-5&&puntosYSelect[1]<=puntoY[11]+5){
				val = val;
				pSelect[48]=1;
				pSelect[49]=1;
				pSelect[50]=1;
				pSelect[51]=1;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[12]-5&&puntosXSelect[1]<=puntoX[12]+5&&puntosYSelect[1]>=puntoY[12]-5&&puntosYSelect[1]<=puntoY[12]+5){
				val = val;
				pSelect[52]=1;
				pSelect[53]=1;
				pSelect[54]=1;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[13]-5&&puntosXSelect[1]<=puntoX[13]+5&&puntosYSelect[1]>=puntoY[13]-5&&puntosYSelect[1]<=puntoY[13]+5){
				val = val;
				pSelect[55]=1;
				pSelect[56]=1;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[14]-5&&puntosXSelect[1]<=puntoX[14]+5&&puntosYSelect[1]>=puntoY[14]-5&&puntosYSelect[1]<=puntoY[14]+5){
				val = val;
				pSelect[57]=1;
			}
			else if(puntosXSelect[1]>=puntoX[15]-5&&puntosXSelect[1]<=puntoX[15]+5&&puntosYSelect[1]>=puntoY[15]-5&&puntosYSelect[1]<=puntoY[15]+5){
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

	if(val==0&& totalPSelect==59&& totalSelect==4){
		validar=1;
	}
	else{
		validar=0;
	}
	console.log(val + " - " + totalPSelect + " - " +totalSelect);
	return validar;

}

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
			console.log(x2+ " - "+ y2);
			for(var i=0; i<puntoY.length; i++){
				if(x2>=puntoX[i]-5&&x2<=puntoX[i]+5&&y2>=puntoY[i]-5&&y2<=puntoY[i]+5){
					if(i==0){
						selectCorrect[0]=1;
					}
					else if(i==1){
						selectCorrect[1]=1;
					}
					else if(i==8){
						selectCorrect[2]=1;
					}
					else if(i==15){
						selectCorrect[3]=1;
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
			console.log(puntoY.length + " "+puntoX.length + "g");
		}
		else{
			x1 = axi.x;
			y1 = axi.y;
			console.log(x1+ " - "+ y1);
			for(var i=0; i<puntoY.length; i++){
				if(x1>=puntoX[i]-5&&x1<=puntoX[i]+5&&y1>=puntoY[i]-5&&y1<=puntoY[i]+5){
					if(i==0){
						selectCorrect[0]=1;
					}
					else if(i==1){
						selectCorrect[1]=1;
					}
					else if(i==8){
						selectCorrect[2]=1;
					}
					else if(i==15){
						selectCorrect[3]=1;
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
			

			console.log(mouseDown);
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
	console.log(puntoY.length + " "+puntoX.length + "g");
});


});
