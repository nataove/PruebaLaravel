<?php namespace App\Http\Middleware;

use Closure;
use App\Student;
use App\User;

class StyleDependent {

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
		if($stud->type_Style == "DC"){
			return $next($request);
		}
		else{
			return redirect()->to('/');
		}
	}

}
