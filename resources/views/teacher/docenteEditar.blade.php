@extends('teacher.template.main')

@section('title')
  Editar Perfíl
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/editar.css')}}">

@endsection

@section('nombre')
  {{ Auth::user()->name }}
@endsection

@section('registrarEstudianteT')
  {{ route('crearEstudianteT')}}
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
  {{ route('editarD', Auth::user()->id) }}
@endsection

@section('content')
    <div class="form">
      <div class="title">
        <h2><small>Editar Perfíl</small></h2>
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
          {!! Form::model($user, array('route' => ['cargarDocente', $user->id], 'method' => 'PUT', 'enctype' => 'multipart/form-data')) !!}<div class="row">
            <div class="col-md-4">
              <div class="row control-group">
                <div class="form-group col-md-12 col-xs-12 floating-label-form-group controls">
                  <center>
                    <br>
                    {!! Form::label('Cambiar imagen') !!}
                  </center>
                  <br>
                  <div id="drag-drop">
                    <input type="file" name="image"  id="image" class="form-control"/>
                  </div>
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
                      {!! Form::text('name', $user->name, ['class' => 'form-control', 'placeholder' => 'Ingrese su nombre...', 'required']) !!}
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="row control-group">
                    <div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
                    {!! Form::label('E-mail: ') !!}
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
                    {!! Form::email('email', $user->email, ['class' => 'form-control', 'placeholder' => 'Ingrese su email...', 'required']) !!}
                    <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="row control-group">
                    <div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">
                    {!! Form::label('Contraseña: ') !!}
                    </div>
                    <div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">
                    {!! Form::password('password',array('class' => 'form-control', 'placeholder' => 'Ingrese su contraseña.', 'required')) !!}
                      <span id="show-hide-passwd" action="hide" class="input-group-text glyphicon glyphicon glyphicon-eye-open"></span>
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="form-group">
      <center>   
      {!! Form::submit('Editar', ['class' => 'btn btn-primary editar'] ) !!}
      <a href="{{ url('/teacher/user') }}"  style="background: #2C3E50" style="border-color:#18BC9C" class="btn btn-primary btn-default" >Regresar</a>
      </center>
      </div>

      {!! Form::close() !!}
      </div>
    </div>
    <br><br><br><br><br>
@endsection

@section('script')

document.getElementById('drag-drop').style.backgroundImage= "url('{{ asset('images/usuarios/'.Auth::user()->image) }}')"; 

  $('#image').change(function(){
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
        var reader = new FileReader();

        reader.onload = function (e) {
          document.getElementById('drag-drop').style.backgroundImage= "url("+e.target.result+")"; 
        }
       reader.readAsDataURL(input.files[0]);
    }
    else
    {
       document.getElementById('drag-drop').style.backgroundImage= "url('{{ asset('images/usuarios/'.Auth::user()->image) }}')"; 
    }
  });

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
      })
@endsection