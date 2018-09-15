@extends('teacher.template.main')

@section('title')
  Consultar Estudiante
@endsection

@section('head')

@section('registrarEstudianteT')
  {{ route('crearEstudianteT')}}
@endsection

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
  {{ route('editarD', Auth::user()->id) }}
@endsection

@section('content')

    <table class="table table-hover table-bordered">
    <thead>
    
    <th style="width:50px"><center>Id</center></th>
        <th style="width:300px"><center>Nombre</center></th>
        <th style="width:200px"><center>Correo</center></th>
        <th style="width:200px"><center>Tipo</center></th>
        <th style="width:100px"><center>Opciones</center></th>
    </thead>
        
    <tbody>
        @foreach($users as $user)
            <tr>
                
                @foreach($students as $student)
        @if($user->id == $student->user_id)
                <td><center>{{$user->id}}</center></td>
                <td><center>{{$user->name}}</center></td>
                <td><center>{{$user->email}}</center></td>
        <td>{{$student->type}}</td>
                <td><center><a href="" class="btn btn-secondary">Ver</a></center></td>
        @endif 
      @endforeach 
        
        </tr>
        @endforeach
    
    </tbody>





</table>

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