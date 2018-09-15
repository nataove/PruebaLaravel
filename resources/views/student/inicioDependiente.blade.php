@extends('student.template.main')

@section('title')
Posición, rapidez, velocidad, aceleración y desplazamiento
@endsection

@section('head')
<meta name="_token" content="{{ csrf_token() }}"/>
<link rel="stylesheet" href="{{ asset('css/inicioDependiente.css')}}">
<link rel="stylesheet" href="{{ asset('plugins/animate/animate.css') }}">
@endsection

@section('nombre')
{{ Auth::user()->name }}
@endsection

@section('correo')
{{ Auth::user()->email }}
@endsection

@section('avatar')
{{ asset('images/usuarios/'.Auth::user()->image) }}
@endsection

@section('nombreBienvenida')
{{ Auth::user()->name }}
@endsection

@section('registrarDocente')
{{ route('crearD')}}
@endsection

@section('perfilEditar')
{{ route('editarE', Auth::user()->id) }}
@endsection

@section('content')
<div class="bread">
  <div id="bc1" class="btn-group btn-breadcrumb breadcrumb-primary">
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel">Inicio</a>
  </div>
</div>
<br>
<div class="fondo">
  <div class="row top">
    <div class="col-md-12 saludo">
      <h5><b>Hola {{ Auth::user()->name }}</b></h5>
    </div>
  </div>
  <hr>

  <div class="row justify-content-md-center">
    <div class="col-md-4 animated">
      <div class="bienvenido animated">
        <center>
          <p><b>Bienvenido a Fisimatica</b><br>Aprender física nuna fue tan divertido.</p>
          <a href="{{url('student/dependent/posicionDependiente')}}" class="btn btn-info btnEmpieza animatedPulse">Empieza</a>
        </center>
      </div>
    </div>
  </div>

</div>

@endsection

@section('textScript')

@endsection

@section('script')

@endsection

