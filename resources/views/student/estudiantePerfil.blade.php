@extends('student.template.main')

@section('title')
  Perfíl
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/editar.css')}}">

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

@section('perfilEditar')
  {{ route('editarE', Auth::user()->id) }}
@endsection

<?php 
$stud=Auth::user()->student;
if($stud->type_Style=="IC"){
  $url = 'independent/user';
}
else if($stud->type_Style=="DC"){
  $url = $urlCont;
};
?>

@section('inicioUrl')
  {{ $url }}
@endsection

@section('content')
    <div class="form">
      <div class="title">
        <h2><small>Perfíl</small></h2>
         <div class="clearfix"></div>
         </div>
         <div class="body_form">
          <div class="row">            
            <div class="col-md-4">
              <div class="row control-group">
                <div class="form-group col-md-12 col-xs-12 floating-label-form-group controls">
                  <br><br>
                  <center>
                    <img src="{{ asset('images/usuarios/'.Auth::user()->image) }}" id="imgPerfil">
                </center>
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <br>
              <div class="row control-group">
                <div class="form-group col-md-12 col-xs-8 floating-label-form-group controls">
                  <div class="row control-group">
                    <div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
                      {!! Form::label('Nombre: ') !!}
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
                    {!! Form::text('name', Auth::user()->name, ['class' => 'form-control', 'disabled', 'placeholder' => 'Ingrese su nombre...', 'required']) !!}
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="row control-group">
                    <div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
                    {!! Form::label('E-mail: ') !!}
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
                  {!! Form::email('email', Auth::user()->email, ['class' => 'form-control', 'disabled', 'placeholder' => 'Ingrese su email...', 'required']) !!}
                    <p class="help-block text-danger"></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <br><br>
    <center>
      <a href="{{ route('editarE', Auth::user()->id) }}" style="background: #18BC9C" style="border-color:#18BC9C" class="btn btn-primary btn-default" >Editar</a>
    </center>
    <br>
  </div>
  <br><br><br><br><br><br><br><br><br><br>
@endsection
