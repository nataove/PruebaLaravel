<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\PasswordBroker;
use Illuminate\Foundation\Auth\ResetsPasswords;


use Illuminate\Http\Request;
use App\User;
use App\Administrator;
use App\Student;
use App\Teacher;
use Auth;

class PasswordController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Password Reset Controller
	|--------------------------------------------------------------------------
	|
	| This controller is responsible for handling password reset requests
	| and uses a simple trait to include this behavior. You're free to
	| explore this trait and override any methods you wish to tweak.
	|
	*/

	use ResetsPasswords;
		protected function getEmailSubject()
	{
		return isset($this->subject) ? $this->subject : 'Restablecer contraseña';
	}

	public function postReset(Request $request)
	{
		$this->validate($request, [
			'token' => 'required',
			'email' => 'required|email',
			'password' => 'required|confirmed',
		]);

		$credentials = $request->only(
			'email', 'password', 'password_confirmation', 'token'
		);

		$response = $this->passwords->reset($credentials, function($user, $password)
		{
			$user->password = bcrypt($password);

			$user->save();

			$this->auth->login($user);
		});

		switch ($response)
		{
			case PasswordBroker::PASSWORD_RESET:
				return redirect($this->redirectPath());

			default:
				return redirect()->back()
							->withInput($request->only('email'))
							->withErrors(['email' => trans($response)]);
		}
	}

	public function getReset($token = null, Request $request)
	{
		if (is_null($token))
		{
			throw new NotFoundHttpException;
		}

		$dbTokens = \DB::table('password_resets')->get();
        $email = '';
        foreach($dbTokens as $dbToken) {
            if($dbToken->token==$token){
                $email = $dbToken->email;
                break;
            }
        }
		return view('auth.reset')->with(['token' => $token, 'email' => $email]);
	}

	public function redirectPath()
	{
		if (property_exists($this, 'redirectPath'))
		{
			return $this->redirectPath;
		}

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
				$url = 'student/test_estilo_congnitivo';
			}
			else{
				$returnHTML = view('student.inicio');
				$url = 'student/user';
			}	
		}
		else if($teacher>0){
			$returnHTML = view('teacher.inicio');
			$url = 'teacher/user';
		}

		return property_exists($this, 'redirectTo') ? $this->redirectTo : $url;
	}

	/**
	 * Create a new password controller instance.
	 *
	 * @param  \Illuminate\Contracts\Auth\Guard  $auth
	 * @param  \Illuminate\Contracts\Auth\PasswordBroker  $passwords
	 * @return void
	 */
	public function __construct(Guard $auth, PasswordBroker $passwords)
	{
		$this->auth = $auth;
		$this->passwords = $passwords;

		$this->middleware('guest');
	}

}
