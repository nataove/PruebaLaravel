@extends('student.template.main')

@section('title')
Movimiento Circular Uniforme
@endsection

@section('head')
<meta name="_token" content="{{ csrf_token() }}"/>
<link rel="stylesheet" href="{{ asset('css/circular.css')}}">
<link rel="stylesheet" href="{{ asset('css/template/tabContent.css')}}">
<link rel="stylesheet" href="{{ asset('css/perfil.css')}}">
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
        <h4><b>Introducción </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <center>
        <video id="video1" src="{{ asset('videos/caida.mp4') }}" controls poster></video>
      </center>
    </div>
  </div>


  <div class="mySlides fade active">
    <div class="mov">
      <h4><b>Movimiento Circular </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <p>El movimiento circular es un movimiento curvilíneo cuya trayectoria es una circunferencia. Son ejemplos: el movimiento de cualquier punto de un disco o una rueda en rotación, el de los puntos de las manecillas de un reloj, las ruedas, el movimiento del electrón alrededor del protón en un átomo de hidrógeno.</p>
      <br>

      <!-- Atom -->
      <div class="atom">
        <!-- orbital 1 -->
        <div class="orbital">
          <!-- contendor del electron-->
          <div class="ruta">
            <!-- electron -->
            <div class="electron"></div>
          </div>
        </div>
        <!-- orbital 2 -->
        <div class="orbital e2">
          <div class="ruta">
            <div class="electron"></div>
          </div>
        </div>
        <!-- orbital 3 -->
        <div class="orbital e3">
          <div class="ruta">
            <div class="electron"></div>
          </div>
        </div>
        <!-- Protones -->
        <div class="proton p1"></div>
        <div class="proton p2"></div>
        <!-- neutornes -->
        <div class="neutron n1"></div>
        <div class="neutron n2"></div>

      </div>
      <br>

    </div>
  </div>





  <div class="mySlides fade active">

    <div class="mov">
      <h4><b>Movimiento Circular Uniforme </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
      <br>
      <p>El Movimiento Circular Uniforme, es cuando un movil recorre una trayectoria circular con rapidez constante-</p>
      <br>
      <p>Aunque la rapidez del movil y la magnitud de su velocidad son constantes en cada instante cambia de dirección. Esta circunstancia implica la existencia de una aceleración que, si bien este no hace variar al módulo de la velocidad, pero sí varía su dirección.</p>

      <br>
      <div class="row justify-content-md-center">
        <button onclick="practCircular()" type="button" class="btn btn-info btn-circle btn-xl" data-toggle="modal" data-target="#modalEjemploCircular"><center><img src="{{ asset('images/iconoPract.png') }}" width="35" height="40"><br>Ejemplo</center></button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="modalEjemploCircular" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Ejemplo</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Consideremos una bola girando de forma circular y constante, la fuerza ejercida que  ésta sobre la bola es la que obliga a la velocidad a cambiar de dirección en cada punto. </p>
          <br>
          <p>Entonces tenemos que:</p>
          <p>m = Masa del cuerpo.
            <p>r = Radio. </p>
            <p><span class="sy-r">a <sub>c</sub><span class="oxbr">&rarr;</span></span> = Aceleración centrípeta.</p>
            <p><span class="sy-r">T<span class="oxbr">&rarr;</span></span> = Vector de fuerza <span class="sy-r">V<span class="oxbr">&rarr;</span></span> = Vector velocidad</p>
            <br>

            <center>
              <img id="imgPract" class= "rounded mx-auto d-block" src="{{ asset('images/bolacircular.gif') }}" height="200px" >
              <p>Por ultimo se debe considerar que el vector velocidad siempre es tangente a la trayectoria de la bola y perpendicular al radio de la misma, es un vector de dirección variable y de módulo constante.</p>
              <br>
            </center>


            <br>
            <div id="alert" class="alert" role="alert">
              <div id="alertTexto"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>




    <div class="mySlides fade active">
      <div class="mov">
       <h4><b>Formulas </b><a href="#"><i class="fa fa-play-circle"></i></a></h4>
       <p>Las formulas hacen parte esencial de la fisica y aun más de la cinematica, a continuación se visualizara las formulas de los elementos del Movimiento Circular Uniforme.
       </p>
       <div class="row justify-content-center">
        <div class="col-md-10">
          <div id="slideSistema" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-6">
                    <center>
                      <img  class="imgCircular" src="{{ asset('images/periodo.png') }}" alt="First slide" height="200" width="250">
                    </center>
                  </div>
                  <div class="col-md-5 info">
                    <div class="infoCircular">

                      <p>Periodo </p>
                      <p>Es el tiempo que tarda la partícula en dar una vuelta completa. Se representa por "T" y se mide en segundos (seg).</p>

                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-6">
                    <img id="imgCircular" class= "rounded mx-auto d-block" src="{{ asset('images/frecuencia.png') }}" alt="First slide" height="200" width="250">
                  </div>
                  <div class="col-md-5 info">
                    <div class="infoCircular">
                      <p>Frecuencia:</p>
                      <p>Es la cantidad de vueltas que recorre la partícula en la unidad de tiempo (1 segundo). Se representa por "f" y se mide en 1/seg ó
                        seg<sup>-1</sup>, que se llaman Herzios (Hz): 1 Hz = 1 seg<sup>-1</sup>.</p>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <img id="imgCircular" class= "rounded mx-auto d-block" src="{{ asset('images/aceleracionC.png') }}" alt="First slide" height="200" width="250">
                    </div>
                    <div class="col-md-5 info">
                      <div class="infoCircular">
                        <p>Aceleración Centrípeta:</p>

                        <p>En el Movimiento Circular Uniforme, la velocidad lineal permanece constante, y por lo tanto no hay aceleración tangencial, sólo hay aceleración centrípeta.</p>
                        <p> <u  data-toggle="modal" data-target="#modalVariables">Descripción de variables</u></p>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <img id="imgCircular" class= "rounded mx-auto d-block" src="{{ asset('images/velocidad.png') }}" alt="First slide" height="200" width="250">
                    </div>
                    <div class="col-md-5 info">
                      <div class="infoCircular">
                        <p>Velocidad Lineal:</p>
                        <p>Es la velocidad propia de la partícula cuya magnitud es constante, pero su dirección cambia ya que siempre es tangente a la circunferencia.</p>

                      </div>
                    </div>
                  </div>
                </div>



                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <img id="imgCircular" class= "rounded mx-auto d-block"  src="{{ asset('images/angular.png') }}" alt="First slide" height="200" width="250">
                    </div>
                    <div class="col-md-5 info">
                      <div class="infoCircular">
                        <p>Velocidad Angular:</p>
                        <p>Es el ángulo que se recorre en cierta cantidad de tiempo. Se representa con la letra griega ω (omega minúscula).</p>
                        <p>Nota: La Velocidad Angular también se llama Frecuencia Angular, ya que ambas se miden en Herzios o en seg<sup>-1</sup>.</p>

                      </div>
                    </div>
                  </div>
                </div>





                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <img id="imgCircular" class= "rounded mx-auto d-block" src="{{ asset('images/fuerzaC.png') }}" alt="First slide" height="200" width="250">
                    </div>
                    <div class="col-md-5 info">
                      <div class="infoCircular">
                        <p>Fuerza Centrípeta:</p>
                        <p>Es la fuerza necesaria para producir un Movimiento Circular Uniforme. Su dirección es perpendicular a la velocidad lineal y está dirigida hacia el centro de la circunferencia.</p>
                        <p> <u  data-toggle="modal" data-target="#modalVariables1">Descripción de variables</u></p>

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
    <!-- Modal -->
    <div class="modal fade" id="modalVariables" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">


        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Distancia</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="modal-body">
                    <center>
                      <img  id="imgCircular" src="{{ asset('images/Descripcion/0.png') }}"  height="200" width="426">
                    </center>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/1.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/2.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/3.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/4.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/5.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/6.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/7.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/8.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/9.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/10.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/11.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/12.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/13.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/14.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/15.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/16.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/17.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/18.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/19.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/20.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/21.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/22.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/23.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/24.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/25.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/26.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/27.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/28.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/29.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/30.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/31.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/32.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/33.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/34.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/36.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/37.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/38.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/39.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/40.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/41.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/42.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/43.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/44.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/45.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/46.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion/47.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>

            </div>


            <center>
              <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span aria-hidden="true"><button class="btnSlide1 left"> <i class="fa fa-caret-left"></i></button></span>
                <span class="sr-only">Anterior</span>
              </a>
              <a href="#carouselExampleIndicators" role="button" data-slide="next">
                <span aria-hidden="true"><button class="btnSlide1 right"> <i class="fa fa-caret-right"></i></button></span>
                <span class="sr-only">Siguiente</span>
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal fade" id="modalVariables1" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div id="descripcionVariables1" class="carousel slide" data-ride="carousel">


        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Descripción de variables</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="modal-body">
                    <center>
                      <img  id="imgCircular" src="{{ asset('images/Descripcion2/0.png') }}"  height="200" width="426">
                    </center>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/1.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/2.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/3.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/4.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/5.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/6.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/7.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/8.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/9.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/10.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/11.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/12.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/13.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/14.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/15.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/16.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/17.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/18.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/19.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/20.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/21.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/22.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/23.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/24.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/25.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/26.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/27.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/28.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/29.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/30.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/31.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/32.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/33.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/34.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/36.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/37.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/38.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/39.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/40.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/41.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/42.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/43.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/44.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/45.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/46.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/47.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/48.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/49.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/50.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
              <div class="carousel-item">
                <div class="modal-body">
                  <center>
                    <img  id="imgCircular" src="{{ asset('images/Descripcion2/51.png') }}"  height="200" width="426">
                  </center>
                </div>
              </div>
            </div>


            <center>
              <a href="#descripcionVariables1" role="button" data-slide="prev">
                <span aria-hidden="true"><button class="btnSlide1 left"> <i class="fa fa-caret-left"></i></button></span>
                <span class="sr-only">Anterior</span>
              </a>
              <a href="#descripcionVariables1" role="button" data-slide="next">
                <span aria-hidden="true"><button class="btnSlide1 right"> <i class="fa fa-caret-right"></i></button></span>
                <span class="sr-only">Siguiente</span>
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>

    <div class="mySlides fade active">
      <div class="mov">
        <h4><b>Ejercicio </b></h4>
        <center>
          <video id="video2" src="{{ asset('videos/CircularEjercicio.mp4') }}" controls poster></video>
        </center>
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
            <a onclick="volver()" id="volver"><img src="{{ asset('images/temas/circulo.png') }}" width="80" height="80"></a>
            <h4>Volver</h4>
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
window.location.replace("proyectilesDependiente");   
}
else{
var i = 8;
var slides = document.getElementsByClassName("mySlides");
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

function practCircular(){
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 200);
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 1500);
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 3000);
setInterval(function(){
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 200);
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 1500);
setTimeout(function(){imgPractRap.src = "{{ asset('images/bolacircular.gif') }}" }, 3000);
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
document.getElementById('alertTexto').innerHTML='<b>¡Incorrecto!</b> La respuesta correcta es <b>a)</b>29,4 m/s <sup>2</sup>.';

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
