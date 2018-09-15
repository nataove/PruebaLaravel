<?php namespace App\Http\Middleware;

use App\Administrator;
use Closure;

class AdminRole {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */

	public function handle($request, Closure $next){
		$user_id = $request->user()->id;
		$admin = Administrator::where('user_id', $user_id)->count();

		if($admin>0){
			   return $next($request);
            }
            else
            {
                return redirect()->to('/');
            }
		}
	
}

