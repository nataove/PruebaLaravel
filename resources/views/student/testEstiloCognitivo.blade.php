<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Test Estilo Cognitivo</title>
	<link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ asset('plugins/animate/animate.css') }}">
	<link rel="shortcut icon" href="{{ asset('images/favicon.ico')}}" /> 
	<link rel="stylesheet" href="{{ asset('css/testEstilo.css')}}">

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
			<h3 align="center" class="animated">Test Figuras Enmascaradas</h3>
		</div>
		<br>
		<div class="contenidoP">
			<br>
			<p align="justify">
				Test que permite valorar el estilo cognitivo dependencia-independencia de campo. Este con el fin de adaptar la navegación
				de la aplicación según el resultado.
				<br><br>
				Tenga en cuenta que:
			</p>
			<div class="row justify-content-md-center">
				<div class="col-md-3">
					<div class="image row justify-content-md-center">
						<img class= "animatedRotate rounded mx-auto d-block" src="{{ asset('images/tiempo.png') }}" class="img-circle" width="100" height="100">
					</div>
					<div class="row justify-content-md-center">
						<h6>Se resuelve en poco tiempo</h6>
					</div>
				</div>
				<br>
				<div class="col-md-3">
					<div class="image row justify-content-md-center">
						<img class= "animatedRotate rounded mx-auto d-block" src="{{ asset('images/respuesta.png') }}" class="img-circle" width="100" height="100">
					</div>
					<div class="row justify-content-md-center">
						<h6 align="center">Es importante que responda honestamente</h6>
					</div>
				</div>
				<div class="col-md-3">
					<div class="image row justify-content-md-center">
						<img class= "animatedRotate rounded mx-auto d-block" src="{{ asset('images/check.png') }}" class="img-circle" width="100" height="100">
					</div>
					<div class="row justify-content-md-center">
						<h6 align="center">No deje pregunta sin responder</h6>
					</div>
				</div>
			</div>
			<br><br>
			<div class="row justify-content-md-center">
				<div class="col-md-2">
					<a class="boton btn btn-primary" href="{{ route('explicacion')}}">Explicación test</a>
				</div>
			</div>
			<br><br>
		</div>
	</div>
  <script type="text/javascript" src="{{ asset('plugins/jquery/js/jquery-3.3.1.js') }}"></script>
  <script type="text/javascript" src="{{ asset('plugins/bootstrap/js/bootstrap.js') }}"></script>

</body>
</html>