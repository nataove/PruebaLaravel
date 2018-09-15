var puntosSelec5 = new Array();

var puntosXSelect5T = new Array();
var puntosYSelect5T = new Array();

var puntosXSelect5TFirst = [];
var puntosYSelect5TFirst = [];
var cant5Select = 0;

var puntosXSelect5 = new Array();
var puntosYSelect5 = new Array();

var puntosXSelect5First = new Array();
var puntosYSelect5First = new Array();

var puntoX51 = [35,33,54,74,97,118,138,136,118,96,95,74,74,54,14,14,14,14,33,55,75,97,116,137,136,136,136,118,118,117,34,33,33,24,44,65,83,106,127,125,127,127,127,106,87,64,43,24,21,21,23];
var puntoY51 = [33,14,14,14,14,13,13,33,33,33,91,91,33,33,54,74,90,109,109,109,109,109,109,110,91,73,53,53,73,90,90,73,54,22,22,22,23,23,23,43,63,82,101,102,102,102,103,102,82,64,43];

var selectCorrect51 = [0,0,0,0,0,0,0,0];
var totalSelect51 = 0;

var pSelect51 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect51 = 0;

var puntosX2Select5 = new Array();
var puntosY2Select5 = new Array();

var puntosX2Select5First = new Array();
var puntosY2Select5First = new Array();

var puntoX52 = [14, 12, 33, 54, 74, 97, 118  ,118,  96,  74,  74,  52,  54,  35];
var puntoY52 = [33, 13, 14, 14, 14, 14, 13,   33,  33,  33,  91,  91,  33,  33];

var selectCorrect52 = [0,0,0,0,0,0,0,0];
var totalSelect52 = 0;

var pSelect52 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect52 = 0;

var stage5 = document.getElementById('canvas5');
stage5.width = 150;
stage5.height = 120;

var x15 =0;
var x25 =0;
var y15 =0;
var y25 =0;
var val5=0;
var val52=0;

var mouseDown5 = false;
var mouseClick5 = false;
var ctx5 = stage5.getContext("2d");
function validarF5(){
	var validar=0;

	//Val5 1
	for(var i=0; i<puntosXSelect5First.length-1; i++){
		if(puntosXSelect5[0]>=puntoX51[0]-5&&puntosXSelect5[0]<=puntoX51[0]+5&&puntosYSelect5[0]>=puntoY51[0]-5&&puntosYSelect5[0]<=puntoY51[0]+5){
			if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[0]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[12]-5&&puntosXSelect5[1]<=puntoX51[12]+5&&puntosYSelect5[1]>=puntoY51[12]-5&&puntosYSelect5[1]<=puntoY51[12]+5){
				val5 = val5;
				pSelect51[24]=1;
				pSelect51[25]=1;
				pSelect51[23]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[13]-5&&puntosXSelect5[1]<=puntoX51[13]+5&&puntosYSelect5[1]>=puntoY51[13]-5&&puntosYSelect5[1]<=puntoY51[13]+5){
				val5 = val5;
				pSelect51[25]=1;
				pSelect51[24]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[0]-5&&puntosXSelect5[1]<=puntoX51[0]+5&&puntosYSelect5[1]>=puntoY51[0]-5&&puntosYSelect5[1]<=puntoY51[0]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[1]-5&&puntosXSelect5[0]<=puntoX51[1]+5&&puntosYSelect5[0]>=puntoY51[1]-5&&puntosYSelect5[0]<=puntoY51[1]+5){
			if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;

			}
			else if(puntosXSelect5[1]>=puntoX51[0]-5&&puntosXSelect5[1]<=puntoX51[0]+5&&puntosYSelect5[1]>=puntoY51[0]-5&&puntosYSelect5[1]<=puntoY51[0]+5){
				val5 = val5;
				pSelect51[0]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[2]-5&&puntosXSelect5[0]<=puntoX51[2]+5&&puntosYSelect5[0]>=puntoY51[2]-5&&puntosYSelect5[0]<=puntoY51[2]+5){
			if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[3]-5&&puntosXSelect5[0]<=puntoX51[3]+5&&puntosYSelect5[0]>=puntoY51[3]-5&&puntosYSelect5[0]<=puntoY51[3]+5){
			if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[4]-5&&puntosXSelect5[0]<=puntoX51[4]+5&&puntosYSelect5[0]>=puntoY51[4]-5&&puntosYSelect5[0]<=puntoY51[4]+5){
			if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[5]-5&&puntosXSelect5[0]<=puntoX51[5]+5&&puntosYSelect5[0]>=puntoY51[5]-5&&puntosYSelect5[0]<=puntoY51[5]+5){
			if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[6]-5&&puntosXSelect5[0]<=puntoX51[6]+5&&puntosYSelect5[0]>=puntoY51[6]-5&&puntosYSelect5[0]<=puntoY51[6]+5){
			if(puntosXSelect5[1]>=puntoX51[7]-5&&puntosXSelect5[1]<=puntoX51[7]+5&&puntosYSelect5[1]>=puntoY51[7]-5&&puntosYSelect5[1]<=puntoY51[7]+5){
				val5 = val5;
				pSelect51[16]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[5]-5&&puntosXSelect5[1]<=puntoX51[5]+5&&puntosYSelect5[1]>=puntoY51[5]-5&&puntosYSelect5[1]<=puntoY51[5]+5){
				val5 = val5;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[4]-5&&puntosXSelect5[1]<=puntoX51[4]+5&&puntosYSelect5[1]>=puntoY51[4]-5&&puntosYSelect5[1]<=puntoY51[4]+5){
				val5 = val5;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[3]-5&&puntosXSelect5[1]<=puntoX51[3]+5&&puntosYSelect5[1]>=puntoY51[3]-5&&puntosYSelect5[1]<=puntoY51[3]+5){
				val5 = val5;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[2]-5&&puntosXSelect5[1]<=puntoX51[2]+5&&puntosYSelect5[1]>=puntoY51[2]-5&&puntosYSelect5[1]<=puntoY51[2]+5){
				val5 = val5;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[1]-5&&puntosXSelect5[1]<=puntoX51[1]+5&&puntosYSelect5[1]>=puntoY51[1]-5&&puntosYSelect5[1]<=puntoY51[1]+5){
				val5 = val5;
				pSelect51[1]=1;
				pSelect51[2]=1;
				pSelect51[3]=1;
				pSelect51[4]=1;
				pSelect51[5]=1;
				pSelect51[6]=1;
				pSelect51[7]=1;
				pSelect51[8]=1;
				pSelect51[9]=1;
				pSelect51[10]=1;
				pSelect51[11]=1;
				pSelect51[12]=1;
				pSelect51[13]=1;
				pSelect51[14]=1;
				pSelect51[15]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		
		else if(puntosXSelect5[0]>=puntoX51[7]-5&&puntosXSelect5[0]<=puntoX51[7]+5&&puntosYSelect5[0]>=puntoY51[7]-5&&puntosYSelect5[0]<=puntoY51[7]+5){
			if(puntosXSelect5[1]>=puntoX51[8]-5&&puntosXSelect5[1]<=puntoX51[8]+5&&puntosYSelect5[1]>=puntoY51[8]-5&&puntosYSelect5[1]<=puntoY51[8]+5){
				val5 = val5;
				pSelect51[17]=1;
				pSelect51[18]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[6]-5&&puntosXSelect5[1]<=puntoX51[6]+5&&puntosYSelect5[1]>=puntoY51[6]-5&&puntosYSelect5[1]<=puntoY51[6]+5){
				val5 = val5;
				pSelect51[16]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[9]-5&&puntosXSelect5[1]<=puntoX51[9]+5&&puntosYSelect5[1]>=puntoY51[9]-5&&puntosYSelect5[1]<=puntoY51[9]+5){
				val5 = val5;
				pSelect51[18]=1;
				pSelect51[17]=1;
				pSelect51[19]=1;
			}

			else if(puntosXSelect5[1]>=puntoX51[7]-5&&puntosXSelect5[1]<=puntoX51[7]+5&&puntosYSelect5[1]>=puntoY51[7]-5&&puntosYSelect5[1]<=puntoY51[7]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}

		else if(puntosXSelect5[0]>=puntoX51[8]-5&&puntosXSelect5[0]<=puntoX51[8]+5&&puntosYSelect5[0]>=puntoY51[8]-5&&puntosYSelect5[0]<=puntoY51[8]+5){
			if(puntosXSelect5[1]>=puntoX51[9]-5&&puntosXSelect5[1]<=puntoX51[9]+5&&puntosYSelect5[1]>=puntoY51[9]-5&&puntosYSelect5[1]<=puntoY51[9]+5){
				val5 = val5;
				pSelect51[19]=1;
				pSelect51[18]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[7]-5&&puntosXSelect5[1]<=puntoX51[7]+5&&puntosYSelect5[1]>=puntoY51[7]-5&&puntosYSelect5[1]<=puntoY51[7]+5){
				val5 = val5;
				pSelect51[17]=1;
				pSelect51[18]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[8]-5&&puntosXSelect5[1]<=puntoX51[8]+5&&puntosYSelect5[1]>=puntoY51[8]-5&&puntosYSelect5[1]<=puntoY51[8]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[9]-5&&puntosXSelect5[0]<=puntoX51[9]+5&&puntosYSelect5[0]>=puntoY51[9]-5&&puntosYSelect5[0]<=puntoY51[9]+5){
			if(puntosXSelect5[1]>=puntoX51[10]-5&&puntosXSelect5[1]<=puntoX51[10]+5&&puntosYSelect5[1]>=puntoY51[10]-5&&puntosYSelect5[1]<=puntoY51[10]+5){
				val5 = val5;
				pSelect51[20]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[8]-5&&puntosXSelect5[1]<=puntoX51[8]+5&&puntosYSelect5[1]>=puntoY51[8]-5&&puntosYSelect5[1]<=puntoY51[8]+5){
				val5 = val5;
				pSelect51[19]=1;
				pSelect51[18]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[7]-5&&puntosXSelect5[1]<=puntoX51[7]+5&&puntosYSelect5[1]>=puntoY51[7]-5&&puntosYSelect5[1]<=puntoY51[7]+5){
				val5 = val5;
				pSelect51[18]=1;
				pSelect51[19]=1;
				pSelect51[17]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[9]-5&&puntosXSelect5[1]<=puntoX51[9]+5&&puntosYSelect5[1]>=puntoY51[9]-5&&puntosYSelect5[1]<=puntoY51[9]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[10]-5&&puntosXSelect5[0]<=puntoX51[10]+5&&puntosYSelect5[0]>=puntoY51[10]-5&&puntosYSelect5[0]<=puntoY51[10]+5){
			if(puntosXSelect5[1]>=puntoX51[9]-5&&puntosXSelect5[1]<=puntoX51[9]+5&&puntosYSelect5[1]>=puntoY51[9]-5&&puntosYSelect5[1]<=puntoY51[9]+5){
				val5 = val5;
				pSelect51[20]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[11]-5&&puntosXSelect5[1]<=puntoX51[11]+5&&puntosYSelect5[1]>=puntoY51[11]-5&&puntosYSelect5[1]<=puntoY51[11]+5){
				val5 = val5;
				pSelect51[21]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[10]-5&&puntosXSelect5[1]<=puntoX51[10]+5&&puntosYSelect5[1]>=puntoY51[10]-5&&puntosYSelect5[1]<=puntoY51[10]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[11]-5&&puntosXSelect5[0]<=puntoX51[11]+5&&puntosYSelect5[0]>=puntoY51[11]-5&&puntosYSelect5[0]<=puntoY51[11]+5){
			if(puntosXSelect5[1]>=puntoX51[12]-5&&puntosXSelect5[1]<=puntoX51[12]+5&&puntosYSelect5[1]>=puntoY51[12]-5&&puntosYSelect5[1]<=puntoY51[12]+5){
				val5 = val5;
				pSelect51[22]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[10]-5&&puntosXSelect5[1]<=puntoX51[10]+5&&puntosYSelect5[1]>=puntoY51[10]-5&&puntosYSelect5[1]<=puntoY51[10]+5){
				val5 = val5;
				pSelect51[21]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[11]-5&&puntosXSelect5[1]<=puntoX51[11]+5&&puntosYSelect5[1]>=puntoY51[11]-5&&puntosYSelect5[1]<=puntoY51[11]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}
		else if(puntosXSelect5[0]>=puntoX51[12]-5&&puntosXSelect5[0]<=puntoX51[12]+5&&puntosYSelect5[0]>=puntoY51[12]-5&&puntosYSelect5[0]<=puntoY51[12]+5){
			if(puntosXSelect5[1]>=puntoX51[13]-5&&puntosXSelect5[1]<=puntoX51[13]+5&&puntosYSelect5[1]>=puntoY51[13]-5&&puntosYSelect5[1]<=puntoY51[13]+5){
				val5 = val5;
				pSelect51[23]=1;
				pSelect51[24]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[0]-5&&puntosXSelect5[1]<=puntoX51[0]+5&&puntosYSelect5[1]>=puntoY51[0]-5&&puntosYSelect5[1]<=puntoY51[0]+5){
				val5 = val5;
				pSelect51[23]=1;
				pSelect51[24]=1;
				pSelect51[25]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[11]-5&&puntosXSelect5[1]<=puntoX51[11]+5&&puntosYSelect5[1]>=puntoY51[11]-5&&puntosYSelect5[1]<=puntoY51[11]+5){
				val5 = val5;
				pSelect51[22]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[12]-5&&puntosXSelect5[1]<=puntoX51[12]+5&&puntosYSelect5[1]>=puntoY51[12]-5&&puntosYSelect5[1]<=puntoY51[12]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}

		else if(puntosXSelect5[0]>=puntoX51[13]-5&&puntosXSelect5[0]<=puntoX51[13]+5&&puntosYSelect5[0]>=puntoY51[13]-5&&puntosYSelect5[0]<=puntoY51[13]+5){
			if(puntosXSelect5[1]>=puntoX51[0]-5&&puntosXSelect5[1]<=puntoX51[0]+5&&puntosYSelect5[1]>=puntoY51[0]-5&&puntosYSelect5[1]<=puntoY51[0]+5){
				val5 = val5;
				pSelect51[25]=1;
				pSelect51[24]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[12]-5&&puntosXSelect5[1]<=puntoX51[12]+5&&puntosYSelect5[1]>=puntoY51[12]-5&&puntosYSelect5[1]<=puntoY51[12]+5){
				val5 = val5;
				pSelect51[23]=1;
				pSelect51[24]=1;
			}
			else if(puntosXSelect5[1]>=puntoX51[13]-5&&puntosXSelect5[1]<=puntoX51[13]+5&&puntosYSelect5[1]>=puntoY51[13]-5&&puntosYSelect5[1]<=puntoY51[13]+5){
				val5 = val5;
			}
			else{
				val5++;
			}	
		}


		else {
			val5++;
		}
		puntosXSelect5.splice(0, 1);
		puntosYSelect5.splice(0, 1);
		
	}

	for(var k=0; k<pSelect51.length; k++){
		totalPSelect51 = totalPSelect51+pSelect51[k];
	}
	for(var j=0; j<selectCorrect51.length; j++){
		totalSelect51 =  totalSelect51+ selectCorrect51[j];
	}


///Val52 1
for(var i=0; i<puntosX2Select5First.length-1; i++){
	if(puntosX2Select5[0]>=puntoX52[0]-5&&puntosX2Select5[0]<=puntoX52[0]+5&&puntosY2Select5[0]>=puntoY52[0]-5&&puntosY2Select5[0]<=puntoY52[0]+5){
		if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[0]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[12]-5&&puntosX2Select5[1]<=puntoX52[12]+5&&puntosY2Select5[1]>=puntoY52[12]-5&&puntosY2Select5[1]<=puntoY52[12]+5){
			val52 = val52;
			pSelect52[24]=1;
			pSelect52[25]=1;
			pSelect52[23]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[13]-5&&puntosX2Select5[1]<=puntoX52[13]+5&&puntosY2Select5[1]>=puntoY52[13]-5&&puntosY2Select5[1]<=puntoY52[13]+5){
			val52 = val52;
			pSelect52[25]=1;
			pSelect52[24]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[0]-5&&puntosX2Select5[1]<=puntoX52[0]+5&&puntosY2Select5[1]>=puntoY52[0]-5&&puntosY2Select5[1]<=puntoY52[0]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[1]-5&&puntosX2Select5[0]<=puntoX52[1]+5&&puntosY2Select5[0]>=puntoY52[1]-5&&puntosY2Select5[0]<=puntoY52[1]+5){
		if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;

		}
		else if(puntosX2Select5[1]>=puntoX52[0]-5&&puntosX2Select5[1]<=puntoX52[0]+5&&puntosY2Select5[1]>=puntoY52[0]-5&&puntosY2Select5[1]<=puntoY52[0]+5){
			val52 = val52;
			pSelect52[0]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[2]-5&&puntosX2Select5[0]<=puntoX52[2]+5&&puntosY2Select5[0]>=puntoY52[2]-5&&puntosY2Select5[0]<=puntoY52[2]+5){
		if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[3]-5&&puntosX2Select5[0]<=puntoX52[3]+5&&puntosY2Select5[0]>=puntoY52[3]-5&&puntosY2Select5[0]<=puntoY52[3]+5){
		if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[4]-5&&puntosX2Select5[0]<=puntoX52[4]+5&&puntosY2Select5[0]>=puntoY52[4]-5&&puntosY2Select5[0]<=puntoY52[4]+5){
		if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[5]-5&&puntosX2Select5[0]<=puntoX52[5]+5&&puntosY2Select5[0]>=puntoY52[5]-5&&puntosY2Select5[0]<=puntoY52[5]+5){
		if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[6]-5&&puntosX2Select5[0]<=puntoX52[6]+5&&puntosY2Select5[0]>=puntoY52[6]-5&&puntosY2Select5[0]<=puntoY52[6]+5){
		if(puntosX2Select5[1]>=puntoX52[7]-5&&puntosX2Select5[1]<=puntoX52[7]+5&&puntosY2Select5[1]>=puntoY52[7]-5&&puntosY2Select5[1]<=puntoY52[7]+5){
			val52 = val52;
			pSelect52[16]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[5]-5&&puntosX2Select5[1]<=puntoX52[5]+5&&puntosY2Select5[1]>=puntoY52[5]-5&&puntosY2Select5[1]<=puntoY52[5]+5){
			val52 = val52;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[4]-5&&puntosX2Select5[1]<=puntoX52[4]+5&&puntosY2Select5[1]>=puntoY52[4]-5&&puntosY2Select5[1]<=puntoY52[4]+5){
			val52 = val52;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[3]-5&&puntosX2Select5[1]<=puntoX52[3]+5&&puntosY2Select5[1]>=puntoY52[3]-5&&puntosY2Select5[1]<=puntoY52[3]+5){
			val52 = val52;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[2]-5&&puntosX2Select5[1]<=puntoX52[2]+5&&puntosY2Select5[1]>=puntoY52[2]-5&&puntosY2Select5[1]<=puntoY52[2]+5){
			val52 = val52;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[1]-5&&puntosX2Select5[1]<=puntoX52[1]+5&&puntosY2Select5[1]>=puntoY52[1]-5&&puntosY2Select5[1]<=puntoY52[1]+5){
			val52 = val52;
			pSelect52[1]=1;
			pSelect52[2]=1;
			pSelect52[3]=1;
			pSelect52[4]=1;
			pSelect52[5]=1;
			pSelect52[6]=1;
			pSelect52[7]=1;
			pSelect52[8]=1;
			pSelect52[9]=1;
			pSelect52[10]=1;
			pSelect52[11]=1;
			pSelect52[12]=1;
			pSelect52[13]=1;
			pSelect52[14]=1;
			pSelect52[15]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	
	else if(puntosX2Select5[0]>=puntoX52[7]-5&&puntosX2Select5[0]<=puntoX52[7]+5&&puntosY2Select5[0]>=puntoY52[7]-5&&puntosY2Select5[0]<=puntoY52[7]+5){
		if(puntosX2Select5[1]>=puntoX52[8]-5&&puntosX2Select5[1]<=puntoX52[8]+5&&puntosY2Select5[1]>=puntoY52[8]-5&&puntosY2Select5[1]<=puntoY52[8]+5){
			val52 = val52;
			pSelect52[17]=1;
			pSelect52[18]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[6]-5&&puntosX2Select5[1]<=puntoX52[6]+5&&puntosY2Select5[1]>=puntoY52[6]-5&&puntosY2Select5[1]<=puntoY52[6]+5){
			val52 = val52;
			pSelect52[16]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[9]-5&&puntosX2Select5[1]<=puntoX52[9]+5&&puntosY2Select5[1]>=puntoY52[9]-5&&puntosY2Select5[1]<=puntoY52[9]+5){
			val52 = val52;
			pSelect52[18]=1;
			pSelect52[17]=1;
			pSelect52[19]=1;
		}

		else if(puntosX2Select5[1]>=puntoX52[7]-5&&puntosX2Select5[1]<=puntoX52[7]+5&&puntosY2Select5[1]>=puntoY52[7]-5&&puntosY2Select5[1]<=puntoY52[7]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}

	else if(puntosX2Select5[0]>=puntoX52[8]-5&&puntosX2Select5[0]<=puntoX52[8]+5&&puntosY2Select5[0]>=puntoY52[8]-5&&puntosY2Select5[0]<=puntoY52[8]+5){
		if(puntosX2Select5[1]>=puntoX52[9]-5&&puntosX2Select5[1]<=puntoX52[9]+5&&puntosY2Select5[1]>=puntoY52[9]-5&&puntosY2Select5[1]<=puntoY52[9]+5){
			val52 = val52;
			pSelect52[19]=1;
			pSelect52[18]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[7]-5&&puntosX2Select5[1]<=puntoX52[7]+5&&puntosY2Select5[1]>=puntoY52[7]-5&&puntosY2Select5[1]<=puntoY52[7]+5){
			val52 = val52;
			pSelect52[17]=1;
			pSelect52[18]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[8]-5&&puntosX2Select5[1]<=puntoX52[8]+5&&puntosY2Select5[1]>=puntoY52[8]-5&&puntosY2Select5[1]<=puntoY52[8]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[9]-5&&puntosX2Select5[0]<=puntoX52[9]+5&&puntosY2Select5[0]>=puntoY52[9]-5&&puntosY2Select5[0]<=puntoY52[9]+5){
		if(puntosX2Select5[1]>=puntoX52[10]-5&&puntosX2Select5[1]<=puntoX52[10]+5&&puntosY2Select5[1]>=puntoY52[10]-5&&puntosY2Select5[1]<=puntoY52[10]+5){
			val52 = val52;
			pSelect52[20]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[8]-5&&puntosX2Select5[1]<=puntoX52[8]+5&&puntosY2Select5[1]>=puntoY52[8]-5&&puntosY2Select5[1]<=puntoY52[8]+5){
			val52 = val52;
			pSelect52[19]=1;
			pSelect52[18]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[7]-5&&puntosX2Select5[1]<=puntoX52[7]+5&&puntosY2Select5[1]>=puntoY52[7]-5&&puntosY2Select5[1]<=puntoY52[7]+5){
			val52 = val52;
			pSelect52[18]=1;
			pSelect52[19]=1;
			pSelect52[17]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[9]-5&&puntosX2Select5[1]<=puntoX52[9]+5&&puntosY2Select5[1]>=puntoY52[9]-5&&puntosY2Select5[1]<=puntoY52[9]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[10]-5&&puntosX2Select5[0]<=puntoX52[10]+5&&puntosY2Select5[0]>=puntoY52[10]-5&&puntosY2Select5[0]<=puntoY52[10]+5){
		if(puntosX2Select5[1]>=puntoX52[9]-5&&puntosX2Select5[1]<=puntoX52[9]+5&&puntosY2Select5[1]>=puntoY52[9]-5&&puntosY2Select5[1]<=puntoY52[9]+5){
			val52 = val52;
			pSelect52[20]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[11]-5&&puntosX2Select5[1]<=puntoX52[11]+5&&puntosY2Select5[1]>=puntoY52[11]-5&&puntosY2Select5[1]<=puntoY52[11]+5){
			val52 = val52;
			pSelect52[21]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[10]-5&&puntosX2Select5[1]<=puntoX52[10]+5&&puntosY2Select5[1]>=puntoY52[10]-5&&puntosY2Select5[1]<=puntoY52[10]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[11]-5&&puntosX2Select5[0]<=puntoX52[11]+5&&puntosY2Select5[0]>=puntoY52[11]-5&&puntosY2Select5[0]<=puntoY52[11]+5){
		if(puntosX2Select5[1]>=puntoX52[12]-5&&puntosX2Select5[1]<=puntoX52[12]+5&&puntosY2Select5[1]>=puntoY52[12]-5&&puntosY2Select5[1]<=puntoY52[12]+5){
			val52 = val52;
			pSelect52[22]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[10]-5&&puntosX2Select5[1]<=puntoX52[10]+5&&puntosY2Select5[1]>=puntoY52[10]-5&&puntosY2Select5[1]<=puntoY52[10]+5){
			val52 = val52;
			pSelect52[21]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[11]-5&&puntosX2Select5[1]<=puntoX52[11]+5&&puntosY2Select5[1]>=puntoY52[11]-5&&puntosY2Select5[1]<=puntoY52[11]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}
	else if(puntosX2Select5[0]>=puntoX52[12]-5&&puntosX2Select5[0]<=puntoX52[12]+5&&puntosY2Select5[0]>=puntoY52[12]-5&&puntosY2Select5[0]<=puntoY52[12]+5){
		if(puntosX2Select5[1]>=puntoX52[13]-5&&puntosX2Select5[1]<=puntoX52[13]+5&&puntosY2Select5[1]>=puntoY52[13]-5&&puntosY2Select5[1]<=puntoY52[13]+5){
			val52 = val52;
			pSelect52[23]=1;
			pSelect52[24]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[0]-5&&puntosX2Select5[1]<=puntoX52[0]+5&&puntosY2Select5[1]>=puntoY52[0]-5&&puntosY2Select5[1]<=puntoY52[0]+5){
			val52 = val52;
			pSelect52[23]=1;
			pSelect52[24]=1;
			pSelect52[25]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[11]-5&&puntosX2Select5[1]<=puntoX52[11]+5&&puntosY2Select5[1]>=puntoY52[11]-5&&puntosY2Select5[1]<=puntoY52[11]+5){
			val52 = val52;
			pSelect52[22]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[12]-5&&puntosX2Select5[1]<=puntoX52[12]+5&&puntosY2Select5[1]>=puntoY52[12]-5&&puntosY2Select5[1]<=puntoY52[12]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}

	else if(puntosX2Select5[0]>=puntoX52[13]-5&&puntosX2Select5[0]<=puntoX52[13]+5&&puntosY2Select5[0]>=puntoY52[13]-5&&puntosY2Select5[0]<=puntoY52[13]+5){
		if(puntosX2Select5[1]>=puntoX52[0]-5&&puntosX2Select5[1]<=puntoX52[0]+5&&puntosY2Select5[1]>=puntoY52[0]-5&&puntosY2Select5[1]<=puntoY52[0]+5){
			val52 = val52;
			pSelect52[25]=1;
			pSelect52[24]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[12]-5&&puntosX2Select5[1]<=puntoX52[12]+5&&puntosY2Select5[1]>=puntoY52[12]-5&&puntosY2Select5[1]<=puntoY52[12]+5){
			val52 = val52;
			pSelect52[23]=1;
			pSelect52[24]=1;
		}
		else if(puntosX2Select5[1]>=puntoX52[13]-5&&puntosX2Select5[1]<=puntoX52[13]+5&&puntosY2Select5[1]>=puntoY52[13]-5&&puntosY2Select5[1]<=puntoY52[13]+5){
			val52 = val52;
		}
		else{
			val52++;
		}	
	}


	else {
		val52++;
	}
	puntosX2Select5.splice(0, 1);
	puntosY2Select5.splice(0, 1);
	
}

for(var k=0; k<pSelect52.length; k++){
	totalPSelect52 = totalPSelect52+pSelect52[k];
}

for(var j=0; j<selectCorrect52.length; j++){
	totalSelect52 =  totalSelect52+ selectCorrect52[j];
}

if((val5==0 && totalPSelect51==17&&totalSelect51==8)||(val52==0 && totalPSelect52==17&&totalSelect52==8)){
	validar = 1;
}
else{
	validar = 0;
}
console.log(validar);
console.log(totalPSelect51 + " - "+val5+" - "+totalSelect51);
console.log(totalPSelect52 + " - "+val52+" - "+totalSelect52);
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
		cant5Select = 0;
		if(mouseClick5){
			x25 = axi.x;
			y25 = axi.y;
			console.log(x25+ " - "+ y25);
			for(var i=0; i<puntoY51.length; i++){
				if((x25>=puntoX51[i]-5&&x25<=puntoX51[i]+5&&y25>=puntoY51[i]-5&&y25<=puntoY51[i]+5)){
					if(i==0){
						selectCorrect51[0]=1;
					}
					else if(i==1){
						selectCorrect51[1]=1;
					}
					else if(i==6){
						selectCorrect51[2]=1;
					}
					else if(i==7){
						selectCorrect51[3]=1;
					}
					else if(i==9){
						selectCorrect51[4]=1;
					}
					else if(i==10){
						selectCorrect51[5]=1;
					}
					else if(i==11){
						selectCorrect51[6]=1;
					}
					else if(i==12){
						selectCorrect51[7]=1;
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
					puntosXSelect5.push(x25);
					puntosYSelect5.push(y25);
					puntosXSelect5First.push(x25);
					puntosYSelect5First.push(y25);
					mouseClick5 =true;
					x15 = axi.x;
					y15 = axi.y;
					cant5Select = 1;
				}
			}
			for(var i=0; i<puntoY51.length; i++){
				if(x25>=puntoX52[i]-5&&x25<=puntoX52[i]+5&&y25>=puntoY52[i]-5&&y25<=puntoY52[i]+5){
					if(i==0){
						selectCorrect52[0]=1;
					}
					else if(i==1){
						selectCorrect52[1]=1;
					}
					else if(i==6){
						selectCorrect52[2]=1;
					}
					else if(i==7){
						selectCorrect52[3]=1;
					}
					else if(i==9){
						selectCorrect52[4]=1;
					}
					else if(i==10){
						selectCorrect52[5]=1;
					}
					else if(i==11){
						selectCorrect52[6]=1;
					}
					else if(i==12){
						selectCorrect52[7]=1;
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
					puntosX2Select5.push(x25);
					puntosY2Select5.push(y25);
					puntosX2Select5First.push(x25);
					puntosY2Select5First.push(y25);
					mouseClick5 =true;
					x15 = axi.x;
					y15 = axi.y;
					cant5Select = 1;
				}
			}
			if(cant5Select == 1){
				puntosXSelect5T.push(x25);
				puntosYSelect5T.push(y25);
				puntosXSelect5TFirst.push(x25);
				puntosYSelect5TFirst.push(y25);
			}
			console.log(mouseDown);
		}
		else{
			x15 = axi.x;
			y15 = axi.y;
			console.log(x15+ " - "+ y15);
			for(var i=0; i<puntoY51.length; i++){
				if((x15>=puntoX51[i]-5&&x15<=puntoX51[i]+5&&y15>=puntoY51[i]-5&&y15<=puntoY51[i]+5)){
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
					cant5Select = 1;
				}
				if((x15>=puntoX52[i]-5&&x15<=puntoX52[i]+5&&y15>=puntoY52[i]-5&&y15<=puntoY52[i]+5)){
					mouseClick5 =true;
					var punto = [axi.x, axi.y];
					puntosSelec5.push(punto);
					ctx5.fillStyle = "red";
					ctx5.arc(x15,y15,2,0,2*Math.PI, false);
					ctx5.fill();
					ctx5.closePath();
					puntosX2Select5.push(x15);
					puntosY2Select5.push(y15);
					puntosX2Select5First.push(x15);
					puntosY2Select5First.push(y15);
					cant5Select = 1;
				}
			}
			if(cant5Select == 1){
				puntosXSelect5T.push(x15);
				puntosYSelect5T.push(y15);
				puntosXSelect5TFirst.push(x15);
				puntosYSelect5TFirst.push(y15);
			}
			console.log(mouseDown);
		}
			console.log("hola "+puntosXSelect5TFirst[puntosXSelect5TFirst.length-1] +" - "+ puntosYSelect5TFirst[puntosXSelect5TFirst.length-1]);

		if(puntosXSelect5.length>0 || puntosX2Select5.length>0){
			document.getElementById("fc5").checked = true;
		}
		else{
			document.getElementById("fc5").checked = false;
		}
	}, false);


$('#limpiarF5').on('click', function(){
	mouseClick5=false;
	val5=0;
	val52=0;
	puntosXSelect5.splice(0, puntosXSelect5.length);
	puntosYSelect5.splice(0, puntosYSelect5.length);
	puntosXSelect5First.splice(0, puntosXSelect5First.length);
	puntosYSelect5First.splice(0, puntosYSelect5First.length);

	puntosX2Select5.splice(0, puntosX2Select5.length);
	puntosY2Select5.splice(0, puntosY2Select5.length);
	puntosX2Select5First.splice(0, puntosX2Select5First.length);
	puntosY2Select5First.splice(0, puntosY2Select5First.length);
	selectCorrect51 = [0,0,0,0,0,0,0,0];
	totalSelect51 = 0;
	pSelect51 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect51 = 0;
	selectCorrect52 = [0,0,0,0,0,0,0,0];
	totalSelect52 = 0;
	pSelect52 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect52 = 0;
	if(puntosXSelect5.length>0 || puntosX2Select5.length>0){
		document.getElementById("fc5").checked = true;
	}
	else{
		document.getElementById("fc5").checked = false;
	}
});

$('#ultimoF5').on('click', function(){
	pSelect51 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	pSelect52 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	totalPSelect51 = 0;
	totalPSelect52 = 0;

	var finX = puntosXSelect5TFirst[puntosXSelect5TFirst.length-1];
	var finY = puntosYSelect5TFirst[puntosYSelect5TFirst.length-1];
	var f1=false;
	var f2=false;
	for(var i2=0; i2<puntoX51.length; i2++){
		if((finX>=puntoX51[i2]-5&&finX<=puntoX51[i2]+5&&finY>=puntoY51[i2]-5&&finY<=puntoY51[i2]+5)){
			f1=true;
		}
		if(finX>=puntoX52[i2]-5&&finX<=puntoX52[i2]+5&&finY>=puntoY52[i2]-5&&finY<=puntoY52[i2]+5){
			f2=true;
		}
	}

	puntosXSelect5TFirst.pop();
	puntosYSelect5TFirst.pop();
	puntosXSelect5T.pop();
	puntosYSelect5T.pop();
	if (puntosXSelect5T.length==1) {
		puntosXSelect5TFirst.pop();
	puntosYSelect5TFirst.pop();
	puntosXSelect5T.pop();
	puntosYSelect5T.pop();
	}

	console.log(f1+" "+f2);
	if(f1){
		var fin = puntosXSelect5First.length-1;
		for(var i2=0; i2<puntoY51.length; i2++){
			if(puntosXSelect5[fin]>=puntoX51[i2]-5&&puntosXSelect5[fin]<=puntoX51[i2]+5&&puntosYSelect5[fin]>=puntoY51[i2]-5&&puntosYSelect5[fin]<=puntoY51[i2]+5){
				if(i2==0){
					selectCorrect51[0]=0;
				}
				else if(i2==1){
					selectCorrect51[1]=0;
				}
				else if(i2==2){
					selectCorrect51[2]=0;
				}
				else if(i2==3){
					selectCorrect51[3]=0;
				}
				else if(i2==4){
					selectCorrect51[4]=0;
				}
				else if(i2==5){
					selectCorrect51[5]=0;
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
	}


	if(f2){
		var fin2 = puntosX2Select5First.length-1;
		for(var i2=0; i2<puntoY52.length; i2++){
			if(puntosX2Select5[fin2]>=puntoX52[i2]-5&&puntosX2Select5[fin2]<=puntoX52[i2]+5&&puntosY2Select5[fin2]>=puntoY52[i2]-5&&puntosY2Select5[fin2]<=puntoY52[i2]+5){
				if(i2==0){
					selectCorrect52[0]=0;
				}
				else if(i2==1){
					selectCorrect52[1]=0;
				}
				else if(i2==2){
					selectCorrect52[2]=0;
				}
				else if(i2==3){
					selectCorrect52[3]=0;
				}
				else if(i2==4){
					selectCorrect52[4]=0;
				}
				else if(i2==5){
					selectCorrect52[5]=0;
				}
			}
		}
		puntosX2Select5.pop();
		puntosY2Select5.pop();
		puntosX2Select5First.pop();
		puntosY2Select5First.pop();
		if (puntosX2Select5.length==1) {
			puntosX2Select5.pop();
			puntosY2Select5.pop();

			puntosX2Select5First.pop();
			puntosY2Select5First.pop();
		}
	}
	for(var i=0; i<puntosXSelect5TFirst.length-1; i++){
		ctx5.beginPath();
		ctx5.fillStyle = "red";
		ctx5.arc(puntosXSelect5T[i], puntosYSelect5T[i],1,0,2*Math.PI, false);
		ctx5.fill();
		ctx5.lineTo(puntosXSelect5T[i], puntosYSelect5T[i]);
		ctx5.lineTo(puntosXSelect5T[i+1], puntosYSelect5T[i+1]);
		ctx5.strokeStyle = "red";
		ctx5.lineWidth = 2;
		ctx5.fillStyle = "red";
		ctx5.arc(puntosXSelect5T[i+1], puntosYSelect5T[i+1],1,0,2*Math.PI, false);
		ctx5.fill();
		ctx5.closePath();
		ctx5.stroke();
	}
			x15 = puntosXSelect5TFirst[puntosXSelect5TFirst.length-1];
		y15 = puntosYSelect5TFirst[puntosYSelect5TFirst.length-1];

	console.log(puntosXSelect5First + " - " +puntosYSelect5First);
	if(puntosXSelect5T.length>0){
		document.getElementById("fc5").checked = true;
	}
	else{
		document.getElementById("fc5").checked = false;
	}
});


});
