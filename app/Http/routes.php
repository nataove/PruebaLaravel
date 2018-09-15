<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::get('/',["as" => "inicio", "uses" => "UsersController@index"]);
	
Route::post('/login','LoginController@store');

Route::get('/logout','LoginController@logout');

Route::post('user','UsersController@store');

Route::resource('user', 'UsersController');

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
    Route::get('user','AdminController@index');

    Route::get('register_question',["as" => "registrarCuestionario", "uses" => "AdminController@registrarCuestionario"]);
    Route::post('register_C',["as" => "registroC", "uses" => "AdminController@cuestionarioR"]);
    
    Route::get('crear_Estudiante',["as" => "crearEstudiante", "uses" => "AdminController@crearEstudiante"]);
    Route::post('registro_Estudiante',["as" => "registroE", "uses" => "AdminController@registroEstudiante"]);

    Route::get('create',["as" => "crearD", "uses" => "AdminController@create"]);
    Route::get('edit',["as" => "editarA", "uses" => "AdminController@edit"]);
    Route::post('store',["as" => "registroD", "uses" => "AdminController@store"]);
    Route::put('update/{id}',["as" => "cargarAdministrador", "uses" => "AdminController@update"]);
});

Route::group(['prefix' => 'student', 'middleware' => 'student'], function () {
  
  Route::group(['prefix' => 'test', 'middleware' => 'test'], function () {
  Route::get('test_estilo_congnitivo', "StudentsController@testEstilo");
  Route::get('test_estilo_congnitivo_explicacion',["as" => "explicacion", "uses" => "StudentsController@explicacionTest"]);
  Route::get('test_estilo_congnitivo_s1',["as" => "s1", "uses" => "StudentsController@seccion1"]);
  Route::get('test_estilo_congnitivo_s2', "StudentsController@seccion2");
  Route::get('test_estilo_congnitivo_s3',["as" => "s3", "uses" => "StudentsController@seccion3"]);
  Route::get('home',["as" => "home", "uses" => "StudentsController@finalizarTest"]);
  });


  Route::group(['prefix' => 'independent', 'middleware' => 'independent'], function () {

    Route::get('user','StudentsController@index');
    
    Route::get('posicion_temario', ["as" => "temarioPosicion", "uses" => "StudentsController@temarioPosicion"]);
    Route::get('posicion', ["as" => "temaPosicion", "uses" => "StudentsController@contenidoPosicion"]);
    Route::get('posicion_objetivo', ["as" => "objetivoPosicion", "uses" => "StudentsController@objetivoPosicion"]);
   
    Route::get('movimiento_posicion_cuestionario',["as" => "temaPosicionCuestionario", "uses" => "StudentsController@cuestionarioPosicion"]);
    Route::get('cuestionario_posicion_finalizado', "StudentsController@finalPosicion");
   
     //------------------------------------------------------------------------------------------//
    Route::get('caida_temario', ["as" => "temarioCaida", "uses" => "StudentsController@temarioCaida"]);
    Route::get('caidalibre', ["as" => "temaCaida", "uses" => "StudentsController@contenidoCaida"]);
    Route::get('caida_objetivo', ["as" => "objetivoCaida", "uses" => "StudentsController@objetivoCaida"]);
    Route::get('caida_libre_cuestionario',["as" => "temaCaidaCuestionario", "uses" => "StudentsController@cuestionarioCaida"]);
    Route::get('cuestionario_caida_finalizado', "StudentsController@finalCaida");
     //-----------------------------------------------------------------------------------------//
    Route::get('circular_temario', ["as" => "temarioCircular", "uses" => "StudentsController@temarioCircular"]);
    Route::get('circular', ["as" => "temaCircular", "uses" => "StudentsController@contenidoCircular"]);
    Route::get('circular_objetivo', ["as" => "objetivoCircular", "uses" => "StudentsController@objetivoCircular"]);
    Route::get('movimiento_circular_cuestionario',["as" => "temaCircularCuestionario", "uses" => "StudentsController@cuestionarioCircular"]);
    Route::get('cuestionario_circular_finalizado', "StudentsController@finalCircular");
    //------------------------------------------------------------------------------------------------------------//
    Route::get('movimiento_uniforme_temario',["as" => "temaUniforme", "uses" => "StudentsController@temaUniforme"]);
    Route::get('movimiento_uniforme_objetivo',["as" => "temaUniformeObjetivo", "uses" => "StudentsController@objetivoUniforme"]);
    Route::get('movimiento_uniforme',["as" => "temaUniformeContenido", "uses" => "StudentsController@contenidoUniforme"]);
    Route::get('movimiento_uniforme_cuestionario',["as" => "temaUniformeCuestionario", "uses" => "StudentsController@cuestionarioUniforme"]);
    Route::get('cuestionario_mru_finalizado', "StudentsController@finalMRU");
    //-----------------------------------------------------------------------------------------//
    Route::get('movimiento_uniforme_acelerado_temario',["as" => "temaAcelerado", "uses" => "StudentsController@temaAcelerado"]);
    Route::get('movimiento_uniforme_acelerado_objetivo',["as" => "temaUniformeAceleradoObjetivo", "uses" => "StudentsController@objetivoUniformeAcelerado"]);
    Route::get('movimiento_uniforme_acelerado',["as" => "temaUniformeAceleradoContenido", "uses" => "StudentsController@contenidoUniformeAcelerado"]);
    Route::get('movimiento_uniforme_acelerado_cuestionario',["as" => "temaAceleradoCuestionario", "uses" => "StudentsController@cuestionarioUniformeAcelerado"]);
    Route::get('cuestionario_mrua_finalizado', "StudentsController@finalMRUA");
    //------------------------------------------------------------------------------------------//
    Route::get('movimiento_proyectiles_temario',["as" => "temaProyectiles", "uses" => "StudentsController@temaProyectiles"]);
    Route::get('movimiento_proyectiles_objetivo',["as" => "temaProyectilesObjetivo", "uses" => "StudentsController@objetivoProyectiles"]);
    Route::get('movimiento_proyectiles',["as" => "temaProyectilesContenido", "uses" => "StudentsController@contenidoProyectiles"]);
    Route::get('movimiento_proyectiles_cuestionario',["as" => "temaProyectilesCuestionario", "uses" => "StudentsController@cuestionarioProyectiles"]);
    Route::get('cuestionario_proyectiles_finalizado', "StudentsController@finalProyectiles");
    });


 Route::group(['prefix' => 'dependent', 'middleware' => 'dependent'], function () {
  Route::post('saveUrl','StudentsController@url');

  Route::get('user','StudentsController@indexDependiente');
 
  Route::get('posicionDependiente',["as" => "posicionDependiente", "uses" => "StudentsController@posicionDependiente"]);
  Route::get('cuestionarioPosicionDependiente',["as" => "cuestionarioPosicionDependiente", "uses" => "StudentsController@cuestionarioPosicionDependiente"]);
  Route::get('cuestionarioPosicionDependienteFinalizado', "StudentsController@finalPosicionDependiente");
  //------------------------------------------------------------------------------------------//
  Route::get('caidaDependiente',["as" => "caidaDependiente", "uses" => "StudentsController@caidaDependiente"]);
  //------------------------------------------------------------------------------------------------------------// 
  Route::get('circularDependiente',["as" => "circularDependiente", "uses" => "StudentsController@circularDependiente"]);
 //------------------------------------------------------------------------------------------------------------//
  Route::get('uniformeDependiente',["as" => "uniformeDependiente", "uses" => "StudentsController@uniformeDependiente"]);
 //-----------------------------------------------------------------------------------------------------------------//
  Route::get('aceleradoDependiente',["as" => "aceleradoDependiente", "uses" => "StudentsController@aceleradoDependiente"]);
//-----------------------------------------------------------------------------------------------------------------//
Route::get('proyectilesDependiente',["as" => "proyectilesDependiente", "uses" => "StudentsController@proyectilesDependiente"]);
});

  Route::get('perfil',["as" => "perfil", "uses" => "StudentsController@perfil"]);

  Route::get('edit',["as" => "editarE", "uses" => "StudentsController@edit"]);
  Route::put('update/{id}',["as" => "cargarEstudiante", "uses" => "StudentsController@update"]);
});

Route::group(['prefix' => 'teacher', 'middleware' => 'teacher'], function () {
  Route::get('user','TeacherController@index');
    
  Route::get('edit',["as" => "editarD", "uses" => "TeacherController@edit"]);
  Route::put('update/{id}',["as" => "cargarDocente", "uses" => "TeacherController@update"]);
  Route::get('crear_EstudianteT',["as" => "crearEstudianteT", "uses" => "TeacherController@crearEstudianteT"]);
  Route::post('registro_EstudianteT',["as" => "registroET", "uses" => "TeacherController@registroEstudianteT"]);
  Route::get('consultarU',["as" => "consultarU", "uses" => "TeacherController@consultarU"]);
});

Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');

Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');
