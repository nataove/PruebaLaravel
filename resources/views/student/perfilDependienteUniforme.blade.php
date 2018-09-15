@extends('student.template.main')

@section('title')
Movimiento Rectilineo Uniforme
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
    <h4><b>Movimiento Rectilíneo Uniforme (MRU) </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
    <p>Es aquel que tiene su velocidad constante y su trayectoria es una línea recta.
      Por lo tanto, en tiempos iguales se recorren distancias iguales.
    </p>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div id="slideSistema" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mru1.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoMRU a">
                    <div class="center-vertical">
                      <p>Un ciclista necesita recorrer 20km.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-6">
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mru2.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoMRU">
                    <p>Los primeros 10km, los recorre en 2 horas, con una velocidad: <br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">10km-0km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h-0h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">10km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction formula">
                          <span class="fup">5km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
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
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mru3.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoMRU">
                    <p>Y los últimos 10km, también los recorre en 2 horas, con una velocidad: <br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">20km-10km</span>
                          <span class="bar">/</span>
                          <span class="fdn">4h-2h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">10km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction formula">
                          <span class="fup">5km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
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
                  <img class="d-block" src="{{ asset('images/temas/movimiento/mru4.png') }}" alt="First slide" height="200" width="426">
                </div>
                <div class="col-md-5 info">
                  <div class="infoMRU">
                    <p>Teniendo así, que los 20km los recorre en 4 horas con velocidad constante de:<br>
                      <div class="eq-c">
                        v<b> =</b>
                        <div class="fraction">
                          <span class="fup">p<sub>f</sub> -p<sub>i</sub></span>
                          <span class="bar">/</span>
                          <span class="fdn">t<sub>f</sub> -t<sub>i</sub></span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">10km-0km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h-0h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction">
                          <span class="fup">10km</span>
                          <span class="bar">/</span>
                          <span class="fdn">2h</span>
                        </div>
                        <b> =</b>
                        <div class="fraction formula">
                          <span class="fup">5km</span>
                          <span class="bar">/</span>
                          <span class="fdn"> h</span>
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
                  <div id="imagenR">
                    <img id="imageR" src="{{ asset('images/temas/movimiento/bici.png') }}" height="70">
                  </div>                        
                </div>
                <div class="col-md-5 info">
                  <div class="infoMRU a">
                    <div class="center-vertical">
                      <p>Por lo tanto, el ciclista termina el recorrido con velocidad constante y con trayectoria recta, siendo así, un
                        movimiento rectílineo uniforme.</p>
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
      <br>
      <center>
        <button type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#modalHistoriaMov"><img src="{{ asset('images/iconoHistoria.png') }}" width="20" height="22"><b> Historia</b></button>
      </center>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="modalHistoriaMov" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Historia</h5>
        </div>
        <div class="modal-body">
          <p> <b>¿Sabías que?</b><br>El MRU fue definido por primera vez, por Galileo en los siguientes términos:
            "Por movimiento igual o uniforme entiendo aquel en el que los espacios recorridos por un móvil en tiempos iguales,
            tómense como se tomen, resultan iguales entre si." </p>       
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    






    <div class="mySlides fade active">
     <div class="mov">
      <h4><b>Velocidad </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <p>La velocidad en el Movimiento Rectilíneo Uniforme es constante, es decir, no varía. Por ende, la velocidad siempre es igual a la velocidad inicial. (<b>velocidad = </b> constante).
      </p>
      <center>
        <p>
          Su fórmula está dada por:</p>
          <div class="row justify-content-md-center">
           <div class="col-md-4 formula">
            <div class="eq-c">
              Velocidad<b> =</b>
              <div class="fraction">
                <span class="fup">Posición Final - Posición Inicial</span>
                <span class="bar">/</span>
                <span class="fdn">Tiempo Final - Tiempo Inicial</span>
              </div>
            </div> 
          </div>
        </div>
        <br>
        <center>
          <div class="row justify-content-md-center">
            <button type="button" class="launch-modal btn btn-info btn-circle btnVel" data-modal-id="modal-video" ><b> Gráfica: Velocidad - Tiempo</b></button>
          </div>
          <br>
          <div class="row justify-content-md-center">
            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPractVel"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
          </div>
          <br>
        </center>

      </center>
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
          <p>En un movimiento rectilíneo uniforme, si un auto inicia con velocidad de 10m/s. ¿Cuál es su velocidad final?</p>
          <div id="respuestaVel">
            <p>¡Recuerda! En un MRU, la velocidad es constante, es decir, no varía. Por ende, la velocidad final es igual a la velocidad inicial.</p>
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

  <div class="video_modal modal fade" id="modal-video" tabindex="-1" role="dialog" aria-labelledby="modal-video-label">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-video">
            <div class="embed-responsive embed-responsive-16by9">
              <video controls autoplay src="{{ asset('videos/vt_mru.mp4') }}"></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






  <div class="mySlides fade active">
    <div class="mov">
      <h4><b>Posición </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <p>De la ecuación de velocidad:<br></p>                   

      <div class="eq-c">
        Velocidad<b> =</b>
        <div class="fraction">
          <span class="fup">Posición Final - Posición Inicial</span>
          <span class="bar">/</span>
          <span class="fdn">Tiempo Final - Tiempo Inicial</span>
        </div>
        ,  se puede despejar la Posición Final:
      </div> 
      <br>
      <div class="row">
        <div class="col-md-7">
          <div class="eq-c">
            Posición Final<b> =</b>
            <div class="fraction">
              <span class="fup">Velocidad (Tiempo Final - Tiempo Inicial) + Posición Inicial</span>
            </div>
          </div>  </div> 
        </div>
        <br>
        <p>Ahora, imagina que el movil siempre inicia en tiempo 0. ¿Cómo sería la fórmula?</p>
        <div class="row justify-content-md-center">
          <div class="col-md-5">
            <div class="eq-c formula">
              Posición Final<b> =</b>
              <div class="fraction">
                <span class="fup">Velocidad (Tiempo) + Posición Inicial</span>
              </div>
            </div>  </div> 
          </div>
          <br>
          <center>
            <div class="row justify-content-md-center">
              <div class="col-md-3">
                <br>
                <button type="button" class="btn btn-info btn-circle btnVel" data-toggle="modal" data-target="#grafVel"><b> Gráfica: Posición - Tiempo</b></button>
              </div>
              <div class="col-md-3">
                <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPractPos"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
              </div>
            </div>
            <br>
            <br>
          </center>
        </div>
      </div>


      <!-- Modal -->
      <div class="modal fade" id="modalPractPos" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Practica</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Un coche circula a 25m/s durante 7200s. ¿Cuántos kilómetros habrá recorrido?</p>
              <div id="respuestaPos">
                <div class="eq-c">
                  <b>Pf = </b>
                  <div class="fraction">
                    <span class="fup">v(t) + pi</span>
                  </div>
                  <b> = </b>
                  <div class="fraction">
                    <span class="fup">25m/s (7200s - 0) + 0m</span>
                  </div>
                  <b> = </b>
                  <div class="fraction respuesta">
                    <span class="fup">180000m</span>
                  </div>
                  <b><i class="fa fa-long-arrow-right "></i> Solución</b>
                </div> 
              </div>
              <br>
              <form id="formPos" name="formPos">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="pos1" name="radioPos" value="a">
                  <label class="custom-control-label" for="pos1">
                    <b>a) </b>180000
                  </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="pos2" name="radioPos" value="b">
                  <label class="custom-control-label" for="pos2">
                    <b>b) </b>150000
                  </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="pos3" name="radioPos" value="c">
                  <label class="custom-control-label" for="pos3">
                    <b>c) </b>170000
                  </label>
                </div>
              </form>
              <br>
              <div id="alertPos" class="alert" role="alert">
                <div id="alertTextoPos"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" onclick="verificarPracPos()">Verificar</button>
            </div>
          </div>
        </div>
      </div>


      <div class="mySlides fade active">
        <div class="mov">
          <h4><b>Aceleración </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>En un MRU, como la velocidad no cambia, el valor de la aceleracion a lo largo del movimiento siempre es cero.</p>
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
              <p>En un movimiento rectilíneo uniforme, si un auto inicia con velocidad de 10m/s. ¿Cuál es su aceleración?</p>
              <br>
              <div id="respuestaAce">
                <p>¡Recuerda! En un MRU, la aceleración siempre es cero.</p>
              </div>
              <br>
              <form id="practicaAce" name="practicaAce">
                <div class="form-group">
                  <label for="practAce"><b>Respuesta:</b></label>
                  <input type="text" class="form-control" id="practAce" aria-describedby="respAyuda" value="">
                  <small id="respAyuda" class="form-text text-muted">Escribe la respuesta así: 42km/h o 42m/s. (No olvide las unidades).</small>
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
          <h4><b>Ejemplos: </b></h4>

          <div id="slideEjemplo" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="fon">
                  <div class="ejemplo1">
                    <p><b>- </b>Un camión de carga viaja de Cali a Bogotá, recorriendo una distancia de 400 km, si el viaje tarda 8h.
                      ¿Cuál será su velocidad?</p> 
                      <p><b>Solución: </b><br></p>
                      <div class="row">
                        <div class="col-md-5">
                          <p>
                            p<sub>i</sub><b> = </b>0<br>
                            p<sub>f</sub><b> = </b>400 km<br>
                            t<b> = </b>8 h<br>
                            <div class="eq-c">
                              Velocidad<b> =</b>
                              <div class="fraction">
                                <span class="fup">Posición Final - Posición Inicial</span>
                                <span class="bar">/</span>
                                <span class="fdn">Tiempo</span>
                              </div>
                              <b> =</b>
                              <div class="fraction">
                                <span class="fup">p<sub>f</sub> - p<sub>i</sub></span>
                                <span class="bar">/</span>
                                <span class="fdn">t</span>
                              </div>
                            </div> 
                            <div class="eq-c">
                              V<b> =</b>
                              <div class="fraction">
                                <span class="fup">400 km - 0</span>
                                <span class="bar">/</span>
                                <span class="fdn">8 h</span>
                              </div>
                            </div>
                            <div class="eq-c">
                              V<b> =</b>
                              <div class="fraction">
                                <span class="fup">400 km</span>
                                <span class="bar">/</span>
                                <span class="fdn">8 h</span>
                              </div>
                              <b> <i class="fa fa-long-arrow-right "></i> V = </b>
                              <div class="fraction respuesta">
                                <span class="fup">50 km</span>
                                <span class="bar">/</span>
                                <span class="fdn"> h</span>
                              </div>
                            </div>

                          </p> 
                        </div>
                        <div class="col-md-5">
                          <p><b>Gráfico de la velocidad-tiempo</b></p>
                          <img src="{{ asset('images/temas/conceptos/ej1Vel.png') }}" height="200" >
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="fon">
                    <div class="ejemplo1">
                      <p><b>- </b>¿Cuál es el tiempo que tarda una partícula en recorrer una distancia de 520 m con una velocidad 
                        de 10 m/s?</p> 
                        <p><b>Solución: </b><br></p>
                        <div class="row">
                          <div class="col-md-10">
                            <p>
                              p<sub>i</sub><b> = </b>0<br>
                              p<sub>f</sub><b> = </b>520 m<br>
                              v<b> = </b>10m/s<br>
                              <div class="eq-c">
                                Velocidad<b> =</b>
                                <div class="fraction">
                                  <span class="fup">Posición Final - Posición Inicial</span>
                                  <span class="bar">/</span>
                                  <span class="fdn">Tiempo</span>
                                </div>
                                <b> =</b>
                                <div class="fraction">
                                  <span class="fup">p<sub>f</sub> - p<sub>i</sub></span>
                                  <span class="bar">/</span>
                                  <span class="fdn">t</span>
                                </div>
                                <b> <i class="fa fa-long-arrow-right "></i> t = </b>
                                <div class="fraction">
                                  <span class="fup">p<sub>f</sub> - p<sub>i</sub></span>
                                  <span class="bar">/</span>
                                  <span class="fdn">v</span>
                                </div>
                              </div> 
                              <div class="eq-c">
                                t<b> =</b>
                                <div class="fraction">
                                  <span class="fup">520 m - 0</span>
                                  <span class="bar">/</span>
                                  <span class="fdn">10m/s</span>
                                </div>
                              </div>
                              <div class="eq-c">
                                t<b> =</b>
                                <div class="fraction">
                                  <span class="fup">520 m</span>
                                  <span class="bar">/</span>
                                  <span class="fdn">10m/s</span>
                                </div>
                                <b> <i class="fa fa-long-arrow-right "></i> t = </b>
                                <div class="fraction respuesta">
                                  <span class="fup">52 s</span>
                                </div>
                              </div>

                            </p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <p>Holaaa</p>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#slideEjemplo" role="button" data-slide="prev">
                  <span><button class="btnSlide left"> <i class="fa fa-caret-left"></i></button></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#slideEjemplo" role="button" data-slide="next">
                  <span><button class="btnSlide right"> <i class="fa fa-caret-right"></i></button></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>


          <div class="mySlides fade active">

           <div class="mov">
            <h4><b>Seleccione una opción </b></h4>
            <br>
            <br>
            <div class="row menu justify-content-md-center">
              <div class="men col-md-3 col-sm-10 col-xs-13" align="center">
                <br>
                <a onclick="volver()" id="volver"><img src="{{ asset('images/temas/uniforme.png') }}" width="80" height="80"></a>
                <h4><br>Volver</h4>
                <br>
              </div>
              <div class="men men2 col-md-3 col-sm-10 col-xs-13" align="center">
                <br>
                <a href="{{ route('aceleradoDependiente') }}"><img src="{{ asset('images/temas/acelerado.png') }}" width="80" height="80"></a>
                <h4><br>Movimiento Rectilineo Acelerado</h4>
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
window.location.replace("posicionDependiente");   
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

$('.launch-modal').on('click', function(e){
e.preventDefault();
$( '#' + $(this).data('modal-id') ).modal();
});
function verificarPracVel(){
var radVal = document.getElementById("practVel").value;
radVal = radVal.replace(/ /g, "");
var alertVel = document.getElementById("alertVel");
if(radVal=="10m/s"){
$("#alertVel").removeClass("alert-danger");
$("#alertVel").removeClass("alert-primary");
$("#alertVel").addClass("alert-success");
$('#alertVel').show();
$("#respuestaVel").show();
document.getElementById("practVel").disabled = true;
document.getElementById('alertTextoVel').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}

else if(radVal=="10"){
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
document.getElementById('alertTextoVel').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es 10m<b>/</b>s.';
}

}

function verificarPracPos(){
var radVal = document.formPos.radioPos.value;
var alertPos = document.getElementById("alertPos");
if(radVal=="a"){
$("#alertPos").removeClass("alert-danger");
$("#alertPos").removeClass("alert-primary");
$("#alertPos").addClass("alert-success");
$('#alertPos').show();
$("#respuestaPos").show();
document.getElementById('alertTextoPos').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="c"||radVal=="b"){
$("#alertPos").removeClass("alert-primary");
$("#alertPos").removeClass("alert-success");
$("#alertPos").addClass("alert-danger");
$('#alertPos').show();
$("#respuestaPos").show();
document.getElementById('alertTextoPos').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>a)</b> 180000.';

}
else{
$("#alertPos").removeClass("alert-success");
$("#alertPos").removeClass("alert-danger");
$("#alertPos").addClass("alert-primary");
$('#alertPos').show();
document.getElementById('alertTextoPos').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}
}

function verificarPracAce(){
var radVal = document.getElementById("practAce").value;
radVal = radVal.replace(/ /g, "");
var alertAce = document.getElementById("alertAce");
if(radVal=="0m/s" || radVal=="0"){
$("#alertAce").removeClass("alert-danger");
$("#alertAce").removeClass("alert-primary");
$("#alertAce").addClass("alert-success");
$('#alertAce').show();
$("#respuestaAce").show();
document.getElementById("practAce").disabled = true;
document.getElementById('alertTextoAce').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}

else if(radVal==""){
$("#alertAce").removeClass("alert-success");
$("#alertAce").removeClass("alert-danger");
$("#alertAce").addClass("alert-primary");
$('#alertAce').show();
respuestaAce.style.display="none";
document.getElementById('alertTextoAce').innerHTML='<b>¡Ten cuidado!</b> Escribe una respuesta';
}
else{
$("#alertAce").removeClass("alert-primary");
$("#alertAce").removeClass("alert-success");
$("#alertAce").addClass("alert-danger");
$('#alertAce').show();
$("#respuestaAce").show();
document.getElementById('alertTextoAce').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es 0.';
}

}
@endsection

