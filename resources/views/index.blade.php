<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="_token" content="{{ csrf_token() }}"/>
  <title>Fisimatica</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/index.css') }}">
  <link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">
  <link rel="shortcut icon" href="{{ asset('images/favicon.ico')}}" /> 
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand js-scroll-trigger" href="{{url('/')}}">
      <img src="images/logo.png" alt="Logo" width="45" height="40">
      <b>Fisi</b>matica</a>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    @if(!Auth::user())
    <div class="men collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="create-modal nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">Regístrate</a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
          <a class="create-modalLogin nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">Iniciar Sesión</a>
        </li>
      </ul>
    </div>
    @endif
    @if(Auth::user())
    <div class="men collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href='{{ action("UsersController@create") }}'>Perfíl</a>
        </li>
        <hr class="linea">
        <li class="nav-item mx-0 mx-lg-1">
          <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="{{ url('/logout') }}">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
    @endif
    </div>
  </nav>
 
  <div id="create" class="modal fade" role="dialog">
   <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>      
        </div>
        <div id="error" class="alert alert-danger form-group">

          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <p id="errores"> <br/> </p>
        </div>
        <form action="registrarUser" method:"post" id="frmUser" enctype="multipart/form-data" class="form-horizontal" role="form">
          <div class="modal-body">
           <div class="archivo form-group row add">
            <label form="image"></label>
             <div id="drag-drop">
              <input type="file" name="image"  id="image" class="form-control"/>
             </div>
            </div>
            <div class="form-group row ">
              <label class="control-label col-sm-3" form="name">Nombre:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre" required>
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-sm-3" form="email">E-mail:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="email" name="email" placeholder="nombre@ejemplo.com" required>
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-sm-3" form="password">Contraseña:</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="password" name="password" placeholder="***********" required>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="add">Registrar</button>
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    
  <div class="modal fade" id="mostrarmodal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
	  	<div class="modal-content">
        <video src="{{ asset('videos/FisimaticaInicio.mp4') }}" id="posicion1" controls></video>
      </div>
		</div>
	</div>
    

<!-- Modal Login -->

<div id="createLogin" class="modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-titleLogin"></h5>      
        </div>
        <div id="errorLogin" class="alert alert-danger form-group">
          <p id="erroresLogin"> <br/> </p>
        </div>
        <form action="loguear" method:"post" id="frmLogin" class="form-horizontal" role="form">
          <div class="modal-body">
            <div class="form-group row add">
              <label class="control-label col-sm-3" form="emailL">E-mail:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="emailL" name="emailL" placeholder="nombre@ejemplo.com" required>
              </div>
            </div>
              <hr>      
            <div class="form-group row add">
              <label class="control-label col-sm-3" form="passwordL">Contraseña:</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="passwordL" name="passwordL" placeholder="***********" required>
              </div>
            </div>
            <div class="form-group row add">
              <a class="col-sm-9 offset-md-3" href="password/email">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="submit" id="add1">Iniciar Sesión</button>
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
        </div>
        </form>
      </div>
    </div>
  </div>
    
    

  <header class="masthead bg-primary text-white text-center">
    <div class="container">
    <br><br><br><br>
      <img class="img-fluid mb-5 d-block mx-auto" src="images/einstein2.png" alt="">
      <h1 class="font-weight-light mb-0">Aprende      -      Práctica      -      Gana</h1>
    <br><br>
    </div>
  </header>

  <section class="about mb-0">
      <div class="container">
        <br>
        <h2 class="text-center">¿Qué es Físimatica?</h2>
        <div class="row">
          <div class="col-lg-11 ml-auto">
            <p class="lead">Físimatica es una plataforma de aprendizaje que usa hipermedia para la enseñanza de Física, donde podrás: </p>
          </div>
        </div>

      <div class="fondo">
          <div class="row">
            <br>
          </div>
          <div class="row menu">
            <div class="col-md-2 offset-md-2 aprende">
              <img class= "rounded mx-auto d-block" src="images/pract.png" alt="Aprende" width="100" height="100">
                <div class="col-lg-11 ml-auto">
                <h5 align="center" class="col-md-1">Aprender</h5>
                </div>
            </div>
            <div class="col-md-2 offset-md-1 aprende">
              <img class="rounded mx-auto d-block" src="images/apren.png" alt="Práctica"  width="100" height="100">
                <div class="col-lg-11 ml-auto">
              <h5 align= "center"class="col-md-5 col-md-offset-7"> Practicar</h5>
            </div>
              </div>
            <div class="col-md-2 offset-md-1 aprende">
              <img class= "rounded mx-auto d-block" src="images/gan.png" alt="Gana" width="100" height="100">
                <div class="col-lg-11 ml-auto">
                <h5 align="center"> Ganar</h5>
                </div>
            </div>
          </div>
          <div class="row">
            <br>
          </div>
        </div>
      
      </div>
    </section>

    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Your Website 2018</small>
      </div>
    </div>

  <script type="text/javascript" src="{{ asset('plugins/jquery/js/jquery-3.3.1.js') }}"></script>
  <script type="text/javascript" src="{{ asset('plugins/bootstrap/js/bootstrap.js') }}"></script>
  <script type="text/javascript">
      
    /*------------------------------*/
      
        /*------------------------------*/
      
      
      
      
   
    $(document).on('click', '.create-modal', function(){
      $('#create').modal('show');
      $('.form-horizontal').show();
      $('.modal-title').text('Regístrate');
    });

    $(document).on('click', '.create-modalLogin', function(){
      $('#createLogin').modal('show');
      $('.form-horizontal').show();
      $('.modal-titleLogin').text('Inicia Sesión');
    });
    
    $.ajaxSetup({
          headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
     });
    $("#frmUser").submit(function(e){
      e.preventDefault();
      var form=$('#frmUser');
      var formData=form.serialize();
        
      var ur= '{{ action("UsersController@store") }}';
      $.ajax({
              type    : 'post',
              url     : ur,
              data: new FormData(this),
              processData: false,
              contentType: false,
              success :function(data){
                console.log(data);
                window.location.replace(data.url);
        },
            error: function (data) {
              var errorsHtml = '<ul>';
              var errors = data.responseJSON;
              $.each(errors, function (key, value) {
              errorsHtml += '<li>';
              errorsHtml += value + '</li>';
              });
              errorsHtml += "</ul>";
              $('#error').show();
              console.log(errorsHtml);
              document.getElementById('errores').innerHTML = errorsHtml;
             }
      });
    });

      $(document).ready(function () {
            $("#mostrarmodal").modal("show");
            
        });
      
      jQuery('#mostrarmodal').on('hidden.bs.modal', function (e) {
  // do something...
  jQuery('#mostrarmodal video').attr("src", jQuery("#mostrarmodal  video").attr("src"));
});
      
      
      
      
  $(function(){
  $('#image').change(function(){
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
        var reader = new FileReader();

        reader.onload = function (e) {
          document.getElementById('drag-drop').style.backgroundImage= "url("+e.target.result+")"; 
        }
       reader.readAsDataURL(input.files[0]);
    }
    else
    {
       document.getElementById('drag-drop').style.backgroundImage= "url('/images/usuarios/iconoVacio.png')"; 
    }
  });


  $("#frmLogin").submit(function(e){
      e.preventDefault();
      var form=$('#frmLogin');
      var formData=form.serialize();
      var ur= '{{ action("LoginController@store") }}';
      $.ajax({
              type    : 'post',
              dataType: "json",
              url     : ur,
              data: formData,
              success :function(data){
                console.log(data);
                if(data.response=="success"){
                  window.location.replace(data.url);
                }
                else{
                  $('#errorLogin').show();
                  document.getElementById('erroresLogin').innerHTML = "No se encuentra registrado";
                }
        },
            error: function (data) {
              console.log(formData);
             }
      });
    });

});
  </script>
</body>
</html>
