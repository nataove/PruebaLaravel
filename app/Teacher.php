<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model {

	protected $table = 'teachers';

	protected $fillable = ['user_id', 'type'];

	public function user(){
        return $this->belongsTo('App\User');
    }

    public function administrator(){
        return $this->belongsTo('App\User');
    }

    public function students(){
        return $this->hasMany('App\Student');
    }
}
