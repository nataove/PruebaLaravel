<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\Administrator;
use App\Student;
use App\Teacher;
use Illuminate\Http\Request;
use Auth;
use App\SaveUrl;

class LoginController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
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
	public function store(Request $request){
		$email = $request->emailL;
		$password = $request->passwordL;

		if(Auth::attempt(['email' => $email, 'password' => $password])){
			$msg = array(
				'status' => 'success',
				'message' => 'Login Successful'
				);
			$user = User::where('email', $email)->first();
			$user_id = $user->id;
			$student = Student::where('user_id', $user_id)->count();
			$admin = Administrator::where('user_id', $user_id)->count();
			$teacher = Teacher::where('user_id', $user_id)->count();
			$url = "";
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
			return response()->json(array('response' => 'success', 'url' => $url, 'html'=>$returnHTML));
		}
		else{
			$msg = array(
				'response' => 'error',
				'message' => 'Login Fail',
				'email' => $email,
				'password' => $password
				);
			return response()->json($msg);
		}
		//return $request->all();
	}

	public function logout () {
    //logout user
    auth()->logout();
    // redirect to homepage
    return redirect('/');
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
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
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
