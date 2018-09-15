<?php namespace App\Http\Middleware;
use App\Student;
use Closure;
class StudentRole {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next){
		$user_id = $request->user()->id;
		$student = Student::where('user_id', $user_id)->count();
		if($student>0){
		   return $next($request);
        }
        else{
    	    return redirect()->to('/');
        }
    }
}
