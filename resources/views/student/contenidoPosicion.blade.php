@extends('student.template.main')

@section('title')
  Posición, rapidez, velocidad, aceleración y desplazamiento
@endsection

@section('head')
   <link rel="stylesheet" href="{{ asset('css/posicion.css')}}">
   <link rel="stylesheet" href="{{ asset('css/template/tabContent.css')}}">
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

<?php 
$stud=Auth::user()->student;
if($stud->type_Style=="IC"){
  $url = 'user';
}
else if($stud->type_Style=="DC"){
  $url = 'dependent/posicionDependiente';
};
?>

@section('inicioUrl')
  {{ $url }}
@endsection

@section('content')
<div class="bread">
  <div id="bc1" class="btn-group btn-breadcrumb breadcrumb-primary">
    <a href="{{url('student/independent/user')}}" class="btn btn-primary visible-lg-block visible-md-block"><div>Inicio</div></a>
    <a href="{{ route('temarioPosicion') }}" class="btn btn-primary visible-lg-block visible-md-block"><div>Menú</div></a>
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel"><div>Posición, rapidez, velocidad, aceleración y desplazamiento</div></a>
  </div>
</div>

<div class="row">
<div class="col-md-12 col-sm-6">
  <ul class="nav nav-tabs responsive-tabs">
    <li class="active titulo"><a href="#introduccion"><h3><b>Introducción</b></h3></a></li>
    <li class="titulo"><a href="#movimiento"><h3><b>Movimiento</b></h3></a></li>
    <li class="titulo"><a href="#sistema_referencia"><h3><b>Sistema de Referencia</b></h3></a></li>
    <li class="titulo"><a href="#posicion"><h3><b>Posición</b></h3></a></li>
    <li class="titulo"><a href="#trayectoria"><h3><b>Trayectoria</b></h3></a></li>
    <li class="titulo"><a href="#desplazamiento"><h3><b>Desplazamiento</b></h3></a></li>
    <li class="titulo"><a href="#rapidez"><h3><b>Rápidez</b></h3></a></li>
    <li class="titulo"><a href="#velocidad"><h3><b>Velocidad</b></h3></a></li>
    <li class="titulo"><a href="#aceleracion"><h3><b>Aceleración</b></h3></a></li>
  </ul>

  <div class="tab-content" id="contTab">
    <div class="tab-pane active" id="introduccion">
      <div class="mov">
        <center>
          <video id="video1" src="{{ asset('videos/Videomaker.mp4') }}" controls poster></video>
        </center>
      </div>
    </div>

    <div class="tab-pane" id="movimiento">
      <div class="mov">
            <h4><b>Movimiento </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
            <p>Cambio de posición inicial de un cuerpo u objeto con respecto a un punto de referencia en un tiempo determinado.</p>
            <div class="row justify-content-md-center">
              <div id="fondo">
                <img id="carro" class="inicio" src="{{ asset('images/temas/movimiento/cc2.png') }}">
              </div>
              <button onclick="carroMover()" class="btnPlay"> <i class="fa fa-play"></i></button>
            </div>
        </div>
    <br>
        <center>
          <button type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalHistoriaMov"><img src="{{ asset('images/iconoHistoria.png') }}" width="20" height="22"><b> Historia</b></button>
        </center>

<!-- Modal -->
        <div class="modal fade" id="modalHistoriaMov" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Historia</h5>
              </div>
              <div class="modal-body">
                <p> <b>¿Sabías que?</b><br>Las cuestiones acerca del movimiento surgieron en la mente del hombre hace más de 25 siglos, pero las respuestas que hoy conocemos no se 
                  desarrollaron hasta los tiempos de Galileo Galilei (1564–1642) e Isaac Newton (1642–1727).</p>       
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    <div class="tab-pane" id="sistema_referencia">
      <div class="mov">
          <h4><b>Sistema de Referencia </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
            <p>Es un punto de vista desde donde medir las cosas, en física, es el conjunto formado por un sistema de coordenadas y un tiempo de referencia asociado a un observador. El sistema de coordenadas, está formado por:<br>
              Un punto tomado como <b>origen de referencia de coordenadas</b>, es el lugar donde el observador está ubicado. <br>
              Unos <b>ejes de coordenadas</b>. Los ejes se cortan en el origen de referencia.<p>
            <div class="row">
              <div class="col-md-3">
                <div id="slideSistema" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/plano.png') }}" alt="First slide" width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoEjes.png') }}" alt="Second slide"  width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoPunto.png') }}" alt="Third slide"  width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoOrigen.png') }}" alt="Third slide"  width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoObservador.png') }}" alt="Third slide"  width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoUbicacion.png') }}" alt="Third slide"  width="270" height="210">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="{{ asset('images/temas/movimiento/planoPosicion.png') }}" alt="Third slide"  width="270" height="210">
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
              <div class="col-md-8">
                <br>
                <center>
                  <div class="row justify-content-md-center">
                    <button type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalUnaDim"><b> Una dimensión</b></button>
                  </div>
                  <br>
                  <div class="row justify-content-md-center">
                    <button type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalDosDim"><b> Dos dimensiones</b></button>
                  </div>
                  <br>
                  <div class="row justify-content-md-center">
                    <button type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalTresDim"><b> Tres dimensiones</b></button>
                  </div>
                </center>


           <!-- Modal -->
            <div class="modal fade" id="modalUnaDim" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Una Dimensión</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <center>
                      <img class="imgDim" src="{{ asset('images/temas/movimiento/unaDim2.png') }}" width="300" height="300">
                    </center>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalDosDim" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Dos Dimensiones</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <center>
                      <img class="imgDim" src="{{ asset('images/temas/movimiento/dosDim2.png') }}" width="300" height="300">
                    </center>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="modalTresDim" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Tres Dimensiones</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <center>
                      <img class="imgDim" src="{{ asset('images/temas/movimiento/tresDim2.png') }}" width="300" height="300">
                    </center>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>

    <div class="tab-pane" id="posicion">
      <div class="mov">
          <h4><b>Posición </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
            <p>Es el punto en el que se encuentra un cuerpo en un instante determinado de tiempo. En el sistema de coordenadas, es el vector que une el lugar ocupado 
              por el cuerpo con el origen del sistema de referencia.</p><br>
            <p><b>Por ejemplo:</b> Cuando una persona camina desde su casa y llega a una tienda, la posición de esa persona está en el lugar
              donde se encuentra teniendo en cuenta el origen del sistema de referencia, en este caso sería la casa.</p>
        </div>
        <center>
          <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPractica"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
        </center>
          
      <!-- Modal -->
      <div class="modal fade" id="modalPractica" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
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
                <img id="imgPract" class= "rounded mx-auto d-block" src="{{ asset('images/temas/movimiento/practicaPos.png') }}" height="200px" >
              </center>
              <p>¿En qué posición se encuentra la persona?</p>
              <form id="mainForm" name="mainForm">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="inline1" name="radioInline" value="a">
                  <label class="custom-control-label" for="inline1"><b>a)</b> (0,15)</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="inline2" name="radioInline" value="b">
                  <label class="custom-control-label" for="inline2"><b>b)</b> (5,10)</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="inline3" name="radioInline" value="c">
                  <label class="custom-control-label" for="inline3"><b>c)</b> (20,15)</label>
                </div>
              </form>
              <br>
              <div id="alert" class="alert" role="alert">
                <div id="alertTexto"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" onclick="verificarPrac()">Verificar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-pane" id="trayectoria">
      <div class="mov">
          <h4><b>Trayectoria </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>La trayectoria es la línea que un móvil describe durante su movimiento.</p>
          <p>La trayectoria puede ser:</p>
          <p><b class="tm" onmouseout="normal()" onmouseover="hoverR()">- Rectilíneo</b>, cuando su trayectoria describe una línea recta.</p>
          <p><b class="tm" onmouseout="normal()" onmouseover="hoverC()">- Curvilíneo</b>, cuando su trayectoria describe una línea curva.</p>
          <p>El movimiento curvilíneo puede ser:
          <p><b class="tm" onmouseout="normal()" onmouseover="hoverCi()">- Circular</b>, si la trayectoria es una circunferencia, como ocurre con el
              extremo de las manecillas del reloj.</p>
          <p><b class="tm" onmouseout="normal()" onmouseover="hoverE()">- Elíptico</b>, si la trayectoria es una elipse, como ocurre con el movimiento
              planetario.</p>
          <p><b class="tm" onmouseout="normal()" onmouseover="hoverP()">- Parabólico</b>, si la trayectoria es una parábola, como ocurre con el movimiento
              de los proyectiles.</p>
        </div>
    </div>

    <div class="tab-pane" id="desplazamiento">
       <div class="mov">
          <h4><b>Desplazamiento </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p><u  data-toggle="modal" data-target="#modalDistancia">Distancia</u> que existe entre la posición final e inicial de un movimiento. Es una <u onmouseout="normalVectorial()" onmouseover="vectorial()">magnitud vectorial</u> que determina
            el cambio de posición de un cuerpo respecto al sistema de referencia.</p>
            <div class="row justify-content-md-center">
            <div class="col-md-5 formula">
              <div class="eq-c">
                Desplazamiento<b> = </b>Posición final - Posición Inicial
              </div> 
            </div>
          </div>
          <center>
            <img id="imgDesp" src="{{ asset('images/temas/movimiento/de1.png') }}" alt="First slide" height="230">
            <button class="btnInicio" onclick="desplazamiento()"><i class="fa fa-caret-right"></i></button>
          </center>
          <!-- Modal -->
            <div class="modal fade" id="modalDistancia" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Distancia</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>La distancia recorrida por un móvil es la longitud de su trayectoria y se trata de una <u onmouseout="normalEscalar()" onmouseover="escalar()">magnitud escalar</u>.</p>
                    <center>
                      <img id="imgDist" src="{{ asset('images/temas/movimiento/dist1.png') }}" alt="First slide" height="300">
                      <br>
                      <button class="btnInicio" onclick="distancia()"><i class="fa fa-caret-right"></i></button>
                    </center>
                    <div id="mensajeEscalar">
    <div class="textoDes">
      <p>Es un valor numérico, <b>por ejemplo, </b>una masa de 10kg o una distancia de 25m. <br>
      Estas magnitudes solo poseen un número y una unidad. </p>
      <center>
          <img src="{{ asset('images/temas/conceptos/escalar.png') }}" height="60">
        </center>
    </div>
  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    <div class="tab-pane" id="rapidez">
      <div class="mov">
          <h4><b>Rápidez </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>Es una medida de que tan aprisa se mueve un objeto. Es una magnitud escalar, que corresponde a la distancia recorrida en un tiempo determinado.</p>
          <div class="row justify-content-md-center">
            <div class="col-md-3 col-sm-12 col-xs-12 formula">
              <div class="eq-c">
                Rapidez<b> =</b>
                <div class="fraction">
                  <span class="fup">Distancia recorrida</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tiempo empleado</span>
                </div>
              </div> 
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-5">
              <p>
            Sus <b>unidades</b> son: <br>
            <div class="row">
                 <div class="col-md-4">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">metros (m)</span>
                      <span class="bar">/</span>
                      <span class="fdn">segundos (s)</span>
                    </div>
                  </div> 
                </div>
                <div class="col-md-1">
                  <p>o</p>
                </div>
                <div class="col-md-6">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">kilometros (Km)</span>
                      <span class="bar">/</span>
                      <span class="fdn">hora (h)</span>
                    </div>
                  </div> 
                </div>
              </div>
          </p>
            </div>
            <div class="col-md-7">
              <br>
                <div class="row justify-content-md-center">
                  <button onclick="practRap()" type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaRapidez"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                </div>
            </div>
          </div>    
    </div>

  <!-- Modal -->
      <div class="modal fade" id="modalPracticaRapidez" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Practica</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>¿Cuál es la rápidez de una persona que recorre 42 km en 2 horas?</p>
              <center>
                <img id="imgPractRap" class="rounded mx-auto d-block" src="{{ asset('images/temas/movimiento/rap1.png') }}" height="120px" >
              </center>
              <br>
              <div id="respuestaRap">
                <div class="eq-c">
                  <b>Rapidez = </b>
                  <div class="fraction">
                    <span class="fup">Distancia</span>
                    <span class="bar">/</span>
                    <span class="fdn">Tiempo</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">42 km</span>
                    <span class="bar">/</span>
                    <span class="fdn">2 h</span>
                  </div>
                  <b> = </b>
                  <div class="fraction respuesta">
                    <span class="fup">21 km</span>
                    <span class="bar">/</span>
                    <span class="fdn"> h</span>
                  </div>
                  <b><i class="fa fa-long-arrow-right "></i> Solución</b>
                </div> 
              </div>
              <form id="practicaRap" name="practicaRap">
                <div class="form-group">
                  <label for="practRap"><b>Respuesta:</b></label>
                  <input type="text" class="form-control" id="practRap" aria-describedby="respAyuda" value="">
                  <small id="respAyuda" class="form-text text-muted">Escribe la respuesta así: 42km/h o 42m/s. (No olvide las unidades).</small>
                </div>
              </form>

              <div id="alertRap" class="alert" role="alert">
                <div id="alertTextoRap"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" onclick="verificarPracRap()">Verificar</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="tab-pane" id="velocidad">
      <div class="mov">
          <h4><b>Velocidad </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>Es la rapidez con la cual un móvil cambia de posición. Es una magnitud vectorial, que corresponde al desplazamiento total sobre un intervalo de tiempo.</p>
          <div class="row justify-content-md-center">
            <div class="col-md-6 formula">
              <div class="eq-c">
                Velocidad<b> =</b>
                <div class="fraction">
                  <span class="fup">Desplazamiento</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tiempo</span>
                </div>
                <b> =</b>
                <div class="fraction">
                  <span class="fup">Posición Final - Posición Inicial</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tiempo Final - Tiempo Inicial</span>
                </div>
              </div> 
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-5">
              <p>
            Sus <b>unidades</b> son: <br>
            <div class="row">
                 <div class="col-md-4">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">metros (m)</span>
                      <span class="bar">/</span>
                      <span class="fdn">segundos (s)</span>
                    </div>
                  </div> 
                </div>
                <div class="col-md-1">
                  <p>o</p>
                </div>
                <div class="col-md-6">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">kilometros (Km)</span>
                      <span class="bar">/</span>
                      <span class="fdn">hora (h)</span>
                    </div>
                  </div> 
                </div>
              </div>
          </p>
            </div>
            <div class="col-md-7">
              <br><br>
              <div class="row justify-content-md-center">
                  <button onclick="practRap()" type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracVel"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
            </div>
            </div>
          </div>  
    
            

            
        
        </div>

          <!-- Modal -->
      <div class="modal fade" id="modalPracVel" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Practica</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <p>Mira la imagen.<br>
                ¿Cuál es la velocidad del automóvil?</p>
              <center>
               <img class= "rounded mx-auto d-block" src="{{ asset('images/temas/movimiento/pracVel.png') }}" width="350">
              </center>
              <br>
              <div id="respuestaVel">
                <div class="eq-c">
                  <b>Velocidad = </b>
                  <div class="fraction">
                  <span class="fup">Pf - Pi</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tf - Ti</span>
                </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">200m - 0m</span>
                    <span class="bar">/</span>
                    <span class="fdn">20s - 5s</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">200m</span>
                    <span class="bar">/</span>
                    <span class="fdn">15 s</span>
                  </div>
                  <b> = </b>
                  <div class="fraction respuesta">
                    <span class="fup">13.3m</span>
                    <span class="bar">/</span>
                    <span class="fdn"> s</span>
                  </div>
                  <b><i class="fa fa-long-arrow-right "></i> Solución</b>
                </div> 
              </div>
              <form id="practicaVel" name="practicaVel">
                <div class="form-group">
                  <label for="practVel"><b>Respuesta:</b></label>
                  <input type="text" class="form-control" id="practVel" aria-describedby="respAyudaVel" value="">
                  <small id="respAyudaVel" class="form-text text-muted">Escribe la respuesta así: 42km/h o 42m/s. (No olvide las unidades).</small>
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
    </div>

    <div class="tab-pane" id="aceleracion">
       <div class="mov">
          <h4><b>Aceleración </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>Es la rapidez con la que un móvil cambia de velocidad. Es una magnitud vectorial, que corresponde al cambio de la velocidad en un intervalo de tiempo.</p>
          <div class="row justify-content-md-center">
            <div class="col-md-7 formula">
              <div class="eq-c">
                Aceleración<b> =</b>
                <div class="fraction">
                  <span class="fup">Cambio de la Velocidad</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tiempo</span>
                </div>
                <b> =</b>
                <div class="fraction">
                  <span class="fup">Velocidad Final - Velocidad Inicial</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tiempo Final - Tiempo Inicial</span>
                </div>
              </div> 
            </div>
          </div>
            <br>
            <div class="row">
            <div class="col-md-5">
              <p>
            Sus <b>unidades</b> son: <br>
            <div class="row">
                 <div class="col-md-4">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">metro (m)</span>
                      <span class="bar">/</span>
                      <span class="fdn">segundo<sup>2</sup> (s<sup>2</sup>)</span>
                    </div>
                  </div> 
                </div>
                <div class="col-md-1">
                  <p>o</p>
                </div>
                <div class="col-md-6">
                   <div class="eq-c">
                    <div class="fraction">
                      <span class="fup">kilometro (Km)</span>
                      <span class="bar">/</span>
                      <span class="fdn">hora<sup>2</sup> (h<sup>2</sup>)</span>
                    </div>
                  </div> 
                </div>
              </div>
          </p>
            </div>
            <div class="col-md-7">
              <br><br>
              <div class="row justify-content-md-center">
                  <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracAce"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
            </div>
            </div>
          </div> 
        </div>

            <!-- Modal -->
      <div class="modal fade" id="modalPracAce" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Practica</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <p> Un barco pasa inicialmente por un faro con un tiempo inicial de 5 segundos y una velocidad inicial de 15 m/s, después de 5 segundos 
                el viento empuja el barco teniendo una velocidad final de 35 m/s. ¿Calcule la aceleración media del barco?</p>
              <center>
               <img class= "rounded mx-auto d-block" src="{{ asset('images/temas/movimiento/practicaAce.png') }}" width="300">
              </center>
              <br>
              <div id="respuestaAce">
                <div class="eq-c">
                  <b>Aceleración = </b>
                  <div class="fraction">
                  <span class="fup">Vf - Vi</span>
                  <span class="bar">/</span>
                  <span class="fdn">Tf - Ti</span>
                </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">35m/s - 15m/s</span>
                    <span class="bar">/</span>
                    <span class="fdn">10s - 5s</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">20m/s</span>
                    <span class="bar">/</span>
                    <span class="fdn">5 s</span>
                  </div>
                  <b> = </b>
                  <div class="fraction respuesta">
                    <span class="fup">4m</span>
                    <span class="bar">/</span>
                    <span class="fdn"> s<sup>2</sup></span>
                  </div>
                  <b><i class="fa fa-long-arrow-right "></i> Solución</b>
                </div> 
              </div>
              <form id="formAce" name="formAce">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="ace1" name="radioAce" value="a">
                  <label class="custom-control-label" for="ace1">
                    <div class="eq-c">
                      <b>a) </b>
                      <div class="fraction">
                        <span class="fup">5m</span>
                        <span class="bar">/</span>
                        <span class="fdn"> s<sup>2</sup></span>
                      </div>
                    </div>
                  </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="ace2" name="radioAce" value="b">
                  <label class="custom-control-label" for="ace2">
                    <div class="eq-c">
                      <b>b) </b>
                      <div class="fraction">
                        <span class="fup">4m</span>
                        <span class="bar">/</span>
                        <span class="fdn"> s<sup>2</sup></span>
                      </div>
                    </div>
                  </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="ace3" name="radioAce" value="c">
                  <label class="custom-control-label" for="ace3">
                    <div class="eq-c">
                      <b>c) </b>
                      <div class="fraction">
                        <span class="fup">10m</span>
                        <span class="bar">/</span>
                        <span class="fdn"> s<sup>2</sup></span>
                      </div>
                    </div>
                  </label>
                </div>
              </form>

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
    </div>
  </div>
</div>
</div>

<div id="mensajeVectorial">
    <div class="textoDes">
      <p>Es un valor numérico con una dirección, <b>por ejemplo, </b>un auto se mueve 10 metros al norte.<br>
         Estas magnitudes poseen un <b>número</b>, una <b>unidad</b> y una <b>dirección</b>.</p>
      <center>
        <img src="{{ asset('images/temas/conceptos/vectorial.png') }}" height="60">
      </center>
    </div>
  </div>

  <div class="imgR">
    <div id="imagenR">
      <img id="imageR" src="">
    </div>
  </div>

  <div class="imgC">
    <div id="imagenC">
      <br><br><br><br><br><br>
      <img id="imageC" src="">
    </div>
  </div>

  <div class="imgCi">
    <div id="imagenCi">
      <br><br><br><br><br>
      <img id="imageCi" src="">
     </div>
  </div>

  <div class="imgE">
    <div id="imagenE">
      <br><br><br><br><br>
      <img id="imageE" src="">
    </div>
  </div>

  <div class="imgP">
    <div id="imagenP">
      <br><br><br><br><br><br><br><br><br><br>
      <img id="imageP" src="">
    </div>
  </div>

@endsection

@section('textScript')
     <script type="text/javascript" src="{{ asset('js/responsiveTab.js')}}"></script>
@endsection

@section('script')

    
    function carroMover(){
      var carro = document.getElementById("carro");
      $("#carro").addClass("carroMover");
      carro.addEventListener("animationend", function(){
        $("#carro").removeClass("carroMover");
        $("#carro").removeClass("inicio");
        $("#carro").addClass("fin");
      }, false);
    }
    function hoverR(){
      imageR.src = "{{ asset('images/temas/movimiento/circle.png') }}"
      imagenR.style.display="block";
      contTab.style.opacity = "0.5";
    }
    function hoverC(){
      imageC.src = "{{ asset('images/temas/movimiento/circle.png') }}"
      imagenC.style.display="block";
      contTab.style.opacity = "0.5";
    }
    function hoverCi(){
      imageCi.src = "{{ asset('images/temas/movimiento/circle.png') }}"
      imagenCi.style.display="block";
      contTab.style.opacity = "0.5";
    }
    function hoverE(){
      imageE.src = "{{ asset('images/temas/movimiento/circle.png') }}"
      imagenE.style.display="block";
      contTab.style.opacity = "0.5";
    }
    function hoverP(){
      imageP.src = "{{ asset('images/temas/movimiento/circle.png') }}"
      imagenP.style.display="block";
      contTab.style.opacity = "0.5";
    }

    function normal(){
      imagenR.style.display="none";
      imagenC.style.display="none";
      imagenCi.style.display="none";
      imagenE.style.display="none";
      imagenP.style.display="none";
      contTab.style.opacity = "1";
    }

  function verificarPrac(){
    var radVal = document.mainForm.radioInline.value;
    var alert = document.getElementById("alert");
    if(radVal=="c"){
      $("#alert").removeClass("alert-danger");
      $("#alert").removeClass("alert-primary");
      $("#alert").addClass("alert-success");
      $('#alert').show();
      imgPract.src = "{{ asset('images/temas/movimiento/solPract.png') }}"
      document.getElementById('alertTexto').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
    }
    else if(radVal=="a"||radVal=="b"){
      $("#alert").removeClass("alert-primary");
      $("#alert").removeClass("alert-success");
      $("#alert").addClass("alert-danger");
      $('#alert').show();
      imgPract.src = "{{ asset('images/temas/movimiento/solPract.png') }}"
      document.getElementById('alertTexto').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>c)</b> (20,15).';

    }
    else{
      $("#alert").removeClass("alert-success");
      $("#alert").removeClass("alert-danger");
      $("#alert").addClass("alert-primary");
      $('#alert').show();
      document.getElementById('alertTexto').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
    }
  }

  function desplazamiento(){
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de1.png') }}" }, 200);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de2.png') }}" }, 1500);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de3.png') }}" }, 3000);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de4.png') }}" }, 4500);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de5.png') }}" }, 6000);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de6.png') }}" }, 7500);
    setTimeout(function(){imgDesp.src = "{{ asset('images/temas/movimiento/de7.png') }}" }, 9000);
    }

  function distancia(){
    setTimeout(function(){imgDist.src = "{{ asset('images/temas/movimiento/dist1.png') }}" }, 200);
    setTimeout(function(){imgDist.src = "{{ asset('images/temas/movimiento/dist2.png') }}" }, 1500);
    setTimeout(function(){imgDist.src = "{{ asset('images/temas/movimiento/dist3.png') }}" }, 3000);
    setTimeout(function(){imgDist.src = "{{ asset('images/temas/movimiento/dist4.png') }}" }, 4500);
    setTimeout(function(){imgDist.src = "{{ asset('images/temas/movimiento/dist5.png') }}" }, 6000);
    }

  function vectorial(){
    $('#mensajeVectorial').show();
  }

  function normalVectorial(){
    $('#mensajeVectorial').hide();
  }

  function escalar(){
    $('#mensajeEscalar').show();
  }

  function normalEscalar(){
    $('#mensajeEscalar').hide();
  }

  function practRap(){
    setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap1.png') }}" }, 200);
    setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap2.png') }}" }, 1500);
    setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap3.png') }}" }, 3000);
    setInterval(function(){
      setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap1.png') }}" }, 200);
      setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap2.png') }}" }, 1500);
      setTimeout(function(){imgPractRap.src = "{{ asset('images/temas/movimiento/rap3.png') }}" }, 3000);
    },5000);
  }

  function verificarPracRap(){
    var radVal = document.getElementById("practRap").value;
    radVal = radVal.replace(/ /g, "");
    var alertRap = document.getElementById("alertRap");
    if(radVal=="21km/h"){
      $("#alertRap").removeClass("alert-danger");
      $("#alertRap").removeClass("alert-primary");
      $("#alertRap").addClass("alert-success");
      $('#alertRap').show();
      $("#respuestaRap").show();
      document.getElementById("practRap").disabled = true;
      document.getElementById('alertTextoRap').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
    }
    else if(radVal=="21"){
    $("#alertRap").removeClass("alert-success");
      $("#alertRap").removeClass("alert-danger");
      $("#alertRap").addClass("alert-primary");
      $('#alertRap').show();
      respuestaRap.style.display="none";
      document.getElementById('alertTextoRap').innerHTML='<b>¡Ten cuidado!</b> Escribe las unidades';
    }
    else if(radVal==""){
      $("#alertRap").removeClass("alert-success");
      $("#alertRap").removeClass("alert-danger");
      $("#alertRap").addClass("alert-primary");
      $('#alertRap').show();
      respuestaRap.style.display="none";
      document.getElementById('alertTextoRap').innerHTML='<b>¡Ten cuidado!</b> Escribe una respuesta';
    }
    else{
      $("#alertRap").removeClass("alert-primary");
      $("#alertRap").removeClass("alert-success");
      $("#alertRap").addClass("alert-danger");
      $('#alertRap').show();
      $("#respuestaRap").show();
      document.getElementById('alertTextoRap').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es 21km<b>/</b>h.';
    }
  }

function verificarPracVel(){
    var radVal = document.getElementById("practVel").value;
    radVal = radVal.replace(/ /g, "");
    var alertVel = document.getElementById("alertVel");
    if(radVal=="13.3m/s" || radVal=="13.33m/s" || radVal=="13m/s" || radVal=="13,3m/s" || radVal=="13,33m/s"){
      $("#alertVel").removeClass("alert-danger");
      $("#alertVel").removeClass("alert-primary");
      $("#alertVel").addClass("alert-success");
      $('#alertVel').show();
      $("#respuestaVel").show();
      document.getElementById("practVel").disabled = true;
      document.getElementById('alertTextoVel').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
    }

    else if(radVal=="13.3" || radVal=="13.33" || radVal=="13"){
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
      document.getElementById('alertTextoVel').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es 13.3m<b>/</b>s.';
    }
    
  }

  function verificarPracAce(){
    var radVal = document.formAce.radioAce.value;
    var alertAce = document.getElementById("alertAce");
    if(radVal=="b"){
      $("#alertAce").removeClass("alert-danger");
      $("#alertAce").removeClass("alert-primary");
      $("#alertAce").addClass("alert-success");
      $('#alertAce').show();
      $("#respuestaAce").show();
      document.getElementById('alertTextoAce').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
    }
    else if(radVal=="a"||radVal=="c"){
      $("#alertAce").removeClass("alert-primary");
      $("#alertAce").removeClass("alert-success");
      $("#alertAce").addClass("alert-danger");
      $('#alertAce').show();
      $("#respuestaAce").show();
      document.getElementById('alertTextoAce').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>b) </b><div class="fraction"><span class="fup">4m</span><span class="bar">/</span><span class="fdn"> s<sup>2</sup></span></div></div>.';
    }
    else{
      $("#alertAce").removeClass("alert-success");
      $("#alertAce").removeClass("alert-danger");
      $("#alertAce").addClass("alert-primary");
      $('#alertAce').show();
      document.getElementById('alertTextoAce').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
    }
    
  }

         $(window).resize(function() {

        ellipses1 = $("#bc1 :nth-child(2)")
        if ($("#bc1 a:hidden").length >0) {ellipses1.show()} else {ellipses1.hide()}
        
        
    });

        
    @endsection