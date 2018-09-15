<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Admin;
use App\Teacher;
use App\Http\Requests\CreateUserRequest;
use Auth;
use App\Subject;
use App\Questionnaire;

class AdminController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('admin.inicio');
	}
    
    public function crearEstudiante()
	{
		return view('admin.estudianteRegistrar');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return view('admin.registro');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(CreateUserRequest $request)
	{
        $user = new User($request->all());
		$user->password = bcrypt($request->password);
		$email =$request->email;
		$password=$request->password;
		
		$user->image = "icono.png";
		
		$user->save();

		$teacher = new Teacher;
		$teacher->user_id = $request->id;
		$teacher->type = 'Docente';
        //$teacher->administrator_id = $request->id;
		$user->teacher()->save($teacher);
        
        return redirect()->back()->with('message', 'Docente Registrado!');

		//Auth::attempt(['email' => $email, 'password' => $password]);
		//	$returnHTML = view('admin.inicio')->with('user', $user);
			//return response()->json(array('success' => true, 'url' => 'teacher/user', 'html'=>$returnHTML));
		
		//$returnHTML = view('admin.registro',['user'=> $user])->render();// or method that you prefere to return data + RENDER is the key here
        //return response()->json(array('success' => true, 'html'=>$returnHTML) );
        
		
	}
    
        public function registroEstudiante(CreateUserRequest $request)
	{
        $user = new User($request->all());
		$user->password = bcrypt($request->password);
		$email =$request->email;
		$password=$request->password;
		
		$user->image = "icono.png";
		
		$user->save();

		$student = new Student;
		$student->user_id = $request->id;
		$student->type = 'Estudiante';
        //$teacher->administrator_id = $request->id;
		$user->student()->save($student);
        
        return redirect()->back()->with('message', 'Estudiante Registrado!');

		//Auth::attempt(['email' => $email, 'password' => $password]);
		//	$returnHTML = view('admin.inicio')->with('user', $user);
			//return response()->json(array('success' => true, 'url' => 'teacher/user', 'html'=>$returnHTML));
		
		//$returnHTML = view('admin.registro',['user'=> $user])->render();// or method that you prefere to return data + RENDER is the key here
        //return response()->json(array('success' => true, 'html'=>$returnHTML) );
        
		
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
    	return view('admin.adminEditar')->with('user', $user);

    }
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request, $id)
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


	public function registrarCuestionario(){
		$subjects = Subject::lists('name');
		return view('admin.registrarCuestionario')->with('subjects', $subjects);
	}
	
	public function cuestionarioR(Request $request){
		$pregunta = new Questionnaire;
		$pregunta->question = $request->pregunta;
		$tema = '';
		$subject = Subject::find(1);
		if($request->tema == "Posición, desplazamiento, velocidad, aceleración"){
		    	$subject = Subject::find(1);
		    	$tema = "conceptos";
		}
		else if($request->tema == "Movimiento Rectilíneo Uniforme"){
		  	$subject = Subject::find(2);
		   	$tema = "mru";
		}
		else if($request->tema == "Movimiento Rectilíneo Uniforme Variado"){
		  	$subject = Subject::find(3);
		   	$tema = "mrua";
		}
		else if($request->tema == "Caída Libre"){
		   	$subject = Subject::find(4);
		  	$tema = "caidaLibre";
		}
		else if($request->tema == "Movimiento de Proyectiles"){
		   	$subject = Subject::find(5);
		   	$tema = "proyectil";
		}
		else if($request->tema == "Movimiento Circular"){
		  	$subject = Subject::find(6);
		  	$tema = "circular";
		}

		if($request->file('image')){
			$file = $request->file('image');
			$name = 'cuestionario_' . time() . '.' . $file->getClientOriginalExtension();
			$path = public_path() . '/images/cuestionario/'.$tema.'/';
			$file->move($path, $name);
			$pregunta->image = $name;
		}
		
		if(($request->tipo == "Falso o verdadero") or ($request->tipo == "Completar")){
			$pregunta->answer = $request->respuesta;
		    $pregunta->type = $request->tipo;
		}

		else if($request->tipo == "Selección" ){
		    if($request->tipoRespuestaCompletar == "texto"){
		    	$pregunta->type = "Selección";
			    $rc = $request->opcionCorrecta;
			    $ri1 = $request->opcionIn2;
			    $ri2 = $request->opcionIn3;
			    $ri3 = $request->opcionIn4;
				$r=$rc.'. - '.$ri1.'.';
				if(strlen($ri2)>0){
					$r=$r.' - '.$ri2.'.';
				}
				if(strlen($ri3)>0){
					$r=$r.' - '.$ri3.'.';
				}
				$pregunta->answer = $r;
			}

			else if($request->tipoRespuestaCompletar == "imagen"){
		    	$pregunta->type = "SeleccionarImage";
		    	
		    	$respImage ='';
				$file1 = $request->file('imageCorrecta');
				$name1 = 'respuesta_' . time() . '.' . $file1->getClientOriginalExtension();
				$path1 = public_path() . '/images/cuestionario/'.$tema.'/';
				$file1->move($path1, $name1);
				$respImage = $name1;

				$file2 = $request->file('imageIncorrecta1');
				$name2 = 'respuesta_' . time() . '.' . $file2->getClientOriginalExtension();
				$path2 = public_path() . '/images/cuestionario/'.$tema.'/';
				$file2->move($path2, $name2);
				$respImage = $respImage.' - '.$name2;

				if($request->file('imageIncorrecta2')){
					$file3 = $request->file('imageIncorrecta2');
					$name3 = 'cuestionario_' . time() . '.' . $file3->getClientOriginalExtension();
					$path3 = public_path() . '/images/cuestionario/'.$tema.'/';
					$file3->move($path3, $name3);
					$respImage = $respImage.' - '.$name3;
				}

				if($request->file('imageIncorrecta3')){
					$file4 = $request->file('imageIncorrecta3');
					$name4 = 'cuestionario_' . time() . '.' . $file4->getClientOriginalExtension();
					$path4 = public_path() . '/images/cuestionario/'.$tema.'/';
					$file4->move($path4, $name4);
					$respImage = $respImage.' - '.$name3;
				}
		    	$pregunta->answer = $respImage;
		    }
		}


		$pregunta->subject()->associate($subject);
		$pregunta->save();			

		return redirect()->back()->with('message', 'Pregunta Registrada!');
	}
}
