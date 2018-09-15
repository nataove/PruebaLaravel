<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Questionnaire extends Model {

	protected $table = 'questionnaires';

	protected $fillable = ['question', 'answer', 'type', 'image', 'subject_id'];

	public function subject(){
        return $this->belongsTo('App\Subject');
    }

    public function students(){
    	return $this->belongsToMany('App\Student');
    }
}
