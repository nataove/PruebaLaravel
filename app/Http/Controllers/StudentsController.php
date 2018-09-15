<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Teacher;
use App\Student;
use App\SaveUrl;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Support\Facades\Input;
use Auth;
use App\Questionnaire;
use Illuminate\Support\Facades\DB;

class StudentsController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('student.inicio');
	}

  public function indexDependiente()
  {
    return view('student.inicioDependiente');
  }

   
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
    public function edit(Request $id){
        $id = Auth::user()->id;
        $user = User::find($id);
        if(SaveUrl::where('student_id', $id)->count()>0){
    $url2 = SaveUrl::where('student_id', $id)->first();
    $link =  $url2->url; 
    $url3 =  explode("http://localhost:8000/student/", $link); 
    $url = $url3[1];
  }
  else{
    $url = 'dependent/posicionDependiente';
  }
    	return view('student.estudianteEditar')->with('user', $user)->with('urlCont', $url);

    }
	

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request,$id)
	{
		
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if($request->file('image')){
			$file = $request->file('image');
			$name = 'usuario_' . time() . '.' . $file->getClientOriginalExtension();
			$path = public_path() . '/images/usuarios/';
			$file->move($path, $name);
			$user->image = $name;
		}

        $user->save();
        return redirect()->back()->with('message', 'Datos actualizados!');
        
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
    
    
	public function destroy($id)
	{
		//
	}
    //-----------------------------------------------------//
    public function movimientoD(){
        return view('student.contenidoUniforme');
    }

   public function perfil(){
      $id = Auth::user()->id;
      $user = User::find($id);
        if(SaveUrl::where('student_id', $id)->count()>0){
          $url2 = SaveUrl::where('student_id', $id)->first();
          $link =  $url2->url; 
          $url3 =  explode("http://localhost:8000/student/", $link); 
          $url = $url3[1];
        }
        else{
          $url = 'dependent/posicionDependiente';
        }
        return view('student.estudiantePerfil')->with('urlCont', $url);;
  }
    public function temarioPosicion()
    {
        return view('student.temarioPosicion');
    }
    
    public function objetivoPosicion()
    {
        return view('student.objetivoPosicion');
    }
    
    public function contenidoPosicion()
    {
        return view('student.contenidoPosicion');
    }
    
    public function posicionDependiente(){
        $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/posicionDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/cuestionarioPosicionDependiente'){
            $slide = "1";
          }
          else{
            $slide ="12";
          }
        }
        else{
          $slide = '1';
        }
        return view('student.perfilDependientePosicion')->with('slide', $slide);
      }
    
    //-----------------------------------------------------//
    
    public function temarioCaida()
    {
        return view('student.temarioCaidaLibre');
    }
    
    public function objetivoCaida()
    {
        return view('student.objetivoCaidaLibre');
    }
    
    public function contenidoCaida()
    {
        return view('student.contenidoCaidaLibre');
    }
    
    public function caidaDependiente(){
       $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/caidaDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/posicionDependiente' || $link=='student/dependent/uniformeDependiente' || $link=='student/dependent/aceleradoDependiente'){
            $slide = "1";
          }
          else{
            $slide = "7";
          }
        }
        else{
          $slide = "1"; 
        }
        return view('student.perfilDependienteCaidaLibre')->with('slide', $slide);
        
    }
    
    //-----------------------------------------------------//
    
    public function temarioCircular()
    {
        return view('student.temarioMovimientoCircularUniforme');
    }
    
    public function objetivoCircular()
    {
        return view('student.objetivoMovimientoCircularUniforme');
    }
    
    public function contenidoCircular()
    {
        return view('student.contenidoMovimientoCircularUniforme');
    }
    
    public function circularDependiente(){
       $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/circularDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/posicionDependiente' || $link=='student/dependent/uniformeDependiente' || $link=='student/dependent/aceleradoDependiente' || $link=='student/dependent/caidaDependiente' || $link=='student/dependent/proyectilesDependiente'){
            $slide = "1";
          }
          else{
            $slide = "6";
          }
        }
        else{
          $slide = "1";
        }
        return view('student.perfilDependienteUniformeCircular')->with('slide', $slide);
    }
    
    //-----------------------------------------------------//
    
	public function temaUniforme()
	{
		return view('student.movimientoUniforme');
	}

	public function objetivoUniforme(){
		return view('student.objetivoUniforme');
	}

	public function contenidoUniforme(){
		return view('student.contenidoUniforme');
	}
   
    public function uniformeDependiente(){
      $user_id = Auth::user()->id;  
      $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=="student/dependent/uniformeDependiente"){
            $slide = $url2->slide;
          }
          else if($link=="student/dependent/posicionDependiente"){
            $slide = "1";
          }
          else{
            $slide = "7";
          }
        }
        else{
          $slide = '1'; 
        }
        return view('student.perfilDependienteUniforme')->with('slide', $slide);
    }

  //-----------------------------------------------------//

	public function temaAcelerado()
	{
		return view('student.movimientoUniformeAcelerado');
	}

  public function objetivoUniformeAcelerado(){
    return view('student.objetivoUniformeAcelerado');
  }

  public function contenidoUniformeAcelerado(){
    return view('student.contenidoUniformeAcelerado');
  }
    
  public function aceleradoDependiente(){
    $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/aceleradoDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/posicionDependiente' || $link=='student/dependent/uniformeDependiente'){
            $slide = "1";
          }
          else{
            $slide = "5";
          }
        }
        else{
          $slide = '1';
        }
        return view('student.perfilDependienteAcelerado')->with('slide', $slide);
  }

  //-----------------------------------------------------//

public function temaProyectiles()
  {
    return view('student.movimientoProyectiles');
  }

  public function objetivoProyectiles(){
    return view('student.objetivoProyectiles');
  }

  public function contenidoProyectiles(){
    return view('student.contenidoProyectiles');
  }
    
  public function proyectilesDependiente(){
    $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/proyectilesDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/posicionDependiente' || $link=='student/dependent/uniformeDependiente' || $link=='student/dependent/aceleradoDependiente' || $link=='student/dependent/caidaDependiente'){
            $slide = "1";
          }
          else{
            $slide = "7";
          }
        }
        else{
          $slide = "1"; 
        }
    return view('student.perfilDependienteProyectil')->with('slide', $slide);
  }

	public function testEstilo()
	{
		return view('student.testEstiloCognitivo');
	}

	public function explicacionTest()
	{
		return view('student.explicacionTest');
	}

	public function seccion1()
	{
		return view('student.seccion1Test');
	}

	public function seccion2()
  {
    $aciertoS1 = Input::get('aciertoC1');
    return view('student.seccion2Test')->with('aciertoS1', $aciertoS1);
  }

  public function seccion3()
  {
  $aciertoS1 = Input::get('aciertoC1');
    $aciertoS2 = Input::get('aciertoC2');
    return view('student.seccion3Test')->with('aciertoS1', $aciertoS1)->with('aciertoS2', $aciertoS2);
  }

	public function finalizarTest()
	{
		$aciertoS1 = Input::get('aciertoC1');
    $aciertoS2 = Input::get('aciertoC2');
    $aciertoS3 = Input::get('aciertoC3');
    $totalAciertos = (int)$aciertoS2+(int)$aciertoS3;

  $user_id = Auth::user()->id;  
  $student = User::find($user_id)->student;
//-------------------------------------------------------------------------------------------------------
  $users2 = DB::table('questionnaires')->select(DB::raw('*'))->where('subject_id', '=', 2)->get();
  $array = array();
  $totalMRU = Questionnaire::where('subject_id', 2)->count();
    foreach($users2 as $t){
      $array[] = $t->id;
    }
    $datos = array();
    $q = random_int(0, $totalMRU-1);
    $datos[0] = $q;

    $nn = 1;
    while($nn<4){
      $q2 = random_int(0, $totalMRU-1);
      if(!in_array($q2, $datos)){
        $datos[$nn] = $q2;
        $nn = $nn+1;
      }
    }

    for ($i=0; $i<count($datos) ; $i++) { 
      $user_id2 = Auth::user()->id; 
      $student2 = User::find($user_id2)->student;
      $student2->questionnaires()->attach($array[$datos[$i]], ['student_id' => $user_id2]);
    }

    //-------------------------------------------------------------------------------------------------------
  $users4 = DB::table('questionnaires')->select(DB::raw('*'))->where('subject_id', '=', 4)->get();
  $array4 = array();
  $totalCaida = Questionnaire::where('subject_id', 4)->count();
  foreach($users4 as $t4){
    $array4[] = $t4->id;
  }
  $datos4 = array();
  $q4 = random_int(0, $totalCaida-1);
  $datos4[0] = $q4;
  $nn4 = 1;
  while($nn4<6){
    $q24 = random_int(0, $totalCaida-1);
    if(!in_array($q24, $datos4)){
      $datos4[$nn4] = $q24;
      $nn4 = $nn4+1;
    }
  }
  for ($i=0; $i<count($datos4) ; $i++) { 
      $user_id4 = Auth::user()->id; 
      $student4 = User::find($user_id4)->student;
      $student4->questionnaires()->attach($array4[$datos4[$i]], ['student_id' => $user_id4]);
    }

     //-------------------------------------------------------------------------------------------------------
  $users6 = DB::table('questionnaires')->select(DB::raw('*'))->where('subject_id', '=', 6)->get();
  $array6 = array();
  $totalCircular = Questionnaire::where('subject_id', 6)->count();
  foreach($users6 as $t6){
    $array6[] = $t6->id;
  }
  $datos6 = array();
  $q6 = random_int(0, $totalCircular-1);
  $datos6[0] = $q6;
  $nn6 = 1;
  while($nn6<6){
    $q26 = random_int(0, $totalCircular-1);
    if(!in_array($q26, $datos6)){
      $datos6[$nn6] = $q26;
      $nn6 = $nn6+1;
    }
  }
  for ($i=0; $i<count($datos6) ; $i++) { 
      $user_id6 = Auth::user()->id; 
      $student6 = User::find($user_id6)->student;
      $student6->questionnaires()->attach($array6[$datos6[$i]], ['student_id' => $user_id6]);
    }


      if(is_null($student->type_Style)){
        if($totalAciertos>=1){
          Student::where('user_id', $user_id)->update(['type_Style' => 'IC']);
          $returnHTML = view('student.inicio');
        $url = 'student/independent/user';
    }
    else{
      Student::where('user_id', $user_id)->update(['type_Style' => 'DC']);
          $returnHTML = view('student.inicioDependiente');
        $url = 'student/dependent/user';
    }
  }
  return redirect($url);
  } 


    public function cuestionarioUniforme(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 2)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 2)->get();
      } 
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioMRU')->with('questions', $quest);
  }

  public function finalMRU(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 2)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 2)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }




  public function cuestionarioCaida(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 4)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 4)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioCaidaLibre')->with('questions', $quest);
  }

  public function finalCaida(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 4)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 4)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }


    public function cuestionarioCircular(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 6)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 6)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioCircular')->with('questions', $quest);
  }

  public function finalCircular(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 6)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 6)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }



   public function cuestionarioPosicion(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioPosicion')->with('questions', $quest);
  }
    
    public function cuestionarioPosicionDependiente(){
      $user_id = Auth::user()->id;  
        $slide = '';
        if(SaveUrl::where('student_id', $user_id)->count()>0){
          $url2 = SaveUrl::where('student_id', $user_id)->first();
          $link =  $url2->url; 
          if($link=='student/dependent/cuestionarioPosicionDependiente'){
            $slide = $url2->slide;
          }
          else if($link=='student/dependent/posicionDependiente'){
            $slide = "1";
          }
          else{
            $slide ="2";
          }
        }
        else{
          $slide = '1';
        }


     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioPosicionDependiente')->with('questions', $quest)->with('slide', $slide);
  }

  public function finalPosicion(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }
    
    public function finalPosicionDependiente(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 1)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }


  public function cuestionarioUniformeAcelerado(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 3)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 3)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioMRUA')->with('questions', $quest);
  }

  public function finalMRUA(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 3)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 3)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }

  public function cuestionarioProyectiles(){
     $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 5)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 5)->get();
      }
    }
    $quest = array();
    for ($i=0; $i<count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }

    return view('student.cuestionarioProyectiles')->with('questions', $quest);
  }

  public function finalProyectiles(){
    $array = array();
    $user_id = Auth::user()->id; 
    $questions = DB::table('questionnaire_student')->select(DB::raw('*'))->where('student_id', '=', $user_id)->get();
    foreach($questions as $t){
      $array[] = $t->questionnaire_id;
    }
    $qq = array();
    for ($i=0; $i <count($array) ; $i++) { 
      if(DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 5)->count()>0){
        $qq[] = DB::table('questionnaires')->select(DB::raw('*'))->where('id', '=', $array[$i])->where('subject_id', 5)->get();
      }
    }
    $quest = array();
    for ($i=0; $i <count($qq) ; $i++) { 
      $quest[] = $qq[$i][0];
    }
    $acierto = 0;
    for ($i=0; $i < count($quest); $i++) { 
      
        if($quest[$i]->type == "Completar" || $quest[$i]->type == "Falso o verdadero"){
          $a = strval($i+1);
          $r = Input::get($a);
          if($r == $quest[$i]->answer){
            $acierto = $acierto + 1;
          }
        }
        else if($quest[$i]->type == "Selección" || $quest[$i]->type == "SeleccionarImage"){
          $a = strval($i+1);
          $r = Input::get($a);
          $qp = explode(" - ", $quest[$i]->answer); 
          $correcta = $qp[0];
          if($r==$correcta){
             $acierto = $acierto + 1;
          }
        }
    }
dd($acierto);
  }

  public function url(Request $request)
    {
      $user_id = Auth::user()->id;  
      $student = User::find($user_id)->student;
      $qp = explode("student", $request->link);
      $l = "student".$qp[1]; 
       if(DB::table('save_urls')->select(DB::raw('*'))->where('student_id', '=', $user_id)->count()>0){
          SaveUrl::where('student_id', $user_id)->update(['url' => $l, 'slide'=> $request->nSlide]);
       }
       else{
        $url = new SaveUrl;
        $url->student_id = $user_id;
        $url->url = $l;
        $url->slide = $request->nSlide;
        $url->save();
       }

    }
}
