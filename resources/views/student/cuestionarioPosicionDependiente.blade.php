@extends('student.template.main')

@section('title')
  Posición, desplazamiento, aceleración
@endsection

@section('head')
<meta name="_token" content="{{ csrf_token() }}"/>
  <link rel="stylesheet" href="{{ asset('css/cuestionarioDep.css')}}">
  <link rel="stylesheet" href="{{ asset('css/perfil.css')}}">
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
<div class="slideshow-container">
  <div class="mySlides fade active">
<div class="fondoDep">
      <div class="row top">
        <div class="col-md-7 saludo">
          <div class="row">
            <div class="col-md-1">
              <img src="{{ asset('images/temas/tema1Gif.gif') }}"  class="img-circle" width="50">
            </div>
            <div class="col-md-11">
              <div class="tituloTema">
                <h5 align"justify"><b>Tema de Aprendizaje: </b>Posición, rapidez, velocidad, aceleración y desplazamiento</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 offset-md-2">
          <div class="numeral">
            <center>
              <h6 justify="center"><span class="n1"></span><b>/</b><span class="n2"></span></h6>
            </center>
          </div>
        </div>
        <div class="col-md-1">
          <div class="btnLineal animatedShake" onclick="plusSlides(event, 1)" onmouseover="cambioCssbtnLineal()" onmouseout="normalCssbtnLineal()" >
            <b>Siguiente </b>
          </div>
        </div>
        <div class="col-md-1">
          <div class="btnSim animatedShake" onclick="plusSlides(event, 1)" onmouseover="cambioCssbtnSim()" onmouseout="normalCssbtnSim()">
            <i class="i fa fa-caret-right"></i>
          </div>
        </div>
      </div>
      <hr>
            <div id="contenedor">
<div class="titulo">
  <h3 align="center"><b>Cuestionario</b></h3>
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
<form action="cuestionarioPosicionDependienteFinalizado" method="get">
<div class="tab-content respuestas" id="myTabContent">
@foreach($questions as $key => $question)
    <div @if($key==0) class="tab-pane fade show active" @else class="tab-pane fade" @endif  id="{{$key+1}}" role="tabpanel">
      @if($question->type == "Completar")
      <p><b>{{$key+1}}. </b> Escribe la respuesta correcta:</p>
      <p>{{$question->question}}</p>
      @if($question->image!=null)
        <div class="row justify-content-md-center">
         <img src="{{ asset('images/cuestionario/posicion/'.$question->image ) }}" height="120">
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
            <input type="radio" id="{{$key+1}}" name="{{$key+1}}" value="{{$respuesta}}"><label><b> {{$abc[$k]}}) </b> <img src="{{ asset('images/cuestionario/posicion/'.$respuesta ) }}" width="120"> </label>
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
      </div></div>

<div class="mySlides fade active">
    <div class="fondoDep">
      <div class="row top">
        <div class="col-md-7 saludo">
          <div class="row">
            <div class="col-md-1">
              <img src="{{ asset('images/temas/tema1Gif.gif') }}"  class="img-circle" width="50">
            </div>
            <div class="col-md-11">
              <div class="tituloTema">
                <h5 align"justify"><b>Tema de Aprendizaje: </b>Posición, rapidez, velocidad, aceleración y desplazamiento</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <div class="btnSim" onmouseover="cambioCssbtnSim2()" onclick="plusSlides1(event, 1)" onmouseout="normalCssbtnSim2()">
            <i class="i2 fa fa-caret-left"></i>
          </div>
        </div>
        <div class="col-md-1">
          <div class="btnLineal2" onmouseover="cambioCssbtnLineal2()" onclick="plusSlides1(event, 1)" onmouseout="normalCssbtnLineal2()" >
            <b>Anterior </b>
          </div>
        </div>
        <div class="col-md-1">
          <div class="numeral">
            <center>
              <h6 justify="center"><span class="n1"></span><b>/</b><span class="n2"></span></h6>
            </center>
          </div>
        </div>
      </div>
      <hr>
      <div class="mov">
      <h4><b>Seleccione una opción </b></h4>
      <br>
      <br>
      <br>
      <div class="row menu justify-content-md-center">
        <div class="btnIn col-md-3 col-sm-10 col-xs-10" align="center">
          <br>
          <a href="posicionDependiente" id="volver"><img src="{{ asset('images/temas/tema1.png') }}" width="80" height="80"></a>
            <br>
          <h4>Inicio</h4>
          <br>
        </div>
        <div class="btnIn men2 col-md-3 col-sm-10 col-xs-10" align="center">
          <br>
          <a href="{{ route('uniformeDependiente') }}"><img src="{{ asset('images/temas/uniforme.png') }}" width="80" height="80"></a>
          <h4><b>Tema de aprendizaje:</b> Movimiento Rectilineo Uniforme</h4>
          <br>
        </div>
        
      </div>
      
    </div>
      <br>

    </div>
  </div>
</div>

<form name="url1">
  <input type="hidden" name="pUrl1" id="posUrl1" value="{{ $slide }}">
</form>

@endsection
@section('textScript')
  <script type="text/javascript" src="{{ asset('js/cuestionarioPosDep.js')}}"></script>
@endsection

@section('script')
function preguntaSiguiente(key){
  $('.nav-tabs a[href="#'+key+'"]').tab('show');
}

function cambioCssbtnLineal(){
  $(".btnLineal").css("text-decoration", "underline");
  $(".i").css("cssText", "color: #2C3E50 !important");
}

function cambioCssbtnSim(){
  $(".btnLineal").css("text-decoration", "underline");
  $(".i").css("cssText", "color: #2C3E50 !important");
}

function normalCssbtnSim(){
  $(".btnLineal").css("text-decoration", "none");
  $(".i").css("cssText", "color: #18BC9C !important");
}

function normalCssbtnLineal(){
  $(".btnLineal").css("text-decoration", "none");
   $(".i").css("cssText", "color: #18BC9C !important");
}

function cambioCssbtnLineal2(){
  $(".btnLineal2").css("text-decoration", "underline");
  $(".i2").css("cssText", "color: #2C3E50 !important");
}

function cambioCssbtnSim2(){
  $(".btnLineal2").css("text-decoration", "underline");
  $(".i2").css("cssText", "color: #2C3E50 !important");
}

function normalCssbtnSim2(){
  $(".btnLineal2").css("text-decoration", "none");
  $(".i2").css("cssText", "color: #18BC9C !important");
}

function normalCssbtnLineal2(){
  $(".btnLineal2").css("text-decoration", "none");
   $(".i2").css("cssText", "color: #18BC9C !important");
}



var canSlide = document.getElementsByClassName("mySlides");



var sli = document.getElementById('posUrl1').value;

var slideIndex = parseInt(sli);


window.onload = function () {
showSlides(slideIndex);
};
$.ajaxSetup({
headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
});

function volver(){

slideIndex=1;
 
showSlides(slideIndex);
}

$('.n2').html(canSlide.length);
$('.n1').html(slideIndex);

function plusSlides(e, n) {
showSlides(slideIndex += n);
e.preventDefault();
}

function plusSlides1(e, n) {
showSlides(slideIndex -= n);
e.preventDefault();
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i = 8;
var slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}


slides[slideIndex-1].style.display = "block"; 
var urlAct = location.href;
var slide = n+"";
var dat={"link": urlAct, "nSlide":slide};
$.ajax({
type: "post",
dataType: "json",
url: '{{ action("StudentsController@url") }}',
data: dat,
success: function(data) {
console.log(data)
},
});   
$('.n2').html(canSlide.length);
$('.n1').html(slideIndex);
}

@endsection