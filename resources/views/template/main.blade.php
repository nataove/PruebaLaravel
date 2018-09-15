
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>@yield('title', 'Default')</title>
	<link rel="stylesheet" href="{{ asset('plugins/css/bootstrap.css')}}">
	<link rel="stylesheet" href="{{ asset('plugins/font-awesome/css/font-awesome.css')}}">
	<link rel="stylesheet" href="{{ asset('plugins/js/gritter/css/jquery.gritter.css')}}">
	<link rel="stylesheet" href="{{ asset('plugins/css/style.css')}}">
	<link rel="stylesheet" href="{{ asset('plugins/css/style-responsive.css')}}">
</head>
<body>
	<section id="container" >
      <header class="header black-bg">
              <div class="sidebar-toggle-box">
                  <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
              </div>
            <a href="{{url('/')}}" class="logo">FISIMATICA</a>
            <div class="nav notify-row" id="top_menu">
            </div>
            <div class="top-menu">
              <ul class="nav pull-right top-menu">
                    <li><a class="logout" href="{{ url('/logout') }}">Cerrar Sesión</a></li>
              </ul>
            </div>
        </header>

      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <ul class="sidebar-menu" id="nav-accordion">
                  <p class="centered"><a href=""><img src="{{ asset('images/usuarios/icono.png') }}" class="img-circle" width="60"></a></p>
                  <h5 class="centered">@yield('nombre')</h5>
                  <h6 class="centered">@yield('correo')</h6>
                  <li class="mt">
                      <a href="@yield('perfilEditar')">
                          <i class="fa fa-user"></i>
                          <span>Editar Perfíl</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-users"></i>
                          <span>Docente</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="@yield('registrarDocente')">Registrar</a></li>
                          <li><a  href="">Consultar</a></li>
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-graduation-cap"></i>
                          <span>Estudiante</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="">Registrar</a></li>
                          <li><a  href="">Consultar</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-question"></i>
                          <span>Cuestionario</span>
                      </a>
                  </li>
              </ul>
          </div>
      </aside>

      <section id="main-content">
        <section class="wrapper">
         @yield('content')
        </section>
      </section>
  </section>
    <script src="{{ asset('plugins/js/jquery.js') }}"></script>
    <script class="include" type="text/javascript" src="{{ asset('plugins/js/jquery.dcjqaccordion.2.7.js') }}"></script>
    <script src="{{ asset('plugins/js/jquery.scrollTo.min.js') }}"></script>

    <script src="{{ asset('plugins/js/common-scripts.js') }}"></script>    
    <script type="text/javascript" src="{{ asset('plugins/js/gritter/js/jquery.gritter.js') }}"></script>

  <script type="text/javascript">
       @yield('script');
  </script>
</body>
</html>