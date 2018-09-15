@extends('student.template.main')

@section('title')
  Caída Libre
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/cuestionario.css')}}">
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
    <a href="{{ route('temarioCaida') }}" class="btn btn-primary visible-lg-block visible-md-block"><div>Menú</div></a>
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel"><div>Cuestionario</div></a>
  </div>
</div>
<br>
<div id="contenedor">
<div class="titulo">
  <br>
  <h3 align="center">Cuestionario - Caída Libre</h3>
</div>
<br>
<ul class="nav nav-tabs cuest" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="1-tab" data-toggle="tab" href="#1" role="tab" aria-controls="1" aria-selected="true">1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="2-tab" data-toggle="tab" href="#2" role="tab" aria-controls="2" aria-selected="false">2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="3-tab" data-toggle="tab" href="#3" role="tab" aria-controls="3" aria-selected="false">3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="4-tab" data-toggle="tab" href="#4" role="tab" aria-controls="4" aria-selected="false">4</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="5-tab" data-toggle="tab" href="#5" role="tab" aria-controls="5" aria-selected="false">5</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="6-tab" data-toggle="tab" href="#6" role="tab" aria-controls="6" aria-selected="false">6</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="7-tab" data-toggle="tab" href="#7" role="tab" aria-controls="7" aria-selected="false">7</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="8-tab" data-toggle="tab" href="#8" role="tab" aria-controls="8" aria-selected="false">8</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="9-tab" data-toggle="tab" href="#9" role="tab" aria-controls="9" aria-selected="false">9</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="10-tab" data-toggle="tab" href="#10" role="tab" aria-controls="10" aria-selected="false">10</a>
  </li>
</ul>

<div id="section">
  <div id="child">
<form action="cuestionario_caida_finalizado" method="get">
<div class="tab-content respuestas" id="myTabContent">
@foreach($questions as $key => $question)
    <div @if($key==0) class="tab-pane fade show active" @else class="tab-pane fade" @endif  id="{{$key+1}}" role="tabpanel">
      @if($question->type == "Completar")
      <p><b>{{$key+1}}. </b> Escribe la respuesta correcta:</p>
      <p>{{$question->question}}</p>
      @if($question->image!=null)
        <div class="row justify-content-md-center">
         <img src="{{ asset('images/cuestionario/caidaLibre/'.$question->image ) }}" height="120">
        </div>
      @endif
        <div class="form-group">
          <label for="{{$key+1}}"><b>Respuesta:</b></label>
          <div class="col-md-10">
            <input type="text" class="form-control" name="{{$key+1}}" id="{{$key+1}}" value="">
          </div>
        </div>
      
      @endif    
  
      @if($question->type == "Selección")
      <p><b>{{$key+1}}. </b> Selecciona la respuesta correcta:</p>
      <p>{{$question->question}}</p>
      <?php $qp = explode(" - ", $question->answer); 
        $datos = array();
        $total = count($qp);
        $total2 = count($qp)-1;
        $respuestas = array();
        $q = random_int(0, $total2);
        $abc = array('a','b','c','d');
        $datos[0] = $q;
        $respuestas[0] = $qp[$q];
        $nn = 1;
        while($nn<$total){
          $q2 = random_int(0, $total2);
          if(!in_array($q2, $datos)){
          $datos[$nn] = $q2;
          $respuestas[$nn] = $qp[$q2];
          $nn = $nn+1;
          }
        }; ?>
        @foreach($respuestas as $k => $respuesta)
          <div class="radio">
            <input type="radio" id="{{$key+1}}" name="{{$key+1}}" value="{{$respuesta}}"><label> <b> {{$abc[$k]}}) </b>{{$respuesta}}</label>
          </div>
        @endforeach
      @endif

      @if($question->type == "Falso o verdadero")
        <p><b>{{$key+1}}. </b> Falso o verdadero:</p>
        <p>{{$question->question}}</p>
        <div class="row">
          <div class="col-md-4">
            <select class="form-control" name="{{$key+1}}" id="selectVF">
          <option value="" disabled selected hidden>Seleccione una opción</option>
          <option value="Verdadero">Verdadero</option>
          <option value="Falso">Falso</option>
        </select>
          </div>
        </div>
      @endif

      @if($question->type == "SeleccionarImage")
        <p><b>{{$key+1}}. </b> Seleccione la opción correcta:</p>
        <p>{{$question->question}}</p>
        <?php $qp = explode(" - ", $question->answer); 
        $datos = array();
        $abc = array('a','b','c','d');
        $total = count($qp);
        $total2 = count($qp)-1;
        $respuestas = array();
        $q = random_int(0, $total2);
        $datos[0] = $q;
        $respuestas[0] = $qp[$q];
        $nn = 1;
        while($nn<$total){
          $q2 = random_int(0, $total2);
          if(!in_array($q2, $datos)){
          $datos[$nn] = $q2;
          $respuestas[$nn] = $qp[$q2];
          $nn = $nn+1;
          }
        }; ?>

        <div class="row">
        @foreach($respuestas as $k => $respuesta)
            <div class="col-md-3">
              <div class="radio">
            <input type="radio" id="{{$key+1}}" name="{{$key+1}}" value="{{$respuesta}}"><label><b> {{$abc[$k]}}) </b> <img src="{{ asset('images/cuestionario/caidaLibre/'.$respuesta ) }}" width="120"> </label>
            </div>
        </div>
        @endforeach
        </div>
      @endif
      <br>
      <center>
        @if($key==9)
          <button class="btn btn-primary boton" type="submit" id="seccion2">Finalizar Cuestionario</button>
        @else
          <button onclick="preguntaSiguiente({{$key+2}})" type="button" class="btn btn-secondary">Siguiente pregunta</button>
        @endif
      </center>
      <br>
    </div>
@endforeach

</div></form></div></div>
</div>
@endsection

@section('textScript')
@endsection

@section('script')
function preguntaSiguiente(key){
  $('.nav-tabs a[href="#'+key+'"]').tab('show');
}

@endsection

