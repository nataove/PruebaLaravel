<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Student;
use App\Questionnaire;
use App\Http\Requests\CreateUserRequest;
use App\Administrator;
use App\Teacher;
use App\SaveUrl;
use Auth;

class UsersController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('index');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$url ='';
		$user_id = Auth::user()->id;
		$student = Student::where('user_id', $user_id)->count();
		$admin = Administrator::where('user_id', $user_id)->count();
		$teacher = Teacher::where('user_id', $user_id)->count();
		if($admin>0){
			$returnHTML = view('admin.inicio');
			$url = 'admin/user';
			}
		else if($student>0){
			$stud = User::find($user_id)->student;
			if(is_null($stud->type_Style)){
				$returnHTML = view('student.testEstiloCognitivo');
				$url = 'student/test/test_estilo_congnitivo';
			}
			else{
				if($stud->type_Style=="IC"){
					$returnHTML = view('student.inicio');
					$url = 'student/independent/user';
				}
				else if($stud->type_Style=="DC"){
					if(SaveUrl::where('student_id', $user_id)->count()>0){
          					$url2 = SaveUrl::where('student_id', $user_id)->first();
          					$link =  $url2->url; 
          					if($link=='student/dependent/posicionDependiente'){
          						$returnHTML = view('student.perfilDependientePosicion');
                     			 $url = 'student/dependent/posicionDependiente';
          					}
          					else if($link=='student/dependent/caidaDependiente'){
          						$returnHTML = view('student.perfilDependienteCaidaLibre');
          						$url = 'student/dependent/caidaDependiente';
          					}
          					else if($link=='student/dependent/aceleradoDependiente'){
          						$returnHTML = view('student.perfilDependienteAcelerado');
          						$url = 'student/dependent/aceleradoDependiente';
          					}
          					else if($link=='student/dependent/proyectilesDependiente'){
          						$returnHTML = view('student.perfilDependienteProyectil');
          						$url = 'student/dependent/proyectilesDependiente';
          					}
          					else if($link=='student/dependent/uniformeDependiente'){
          						$returnHTML = view('student.perfilDependienteUniforme');
          						$url = 'student/dependent/uniformeDependiente';
          					}
          					else if($link=='student/dependent/circularDependiente'){
          						$returnHTML = view('student.perfilDependienteUniformeCircular');
          						$url = 'student/dependent/circularDependiente';
          					}
       					}
       					else{
       						$returnHTML = view('student.inicioDependiente');
                  			$url = 'student/dependent/user';
       					}
				}
			}
		}
		else if($teacher>0){
			$returnHTML = view('teacher.inicio');
			$url = 'teacher/user';
		}

		return redirect($url);
	}

	public function perfil(Request $request){
		
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(CreateUserRequest $request){	
		$user = new User($request->all());
		$user->password = bcrypt($request->password);
		$email =$request->email;
		$password=$request->password;

		if($request->file('image')){
			$file = $request->file('image');
			$name = 'usuario_' . time() . '.' . $file->getClientOriginalExtension();
			$path = public_path() . '/images/usuarios/';
			$file->move($path, $name);
			$user->image = $name;
		}
		else{
			$user->image = "icono.png";
		}

		$user->save();

		$student = new Student;
		$student->user_id = $request->id;
		$student->type = 'Estudiante';
		$user->student()->save($student);
       

		Auth::attempt(['email' => $email, 'password' => $password]);
		$returnHTML = view('student.testEstiloCognitivo')->with('user', $user);
		return response()->json(array('success' => true, 'url' => 'student/test/test_estilo_congnitivo', 'html'=>$returnHTML));
		
		//$returnHTML = view('admin.registro',['user'=> $user])->render();// or method that you prefere to return data + RENDER is the key here
        //return response()->json(array('success' => true, 'html'=>$returnHTML) );
	}
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
	{
		
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
    
//colocar el Sid
	public function edit()
	{
		
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
        
        
        
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

}
