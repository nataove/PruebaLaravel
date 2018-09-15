@extends('admin.template.main')

@section('title')
  Home
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

@section('registrarCuestionario')
  {{ route('registrarCuestionario')}}
@endsection

@section('registrarEstudiante')
  {{ route('crearEstudiante')}}
@endsection

@section('perfilEditar')
  {{ route('editarA', Auth::user()->id) }}
@endsection

@section('content')
  <h2>Hola Administrador</h2>
  <h1>{{ Auth::user()->name }}</h1>
@endsection

@section('script')
 $(document).ready(function () {
      var email = 'images/usuarios/icono.png'

      if(!{{ empty(Auth::user()->name->email) }}){
        email = '{{ Auth::user()->email }}'
      }
      console.log(email)
        var unique_id = $.gritter.add({
            title: 'Bienvenido!',
            text: '{{ Auth::user()->name }}',
            image: '{{ asset('images/usuarios/icono.png') }}',
            sticky: false,
            time: 3000,
            class_name: 'my-sticky-class'
        });
        return false;
});
@stop


