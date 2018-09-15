@extends('student.template.main')

@section('title')
  Inicio
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/inicioStudent.css')}}">
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
  <div class="panel-body">
  <div class="row justify-content-md-center">     
    <div class="col-md-4 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
        <a href="">
            <a href="{{ route('temarioPosicion') }}"><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/tema1.png') }}"  class="img-circle" width="70" height="70"></a>
        </a></div>
        <div class="vertical-center col-md-9 my-auto">
          <a href="{{ route('temarioPosicion') }}">
        <h4 align="justify"><b>Posición, rápidez, velocidad, aceleración y desplazamiento</b></h4></a></div>
      </div>
    </div>

    <div class="col-md-4 offset-md-2 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
          <a onmouseover="movimientoRectilineoUniforme.play()" href="{{ route('temaUniforme') }}"><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/uniforme.png') }}" class="img-circle" width="70" height="70"></a>
        </div>
        <div class="vertical-center col-md-9 my-auto">
        <a href="{{ route('temaUniforme') }}">
        <h4 align="justify"><b>Movimiento Rectilíneo Uniforme</b></h4></a></div>
      </div>
    </div>
  </div>
  <br><br>

  <div class="row justify-content-md-center">     
    <div class="col-md-4 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
      <a onmouseover="movimientoRectilineoUniformeMenteAcelerado.play()" href="{{ route('temaAcelerado') }}"><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/acelerado.png') }}" class="img-circle" width="70" height="70"></a>
        </div>
        <div class="vertical-center col-md-9 my-auto">
        <a href="{{ route('temaAcelerado') }}">
          <h4 align="justify"><b>Movimiento Rectilíneo Uniformemente Acelerado</b></h4></a></div>
      </div>
    </div>

    <div class="col-md-4 offset-md-2 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
      <a href="{{ route('temarioCaida') }}"><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/caida.png') }}" class=" img-circle" width="70" height="70"></a>
        </div>
        <div class="vertical-center col-md-9 my-auto">
        <a href="{{ route('temarioCaida') }}">
          <h4 align="justify"><b>Caída Libre</b></h4></a></div>
      </div>
    </div>
  </div>

  <br><br>

  <div class="row justify-content-md-center">     
    <div class="col-md-4 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
      <a onmouseover="movimientoDeProyectiles.play()" ><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/proyectil.png') }}" class="img-circle" width="70" height="70"></a>
        </div>
        <div class="vertical-center col-md-9 my-auto">
            <a href="{{ route('temaProyectiles') }}">
          <h4 align="justify"><b>Movimiento de Proyectiles</b></h4></a>
        </div>
      </div>
    </div>

    <div class="col-md-4 offset-md-2 col-sm-7 col-xs-10 tema">
      <div class="row">  
        <div class="imgMenu col-md-3 my-auto">
      <a href="{{ route('temarioCircular') }}"><img class= "imgMen rounded mx-auto d-block" src="{{ asset('images/temas/circulo.png') }}" class="img-circle" width="70" height="70"></a>
        </div>
        <div class="vertical-center col-md-9 my-auto">
        <a href="{{ route('temarioCircular') }}">
          <h4 align="justify"><b>Movimiento Circular Uniforme</b></h4></a></div>
      </div>
    </div>
  </div>
</div>
@endsection

 
@section('script')
@endsection