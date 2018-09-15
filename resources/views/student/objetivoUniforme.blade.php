@extends('student.template.main')

@section('title')
  Objetivo
@endsection

@section('head')
   <link rel="stylesheet" href="{{ asset('css/mUniforme.css')}}">
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
    <a href="{{ route('temaUniforme') }}" class="btn btn-primary visible-lg-block visible-md-block"><div>Menú</div></a>
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel"><div>Objetivos</div></a>
  </div>
</div>

<div class="pFondo"></div>
<div class="fon">
<div class="fondo">
  <div class="titulo">
    <h3><b>Objetivos</b></h3>
  </div>
  <div class="fondoBlanco">
    <div class="fondoBorde">
      <div class="texto">
        <p>
          <br>
          <li>Determinar experimentalmente la relación entre la velocidad y el tiempo para
          un objeto que se mueve con aceleración constante.</li>
          <br>
          <li>Determinar experimentalmente la relación entre la posición y el tiempo para un
          objeto que se mueve con aceleración constante. </li>
        </p>
        <br><br>
      </div>
    </div>
  </div>
</div>
</div>

@endsection

@section('script')


@endsection