<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Test Estilo Cognitivo</title>
	<link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ asset('plugins/animate/animate.css') }}">
	<link rel="stylesheet" href="{{ asset('css/testEstilo.css')}}">
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico')}}" /> 

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
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="{{ route('inicio') }}">Inicio</a>
            </li>
            <hr class="linea">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="{{ url('/logout') }}">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
    </nav>
	<br>
	<div class="container">
		<div class="tituloP">
			<h3 align="center">Test Figuras Enmascaradas</h3>
		</div>
		<br>
		<div class="contenidoP">
			<p align="justify">Esta prueba consiste en encontrar figuras simples en figuras complejas. Observe el siguiente ejemplo:
				<a href="#" class="launch-modal" data-modal-id="modal-video"><img class="video animatedRotate image" src="{{ asset('images/video.png') }}" width="40" height="40"></a>
			</p>
			<div class="row justify-content-md-center">
				<div class="col-md-2">
					<h6 align="center">Figura Simple</h6>
      				<img id="draggable" class= "image rounded mx-auto d-block" src="{{ asset('images/figEjemplo2.png') }}" class="img-circle" width="60" height="60">
    			</div>
    			<div class="col-md-2 col-centered">
					<h6 align="center">Figura Compleja</h6>
      				<img class= "image rounded mx-auto d-block" src="{{ asset('images/figEjemploCompleja2.png') }}" class="img-circle" width="60" height="60">
    			</div>
			</div>
			<p align="justify">Note que la figura simple está oculta dentro de la figura compleja. Ahora encuentre y señale la figura compleja donde está oculta la 
				figura simple.
			<br>
			Este test se divide en tres secciones. En cada sección considere:
			<br>
			- Realice los problemas en el orden presentado. No deje de realizar un problema a no ser que se crea incapaz de hacerlo.</li>
			<br>
			- Señale solo una opción.
			<br>
			- La figura simple está siempre presente en la figura compleja con IGUAL TAMAÑO, IGUALES PROPORCIONES y en LA MISMA
				DIRECCIÓN.
			</p>
			<div class="row justify-content-md-center">
				<div class="col-md-2">
					<a class="boton btn btn-primary" href="{{ route('s1')}}">Empezar test</a>
				</div>
				<div class="col-md-1">
					<a class="boton btn btn-primary" href="{{ url('/student/test_estilo_congnitivo')}}">Atrás</a>
				</div>
			</div>
			<br>
		</div>
	</div>

        <div class="modal fade" id="modal-video" tabindex="-1" role="dialog" aria-labelledby="modal-video-label">
        	<div class="modal-dialog" role="document">
        		<div class="modal-content">
        			<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
        					<span aria-hidden="true">&times;</span>
        				</button>
        			</div>
        			<div class="modal-body">
        				<div class="modal-video">
	        				<div class="embed-responsive embed-responsive-16by9">
			                    <video controls autoplay src="{{ asset('videos/figuraEnmascarada.mp4') }}"></video>
			                </div>
		                </div>
        			</div>
        		</div>
        	</div>
        </div>



	
	<script src="{{ asset('plugins/jquery/js/jquery-1.11.1.min.js') }}"></script>
	<script src="{{ asset('plugins/bootstrap/js/bootstrap.js') }}"></script>

	<script type="text/javascript">
		$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});
	</script>



</body>
</html>