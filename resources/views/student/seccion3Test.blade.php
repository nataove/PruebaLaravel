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
			<h4 align="left" class="animated">Sección 3</h4>
		</div>
		<div style="position: relative;">
			<div class="imgTit animated"></div>
		</div>
		<input type="hidden" name="aciertoC2" value="">
		<div class="contenido">
			<br>
			<div class="row">
				<div class="col-md-2 col-sm-12 ">
					<div class="time"><b>Tiempo: </b><label id = "tiempo"> 05:00</label></div>
					<br>
					<form action="home" id="formC2" method="get">
						<input type="hidden" name="aciertoC1" value="{{ $aciertoS1 }}">
						<input type="hidden" name="aciertoC2" value="{{ $aciertoS2 }}">
						<input type="hidden" name="aciertoC3" id="C3" value="0">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc1"><label>1. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
										<div class="checkbox">
										<input type="checkbox" value="" id="fc2"><label>2. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc3"><label>3. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc4"><label>4. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc5"><label>5. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc6"><label>6. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc7"><label>7. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-8" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc8"><label>8. </label>
									</div></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#tabs-9" role="tab">
									<div class="checkbox">
										<input type="checkbox" value="" id="fc9"><label>9. </label>
									</div></a>
								</li>
							</ul>
							<button onclick="siguienteSeccion()"class="btn btn-primary boton" type="submit" id="seccionfin">Siguiente sección</button>
						</form>
					</div>

					<div class="col-md-10 col-sm-12 completo">
						<div class="figurasSimples testimonial-group">
						<div class="row text-center" id="fs">

							<div class="col-xs-1 A">
								<center>A</center>
								<img src="{{ asset('images/test/figuraSimple/fs7.png')}}" height="80">
								
							</div>
							<div class="col-xs-1 B">
								<center>B</center>
								<img src="{{ asset('images/test/figuraSimple/fs1.png')}}" height="80">
								
							</div>
							<div class="col-xs-1 C">
								<center>C</center>
								<img src="{{ asset('images/test/figuraSimple/fs5.png')}}" height="60">
							</div>
							<div class="col-xs-1 D">
								<center>D</center>
								<img src="{{ asset('images/test/figuraSimple/fs3.png')}}" height="80">
							</div>
							<div class="col-xs-1 E">
								<center>E</center>
								<img src="{{ asset('images/test/figuraSimple/fs4.png')}}" height="80">
							</div>
							<div class="col-xs-1 F">
								<center>F</center>
								<img src="{{ asset('images/test/figuraSimple/fs6.png')}}" height="120">
							</div>
							<div class="col-xs-1 G">
								<center>G</center>
								<img src="{{ asset('images/test/figuraSimple/fs2.png')}}" height="80">
							</div>
							<div class="col-xs-1 H">
								<center>H</center>
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
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "F".</b>
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
										<div class="row">
										<a onclick="validarF1()">Validar</a>
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
										<canvas id="canvas2">
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "G".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF2"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF2"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
										<div class="row">
										<a onclick="validarF2()">Validar</a>
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
										<canvas id="canvas3">
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "G".</b>
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
										<div class="row">
										<a onclick="validarF3()">Validar</a>
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
										<canvas id="canvas4">
											Tu dispositivo no soporta canvas.
										</canvas>
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
										<div class="row">
										<a onclick="validarF4()">Validar</a>
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
										<canvas id="canvas5">
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "B".</b>
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
										<div class="row">
										<a onclick="validarF5()">Validar</a>
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
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "E".</b>
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
										<div class="row">
										<a onclick="validarF6()">Validar</a>
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
											Tu dispositivo no soporta canvas.
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
										<div class="row">
										<a onclick="validarF7()">Validar</a>
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
										<button onclick="tab8()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-8" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
										<canvas id="canvas8">
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "C".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF8"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF8"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
										<div class="row">
										<a onclick="validarF8()">Validar</a>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab7()" type="button" class="btn btn-secondary">Anterior</button>
									</div>
									<div class="col-md-4">
										
									</div>
									<div class="col-md-4">
										<button onclick="tab9()" type="button" class="btn btn-secondary">Siguiente</button>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="tabs-9" role="tabpanel">
								<div class="row justify-content-md-center">
									<div class="col-md-4 offset-md-3 c1f1">
										<center>
										<canvas id="canvas9">
											Tu dispositivo no soporta canvas.
										</canvas>
										<br><b>Encuentra la figura simple "A".</b>
										</center>
									</div>
									<div class="col-md-4">
										<div class="row">
											<button  type="button" id="limpiarF9"class="btn btn-info btn-circle btnMas"><b>Rehacer dibujo</b></button>
										</div>
										<br>
										<div class="row">
											<button type="button" id="ultimoF9"class="btn btn-info btn-circle btnMas"><b>Deshacer la última línea</b></button>
										</div>
										<div class="row">
										<a onclick="validarF9()">Validar</a>
										</div>
									</div>
								</div>
								<div class="row justify-content-md-center">
									<div class="col-md-3" align="right">
										<button onclick="tab8()" type="button" class="btn btn-secondary">Anterior</button>
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
		<script type="text/javascript" src="{{ asset('js/test/seccion3F1.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F2.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F3.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F4.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F5.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F6.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F7.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F8.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/test/seccion3F9.js') }}"></script>
		<script type="text/javascript">
		if(history.forward(1)){
location.replace(history.forward(1))
}

function siguienteSeccion(){
	var a=validarF1()+validarF2()+validarF3()+validarF4()+validarF5()+validarF6()+validarF7()+validarF8()+validarF9();
	document.getElementById("C3").value = a.toString();	
}

		///Figura 1
		var stage1 = document.getElementById('canvas1');
		var img1 = document.createElement('img');
	img1.src="{{ asset('images/test/seccion3/s3f1.png')}}";
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
function tab8(){
	$('.nav-tabs a[href="#tabs-8"]').tab('show');
}
function tab9(){
	$('.nav-tabs a[href="#tabs-9"]').tab('show');
}

function tab1(){
	$('.nav-tabs a[href="#tabs-1"]').tab('show');
}



////Figura 2
var stage2 = document.getElementById('canvas2');
		var img2 = document.createElement('img');
	img2.src="{{ asset('images/test/seccion3/s3f2.png')}}";
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
	img3.src="{{ asset('images/test/seccion3/s3f3.png')}}";
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
	img4.src="{{ asset('images/test/seccion3/s3f4.png')}}";
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
	img5.src="{{ asset('images/test/seccion3/s3f5.png')}}";
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
	img6.src="{{ asset('images/test/seccion3/s3f6.png')}}";
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
	img7.src="{{ asset('images/test/seccion3/s3f7.png')}}";
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

	////Figura 8
var stage8 = document.getElementById('canvas8');
		var img8 = document.createElement('img');
	img8.src="{{ asset('images/test/seccion3/s3f8.png')}}";
	img8.style.height = '10px';
	img8.style.width = '20px';
	var ctx8 = stage8.getContext("2d");

	$('#limpiarF8').on('click', function(){
	var canvas = document.getElementById('canvas8');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx8.drawImage(img8, 10, 10);
});

$('#ultimoF8').on('click', function(){
	var canvas = document.getElementById('canvas8');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx8.drawImage(img8, 10, 10);
});

	////Figura 9
var stage9 = document.getElementById('canvas9');
		var img9 = document.createElement('img');
	img9.src="{{ asset('images/test/seccion3/s3f9.png')}}";
	img9.style.height = '10px';
	img9.style.width = '20px';
	var ctx9 = stage9.getContext("2d");

	$('#limpiarF9').on('click', function(){
	var canvas = document.getElementById('canvas9');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx9.drawImage(img9, 10, 10);
});

$('#ultimoF9').on('click', function(){
	var canvas = document.getElementById('canvas9');
	var contexto = canvas.getContext('2d');
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	ctx9.drawImage(img9, 10, 10);
});


window.onload = function() {
	ctx1.drawImage(img1, 10, 10);
	ctx2.drawImage(img2, 10, 10);
	ctx3.drawImage(img3, 10, 10);
	ctx4.drawImage(img4, 10, 10);
	ctx5.drawImage(img5, 10, 10);
	ctx6.drawImage(img6, 10, 10);
	ctx7.drawImage(img7, 10, 10);
	ctx8.drawImage(img8, 10, 10);
	ctx9.drawImage(img9, 10, 10);
};


		var t = true;
		var salida = document.getElementById("tiempo"),
		minutos = 5,
		segundos = 0,
		intervalo = setInterval(function(){
			if (--segundos < 0){
				segundos = 59;
				minutos--;
			}

			if (!minutos && !segundos)
				clearInterval(intervalo);

			salida.innerHTML = "0" + minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
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