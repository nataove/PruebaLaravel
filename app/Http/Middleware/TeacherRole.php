<?php namespace App\Http\Middleware;
use App\Teacher;
use Closure;

class TeacherRole {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next){
		$user_id = $request->user()->id;
		$teacher = Teacher::where('user_id', $user_id)->count();

		if($teacher>0){
			   return $next($request);
            }
            else
            {
                return redirect()->to('/');
            }
		}
}
