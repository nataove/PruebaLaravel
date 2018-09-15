@extends('student.template.main')

@section('title')
Movimiento de Proyectiles
@endsection

@section('head')
<link rel="stylesheet" href="{{ asset('css/uniforme.css')}}">
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

@section('content')
<div class="bread">
  <div id="bc1" class="btn-group btn-breadcrumb breadcrumb-primary">
    <a href="{{url('student/independent/user')}}" class="btn btn-primary visible-lg-block visible-md-block"><div>Inicio</div></a>
    <a href="{{ route('temaProyectiles') }}" class="btn btn-primary visible-lg-block visible-md-block"><div>Menú</div></a>
    <a href="#" class="btn btn-primary visible-lg-block visible-md-block sel"><div>Movimiento de Proyectiles</div></a>
  </div>
</div>
<div class="row">
  <div class="col-md-12 col-sm-6">
    <ul class="nav nav-tabs responsive-tabs">
      <li class="active titulo"><a href="#introduccion"><h3><b>Introducción</b></h3></a></li>
      <li class="titulo"><a href="#movimiento"><h3><b>Movimiento de Proyectiles</b></h3></a></li>
      <li class="titulo"><a href="#velocidad"><h3><b>Velocidad</b></h3></a></li>
      <li class="titulo"><a href="#posicion"><h3><b>Posición</b></h3></a></li>
      <li class="titulo"><a href="#altura_maxima"><h3><b>Altura Máxima</b></h3></a></li>
      <li class="titulo"><a href="#tiempo"><h3><b>Tiempo de vuelo</b></h3></a></li>
      <li class="titulo"><a href="#alcance"><h3><b>Alcance</b></h3></a></li>
      <li class="titulo"><a href="#ejemplo"><h3><b>Ejemplo</b></h3></a></li>
    </ul>

    <div class="tab-content" id="contTab">
      <div class="tab-pane active" id="introduccion">
        <div class="mov">

        </div>
      </div>

      <div class="tab-pane" id="movimiento">
        <div class="mov">
          <h4><b>Movimiento de proyectiles </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
          <p>Es aquel que su trayectoria es una parábola y su velocidad inicial forma un ángulo con el suelo. Para entender este movimiento, es necesario analizar los ejes X e Y:</p>
          <div class="row">
            <div class="col-md-3">
              <img id="imgProy" src="{{ asset('images/temas/movimiento/proy1.png') }}" alt="movProy" height="250">
              <div class="row justify-content-md-center barraP">
                <button id="btnPause" class="btnInicio" onclick="proyectilPause()"><i class="fa fa-pause"></i></button>
                <button id="btnPlay" class="btnInicio" onclick="proyectilPlay()"><i class="fa fa-play"></i></button>
                <button id="btnReanudar" class="btnInicio" onclick="proyectilReanudar()">Reanudar</button>
              </div>
            </div>
            <div class="col-md-8">
              <br><br><br><br>
              <center>
                <div class="row justify-content-md-center">
                  <button onclick="ejeY()" type="button" class="btn btn-info btn-circle btnMas" data-toggle="modal" data-target="#ejeY"><b> Eje X - Y</b></button>
                </div>
              </center>

              <!-- Modal -->
              <div class="modal fade" id="ejeY" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalLabel">Eje Y</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <center>
                        <p>Si una partícula se deja caer de forma vertical, su velocidad parte de cero y su aceleración que es la
                          gravedad hace, que su velocidad empiece a cambiar. (aceleracion = gravedad). Sin la presencia de aire o de una fuerza externa, la 
                          partícula no se mueve en dirección X, es decir, no hay cambio de velocidad en X pero si hay cambio de velocidad en Y</p>
                          <center>
                            <img id="imgEjeY" src="{{ asset('images/temas/movimiento/ejeY1.png') }}" alt="ejeY" height="190">
                          </center>
                          <p>Al existir aceleración en Y, se dice que la dirección vertical corresponde a un <b>movimiento rectilíneo uniforme acelerado</b>,
                            mientras en el eje X al no existir aceleración, se dice que la dirección horizontal corresponde a un <b>movimiento rectilíneo uniforme.</b>
                            Siendo así, el movimiento de proyectiles, el resultado de la superposición de dos movimientos.</p>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>



          <div class="tab-pane" id="velocidad">
            <div class="mov">
              <h4><b>Velocidad </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
              <p>La velcocidad en el movimiento de proyetiles, tiene dos componentes: componente X, componente Y</p>
              <div class="row">
                <div class="col-md-3">
                  <img src="{{ asset('images/temas/movimiento/velProy.png') }}" alt="ejeY" height="290">
                </div>
                <div class="col-md-7 offset-md-2">
                  <p><b>Componentes</b><br>
                    <div id="slideProyVel" class="carousel slide" data-ride="carousel" data-interval="false">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <p><b>Componente X</b><br>
                            Como en la dirección horizontal corresponde a un MRU, la velocidad en esta componente es constante, por ende, la velocidad siempre será igual a la velocidad inicial:  <i>(Véase: tema velocidad en MRU)</i>
                            <br><br>
                            <div class="row justify-content-md-center">
                              <div class="col-md-3">
                                <div class="eq-c formula">
                                 v<sub>x</sub> =
                                 <div class="fraction">
                                  <span class="fup">v<sub>0x</sub></span>
                                </div>
                              </div> 
                            </div>
                          </div></p>
                        </div>
                        <div class="carousel-item">
                          <p><b>Componente Y</b><br>
                            Como en la dirección vertical corresponde a un MRUA, hay cambios de velocidad, por ende, existe aceleración. En este caso la aceleración es la gravedad y tiene signo negativo
                            <i>(Véase tema aceleración en caida libre)</i>. La fórmula corresponde a: <i>(Véase: tema velocidad en MRUA)</i>
                            <div class="row justify-content-md-center">
                             <div class="col-md-3">
                              <div class="eq-c formula">
                                v<sub>y</sub> =
                                <div class="fraction">
                                  <span class="fup"> - g * t + v<sub>0y</sub></span>
                                </div>
                              </div>      
                            </div>
                          </div></p>
                        </div>
                      </div>
                      <a class="carousel-control-prev" href="#slideProyVel" role="button" data-slide="prev">
                        <span class="proy fa fa-caret-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#slideProyVel" role="button" data-slide="next">
                        <span class="proy fa fa-caret-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    <div class="row justify-content-md-center">
                      <div class="col-md-4">
                        <br>
                        <button type="button" class="btn btn-info btn-circle btnProy" data-toggle="modal" data-target="#vel0"><b> V<sub>0x</sub> - V<sub>0y</sub></b></button>
                      </div>  
                      <div class="col-md-4">
                        <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaVel"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="vel0" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalLabel">Velocidad Inicial en X - Velocidad Inicial en Y</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body proyModal">
                      <div class="row">
                        <div class="col-md-12">
                          <div id="slideProyVel0" class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <p><b>Velocidad Inicial en X  (v<sub>0x</sub>)</b><br></p>
                                <div class="row">
                                  <div class="col-md-4">
                                    <img src="{{ asset('images/temas/movimiento/comXVel.png') }}" alt="ejeY" height="150">
                                  </div>
                                  <div class="col-md-7">
                                    <p>Por trigonometría:
                                      <div class="eq-c">
                                        <b>cos(θ) = </b>
                                        <div class="fraction">
                                          <span class="fup">cateto adyacente</span>
                                          <span class="bar">/</span>
                                          <span class="fdn">hipotenusa</span>
                                        </div>
                                        <b><i class="fa fa-long-arrow-right "></i> cos(θ) = </b>
                                        <div class="fraction">
                                          <span class="fup">V<sub>0x</sub></span>
                                          <span class="bar">/</span>
                                          <span class="fdn">v<sub>0</sub></span>
                                        </div></div><br>
                                        <p>Despejando, se obtiene:</p>
                                        <div class="row">
                                          <div class="col-md-8">
                                            <div class="eq-c formula">
                                              <b> V<sub>0x</sub> = </b>
                                              <div class="fraction">
                                                <span class="fup">v<sub>0</sub>*cos(θ)</span>
                                              </div></div>
                                            </div>
                                          </div></p>
                                        </div>
                                      </div>
                                      <p>Por ende, la velocidad en la componente X se puede ver como:</p>
                                      <center>
                                        <p><div class="eq-c">
                                          <b> V<sub>x</sub> = </b>
                                          <div class="fraction">
                                            <span class="fup">v<sub>0</sub>*cos(θ)</span>
                                          </div></div></p>
                                        </center>
                                      </div>
                                      <div class="carousel-item">
                                        <p><b>Velocidad Inicial en Y  (v<sub>0y</sub>)</b><br></p>
                                        <div class="row">
                                          <div class="col-md-4">
                                            <img src="{{ asset('images/temas/movimiento/comYVel.png') }}" alt="ejeY" height="150">
                                          </div>
                                          <div class="col-md-7">
                                            <p>Por trigonometría:
                                              <div class="eq-c">
                                                <b>sen(θ) = </b>
                                                <div class="fraction">
                                                  <span class="fup">cateto opuesto</span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">hipotenusa</span>
                                                </div>
                                                <b><i class="fa fa-long-arrow-right "></i> sen(θ) = </b>
                                                <div class="fraction">
                                                  <span class="fup">V<sub>0y</sub></span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">v<sub>0</sub></span>
                                                </div></div><br>
                                                <p>Despejando, se obtiene:</p>
                                                <div class="row">
                                                  <div class="col-md-8">
                                                    <div class="eq-c formula">
                                                     <b> V<sub>0y</sub> = </b>
                                                     <div class="fraction">
                                                      <span class="fup">v<sub>0</sub>*sen(θ)</span>
                                                    </div></div>
                                                  </div>
                                                </div></p>
                                              </div>
                                            </div>
                                            <p>Por ende, la velocidad en la componente Y se puede ver como:</p>
                                            <center>
                                              <p><div class="eq-c">
                                               <b> V<sub>y</sub> = </b>
                                               <div class="fraction">
                                                <span class="fup"> - g * t + v<sub>0</sub>*sen(θ)</span>
                                              </div></div></p>
                                            </center>
                                          </div>

                                          
                                          <div class="carousel-item">
                                           <p><b>Magnitud de Velocidad  </b></p>
                                           <div class="row">
                                            <div class="col-md-4">
                                              <img src="{{ asset('images/temas/movimiento/comXYvel.png') }}" alt="ejeY" height="150">
                                            </div>
                                            <div class="col-md-7">
                                              <p>Por el teorema de Pitágoras
                                                <div class="eq-c">
                                                  <b>hipotenusa<sup>2</sup> = </b>
                                                  <div class="fraction">
                                                    <span class="fup">cateto<sup>2</sup> + cateto<sup>2</sup></span>
                                                  </div>
                                                </div><br>
                                                <div class="eq-c">
                                                  <b>hipotenusa<sup></sup> = </b>
                                                  <div class="fraction">
                                                    <span class="fup">&#8730;cateto<sup>2</sup> + cateto<sup>2</sup></span>
                                                  </div>
                                                </div>
                                                <br><p>remplazando se obtiene:</p>
                                                <div class="row">
                                                  <div class="col-md-8">
                                                    <div class="eq-c formula">
                                                     <b> V<sub>0y</sub> = </b>
                                                     <div class="fraction">
                                                      <span class="fup">&#8730;v<sub>0x</sub><sup>2</sup> + v<sub>0y</sub><sup>2</sup></span>
                                                    </div></div>
                                                  </div>
                                                </div>
                                              </p><br><br><br>
                                            </div>
                                          </div>
                                          
                                        </div>

                                      </div>
                                      <a class="carousel-control-prev" href="#slideProyVel0" role="button" data-slide="prev">
                                        <span class="proy2 fa fa-caret-left" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                      </a>
                                      <a class="carousel-control-next" href="#slideProyVel0" role="button" data-slide="next">
                                        <span class="proy2 fa fa-caret-right" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                      </a>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="modalPracticaVel" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">Practica</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p>Un portero saca el balón desde el césped con una velocidad inicial de 26m/s. Si la pelota sale del suelo con un ángulo 
                                  de 40° y cae sobre el campo sin que antes lo toque ningún jugador a los 2 segundos.  ¿Con qué velocidad llegó el balón al campo?</p>
                                  <div id="respuestaVelPro">
                                    <div class="eq-c"><b>Componente X</b><br>
                                      <div class="fraction">
                                        <span class="fup"> v<sub>x</sub> = v<sub>0</sub>*cos(θ) = 26m/s*cos(40<sup>°</sup>) = 26m/s*0.7670 =<u> 19.15m/s </u></span>
                                      </div>
                                    </div>
                                    <div class="eq-c"><b>Componente Y</b><br>
                                      <div class="fraction">
                                        <span class="fup"> v<sub>y</sub> = v<sub>0</sub>*sen(θ) - gt = 26m/s*sen(40<sup>°</sup>) - 9.8m/s<sup>2</sup>*2s= 26m/s*0.6427 - 19.6m/s = 16.71m/s - 19.6m/s =<u> -2.88m/s</u></span>
                                      </div>
                                    </div>
                                    <div class="eq-c"><b>Magnitud Velocidad</b><br>
                                      <div class="fraction">
                                        <span class="fup"><b> v<sub>y</sub> = </b>&#8730;v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup> = &#8730;(19.15m/s)<sup>2</sup> + (-2.88m/s)<sup>2</sup> = &#8730;366.72m/s + 8.2944m/s = &#8730;3750.01m<sup>2</sup>/s<sup>2</sup> =<u class="respuesta"> 19.36m/s </u></span>
                                      </div>
                                    </div>
                                  </div>

                                  <form id="formVelProy" name="formVelProy">
                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="velProy1" name="radioVelProy" value="a">
                                      <label class="custom-control-label" for="velProy1">
                                        <div class="eq-c">
                                          <b>a) </b>
                                          <div class="fraction">
                                            <span class="fup">19.36m</span>
                                            <span class="bar">/</span>
                                            <span class="fdn"> s</span>
                                          </div>
                                        </div>
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="velProy2" name="radioVelProy" value="b">
                                      <label class="custom-control-label" for="velProy2">
                                        <div class="eq-c">
                                          <b>b) </b>
                                          <div class="fraction">
                                            <span class="fup">18.40m</span>
                                            <span class="bar">/</span>
                                            <span class="fdn"> s</span>
                                          </div>
                                        </div>
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="velProy3" name="radioVelProy" value="c">
                                      <label class="custom-control-label" for="velProy3">
                                        <div class="eq-c">
                                          <b>c) </b>
                                          <div class="fraction">
                                            <span class="fup">10.39m</span>
                                            <span class="bar">/</span>
                                            <span class="fdn"> s</span>
                                          </div>
                                        </div>
                                      </label>
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

                        <div class="tab-pane" id="posicion">
                          <div class="mov">
                            <h4><b>Posición </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
                            <p>La posición en el movimiento de proyetiles también tiene dos componentes: componente X, componente Y</p>
                            <div class="row">
                             <div class="col-md-6">
                               <p><b>Componente X</b><br>
                                 Como en la dirección horizontal corresponde a un MRU, la posición en esta componente está dada por:
                                 <div class="eq-c">x =  
                                  <div class="fraction">
                                    <span class="fup">v<sub>0x</sub> * t + Posición Inicial</span>
                                  </div></div><br> 
                                  <p>Si la posición inicial siempre es cero, la fórmula quedaría:  <i>(Véase: tema posición en MRU).</i></p>
                                  <div class="row">
                                   <div class="col-md-3">
                                     <div class="eq-c formula">x =  
                                      <div class="fraction">
                                        <span class="fup"> v<sub>0x</sub> * t</span>
                                      </div></div></div></div>
                                    </p>
                                  </div>


                                  <div class="col-md-5">
                                    <p><b>Componente Y</b><br>
                                     Como en la dirección vertical corresponde a un MRUA, la posición en esta componente está dada por: <i>(Véase: tema posición en MRUA)</i>
                                     <div class="eq-c">y = V<sub>0y</sub> * t -  
                                      <div class="fraction">
                                        <span class="fup">1</span>
                                        <span class="bar">/</span>
                                        <span class="fdn">2</span>
                                      </div> * g * t<sup>2</sup> + Posición Inicial.<br> </div>
                                      <p>Si la posición inicial siempre es cero, la fórmula quedaría:  
                                      </p>
                                      <div class="row">
                                       <div class="col-md-3">
                                         <div class="eq-c formula a">y = V<sub>0y</sub> * t -  
                                          <div class="fraction">
                                            <span class="fup">1</span>
                                            <span class="bar">/</span>
                                            <span class="fdn">2</span>
                                          </div> * g * t<sup>2</sup></div>
                                        </div>
                                        <div class="col-md-5 offset-md-4">
                                          <center>
                                            <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaPosi"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                                          </center>
                                        </div>
                                      </div>
                                    </p>  
                                  </div>
                                </div>
                              </div>

                              <!-- Modal -->
                              <div class="modal fade" id="modalPracticaPosi" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="modalLabel">Practica</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <p>Una persona lanza una pelota con una velocidad inicial de 10 m/s y un ángulo de lanzamiento de 60<sup>°</sup>.
                                       ¿Cuál es la posición de la pelota 0.5s ? </p>
                                       <div id="respuestaPosProy">
                                    <div class="eq-c"><b>Velocidad X</b><br>
                                      <div class="fraction">
                                        <span class="fup"> v<sub>0x</sub> = v<sub>0</sub>*cos(θ) = 10m/s*cos(60<sup>°</sup>) = 10m/s*0.5 =<u> 5m/s </u></span>
                                      </div>
                                    </div>
                                    <div class="eq-c"><b>Velocidad Y</b><br>
                                      <div class="fraction">
                                        <span class="fup"> v<sub>0y</sub> = v<sub>0</sub>*sen(θ) = 10m/s*sen(60<sup>°</sup>) = 10m/s*0.8660 = <u> 8.66m/s</u></span>
                                      </div>
                                    </div>
                                    <div class="eq-c"><b>Posición X</b><br>
                                      <div class="fraction">
                                        <span class="fup"> x = v<sub>0x</sub>*t = 5m/s*0.5s = <u class="respuesta"> 2.5m </u></span>
                                      </div>
                                    </div>
                                    <div class="eq-c"><b>Posición Y</b><br>
                                      <div class="fraction">
                                        <span class="fup"> y = v<sub>0y</sub>*t - (1/2)gt<sup>2</sup> = 8.66m/s*0.5s - (1/2)*9.8m/s<sup>2</sup>*(0.5s)<sup>2</sup> = 4.33m - 4.9m/s<sup>2</sup>*0.25s<sup>2</sup> = 4.33m - 1.225m = <u class="respuesta"> 3.1m </u></span>
                                      </div>
                                    </div>
                                  </div>
<br>
                                  <form id="formPosProy" name="formPosProy">
                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="posProy1" name="radioPosProy" value="a">
                                      <label class="custom-control-label" for="posProy1">
                                        <div class="eq-c">
                                          <b>a) </b>
                                          <div class="fraction">
                                            <span class="fup">(2, 3)</span>
                                          </div>
                                        </div>
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="posProy2" name="radioPosProy" value="b">
                                      <label class="custom-control-label" for="posProy2">
                                        <div class="eq-c">
                                          <b>b) </b>
                                          <div class="fraction">
                                            <span class="fup">(2.5, 3.1)</span>
                                          </div>
                                        </div>
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" class="custom-control-input" id="posProy3" name="radioPosProy" value="c">
                                      <label class="custom-control-label" for="posProy3">
                                        <div class="eq-c">
                                          <b>c) </b>
                                          <div class="fraction">
                                            <span class="fup">(2.7, 3.5)</span>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </form>

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
                              </div>
                            

                            <div class="tab-pane" id="altura_maxima">
                              <div class="mov">
                               <h4><b>Altura Máxima </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
                               <p>La altura máxima que alcanza un proyectil se obtiene con v<sub>y</sub> = 0.</p>
                               <div class="row">
                                <div class="col-md-4">
                                  <img src="{{ asset('images/temas/movimiento/ymax.png') }}" alt="ejeY" height="260">
                                </div>
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <p>De la fórmula de velocidad en el componente y, </p>
                                      <p>v<sub>y</sub> = - g * t + v<sub>0y</sub>, se iguala la velocidad a 0</p>
                                      <p>0 = - g * t + v<sub>0y</sub>, se despeja el tiempo</p>
                                      <div class="eq-c">
                                        <b>t = </b>
                                        <div class="fraction">
                                          <span class="fup">v<sub>0y</sub></span>
                                          <span class="bar">/</span>
                                          <span class="fdn">g</span>
                                        </div>
                                        <b><i class="fa fa-long-arrow-right "></i> Tiempo de altura máxima</b>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <p>De la fórmula de posición en el componente y, </p>
                                      <div class="eq-c">y = V<sub>0y</sub> * t -  
                                        <div class="fraction">
                                          <span class="fup">1</span>
                                          <span class="bar">/</span>
                                          <span class="fdn">2</span>
                                        </div> * g * t<sup>2</sup>, se remplaza t por el tiempo de altura máxima</div>

                                        <div class="eq-c">y<sub>max</sub> = V<sub>0y</sub> * 
                                          <div class="fraction">
                                            <span class="fup">v<sub>0y</sub></span>
                                            <span class="bar">/</span>
                                            <span class="fdn">g</span>
                                          </div> -  
                                          <div class="fraction">
                                            <span class="fup">1</span>
                                            <span class="bar">/</span>
                                            <span class="fdn">2</span>
                                          </div> * g * <div class="fraction">
                                          <span class="fup">v<sub>0y</sub><sup>2</sup></span>
                                          <span class="bar">/</span>
                                          <span class="fdn">g<sup>2</sup></span>
                                        </div>, resolviendo queda:</div>

                                        <div class="eq-c">y<sub>max</sub> =   
                                          <div class="fraction">
                                            <span class="fup">v<sub>0y</sub><sup>2</sup></span>
                                            <span class="bar">/</span>
                                            <span class="fdn">g</span>
                                          </div> - 
                                          <div class="fraction">
                                            <span class="fup">v<sub>0y</sub><sup>2</sup></span>
                                            <span class="bar">/</span>
                                            <span class="fdn">2g</span>
                                          </div>, finalmente:</div>

                                          <div class="row">
                                            <div class="col-md-6">
                                              <div class="eq-c formula">y<sub>max</sub> =   
                                                <div class="fraction">
                                                  <span class="fup">v<sub>0y</sub><sup>2</sup></span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">2g</span>
                                                </div></div>

                                              </div>
                                              <div class="col-md-5">
                                                <center>
                                                  <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaAltu"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                                                </center>
                                              </div>
                                            </div>


                                          </div>
                                        </div> 
                                      </div>
                                    </div>


                                  </div>

                                  <!-- Modal -->
                                  <div class="modal fade" id="modalPracticaAltu" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="modalLabel">Practica</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                          <p>Un portero saca el balón desde el césped con una velocidad inicial de 26m/s. Si la pelota sale del suelo con un ángulo 
                                            de 40° y cae sobre el campo sin que antes lo toque ningún jugador a los 2 segundos.  ¿Cuál fue su altura máxima?</p>
                                            <div id="respuestaAlt">
                                              <div class="eq-c"><b>Velocidad Y</b><br>
                                                <div class="fraction">
                                                  <span class="fup"> v<sub>0y</sub> = v<sub>0</sub>*sen(θ) = 26m/s*sen(40<sup>°</sup>) = 26m/s*0.6427 = <u> 16.71m/s</u></span>
                                                </div>
                                              </div>
                                              <div class="eq-c"><b>Altura máxima</b><br>
                                               <div class="eq-c">y<sub>max</sub> =   
                                                <div class="fraction">
                                                  <span class="fup">v<sub>0y</sub><sup>2</sup></span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">2g</span>
                                                </div> = <div class="fraction">
                                                <span class="fup">(16.71m/s)<sup>2</sup></span>
                                                <span class="bar">/</span>
                                                <span class="fdn">2*(9.8m/s<sup>2</sup>)</span>
                                              </div> = <div class="fraction">
                                              <span class="fup">279.22m<sup>2</sup>/s<sup>2</sup></span>
                                              <span class="bar">/</span>
                                              <span class="fdn">19.6m/s<sup>2</sup></span>
                                            </div> = <u class="respuesta">14.24m</u></div>
                                          </div>
                                        </div>
                                        <br>
                                        <form id="formAlt" name="formAlt">
                                          <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" class="custom-control-input" id="alt1" name="radioAlt" value="a">
                                            <label class="custom-control-label" for="alt1">
                                              <div class="eq-c">
                                                <b>a) </b>
                                                <div class="fraction">
                                                  <span class="fup">13.2m</span>
                                                </div>
                                              </div>
                                            </label>
                                          </div>

                                          <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" class="custom-control-input" id="alt2" name="radioAlt" value="b">
                                            <label class="custom-control-label" for="alt2">
                                              <div class="eq-c">
                                                <b>b) </b>
                                                <div class="fraction">
                                                  <span class="fup">14.2m</span>
                                                </div>
                                              </div>
                                            </label>
                                          </div>

                                          <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" class="custom-control-input" id="alt3" name="radioAlt" value="c">
                                            <label class="custom-control-label" for="alt3">
                                              <div class="eq-c">
                                                <b>c) </b>
                                                <div class="fraction">
                                                  <span class="fup">12.2m</span>
                                                </div>
                                              </div>
                                            </label>
                                          </div>
                                        </form>

                                        <div id="alertAlt" class="alert" role="alert">
                                          <div id="alertTextoAlt"></div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-primary" onclick="verificarPracAlt()">Verificar</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>


                              <div class="tab-pane" id="tiempo">
                               <div class="mov">
                                <h4><b>Tiempo total de Vuelo </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
                                <p>Cuando el proyectil inicia su trayectoria, la posición en y = 0, y cuando la termina, su posición también es y = 0.</p>
                                <div class="row">
                                  <div class="col-md-4">
                                    <img src="{{ asset('images/temas/movimiento/tiempoTotal.png') }}" alt="ejeY" height="260">
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-7">

                                        <p>De la fórmula de posición en el componente y:</p>
                                        <div class="eq-c">y = V<sub>0y</sub> * t -  
                                          <div class="fraction">
                                            <span class="fup">1</span>
                                            <span class="bar">/</span>
                                            <span class="fdn">2</span>
                                          </div> * g * t<sup>2</sup>, se iguala a cero "y"</div>
                                          <div class="eq-c">0 = V<sub>0y</sub> * t -  
                                            <div class="fraction">
                                              <span class="fup">1</span>
                                              <span class="bar">/</span>
                                              <span class="fdn">2</span>
                                            </div> * g * t<sup>2</sup>, se saca factor común de tiempo</div>
                                            <div class="eq-c">0 = t ( v<sub>0y</sub> -  
                                              <div class="fraction">
                                                <span class="fup">1</span>
                                                <span class="bar">/</span>
                                                <span class="fdn">2</span>
                                              </div> * g * t), se obtiene que:</div>
                                              <div class="eq-c">  
                                                <div class="fraction">
                                                  <span class="fup"> t = 0</span>
                                                </div> ó  (<div class="fraction">
                                                <span class="fup">1</span>
                                                <span class="bar">/</span>
                                                <span class="fdn">2</span>
                                              </div> * g * t) = 0</div> 
                                              <div class="eq-c">
                                                <div class="fraction">
                                                  <span class="fup"> t = 0, se cumple al inicio de la trayectoria</span>
                                                </div></div>
                                                <div class="eq-c">  
                                                  (<div class="fraction">
                                                  <span class="fup">1</span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">2</span>
                                                </div> * g * t) = 0  <b>  <i class="fa fa-long-arrow-right "></i></b> t = <div class="fraction formula">
                                                <span class="fup">2v<sub>0y</sub></span>
                                                <span class="bar">/</span>
                                                <span class="fdn">g</span>
                                              </div> 
                                            </div></div>

                                            <div class="col-md-5">
                                              <br><br><br><br>
                                              <center>
                                                <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaTiempo"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                                              </center>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>

                                    <!-- Modal -->
                                    <div class="modal fade" id="modalPracticaTiempo" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                      <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="modalLabel">Practica</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                            </button>
                                          </div>
                                          <div class="modal-body">
                                            <p>Un jugador lanza un tiro libre, el balón sale del botín del jugador con una velocidad inicial de 100 m/s y
                                              forma un ángulo  de 30<sup>°</sup> con la horizontal. ¿En qué tiempo, el balón vuelve a tierra?</p>


                                              <div id="respuestaTiempo">
                                                <div class="eq-c"><b>Velocidad Y</b><br>
                                                  <div class="fraction">
                                                    <span class="fup"> v<sub>0y</sub> = v<sub>0</sub>*sen(θ) = 100m/s*sen(30<sup>°</sup>) = 100m/s*0.5  =<u> 50m/s</u></span>
                                                  </div>
                                                </div>
                                                <div class="eq-c"><b>Tiempo de vuelo</b><br>
                                                 <div class="eq-c">t =   
                                                  <div class="fraction">
                                                    <span class="fup">2*v<sub>0y</sub></span>
                                                    <span class="bar">/</span>
                                                    <span class="fdn">g</span>
                                                  </div> = <div class="fraction">
                                                  <span class="fup">2 * 50m/s</span>
                                                  <span class="bar">/</span>
                                                  <span class="fdn">9.8m/s<sup>2</sup></span>
                                                </div> = <div class="fraction">
                                                <span class="fup">100m/s</span>
                                                <span class="bar">/</span>
                                                <span class="fdn">9.8m/s<sup>2</sup></span>
                                              </div> = <u class="respuesta">10.20s</u></div>
                                            </div>
                                          </div>
                                          <br>
                                          <form id="formTiempo" name="formTiempo">
                                            <div class="custom-control custom-radio custom-control-inline">
                                              <input type="radio" class="custom-control-input" id="tiempo1" name="radioTiempo" value="a">
                                              <label class="custom-control-label" for="tiempo1">
                                                <div class="eq-c">
                                                  <b>a) </b>
                                                  <div class="fraction">
                                                    <span class="fup">10.2s</span>
                                                  </div>
                                                </div>
                                              </label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                              <input type="radio" class="custom-control-input" id="tiempo2" name="radioTiempo" value="b">
                                              <label class="custom-control-label" for="tiempo2">
                                                <div class="eq-c">
                                                  <b>b) </b>
                                                  <div class="fraction">
                                                    <span class="fup">11.2s</span>
                                                  </div>
                                                </div>
                                              </label>
                                            </div>

                                            <div class="custom-control custom-radio custom-control-inline">
                                              <input type="radio" class="custom-control-input" id="tiempo3" name="radioTiempo" value="c">
                                              <label class="custom-control-label" for="tiempo3">
                                                <div class="eq-c">
                                                  <b>c) </b>
                                                  <div class="fraction">
                                                    <span class="fup">20.3s</span>
                                                  </div>
                                                </div>
                                              </label>
                                            </div>
                                          </form>

                                          <div id="alertTiempo" class="alert" role="alert">
                                            <div id="alertTextoTiempo"></div>
                                          </div>
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                          <button type="button" class="btn btn-primary" onclick="verificarTiempo()">Verificar</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div></div>
                                  
                                  <div class="tab-pane" id="alcance">
                                    <div class="mov">
                                      <h4><b>Alcance Máximo </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
                                      <p>Es la distancia máxima recorrida en el eje horizontal.</p>
                                      <div class="row">
                                        <div class="col-md-4">
                                          <img src="{{ asset('images/temas/movimiento/xmax.png') }}" alt="ejeY" height="280">
                                        </div>
                                        <div class="col-md-8">
                                          <div class="row">
                                            <div class="col-md-12">

                                              <p>De la fórmula de posición en el componente x:</p>
                                              <div class="eq-c">x = 
                                                <div class="fraction">
                                                  <span class="fup">v<sub>0x</sub> * t</span>
                                                </div> se remplaza en t, el tiempo total de vuelo:</div>
                                                <div class="eq-c">x<sub>max</sub> = v<sub>0x</sub> *
                                                  <div class="fraction">
                                                    <span class="fup">2v<sub>0y</sub></span>
                                                    <span class="bar">/</span>
                                                    <span class="fdn">g</span>
                                                  </div> se cambia la velocidad inicial en y y en x, a terminos de ángulo y v<sub>0</sub>. <i>(Véase: tema velocidad en movimiento de proyectiles)</i></div>
                                                  <div class="eq-c">x<sub>max</sub> = v0*cos(θ) *
                                                    <div class="fraction">
                                                      <span class="fup">2*(v0*sen(θ))</span>
                                                      <span class="bar">/</span>
                                                      <span class="fdn">g</span>
                                                    </div> se resuelve: </div>
                                                    <div class="eq-c">x<sub>max</sub> = 
                                                      <div class="fraction">
                                                        <span class="fup">2*sen(θ)*cos(θ)*v0<sup>2</sup></span>
                                                        <span class="bar">/</span>
                                                        <span class="fdn">g</span>
                                                      </div> según <u class="reglaTrig" onmouseout="normalReglaTrig()" onmouseover="reglaTrig()">regla trigonométrica:</u> </div>
                                                      <div class="row">
                                                        <div class="col-md-5">
                                                          <div class="eq-c formula">x<sub>max</sub> = 
                                                            <div class="fraction">
                                                              <span class="fup">v0<sup>2</sup> * sen(2θ)</span>
                                                              <span class="bar">/</span>
                                                              <span class="fdn">g</span>
                                                            </div></div>
                                                          </div>
                                                          <div class="col-md-7">
                                                            <center>
                                                              <button type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalPracticaAlcan"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Practica</center></button>
                                                            </center>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                  </div>
                                                </div>
                                                <div id="reglaTrig">
                                                  <div class="eq-c rg">sen(2θ) =
                                                    <div class="fraction">
                                                      <span class="fup"> 2*sen(θ)*cos(θ)</span>
                                                    </div></div>
                                                  </div> 
                                                </div> 
                                                <!-- Modal -->
                                                <div class="modal fade" id="modalPracticaAlcan" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                                  <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title" id="modalLabel">Practica</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                        </button>
                                                      </div>
                                                      <div class="modal-body">
                                                        <p>Un jugador de tejo lanza el hierro con un ángulo de 18<sup>°</sup> con la horizontal y con una velocidad inicial de 17m/s.
                                                          ¿En qué punto cae el hierro situado desde el lanzador?</p>
                                                          <div id="respuestaHori">
                                                            
                                                            <div class="eq-c">
                                                             <div class="eq-c">x<sub>max</sub> =   
                                                              <div class="fraction">
                                                                <span class="fup">v<sub>0</sub><sup>2</sup> * sen(2θ)</span>
                                                                <span class="bar">/</span>
                                                                <span class="fdn">g</span>
                                                              </div> = <div class="fraction">
                                                              <span class="fup">(17m/s)<sup>2</sup> * sen(2*18<sup>°</sup>)</span>
                                                              <span class="bar">/</span>
                                                              <span class="fdn">9.8m/s<sup>2</sup></span>
                                                            </div> = <div class="fraction">
                                                            <span class="fup">289m<sup>2</sup>/s<sup>2</sup> * sen(36<sup>°</sup>)</span>
                                                            <span class="bar">/</span>
                                                            <span class="fdn">9.8m/s<sup>2</sup></span>
                                                          </div> = <div class="fraction">
                                                          <span class="fup">289m<sup>2</sup>/s<sup>2</sup> * 0.5877</span>
                                                          <span class="bar">/</span>
                                                          <span class="fdn">9.8m/s<sup>2</sup></span>
                                                        </div> = <div class="fraction">
                                                        <span class="fup">169.86m<sup>2</sup>/s<sup>2</sup></span>
                                                        <span class="bar">/</span>
                                                        <span class="fdn">9.8m/s<sup>2</sup></span>
                                                      </div>
                                                      = <u class="respuesta">17.33m</u></div>
                                                    </div>
                                                  </div>
                                                  <br>
                                                  <form id="formHori" name="formHori">
                                                    <div class="custom-control custom-radio custom-control-inline">
                                                      <input type="radio" class="custom-control-input" id="hori1" name="radioHori" value="a">
                                                      <label class="custom-control-label" for="hori1">
                                                        <div class="eq-c">
                                                          <b>a) </b>
                                                          <div class="fraction">
                                                            <span class="fup">17.3m</span>
                                                          </div>
                                                        </div>
                                                      </label>
                                                    </div>

                                                    <div class="custom-control custom-radio custom-control-inline">
                                                      <input type="radio" class="custom-control-input" id="hori2" name="radioHori" value="b">
                                                      <label class="custom-control-label" for="hori2">
                                                        <div class="eq-c">
                                                          <b>b) </b>
                                                          <div class="fraction">
                                                            <span class="fup">7.3m</span>
                                                          </div>
                                                        </div>
                                                      </label>
                                                    </div>

                                                    <div class="custom-control custom-radio custom-control-inline">
                                                      <input type="radio" class="custom-control-input" id="hori3" name="radioHori" value="c">
                                                      <label class="custom-control-label" for="hori3">
                                                        <div class="eq-c">
                                                          <b>c) </b>
                                                          <div class="fraction">
                                                            <span class="fup">9.3m</span>
                                                          </div>
                                                        </div>
                                                      </label>
                                                    </div>
                                                  </form>

                                                  <div id="alertHori" class="alert" role="alert">
                                                    <div id="alertTextoHori"></div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                                  <button type="button" class="btn btn-primary" onclick="verificarHorizontal()">Verificar</button>
                                                </div>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        

                                        <div class="tab-pane" id="ejemplo">
                                          <div class="mov">

                                          </div>
                                        </div>

                                        <div class="tab-pane" id="aceleracion">
                                         <div class="mov">

                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>


                                 @endsection

                                 @section('textScript')
                                 <script type="text/javascript" src="{{ asset('js/responsiveTab.js')}}"></script>
                                 @endsection

                                 @section('script')
                                 var time = [];   
                                 var timeInit = 200;   
                                 var timePas = 0;
                                 var timeTrue = [];

                                 for(var i=0; i<=40; i++){
                                 timeTrue[i] = true;
                               }
                               document.getElementById("btnPause").disabled = true;
                               document.getElementById("btnReanudar").disabled = true;
                               function proyectilPlay(){
                               document.getElementById("btnPause").disabled = false;
                               document.getElementById("btnPlay").disabled = true;
                               document.getElementById("btnReanudar").disabled = false;
                               if(timeTrue[0]){
                               time[0] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy1.png') }}"; timePas=0; }, timeInit);
                             }
                             if(timeTrue[1]){
                             time[1] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy2.png') }}"; timePas=1 }, timeInit+200);
                           }
                           if(timeTrue[2]){
                           time[2] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy3.png') }}"; timePas=2 }, timeInit+400);
                         }
                         if(timeTrue[3]){
                         time[3] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy4.png') }}"; timePas=3 }, timeInit+600);
                       }
                       if(timeTrue[4]){
                       time[4] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy5.png') }}"; timePas=4 }, timeInit+800);
                     }
                     if(timeTrue[5]){
                     time[5] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy6.png') }}"; timePas=5 }, timeInit+1000);
                   }
                   if(timeTrue[6]){
                   time[6] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy7.png') }}"; timePas=6 }, timeInit+1200);
                 }
                 if(timeTrue[7]){
                 time[7] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy8.png') }}"; timePas=7 }, timeInit+1400);
               }
               if(timeTrue[8]){
               time[8] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy9.png') }}"; timePas=8 }, timeInit+1600);
             }
             if(timeTrue[9]){
             time[9] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy10.png') }}"; timePas=9 }, timeInit+1800);
           }
           if(timeTrue[10]){
           time[10] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy11.png') }}"; timePas=10 }, timeInit+2000);
         }
         if(timeTrue[11]){
         time[11] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy12.png') }}"; timePas=11 }, timeInit+2200);
       }
       if(timeTrue[12]){
       time[12] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy13.png') }}"; timePas=12 }, timeInit+2400);
     }
     if(timeTrue[13]){
     time[13] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy14.png') }}"; timePas=13 }, timeInit+2600);
   }
   if(timeTrue[14]){
   time[14] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy15.png') }}"; timePas=14 }, timeInit+2800);
 }
 if(timeTrue[15]){
 time[15] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy16.png') }}"; timePas=15 }, timeInit+3000);
}
if(timeTrue[16]){
time[16] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy17.png') }}"; timePas=16 }, timeInit+3200);
}
if(timeTrue[17]){
time[17] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy18.png') }}"; timePas=17 }, timeInit+3400);
}
if(timeTrue[18]){
time[18] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy19.png') }}"; timePas=18 }, timeInit+3600);
}
if(timeTrue[19]){
time[19] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy20.png') }}"; timePas=19  }, timeInit+3800);
}
if(timeTrue[20]){
time[20] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy21.png') }}"; timePas=20 }, timeInit+4000);
}
if(timeTrue[21]){
time[21] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy22.png') }}"; timePas=21 }, timeInit+4200);
}
if(timeTrue[22]){
time[22] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy23.png') }}"; timePas=22 }, timeInit+4400);
}
if(timeTrue[23]){
time[23] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy24.png') }}"; timePas=23 }, timeInit+4600);
}
if(timeTrue[24]){
time[24] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy25.png') }}"; timePas=24 }, timeInit+4800);
}
if(timeTrue[25]){
time[25] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy26.png') }}"; timePas=25 }, timeInit+5000);
}
if(timeTrue[26]){
time[26] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy27.png') }}"; timePas=26 }, timeInit+5200);
}
if(timeTrue[27]){
time[27] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy28.png') }}"; timePas=27 }, timeInit+5400);
}
if(timeTrue[28]){
time[28] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy29.png') }}"; timePas=28 }, timeInit+5600);
}
if(timeTrue[29]){
time[29] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy30.png') }}"; timePas=29 }, timeInit+5800);
}
if(timeTrue[30]){
time[30] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy31.png') }}"; timePas=30 }, timeInit+6000);
}
if(timeTrue[31]){
time[31] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy32.png') }}"; timePas=31 }, timeInit+6200);
}
if(timeTrue[32]){
time[32] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy33.png') }}"; timePas=32 }, timeInit+6400);
}
if(timeTrue[33]){
time[33] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy34.png') }}"; timePas=33 }, timeInit+6600);
}
if(timeTrue[34]){
time[34] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy35.png') }}"; timePas=34 }, timeInit+6800);
}
if(timeTrue[35]){
time[35] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy36.png') }}"; timePas=35 }, timeInit+7000);
}
if(timeTrue[36]){
time[36] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy37.png') }}"; timePas=36 }, timeInit+7200);
}
if(timeTrue[37]){
time[37] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy38.png') }}"; timePas=37 }, timeInit+7400);
}
if(timeTrue[38]){
time[38] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy39.png') }}"; timePas=38 }, timeInit+7600);
}
if(timeTrue[39]){
time[39] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy40.png') }}"; timePas=39 }, timeInit+7800);
}
if(timeTrue[40]){
time[40] = setTimeout(function(){imgProy.src = "{{ asset('images/temas/movimiento/proy41.png') }}"; timePas=40;  }, timeInit+8000);
}
setTimeout(function(){document.getElementById("btnPlay").disabled = false; for(var i=0; i<=40; i++){
timeTrue[i] = true;
}; timeInit = 200 }, timeInit+8500);
}

function proyectilReanudar(){
for(var i=0; i<=(time.length)-1; i++){
clearTimeout(time[i]);
}
for(var i=0; i<=40; i++){
timeTrue[i] = true;
}
imgProy.src = "{{ asset('images/temas/movimiento/proy1.png') }}"
timePas = 0;
var timeInit = 200;  
document.getElementById("btnReanudar").disabled = true;
document.getElementById("btnPlay").disabled = false;
document.getElementById("btnPause").disabled = true;
}

function proyectilPause(){   
document.getElementById("btnPause").disabled = true;
document.getElementById("btnPlay").disabled = false;
console.log("Hola "+timePas);
for(var i=0; i<=(time.length)-1; i++){
clearTimeout(time[i]);
}
for(var i=0; i<=40; i++){
if(timePas==i){
timeInit = -200*i
for(i=0; i<=timePas-1; i++){
timeTrue[i] = false; 
}
for(i=i; i<=40; i++){
timeTrue[i] = true; 
}
}
}
}

function ejeY(){
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY1.png') }}" }, 200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY2.png') }}" }, 400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY3.png') }}" }, 600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY4.png') }}" }, 800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY5.png') }}" }, 1000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY6.png') }}" }, 1200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY7.png') }}" }, 1400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY8.png') }}" }, 1600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY9.png') }}" }, 1800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY10.png') }}" }, 2000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY11.png') }}" }, 2200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY12.png') }}" }, 2400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY13.png') }}" }, 2600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY14.png') }}" }, 2800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY15.png') }}" }, 3000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY16.png') }}" }, 3200);
setInterval(function(){
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY1.png') }}" }, 200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY2.png') }}" }, 400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY3.png') }}" }, 600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY4.png') }}" }, 800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY5.png') }}" }, 1000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY6.png') }}" }, 1200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY7.png') }}" }, 1400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY8.png') }}" }, 1600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY9.png') }}" }, 1800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY10.png') }}" }, 2000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY11.png') }}" }, 2200);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY12.png') }}" }, 2400);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY13.png') }}" }, 2600);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY14.png') }}" }, 2800);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY15.png') }}" }, 3000);
setTimeout(function(){imgEjeY.src = "{{ asset('images/temas/movimiento/ejeY16.png') }}" }, 3200);
},3500);

};         


function reglaTrig(){
$('#reglaTrig').show();
};
function normalReglaTrig(){
$('#reglaTrig').hide();
}

function verificarPracVel(){
var radVal = document.formVelProy.radioVelProy.value;
var alertVel = document.getElementById("alertVel");
if(radVal=="a"){
$("#alertVel").removeClass("alert-danger");
$("#alertVel").removeClass("alert-primary");
$("#alertVel").addClass("alert-success");
$('#alertVel').show();
$("#respuestaVelPro").show();
document.getElementById('alertTextoVel').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="b"||radVal=="c"){
$("#alertVel").removeClass("alert-primary");
$("#alertVel").removeClass("alert-success");
$("#alertVel").addClass("alert-danger");
$('#alertVel').show();
$("#respuestaVelPro").show();
document.getElementById('alertTextoVel').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>a) </b><div class="fraction"><span class="fup">19.36m</span><span class="bar">/</span><span class="fdn"> s</span></div></div>.';
}
else{
$("#alertVel").removeClass("alert-success");
$("#alertVel").removeClass("alert-danger");
$("#alertVel").addClass("alert-primary");
$('#alertVel').show();
document.getElementById('alertTextoVel').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}

}

function verificarPracAlt(){
var radVal = document.formAlt.radioAlt.value;
var alertAlt = document.getElementById("alertAlt");
if(radVal=="b"){
$("#alertAlt").removeClass("alert-danger");
$("#alertAlt").removeClass("alert-primary");
$("#alertAlt").addClass("alert-success");
$('#alertAlt').show();
$("#respuestaAlt").show();
document.getElementById('alertTextoAlt').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="a"||radVal=="c"){
$("#alertAlt").removeClass("alert-primary");
$("#alertAlt").removeClass("alert-success");
$("#alertAlt").addClass("alert-danger");
$('#alertAlt').show();
$("#respuestaAlt").show();
document.getElementById('alertTextoAlt').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>b) </b> 14.2m.</div>';
}
else{
$("#alertAlt").removeClass("alert-success");
$("#alertAlt").removeClass("alert-danger");
$("#alertAlt").addClass("alert-primary");
$('#alertAlt').show();
document.getElementById('alertTextoAlt').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}

}

function verificarTiempo(){
var radVal = document.formTiempo.radioTiempo.value;
var alertTiempo = document.getElementById("alertTiempo");
if(radVal=="a"){
$("#alertTiempo").removeClass("alert-danger");
$("#alertTiempo").removeClass("alert-primary");
$("#alertTiempo").addClass("alert-success");
$('#alertTiempo').show();
$("#respuestaTiempo").show();
document.getElementById('alertTextoTiempo').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="b"||radVal=="c"){
$("#alertTiempo").removeClass("alert-primary");
$("#alertTiempo").removeClass("alert-success");
$("#alertTiempo").addClass("alert-danger");
$('#alertTiempo').show();
$("#respuestaTiempo").show();
document.getElementById('alertTextoTiempo').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>a) </b> 10.2s.</div>';
}
else{
$("#alertTiempo").removeClass("alert-success");
$("#alertTiempo").removeClass("alert-danger");
$("#alertTiempo").addClass("alert-primary");
$('#alertTiempo').show();
document.getElementById('alertTextoTiempo').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}

}

function verificarHorizontal(){
var radVal = document.formHori.radioHori.value;
var alertHori = document.getElementById("alertHori");
if(radVal=="a"){
$("#alertHori").removeClass("alert-danger");
$("#alertHori").removeClass("alert-primary");
$("#alertHori").addClass("alert-success");
$('#alertHori').show();
$("#respuestaHori").show();
document.getElementById('alertTextoHori').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="b"||radVal=="c"){
$("#alertHori").removeClass("alert-primary");
$("#alertHori").removeClass("alert-success");
$("#alertHori").addClass("alert-danger");
$('#alertHori').show();
$("#respuestaHori").show();
document.getElementById('alertTextoHori').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>a) </b> 17.3m.</div>';
}
else{
$("#alertHori").removeClass("alert-success");
$("#alertHori").removeClass("alert-danger");
$("#alertHori").addClass("alert-primary");
$('#alertHori').show();
document.getElementById('alertTextoHori').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}

}

function verificarPracPos(){
var radVal = document.formPosProy.radioPosProy.value;
var alertPos = document.getElementById("alertPos");
if(radVal=="b"){
$("#alertPos").removeClass("alert-danger");
$("#alertPos").removeClass("alert-primary");
$("#alertPos").addClass("alert-success");
$('#alertPos').show();
$("#respuestaPosProy").show();
document.getElementById('alertTextoPos').innerHTML='<b>¡Bien hecho!</b> La respuesta es correcta.';
}
else if(radVal=="a"||radVal=="c"){
$("#alertPos").removeClass("alert-primary");
$("#alertPos").removeClass("alert-success");
$("#alertPos").addClass("alert-danger");
$('#alertPos').show();
$("#respuestaPosProy").show();
document.getElementById('alertTextoPos').innerHTML='<div class="eq-c"><b>¡Incorrecto!</b> La respuesta correcta es <b>b) </b><div class="fraction"><span class="fup">(2.5, 3.1)</span></div></div>.';
}
else{
$("#alertPos").removeClass("alert-success");
$("#alertPos").removeClass("alert-danger");
$("#alertPos").addClass("alert-primary");
$('#alertPos').show();
document.getElementById('alertTextoPos').innerHTML='<b>Ten cuidado!</b> Selecciona una opción.';
}

}


@endsection