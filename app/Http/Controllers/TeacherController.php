<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Teacher;
use App\Student;
use App\Http\Requests\CreateUserRequest;
use Auth;




class TeacherController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('teacher.inicio');
	}
    
    public function crearEstudianteT()
	{
		return view('teacher.estudianteRegistrarT');
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
    
    public function registroEstudianteT(CreateUserRequest $request)
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
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
    public function edit(Request $id){
        
        
       //return 'Hola';
        $id = Auth::user()->id;
        $user = User::find($id);
    	return view('teacher.docenteEditar')->with('user', $user);
        

    }
	public function store(){	
		
	}
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
       //return redirect('/');
        return redirect()->back()->with('message', 'Datos actualizados!');
       // return back()->with('status','Datos cargados correctamente');
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
    
     public function consultarU(){
        $users = User::orderBy('id', 'ASC')-> paginate(5);
        $students = Student::all();
        

		
        return view('teacher.consultarU' , ['users' => $users])->with('students',$students);
    }

}
