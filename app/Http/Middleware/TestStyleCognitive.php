<?php namespace App\Http\Middleware;

use Closure;
use App\Student;
use App\User;

class TestStyleCognitive {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		$user_id = $request->user()->id;
		$stud = User::find($user_id)->student;
		if(is_null($stud->type_Style)){
			return $next($request);
		}
		else{
			return redirect()->to('/');
		}
	}

}
