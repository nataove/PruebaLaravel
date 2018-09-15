@extends('teacher.template.main')

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

@section('registrarEstudianteT')
  {{ route('crearEstudianteT')}}
@endsection

@section('nombreBienvenida')
  {{ Auth::user()->name }}
@endsection

@section('perfilEditar')
  {{ route('editarD', Auth::user()->id) }}
@endsection

@section('content')
	<h2>Hola Docente</h2>
	<h1>{{ Auth::user()->id }}</h1>
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
            image: '{{ asset('images/usuarios/'.Auth::user()->image) }}',
            sticky: false,
            time: 3000,
            class_name: 'my-sticky-class'
        });
        return false;
});
@stop