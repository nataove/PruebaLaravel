var puntosSelec4 = new Array();

var puntosXSelect4T = new Array();
var puntosYSelect4T = new Array();

var puntosXSelect4TFirst = [];
var puntosYSelect4TFirst = [];
var cantSelect1 = 0;

var puntosXSelect4 = new Array();
var puntosYSelect4 = new Array();

var puntosXSelect4First = new Array();
var puntosYSelect4First = new Array();
var selectCorrect41 = [0,0,0,0,0,0,0];
var totalSelect41 = 0;

var pSelect41 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect41 = 0;

var puntoX41 = [14, 39, 63, 110, 88, 66, 114, 111, 90,  66,  63,  15,  15,  16, 110,35];
var puntoY41 = [92, 80, 66, 64,  80, 96, 95,  117, 133, 145, 114, 116, 145, 13, 145,130];

var puntosX2Select4 = new Array();
var puntosY2Select4 = new Array();

var puntosX2Select4First = new Array();
var puntosY2Select4First = new Array();
var selectCorrect42 = [0,0,0,0,0,0,0];
var totalSelect42 = 0;

var pSelect42 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect42 = 0;

var puntoX42 = [15, 39, 64, 111, 89, 62, 111, 110, 88, 66, 63, 15, 14];
var puntoY42 = [43, 28, 13, 13,  27, 41, 41,  64,  80, 96, 66, 64, 92];

var stage4 = document.getElementById('canvas4');
stage4.width = 120;
stage4.height = 160;

var x14 =0;
var x24 =0;
var y14 =0;
var y24 =0;
var val4=0;
var val42=0;

var mouseDown4 = false;
var mouseClick4 = false;
var ctx4 = stage4.getContext("2d");

function validarF4(){
	var validar=0;
	for(var i=0; i<puntosXSelect4First.length-1; i++){
		if(puntosXSelect4[0]>=puntoX41[0]-5&&puntosXSelect4[0]<=puntoX41[0]+5&&puntosYSelect4[0]>=puntoY41[0]-5&&puntosYSelect4[0]<=puntoY41[0]+5){
			if(puntosXSelect4[1]>=puntoX41[1]-5&&puntosXSelect4[1]<=puntoX41[1]+5&&puntosYSelect4[1]>=puntoY41[1]-5&&puntosYSelect4[1]<=puntoY41[1]+5){
				val4 = val4;
				pSelect41[0]=1;
				pSelect41[19]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[2]-5&&puntosXSelect4[1]<=puntoX41[2]+5&&puntosYSelect4[1]>=puntoY41[2]-5&&puntosYSelect4[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[0]=1;
				pSelect41[19]=1;
				pSelect41[1]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[8]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[12]-5&&puntosXSelect4[1]<=puntoX41[12]+5&&puntosYSelect4[1]>=puntoY41[12]-5&&puntosYSelect4[1]<=puntoY41[12]+5){
				val4 = val4;
				pSelect41[17]=1;
				pSelect41[18]=1;
				pSelect41[20]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[11]-5&&puntosXSelect4[1]<=puntoX41[11]+5&&puntosYSelect4[1]>=puntoY41[11]-5&&puntosYSelect4[1]<=puntoY41[11]+5){
				val4 = val4;
				pSelect41[17]=1;
				pSelect41[20]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[1]-5&&puntosXSelect4[0]<=puntoX41[1]+5&&puntosYSelect4[0]>=puntoY41[1]-5&&puntosYSelect4[0]<=puntoY41[1]+5){
			if(puntosXSelect4[1]>=puntoX41[2]-5&&puntosXSelect4[1]<=puntoX41[2]+5&&puntosYSelect4[1]>=puntoY41[2]-5&&puntosYSelect4[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[1]=1;
				pSelect41[19]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[0]=1;
				pSelect41[19]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[1]-5&&puntosXSelect4[1]<=puntoX41[1]+5&&puntosYSelect4[1]>=puntoY41[1]-5&&puntosYSelect4[1]<=puntoY41[1]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[2]-5&&puntosXSelect4[0]<=puntoX41[2]+5&&puntosYSelect4[0]>=puntoY41[2]-5&&puntosYSelect4[0]<=puntoY41[2]+5){
			if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[2]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[1]-5&&puntosXSelect4[1]<=puntoX41[1]+5&&puntosYSelect4[1]>=puntoY41[1]-5&&puntosYSelect4[1]<=puntoY41[1]+5){
				val4 = val4;
				pSelect41[1]=1;
				pSelect41[19]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[0]=1;
				pSelect41[19]=1;
				pSelect41[1]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[2]-5&&puntosXSelect4[1]<=puntoX41[2]+5&&puntosYSelect4[1]>=puntoY41[2]-5&&puntosYSelect4[1]<=puntoY41[2]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[3]-5&&puntosXSelect4[0]<=puntoX41[3]+5&&puntosYSelect4[0]>=puntoY41[3]-5&&puntosYSelect4[0]<=puntoY41[3]+5){
			if(puntosXSelect4[1]>=puntoX41[2]-5&&puntosXSelect4[1]<=puntoX41[2]+5&&puntosYSelect4[1]>=puntoY41[2]-5&&puntosYSelect4[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[2]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[4]-5&&puntosXSelect4[1]<=puntoX41[4]+5&&puntosYSelect4[1]>=puntoY41[4]-5&&puntosYSelect4[1]<=puntoY41[4]+5){
				val4 = val4;
				pSelect41[3]=1;
				pSelect41[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[3]=1;
				pSelect41[4]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[6]-5&&puntosXSelect4[1]<=puntoX41[6]+5&&puntosYSelect4[1]>=puntoY41[6]-5&&puntosYSelect4[1]<=puntoY41[6]+5){
				val4 = val4;
				pSelect41[5]=1;
				pSelect41[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[7]-5&&puntosXSelect4[1]<=puntoX41[7]+5&&puntosYSelect4[1]>=puntoY41[7]-5&&puntosYSelect4[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[5]=1;
				pSelect41[6]=1;
				pSelect41[11]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[4]-5&&puntosXSelect4[0]<=puntoX41[4]+5&&puntosYSelect4[0]>=puntoY41[4]-5&&puntosYSelect4[0]<=puntoY41[4]+5){
			if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[3]=1;
				pSelect41[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[7]=1;
				pSelect41[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[4]-5&&puntosXSelect4[1]<=puntoX41[4]+5&&puntosYSelect4[1]>=puntoY41[4]-5&&puntosYSelect4[1]<=puntoY41[4]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[5]-5&&puntosXSelect4[0]<=puntoX41[5]+5&&puntosYSelect4[0]>=puntoY41[5]-5&&puntosYSelect4[0]<=puntoY41[5]+5){
			if(puntosXSelect4[1]>=puntoX41[4]-5&&puntosXSelect4[1]<=puntoX41[4]+5&&puntosYSelect4[1]>=puntoY41[4]-5&&puntosYSelect4[1]<=puntoY41[4]+5){
				val4 = val4;
				pSelect41[7]=1;
				pSelect41[4]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[3]=1;
				pSelect41[4]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[8]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[9]=1;
				pSelect41[15]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[10]-5&&puntosXSelect4[1]<=puntoX41[10]+5&&puntosYSelect4[1]>=puntoY41[10]-5&&puntosYSelect4[1]<=puntoY41[10]+5){
				val4 = val4;
				pSelect41[9]=1;
				pSelect41[10]=1;
			}

			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[6]-5&&puntosXSelect4[0]<=puntoX41[6]+5&&puntosYSelect4[0]>=puntoY41[6]-5&&puntosYSelect4[0]<=puntoY41[6]+5){
			if(puntosXSelect4[1]>=puntoX41[7]-5&&puntosXSelect4[1]<=puntoX41[7]+5&&puntosYSelect4[1]>=puntoY41[7]-5&&puntosYSelect4[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[11]=1;
				pSelect41[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[5]=1;
				pSelect41[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[6]-5&&puntosXSelect4[1]<=puntoX41[6]+5&&puntosYSelect4[1]>=puntoY41[6]-5&&puntosYSelect4[1]<=puntoY41[6]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		
		else if(puntosXSelect4[0]>=puntoX41[7]-5&&puntosXSelect4[0]<=puntoX41[7]+5&&puntosYSelect4[0]>=puntoY41[7]-5&&puntosYSelect4[0]<=puntoY41[7]+5){
			if(puntosXSelect4[1]>=puntoX41[8]-5&&puntosXSelect4[1]<=puntoX41[8]+5&&puntosYSelect4[1]>=puntoY41[8]-5&&puntosYSelect4[1]<=puntoY41[8]+5){
				val4 = val4;
				pSelect41[12]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[12]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[6]-5&&puntosXSelect4[1]<=puntoX41[6]+5&&puntosYSelect4[1]>=puntoY41[6]-5&&puntosYSelect4[1]<=puntoY41[6]+5){
				val4 = val4;
				pSelect41[11]=1;
				pSelect41[6]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[3]-5&&puntosXSelect4[1]<=puntoX41[3]+5&&puntosYSelect4[1]>=puntoY41[3]-5&&puntosYSelect4[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[5]=1;
				pSelect41[6]=1;
				pSelect41[11]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[7]-5&&puntosXSelect4[1]<=puntoX41[7]+5&&puntosYSelect4[1]>=puntoY41[7]-5&&puntosYSelect4[1]<=puntoY41[7]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}

		else if(puntosXSelect4[0]>=puntoX41[8]-5&&puntosXSelect4[0]<=puntoX41[8]+5&&puntosYSelect4[0]>=puntoY41[8]-5&&puntosYSelect4[0]<=puntoY41[8]+5){
			if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[7]-5&&puntosXSelect4[1]<=puntoX41[7]+5&&puntosYSelect4[1]>=puntoY41[7]-5&&puntosYSelect4[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[12]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[8]-5&&puntosXSelect4[1]<=puntoX41[8]+5&&puntosYSelect4[1]>=puntoY41[8]-5&&puntosYSelect4[1]<=puntoY41[8]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[9]-5&&puntosXSelect4[0]<=puntoX41[9]+5&&puntosYSelect4[0]>=puntoY41[9]-5&&puntosYSelect4[0]<=puntoY41[9]+5){
			if(puntosXSelect4[1]>=puntoX41[7]-5&&puntosXSelect4[1]<=puntoX41[7]+5&&puntosYSelect4[1]>=puntoY41[7]-5&&puntosYSelect4[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[12]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[8]-5&&puntosXSelect4[1]<=puntoX41[8]+5&&puntosYSelect4[1]>=puntoY41[8]-5&&puntosYSelect4[1]<=puntoY41[8]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[13]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[10]-5&&puntosXSelect4[1]<=puntoX41[10]+5&&puntosYSelect4[1]>=puntoY41[10]-5&&puntosYSelect4[1]<=puntoY41[10]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[15]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[9]=1;
				pSelect41[15]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[12]-5&&puntosXSelect4[1]<=puntoX41[12]+5&&puntosYSelect4[1]>=puntoY41[12]-5&&puntosYSelect4[1]<=puntoY41[12]+5){
				val4 = val4;
				pSelect41[16]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}


		else if(puntosXSelect4[0]>=puntoX41[10]-5&&puntosXSelect4[0]<=puntoX41[10]+5&&puntosYSelect4[0]>=puntoY41[10]-5&&puntosYSelect4[0]<=puntoY41[10]+5){
			if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[15]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[5]-5&&puntosXSelect4[1]<=puntoX41[5]+5&&puntosYSelect4[1]>=puntoY41[5]-5&&puntosYSelect4[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[9]=1;
				pSelect41[10]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[10]-5&&puntosXSelect4[1]<=puntoX41[10]+5&&puntosYSelect4[1]>=puntoY41[10]-5&&puntosYSelect4[1]<=puntoY41[10]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect4[0]>=puntoX41[11]-5&&puntosXSelect4[0]<=puntoX41[11]+5&&puntosYSelect4[0]>=puntoY41[11]-5&&puntosYSelect4[0]<=puntoY41[11]+5){
			if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[17]=1;
				pSelect41[20]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[12]-5&&puntosXSelect4[1]<=puntoX41[12]+5&&puntosYSelect4[1]>=puntoY41[12]-5&&puntosYSelect4[1]<=puntoY41[12]+5){
				val4 = val4;
				pSelect41[20]=1;
				pSelect41[18]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[11]-5&&puntosXSelect4[1]<=puntoX41[11]+5&&puntosYSelect4[1]>=puntoY41[11]-5&&puntosYSelect4[1]<=puntoY41[11]+5){
				val4 = val4;
			}
			else{
				val4++;
			}		
		}
		else if(puntosXSelect4[0]>=puntoX41[12]-5&&puntosXSelect4[0]<=puntoX41[12]+5&&puntosYSelect4[0]>=puntoY41[12]-5&&puntosYSelect4[0]<=puntoY41[12]+5){
			if(puntosXSelect4[1]>=puntoX41[0]-5&&puntosXSelect4[1]<=puntoX41[0]+5&&puntosYSelect4[1]>=puntoY41[0]-5&&puntosYSelect4[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[17]=1;
				pSelect41[18]=1;
				pSelect41[20]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[11]-5&&puntosXSelect4[1]<=puntoX41[11]+5&&puntosYSelect4[1]>=puntoY41[11]-5&&puntosYSelect4[1]<=puntoY41[11]+5){
				val4 = val4;
				pSelect41[20]=1;
				pSelect41[18]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[9]-5&&puntosXSelect4[1]<=puntoX41[9]+5&&puntosYSelect4[1]>=puntoY41[9]-5&&puntosYSelect4[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[16]=1;
			}
			else if(puntosXSelect4[1]>=puntoX41[12]-5&&puntosXSelect4[1]<=puntoX41[12]+5&&puntosYSelect4[1]>=puntoY41[12]-5&&puntosYSelect4[1]<=puntoY41[12]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else{
			val4++;
		}
		puntosXSelect4.splice(0, 1);
		puntosYSelect4.splice(0, 1);
		
	}

	for(var k=0; k<pSelect41.length; k++){
		totalPSelect41 = totalPSelect41+pSelect41[k];
	}

	for(var j=0; j<selectCorrect41.length; j++){
		totalSelect41 =  totalSelect41+ selectCorrect41[j];
	}

	console.log(val4 + " "+totalSelect41 + " "+totalPSelect41);

//val
for(var i=0; i<puntosX2Select4First.length-1; i++){
	if(puntosX2Select4[0]>=puntoX42[0]-5&&puntosX2Select4[0]<=puntoX42[0]+5&&puntosY2Select4[0]>=puntoY42[0]-5&&puntosY2Select4[0]<=puntoY42[0]+5){
		if(puntosX2Select4[1]>=puntoX42[1]-5&&puntosX2Select4[1]<=puntoX42[1]+5&&puntosY2Select4[1]>=puntoY42[1]-5&&puntosY2Select4[1]<=puntoY42[1]+5){
			val42 = val42;
			pSelect42[0]=1;
			pSelect42[19]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[2]-5&&puntosX2Select4[1]<=puntoX42[2]+5&&puntosY2Select4[1]>=puntoY42[2]-5&&puntosY2Select4[1]<=puntoY42[2]+5){
			val42 = val42;
			pSelect42[0]=1;
			pSelect42[19]=1;
			pSelect42[1]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
			pSelect42[8]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[12]-5&&puntosX2Select4[1]<=puntoX42[12]+5&&puntosY2Select4[1]>=puntoY42[12]-5&&puntosY2Select4[1]<=puntoY42[12]+5){
			val42 = val42;
			pSelect42[17]=1;
			pSelect42[18]=1;
			pSelect42[20]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[11]-5&&puntosX2Select4[1]<=puntoX42[11]+5&&puntosY2Select4[1]>=puntoY42[11]-5&&puntosY2Select4[1]<=puntoY42[11]+5){
			val42 = val42;
			pSelect42[17]=1;
			pSelect42[20]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[1]-5&&puntosX2Select4[0]<=puntoX42[1]+5&&puntosY2Select4[0]>=puntoY42[1]-5&&puntosY2Select4[0]<=puntoY42[1]+5){
		if(puntosX2Select4[1]>=puntoX42[2]-5&&puntosX2Select4[1]<=puntoX42[2]+5&&puntosY2Select4[1]>=puntoY42[2]-5&&puntosY2Select4[1]<=puntoY42[2]+5){
			val42 = val42;
			pSelect42[1]=1;
			pSelect42[19]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
			pSelect42[0]=1;
			pSelect42[19]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[1]-5&&puntosX2Select4[1]<=puntoX42[1]+5&&puntosY2Select4[1]>=puntoY42[1]-5&&puntosY2Select4[1]<=puntoY42[1]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[2]-5&&puntosX2Select4[0]<=puntoX42[2]+5&&puntosY2Select4[0]>=puntoY42[2]-5&&puntosY2Select4[0]<=puntoY42[2]+5){
		if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
			pSelect42[2]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[1]-5&&puntosX2Select4[1]<=puntoX42[1]+5&&puntosY2Select4[1]>=puntoY42[1]-5&&puntosY2Select4[1]<=puntoY42[1]+5){
			val42 = val42;
			pSelect42[1]=1;
			pSelect42[19]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
			pSelect42[0]=1;
			pSelect42[19]=1;
			pSelect42[1]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[2]-5&&puntosX2Select4[1]<=puntoX42[2]+5&&puntosY2Select4[1]>=puntoY42[2]-5&&puntosY2Select4[1]<=puntoY42[2]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[3]-5&&puntosX2Select4[0]<=puntoX42[3]+5&&puntosY2Select4[0]>=puntoY42[3]-5&&puntosY2Select4[0]<=puntoY42[3]+5){
		if(puntosX2Select4[1]>=puntoX42[2]-5&&puntosX2Select4[1]<=puntoX42[2]+5&&puntosY2Select4[1]>=puntoY42[2]-5&&puntosY2Select4[1]<=puntoY42[2]+5){
			val42 = val42;
			pSelect42[2]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[4]-5&&puntosX2Select4[1]<=puntoX42[4]+5&&puntosY2Select4[1]>=puntoY42[4]-5&&puntosY2Select4[1]<=puntoY42[4]+5){
			val42 = val42;
			pSelect42[3]=1;
			pSelect42[4]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
			pSelect42[3]=1;
			pSelect42[4]=1;
			pSelect42[7]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[6]-5&&puntosX2Select4[1]<=puntoX42[6]+5&&puntosY2Select4[1]>=puntoY42[6]-5&&puntosY2Select4[1]<=puntoY42[6]+5){
			val42 = val42;
			pSelect42[5]=1;
			pSelect42[6]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[7]-5&&puntosX2Select4[1]<=puntoX42[7]+5&&puntosY2Select4[1]>=puntoY42[7]-5&&puntosY2Select4[1]<=puntoY42[7]+5){
			val42 = val42;
			pSelect42[5]=1;
			pSelect42[6]=1;
			pSelect42[11]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[4]-5&&puntosX2Select4[0]<=puntoX42[4]+5&&puntosY2Select4[0]>=puntoY42[4]-5&&puntosY2Select4[0]<=puntoY42[4]+5){
		if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
			pSelect42[3]=1;
			pSelect42[4]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
			pSelect42[7]=1;
			pSelect42[4]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[4]-5&&puntosX2Select4[1]<=puntoX42[4]+5&&puntosY2Select4[1]>=puntoY42[4]-5&&puntosY2Select4[1]<=puntoY42[4]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[5]-5&&puntosX2Select4[0]<=puntoX42[5]+5&&puntosY2Select4[0]>=puntoY42[5]-5&&puntosY2Select4[0]<=puntoY42[5]+5){
		if(puntosX2Select4[1]>=puntoX42[4]-5&&puntosX2Select4[1]<=puntoX42[4]+5&&puntosY2Select4[1]>=puntoY42[4]-5&&puntosY2Select4[1]<=puntoY42[4]+5){
			val42 = val42;
			pSelect42[7]=1;
			pSelect42[4]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
			pSelect42[3]=1;
			pSelect42[4]=1;
			pSelect42[7]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
			pSelect42[8]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
			pSelect42[10]=1;
			pSelect42[9]=1;
			pSelect42[15]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[10]-5&&puntosX2Select4[1]<=puntoX42[10]+5&&puntosY2Select4[1]>=puntoY42[10]-5&&puntosY2Select4[1]<=puntoY42[10]+5){
			val42 = val42;
			pSelect42[9]=1;
			pSelect42[10]=1;
		}

		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[6]-5&&puntosX2Select4[0]<=puntoX42[6]+5&&puntosY2Select4[0]>=puntoY42[6]-5&&puntosY2Select4[0]<=puntoY42[6]+5){
		if(puntosX2Select4[1]>=puntoX42[7]-5&&puntosX2Select4[1]<=puntoX42[7]+5&&puntosY2Select4[1]>=puntoY42[7]-5&&puntosY2Select4[1]<=puntoY42[7]+5){
			val42 = val42;
			pSelect42[11]=1;
			pSelect42[6]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
			pSelect42[5]=1;
			pSelect42[6]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[6]-5&&puntosX2Select4[1]<=puntoX42[6]+5&&puntosY2Select4[1]>=puntoY42[6]-5&&puntosY2Select4[1]<=puntoY42[6]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}

	else if(puntosX2Select4[0]>=puntoX42[7]-5&&puntosX2Select4[0]<=puntoX42[7]+5&&puntosY2Select4[0]>=puntoY42[7]-5&&puntosY2Select4[0]<=puntoY42[7]+5){
		if(puntosX2Select4[1]>=puntoX42[8]-5&&puntosX2Select4[1]<=puntoX42[8]+5&&puntosY2Select4[1]>=puntoY42[8]-5&&puntosY2Select4[1]<=puntoY42[8]+5){
			val42 = val42;
			pSelect42[12]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
			pSelect42[14]=1;
			pSelect42[12]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[6]-5&&puntosX2Select4[1]<=puntoX42[6]+5&&puntosY2Select4[1]>=puntoY42[6]-5&&puntosY2Select4[1]<=puntoY42[6]+5){
			val42 = val42;
			pSelect42[11]=1;
			pSelect42[6]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[3]-5&&puntosX2Select4[1]<=puntoX42[3]+5&&puntosY2Select4[1]>=puntoY42[3]-5&&puntosY2Select4[1]<=puntoY42[3]+5){
			val42 = val42;
			pSelect42[5]=1;
			pSelect42[6]=1;
			pSelect42[11]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[7]-5&&puntosX2Select4[1]<=puntoX42[7]+5&&puntosY2Select4[1]>=puntoY42[7]-5&&puntosY2Select4[1]<=puntoY42[7]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}

	else if(puntosX2Select4[0]>=puntoX42[8]-5&&puntosX2Select4[0]<=puntoX42[8]+5&&puntosY2Select4[0]>=puntoY42[8]-5&&puntosY2Select4[0]<=puntoY42[8]+5){
		if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
			pSelect42[14]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[7]-5&&puntosX2Select4[1]<=puntoX42[7]+5&&puntosY2Select4[1]>=puntoY42[7]-5&&puntosY2Select4[1]<=puntoY42[7]+5){
			val42 = val42;
			pSelect42[12]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[8]-5&&puntosX2Select4[1]<=puntoX42[8]+5&&puntosY2Select4[1]>=puntoY42[8]-5&&puntosY2Select4[1]<=puntoY42[8]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[9]-5&&puntosX2Select4[0]<=puntoX42[9]+5&&puntosY2Select4[0]>=puntoY42[9]-5&&puntosY2Select4[0]<=puntoY42[9]+5){
		if(puntosX2Select4[1]>=puntoX42[7]-5&&puntosX2Select4[1]<=puntoX42[7]+5&&puntosY2Select4[1]>=puntoY42[7]-5&&puntosY2Select4[1]<=puntoY42[7]+5){
			val42 = val42;
			pSelect42[14]=1;
			pSelect42[12]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[8]-5&&puntosX2Select4[1]<=puntoX42[8]+5&&puntosY2Select4[1]>=puntoY42[8]-5&&puntosY2Select4[1]<=puntoY42[8]+5){
			val42 = val42;
			pSelect42[14]=1;
			pSelect42[13]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[10]-5&&puntosX2Select4[1]<=puntoX42[10]+5&&puntosY2Select4[1]>=puntoY42[10]-5&&puntosY2Select4[1]<=puntoY42[10]+5){
			val42 = val42;
			pSelect42[10]=1;
			pSelect42[15]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
			pSelect42[10]=1;
			pSelect42[9]=1;
			pSelect42[15]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[12]-5&&puntosX2Select4[1]<=puntoX42[12]+5&&puntosY2Select4[1]>=puntoY42[12]-5&&puntosY2Select4[1]<=puntoY42[12]+5){
			val42 = val42;
			pSelect42[16]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}


	else if(puntosX2Select4[0]>=puntoX42[10]-5&&puntosX2Select4[0]<=puntoX42[10]+5&&puntosY2Select4[0]>=puntoY42[10]-5&&puntosY2Select4[0]<=puntoY42[10]+5){
		if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
			pSelect42[10]=1;
			pSelect42[15]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[5]-5&&puntosX2Select4[1]<=puntoX42[5]+5&&puntosY2Select4[1]>=puntoY42[5]-5&&puntosY2Select4[1]<=puntoY42[5]+5){
			val42 = val42;
			pSelect42[9]=1;
			pSelect42[10]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[10]-5&&puntosX2Select4[1]<=puntoX42[10]+5&&puntosY2Select4[1]>=puntoY42[10]-5&&puntosY2Select4[1]<=puntoY42[10]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else if(puntosX2Select4[0]>=puntoX42[11]-5&&puntosX2Select4[0]<=puntoX42[11]+5&&puntosY2Select4[0]>=puntoY42[11]-5&&puntosY2Select4[0]<=puntoY42[11]+5){
		if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
			pSelect42[17]=1;
			pSelect42[20]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[12]-5&&puntosX2Select4[1]<=puntoX42[12]+5&&puntosY2Select4[1]>=puntoY42[12]-5&&puntosY2Select4[1]<=puntoY42[12]+5){
			val42 = val42;
			pSelect42[20]=1;
			pSelect42[18]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[11]-5&&puntosX2Select4[1]<=puntoX42[11]+5&&puntosY2Select4[1]>=puntoY42[11]-5&&puntosY2Select4[1]<=puntoY42[11]+5){
			val42 = val42;
		}
		else{
			val42++;
		}		
	}
	else if(puntosX2Select4[0]>=puntoX42[12]-5&&puntosX2Select4[0]<=puntoX42[12]+5&&puntosY2Select4[0]>=puntoY42[12]-5&&puntosY2Select4[0]<=puntoY42[12]+5){
		if(puntosX2Select4[1]>=puntoX42[0]-5&&puntosX2Select4[1]<=puntoX42[0]+5&&puntosY2Select4[1]>=puntoY42[0]-5&&puntosY2Select4[1]<=puntoY42[0]+5){
			val42 = val42;
			pSelect42[17]=1;
			pSelect42[18]=1;
			pSelect42[20]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[11]-5&&puntosX2Select4[1]<=puntoX42[11]+5&&puntosY2Select4[1]>=puntoY42[11]-5&&puntosY2Select4[1]<=puntoY42[11]+5){
			val42 = val42;
			pSelect42[20]=1;
			pSelect42[18]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[9]-5&&puntosX2Select4[1]<=puntoX42[9]+5&&puntosY2Select4[1]>=puntoY42[9]-5&&puntosY2Select4[1]<=puntoY42[9]+5){
			val42 = val42;
			pSelect42[16]=1;
		}
		else if(puntosX2Select4[1]>=puntoX42[12]-5&&puntosX2Select4[1]<=puntoX42[12]+5&&puntosY2Select4[1]>=puntoY42[12]-5&&puntosY2Select4[1]<=puntoY42[12]+5){
			val42 = val42;
		}
		else{
			val42++;
		}	
	}
	else{
		val42++;
	}
	puntosX2Select4.splice(0, 1);
	puntosY2Select4.splice(0, 1);

}

for(var k=0; k<pSelect42.length; k++){
	totalPSelect42 = totalPSelect42+pSelect42[k];
}

for(var j=0; j<selectCorrect42.length; j++){
	totalSelect42 =  totalSelect42+ selectCorrect42[j];
}

console.log(val42 + " "+totalSelect42 + " "+totalPSelect42);


if((val4==0 && totalPSelect41==21 && totalSelect41==7)|| (val42==0&& totalPSelect42==21 && totalSelect42==7)){
	validar = 1;
}
else{
	validar = 0;
}

return validar;
}

$(document).ready(function(){
	function getMousePosition(eve){
		var stgData = stage4.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}
	stage4.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx4.beginPath();
		mouseDown4 = true;
	}, false);

	stage4.addEventListener("mouseup", function(eve){
		mouseDown4 = true;
	}, false);


	stage4.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		cantSelect1=0;
		if(mouseClick4){
			x24 = axi.x;
			y24 = axi.y;
			console.log(x24+ " - "+ y24);
			for(var i=0; i<puntoY41.length; i++){
				if((x24>=puntoX41[i]-5&&x24<=puntoX41[i]+5&&y24>=puntoY41[i]-5&&y24<=puntoY41[i]+5)){
					if(i==0){
						selectCorrect41[0]=1;
					}
					else if(i==2){
						selectCorrect41[1]=1;
					}
					else if(i==3){
						selectCorrect41[2]=1;
					}
					else if(i==5){
						selectCorrect41[3]=1;
					}
					else if(i==7){
						selectCorrect41[4]=1;
					}
					else if(i==9){
						selectCorrect41[5]=1;
					}
					else if(i==12){
						selectCorrect41[6]=1;
					}
					ctx4.fillStyle = "red";
					ctx4.arc(x24,y24,1,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					ctx4.lineTo(x14, y14);
					ctx4.lineTo(x24, y24);
					ctx4.strokeStyle = "red";
					ctx4.lineWidth = 2;
					ctx4.stroke();
					puntosXSelect4.push(x24);
					puntosYSelect4.push(y24);
					puntosXSelect4First.push(x24);
					puntosYSelect4First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}
				if((x24>=puntoX42[i]-5&&x24<=puntoX42[i]+5&&y24>=puntoY42[i]-5&&y24<=puntoY42[i]+5)){
					if(i==0){
						selectCorrect42[0]=1;
					}
					else if(i==2){
						selectCorrect42[1]=1;
					}
					else if(i==3){
						selectCorrect42[2]=1;
					}
					else if(i==5){
						selectCorrect42[3]=1;
					}
					else if(i==7){
						selectCorrect42[4]=1;
					}
					else if(i==9){
						selectCorrect42[5]=1;
					}
					else if(i==12){
						selectCorrect42[6]=1;
					}
					ctx4.fillStyle = "red";
					ctx4.arc(x24,y24,1,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					ctx4.lineTo(x14, y14);
					ctx4.lineTo(x24, y24);
					ctx4.strokeStyle = "red";
					ctx4.lineWidth = 2;
					ctx4.stroke();
					puntosX2Select4.push(x24);
					puntosY2Select4.push(y24);
					puntosX2Select4First.push(x24);
					puntosY2Select4First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}}
			if(cantSelect1 == 1){
				puntosXSelect4T.push(x24);
				puntosYSelect4T.push(y24);
				puntosXSelect4TFirst.push(x24);
				puntosYSelect4TFirst.push(y24);
			}
			console.log(mouseDown4);
		}
		else{
			x14 = axi.x;
			y14 = axi.y;
			console.log(x14+ " - "+ y14);
			for(var i=0; i<puntoY41.length; i++){
				if((x14>=puntoX41[i]-5&&x14<=puntoX41[i]+5&&y14>=puntoY41[i]-5&&y14<=puntoY41[i]+5)){
					if(i==0){
						selectCorrect41[0]=1;
					}
					else if(i==2){
						selectCorrect41[1]=1;
					}
					else if(i==3){
						selectCorrect41[2]=1;
					}
					else if(i==5){
						selectCorrect41[3]=1;
					}
					else if(i==7){
						selectCorrect41[4]=1;
					}
					else if(i==9){
						selectCorrect41[5]=1;
					}
					else if(i==12){
						selectCorrect41[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosXSelect4.push(x14);
					puntosYSelect4.push(y14);
					puntosXSelect4First.push(x14);
					puntosYSelect4First.push(y14);
					cantSelect1 = 1;
				}
				if((x14>=puntoX42[i]-5&&x14<=puntoX42[i]+5&&y14>=puntoY42[i]-5&&y14<=puntoY42[i]+5)){
					if(i==0){
						selectCorrect42[0]=1;
					}
					else if(i==2){
						selectCorrect42[1]=1;
					}
					else if(i==3){
						selectCorrect42[2]=1;
					}
					else if(i==5){
						selectCorrect42[3]=1;
					}
					else if(i==7){
						selectCorrect42[4]=1;
					}
					else if(i==9){
						selectCorrect42[5]=1;
					}
					else if(i==12){
						selectCorrect42[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosX2Select4.push(x14);
					puntosY2Select4.push(y14);
					puntosX2Select4First.push(x14);
					puntosY2Select4First.push(y14);
					cantSelect1 = 1;
				}
			}
			if(cantSelect1 == 1){
				puntosXSelect4T.push(x14);
				puntosYSelect4T.push(y14);
				puntosXSelect4TFirst.push(x14);
				puntosYSelect4TFirst.push(y14);
			}
			console.log(mouseDown4);
		}
		if(puntosXSelect4.length>0 || puntosX2Select4.length>0){
			document.getElementById("fc4").checked = true;
		}
		else{
			document.getElementById("fc4").checked = false;
		}
	}, false);



$('#limpiarF4').on('click', function(){
	mouseClick4=false;
	val4=0;
	val42=0;
	puntosXSelect4.splice(0, puntosXSelect4.length);
	puntosYSelect4.splice(0, puntosYSelect4.length);
	puntosXSelect4First.splice(0, puntosXSelect4First.length);
	puntosYSelect4First.splice(0, puntosYSelect4First.length);
	selectCorrect41 = [0,0,0,0,0,0,0,0,0,0];
	totalSelect41 = 0;
	pSelect41 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect41 = 0;
	puntosX2Select4.splice(0, puntosX2Select4.length);
	puntosY2Select4.splice(0, puntosY2Select4.length);
	puntosX2Select4First.splice(0, puntosX2Select4First.length);
	puntosY2Select4First.splice(0, puntosY2Select4First.length);
	selectCorrect42 = [0,0,0,0,0,0,0,0,0,0];
	totalSelect42 = 0;
	pSelect42 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect42 = 0;
	if(puntosXSelect4.length>0 || puntosX2Select4.length>0){
		document.getElementById("fc4").checked = true;
	}
	else{
		document.getElementById("fc4").checked = false;
	}
});

$('#ultimoF4').on('click', function(){
	pSelect41 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect41 = 0;
	pSelect42 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect42 = 0;

	var finX = puntosXSelect4TFirst[puntosXSelect4TFirst.length-1];
	var finY = puntosYSelect4TFirst[puntosYSelect4TFirst.length-1];
	var f1=false;
	var f2=false;
	for(var i2=0; i2<puntoX41.length; i2++){
		if((finX>=puntoX41[i2]-5&&finX<=puntoX41[i2]+5&&finY>=puntoY41[i2]-5&&finY<=puntoY41[i2]+5)){
			f1=true;
		}
		if(finX>=puntoX42[i2]-5&&finX<=puntoX42[i2]+5&&finY>=puntoY42[i2]-5&&finY<=puntoY42[i2]+5){
			f2=true;
		}
	}

	puntosXSelect4TFirst.pop();
	puntosYSelect4TFirst.pop();
	puntosXSelect4T.pop();
	puntosYSelect4T.pop();
	if (puntosXSelect4T.length==1) {
		puntosXSelect4TFirst.pop();
		puntosYSelect4TFirst.pop();
		puntosXSelect4T.pop();
		puntosYSelect4T.pop();
	}

	console.log(f1+" "+f2);
	if(f1){
		var fin = puntosXSelect4First.length-1;
		for(var i2=0; i2<puntoY41.length; i2++){
			if(puntosXSelect4[fin]>=puntoX41[i2]-5&&puntosXSelect4[fin]<=puntoX41[i2]+5&&puntosYSelect4[fin]>=puntoY41[i2]-5&&puntosYSelect4[fin]<=puntoY41[i2]+5){
				if(i2==0){
					selectCorrect41[0]=0;
				}
				else if(i2==2){
					selectCorrect41[1]=0;
				}
				else if(i2==3){
					selectCorrect41[2]=0;
				}
				else if(i2==5){
					selectCorrect41[3]=0;
				}
				else if(i2==7){
					selectCorrect41[4]=0;
				}
				else if(i2==9){
					selectCorrect41[5]=0;
				}
				else if(i2==12){
					selectCorrect41[6]=0;
				}
			}
		}

		puntosXSelect4.pop();
		puntosYSelect4.pop();
		puntosXSelect4First.pop();
		puntosYSelect4First.pop();
		if (puntosXSelect4.length==1) {
			puntosXSelect4.pop();
			puntosYSelect4.pop();
			puntosXSelect4First.pop();
			puntosYSelect4First.pop();
		}
	}

	if(f2){
		var fin2 = puntosX2Select4First.length-1;
		for(var i2=0; i2<puntoY42.length; i2++){
			if(puntosX2Select4[fin2]>=puntoX42[i2]-5&&puntosX2Select4[fin2]<=puntoX42[i2]+5&&puntosY2Select4[fin2]>=puntoY42[i2]-5&&puntosY2Select4[fin2]<=puntoY42[i2]+5){
				if(i2==0){
					selectCorrect42[0]=0;
				}
				else if(i2==2){
					selectCorrect42[1]=0;
				}
				else if(i2==3){
					selectCorrect42[2]=0;
				}
				else if(i2==5){
					selectCorrect42[3]=0;
				}
				else if(i2==7){
					selectCorrect42[4]=0;
				}
				else if(i2==9){
					selectCorrect42[5]=0;
				}
				else if(i2==12){
					selectCorrect42[6]=0;
				}
			}
		}
		puntosX2Select4.pop();
		puntosY2Select4.pop();
		puntosX2Select4First.pop();
		puntosY2Select4First.pop();
		if (puntosX2Select4.length==1) {
			puntosX2Select4.pop();
			puntosY2Select4.pop();

			puntosX2Select4First.pop();
			puntosY2Select4First.pop();
		}
	}
	for(var i=0; i<puntosXSelect4TFirst.length-1; i++){
		ctx4.beginPath();
		ctx4.fillStyle = "red";
		ctx4.arc(puntosXSelect4T[i], puntosYSelect4T[i],1,0,2*Math.PI, false);
		ctx4.fill();
		ctx4.lineTo(puntosXSelect4T[i], puntosYSelect4T[i]);
		ctx4.lineTo(puntosXSelect4T[i+1], puntosYSelect4T[i+1]);
		ctx4.strokeStyle = "red";
		ctx4.lineWidth = 2;
		ctx4.fillStyle = "red";
		ctx4.arc(puntosXSelect4T[i+1], puntosYSelect4T[i+1],1,0,2*Math.PI, false);
		ctx4.fill();
		ctx4.closePath();
		ctx4.stroke();
	}
	x14 = puntosXSelect4TFirst[puntosXSelect4TFirst.length-1];
	y14 = puntosYSelect4TFirst[puntosYSelect4TFirst.length-1];

	console.log(puntosXSelect4First + " - " +puntosYSelect4First);
	if(puntosXSelect4T.length>0){
		document.getElementById("fc4").checked = true;
	}
	else{
		document.getElementById("fc4").checked = false;
	}

});
});
