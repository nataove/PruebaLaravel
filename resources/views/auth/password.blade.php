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
			<div class="col-md-5">
				<div class="panel panel-default">
					<div class="panel-heading panel-heading-custom"><b>Restablecer contraseña</b></div>
					<div class="panel-body">
						@if (session('status'))
							<div class="alert alert-success">
								{{ session('status') }}
							</div>
						@endif
						@if (count($errors) > 0)
							<div class="alert alert-danger">
								<ul>
									@foreach ($errors->all() as $error)
										<li>{{ $error }}</li>
									@endforeach
								</ul>
							</div>
						@endif
						<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
							<br>
							<div class="info">Introduce tu dirección de correo electrónico. Te enviaremos un correo electrónico de restauración de contraseña.</div>
							<br>
							<div class="form-group">
								<div class="row">
									<div class="col-md-3">
										<label class="control-label"><b>E-Mail:</b></label>
									</div>
									<div class="col-md-9">
										<input type="email" class="form-control" name="email" value="{{ old('email') }}">
									</div>
								</div>
							</div>

							<div class="form-group">
								<div class="row justify-content-md-center">
									<div class="col-md-3 col-sm-12 col-xs-12">
										<button type="submit" class="btn btn-primary">Enviar Link</button>
									</div>
									<div class="col-md-2 col-sm-12 col-xs-12">
										<a class="btn btn-primary" href="{{ route('inicio')}}">Cancelar</a>
									</div>
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