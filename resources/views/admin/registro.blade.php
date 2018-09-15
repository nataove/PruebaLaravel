@extends('admin.template.main')

@section('title')
  Registrar Docente
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/registrarDoc.css')}}">

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

@section('registrarEstudiante')
  {{ route('crearEstudiante')}}
@endsection

@section('registrarCuestionario')
  {{ route('registrarCuestionario')}}
@endsection


@section('perfilEditar')
  {{ route('editarA', Auth::user()->id) }}
@endsection

@section('content')

<div class="form">
    <div class="title">
        <h2><small>Registrar Docente</small></h2>
        <div class="clearfix"></div>
    </div>
    <div class="body_form">
        <center>
            @if(session()->has('message'))
            <div class="alert alert-success">
                {{ session()->get('message') }}
            </div>
            @endif
        </center>
        {!! Form::open(array('route' => 'registroD' , 'method' => 'POST'))!!}
       
        <div class="row control-group">
            <div class="form-group col-md-2 offset-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
                {!! Form::label('Nombre: ') !!}
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
                {!! Form::text('name',null, ['class' => 'form-control', 'placeholder' => 'Ingrese su nombre...', 'required']) !!}
            </div>
        </div>
    <div class="row control-group">
            <div class="form-group col-md-2 offset-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
            {!! Form::label('Email: ') !!}
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
            {!! Form::email('email',null, ['class' => 'form-control', 'placeholder' => 'Ingrese el Email...', 'required']) !!}
            <p class="help-block text-danger"></p>
        </div>
    </div>
                
        <div class="row control-group">
            <div class="form-group col-md-2 offset-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
            {!! Form::label('Contraseña: ') !!}
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
            {!! Form::password('password',array('class' => 'form-control', 'placeholder' => 'Ingrese su contraseña nueva.', 'required')) !!}
             <span id="show-hide-passwd" action="hide" class="input-group-text glyphicon glyphicon glyphicon-eye-open"></span>
            <p class="help-block text-danger"></p>
        </div>
    </div>
    <div class="form-group">
        <center>
        {!! Form::submit('Registrar', ['class' => 'btn btn-primary registrar']) !!}
        <a href="{{ URL::previous() }}"  style="background: #2C3E50" style="border-color:#18BC9C" class="btn btn-primary btn-default">Regresar</a>
        
                        
        </center>
               
    </div>
{!! Form::close() !!}

    </div>
</div>


@endsection

@section('script')
$('#show-hide-passwd').on('click', function(e) {
        e.preventDefault();
        var current = $(this).attr('action');
        if (current == 'hide') {
          $(this).prev().attr('type','text');
          $(this).removeClass('glyphicon-eye-open').addClass('glyphicon-eye-close').attr('action','show');
        }
        if (current == 'show') {
          $(this).prev().attr('type','password');
          $(this).removeClass('glyphicon-eye-close').addClass('glyphicon-eye-open').attr('action','hide');
        }
      });
      @endsection


@section('registrarDocente')
  {{ route('crearD')}}
@endsection

@section('perfilEditar')
  {{ route('editarA', Auth::user()->id) }}
@endsection