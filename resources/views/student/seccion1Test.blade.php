<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Expires" content="0"/>
	<meta http-equiv="Pragma" content="no-cache"/>
	<title>Test Estilo Cognitivo</title>
	<link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ asset('css/testEstilo.css')}}">
	<link rel="shortcut icon" href="{{ asset('images/favicon.ico')}}" /> 
	<link rel="stylesheet" href="{{ asset('plugins/animate/animate.css') }}">

</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-light">
		<a class="navbar-brand js-scroll-trigger" href="{{url('/')}}">
			<img src="{{ asset('images/logo.png') }}" alt="Logo" width="45" height="40">
			<b>Fisi</b>matica</a>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="men collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item mx-0 mx-lg-1">
					<a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="{{ url('/logout') }}">Cerrar Sesión</a>
				</li>
			</ul>
		</div>
	</nav>
	<br>
	<div class="container">
		<div class="titulo">
			<h4 align="left" class="animated">Sección 1</h4>
		</div>
		<div style="position: relative;">
			<div class="imgTit animated"></div>
		</div>
		<div class="contenido">
			<br>
			<div class="row">
				<div class="col-md-2 col-sm-12 col-sx-12">
					<div class="time"><b>Tiempo: </b><label id = "tiempo"> 02:00</label></div>
					<br>
					<form action="test_estilo_congnitivo_s2" id="formC1" method="get">
						<input type="hidden" name="aciertoC1" id="C1" value="0">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc1"><label><b>1. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
										<div class="checkbox">
											<input type="checkbox" value="" id="fc2"><label><b>2. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc3"><label><b>3. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc4"><label><b>4. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc5"><label><b>5. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc6"><label><b>6. </b></label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc7"><label><b>7. </b></label>
									</div></a>
								</li>
							</ul>
							<center>
							<button onclick="siguienteSeccion()"class="btn btn-primary boton" type="submit" id="seccion2">Siguiente sección</button>
							</center>
						</form>
					</div>


					<div class="col-md-10 col-sm-12 col-sx-12 completo">
						<div class="figurasSimples">
						<div class="row text-center" id="fs">

							<div class="col-xs-1 A">
								<center><b>A</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs7.png')}}" height="80">
								
							</div>
							<div class="col-xs-1 B">
								<center><b>B</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs1.png')}}" height="80">
								
							</div>
							<div class="col-xs-1 C">
								<center><b>C</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs5.png')}}" height="60">
							</div>
							<div class="col-xs-1 D">
								<center><b>D</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs3.png')}}" height="80">
							</div>
							<div class="col-xs-1 E">
								<center><b>E</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs4.png')}}" height="80">
							</div>
							<div class="col-xs-1 F">
								<center><b>F</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs6.png')}}" height="120">
							</div>
							<div class="col-xs-1 G">
								<center><b>G</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs2.png')}}" height="80">
							</div>
							<div class="col-xs-1 H">
								<center><b>H</b></center>
								<img src="{{ asset('images/test/figuraSimple/fs8.png')}}" width="100">
							</div>
						</div></div>
						<button type="button" class="btn btn-secondary boton btnMostrar" onclick="figuraCompleja()"><span id="btnFC">Mostrar Figura Compleja</span></button>
						<div class="tab-content" id="fc">
							<div class="tab-pane active" id="tabs-1" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
										<canvas id="canvas1">
											Tu navegador no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "B".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button type="button" id="limpiarF1"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF1"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab2()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-2" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
											<br>
										<canvas id="canvas2">
											Tu navegador no soporta canvas.
										</canvas>
										<br>
										<br><b>Encuentra la figura simple "G".</b>
										</center>
									</div>
									<div class="col-md-4 ">
										<div class="row">
											<button  type="button" id="limpiarF2"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF2"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab1()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab3()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-3" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
											<br>
										<canvas id="canvas3">
											Tu navegador no soporta canvas.
										</canvas>
										<br>
										<br><b>Encuentra la figura simple "D".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF3"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF3"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab2()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab4()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-4" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
											<br>
										<canvas id="canvas4">
											Tu navegador no soporta canvas.
										</canvas>
									<br>
										<br><b>Encuentra la figura simple "E".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF4"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF4"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab3()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab5()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-5" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
											<br>
										<canvas id="canvas5">
											Tu navegador no soporta canvas.
										</canvas>
										<br>
										<br><b>Encuentra la figura simple "C".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF5"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF5"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab4()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab6()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-6" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
										<canvas id="canvas6">
											Tu navegador no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "F".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF6"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF6" class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab5()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab7()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-7" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
										<canvas id="canvas7">
											Tu navegador no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "A".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF7"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF7"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab6()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="{{ asset('plugins/jquery/jquery-3.3.1.js')}}"></script>
		<script type="text/javascript" src="{{ asset('plugins/bootstrap/js/bootstrap.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F1.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F2.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F3.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F4.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F5.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F6.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion1F7.js') }}"></script>
		<script type="text/javascript">

if(history.forward(1)){
location.replace(history.forward(1))
}

function siguienteSeccion(){
	var a=validarF1()+validarF2()+validarF3()+validarF4()+validarF5()+validarF6()+validarF7();
	document.getElementById("C1").value = a.toString();	
}

		///Figura 1
		var stage1 = document.getElementById('canvas1');
		var img1 = document.createElement('img');
	img1.src="{{ asset('images/test/f1s1.png')}}";
	img1.style.height = '10px';
	img1.style.width = '20px';
var ctx1 = stage1.getContext("2d");

$('#limpiarF1').on('click', function(){
	var canvas = document.getElementById('canvas1');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx1.drawImage(img1, 10, 10);
});

$('#ultimoF1').on('click', function(){
	var canvas = document.getElementById('canvas1');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx1.drawImage(img1, 10, 10);
});

function tab2(){
	$('.nav-tabs a[href="#tabs-2"]').tab('show');
}
function tab3(){
	$('.nav-tabs a[href="#tabs-3"]').tab('show');
}
function tab4(){
	$('.nav-tabs a[href="#tabs-4"]').tab('show');
}
function tab5(){
	$('.nav-tabs a[href="#tabs-5"]').tab('show');
}
function tab6(){
	$('.nav-tabs a[href="#tabs-6"]').tab('show');
}
function tab7(){
	$('.nav-tabs a[href="#tabs-7"]').tab('show');
}

function tab1(){
	$('.nav-tabs a[href="#tabs-1"]').tab('show');
}



////Figura 2
var stage2 = document.getElementById('canvas2');
		var img2 = document.createElement('img');
	img2.src="{{ asset('images/test/f2s1.png')}}";
	img2.style.height = '10px';
	img2.style.width = '20px';
	var ctx2 = stage2.getContext("2d");

	$('#limpiarF2').on('click', function(){
	var canvas = document.getElementById('canvas2');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.drawImage(img2, 10, 10);
});

$('#ultimoF2').on('click', function(){
	var canvas = document.getElementById('canvas2');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.drawImage(img2, 10, 10);
});

	///Figura 3
		var stage3 = document.getElementById('canvas3');
		var img3 = document.createElement('img');
	img3.src="{{ asset('images/test/f3s1.png')}}";
	img3.style.height = '10px';
	img3.style.width = '20px';
var ctx3 = stage3.getContext("2d");

$('#limpiarF3').on('click', function(){
	var canvas = document.getElementById('canvas3');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx3.drawImage(img3, 10, 10);
});

$('#ultimoF3').on('click', function(){
	var canvas = document.getElementById('canvas3');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx3.drawImage(img3, 10, 10);
});




////Figura 4
var stage4 = document.getElementById('canvas4');
		var img4 = document.createElement('img');
	img4.src="{{ asset('images/test/f4s1.png')}}";
	img4.style.height = '10px';
	img4.style.width = '20px';
	var ctx4 = stage4.getContext("2d");

	$('#limpiarF4').on('click', function(){
	var canvas = document.getElementById('canvas4');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx4.drawImage(img4, 10, 10);
});

$('#ultimoF4').on('click', function(){
	var canvas = document.getElementById('canvas4');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx4.drawImage(img4, 10, 10);
});

	////Figura 5
var stage5 = document.getElementById('canvas5');
		var img5 = document.createElement('img');
	img5.src="{{ asset('images/test/f5s1.png')}}";
	img5.style.height = '10px';
	img5.style.width = '20px';
	var ctx5 = stage5.getContext("2d");

	$('#limpiarF5').on('click', function(){
	var canvas = document.getElementById('canvas5');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx5.drawImage(img5, 10, 10);
});

$('#ultimoF5').on('click', function(){
	var canvas = document.getElementById('canvas5');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx5.drawImage(img5, 10, 10);
});

	////Figura 6
var stage6 = document.getElementById('canvas6');
		var img6 = document.createElement('img');
	img6.src="{{ asset('images/test/f6s1.png')}}";
	img6.style.height = '10px';
	img6.style.width = '20px';
	var ctx6 = stage6.getContext("2d");

	$('#limpiarF6').on('click', function(){
	var canvas = document.getElementById('canvas6');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx6.drawImage(img6, 10, 10);
});

$('#ultimoF6').on('click', function(){
	var canvas = document.getElementById('canvas6');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx6.drawImage(img6, 10, 10);
});

	////Figura 7
var stage7 = document.getElementById('canvas7');
		var img7 = document.createElement('img');
	img7.src="{{ asset('images/test/f7s1.png')}}";
	img7.style.height = '10px';
	img7.style.width = '20px';
	var ctx7 = stage7.getContext("2d");

	$('#limpiarF7').on('click', function(){
	var canvas = document.getElementById('canvas7');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx7.drawImage(img7, 10, 10);
});

$('#ultimoF7').on('click', function(){
	var canvas = document.getElementById('canvas7');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx7.drawImage(img7, 10, 10);
});


window.onload = function() {
	ctx1.drawImage(img1, 10, 10);
	ctx2.drawImage(img2, 10, 10);
	ctx3.drawImage(img3, 10, 10);
	ctx4.drawImage(img4, 10, 10);
	ctx5.drawImage(img5, 10, 10);
	ctx6.drawImage(img6, 10, 10);
	ctx7.drawImage(img7, 10, 10);
};


		var t = true;
		var salida = document.getElementById("tiempo"),
		minutos = 2,
		segundos = 0,
		intervalo = setInterval(function(){
			if (--segundos < 0){
				segundos = 59;
				minutos--;
			}

			if (!minutos && !segundos)
				clearInterval(intervalo);

			salida.innerHTML = "0" + minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
			if(minutos==0&&segundos==0){
				siguienteSeccion();
				document.getElementById("formC1").submit();
			}
		}, 1000);


		function figuraCompleja(){
			if(t){
				fs.style.display="none";
				$('#fc').show();
				btnFC.innerHTML='Mostrar Figuras Simples';
				t=false;
			}
			else{
				fc.style.display="none";
				$('#fs').show();
				btnFC.innerHTML='Mostrar Figura Compleja';
				t=true;
			}
		};
		</script>
	
	</body>
	</html>