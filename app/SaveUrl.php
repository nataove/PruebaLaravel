<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class SaveUrl extends Model {

	protected $table = 'save_urls';

	protected $fillable = ['student_id', 'url', 'slide'];

	public function student(){
  		return $this->belongsTo('App\Student');
	}

}
