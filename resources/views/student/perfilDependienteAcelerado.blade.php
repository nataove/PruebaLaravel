@extends('student.template.main')

@section('title')
Movimiento Rectilineo Uniformemente Acelerado
@endsection

@section('head')
<meta name="_token" content="{{ csrf_token() }}"/>
<link rel="stylesheet" href="{{ asset('css/uniforme.css')}}">
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
  <div class="mySlides fade active">
    <div class="mov">

    </div>
  </div>
  <div class="mySlides fade active">
    <div class="mov">
      <h4><b>Movimiento Rectilíneo Uniforme Acelerado (MRUA) </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <p>Es aquel que su trayectoria es una línea recta y su aceleración es constante. Esto implica que la velocidad
       aumenta o disminuye de manera uniforme.
     </p>
     <div class="row justify-content-center">
      <div class="col-md-10">
        <div id="slideSistema" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mruv1.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-6 info">
                  <div class="infoMRU a">
                    <div class="center-vertical">
                      <p>Un ciclista necesita recorrer 24km.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mruv2.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-6 info">
                  <div class="infoMRU">
                    <p>A una hora de su recorrido ha recorrido 4km, con una velocidad de:<br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">4km-0km</span>
                          <span class="bar">/</span>
                          <span class="fdn">1h-0h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">4km</span>
                          <span class="bar">/</span>
                          <span class="fdn">1h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">4km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
                        </div>
                        y una aceleración de:
                        <div class="eq-c">
                          a<b> =</b>
                          <div class="fraction">
                            <span class="fup">v<sub>f</sub> - v<sub>i</sub></span>
                            <span class="bar">/</span>
                            <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">4km/h-0km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">1h-0h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">4km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">1h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction formula">
                            <span class="fup">4km</span>
                            <span class="bar">/</span>
                            <span class="fdn"> h<sup>2</sup></span>
                          </div>
                        </div> 
                      </div> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mruv3.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-6 info">
                  <div class="infoMRU">
                    <p>A las dos horas de su recorrido ha recorrido 8km más, con una velocidad de:<br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">12km-4km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h-1h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">8km</span>
                          <span class="bar">/</span>
                          <span class="fdn">1h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">8km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
                        </div>
                        y una aceleración de:
                        <div class="eq-c">
                          a<b> =</b>
                          <div class="fraction">
                            <span class="fup">v<sub>f</sub> - v<sub>i</sub></span>
                            <span class="bar">/</span>
                            <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">8km/h-4km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">2h-1h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">4km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">1h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction formula">
                            <span class="fup">4km</span>
                            <span class="bar">/</span>
                            <span class="fdn"> h<sup>2</sup></span>
                          </div>
                        </div> 
                      </div> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mruv4.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-6 info">
                  <div class="infoMRU">
                    <p>Finalmente, a las 3 horas recorre los últimos 12 km que le faltan, con una velocidad de:<br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">24km-12km</span>
                          <span class="bar">/</span>
                          <span class="fdn">3h-2h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">12km</span>
                          <span class="bar">/</span>
                          <span class="fdn">1h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">12km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
                        </div>
                        y una aceleración de:
                        <div class="eq-c">
                          a<b> =</b>
                          <div class="fraction">
                            <span class="fup">v<sub>f</sub> - v<sub>i</sub></span>
                            <span class="bar">/</span>
                            <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">12km/h-8km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">3h-2h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction">
                            <span class="fup">4km/h</span>
                            <span class="bar">/</span>
                            <span class="fdn">1h</span>
                          </div>
                          <b> =</b>
                          <div class="fraction formula">
                            <span class="fup">4km</span>
                            <span class="bar">/</span>
                            <span class="fdn"> h<sup>2</sup></span>
                          </div>
                        </div> 
                      </div> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <div id="imagenMruv">
                    <img id="imageR" src="{{ asset('images/temas/movimiento/bici.png') }}" height="70">
                  </div>                        
                </div>
                <div class="col-md-6 info">
                  <div class="infoMRU a">
                    <div class="center-vertical">
                      <p>Por lo tanto, el ciclista termina el recorrido con trayectoria recta, con velocidad variante y aceleración constante, siendo así, un
                        movimiento rectílineo uniforme acelerado.</p>
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
        </div>
      </div>
    </div>
  </div>




  <div class="mySlides fade active">
   <div class="mov">
    <h4><b>Velocidad </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
    <p>La velocidad en el Movimiento Rectilíneo Uniforme Acelerado es variable, nunca permanece constante. Como hay cambio de velocidades, entonces tiene aceleración. La formúla de velocidad en el MRUA está dada por:</p>
    <p>De la formúla de Aceleración:</p>
    <div class="row">
      <div class="col-md-8">
        <div class="eq-c">
          Aceleración<b> =</b>
          <div class="fraction">
            <span class="fup">Velocidad Final - Velocidad Inicial</span>
            <span class="bar">/</span>
            <span class="fdn">Tiempo Final - Tiempo Inicial</span>
          </div>
          ,  se puede despejar la Velocidad Final:
        </div>
        <br> 
        <div class="eq-c">
          Velocidad Final<b> =</b>
          <div class="fraction">
            <span class="fup">Aceleración (Tiempo Final - Tiempo Inicial) + Velocidad Inicial</span>
          </div>
        </div>
        <br>
      </div>
      <div class="col-md-4">

        <center>
          <div class="row justify-content-md-center">
            <button type="button" class="btn btn-info btn-circle btnVel" data-toggle="modal" data-target="#grafVel"><b> Gráfica: Velocidad - Tiempo</b></button>
          </div>
          <br>
          <div class="row justify-content-md-center">
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPractVel"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
          </div>
          <br>
        </center>
      </div>
    </div>
    <p>Ahora, imagina que el movil siempre inicia en tiempo 0. ¿Cómo sería la fórmula?</p>
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <div class="eq-c formula">
          Velocidad Final<b> =</b>
          <div class="fraction">
            <span class="fup">Aceleración (Tiempo) + Velocidad Inicial</span>
          </div>
        </div>  </div> 
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="modalPractVel" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Practica</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Un tren de alta velocidad en reposo comienza su trayecto en línea recta con una aceleración constante de 0.5m/s<sup>2</sup>.
            ¿Qué velocidad que alcanza el tren a los 120 segundos?
            <div id="respuestaVel">
              <div class="eq-c">
                <div class="fraction">
                  <span class="fup">v = a(t)+v<sub>0</sub> = 0.5m/s<sup>2</sup> * 120s + 0 = <span class="respuesta">60m/s</span> <b><i class="fa fa-long-arrow-right "></i> Solución</b></span>
                </div>
              </div>
            </div>
            <form id="practicaVel" name="practicaVel">
              <div class="form-group">
                <label for="practVel"><b>Respuesta:</b></label>
                <input type="text" class="form-control" id="practVel" aria-describedby="respAyuda" value="">
                <small id="respAyuda" class="form-text text-muted">Escribe la respuesta así: 42km/h o 42m/s. (No olvide las unidades).</small>
              </div>
            </form>

            <div id="alertVel" class="alert" role="alert">
              <div id="alertTextoVel"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="verificarPracVel()">Verificar</button>
          </div>
        </div>
      </div>
    </div>
    




    <div class="mySlides fade active">
      <div class="mov">
       <h4><b>Aceleración </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
       <p>En un MRUA, como la velocidad cambia en iguales intervalos de tiempo, el valor de la aceleracion a lo largo del movimiento siempre es diferente de cero y constante. (<b>Aceleración = </b> constante).</p>

       <center>
        <p>
          Su fórmula está dada por:</p>
          <div class="row justify-content-md-center">
           <div class="col-md-4 formula">
            <div class="eq-c">
              Aceleración<b> =</b>
              <div class="fraction">
                <span class="fup">Velocidad Final - Velocidad Inicial</span>
                <span class="bar">/</span>
                <span class="fdn">Tiempo Final - Tiempo Inicial</span>
              </div>
            </div> 
          </div>
        </div>
        <br>
        <center>
          <div class="row justify-content-md-center">
            <button type="button" class="btn btn-info btn-circle btnVel" data-toggle="modal" data-target="#grafVel"><b> Gráfica: Aceleración - Tiempo</b></button>
          </div>
          <br>
          <div class="row justify-content-md-center">
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPractAce"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
          </div>
          <br>
        </center>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modalPractAce" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Practica</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>¿Cuál es la aceleración de un móvil que se desplaza en línea recta a 90.0 km/h y reduce su velocidad 
              a 50.0 km/h en 2 horas?
              <br>
              <div id="respuestaAce">
                <div class="eq-c">
                  <b>a = </b>
                  <div class="fraction">
                    <span class="fup">v<sub>f</sub> - v<sub>i</sub></span>
                    <span class="bar">/</span>
                    <span class="fdn">t</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">50km/h - 90km/h</span>
                    <span class="bar">/</span>
                    <span class="fdn">2h</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">-40km/h</span>
                    <span class="bar">/</span>
                    <span class="fdn">2h</span>
                  </div>
                  <b> = </b>
                  <div class="fraction respuesta">
                    <span class="fup">-20km/h<sup>2</sup></span>
                  </div>
                  <b><i class="fa fa-long-arrow-right "></i> Solución</b>
                </div> 
              </div>
              <br>
              <form id="formAce" name="formAce">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="ace1" name="radioAce" value="a">
                  <label class="custom-control-label" for="ace1">
                    <div class="eq-c">
                      <b>a) </b>
                      <div class="fraction">
                        <span class="fup">20km</span>
                        <span class="bar">/</span>
                        <span class="fdn"> h<sup>2</sup></span>
                      </div></div>
                    </label>
                  </div>

                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" id="ace2" name="radioAce" value="b">
                    <label class="custom-control-label" for="ace2">
                      <div class="eq-c">
                        <b>b) </b>
                        <div class="fraction">
                          <span class="fup">40km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h<sup>2</sup></span>
                        </div></div>
                      </label>
                    </div>

                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="ace3" name="radioAce" value="c">
                      <label class="custom-control-label" for="ace3">
                        <div class="eq-c">
                          <b>c) </b>
                          <div class="fraction">
                            <span class="fup">-20km</span>
                            <span class="bar">/</span>
                            <span class="fdn"> h<sup>2</sup></span>
                          </div></div>
                        </label>
                      </div>
                    </form>
                    <br>
                    <div id="alertAce" class="alert" role="alert">
                      <div id="alertTextoAce"></div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" onclick="verificarPracAce()">Verificar</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mySlides fade active">

             <div class="mov">
              <h4><b>Seleccione una opción </b></h4>
              <br>
              <br>
              <div class="row menu justify-content-md-center">
                <div class="men col-md-3 col-sm-10 col-xs-10" align="center">
                  <br>
                  <a  onclick="volver()" id="volver"><img src="{{ asset('images/temas/acelerado.png') }}" width="80" height="80"></a>
                  <h4><br>Volver</h4>
                  <br>
                </div>
                <div class="men men2 col-md-3 col-sm-10 col-xs-10" align="center">
                  <br>
                  <a href="{{ route('caidaDependiente') }}"><img src="{{ asset('images/temas/caida.png') }}" width="80" height="80"></a>
                  <h4><br>Caida Libre</h4>
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

$.ajaxSetup({
headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
});

function showSlides(n) {
if (n < 1) {
window.location.replace("uniformeDependiente");   
}
else{
var i = 8;
var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}

if(n==slides.length){
siguiente.style.display = "none";
}
else{
siguiente.style.display = "block";
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
} 
}      

function verificarPracVel(){
var radVal = document.getElementById("practVel").value;
radVal = radVal.replace(/ /g, "");
var alertVel = document.getElementById("alertVel");
if(radVal=="60m/s"){
$("#alertVel").removeClass("alert-danger");
$("#alertVel").removeClass("alert-primary");
$("#alertVel").addClass("alert-success");
$('#alertVel').show();
$("#respuestaVel").show();
document.getElementById("practVel").disabled = true;
document.getElementById('alertTextoVel').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}

else if(radVal=="60"){
$("#alertVel").removeClass("alert-success");
$("#alertVel").removeClass("alert-danger");
$("#alertVel").addClass("alert-primary");
$('#alertVel').show();
respuestaVel.style.display="none";
document.getElementById('alertTextoVel').innerHTML='<b>¡Ten cuidado!</b> Escribe las unidades';
}
else if(radVal==""){
$("#alertVel").removeClass("alert-success");
$("#alertVel").removeClass("alert-danger");
$("#alertVel").addClass("alert-primary");
$('#alertVel').show();
respuestaVel.style.display="none";
document.getElementById('alertTextoVel').innerHTML='<b>¡Ten cuidado!</b> Escribe una respuesta';
}
else{
$("#alertVel").removeClass("alert-primary");
$("#alertVel").removeClass("alert-success");
$("#alertVel").addClass("alert-danger");
$('#alertVel').show();
$("#respuestaVel").show();
document.getElementById('alertTextoVel').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es 60m<b>/</b>s.';
}
}

function verificarPracAce(){
var radVal = document.formAce.radioAce.value;
var alertAce = document.getElementById("alertAce");
if(radVal=="c"){
$("#alertAce").removeClass("alert-danger");
$("#alertAce").removeClass("alert-primary");
$("#alertAce").addClass("alert-success");
$('#alertAce').show();
$("#respuestaAce").show();
document.getElementById('alertTextoAce').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="a"||radVal=="b"){
$("#alertAce").removeClass("alert-primary");
$("#alertAce").removeClass("alert-success");
$("#alertAce").addClass("alert-danger");
$('#alertAce').show();
$("#respuestaAce").show();
document.getElementById('alertTextoAce').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>c)</b> -20km<b>/</b>h.';

}
else{
$("#alertAce").removeClass("alert-success");
$("#alertAce").removeClass("alert-danger");
$("#alertAce").addClass("alert-primary");
$('#alertAce').show();
document.getElementById('alertTextoAce').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}
}
@endsection

