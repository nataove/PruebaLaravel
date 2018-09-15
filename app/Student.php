<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model {

	protected $table = 'students';

	protected $fillable = ['user_id', 'type', 'progress', 'type_Style', 'teacher_id'];

	public function user(){
        return $this->belongsTo('App\User');
    }

    public function teacher(){
        return $this->belongsTo('App\Teacher');
    }

    public function subjects(){
    	return $this->belongsToMany('App\Subject');
    }

    public function questionnaires(){
        return $this->belongsToMany('App\Questionnaire');
    }

    public function saveUrl() {
        return $this->hasOne('App\SaveUrl');
    }
}
