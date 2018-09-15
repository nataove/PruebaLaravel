var puntosSelec6 = new Array();

var puntosXSelect6T = new Array();
var puntosYSelect6T = new Array();
var puntosXSelect6TFirst = [];
var puntosYSelect6TFirst = [];
var cantSelect6 = 0;

var puntosXSelect6 = new Array();
var puntosYSelect6 = new Array();

var puntosXSelect6First = new Array();
var puntosYSelect6First = new Array();

var puntoX61 = [13,  65, 64,  115, 115, 65,  115, 66,  13,  13,  13, 115];
var puntoY61 = [100, 72, 100, 75,  101, 126, 126, 155, 156, 128, 181, 12];

var selectCorrect61 = [0,0,0,0,0,0,0,0,0,0];
var totalSelect61 = 0;
var pSelect61 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect61 = 0;

var puntosX2Select6 = new Array();
var puntosY2Select6 = new Array();

var puntosX2Select6First = new Array();
var puntosY2Select6First = new Array();

var puntoX62 = [14, 62, 65, 115, 115, 64,  115, 65,  13,  13];
var puntoY62 = [70, 45, 72, 46,  75,  100, 101, 126, 128, 100];

var selectCorrect62 = [0,0,0,0,0,0,0,0,0,0];
var totalSelect62 = 0;
var pSelect62 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect62 = 0;

var stage6 = document.getElementById('canvas6');
stage6.width = 120;
stage6.height = 190;


var x16 =0;
var x26 =0;
var y16 =0;
var y26 =0;
var val6=0;
var val62=0;


var mouseDown6 = false;
var mouseClick6 = false;
var ctx6 = stage6.getContext("2d");

function validarF6(){
	var validar=0;
	for(var i=0; i<puntosXSelect6First.length-1; i++){
		if(puntosXSelect6[0]>=puntoX61[0]-5&&puntosXSelect6[0]<=puntoX61[0]+5&&puntosYSelect6[0]>=puntoY61[0]-5&&puntosYSelect6[0]<=puntoY61[0]+5){
			if(puntosXSelect6[1]>=puntoX61[1]-5&&puntosXSelect6[1]<=puntoX61[1]+5&&puntosYSelect6[1]>=puntoY61[1]-5&&puntosYSelect6[1]<=puntoY61[1]+5){
				val6 = val6;
				pSelect61[0]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[2]-5&&puntosXSelect6[1]<=puntoX61[2]+5&&puntosYSelect6[1]>=puntoY61[2]-5&&puntosYSelect6[1]<=puntoY61[2]+5){
				val6 = val6;
				pSelect61[12]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[9]-5&&puntosXSelect6[1]<=puntoX61[9]+5&&puntosYSelect6[1]>=puntoY61[9]-5&&puntosYSelect6[1]<=puntoY61[9]+5){
				val6 = val6;
				pSelect61[11]=1;
				pSelect61[10]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[8]-5&&puntosXSelect6[1]<=puntoX61[8]+5&&puntosYSelect6[1]>=puntoY61[8]-5&&puntosYSelect6[1]<=puntoY61[8]+5){
				val6 = val6;
				pSelect61[11]=1;
				pSelect61[10]=1;
				pSelect61[9]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[0]-5&&puntosXSelect6[1]<=puntoX61[0]+5&&puntosYSelect6[1]>=puntoY61[0]-5&&puntosYSelect6[1]<=puntoY61[0]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[1]-5&&puntosXSelect6[0]<=puntoX61[1]+5&&puntosYSelect6[0]>=puntoY61[1]-5&&puntosYSelect6[0]<=puntoY61[1]+5){
			if(puntosXSelect6[1]>=puntoX61[3]-5&&puntosXSelect6[1]<=puntoX61[3]+5&&puntosYSelect6[1]>=puntoY61[3]-5&&puntosYSelect6[1]<=puntoY61[3]+5){
				val6 = val6;
				pSelect61[1]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[0]-5&&puntosXSelect6[1]<=puntoX61[0]+5&&puntosYSelect6[1]>=puntoY61[0]-5&&puntosYSelect6[1]<=puntoY61[0]+5){
				val6 = val6;
				pSelect61[0]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[1]-5&&puntosXSelect6[1]<=puntoX61[1]+5&&puntosYSelect6[1]>=puntoY61[1]-5&&puntosYSelect6[1]<=puntoY61[1]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[2]-5&&puntosXSelect6[0]<=puntoX61[2]+5&&puntosYSelect6[0]>=puntoY61[2]-5&&puntosYSelect6[0]<=puntoY61[2]+5){
			if(puntosXSelect6[1]>=puntoX61[3]-5&&puntosXSelect6[1]<=puntoX61[3]+5&&puntosYSelect6[1]>=puntoY61[3]-5&&puntosYSelect6[1]<=puntoY61[3]+5){
				val6 = val6;
				pSelect61[2]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[5]-5&&puntosXSelect6[1]<=puntoX61[5]+5&&puntosYSelect6[1]>=puntoY61[5]-5&&puntosYSelect6[1]<=puntoY61[5]+5){
				val6 = val6;
				pSelect61[13]=1;
				pSelect61[14]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[7]-5&&puntosXSelect6[1]<=puntoX61[7]+5&&puntosYSelect6[1]>=puntoY61[7]-5&&puntosYSelect6[1]<=puntoY61[7]+5){
				val6 = val6;
				pSelect61[13]=1;
				pSelect61[14]=1;
				pSelect61[7]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[0]-5&&puntosXSelect6[1]<=puntoX61[0]+5&&puntosYSelect6[1]>=puntoY61[0]-5&&puntosYSelect6[1]<=puntoY61[0]+5){
				val6 = val6;
				pSelect61[12]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[2]-5&&puntosXSelect6[1]<=puntoX61[2]+5&&puntosYSelect6[1]>=puntoY61[2]-5&&puntosYSelect6[1]<=puntoY61[2]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[3]-5&&puntosXSelect6[0]<=puntoX61[3]+5&&puntosYSelect6[0]>=puntoY61[3]-5&&puntosYSelect6[0]<=puntoY61[3]+5){
			if(puntosXSelect6[1]>=puntoX61[2]-5&&puntosXSelect6[1]<=puntoX61[2]+5&&puntosYSelect6[1]>=puntoY61[2]-5&&puntosYSelect6[1]<=puntoY61[2]+5){
				val6 = val6;
				pSelect61[2]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[4]-5&&puntosXSelect6[1]<=puntoX61[4]+5&&puntosYSelect6[1]>=puntoY61[4]-5&&puntosYSelect6[1]<=puntoY61[4]+5){
				val6 = val6;
				pSelect61[3]=1;
				pSelect61[4]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[6]-5&&puntosXSelect6[1]<=puntoX61[6]+5&&puntosYSelect6[1]>=puntoY61[6]-5&&puntosYSelect6[1]<=puntoY61[6]+5){
				val6 = val6;
				pSelect61[3]=1;
				pSelect61[4]=1;
				pSelect61[5]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[1]-5&&puntosXSelect6[1]<=puntoX61[1]+5&&puntosYSelect6[1]>=puntoY61[1]-5&&puntosYSelect6[1]<=puntoY61[1]+5){
				val6 = val6;
				pSelect61[1]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[3]-5&&puntosXSelect6[1]<=puntoX61[3]+5&&puntosYSelect6[1]>=puntoY61[3]-5&&puntosYSelect6[1]<=puntoY61[3]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[4]-5&&puntosXSelect6[0]<=puntoX61[4]+5&&puntosYSelect6[0]>=puntoY61[4]-5&&puntosYSelect6[0]<=puntoY61[4]+5){
			if(puntosXSelect6[1]>=puntoX61[3]-5&&puntosXSelect6[1]<=puntoX61[3]+5&&puntosYSelect6[1]>=puntoY61[3]-5&&puntosYSelect6[1]<=puntoY61[3]+5){
				val6 = val6;
				pSelect61[3]=1;
				pSelect61[4]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[6]-5&&puntosXSelect6[1]<=puntoX61[6]+5&&puntosYSelect6[1]>=puntoY61[6]-5&&puntosYSelect6[1]<=puntoY61[6]+5){
				val6 = val6;
				pSelect61[5]=1;
				pSelect61[4]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[4]-5&&puntosXSelect6[1]<=puntoX61[4]+5&&puntosYSelect6[1]>=puntoY61[4]-5&&puntosYSelect6[1]<=puntoY61[4]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[5]-5&&puntosXSelect6[0]<=puntoX61[5]+5&&puntosYSelect6[0]>=puntoY61[5]-5&&puntosYSelect6[0]<=puntoY61[5]+5){
			if(puntosXSelect6[1]>=puntoX61[7]-5&&puntosXSelect6[1]<=puntoX61[7]+5&&puntosYSelect6[1]>=puntoY61[7]-5&&puntosYSelect6[1]<=puntoY61[7]+5){
				val6 = val6;
				pSelect61[7]=1;
				pSelect61[14]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[2]-5&&puntosXSelect6[1]<=puntoX61[2]+5&&puntosYSelect6[1]>=puntoY61[2]-5&&puntosYSelect6[1]<=puntoY61[2]+5){
				val6 = val6;
				pSelect61[13]=1;
				pSelect61[14]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[5]-5&&puntosXSelect6[1]<=puntoX61[5]+5&&puntosYSelect6[1]>=puntoY61[5]-5&&puntosYSelect6[1]<=puntoY61[5]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[6]-5&&puntosXSelect6[0]<=puntoX61[6]+5&&puntosYSelect6[0]>=puntoY61[6]-5&&puntosYSelect6[0]<=puntoY61[6]+5){
			if(puntosXSelect6[1]>=puntoX61[7]-5&&puntosXSelect6[1]<=puntoX61[7]+5&&puntosYSelect6[1]>=puntoY61[7]-5&&puntosYSelect6[1]<=puntoY61[7]+5){
				val6 = val6;
				pSelect61[6]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[3]-5&&puntosXSelect6[1]<=puntoX61[3]+5&&puntosYSelect6[1]>=puntoY61[3]-5&&puntosYSelect6[1]<=puntoY61[3]+5){
				val6 = val6;
				pSelect61[4]=1;
				pSelect61[5]=1;
				pSelect61[3]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[4]-5&&puntosXSelect6[1]<=puntoX61[4]+5&&puntosYSelect6[1]>=puntoY61[4]-5&&puntosYSelect6[1]<=puntoY61[4]+5){
				val6 = val6;
				pSelect61[5]=1;
				pSelect61[4]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[6]-5&&puntosXSelect6[1]<=puntoX61[6]+5&&puntosYSelect6[1]>=puntoY61[6]-5&&puntosYSelect6[1]<=puntoY61[6]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		
		else if(puntosXSelect6[0]>=puntoX61[7]-5&&puntosXSelect6[0]<=puntoX61[7]+5&&puntosYSelect6[0]>=puntoY61[7]-5&&puntosYSelect6[0]<=puntoY61[7]+5){
			if(puntosXSelect6[1]>=puntoX61[8]-5&&puntosXSelect6[1]<=puntoX61[8]+5&&puntosYSelect6[1]>=puntoY61[8]-5&&puntosYSelect6[1]<=puntoY61[8]+5){
				val6 = val6;
				pSelect61[8]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[6]-5&&puntosXSelect6[1]<=puntoX61[6]+5&&puntosYSelect6[1]>=puntoY61[6]-5&&puntosYSelect6[1]<=puntoY61[6]+5){
				val6 = val6;
				pSelect61[6]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[5]-5&&puntosXSelect6[1]<=puntoX61[5]+5&&puntosYSelect6[1]>=puntoY61[5]-5&&puntosYSelect6[1]<=puntoY61[5]+5){
				val6 = val6;
				pSelect61[7]=1;
				pSelect61[14]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[2]-5&&puntosXSelect6[1]<=puntoX61[2]+5&&puntosYSelect6[1]>=puntoY61[2]-5&&puntosYSelect6[1]<=puntoY61[2]+5){
				val6 = val6;
				pSelect61[13]=1;
				pSelect61[14]=1;
				pSelect61[7]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[7]-5&&puntosXSelect6[1]<=puntoX61[7]+5&&puntosYSelect6[1]>=puntoY61[7]-5&&puntosYSelect6[1]<=puntoY61[7]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}

		else if(puntosXSelect6[0]>=puntoX61[8]-5&&puntosXSelect6[0]<=puntoX61[8]+5&&puntosYSelect6[0]>=puntoY61[8]-5&&puntosYSelect6[0]<=puntoY61[8]+5){
			if(puntosXSelect6[1]>=puntoX61[9]-5&&puntosXSelect6[1]<=puntoX61[9]+5&&puntosYSelect6[1]>=puntoY61[9]-5&&puntosYSelect6[1]<=puntoY61[9]+5){
				val6 = val6;
				pSelect61[10]=1;
				pSelect61[9]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[0]-5&&puntosXSelect6[1]<=puntoX61[0]+5&&puntosYSelect6[1]>=puntoY61[0]-5&&puntosYSelect6[1]<=puntoY61[0]+5){
				val6 = val6;
				pSelect61[11]=1;
				pSelect61[10]=1;
				pSelect61[9]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[7]-5&&puntosXSelect6[1]<=puntoX61[7]+5&&puntosYSelect6[1]>=puntoY61[7]-5&&puntosYSelect6[1]<=puntoY61[7]+5){
				val6 = val6;
				pSelect61[8]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[8]-5&&puntosXSelect6[1]<=puntoX61[8]+5&&puntosYSelect6[1]>=puntoY61[8]-5&&puntosYSelect6[1]<=puntoY61[8]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else if(puntosXSelect6[0]>=puntoX61[9]-5&&puntosXSelect6[0]<=puntoX61[9]+5&&puntosYSelect6[0]>=puntoY61[9]-5&&puntosYSelect6[0]<=puntoY61[9]+5){
			if(puntosXSelect6[1]>=puntoX61[0]-5&&puntosXSelect6[1]<=puntoX61[0]+5&&puntosYSelect6[1]>=puntoY61[0]-5&&puntosYSelect6[1]<=puntoY61[0]+5){
				val6 = val6;
				pSelect61[11]=1;
				pSelect61[10]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[8]-5&&puntosXSelect6[1]<=puntoX61[8]+5&&puntosYSelect6[1]>=puntoY61[8]-5&&puntosYSelect6[1]<=puntoY61[8]+5){
				val6 = val6;
				pSelect61[10]=1;
				pSelect61[9]=1;
			}
			else if(puntosXSelect6[1]>=puntoX61[9]-5&&puntosXSelect6[1]<=puntoX61[9]+5&&puntosYSelect6[1]>=puntoY61[9]-5&&puntosYSelect6[1]<=puntoY61[9]+5){
				val6 = val6;
			}
			else{
				val6++;
			}	
		}
		else{
			val6++;
		}
		puntosXSelect6.splice(0, 1);
		puntosYSelect6.splice(0, 1);
		
	}

	for(var k=0; k<pSelect61.length; k++){
		totalPSelect61 = totalPSelect61+pSelect61[k];
	}

	for(var j=0; j<selectCorrect61.length; j++){
		totalSelect61 =  totalSelect61+ selectCorrect61[j];
	}

	console.log(val6 + " - " + totalPSelect61 + " - " +totalSelect61);


	//val

	for(var i=0; i<puntosX2Select6First.length-1; i++){
		if(puntosX2Select6[0]>=puntoX62[0]-5&&puntosX2Select6[0]<=puntoX62[0]+5&&puntosY2Select6[0]>=puntoY62[0]-5&&puntosY2Select6[0]<=puntoY62[0]+5){
			if(puntosX2Select6[1]>=puntoX62[1]-5&&puntosX2Select6[1]<=puntoX62[1]+5&&puntosY2Select6[1]>=puntoY62[1]-5&&puntosY2Select6[1]<=puntoY62[1]+5){
				val62 = val62;
				pSelect62[0]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[2]-5&&puntosX2Select6[1]<=puntoX62[2]+5&&puntosY2Select6[1]>=puntoY62[2]-5&&puntosY2Select6[1]<=puntoY62[2]+5){
				val62 = val62;
				pSelect62[12]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[9]-5&&puntosX2Select6[1]<=puntoX62[9]+5&&puntosY2Select6[1]>=puntoY62[9]-5&&puntosY2Select6[1]<=puntoY62[9]+5){
				val62 = val62;
				pSelect62[11]=1;
				pSelect62[10]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[8]-5&&puntosX2Select6[1]<=puntoX62[8]+5&&puntosY2Select6[1]>=puntoY62[8]-5&&puntosY2Select6[1]<=puntoY62[8]+5){
				val62 = val62;
				pSelect62[11]=1;
				pSelect62[10]=1;
				pSelect62[9]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[0]-5&&puntosX2Select6[1]<=puntoX62[0]+5&&puntosY2Select6[1]>=puntoY62[0]-5&&puntosY2Select6[1]<=puntoY62[0]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[1]-5&&puntosX2Select6[0]<=puntoX62[1]+5&&puntosY2Select6[0]>=puntoY62[1]-5&&puntosY2Select6[0]<=puntoY62[1]+5){
			if(puntosX2Select6[1]>=puntoX62[3]-5&&puntosX2Select6[1]<=puntoX62[3]+5&&puntosY2Select6[1]>=puntoY62[3]-5&&puntosY2Select6[1]<=puntoY62[3]+5){
				val62 = val62;
				pSelect62[1]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[0]-5&&puntosX2Select6[1]<=puntoX62[0]+5&&puntosY2Select6[1]>=puntoY62[0]-5&&puntosY2Select6[1]<=puntoY62[0]+5){
				val62 = val62;
				pSelect62[0]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[1]-5&&puntosX2Select6[1]<=puntoX62[1]+5&&puntosY2Select6[1]>=puntoY62[1]-5&&puntosY2Select6[1]<=puntoY62[1]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[2]-5&&puntosX2Select6[0]<=puntoX62[2]+5&&puntosY2Select6[0]>=puntoY62[2]-5&&puntosY2Select6[0]<=puntoY62[2]+5){
			if(puntosX2Select6[1]>=puntoX62[3]-5&&puntosX2Select6[1]<=puntoX62[3]+5&&puntosY2Select6[1]>=puntoY62[3]-5&&puntosY2Select6[1]<=puntoY62[3]+5){
				val62 = val62;
				pSelect62[2]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[5]-5&&puntosX2Select6[1]<=puntoX62[5]+5&&puntosY2Select6[1]>=puntoY62[5]-5&&puntosY2Select6[1]<=puntoY62[5]+5){
				val62 = val62;
				pSelect62[13]=1;
				pSelect62[14]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[7]-5&&puntosX2Select6[1]<=puntoX62[7]+5&&puntosY2Select6[1]>=puntoY62[7]-5&&puntosY2Select6[1]<=puntoY62[7]+5){
				val62 = val62;
				pSelect62[13]=1;
				pSelect62[14]=1;
				pSelect62[7]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[0]-5&&puntosX2Select6[1]<=puntoX62[0]+5&&puntosY2Select6[1]>=puntoY62[0]-5&&puntosY2Select6[1]<=puntoY62[0]+5){
				val62 = val62;
				pSelect62[12]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[2]-5&&puntosX2Select6[1]<=puntoX62[2]+5&&puntosY2Select6[1]>=puntoY62[2]-5&&puntosY2Select6[1]<=puntoY62[2]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[3]-5&&puntosX2Select6[0]<=puntoX62[3]+5&&puntosY2Select6[0]>=puntoY62[3]-5&&puntosY2Select6[0]<=puntoY62[3]+5){
			if(puntosX2Select6[1]>=puntoX62[2]-5&&puntosX2Select6[1]<=puntoX62[2]+5&&puntosY2Select6[1]>=puntoY62[2]-5&&puntosY2Select6[1]<=puntoY62[2]+5){
				val62 = val62;
				pSelect62[2]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[4]-5&&puntosX2Select6[1]<=puntoX62[4]+5&&puntosY2Select6[1]>=puntoY62[4]-5&&puntosY2Select6[1]<=puntoY62[4]+5){
				val62 = val62;
				pSelect62[3]=1;
				pSelect62[4]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[6]-5&&puntosX2Select6[1]<=puntoX62[6]+5&&puntosY2Select6[1]>=puntoY62[6]-5&&puntosY2Select6[1]<=puntoY62[6]+5){
				val62 = val62;
				pSelect62[3]=1;
				pSelect62[4]=1;
				pSelect62[5]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[1]-5&&puntosX2Select6[1]<=puntoX62[1]+5&&puntosY2Select6[1]>=puntoY62[1]-5&&puntosY2Select6[1]<=puntoY62[1]+5){
				val62 = val62;
				pSelect62[1]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[3]-5&&puntosX2Select6[1]<=puntoX62[3]+5&&puntosY2Select6[1]>=puntoY62[3]-5&&puntosY2Select6[1]<=puntoY62[3]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[4]-5&&puntosX2Select6[0]<=puntoX62[4]+5&&puntosY2Select6[0]>=puntoY62[4]-5&&puntosY2Select6[0]<=puntoY62[4]+5){
			if(puntosX2Select6[1]>=puntoX62[3]-5&&puntosX2Select6[1]<=puntoX62[3]+5&&puntosY2Select6[1]>=puntoY62[3]-5&&puntosY2Select6[1]<=puntoY62[3]+5){
				val62 = val62;
				pSelect62[3]=1;
				pSelect62[4]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[6]-5&&puntosX2Select6[1]<=puntoX62[6]+5&&puntosY2Select6[1]>=puntoY62[6]-5&&puntosY2Select6[1]<=puntoY62[6]+5){
				val62 = val62;
				pSelect62[5]=1;
				pSelect62[4]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[4]-5&&puntosX2Select6[1]<=puntoX62[4]+5&&puntosY2Select6[1]>=puntoY62[4]-5&&puntosY2Select6[1]<=puntoY62[4]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[5]-5&&puntosX2Select6[0]<=puntoX62[5]+5&&puntosY2Select6[0]>=puntoY62[5]-5&&puntosY2Select6[0]<=puntoY62[5]+5){
			if(puntosX2Select6[1]>=puntoX62[7]-5&&puntosX2Select6[1]<=puntoX62[7]+5&&puntosY2Select6[1]>=puntoY62[7]-5&&puntosY2Select6[1]<=puntoY62[7]+5){
				val62 = val62;
				pSelect62[7]=1;
				pSelect62[14]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[2]-5&&puntosX2Select6[1]<=puntoX62[2]+5&&puntosY2Select6[1]>=puntoY62[2]-5&&puntosY2Select6[1]<=puntoY62[2]+5){
				val62 = val62;
				pSelect62[13]=1;
				pSelect62[14]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[5]-5&&puntosX2Select6[1]<=puntoX62[5]+5&&puntosY2Select6[1]>=puntoY62[5]-5&&puntosY2Select6[1]<=puntoY62[5]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[6]-5&&puntosX2Select6[0]<=puntoX62[6]+5&&puntosY2Select6[0]>=puntoY62[6]-5&&puntosY2Select6[0]<=puntoY62[6]+5){
			if(puntosX2Select6[1]>=puntoX62[7]-5&&puntosX2Select6[1]<=puntoX62[7]+5&&puntosY2Select6[1]>=puntoY62[7]-5&&puntosY2Select6[1]<=puntoY62[7]+5){
				val62 = val62;
				pSelect62[6]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[3]-5&&puntosX2Select6[1]<=puntoX62[3]+5&&puntosY2Select6[1]>=puntoY62[3]-5&&puntosY2Select6[1]<=puntoY62[3]+5){
				val62 = val62;
				pSelect62[4]=1;
				pSelect62[5]=1;
				pSelect62[3]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[4]-5&&puntosX2Select6[1]<=puntoX62[4]+5&&puntosY2Select6[1]>=puntoY62[4]-5&&puntosY2Select6[1]<=puntoY62[4]+5){
				val62 = val62;
				pSelect62[5]=1;
				pSelect62[4]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[6]-5&&puntosX2Select6[1]<=puntoX62[6]+5&&puntosY2Select6[1]>=puntoY62[6]-5&&puntosY2Select6[1]<=puntoY62[6]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		
		else if(puntosX2Select6[0]>=puntoX62[7]-5&&puntosX2Select6[0]<=puntoX62[7]+5&&puntosY2Select6[0]>=puntoY62[7]-5&&puntosY2Select6[0]<=puntoY62[7]+5){
			if(puntosX2Select6[1]>=puntoX62[8]-5&&puntosX2Select6[1]<=puntoX62[8]+5&&puntosY2Select6[1]>=puntoY62[8]-5&&puntosY2Select6[1]<=puntoY62[8]+5){
				val62 = val62;
				pSelect62[8]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[6]-5&&puntosX2Select6[1]<=puntoX62[6]+5&&puntosY2Select6[1]>=puntoY62[6]-5&&puntosY2Select6[1]<=puntoY62[6]+5){
				val62 = val62;
				pSelect62[6]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[5]-5&&puntosX2Select6[1]<=puntoX62[5]+5&&puntosY2Select6[1]>=puntoY62[5]-5&&puntosY2Select6[1]<=puntoY62[5]+5){
				val62 = val62;
				pSelect62[7]=1;
				pSelect62[14]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[2]-5&&puntosX2Select6[1]<=puntoX62[2]+5&&puntosY2Select6[1]>=puntoY62[2]-5&&puntosY2Select6[1]<=puntoY62[2]+5){
				val62 = val62;
				pSelect62[13]=1;
				pSelect62[14]=1;
				pSelect62[7]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[7]-5&&puntosX2Select6[1]<=puntoX62[7]+5&&puntosY2Select6[1]>=puntoY62[7]-5&&puntosY2Select6[1]<=puntoY62[7]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}

		else if(puntosX2Select6[0]>=puntoX62[8]-5&&puntosX2Select6[0]<=puntoX62[8]+5&&puntosY2Select6[0]>=puntoY62[8]-5&&puntosY2Select6[0]<=puntoY62[8]+5){
			if(puntosX2Select6[1]>=puntoX62[9]-5&&puntosX2Select6[1]<=puntoX62[9]+5&&puntosY2Select6[1]>=puntoY62[9]-5&&puntosY2Select6[1]<=puntoY62[9]+5){
				val62 = val62;
				pSelect62[10]=1;
				pSelect62[9]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[0]-5&&puntosX2Select6[1]<=puntoX62[0]+5&&puntosY2Select6[1]>=puntoY62[0]-5&&puntosY2Select6[1]<=puntoY62[0]+5){
				val62 = val62;
				pSelect62[11]=1;
				pSelect62[10]=1;
				pSelect62[9]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[7]-5&&puntosX2Select6[1]<=puntoX62[7]+5&&puntosY2Select6[1]>=puntoY62[7]-5&&puntosY2Select6[1]<=puntoY62[7]+5){
				val62 = val62;
				pSelect62[8]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[8]-5&&puntosX2Select6[1]<=puntoX62[8]+5&&puntosY2Select6[1]>=puntoY62[8]-5&&puntosY2Select6[1]<=puntoY62[8]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else if(puntosX2Select6[0]>=puntoX62[9]-5&&puntosX2Select6[0]<=puntoX62[9]+5&&puntosY2Select6[0]>=puntoY62[9]-5&&puntosY2Select6[0]<=puntoY62[9]+5){
			if(puntosX2Select6[1]>=puntoX62[0]-5&&puntosX2Select6[1]<=puntoX62[0]+5&&puntosY2Select6[1]>=puntoY62[0]-5&&puntosY2Select6[1]<=puntoY62[0]+5){
				val62 = val62;
				pSelect62[11]=1;
				pSelect62[10]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[8]-5&&puntosX2Select6[1]<=puntoX62[8]+5&&puntosY2Select6[1]>=puntoY62[8]-5&&puntosY2Select6[1]<=puntoY62[8]+5){
				val62 = val62;
				pSelect62[10]=1;
				pSelect62[9]=1;
			}
			else if(puntosX2Select6[1]>=puntoX62[9]-5&&puntosX2Select6[1]<=puntoX62[9]+5&&puntosY2Select6[1]>=puntoY62[9]-5&&puntosY2Select6[1]<=puntoY62[9]+5){
				val62 = val62;
			}
			else{
				val62++;
			}	
		}
		else{
			val62++;
		}
		puntosX2Select6.splice(0, 1);
		puntosY2Select6.splice(0, 1);
		
	}

	for(var k=0; k<pSelect62.length; k++){
		totalPSelect62 = totalPSelect62+pSelect62[k];
	}

	for(var j=0; j<selectCorrect62.length; j++){
		totalSelect62 =  totalSelect62+ selectCorrect62[j];
	}

	console.log(val62 + " - " + totalPSelect62 + " - " +totalSelect62);
	
	if((val6==0 && totalPSelect61==15 && totalSelect61==7)|| (val62==0&& totalPSelect62==15 && totalSelect62==7)){
	validar = 1;
}
else{
	validar = 0;
}
return validar;
}

$(document).ready(function(){
	

	function getMousePosition(eve){
		var stgData = stage6.getBoundingClientRect();
		return {
			x : event.clientX - stgData.left, 
			y : event.clientY - stgData.top,
		};
	}

	stage6.addEventListener("mousedown", function(eve){
		var axi = getMousePosition(eve);
		ctx6.beginPath();
		mouseDown6 = true;
	}, false);

	stage6.addEventListener("mouseup", function(eve){
		mouseDown6 = true;
	}, false);


	stage6.addEventListener("click", function(eve){
		var axi = getMousePosition(eve);
		cantSelect6 = 0;
		if(mouseClick6){
			x26 = axi.x;
			y26 = axi.y;
			console.log(x26+ " - "+ y26);
			for(var i=0; i<puntoY61.length; i++){
				if((x26>=puntoX61[i]-5&&x26<=puntoX61[i]+5&&y26>=puntoY61[i]-5&&y26<=puntoY61[i]+5)){
					if(i==0){
						selectCorrect61[0]=1;
					}
					else if(i==1){
						selectCorrect61[1]=1;
					}
					else if(i==2){
						selectCorrect61[2]=1;
					}
					else if(i==3){
						selectCorrect61[3]=1;
					}
					else if(i==6){
						selectCorrect61[4]=1;
					}
					else if(i==7){
						selectCorrect61[5]=1;
					}
					else if(i==8){
						selectCorrect61[6]=1;
					}
					ctx6.fillStyle = "red";
					ctx6.arc(x26,y26,1,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					ctx6.lineTo(x16, y16);
					ctx6.lineTo(x26, y26);
					ctx6.strokeStyle = "red";
					ctx6.lineWidth = 2;
					ctx6.stroke();
					puntosXSelect6.push(x26);
					puntosYSelect6.push(y26);
					puntosXSelect6First.push(x26);
					puntosYSelect6First.push(y26);
					mouseClick6 =true;
					x16 = axi.x;
					y16 = axi.y;
					cantSelect6 = 1;
				}
				if((x26>=puntoX62[i]-5&&x26<=puntoX62[i]+5&&y26>=puntoY62[i]-5&&y26<=puntoY62[i]+5)){
					if(i==0){
						selectCorrect62[0]=1;
					}
					else if(i==1){
						selectCorrect62[1]=1;
					}
					else if(i==2){
						selectCorrect62[2]=1;
					}
					else if(i==3){
						selectCorrect62[3]=1;
					}
					else if(i==6){
						selectCorrect62[4]=1;
					}
					else if(i==7){
						selectCorrect62[5]=1;
					}
					else if(i==8){
						selectCorrect62[6]=1;
					}
					ctx6.fillStyle = "red";
					ctx6.arc(x26,y26,1,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					ctx6.lineTo(x16, y16);
					ctx6.lineTo(x26, y26);
					ctx6.strokeStyle = "red";
					ctx6.lineWidth = 2;
					ctx6.stroke();
					puntosX2Select6.push(x26);
					puntosY2Select6.push(y26);
					puntosX2Select6First.push(x26);
					puntosY2Select6First.push(y26);
					mouseClick6 =true;
					x16 = axi.x;
					y16 = axi.y;
					cantSelect6 = 1;
				}
			}
			if(cantSelect6 == 1){
				puntosXSelect6T.push(x26);
				puntosYSelect6T.push(y26);
				puntosXSelect6TFirst.push(x26);
				puntosYSelect6TFirst.push(y26);
			}

			console.log(mouseDown6);
		}
		else{
			x16 = axi.x;
			y16 = axi.y;
			console.log(x16+ " - "+ y16);
			for(var i=0; i<puntoY61.length; i++){
				if((x16>=puntoX61[i]-5&&x16<=puntoX61[i]+5&&y16>=puntoY61[i]-5&&y16<=puntoY61[i]+5)){
					if(i==0){
						selectCorrect61[0]=1;
					}
					else if(i==1){
						selectCorrect61[1]=1;
					}
					else if(i==2){
						selectCorrect61[2]=1;
					}
					else if(i==3){
						selectCorrect61[3]=1;
					}
					else if(i==6){
						selectCorrect61[4]=1;
					}
					else if(i==7){
						selectCorrect61[5]=1;
					}
					else if(i==8){
						selectCorrect61[6]=1;
					}
					mouseClick6 =true;
					var punto = [axi.x, axi.y];
					puntosSelec6.push(punto);
					ctx6.fillStyle = "red";
					ctx6.arc(x16,y16,2,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					puntosXSelect6.push(x16);
					puntosYSelect6.push(y16);
					puntosXSelect6First.push(x16);
					puntosYSelect6First.push(y16);
					cantSelect6 = 1;
				}
				if((x16>=puntoX62[i]-5&&x16<=puntoX62[i]+5&&y16>=puntoY62[i]-5&&y16<=puntoY62[i]+5)){
					if(i==0){
						selectCorrect62[0]=1;
					}
					else if(i==1){
						selectCorrect62[1]=1;
					}
					else if(i==2){
						selectCorrect62[2]=1;
					}
					else if(i==3){
						selectCorrect62[3]=1;
					}
					else if(i==6){
						selectCorrect62[4]=1;
					}
					else if(i==7){
						selectCorrect62[5]=1;
					}
					else if(i==8){
						selectCorrect62[6]=1;
					}
					mouseClick6 =true;
					var punto = [axi.x, axi.y];
					puntosSelec6.push(punto);
					ctx6.fillStyle = "red";
					ctx6.arc(x16,y16,2,0,2*Math.PI, false);
					ctx6.fill();
					ctx6.closePath();
					puntosX2Select6.push(x16);
					puntosY2Select6.push(y16);
					puntosX2Select6First.push(x16);
					puntosY2Select6First.push(y16);
					cantSelect6 = 1;
				}
			}
			if(cantSelect6 == 1){
				puntosXSelect6T.push(x16);
				puntosYSelect6T.push(y16);
				puntosXSelect6TFirst.push(x16);
				puntosYSelect6TFirst.push(y16);
			}
			console.log(mouseDown6);
		}
		if(puntosXSelect6.length>0 || puntosX2Select6.length>0){
			document.getElementById("fc6").checked = true;
		}
		else{
			document.getElementById("fc6").checked = false;
		}
	}, false);


$('#limpiarF6').on('click', function(){
	mouseClick6=false;
	val6=0;
	val62=0;
	puntosXSelect6.splice(0, puntosXSelect6.length);
	puntosYSelect6.splice(0, puntosYSelect6.length);
	puntosXSelect6First.splice(0, puntosXSelect6First.length);
	puntosYSelect6First.splice(0, puntosYSelect6First.length);
	selectCorrect61 = [0,0,0,0,0,0,0,0];
	totalSelect61 = 0;
	pSelect61 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect61 = 0;
	puntosX2Select6.splice(0, puntosX2Select6.length);
	puntosY2Select6.splice(0, puntosY2Select6.length);
	puntosX2Select6First.splice(0, puntosX2Select6First.length);
	puntosY2Select6First.splice(0, puntosY2Select6First.length);
	selectCorrect62 = [0,0,0,0,0,0,0,0];
	totalSelect62 = 0;
	pSelect62 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	puntosXSelect6TFirst = new Array();
	puntosYSelect6TFirst = new Array();
	puntosXSelect6T = new Array();
	puntosYSelect6T = new Array();
	totalPSelect62 = 0;
	if(puntosXSelect6.length>0 || puntosX2Select6.length>0){
		document.getElementById("fc6").checked = true;
	}
	else{
		document.getElementById("fc6").checked = false;
	}
});

$('#ultimoF6').on('click', function(){
	pSelect61 =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect61 = 0;
	pSelect62 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	totalPSelect62 = 0;
	var finX = puntosXSelect6TFirst[puntosXSelect6TFirst.length-1];
	var finY = puntosYSelect6TFirst[puntosYSelect6TFirst.length-1];
	var f1=false;
	var f2=false;
	for(var i2=0; i2<puntoX61.length; i2++){
		if((finX>=puntoX61[i2]-5&&finX<=puntoX61[i2]+5&&finY>=puntoY61[i2]-5&&finY<=puntoY61[i2]+5)){
			f1=true;
		}
		if(finX>=puntoX62[i2]-5&&finX<=puntoX62[i2]+5&&finY>=puntoY62[i2]-5&&finY<=puntoY62[i2]+5){
			f2=true;
		}
	}

	puntosXSelect6TFirst.pop();
	puntosYSelect6TFirst.pop();
	puntosXSelect6T.pop();
	puntosYSelect6T.pop();
	if (puntosXSelect6T.length==1) {
		puntosXSelect6TFirst.pop();
		puntosYSelect6TFirst.pop();
		puntosXSelect6T.pop();
		puntosYSelect6T.pop();
	}

	console.log(f1+" "+f2);
	if(f1){
		var fin = puntosXSelect6First.length-1;
		for(var i2=0; i2<puntoY61.length; i2++){
			if(puntosXSelect6[fin]>=puntoX61[i2]-5&&puntosXSelect6[fin]<=puntoX61[i2]+5&&puntosYSelect6[fin]>=puntoY61[i2]-5&&puntosYSelect6[fin]<=puntoY61[i2]+5){
				if(i2==0){
					selectCorrect61[0]=0;
				}
				else if(i2==1){
					selectCorrect61[1]=0;
				}
				else if(i2==2){
					selectCorrect61[2]=0;
				}
				else if(i2==3){
					selectCorrect61[3]=0;
				}
				else if(i2==6){
					selectCorrect61[4]=0;
				}
				else if(i2==7){
					selectCorrect61[5]=0;
				}
				else if(i2==8){
					selectCorrect61[6]=0;
				}
			}
		}

		puntosXSelect6.pop();
		puntosYSelect6.pop();
		puntosXSelect6First.pop();
		puntosYSelect6First.pop();
		if (puntosXSelect6.length==1) {
			puntosXSelect6.pop();
			puntosYSelect6.pop();

			puntosXSelect6First.pop();
			puntosYSelect6First.pop();
		}
	}


	if(f2){
		var fin2 = puntosX2Select6First.length-1;
		for(var i2=0; i2<puntoY62.length; i2++){
			if(puntosX2Select6[fin2]>=puntoX62[i2]-5&&puntosX2Select6[fin2]<=puntoX62[i2]+5&&puntosY2Select6[fin2]>=puntoY62[i2]-5&&puntosY2Select6[fin2]<=puntoY62[i2]+5){
				if(i2==0){
					selectCorrect62[0]=0;
				}
				else if(i2==1){
					selectCorrect62[1]=0;
				}
				else if(i2==2){
					selectCorrect62[2]=0;
				}
				else if(i2==3){
					selectCorrect62[3]=0;
				}
				else if(i2==6){
					selectCorrect62[4]=0;
				}
				else if(i2==7){
					selectCorrect62[5]=0;
				}
				else if(i2==8){
					selectCorrect62[6]=0;
				}
			}
		}
		puntosX2Select6.pop();
		puntosY2Select6.pop();
		puntosX2Select6First.pop();
		puntosY2Select6First.pop();
		if (puntosX2Select6.length==1) {
			puntosX2Select6.pop();
			puntosY2Select6.pop();

			puntosX2Select6First.pop();
			puntosY2Select6First.pop();
		}
	}
	for(var i=0; i<puntosXSelect6TFirst.length-1; i++){
		ctx6.beginPath();
		ctx6.fillStyle = "red";
		ctx6.arc(puntosXSelect6T[i], puntosYSelect6T[i],1,0,2*Math.PI, false);
		ctx6.fill();
		ctx6.lineTo(puntosXSelect6T[i], puntosYSelect6T[i]);
		ctx6.lineTo(puntosXSelect6T[i+1], puntosYSelect6T[i+1]);
		ctx6.strokeStyle = "red";
		ctx6.lineWidth = 2;
		ctx6.fillStyle = "red";
		ctx6.arc(puntosXSelect6T[i+1], puntosYSelect6T[i+1],1,0,2*Math.PI, false);
		ctx6.fill();
		ctx6.closePath();
		ctx6.stroke();
	}
	x16 = puntosXSelect6TFirst[puntosXSelect6TFirst.length-1];
	y16 = puntosYSelect6TFirst[puntosYSelect6TFirst.length-1];

	console.log(puntosXSelect6First + " - " +puntosYSelect6First);
	if(puntosXSelect6T.length>0){
		document.getElementById("fc6").checked = true;
	}
	else{
		document.getElementById("fc6").checked = false;
	}
});

});
