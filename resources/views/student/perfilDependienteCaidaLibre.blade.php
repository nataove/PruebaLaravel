@extends('student.template.main')

@section('title')
Caida Libre
@endsection

@section('head')
<meta name="_token" content="{{ csrf_token() }}"/>
<link rel="stylesheet" href="{{ asset('css/caida.css')}}">
<link rel="stylesheet" href="{{ asset('css/pelota.css')}}">
<link rel="stylesheet" href="{{ asset('css/perfil.css')}}">
<link rel="stylesheet" href="{{ asset('css/template/tabContent.css')}}">
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
  </div>
  
</div>
<br>
<br>
<div class="slideshow-container">
  <div class="mySlides2 fade active">
    <div class="mov">
      <center>
        <video id="video1" src="{{ asset('videos/caida.mp4') }}" controls poster></video>
      </center>
    </div>

  </div>
  <div class="mySlides2 fade active">
    <div class="mov">
      <h4><b>Gravedad </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
        <br>
      <p>La gravedad es lo que hace que un objeto sea atraido por otro, o que un planeta atraiga un cuerpo hacia su centro de gravedad. Como ejemplo tenemos la atracción que sufre la tierra frente a su estrella mayor(El sol), la gravedad de la tierra es de 9.8 m/s<sup>2</sup> a continuación veremos un ejemplo.</p>
      <center>
        <img class= "rounded mx-auto d-block" src="{{ asset('images/gravedadquieta.gif') }}" id="myImage" height="250px" width="400px" >
        <br>
        <img class="video animatedRotate image" onClick="cambio() ; parar()" src="{{ asset('images/video.png') }}" id="myImage2"  height="40" >
        <br>
      </center>
    </div>
  </div>
     <div class="mySlides2 fade active">
    <div class="mov">
          <h4><b>Tiro Vertical </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
        <br>
          <p>El Tiro Vertical, es un movimiento donde al cuerpo se lo arroja hacia arriba con una velocidad inicial V <sub>i</sub>. En el camino de subida el movimiento es retardado pues la aceleración es hacia abajo y la velocidad hacia arriba.</p>
          
        <p>El cuerpo va disminuyendo su velocidad hasta detenerse en el punto más alto del trayecto. Luego comienza a bajar por efecto de la aceleración de la gravedad que en todo momento sigue su fenomeno de atracción. Esta segunda parte del movimiento constituye una caída libre.</p>
          <div class="row">
              <div class="col-md-3">
                          </div>
        <div class="col-md-5 formula">
        <center>
          <img class= "rounded mx-auto d-block" src="{{ asset('images/tiroverticalquieto.gif') }}" id="myImage1" height="250px" width="400px" >
            <br>
            <img class="video animatedRotate image" onClick="cambio1() ; parar1()" src="{{ asset('images/video.png') }}" id="myImage3"  height="40" >
            </center>
              </div>
            
            <br>
        
            <div class="col-md-4">
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaTiro"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
            <br>
                <br>
          
          <button  type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalConsideraciones"><center><img src="{{ asset('images/iconoHistoria.png') }}" width="40" height="40"><br>Atención</center></button>
              </div>
          </div>
      </div>
    </div>
            <div class="modal fade" id="modalConsideraciones" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Consideraciones</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <p> • Nunca la velocidad inicial es cero.</p>
                <br>
                <p> • Cuando el objeto alcance su altura máxima su velocidad en este punto es cero, mientras el objeto está de subida el signo de la velocidad es positivo y la velocidad es cero en su altura máxima, cuando comienza el descenso el signo de la velocidad es negativo.</p>
                <br>
                <p> • La velocidad de subida es igual a la de bajada pero el signo de la velocidad aldescender es negativo</p>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              
            </div>
          </div>
        </div>
      </div>
            </div>
            
            <div class="modal fade" id="modalPracticaTiro" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Practica</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Un cohete se lanza verticalmente hacia arriba con una aceleración de 20m/s<sup>2</sup>. Al cabo de 20 segundos el combustible se agota y el cohete continua como una particula libre hasta alcanzar el suelo, ¿Cual es su velocidad antes de chocar contra el suelo?</p>
                <br>
                <br>
              <center>
                <img id="imgPract1" class= "rounded mx-auto d-block" src="{{ asset('images/tiroverticalcohete.gif') }}" height="200px" >
              </center>
              <br>
                <br>
              <form id="mainForm1" name="mainForm1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="tiro1" name="tiroVertical" value="a">
                  <label class="custom-control-label" for="tiro1"><b>a)</b> -519,4 m/s </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="tiro2" name="tiroVertical" value="b">
                  <label class="custom-control-label" for="tiro2"><b>b)</b> -610,4 m/s </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="tiro3" name="tiroVertical" value="c">
                  <label class="custom-control-label" for="tiro3"><b>c)</b> -560,1 m/s </label>
                </div>
              </form>
              <br>
              <div id="alert1" class="alert" role="alert">
                <div id="alertTexto1"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" onclick="verificarPracTiro()">Verificar</button>
            </div>
          </div>
        </div>
         </div>
      





  <div class="mySlides2 fade active">
   <div class="mov">
    <h4><b>Caida Libre </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
       <br>
    <p> Es cuando un objeto cae verticalmente desde cierta altura (H) despreciando cualquier tipo de rozamiento con el aire o cualquier otro obstáculo. La unica fuerza que actua sobre el cuerpo es su propio peso </p>
    <br>
    <p><b>Por ejemplo:</b> Cuando se deja caer una moneda de la mano, inicialmente la moneda parte desde el reposo porque la velocidad es cero; inmediatamente después la velocidad empieza a aumentar aproximadamente a una razón de 9.8 m/s<sup>2</sup> cada segundo debido al efecto de la gravedad de la tierra, es decir el primer segundo la velocidad adquirida es de 9.8 m/s<sup>2</sup>, al segundo la velocidad aumenta de nuevo 9.8 m/s<sup>2</sup> y ahora  la velocidad es de 19.6 m/s<sup>2</sup>.</p>
    <br>
  </div>
  <div class="row justify-content-md-center">
    <button onclick="practRap()" type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaCaida"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="modalPracticaCaida" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Practica</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Mira la imagen:</p>
        <center>
          <img id="imgPract" class= "rounded mx-auto d-block" src="{{ asset('images/mano.gif') }}" height="200px" >
        </center>
        <p>¿Cual es su velocidad al final?</p>
        <form id="mainForm" name="mainForm">
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" class="custom-control-input" id="inline1" name="radioInline" value="a">
            <label class="custom-control-label" for="inline1"><b>a)</b> 29,4 m/s <sup>2</sup></label>
          </div>

          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" class="custom-control-input" id="inline2" name="radioInline" value="b">
            <label class="custom-control-label" for="inline2"><b>b)</b> 18,5 m/s <sup>2</sup></label>
          </div>

          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" class="custom-control-input" id="inline3" name="radioInline" value="c">
            <label class="custom-control-label" for="inline3"><b>c)</b> 20,1 m/s <sup>2</sup></label>
          </div>
        </form>
        <br>
        <div id="alert" class="alert" role="alert">
          <div id="alertTexto"></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="verificarPracRap()">Verificar</button>
      </div>
    </div>
  </div>
</div>





<div class="mySlides2 fade active">
  <div class="mov">
    <h4><b>Consideraciones </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
<br><br><br><br>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div id="slideSistema" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <img id="d-block"  src="{{ asset('images/manzana1.gif') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoCaida a">
                    <div class="center-vertical">
                      <p> No se considera la resistencia del aire.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <img id="d-block" src="{{ asset('images/manzana2.gif') }}" alt="First slide" height="201" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoCaida a">
                   <div class="center-vertical">
                    <p>La velocidad máxima alcanzada por el cuerpo es suficientemente pequeña para despreciar la resistencia del aire.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-md-6">
                <img id="d-block"  src="{{ asset('images/manzana3.gif') }}" alt="First slide" height="200" width="426">
              </div>
              <div class="col-md-5 info">
                <div class="infoCaida a">
                  <div class="center-vertical">
                    <p> El valor o módulo de la aceleración de la gravedad es g: 9.8 m/s<sup>2</sup> ó 9.8 N/kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <center>
          <a href="#slideSistema" role="button" data-slide="prev">
            <span aria-hidden="true"><button class="btnSlide left"> <i class="fa fa-caret-left"></i></button></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a href="#slideSistema" role="button" data-slide="next">
            <span aria-hidden="true"><button class="btnSlide right"> <i class="fa fa-caret-right"></i></button></span>
            <span class="sr-only">Siguiente</span>
          </a>
        </center>

      </div>
      <br>


      <div class="row justify-content-md-center">
        <button onclick="cambiar()" type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalHistoriaCaida"><img src="{{ asset('images/iconoHistoria.png') }}" width="20" height="22"><b> Historia</b></button>

      </div>
    </div>
  </div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="modalHistoriaCaida" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Historia</h5>
      </div>
      <div class="modal-body">
       <div class="row justify-content-md-center">
         <img src="{{ asset('images/01.gif') }}" id = "ia" width="400" height="200">
       </div>
     </div>
     <div class="modal-footer">
      <body onload="cambiar()">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </body>
    </div>
  </div>
</div>
</div>


<div class="mySlides2 fade active">
  <div class="mov">
    <h4><b>Formulas </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
    <br>
    <p>El movimiento de caida libre es un caso especial del M.R.U.V (Movimiento Rectilineo Uniformemente Variado), donde la distancia se reemplaza por la altura y la aceleración lineal por la aceleración de la gravedad. A continuación se definira las variables para la formula:</p>
    <br>


    <center>
      <div class="row justify-content-md-center">
        <button type="button" class="btn btn-info btn-circle btnDefi" data-toggle="modal" data-target="#modalDefinicion"><b>Definición de variables</b></button>
      </div>
      <br>
      <div class="row justify-content-md-center">
        <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalFormulas"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Formula</center></button>
      </div>
    </center>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="modalFormulas" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Formulas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>A continuación se presenta las formulas que se implementan en la caida libre.</p>
        <img id="imgPract" class= "rounded mx-auto d-block" src="{{ asset('images/caidabaja.png') }}" height="200px" >
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modalDefinicion" tabindex="-1" role="dialog" aria-labelledby="modalLabel"  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Practica</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <p>• h = Altura con su representación numérica en metros</p>
        <p>• g = Gravedad, con su representación numérica de 9.8 m/s<sup>2</sup> ó 9.8 N/kg</p>
        <p>• t = Tiempo, con su representación numérica en segundos</p>
        <p>• V<sub>o</sub> = Velocidad inicial, con su representación numérica de metros sobre segundos (m/s)</p>
        <p>• V<sub>f</sub> = Velocidad final, con su representación numérica de metros sobre segundos (m/s)</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<adiv class="mySlides2 fade active">
  <div class="mov">
      <h4><b>Ejercicios </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
    <center>
        <br><br><br>
      <video id="video1" src="{{ asset('videos/ejercicioCaida.mp4') }}" controls poster></video>
    </center>
  </div>
</adiv>

<div class="mySlides2 fade active">

 <div class="mov">
  <h4><b>Seleccione una opción </b></h4>
  <br>
  <br>
  <div class="row menu justify-content-md-center">
    <div class="men col-md-3 col-sm-10 col-xs-10" align="center">
      <br>
      <a onclick="volver()" id="volver"><img src="{{ asset('images/temas/caida.png') }}" width="80" height="80"></a>
      <h4>Volver</h4>
      <br>
    </div>
    <div class="men men2 col-md-3 col-sm-10 col-xs-10" align="center">
      <br>
      <a href="{{ route('proyectilesDependiente') }}"><img src="{{ asset('images/temas/proyectil.png') }}" width="80" height="80"></a>
      <h4>Movimiento de Proyectiles</h4>
      <br>
    </div>
    
  </div>

</div>
</div>
<a class="next" id="siguiente" onclick="plusSlides(event, 1)"><img src="{{ asset('images/siguiente.png') }}" width="100" height="100"></a>
<a class="prev" id="anterior" onclick="plusSlides1(event, 1)"><img src="{{ asset('images/anterior.png') }}" width="100" height="100"></a>

</div>

<form name="url1">
  <input type="hidden" name="pUrl1" id="posUrl1" value="{{ $slide }}">
</form>

@endsection

@section('textScript')
<script type="text/javascript" src="{{ asset('js/responsiveTab.js')}}"></script>

@endsection

@section('script')

var sli = document.getElementById('posUrl1').value;

var slideIndex = parseInt(sli);

window.onload = function () {
showSlides(slideIndex);
};

      function volver(){
    slideIndex = 1;
showSlides(slideIndex);
}

$.ajaxSetup({
headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
});

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
if (n < 1) {
window.location.replace("aceleradoDependiente");   
}
else{
var i = 8;
var slides = document.getElementsByClassName("mySlides2");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slides[slideIndex-1].style.display = "block";  
if(n==slides.length){
siguiente.style.display = "none";
}
else{
siguiente.style.display = "block";
}
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
}
}



function cambio() {
var image = document.getElementById('myImage');
if (image.src.match("1") ) {
image.src = "{{ asset('images/0m.png') }}";

} else {
image.src = "{{ asset('images/mano.gif') }}";

}
}

function cambio() {
var image = document.getElementById('myImage');
if (image.src.match("eta") ) {
image.src = "{{ asset('images/gravedadgif.gif') }}";

} else {
image.src = "{{ asset('images/gravedadquieta.gif') }}";

}
}

function parar() {
var image = document.getElementById('myImage2');
if (image.src.match("video") ) {
image.src = "{{ asset('images/parar.png') }}";

} else {
image.src = "{{ asset('images/video.png') }}";

}
}

function practCai(){
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 200);
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 1500);
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 3000);
setInterval(function(){
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 200);
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 1500);
setTimeout(function(){imgPractRap.src = "{{ asset('images/mano.gif') }}" }, 3000);
},5000);
}



function rand(n){
return(Math.floor(Math.random() * n + 1 ));
}

var cambia_imagen = new Array();
cambia_imagen[0] = "{{ asset('images/01.gif') }}";
cambia_imagen[1] = "{{ asset('images/02.gif') }}";
cambia_imagen[2] = "{{ asset('images/03.gif') }}";
cambia_imagen[3] = "{{ asset('images/04.gif') }}";

function cambiar(){
document.getElementById("ia").src = cambia_imagen[rand(4)-1];
}

function verificarPracTiro(){
    var radVal = document.mainForm1.tiroVertical.value;
    var alert1 = document.getElementById("alert1");
    if(radVal=="b"){
      $("#alert1").removeClass("alert-danger");
      $("#alert1").removeClass("alert-primary");
      $("#alert1").addClass("alert-success");
      $('#alert1').show();
      imgPract1.src = "{{ asset('images/respuesta2.png') }}"
      document.getElementById('alertTexto1').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
    }
    else if(radVal=="a"||radVal=="c"){
      $("#alert1").removeClass("alert-primary");
      $("#alert1").removeClass("alert-success");
      $("#alert1").addClass("alert-danger");
      $('#alert1').show();
      imgPract1.src = "{{ asset('images/respuesta2.png') }}"
      document.getElementById('alertTexto1').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>b.</b>-610,4 m/s.';
}

    
    else{
      $("#alert1").removeClass("alert-success");
      $("#alert1").removeClass("alert-danger");
      $("#alert1").addClass("alert-primary");
      $('#alert1').show();
      document.getElementById('alertTexto1').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
    }
}
  


function verificarPracRap(){
var radVal = document.mainForm.radioInline.value;
var alert = document.getElementById("alert");
if(radVal=="a"){
$("#alert").removeClass("alert-danger");
$("#alert").removeClass("alert-primary");
$("#alert").addClass("alert-success");
$('#alert').show();
imgPract.src = "{{ asset('images/respuesta1.png') }}"
document.getElementById('alertTexto').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="c"||radVal=="b"){
$("#alert").removeClass("alert-primary");
$("#alert").removeClass("alert-success");
$("#alert").addClass("alert-danger");
$('#alert').show();
imgPract.src = "{{ asset('images/respuesta1.png') }}"
document.getElementById('alertTexto').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>a.</b>29,4 m/s <sup>2</sup>.';
}


else{
$("#alert").removeClass("alert-success");
$("#alert").removeClass("alert-danger");
$("#alert").addClass("alert-primary");
$('#alert').show();
document.getElementById('alertTexto').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}
}




@endsection

