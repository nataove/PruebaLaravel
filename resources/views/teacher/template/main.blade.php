<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>@yield('title', 'Default')</title>
  <link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css')}}">
  <link rel="stylesheet" href="{{ asset('css/template/mainEstilo.css')}}">
  <link rel="stylesheet" href="{{ asset('plugins/font-awesome/css/font-awesome.css')}}">
  <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}" /> 
  @yield('head')
      
</head>

<body class="body_md">
  <div class="cont body">
    <div class="container_body">
      <div class="col-md-3 left_nav">
        <div class="left_nav">
          <div class="navbar nav_title">
            <a href="{{url('/')}}" class="site_title">
               <img src="{{ asset('images/logo.png')}}" alt="Logo" width="45" height="40">
              <b>Fisi</b>matica</a>
          </div>
          
          <br>
          <div class="clearfix"></div>
          <div class="profile clearfix">
            <div class="profile_image">
              <img src="{{ asset('images/einstein2.png')}}"  alt="..." class="rounded-circle profile_img">
            </div>
            <div class="profile_info">
              <span>Bienvenido Docente,</span>
              <h2>@yield('nombre')</h2>
            </div>
          </div>
          <div class="clearfix"></div>
        
          <div id="sidebar_left">
            <div class="menu">
              <ul class="nav m">
                <div class="clearfix"></div>
                <li id="menu_1"><a href="{{url('teacher/user')}}"><i class="fa fa-home"></i> Inicio</a></li>
                <li id="menu_2"><a href="@yield('perfilEditar')"><i class="fa fa-edit"></i> Editar Perfíl</a></li>
                <li id="menu_4"><a><i class="fa fa-graduation-cap"></i> Estudiante <span class="fa fa-caret-down"></span></a>
                  <ul class="nav child_menu">
                      <li><a href="@yield('registrarEstudianteT')">Registrar</a></li>
                      <li><a href="{{route('consultarU')}}">Consultar</a></li>
                    </ul>
                </li>
                <li id="menu_5"><a href="#"><i class="fa fa-question"></i> Cuestionario</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="nav_top">
          <div class="menu_top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="nav toggle" data-toggle="collapse">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
    
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle img_pr" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="@yield('avatar')" alt=""> @yield('nombre')
                    </a>
                    <div class="dropdown-menu float-right" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="{{ url('student/perfil') }}">Perfíl</a>
                      <a class="dropdown-item" href="{{ url('/logout') }}">Cerrar Sesión</a>
                    </div>
                  </li>
                </ul>
        
            </nav>
          </div>
        </div>

        <div class="nav_right" id="rc">
          @yield('content')
        </div>

        <br>
        <footer>
          <div align="right">
            Copyright &copy; Your Website 2018
          </div>
        </footer>
      </div>
    </div>
    <script type="text/javascript" src="{{ asset('plugins/jquery/jquery-3.3.1.js')}}"></script>
    <script type="text/javascript" src="{{ asset('plugins/bootstrap/js/bootstrap.js')}}"></script>
    <script type="text/javascript" src="{{ asset('js/template/mainJs.js')}}"></script>
    @yield('textScript')
     <script type="text/javascript">

       @yield('script')
    </script>
  </body>
</html>
