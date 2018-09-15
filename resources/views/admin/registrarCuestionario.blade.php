@extends('admin.template.main')

@section('title')
  Registrar Cuestionario
@endsection

@section('head')
  <link rel="stylesheet" href="{{ asset('css/registrarDoc.css')}}">
  <link rel="stylesheet" href="{{ asset('css/cuestionario.css')}}">
@endsection

@section('nombre')
  {{ Auth::user()->name }}
@endsection

@section('correo')
  {{ Auth::user()->email }}
@endsection

@section('registrarEstudiante')
  {{ route('crearEstudiante')}}
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

@section('registrarCuestionario')
  {{ route('registrarCuestionario')}}
@endsection

@section('perfilEditar')
  {{ route('editarA', Auth::user()->id) }}
@endsection


@section('content')
  
<div class="form">
    <div class="title">
        <h2><small>Registrar Pregunta</small></h2>
        <div class="clearfix"></div>
    </div>
    <div class="body_form">
        <center>
            @if(session()->has('message'))
            <div class="alert alert-success">
                {{ session()->get('message') }}
            </div>
            @endif
        </center>
        {!! Form::open(array('route' => 'registroC' , 'method' => 'POST',  'files' => true))!!}

        <div class="row">
            <div class="col-md-6">
                <div class="row control-group">
                    <div class="form-group col-md-4 col-sm-3 col-xs-12 floating-label-form-group controls">
                        {!! Form::Label('Tema: ') !!}
                    </div>
                    <div class="form-group col-md-8 col-sm-6 col-xs-12 floating-label-form-group controls">
                       <select class="form-control" name="tema" required>
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            @foreach($subjects as $subject)
                            <option value="{{$subject}}">{{$subject}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="row control-group">
                    <div class="form-group col-md-4 col-sm-3 col-xs-12 floating-label-form-group controls">
                        {!! Form::Label('Tipo de pregunta: ') !!}
                    </div>
                    <div class="form-group col-md-8 col-sm-6 col-xs-12 floating-label-form-group controls">
                        <select class="form-control tipoPregunta" name="tipo" required>
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="Completar">Completar</option>
                            <option value="Falso o verdadero">Falso o verdadero</option>
                            <option value="Selección">Selección</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- ................................................................................................-->
       <div id="preguntas">

            
        </div>

        


        <div class="form-group">
            <center>
            {!! Form::submit('Registrar', ['class' => 'btn btn-primary registrar']) !!}
            <a href="{{ URL::previous() }}"  style="background: #2C3E50" style="border-color:#18BC9C" class="btn btn-primary btn-default">Regresar</a>
            </center>
        </div>
{!! Form::close() !!}

    </div>
</div>
  
@endsection

@section('script')

function btnReset(){
   $("#abc").replaceWith($("#abc").val('').clone(true));
   document.getElementById("myimage").removeAttribute("src");
   myimage.style.display="none";
   abc.style.display="block";
   reset.style.display="none";
}

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
  imgtag.height="50";
    imgtag.src = event.target.result;
    myimage.style.display="block";
    abc.style.display="none";
  };
    reset.style.display="block";
    reader.readAsDataURL(selectedFile);
}
var div1Paras;
var div2Paras;
var div3Paras;
var div4Paras;

$("select.tipoPregunta").change(function(){
    if($(this).val()=='Completar'){
        document.getElementById('preguntas').innerHTML='<h5>Pregunta de Completar</h5><br><div class="row"><div class="col-md-12"><div class="row control-group"><div class="form-group col-md-2 col-sm-12 col-xs-12 floating-label-form-group controls">{!! Form::label('Pregunta: ') !!}</div><div class="form-group col-md-10 col-sm-12 col-xs-12 floating-label-form-group controls">{!! Form::text('pregunta',null, ['class' => 'form-control', 'placeholder' => 'Ingrese la pregunta...', 'required']) !!}</div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('image ', 'Imagen: (opcional)',['class' => 'control-label']) !!}</div><div class="form-group col-md-10 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::file('image',['onchange'=>'onFileSelected(event)', 'id'=>'abc', 'class'=>'inputFile']) !!}<img id="myimage"><a id="reset" onclick="btnReset()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Respuesta: ') !!}</div><div class="form-group col-md-10 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('respuesta',null, ['class' => 'form-control', 'placeholder' => 'Ingrese la respuesta...', 'required']) !!}</div></div></div></div>';
        reset.style.display="none";
    }
    else if($(this).val()=='Falso o verdadero'){
        document.getElementById('preguntas').innerHTML='<h5>Pregunta de Falso o Verdadero</h5><br><div class="row"><div class="col-md-12"><div class="row control-group"><div class="form-group col-md-2 col-sm-12 col-xs-12 floating-label-form-group controls">{!! Form::label('Pregunta: ') !!}</div><div class="form-group col-md-10 col-sm-12 col-xs-12 floating-label-form-group controls">{!! Form::text('pregunta',null, ['class' => 'form-control', 'placeholder' => 'Ingrese la pregunta...', 'required']) !!}</div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('image ', 'Imagen: (opcional)',['class' => 'control-label']) !!}</div><div class="form-group col-md-10 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::file('image',['onchange'=>'onFileSelected(event)', 'id'=>'abc', 'class'=>'inputFile']) !!}<img id="myimage"><a id="reset" onclick="btnReset()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Respuesta: ') !!}</div><div class="form-group col-md-10 col-sm-6 col-xs-12 floating-label-form-group controls"><div class="radio"><label>{!! Form::radio('respuesta', 'Verdadero') !!} Verdadero </label></div><div class="radio"><label>{!! Form::radio('respuesta', 'Falso') !!} Falso </label></div></div></div></div></div>';
        reset.style.display="none";
        var divradio = document.getElementById("preguntas");
        var hh = divradio.getElementsByTagName("input");
        hh[2].required = true;
    }

    else if($(this).val()=='Selección'){
        document.getElementById('preguntas').innerHTML='<div class="row"><div class="col-md-6"><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Pregunta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('pregunta',null, ['class' => 'form-control', 'placeholder' => 'Ingrese la pregunta...', 'required']) !!}</div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('image ', 'Imagen: (opcional)',['class' => 'control-label']) !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::file('image' ,['onchange'=>'onFileSelected(event)', 'id'=>'abc', 'class'=>'inputFile']) !!}<img id="myimage"><a id="reset" onclick="btnReset()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group"><div class="form-group col-md-2 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Respuesta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls"><select id="tipoSeleccion" class="form-control tipoPregunta" name="tipoRespuestaCompletar" onchange="tipoRespuesta()" required><option value="" disabled selected hidden>Seleccione una opción</option><option value="texto">Texto</option><option value="imagen">Imágenes</option></select></div></div></div><div class="col-md-4"><div id="tipoRP"></div></div></div>';
        var div1 = document.getElementById("preguntas");
        reset.style.display="none";
        div3Paras = div1.getElementsByTagName("select");
        div4Paras = div1.getElementsByTagName("div");
    }
    else{
        document.getElementById('preguntas').innerHTML='';
    }
});

function tipoRespuesta(){
    var val = div3Paras[0].value;
    if(val == "texto"){
        div4Paras[12].innerHTML='<div class="row control-group"><div class="form-group col-md-6 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Opción Correcta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('opcionCorrecta',null, ['class' => 'form-control', 'onkeyup'=>'cambiar1()', 'placeholder' => 'Ingrese la respuesta correcta...', 'required']) !!}</div></div><div class="row control-group" id="opcion2"><div class="form-group col-md-6 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Opción Incorrecta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('opcionIn2',null, ['class' => 'form-control', 'onkeyup'=>'cambiar2()', 'placeholder' => 'Ingrese una respuesta incorrecta...', 'required']) !!}</div></div><div class="row control-group" id="opcion3"><div class="form-group col-md-6 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Opción Incorrecta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('opcionIn3',null, ['class' => 'form-control', 'onkeyup'=>'cambiar3()', 'placeholder' => 'Ingrese una respuesta incorrecta...']) !!}</div></div><div class="row control-group" id="opcion4"><div class="form-group col-md-6 col-sm-3 col-xs-12 floating-label-form-group controls">{!! Form::label('Opción Incorrecta: ') !!}</div><div class="form-group col-md-6 col-sm-6 col-xs-12 floating-label-form-group controls">{!! Form::text('opcionIn4',null, ['class' => 'form-control', 'placeholder' => 'Ingrese una respuesta incorrecta...']) !!}</div></div>';
        div1Paras = div4Paras[12].getElementsByTagName("input");
        div2Paras = div4Paras[12].getElementsByTagName("label");
        div1Paras[1].style.display="none";
        div1Paras[2].style.display="none";
        div1Paras[3].style.display="none";

        div2Paras[1].style.display="none";
        div2Paras[2].style.display="none";
        div2Paras[3].style.display="none";
    }
    else if(val == "imagen"){
        div4Paras[12].innerHTML='<div class="row control-group"><div class="form-group col-md-7 col-sm-12 col-xs-12 floating-label-form-group controls"><b>{!! Form::label('Opción Correcta: ') !!}</b></div><div class="form-group col-md-5 col-sm-12 col-xs-12 floating-label-form-group controls"><label for="file-upload1" class="subir"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Subir archivo</label><input id="file-upload1" required="required" name="imageCorrecta" onchange="cambiarimage1(event)" type="file" style="opacity: 0;"/><img id="img1"><a id="resetimg1" onclick="btnResetimg1()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group" id="opcion2"><div class="form-group col-md-7 col-sm-12 col-xs-12 floating-label-form-group controls"><b>{!! Form::label('Opción Incorrecta: ') !!}</b></div><div class="form-group col-md-5 col-sm-12 col-xs-12 floating-label-form-group controls"><label for="file-upload2" class="subir"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Subir archivo</label><input id="file-upload2"  required="required" onchange="cambiarimage2(event)" type="file" name="imageIncorrecta1" style="opacity: 0;"/><img id="img2"><a id="resetimg2" onclick="btnResetimg2()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group" id="opcion3"><div class="form-group col-md-7 col-sm-12 col-xs-12 floating-label-form-group controls"><b>{!! Form::label('Opción Incorrecta: ') !!}</b></div><div class="form-group col-md-5 col-sm-12 col-xs-12 floating-label-form-group controls"><label for="file-upload3" class="subir"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Subir archivo</label><input id="file-upload3" onchange="cambiarimage3(event)" type="file" name="imageIncorrecta2" style="display: none;"/><img id="img3"><a id="resetimg3" onclick="btnResetimg3()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div><div class="row control-group" id="opcion4"><div class="form-group col-md-7 col-sm-12 col-xs-12 floating-label-form-group controls"><b>{!! Form::label('Opción Incorrecta: ') !!}</b></div><div class="form-group col-md-5 col-sm-12 col-xs-12 floating-label-form-group controls"><label for="file-upload4" class="subir"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Subir archivo</label><input id="file-upload4" onchange="cambiarimage4(event)" type="file" name="imageIncorrecta3" style="display: none;"/><img id="img4"><a id="resetimg4" onclick="btnResetimg4()"><i class="fa fa-times" aria-hidden="true"></i></a></div></div>';
        div5Paras = div4Paras[12].getElementsByTagName("label");
        div5Paras[2].style.display="none";
        div5Paras[3].style.display="none";
        div5Paras[4].style.display="none";
        div5Paras[5].style.display="none";
        div5Paras[6].style.display="none";
        div5Paras[7].style.display="none";
        resetimg1.style.display="none";
        resetimg2.style.display="none";
        resetimg3.style.display="none";
        resetimg4.style.display="none";
    }

    else{
        div4Paras[12].innerHTML='';
    }
}

function cambiar1(){
    var val = div1Paras[0].value;
    if(val.length>0){
        div2Paras[1].style.display="block";
        div1Paras[1].style.display="block";
    }
}

function cambiar2(){
    var val = div1Paras[1].value;
    if(val.length>0){
        div2Paras[2].style.display="block";
        div1Paras[2].style.display="block";
    }
}
function cambiar3(){
    var val = div1Paras[2].value;
    if(val.length>0){
        div2Paras[3].style.display="block";
        div1Paras[3].style.display="block";
    }
}

function cambiarimage1(event){
    div5Paras[2].style.display="block";
    div5Paras[3].style.display="block";
    var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("img1");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
  imgtag.height="50";
    imgtag.src = event.target.result;
    img1.style.display="block";
    div5Paras[1].style.display="none";
  };
    reader.readAsDataURL(selectedFile);
    resetimg1.style.display="block";
}

function btnResetimg1(){
   $("#file-upload1").replaceWith($("#file-upload1").val('').clone(true));
   document.getElementById("img1").removeAttribute("src");
   img1.style.display="none";
   div5Paras[1].style.display="block";
   resetimg1.style.display="none";
}

function cambiarimage2(event){
    div5Paras[4].style.display="block";
    div5Paras[5].style.display="block";
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("img2");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
    imgtag.height="50";
    imgtag.src = event.target.result;
    img2.style.display="block";
    div5Paras[3].style.display="none";
  };
    reader.readAsDataURL(selectedFile);
    resetimg2.style.display="block";
}

function btnResetimg2(){
   $("#file-upload2").replaceWith($("#file-upload2").val('').clone(true));
   document.getElementById("img2").removeAttribute("src");
   img2.style.display="none";
   div5Paras[3].style.display="block";
   resetimg2.style.display="none";
}

function cambiarimage3(event){
    div5Paras[6].style.display="block";
    div5Paras[7].style.display="block";
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("img3");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
    imgtag.height="50";
    imgtag.src = event.target.result;
    img3.style.display="block";
    div5Paras[5].style.display="none";
  };
    reader.readAsDataURL(selectedFile);
    resetimg3.style.display="block";
}

function btnResetimg3(){
   $("#file-upload3").replaceWith($("#file-upload3").val('').clone(true));
   document.getElementById("img3").removeAttribute("src");
   img3.style.display="none";
   div5Paras[5].style.display="block";
   resetimg3.style.display="none";
}

function cambiarimage4(event){
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("img4");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
    imgtag.height="50";
    imgtag.src = event.target.result;
    img4.style.display="block";
    div5Paras[7].style.display="none";
  };
    reader.readAsDataURL(selectedFile);
    resetimg4.style.display="block";
}

function btnResetimg4(){
   $("#file-upload4").replaceWith($("#file-upload4").val('').clone(true));
   document.getElementById("img4").removeAttribute("src");
   img4.style.display="none";
   div5Paras[7].style.display="block";
   resetimg4.style.display="none";
}


@endsection

