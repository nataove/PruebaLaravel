<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="_token" content="{{ csrf_token() }}"/>
  <title>Restablecer contraseña</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/index.css') }}">
  <link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
  <link rel="shortcut icon" href="{{ asset('images/favicon.ico')}}" /> 
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-light">
		<a class="navbar-brand js-scroll-trigger" href="{{url('/')}}">
			<img src="{{ asset('images/logo.png')}}" alt="Logo" width="45" height="40">
			<b>Fisi</b>matica</a>
	    </a>
	</nav>
	<br>

	<div class="container-fluid">
		<div class="row justify-content-md-center">
			<div class="col-md-6">
				<div class="panel panel-default">
					<div class="panel-heading"><b>Restablecer contraseña</b></div>
					<br>
					<div class="panel-body">
						@if (count($errors) > 0)
							<div class="alert alert-danger">
								<ul>
									@foreach ($errors->all() as $error)
										<li>{{ $error }}</li>
									@endforeach
								</ul>
							</div>
						@endif

						<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/reset') }}">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
							<input type="hidden" name="token" value="{{ $token }}">
							<input type="hidden" class="form-control" name="email" value="{{ $email }}">
							<div class="form-group">
								<div class="row">
									<div class="col-md-5">
										<label class="control-label"><b>Nueva contraseña:</b></label>
									</div>
									<div class="col-md-6">
										<input type="password" class="form-control" name="password">
									</div>
								</div>
							</div>

							<div class="form-group">
								<div class="row">
									<div class="col-md-5">
										<label class="control-label"><b>Confirmar Contraseña:</b></label>
									</div>
									<div class="col-md-6">
										<input type="password" class="form-control" name="password_confirmation">
									</div>
								</div>
							</div>

							<div class="form-group">
								<div class="col-md-3 offset-md-4">
									<button type="submit" class="btn btn-primary">
										Restablecer contraseña
									</button>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-3 offset-md-5">
									<a class="btn btn-primary" href="{{ route('inicio')}}">Cancelar</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>