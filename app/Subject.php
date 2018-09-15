<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model {

	protected $table = 'subjects';

	protected $fillable = ['name'];

	public function questionnaire(){
        return $this->hasOne('App\Questionnaire');
    }

    public function students(){
    	return $this->belongsToMany('App\Student');
    }

}
