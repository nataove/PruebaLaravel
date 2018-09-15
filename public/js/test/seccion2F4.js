	var puntosSelec4 = new Array();

	var puntosXSelect4T = new Array();
	var puntosYSelect4T = new Array();

	var puntosXSelect4TFirst = [];
	var puntosYSelect4TFirst = [];
	var cantSelect1 = 0;
	var cantSelect2 = 0;


	//Val1
	var selectCorrect41 = [0,0,0,0,0,0,0];
	var totalSelect41 = 0;

	var pSelect41 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var totalPSelect41 = 0;

	var puntosXSelect41 = new Array();
	var puntosYSelect41 = new Array();

	var puntosXSelect41First = new Array();
	var puntosYSelect41First = new Array();

	var puntoX41 = [13,61,61,109,109,62,109,62,9, 10,11,110];	
	var puntoY41 = [122,95,123,96,122,150,150,175,177,150,9,176];


	//val2
	var selectCorrect42 = [0,0,0,0,0,0,0];
	var totalSelect42 = 0;

	var pSelect42 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var totalPSelect42 = 0;

	var puntosX2Select42 = new Array();
	var puntosY2Select42 = new Array();

	var puntosX2Select42First = new Array();
	var puntosY2Select42First = new Array();

	var puntoX42 = [16, 64, 61, 113 ,109  ,61 ,109 ,62, 10, 13];
	var puntoY42 = [95, 67, 95, 68, 96,  123, 122, 150, 150 ,122];

	//val3

	var selectCorrect43 = [0,0,0,0,0,0,0];
	var totalSelect43 = 0;

	var pSelect43 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var totalPSelect43 = 0;

	var puntosX3Select43 = new Array();
	var puntosY3Select43 = new Array();

	var puntosX3Select43First = new Array();
	var puntosY3Select43First = new Array();

	var puntoX43 = [16, 63, 64, 111 ,113, 61, 109, 61,  13, 16];
	var puntoY43 = [66, 40, 67, 41, 68,   95, 96,  123, 122, 95];

//val4

var selectCorrect44 = [0,0,0,0,0,0,0];
var totalSelect44 = 0;

var pSelect44 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalPSelect44 = 0;
var puntosX4Select44 = new Array();
var puntosY4Select44 = new Array();

var puntosX4Select44First = new Array();
var puntosY4Select44First = new Array();

var puntoX44 = [15, 66, 63, 111 ,111, 64, 113 ,61 ,16 ,16];
var puntoY44 = [40, 13, 40, 14, 41,   67, 68, 95, 95, 66];

var stage4 = document.getElementById('canvas4');
stage4.width = 125;
stage4.height = 190;

var x14 =0;
var x24 =0;
var y14 =0;
var y24 =0;
var val4=0;
var val42=0;
var val43=0;
var val44=0;


var mouseDown4 = false;
var mouseClick4 = false;
var ctx4 = stage4.getContext("2d");

function validarF4(){
	var validar = 0;
	for(var i=0; i<puntosXSelect41First.length-1; i++){
		if(puntosXSelect41[0]>=puntoX41[0]-5&&puntosXSelect41[0]<=puntoX41[0]+5&&puntosYSelect41[0]>=puntoY41[0]-5&&puntosYSelect41[0]<=puntoY41[0]+5){
			if(puntosXSelect41[1]>=puntoX41[1]-5&&puntosXSelect41[1]<=puntoX41[1]+5&&puntosYSelect41[1]>=puntoY41[1]-5&&puntosYSelect41[1]<=puntoY41[1]+5){
				val4 = val4;
				pSelect41[0]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[2]-5&&puntosXSelect41[1]<=puntoX41[2]+5&&puntosYSelect41[1]>=puntoY41[2]-5&&puntosYSelect41[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[3]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[9]-5&&puntosXSelect41[1]<=puntoX41[9]+5&&puntosYSelect41[1]>=puntoY41[9]-5&&puntosYSelect41[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[1]=1;
				pSelect41[2]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[8]-5&&puntosXSelect41[1]<=puntoX41[8]+5&&puntosYSelect41[1]>=puntoY41[8]-5&&puntosYSelect41[1]<=puntoY41[8]+5){
				val4 = val4;
				pSelect41[2]=1;
				pSelect41[1]=1;
				pSelect41[14]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[0]-5&&puntosXSelect41[1]<=puntoX41[0]+5&&puntosYSelect41[1]>=puntoY41[0]-5&&puntosYSelect41[1]<=puntoY41[0]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[1]-5&&puntosXSelect41[0]<=puntoX41[1]+5&&puntosYSelect41[0]>=puntoY41[1]-5&&puntosYSelect41[0]<=puntoY41[1]+5){
			if(puntosXSelect41[1]>=puntoX41[3]-5&&puntosXSelect41[1]<=puntoX41[3]+5&&puntosYSelect41[1]>=puntoY41[3]-5&&puntosYSelect41[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[4]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[0]-5&&puntosXSelect41[1]<=puntoX41[0]+5&&puntosYSelect41[1]>=puntoY41[0]-5&&puntosYSelect41[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[0]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[1]-5&&puntosXSelect41[1]<=puntoX41[1]+5&&puntosYSelect41[1]>=puntoY41[1]-5&&puntosYSelect41[1]<=puntoY41[1]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[2]-5&&puntosXSelect41[0]<=puntoX41[2]+5&&puntosYSelect41[0]>=puntoY41[2]-5&&puntosYSelect41[0]<=puntoY41[2]+5){
			if(puntosXSelect41[1]>=puntoX41[3]-5&&puntosXSelect41[1]<=puntoX41[3]+5&&puntosYSelect41[1]>=puntoY41[3]-5&&puntosYSelect41[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[5]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[5]-5&&puntosXSelect41[1]<=puntoX41[5]+5&&puntosYSelect41[1]>=puntoY41[5]-5&&puntosYSelect41[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[8]=1;
				pSelect41[9]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[7]-5&&puntosXSelect41[1]<=puntoX41[7]+5&&puntosYSelect41[1]>=puntoY41[7]-5&&puntosYSelect41[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[8]=1;
				pSelect41[9]=1;
				pSelect41[11]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[0]-5&&puntosXSelect41[1]<=puntoX41[0]+5&&puntosYSelect41[1]>=puntoY41[0]-5&&puntosYSelect41[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[3]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[2]-5&&puntosXSelect41[1]<=puntoX41[2]+5&&puntosYSelect41[1]>=puntoY41[2]-5&&puntosYSelect41[1]<=puntoY41[2]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[3]-5&&puntosXSelect41[0]<=puntoX41[3]+5&&puntosYSelect41[0]>=puntoY41[3]-5&&puntosYSelect41[0]<=puntoY41[3]+5){
			if(puntosXSelect41[1]>=puntoX41[2]-5&&puntosXSelect41[1]<=puntoX41[2]+5&&puntosYSelect41[1]>=puntoY41[2]-5&&puntosYSelect41[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[5]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[4]-5&&puntosXSelect41[1]<=puntoX41[4]+5&&puntosYSelect41[1]>=puntoY41[4]-5&&puntosYSelect41[1]<=puntoY41[4]+5){
				val4 = val4;
				pSelect41[6]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[6]-5&&puntosXSelect41[1]<=puntoX41[6]+5&&puntosYSelect41[1]>=puntoY41[6]-5&&puntosYSelect41[1]<=puntoY41[6]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[6]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[1]-5&&puntosXSelect41[1]<=puntoX41[1]+5&&puntosYSelect41[1]>=puntoY41[1]-5&&puntosYSelect41[1]<=puntoY41[1]+5){
				val4 = val4;
				pSelect41[4]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[3]-5&&puntosXSelect41[1]<=puntoX41[3]+5&&puntosYSelect41[1]>=puntoY41[3]-5&&puntosYSelect41[1]<=puntoY41[3]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[4]-5&&puntosXSelect41[0]<=puntoX41[4]+5&&puntosYSelect41[0]>=puntoY41[4]-5&&puntosYSelect41[0]<=puntoY41[4]+5){
			if(puntosXSelect41[1]>=puntoX41[3]-5&&puntosXSelect41[1]<=puntoX41[3]+5&&puntosYSelect41[1]>=puntoY41[3]-5&&puntosYSelect41[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[6]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[6]-5&&puntosXSelect41[1]<=puntoX41[6]+5&&puntosYSelect41[1]>=puntoY41[6]-5&&puntosYSelect41[1]<=puntoY41[6]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[4]-5&&puntosXSelect41[1]<=puntoX41[4]+5&&puntosYSelect41[1]>=puntoY41[4]-5&&puntosYSelect41[1]<=puntoY41[4]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[5]-5&&puntosXSelect41[0]<=puntoX41[5]+5&&puntosYSelect41[0]>=puntoY41[5]-5&&puntosYSelect41[0]<=puntoY41[5]+5){
			if(puntosXSelect41[1]>=puntoX41[7]-5&&puntosXSelect41[1]<=puntoX41[7]+5&&puntosYSelect41[1]>=puntoY41[7]-5&&puntosYSelect41[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[11]=1;
				pSelect41[9]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[2]-5&&puntosXSelect41[1]<=puntoX41[2]+5&&puntosYSelect41[1]>=puntoY41[2]-5&&puntosYSelect41[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[8]=1;
				pSelect41[9]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[5]-5&&puntosXSelect41[1]<=puntoX41[5]+5&&puntosYSelect41[1]>=puntoY41[5]-5&&puntosYSelect41[1]<=puntoY41[5]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[6]-5&&puntosXSelect41[0]<=puntoX41[6]+5&&puntosYSelect41[0]>=puntoY41[6]-5&&puntosYSelect41[0]<=puntoY41[6]+5){
			if(puntosXSelect41[1]>=puntoX41[7]-5&&puntosXSelect41[1]<=puntoX41[7]+5&&puntosYSelect41[1]>=puntoY41[7]-5&&puntosYSelect41[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[12]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[3]-5&&puntosXSelect41[1]<=puntoX41[3]+5&&puntosYSelect41[1]>=puntoY41[3]-5&&puntosYSelect41[1]<=puntoY41[3]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[6]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[4]-5&&puntosXSelect41[1]<=puntoX41[4]+5&&puntosYSelect41[1]>=puntoY41[4]-5&&puntosYSelect41[1]<=puntoY41[4]+5){
				val4 = val4;
				pSelect41[10]=1;
				pSelect41[7]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[6]-5&&puntosXSelect41[1]<=puntoX41[6]+5&&puntosYSelect41[1]>=puntoY41[6]-5&&puntosYSelect41[1]<=puntoY41[6]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		
		else if(puntosXSelect41[0]>=puntoX41[7]-5&&puntosXSelect41[0]<=puntoX41[7]+5&&puntosYSelect41[0]>=puntoY41[7]-5&&puntosYSelect41[0]<=puntoY41[7]+5){
			if(puntosXSelect41[1]>=puntoX41[8]-5&&puntosXSelect41[1]<=puntoX41[8]+5&&puntosYSelect41[1]>=puntoY41[8]-5&&puntosYSelect41[1]<=puntoY41[8]+5){
				val4 = val4;
				pSelect41[13]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[6]-5&&puntosXSelect41[1]<=puntoX41[6]+5&&puntosYSelect41[1]>=puntoY41[6]-5&&puntosYSelect41[1]<=puntoY41[6]+5){
				val4 = val4;
				pSelect41[12]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[5]-5&&puntosXSelect41[1]<=puntoX41[5]+5&&puntosYSelect41[1]>=puntoY41[5]-5&&puntosYSelect41[1]<=puntoY41[5]+5){
				val4 = val4;
				pSelect41[11]=1;
				pSelect41[9]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[2]-5&&puntosXSelect41[1]<=puntoX41[2]+5&&puntosYSelect41[1]>=puntoY41[2]-5&&puntosYSelect41[1]<=puntoY41[2]+5){
				val4 = val4;
				pSelect41[8]=1;
				pSelect41[9]=1;
				pSelect41[11]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[7]-5&&puntosXSelect41[1]<=puntoX41[7]+5&&puntosYSelect41[1]>=puntoY41[7]-5&&puntosYSelect41[1]<=puntoY41[7]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}

		else if(puntosXSelect41[0]>=puntoX41[8]-5&&puntosXSelect41[0]<=puntoX41[8]+5&&puntosYSelect41[0]>=puntoY41[8]-5&&puntosYSelect41[0]<=puntoY41[8]+5){
			if(puntosXSelect41[1]>=puntoX41[9]-5&&puntosXSelect41[1]<=puntoX41[9]+5&&puntosYSelect41[1]>=puntoY41[9]-5&&puntosYSelect41[1]<=puntoY41[9]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[2]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[0]-5&&puntosXSelect41[1]<=puntoX41[0]+5&&puntosYSelect41[1]>=puntoY41[0]-5&&puntosYSelect41[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[2]=1;
				pSelect41[1]=1;
				pSelect41[14]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[7]-5&&puntosXSelect41[1]<=puntoX41[7]+5&&puntosYSelect41[1]>=puntoY41[7]-5&&puntosYSelect41[1]<=puntoY41[7]+5){
				val4 = val4;
				pSelect41[13]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[8]-5&&puntosXSelect41[1]<=puntoX41[8]+5&&puntosYSelect41[1]>=puntoY41[8]-5&&puntosYSelect41[1]<=puntoY41[8]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else if(puntosXSelect41[0]>=puntoX41[9]-5&&puntosXSelect41[0]<=puntoX41[9]+5&&puntosYSelect41[0]>=puntoY41[9]-5&&puntosYSelect41[0]<=puntoY41[9]+5){
			if(puntosXSelect41[1]>=puntoX41[0]-5&&puntosXSelect41[1]<=puntoX41[0]+5&&puntosYSelect41[1]>=puntoY41[0]-5&&puntosYSelect41[1]<=puntoY41[0]+5){
				val4 = val4;
				pSelect41[1]=1;
				pSelect41[2]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[8]-5&&puntosXSelect41[1]<=puntoX41[8]+5&&puntosYSelect41[1]>=puntoY41[8]-5&&puntosYSelect41[1]<=puntoY41[8]+5){
				val4 = val4;
				pSelect41[14]=1;
				pSelect41[2]=1;
			}
			else if(puntosXSelect41[1]>=puntoX41[9]-5&&puntosXSelect41[1]<=puntoX41[9]+5&&puntosYSelect41[1]>=puntoY41[9]-5&&puntosYSelect41[1]<=puntoY41[9]+5){
				val4 = val4;
			}
			else{
				val4++;
			}	
		}
		else{
			val4++;
		}
		puntosXSelect41.splice(0, 1);
		puntosYSelect41.splice(0, 1);
		
	}

	for(var k=0; k<pSelect41.length; k++){
		totalPSelect41 = totalPSelect41+pSelect41[k];
	}
	for(var j=0; j<selectCorrect41.length; j++){
		totalSelect41 =  totalSelect41+ selectCorrect41[j];
	}

	for(var i=0; i<puntosX2Select42First.length-1; i++){
		if(puntosX2Select42[0]>=puntoX42[0]-5&&puntosX2Select42[0]<=puntoX42[0]+5&&puntosY2Select42[0]>=puntoY42[0]-5&&puntosY2Select42[0]<=puntoY42[0]+5){
			if(puntosX2Select42[1]>=puntoX42[1]-5&&puntosX2Select42[1]<=puntoX42[1]+5&&puntosY2Select42[1]>=puntoY42[1]-5&&puntosY2Select42[1]<=puntoY42[1]+5){
				val42 = val42;
				pSelect42[0]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[2]-5&&puntosX2Select42[1]<=puntoX42[2]+5&&puntosY2Select42[1]>=puntoY42[2]-5&&puntosY2Select42[1]<=puntoY42[2]+5){
				val42 = val42;
				pSelect42[3]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[9]-5&&puntosX2Select42[1]<=puntoX42[9]+5&&puntosY2Select42[1]>=puntoY42[9]-5&&puntosY2Select42[1]<=puntoY42[9]+5){
				val42 = val42;
				pSelect42[1]=1;
				pSelect42[2]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[8]-5&&puntosX2Select42[1]<=puntoX42[8]+5&&puntosY2Select42[1]>=puntoY42[8]-5&&puntosY2Select42[1]<=puntoY42[8]+5){
				val42 = val42;
				pSelect42[2]=1;
				pSelect42[1]=1;
				pSelect42[14]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[0]-5&&puntosX2Select42[1]<=puntoX42[0]+5&&puntosY2Select42[1]>=puntoY42[0]-5&&puntosY2Select42[1]<=puntoY42[0]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[1]-5&&puntosX2Select42[0]<=puntoX42[1]+5&&puntosY2Select42[0]>=puntoY42[1]-5&&puntosY2Select42[0]<=puntoY42[1]+5){
			if(puntosX2Select42[1]>=puntoX42[3]-5&&puntosX2Select42[1]<=puntoX42[3]+5&&puntosY2Select42[1]>=puntoY42[3]-5&&puntosY2Select42[1]<=puntoY42[3]+5){
				val42 = val42;
				pSelect42[4]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[0]-5&&puntosX2Select42[1]<=puntoX42[0]+5&&puntosY2Select42[1]>=puntoY42[0]-5&&puntosY2Select42[1]<=puntoY42[0]+5){
				val42 = val42;
				pSelect42[0]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[1]-5&&puntosX2Select42[1]<=puntoX42[1]+5&&puntosY2Select42[1]>=puntoY42[1]-5&&puntosY2Select42[1]<=puntoY42[1]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[2]-5&&puntosX2Select42[0]<=puntoX42[2]+5&&puntosY2Select42[0]>=puntoY42[2]-5&&puntosY2Select42[0]<=puntoY42[2]+5){
			if(puntosX2Select42[1]>=puntoX42[3]-5&&puntosX2Select42[1]<=puntoX42[3]+5&&puntosY2Select42[1]>=puntoY42[3]-5&&puntosY2Select42[1]<=puntoY42[3]+5){
				val42 = val42;
				pSelect42[5]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[5]-5&&puntosX2Select42[1]<=puntoX42[5]+5&&puntosY2Select42[1]>=puntoY42[5]-5&&puntosY2Select42[1]<=puntoY42[5]+5){
				val42 = val42;
				pSelect42[8]=1;
				pSelect42[9]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[7]-5&&puntosX2Select42[1]<=puntoX42[7]+5&&puntosY2Select42[1]>=puntoY42[7]-5&&puntosY2Select42[1]<=puntoY42[7]+5){
				val42 = val42;
				pSelect42[8]=1;
				pSelect42[9]=1;
				pSelect42[11]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[0]-5&&puntosX2Select42[1]<=puntoX42[0]+5&&puntosY2Select42[1]>=puntoY42[0]-5&&puntosY2Select42[1]<=puntoY42[0]+5){
				val42 = val42;
				pSelect42[3]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[2]-5&&puntosX2Select42[1]<=puntoX42[2]+5&&puntosY2Select42[1]>=puntoY42[2]-5&&puntosY2Select42[1]<=puntoY42[2]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[3]-5&&puntosX2Select42[0]<=puntoX42[3]+5&&puntosY2Select42[0]>=puntoY42[3]-5&&puntosY2Select42[0]<=puntoY42[3]+5){
			if(puntosX2Select42[1]>=puntoX42[2]-5&&puntosX2Select42[1]<=puntoX42[2]+5&&puntosY2Select42[1]>=puntoY42[2]-5&&puntosY2Select42[1]<=puntoY42[2]+5){
				val42 = val42;
				pSelect42[5]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[4]-5&&puntosX2Select42[1]<=puntoX42[4]+5&&puntosY2Select42[1]>=puntoY42[4]-5&&puntosY2Select42[1]<=puntoY42[4]+5){
				val42 = val42;
				pSelect42[6]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[6]-5&&puntosX2Select42[1]<=puntoX42[6]+5&&puntosY2Select42[1]>=puntoY42[6]-5&&puntosY2Select42[1]<=puntoY42[6]+5){
				val42 = val42;
				pSelect42[10]=1;
				pSelect42[6]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[1]-5&&puntosX2Select42[1]<=puntoX42[1]+5&&puntosY2Select42[1]>=puntoY42[1]-5&&puntosY2Select42[1]<=puntoY42[1]+5){
				val42 = val42;
				pSelect42[4]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[3]-5&&puntosX2Select42[1]<=puntoX42[3]+5&&puntosY2Select42[1]>=puntoY42[3]-5&&puntosY2Select42[1]<=puntoY42[3]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[4]-5&&puntosX2Select42[0]<=puntoX42[4]+5&&puntosY2Select42[0]>=puntoY42[4]-5&&puntosY2Select42[0]<=puntoY42[4]+5){
			if(puntosX2Select42[1]>=puntoX42[3]-5&&puntosX2Select42[1]<=puntoX42[3]+5&&puntosY2Select42[1]>=puntoY42[3]-5&&puntosY2Select42[1]<=puntoY42[3]+5){
				val42 = val42;
				pSelect42[6]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[6]-5&&puntosX2Select42[1]<=puntoX42[6]+5&&puntosY2Select42[1]>=puntoY42[6]-5&&puntosY2Select42[1]<=puntoY42[6]+5){
				val42 = val42;
				pSelect42[10]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[4]-5&&puntosX2Select42[1]<=puntoX42[4]+5&&puntosY2Select42[1]>=puntoY42[4]-5&&puntosY2Select42[1]<=puntoY42[4]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[5]-5&&puntosX2Select42[0]<=puntoX42[5]+5&&puntosY2Select42[0]>=puntoY42[5]-5&&puntosY2Select42[0]<=puntoY42[5]+5){
			if(puntosX2Select42[1]>=puntoX42[7]-5&&puntosX2Select42[1]<=puntoX42[7]+5&&puntosY2Select42[1]>=puntoY42[7]-5&&puntosY2Select42[1]<=puntoY42[7]+5){
				val42 = val42;
				pSelect42[11]=1;
				pSelect42[9]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[2]-5&&puntosX2Select42[1]<=puntoX42[2]+5&&puntosY2Select42[1]>=puntoY42[2]-5&&puntosY2Select42[1]<=puntoY42[2]+5){
				val42 = val42;
				pSelect42[8]=1;
				pSelect42[9]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[5]-5&&puntosX2Select42[1]<=puntoX42[5]+5&&puntosY2Select42[1]>=puntoY42[5]-5&&puntosY2Select42[1]<=puntoY42[5]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[6]-5&&puntosX2Select42[0]<=puntoX42[6]+5&&puntosY2Select42[0]>=puntoY42[6]-5&&puntosY2Select42[0]<=puntoY42[6]+5){
			if(puntosX2Select42[1]>=puntoX42[7]-5&&puntosX2Select42[1]<=puntoX42[7]+5&&puntosY2Select42[1]>=puntoY42[7]-5&&puntosY2Select42[1]<=puntoY42[7]+5){
				val42 = val42;
				pSelect42[12]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[3]-5&&puntosX2Select42[1]<=puntoX42[3]+5&&puntosY2Select42[1]>=puntoY42[3]-5&&puntosY2Select42[1]<=puntoY42[3]+5){
				val42 = val42;
				pSelect42[10]=1;
				pSelect42[6]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[4]-5&&puntosX2Select42[1]<=puntoX42[4]+5&&puntosY2Select42[1]>=puntoY42[4]-5&&puntosY2Select42[1]<=puntoY42[4]+5){
				val42 = val42;
				pSelect42[10]=1;
				pSelect42[7]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[6]-5&&puntosX2Select42[1]<=puntoX42[6]+5&&puntosY2Select42[1]>=puntoY42[6]-5&&puntosY2Select42[1]<=puntoY42[6]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		
		else if(puntosX2Select42[0]>=puntoX42[7]-5&&puntosX2Select42[0]<=puntoX42[7]+5&&puntosY2Select42[0]>=puntoY42[7]-5&&puntosY2Select42[0]<=puntoY42[7]+5){
			if(puntosX2Select42[1]>=puntoX42[8]-5&&puntosX2Select42[1]<=puntoX42[8]+5&&puntosY2Select42[1]>=puntoY42[8]-5&&puntosY2Select42[1]<=puntoY42[8]+5){
				val42 = val42;
				pSelect42[13]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[6]-5&&puntosX2Select42[1]<=puntoX42[6]+5&&puntosY2Select42[1]>=puntoY42[6]-5&&puntosY2Select42[1]<=puntoY42[6]+5){
				val42 = val42;
				pSelect42[12]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[5]-5&&puntosX2Select42[1]<=puntoX42[5]+5&&puntosY2Select42[1]>=puntoY42[5]-5&&puntosY2Select42[1]<=puntoY42[5]+5){
				val42 = val42;
				pSelect42[11]=1;
				pSelect42[9]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[2]-5&&puntosX2Select42[1]<=puntoX42[2]+5&&puntosY2Select42[1]>=puntoY42[2]-5&&puntosY2Select42[1]<=puntoY42[2]+5){
				val42 = val42;
				pSelect42[8]=1;
				pSelect42[9]=1;
				pSelect42[11]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[7]-5&&puntosX2Select42[1]<=puntoX42[7]+5&&puntosY2Select42[1]>=puntoY42[7]-5&&puntosY2Select42[1]<=puntoY42[7]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}

		else if(puntosX2Select42[0]>=puntoX42[8]-5&&puntosX2Select42[0]<=puntoX42[8]+5&&puntosY2Select42[0]>=puntoY42[8]-5&&puntosY2Select42[0]<=puntoY42[8]+5){
			if(puntosX2Select42[1]>=puntoX42[9]-5&&puntosX2Select42[1]<=puntoX42[9]+5&&puntosY2Select42[1]>=puntoY42[9]-5&&puntosY2Select42[1]<=puntoY42[9]+5){
				val42 = val42;
				pSelect42[14]=1;
				pSelect42[2]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[0]-5&&puntosX2Select42[1]<=puntoX42[0]+5&&puntosY2Select42[1]>=puntoY42[0]-5&&puntosY2Select42[1]<=puntoY42[0]+5){
				val42 = val42;
				pSelect42[2]=1;
				pSelect42[1]=1;
				pSelect42[14]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[7]-5&&puntosX2Select42[1]<=puntoX42[7]+5&&puntosY2Select42[1]>=puntoY42[7]-5&&puntosY2Select42[1]<=puntoY42[7]+5){
				val42 = val42;
				pSelect42[13]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[8]-5&&puntosX2Select42[1]<=puntoX42[8]+5&&puntosY2Select42[1]>=puntoY42[8]-5&&puntosY2Select42[1]<=puntoY42[8]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else if(puntosX2Select42[0]>=puntoX42[9]-5&&puntosX2Select42[0]<=puntoX42[9]+5&&puntosY2Select42[0]>=puntoY42[9]-5&&puntosY2Select42[0]<=puntoY42[9]+5){
			if(puntosX2Select42[1]>=puntoX42[0]-5&&puntosX2Select42[1]<=puntoX42[0]+5&&puntosY2Select42[1]>=puntoY42[0]-5&&puntosY2Select42[1]<=puntoY42[0]+5){
				val42 = val42;
				pSelect42[1]=1;
				pSelect42[2]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[8]-5&&puntosX2Select42[1]<=puntoX42[8]+5&&puntosY2Select42[1]>=puntoY42[8]-5&&puntosY2Select42[1]<=puntoY42[8]+5){
				val42 = val42;
				pSelect42[14]=1;
				pSelect42[2]=1;
			}
			else if(puntosX2Select42[1]>=puntoX42[9]-5&&puntosX2Select42[1]<=puntoX42[9]+5&&puntosY2Select42[1]>=puntoY42[9]-5&&puntosY2Select42[1]<=puntoY42[9]+5){
				val42 = val42;
			}
			else{
				val42++;
			}	
		}
		else{
			val42++;
		}
		puntosX2Select42.splice(0, 1);
		puntosY2Select42.splice(0, 1);
		
	}

	for(var k=0; k<pSelect42.length; k++){
		totalPSelect42 = totalPSelect42+pSelect42[k];
	}

	for(var j=0; j<selectCorrect42.length; j++){
		totalSelect42 =  totalSelect42+ selectCorrect42[j];
	}

	for(var i=0; i<puntosX3Select43First.length-1; i++){
		if(puntosX3Select43[0]>=puntoX43[0]-5&&puntosX3Select43[0]<=puntoX43[0]+5&&puntosY3Select43[0]>=puntoY43[0]-5&&puntosY3Select43[0]<=puntoY43[0]+5){
			if(puntosX3Select43[1]>=puntoX43[1]-5&&puntosX3Select43[1]<=puntoX43[1]+5&&puntosY3Select43[1]>=puntoY43[1]-5&&puntosY3Select43[1]<=puntoY43[1]+5){
				val43 = val43;
				pSelect43[0]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[2]-5&&puntosX3Select43[1]<=puntoX43[2]+5&&puntosY3Select43[1]>=puntoY43[2]-5&&puntosY3Select43[1]<=puntoY43[2]+5){
				val43 = val43;
				pSelect43[3]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[9]-5&&puntosX3Select43[1]<=puntoX43[9]+5&&puntosY3Select43[1]>=puntoY43[9]-5&&puntosY3Select43[1]<=puntoY43[9]+5){
				val43 = val43;
				pSelect43[1]=1;
				pSelect43[2]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[8]-5&&puntosX3Select43[1]<=puntoX43[8]+5&&puntosY3Select43[1]>=puntoY43[8]-5&&puntosY3Select43[1]<=puntoY43[8]+5){
				val43 = val43;
				pSelect43[2]=1;
				pSelect43[1]=1;
				pSelect43[14]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[0]-5&&puntosX3Select43[1]<=puntoX43[0]+5&&puntosY3Select43[1]>=puntoY43[0]-5&&puntosY3Select43[1]<=puntoY43[0]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[1]-5&&puntosX3Select43[0]<=puntoX43[1]+5&&puntosY3Select43[0]>=puntoY43[1]-5&&puntosY3Select43[0]<=puntoY43[1]+5){
			if(puntosX3Select43[1]>=puntoX43[3]-5&&puntosX3Select43[1]<=puntoX43[3]+5&&puntosY3Select43[1]>=puntoY43[3]-5&&puntosY3Select43[1]<=puntoY43[3]+5){
				val43 = val43;
				pSelect43[4]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[0]-5&&puntosX3Select43[1]<=puntoX43[0]+5&&puntosY3Select43[1]>=puntoY43[0]-5&&puntosY3Select43[1]<=puntoY43[0]+5){
				val43 = val43;
				pSelect43[0]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[1]-5&&puntosX3Select43[1]<=puntoX43[1]+5&&puntosY3Select43[1]>=puntoY43[1]-5&&puntosY3Select43[1]<=puntoY43[1]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[2]-5&&puntosX3Select43[0]<=puntoX43[2]+5&&puntosY3Select43[0]>=puntoY43[2]-5&&puntosY3Select43[0]<=puntoY43[2]+5){
			if(puntosX3Select43[1]>=puntoX43[3]-5&&puntosX3Select43[1]<=puntoX43[3]+5&&puntosY3Select43[1]>=puntoY43[3]-5&&puntosY3Select43[1]<=puntoY43[3]+5){
				val43 = val43;
				pSelect43[5]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[5]-5&&puntosX3Select43[1]<=puntoX43[5]+5&&puntosY3Select43[1]>=puntoY43[5]-5&&puntosY3Select43[1]<=puntoY43[5]+5){
				val43 = val43;
				pSelect43[8]=1;
				pSelect43[9]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[7]-5&&puntosX3Select43[1]<=puntoX43[7]+5&&puntosY3Select43[1]>=puntoY43[7]-5&&puntosY3Select43[1]<=puntoY43[7]+5){
				val43 = val43;
				pSelect43[8]=1;
				pSelect43[9]=1;
				pSelect43[11]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[0]-5&&puntosX3Select43[1]<=puntoX43[0]+5&&puntosY3Select43[1]>=puntoY43[0]-5&&puntosY3Select43[1]<=puntoY43[0]+5){
				val43 = val43;
				pSelect43[3]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[2]-5&&puntosX3Select43[1]<=puntoX43[2]+5&&puntosY3Select43[1]>=puntoY43[2]-5&&puntosY3Select43[1]<=puntoY43[2]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[3]-5&&puntosX3Select43[0]<=puntoX43[3]+5&&puntosY3Select43[0]>=puntoY43[3]-5&&puntosY3Select43[0]<=puntoY43[3]+5){
			if(puntosX3Select43[1]>=puntoX43[2]-5&&puntosX3Select43[1]<=puntoX43[2]+5&&puntosY3Select43[1]>=puntoY43[2]-5&&puntosY3Select43[1]<=puntoY43[2]+5){
				val43 = val43;
				pSelect43[5]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[4]-5&&puntosX3Select43[1]<=puntoX43[4]+5&&puntosY3Select43[1]>=puntoY43[4]-5&&puntosY3Select43[1]<=puntoY43[4]+5){
				val43 = val43;
				pSelect43[6]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[6]-5&&puntosX3Select43[1]<=puntoX43[6]+5&&puntosY3Select43[1]>=puntoY43[6]-5&&puntosY3Select43[1]<=puntoY43[6]+5){
				val43 = val43;
				pSelect43[10]=1;
				pSelect43[6]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[1]-5&&puntosX3Select43[1]<=puntoX43[1]+5&&puntosY3Select43[1]>=puntoY43[1]-5&&puntosY3Select43[1]<=puntoY43[1]+5){
				val43 = val43;
				pSelect43[4]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[3]-5&&puntosX3Select43[1]<=puntoX43[3]+5&&puntosY3Select43[1]>=puntoY43[3]-5&&puntosY3Select43[1]<=puntoY43[3]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[4]-5&&puntosX3Select43[0]<=puntoX43[4]+5&&puntosY3Select43[0]>=puntoY43[4]-5&&puntosY3Select43[0]<=puntoY43[4]+5){
			if(puntosX3Select43[1]>=puntoX43[3]-5&&puntosX3Select43[1]<=puntoX43[3]+5&&puntosY3Select43[1]>=puntoY43[3]-5&&puntosY3Select43[1]<=puntoY43[3]+5){
				val43 = val43;
				pSelect43[6]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[6]-5&&puntosX3Select43[1]<=puntoX43[6]+5&&puntosY3Select43[1]>=puntoY43[6]-5&&puntosY3Select43[1]<=puntoY43[6]+5){
				val43 = val43;
				pSelect43[10]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[4]-5&&puntosX3Select43[1]<=puntoX43[4]+5&&puntosY3Select43[1]>=puntoY43[4]-5&&puntosY3Select43[1]<=puntoY43[4]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[5]-5&&puntosX3Select43[0]<=puntoX43[5]+5&&puntosY3Select43[0]>=puntoY43[5]-5&&puntosY3Select43[0]<=puntoY43[5]+5){
			if(puntosX3Select43[1]>=puntoX43[7]-5&&puntosX3Select43[1]<=puntoX43[7]+5&&puntosY3Select43[1]>=puntoY43[7]-5&&puntosY3Select43[1]<=puntoY43[7]+5){
				val43 = val43;
				pSelect43[11]=1;
				pSelect43[9]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[2]-5&&puntosX3Select43[1]<=puntoX43[2]+5&&puntosY3Select43[1]>=puntoY43[2]-5&&puntosY3Select43[1]<=puntoY43[2]+5){
				val43 = val43;
				pSelect43[8]=1;
				pSelect43[9]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[5]-5&&puntosX3Select43[1]<=puntoX43[5]+5&&puntosY3Select43[1]>=puntoY43[5]-5&&puntosY3Select43[1]<=puntoY43[5]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[6]-5&&puntosX3Select43[0]<=puntoX43[6]+5&&puntosY3Select43[0]>=puntoY43[6]-5&&puntosY3Select43[0]<=puntoY43[6]+5){
			if(puntosX3Select43[1]>=puntoX43[7]-5&&puntosX3Select43[1]<=puntoX43[7]+5&&puntosY3Select43[1]>=puntoY43[7]-5&&puntosY3Select43[1]<=puntoY43[7]+5){
				val43 = val43;
				pSelect43[12]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[3]-5&&puntosX3Select43[1]<=puntoX43[3]+5&&puntosY3Select43[1]>=puntoY43[3]-5&&puntosY3Select43[1]<=puntoY43[3]+5){
				val43 = val43;
				pSelect43[10]=1;
				pSelect43[6]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[4]-5&&puntosX3Select43[1]<=puntoX43[4]+5&&puntosY3Select43[1]>=puntoY43[4]-5&&puntosY3Select43[1]<=puntoY43[4]+5){
				val43 = val43;
				pSelect43[10]=1;
				pSelect43[7]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[6]-5&&puntosX3Select43[1]<=puntoX43[6]+5&&puntosY3Select43[1]>=puntoY43[6]-5&&puntosY3Select43[1]<=puntoY43[6]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		
		else if(puntosX3Select43[0]>=puntoX43[7]-5&&puntosX3Select43[0]<=puntoX43[7]+5&&puntosY3Select43[0]>=puntoY43[7]-5&&puntosY3Select43[0]<=puntoY43[7]+5){
			if(puntosX3Select43[1]>=puntoX43[8]-5&&puntosX3Select43[1]<=puntoX43[8]+5&&puntosY3Select43[1]>=puntoY43[8]-5&&puntosY3Select43[1]<=puntoY43[8]+5){
				val43 = val43;
				pSelect43[13]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[6]-5&&puntosX3Select43[1]<=puntoX43[6]+5&&puntosY3Select43[1]>=puntoY43[6]-5&&puntosY3Select43[1]<=puntoY43[6]+5){
				val43 = val43;
				pSelect43[12]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[5]-5&&puntosX3Select43[1]<=puntoX43[5]+5&&puntosY3Select43[1]>=puntoY43[5]-5&&puntosY3Select43[1]<=puntoY43[5]+5){
				val43 = val43;
				pSelect43[11]=1;
				pSelect43[9]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[2]-5&&puntosX3Select43[1]<=puntoX43[2]+5&&puntosY3Select43[1]>=puntoY43[2]-5&&puntosY3Select43[1]<=puntoY43[2]+5){
				val43 = val43;
				pSelect43[8]=1;
				pSelect43[9]=1;
				pSelect43[11]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[7]-5&&puntosX3Select43[1]<=puntoX43[7]+5&&puntosY3Select43[1]>=puntoY43[7]-5&&puntosY3Select43[1]<=puntoY43[7]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}

		else if(puntosX3Select43[0]>=puntoX43[8]-5&&puntosX3Select43[0]<=puntoX43[8]+5&&puntosY3Select43[0]>=puntoY43[8]-5&&puntosY3Select43[0]<=puntoY43[8]+5){
			if(puntosX3Select43[1]>=puntoX43[9]-5&&puntosX3Select43[1]<=puntoX43[9]+5&&puntosY3Select43[1]>=puntoY43[9]-5&&puntosY3Select43[1]<=puntoY43[9]+5){
				val43 = val43;
				pSelect43[14]=1;
				pSelect43[2]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[0]-5&&puntosX3Select43[1]<=puntoX43[0]+5&&puntosY3Select43[1]>=puntoY43[0]-5&&puntosY3Select43[1]<=puntoY43[0]+5){
				val43 = val43;
				pSelect43[2]=1;
				pSelect43[1]=1;
				pSelect43[14]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[7]-5&&puntosX3Select43[1]<=puntoX43[7]+5&&puntosY3Select43[1]>=puntoY43[7]-5&&puntosY3Select43[1]<=puntoY43[7]+5){
				val43 = val43;
				pSelect43[13]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[8]-5&&puntosX3Select43[1]<=puntoX43[8]+5&&puntosY3Select43[1]>=puntoY43[8]-5&&puntosY3Select43[1]<=puntoY43[8]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else if(puntosX3Select43[0]>=puntoX43[9]-5&&puntosX3Select43[0]<=puntoX43[9]+5&&puntosY3Select43[0]>=puntoY43[9]-5&&puntosY3Select43[0]<=puntoY43[9]+5){
			if(puntosX3Select43[1]>=puntoX43[0]-5&&puntosX3Select43[1]<=puntoX43[0]+5&&puntosY3Select43[1]>=puntoY43[0]-5&&puntosY3Select43[1]<=puntoY43[0]+5){
				val43 = val43;
				pSelect43[1]=1;
				pSelect43[2]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[8]-5&&puntosX3Select43[1]<=puntoX43[8]+5&&puntosY3Select43[1]>=puntoY43[8]-5&&puntosY3Select43[1]<=puntoY43[8]+5){
				val43 = val43;
				pSelect43[14]=1;
				pSelect43[2]=1;
			}
			else if(puntosX3Select43[1]>=puntoX43[9]-5&&puntosX3Select43[1]<=puntoX43[9]+5&&puntosY3Select43[1]>=puntoY43[9]-5&&puntosY3Select43[1]<=puntoY43[9]+5){
				val43 = val43;
			}
			else{
				val43++;
			}	
		}
		else{
			val43++;
		}
		puntosX3Select43.splice(0, 1);
		puntosY3Select43.splice(0, 1);
		
	}

	for(var k=0; k<pSelect43.length; k++){
		totalPSelect43 = totalPSelect43+pSelect43[k];
	}

	for(var j=0; j<selectCorrect43.length; j++){
		totalSelect43 =  totalSelect43+ selectCorrect43[j];
	}

	for(var i=0; i<puntosX4Select44First.length-1; i++){
		if(puntosX4Select44[0]>=puntoX44[0]-5&&puntosX4Select44[0]<=puntoX44[0]+5&&puntosY4Select44[0]>=puntoY44[0]-5&&puntosY4Select44[0]<=puntoY44[0]+5){
			if(puntosX4Select44[1]>=puntoX44[1]-5&&puntosX4Select44[1]<=puntoX44[1]+5&&puntosY4Select44[1]>=puntoY44[1]-5&&puntosY4Select44[1]<=puntoY44[1]+5){
				val44 = val44;
				pSelect44[0]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[2]-5&&puntosX4Select44[1]<=puntoX44[2]+5&&puntosY4Select44[1]>=puntoY44[2]-5&&puntosY4Select44[1]<=puntoY44[2]+5){
				val44 = val44;
				pSelect44[3]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[9]-5&&puntosX4Select44[1]<=puntoX44[9]+5&&puntosY4Select44[1]>=puntoY44[9]-5&&puntosY4Select44[1]<=puntoY44[9]+5){
				val44 = val44;
				pSelect44[1]=1;
				pSelect44[2]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[8]-5&&puntosX4Select44[1]<=puntoX44[8]+5&&puntosY4Select44[1]>=puntoY44[8]-5&&puntosY4Select44[1]<=puntoY44[8]+5){
				val44 = val44;
				pSelect44[2]=1;
				pSelect44[1]=1;
				pSelect44[14]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[0]-5&&puntosX4Select44[1]<=puntoX44[0]+5&&puntosY4Select44[1]>=puntoY44[0]-5&&puntosY4Select44[1]<=puntoY44[0]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[1]-5&&puntosX4Select44[0]<=puntoX44[1]+5&&puntosY4Select44[0]>=puntoY44[1]-5&&puntosY4Select44[0]<=puntoY44[1]+5){
			if(puntosX4Select44[1]>=puntoX44[3]-5&&puntosX4Select44[1]<=puntoX44[3]+5&&puntosY4Select44[1]>=puntoY44[3]-5&&puntosY4Select44[1]<=puntoY44[3]+5){
				val44 = val44;
				pSelect44[4]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[0]-5&&puntosX4Select44[1]<=puntoX44[0]+5&&puntosY4Select44[1]>=puntoY44[0]-5&&puntosY4Select44[1]<=puntoY44[0]+5){
				val44 = val44;
				pSelect44[0]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[1]-5&&puntosX4Select44[1]<=puntoX44[1]+5&&puntosY4Select44[1]>=puntoY44[1]-5&&puntosY4Select44[1]<=puntoY44[1]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[2]-5&&puntosX4Select44[0]<=puntoX44[2]+5&&puntosY4Select44[0]>=puntoY44[2]-5&&puntosY4Select44[0]<=puntoY44[2]+5){
			if(puntosX4Select44[1]>=puntoX44[3]-5&&puntosX4Select44[1]<=puntoX44[3]+5&&puntosY4Select44[1]>=puntoY44[3]-5&&puntosY4Select44[1]<=puntoY44[3]+5){
				val44 = val44;
				pSelect44[5]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[5]-5&&puntosX4Select44[1]<=puntoX44[5]+5&&puntosY4Select44[1]>=puntoY44[5]-5&&puntosY4Select44[1]<=puntoY44[5]+5){
				val44 = val44;
				pSelect44[8]=1;
				pSelect44[9]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[7]-5&&puntosX4Select44[1]<=puntoX44[7]+5&&puntosY4Select44[1]>=puntoY44[7]-5&&puntosY4Select44[1]<=puntoY44[7]+5){
				val44 = val44;
				pSelect44[8]=1;
				pSelect44[9]=1;
				pSelect44[11]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[0]-5&&puntosX4Select44[1]<=puntoX44[0]+5&&puntosY4Select44[1]>=puntoY44[0]-5&&puntosY4Select44[1]<=puntoY44[0]+5){
				val44 = val44;
				pSelect44[3]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[2]-5&&puntosX4Select44[1]<=puntoX44[2]+5&&puntosY4Select44[1]>=puntoY44[2]-5&&puntosY4Select44[1]<=puntoY44[2]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[3]-5&&puntosX4Select44[0]<=puntoX44[3]+5&&puntosY4Select44[0]>=puntoY44[3]-5&&puntosY4Select44[0]<=puntoY44[3]+5){
			if(puntosX4Select44[1]>=puntoX44[2]-5&&puntosX4Select44[1]<=puntoX44[2]+5&&puntosY4Select44[1]>=puntoY44[2]-5&&puntosY4Select44[1]<=puntoY44[2]+5){
				val44 = val44;
				pSelect44[5]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[4]-5&&puntosX4Select44[1]<=puntoX44[4]+5&&puntosY4Select44[1]>=puntoY44[4]-5&&puntosY4Select44[1]<=puntoY44[4]+5){
				val44 = val44;
				pSelect44[6]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[6]-5&&puntosX4Select44[1]<=puntoX44[6]+5&&puntosY4Select44[1]>=puntoY44[6]-5&&puntosY4Select44[1]<=puntoY44[6]+5){
				val44 = val44;
				pSelect44[10]=1;
				pSelect44[6]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[1]-5&&puntosX4Select44[1]<=puntoX44[1]+5&&puntosY4Select44[1]>=puntoY44[1]-5&&puntosY4Select44[1]<=puntoY44[1]+5){
				val44 = val44;
				pSelect44[4]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[3]-5&&puntosX4Select44[1]<=puntoX44[3]+5&&puntosY4Select44[1]>=puntoY44[3]-5&&puntosY4Select44[1]<=puntoY44[3]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[4]-5&&puntosX4Select44[0]<=puntoX44[4]+5&&puntosY4Select44[0]>=puntoY44[4]-5&&puntosY4Select44[0]<=puntoY44[4]+5){
			if(puntosX4Select44[1]>=puntoX44[3]-5&&puntosX4Select44[1]<=puntoX44[3]+5&&puntosY4Select44[1]>=puntoY44[3]-5&&puntosY4Select44[1]<=puntoY44[3]+5){
				val44 = val44;
				pSelect44[6]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[6]-5&&puntosX4Select44[1]<=puntoX44[6]+5&&puntosY4Select44[1]>=puntoY44[6]-5&&puntosY4Select44[1]<=puntoY44[6]+5){
				val44 = val44;
				pSelect44[10]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[4]-5&&puntosX4Select44[1]<=puntoX44[4]+5&&puntosY4Select44[1]>=puntoY44[4]-5&&puntosY4Select44[1]<=puntoY44[4]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[5]-5&&puntosX4Select44[0]<=puntoX44[5]+5&&puntosY4Select44[0]>=puntoY44[5]-5&&puntosY4Select44[0]<=puntoY44[5]+5){
			if(puntosX4Select44[1]>=puntoX44[7]-5&&puntosX4Select44[1]<=puntoX44[7]+5&&puntosY4Select44[1]>=puntoY44[7]-5&&puntosY4Select44[1]<=puntoY44[7]+5){
				val44 = val44;
				pSelect44[11]=1;
				pSelect44[9]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[2]-5&&puntosX4Select44[1]<=puntoX44[2]+5&&puntosY4Select44[1]>=puntoY44[2]-5&&puntosY4Select44[1]<=puntoY44[2]+5){
				val44 = val44;
				pSelect44[8]=1;
				pSelect44[9]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[5]-5&&puntosX4Select44[1]<=puntoX44[5]+5&&puntosY4Select44[1]>=puntoY44[5]-5&&puntosY4Select44[1]<=puntoY44[5]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[6]-5&&puntosX4Select44[0]<=puntoX44[6]+5&&puntosY4Select44[0]>=puntoY44[6]-5&&puntosY4Select44[0]<=puntoY44[6]+5){
			if(puntosX4Select44[1]>=puntoX44[7]-5&&puntosX4Select44[1]<=puntoX44[7]+5&&puntosY4Select44[1]>=puntoY44[7]-5&&puntosY4Select44[1]<=puntoY44[7]+5){
				val44 = val44;
				pSelect44[12]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[3]-5&&puntosX4Select44[1]<=puntoX44[3]+5&&puntosY4Select44[1]>=puntoY44[3]-5&&puntosY4Select44[1]<=puntoY44[3]+5){
				val44 = val44;
				pSelect44[10]=1;
				pSelect44[6]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[4]-5&&puntosX4Select44[1]<=puntoX44[4]+5&&puntosY4Select44[1]>=puntoY44[4]-5&&puntosY4Select44[1]<=puntoY44[4]+5){
				val44 = val44;
				pSelect44[10]=1;
				pSelect44[7]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[6]-5&&puntosX4Select44[1]<=puntoX44[6]+5&&puntosY4Select44[1]>=puntoY44[6]-5&&puntosY4Select44[1]<=puntoY44[6]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		
		else if(puntosX4Select44[0]>=puntoX44[7]-5&&puntosX4Select44[0]<=puntoX44[7]+5&&puntosY4Select44[0]>=puntoY44[7]-5&&puntosY4Select44[0]<=puntoY44[7]+5){
			if(puntosX4Select44[1]>=puntoX44[8]-5&&puntosX4Select44[1]<=puntoX44[8]+5&&puntosY4Select44[1]>=puntoY44[8]-5&&puntosY4Select44[1]<=puntoY44[8]+5){
				val44 = val44;
				pSelect44[13]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[6]-5&&puntosX4Select44[1]<=puntoX44[6]+5&&puntosY4Select44[1]>=puntoY44[6]-5&&puntosY4Select44[1]<=puntoY44[6]+5){
				val44 = val44;
				pSelect44[12]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[5]-5&&puntosX4Select44[1]<=puntoX44[5]+5&&puntosY4Select44[1]>=puntoY44[5]-5&&puntosY4Select44[1]<=puntoY44[5]+5){
				val44 = val44;
				pSelect44[11]=1;
				pSelect44[9]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[2]-5&&puntosX4Select44[1]<=puntoX44[2]+5&&puntosY4Select44[1]>=puntoY44[2]-5&&puntosY4Select44[1]<=puntoY44[2]+5){
				val44 = val44;
				pSelect44[8]=1;
				pSelect44[9]=1;
				pSelect44[11]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[7]-5&&puntosX4Select44[1]<=puntoX44[7]+5&&puntosY4Select44[1]>=puntoY44[7]-5&&puntosY4Select44[1]<=puntoY44[7]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}

		else if(puntosX4Select44[0]>=puntoX44[8]-5&&puntosX4Select44[0]<=puntoX44[8]+5&&puntosY4Select44[0]>=puntoY44[8]-5&&puntosY4Select44[0]<=puntoY44[8]+5){
			if(puntosX4Select44[1]>=puntoX44[9]-5&&puntosX4Select44[1]<=puntoX44[9]+5&&puntosY4Select44[1]>=puntoY44[9]-5&&puntosY4Select44[1]<=puntoY44[9]+5){
				val44 = val44;
				pSelect44[14]=1;
				pSelect44[2]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[0]-5&&puntosX4Select44[1]<=puntoX44[0]+5&&puntosY4Select44[1]>=puntoY44[0]-5&&puntosY4Select44[1]<=puntoY44[0]+5){
				val44 = val44;
				pSelect44[2]=1;
				pSelect44[1]=1;
				pSelect44[14]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[7]-5&&puntosX4Select44[1]<=puntoX44[7]+5&&puntosY4Select44[1]>=puntoY44[7]-5&&puntosY4Select44[1]<=puntoY44[7]+5){
				val44 = val44;
				pSelect44[13]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[8]-5&&puntosX4Select44[1]<=puntoX44[8]+5&&puntosY4Select44[1]>=puntoY44[8]-5&&puntosY4Select44[1]<=puntoY44[8]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else if(puntosX4Select44[0]>=puntoX44[9]-5&&puntosX4Select44[0]<=puntoX44[9]+5&&puntosY4Select44[0]>=puntoY44[9]-5&&puntosY4Select44[0]<=puntoY44[9]+5){
			if(puntosX4Select44[1]>=puntoX44[0]-5&&puntosX4Select44[1]<=puntoX44[0]+5&&puntosY4Select44[1]>=puntoY44[0]-5&&puntosY4Select44[1]<=puntoY44[0]+5){
				val44 = val44;
				pSelect44[1]=1;
				pSelect44[2]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[8]-5&&puntosX4Select44[1]<=puntoX44[8]+5&&puntosY4Select44[1]>=puntoY44[8]-5&&puntosY4Select44[1]<=puntoY44[8]+5){
				val44 = val44;
				pSelect44[14]=1;
				pSelect44[2]=1;
			}
			else if(puntosX4Select44[1]>=puntoX44[9]-5&&puntosX4Select44[1]<=puntoX44[9]+5&&puntosY4Select44[1]>=puntoY44[9]-5&&puntosY4Select44[1]<=puntoY44[9]+5){
				val44 = val44;
			}
			else{
				val44++;
			}	
		}
		else{
			val44++;
		}
		puntosX4Select44.splice(0, 1);
		puntosY4Select44.splice(0, 1);
		
	}

	for(var k=0; k<pSelect44.length; k++){
		totalPSelect44 = totalPSelect44+pSelect44[k];
	}
	for(var j=0; j<selectCorrect41.length; j++){
		totalSelect44 =  totalSelect44+ selectCorrect44[j];
	}

	if((val4==0 && totalPSelect41==15&&totalSelect41==7)||(val42==0 && totalPSelect42==15&&totalSelect42==7)||(val43==0 && totalPSelect43==15&&totalSelect43==7)||(val44==0 && totalPSelect44==15&&totalSelect44==7)){
		validar = 1;
	}
	else{
		validar = 0;
	}
	console.log(totalPSelect41 + " - "+val4+" - "+totalSelect41);
	console.log(totalPSelect42 + " - "+val42+" - "+totalSelect42);
	console.log(totalPSelect43 + " - "+val43+" - "+totalSelect43);
	console.log(totalPSelect44 + " - "+val44+" - "+totalSelect44);
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
			for(var i=0; i<puntoY.length; i++){
				if((x24>=puntoX41[i]-5&&x24<=puntoX41[i]+5&&y24>=puntoY41[i]-5&&y24<=puntoY41[i]+5)){
					if(i==0){
						selectCorrect41[0]=1;
					}
					else if(i==1){
						selectCorrect41[1]=1;
					}
					else if(i==2){
						selectCorrect41[2]=1;
					}
					else if(i==3){
						selectCorrect41[3]=1;
					}
					else if(i==6){
						selectCorrect41[4]=1;
					}
					else if(i==7){
						selectCorrect41[5]=1;
					}
					else if(i==8){
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
					puntosXSelect41.push(x24);
					puntosYSelect41.push(y24);
					puntosXSelect41First.push(x24);
					puntosYSelect41First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}
				if((x24>=puntoX42[i]-5&&x24<=puntoX42[i]+5&&y24>=puntoY42[i]-5&&y24<=puntoY42[i]+5)){
					if(i==0){
						selectCorrect42[0]=1;
					}
					else if(i==1){
						selectCorrect42[1]=1;
					}
					else if(i==2){
						selectCorrect42[2]=1;
					}
					else if(i==3){
						selectCorrect42[3]=1;
					}
					else if(i==6){
						selectCorrect42[4]=1;
					}
					else if(i==7){
						selectCorrect42[5]=1;
					}
					else if(i==8){
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
					puntosX2Select42.push(x24);
					puntosY2Select42.push(y24);
					puntosX2Select42First.push(x24);
					puntosY2Select42First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}
				if((x24>=puntoX43[i]-5&&x24<=puntoX43[i]+5&&y24>=puntoY43[i]-5&&y24<=puntoY43[i]+5)){
					if(i==0){
						selectCorrect43[0]=1;
					}
					else if(i==1){
						selectCorrect43[1]=1;
					}
					else if(i==2){
						selectCorrect43[2]=1;
					}
					else if(i==3){
						selectCorrect43[3]=1;
					}
					else if(i==6){
						selectCorrect43[4]=1;
					}
					else if(i==7){
						selectCorrect43[5]=1;
					}
					else if(i==8){
						selectCorrect43[6]=1;
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
					puntosX3Select43.push(x24);
					puntosY3Select43.push(y24);
					puntosX3Select43First.push(x24);
					puntosY3Select43First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}
				if((x24>=puntoX44[i]-5&&x24<=puntoX44[i]+5&&y24>=puntoY44[i]-5&&y24<=puntoY44[i]+5)){
					if(i==0){
						selectCorrect44[0]=1;
					}
					else if(i==1){
						selectCorrect44[1]=1;
					}
					else if(i==2){
						selectCorrect44[2]=1;
					}
					else if(i==3){
						selectCorrect44[3]=1;
					}
					else if(i==6){
						selectCorrect44[4]=1;
					}
					else if(i==7){
						selectCorrect44[5]=1;
					}
					else if(i==8){
						selectCorrect44[6]=1;
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
					puntosX4Select44.push(x24);
					puntosY4Select44.push(y24);
					puntosX4Select44First.push(x24);
					puntosY4Select44First.push(y24);
					mouseClick4 =true;
					x14 = axi.x;
					y14 = axi.y;
					cantSelect1 = 1;
				}
			}
			if(cantSelect1 == 1){
				puntosXSelect4T.push(x24);
				puntosYSelect4T.push(y24);
				puntosXSelect4TFirst.push(x24);
				puntosYSelect4TFirst.push(y24);
			}
		}
		else{
			x14 = axi.x;
			y14 = axi.y;
			console.log(x14+ " - "+ y14);
			for(var i=0; i<puntoY.length; i++){
				if(x14>=puntoX41[i]-5&&x14<=puntoX41[i]+5&&y14>=puntoY41[i]-5&&y14<=puntoY41[i]+5){
					if(i==0){
						selectCorrect41[0]=1;
					}
					else if(i==1){
						selectCorrect41[1]=1;
					}
					else if(i==2){
						selectCorrect41[2]=1;
					}
					else if(i==3){
						selectCorrect41[3]=1;
					}
					else if(i==6){
						selectCorrect41[4]=1;
					}
					else if(i==7){
						selectCorrect41[5]=1;
					}
					else if(i==8){
						selectCorrect41[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosXSelect41.push(x14);
					puntosYSelect41.push(y14);
					puntosXSelect41First.push(x14);
					puntosYSelect41First.push(y14);
					cantSelect1 = 1;
				}
				if(x14>=puntoX42[i]-5&&x14<=puntoX42[i]+5&&y14>=puntoY42[i]-5&&y14<=puntoY42[i]+5){
					if(i==0){
						selectCorrect42[0]=1;
					}
					else if(i==1){
						selectCorrect42[1]=1;
					}
					else if(i==2){
						selectCorrect42[2]=1;
					}
					else if(i==3){
						selectCorrect42[3]=1;
					}
					else if(i==6){
						selectCorrect42[4]=1;
					}
					else if(i==7){
						selectCorrect42[5]=1;
					}
					else if(i==8){
						selectCorrect42[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosX2Select42.push(x14);
					puntosY2Select42.push(y14);
					puntosX2Select42First.push(x14);
					puntosY2Select42First.push(y14);
					cantSelect1 = 1;
				}
				if(x14>=puntoX43[i]-5&&x14<=puntoX43[i]+5&&y14>=puntoY43[i]-5&&y14<=puntoY43[i]+5){
					if(i==0){
						selectCorrect43[0]=1;
					}
					else if(i==1){
						selectCorrect43[1]=1;
					}
					else if(i==2){
						selectCorrect43[2]=1;
					}
					else if(i==3){
						selectCorrect43[3]=1;
					}
					else if(i==6){
						selectCorrect43[4]=1;
					}
					else if(i==7){
						selectCorrect43[5]=1;
					}
					else if(i==8){
						selectCorrect43[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosX3Select43.push(x14);
					puntosY3Select43.push(y14);
					puntosX3Select43First.push(x14);
					puntosY3Select43First.push(y14);
					cantSelect1 = 1;
				}
				if(x14>=puntoX44[i]-5&&x14<=puntoX44[i]+5&&y14>=puntoY44[i]-5&&y14<=puntoY44[i]+5){
					if(i==0){
						selectCorrect44[0]=1;
					}
					else if(i==1){
						selectCorrect44[1]=1;
					}
					else if(i==2){
						selectCorrect44[2]=1;
					}
					else if(i==3){
						selectCorrect44[3]=1;
					}
					else if(i==6){
						selectCorrect44[4]=1;
					}
					else if(i==7){
						selectCorrect44[5]=1;
					}
					else if(i==8){
						selectCorrect44[6]=1;
					}
					mouseClick4 =true;
					var punto = [axi.x, axi.y];
					puntosSelec4.push(punto);
					ctx4.fillStyle = "red";
					ctx4.arc(x14,y14,2,0,2*Math.PI, false);
					ctx4.fill();
					ctx4.closePath();
					puntosX4Select44.push(x14);
					puntosY4Select44.push(y14);
					puntosX4Select44First.push(x14);
					puntosY4Select44First.push(y14);
					cantSelect1 = 1;
				}
			}
			if(cantSelect1 == 1){
				puntosXSelect4T.push(x14);
				puntosYSelect4T.push(y14);
				puntosXSelect4TFirst.push(x14);
				puntosYSelect4TFirst.push(y14);
			}

			console.log(mouseDown);
		}

		console.log("hola "+puntosXSelect4TFirst[puntosXSelect4TFirst.length-1] +" - "+ puntosYSelect4TFirst[puntosXSelect4TFirst.length-1]);

		if(puntosXSelect41.length>0||puntosX2Select42.length>0||puntosX3Select43.length>0||puntosX4Select44.length>0){
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
		val43=0;
		val44=0;
		puntosXSelect41.splice(0, puntosXSelect41.length);
		puntosYSelect41.splice(0, puntosYSelect41.length);
		puntosXSelect41First.splice(0, puntosXSelect41First.length);
		puntosYSelect41First.splice(0, puntosYSelect41First.length);
		puntosX2Select42.splice(0, puntosX2Select42.length);
		puntosY2Select42.splice(0, puntosY2Select42.length);
		puntosX2Select42First.splice(0, puntosX2Select42First.length);
		puntosY2Select42First.splice(0, puntosY2Select42First.length);
		puntosX3Select43.splice(0, puntosX3Select43.length);
		puntosY3Select43.splice(0, puntosY3Select43.length);
		puntosX3Select43First.splice(0, puntosX3Select43First.length);
		puntosY3Select43First.splice(0, puntosY3Select43First.length);
		puntosX4Select44.splice(0, puntosX4Select44.length);
		puntosY4Select44.splice(0, puntosY4Select44.length);
		puntosX4Select44First.splice(0, puntosX4Select44First.length);
		puntosY4Select44First.splice(0, puntosY4Select44First.length);
		selectCorrect41 = [0,0,0,0,0,0,0];
		totalSelect41 = 0;
		pSelect41 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect41 = 0;
		selectCorrect42 = [0,0,0,0,0,0,0];
		totalSelect42 = 0;
		pSelect42 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect42 = 0;
		selectCorrect43 = [0,0,0,0,0,0,0];
		totalSelect43 = 0;
		pSelect43 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect43 = 0;
		selectCorrect44 = [0,0,0,0,0,0,0];
		totalSelect44 = 0;
		pSelect44 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect44 = 0;
		if(puntosXSelect41.length>0||puntosX2Select42.length>0||puntosX3Select43.length>0||puntosX4Select44.length>0){
			document.getElementById("fc4").checked = true;
		}
		else{
			document.getElementById("fc4").checked = false;
		}
	});

	$('#ultimoF4').on('click', function(){
		pSelect41 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect51 = 0;
		pSelect42 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect52 = 0;
		pSelect43 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect53 = 0;
		pSelect44 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		totalPSelect54 = 0;

		var finX = puntosXSelect4TFirst[puntosXSelect4TFirst.length-1];
		var finY = puntosYSelect4TFirst[puntosYSelect4TFirst.length-1];
		var f4=false;
		var f3=false;
		var f2=false;
		var f1=false;
		for(var i2=0; i2<puntoX41.length; i2++){
			if(finX>=puntoX41[i2]-5&&finX<=puntoX41[i2]+5&&finY>=puntoY41[i2]-5&&finY<=puntoY41[i2]+5){
				f1=true;
			}
			if(finX>=puntoX42[i2]-5&&finX<=puntoX42[i2]+5&&finY>=puntoY42[i2]-5&&finY<=puntoY42[i2]+5){
				f2=true;
			}
			if(finX>=puntoX43[i2]-5&&finX<=puntoX43[i2]+5&&finY>=puntoY43[i2]-5&&finY<=puntoY43[i2]+5){
				f3=true;
			}
			if(finX>=puntoX44[i2]-5&&finX<=puntoX44[i2]+5&&finY>=puntoY44[i2]-5&&finY<=puntoY44[i2]+5){
				f4=true;
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

	if(f1){
			var finF1 = puntosXSelect41First.length-1;
			for(var i2=0; i2<puntoY41.length; i2++){
				if(puntosXSelect41[finF1]>=puntoX41[i2]-5&&puntosXSelect41[finF1]<=puntoX41[i2]+5&&puntosYSelect41[finF1]>=puntoY41[i2]-5&&puntosYSelect41[finF1]<=puntoY41[i2]+5){
					if(i2==0){
						selectCorrect41[0]=0;
					}
					else if(i2==1){
						selectCorrect41[1]=0;
					}
					else if(i2==2){
						selectCorrect41[2]=0;
					}
					else if(i2==3){
						selectCorrect41[3]=0;
					}
					else if(i2==6){
						selectCorrect41[4]=0;
					}
					else if(i2==7){
						selectCorrect41[5]=0;
					}
					else if(i2==8){
						selectCorrect41[6]=0;
					}
				}
			}
			puntosXSelect41.pop();
			puntosYSelect41.pop();
			puntosXSelect41First.pop();
			puntosYSelect41First.pop();
		}

		if(f2){
			var finF2 = puntosX2Select42First.length-1;
			for(var i2=0; i2<puntoX42.length; i2++){
				if(puntosX2Select42[finF2]>=puntoX42[i2]-5&&puntosX2Select42[finF2]<=puntoX42[i2]+5&&puntosY2Select42[finF2]>=puntoY42[i2]-5&&puntosY2Select42[finF2]<=puntoY42[i2]+5){
					if(i2==0){
						selectCorrect42[0]=0;
					}
					else if(i2==1){
						selectCorrect42[1]=0;
					}
					else if(i2==2){
						selectCorrect42[2]=0;
					}
					else if(i2==3){
						selectCorrect42[3]=0;
					}
					else if(i2==6){
						selectCorrect42[4]=0;
					}
					else if(i2==7){
						selectCorrect42[5]=0;
					}
					else if(i2==8){
						selectCorrect42[6]=0;
					}
				}
			}
			puntosX2Select42.pop();
			puntosY2Select42.pop();
			puntosX2Select42First.pop();
			puntosY2Select42First.pop();
		}

		if(f3){
			var finF3 = puntosX3Select43First.length-1;
			for(var i2=0; i2<puntoY43.length; i2++){
				if(puntosX3Select43[finF3]>=puntoX43[i2]-5&&puntosX3Select43[finF3]<=puntoX43[i2]+5&&puntosY3Select43[finF3]>=puntoY43[i2]-5&&puntosY3Select43[finF3]<=puntoY43[i2]+5){
					if(i2==0){
						selectCorrect43[0]=0;
					}
					else if(i2==1){
						selectCorrect43[1]=0;
					}
					else if(i2==2){
						selectCorrect43[2]=0;
					}
					else if(i2==3){
						selectCorrect43[3]=0;
					}
					else if(i2==6){
						selectCorrect43[4]=0;
					}
					else if(i2==7){
						selectCorrect43[5]=0;
					}
					else if(i2==8){
						selectCorrect43[6]=0;
					}
				}
			}
			puntosX3Select43.pop();
			puntosY3Select43.pop();
			puntosX3Select43First.pop();
			puntosY3Select43First.pop();
		}
		if(f4){
			var finF4 = puntosX4Select44First.length-1;
			for(var i2=0; i2<puntoY44.length; i2++){
				if(puntosX4Select44[finF4]>=puntoX43[i2]-5&&puntosX4Select44[finF4]<=puntoX43[i2]+5&&puntosY4Select44[finF4]>=puntoY43[i2]-5&&puntosY4Select44[finF4]<=puntoY43[i2]+5){
					if(i2==0){
						selectCorrect44[0]=0;
					}
					else if(i2==1){
						selectCorrect44[1]=0;
					}
					else if(i2==2){
						selectCorrect44[2]=0;
					}
					else if(i2==3){
						selectCorrect44[3]=0;
					}
					else if(i2==6){
						selectCorrect44[4]=0;
					}
					else if(i2==7){
						selectCorrect44[5]=0;
					}
					else if(i2==8){
						selectCorrect44[6]=0;
					}
				}
			}
			puntosX4Select44.pop();
			puntosY4Select44.pop();
			puntosX4Select44First.pop();
			puntosY4Select44First.pop();
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
			if(puntosXSelect5T.length>0){
		document.getElementById("fc4").checked = true;
	}
	else{
		document.getElementById("fc4").checked = false;
	}
		
	});
});
