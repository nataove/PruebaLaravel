@extends('student.template.main')

@section('title')
  Movimiento Circular Uniforme
@endsection

@section('head')
   <link rel="stylesheet" href="{{ asset('css/mUniforme.css')}}">
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
    <a href="{{url('student/independent/user')}}" class="btn btn-primary visible-lg-block visible-md-block"><div>Inicio</div></a>
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel"><div>Movimiento Circular Uniforme</div></a>
  </div>
</div>
<br>

<h1><b>Tema de Aprendizaje:</b></h1>
<h2>Movimiento Circular Uniforme</h2>
<br><br>
<div class="container">
  <div class="row menu justify-content-md-center">
    <div class="men col-md-3" align="center">
      <br>
      <a href="{{ route('objetivoCircular') }}"><img class="animatedRotate" src="{{ asset('images/contenido.png') }}" width="80" height="80"></a>
      <h4>Objetivos</h4>
      <br>
    </div>
    <div class="men men2 col-md-3" align="center">
      <br>
      <a href="{{ route('temaCircular') }}"><img class="animatedRotate" src="{{ asset('images/objetivo.png') }}" width="80" height="80"></a>
      <h4>Contenido</h4>
      <br>
    </div>
    <div class="men men2 col-md-3" align="center">
      <br>
      <a href="{{ route('temaCircularCuestionario') }}"><img class="animatedRotate" src="{{ asset('images/cuestionario.png') }}" width="80" height="80"></a>
      <h4>Cuestionario</h4>
      <br>
    </div>
  </div>
</div>

@endsection

@section('script')


@endsection