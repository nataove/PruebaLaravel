<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrator extends Model {

	protected $table = 'administrators';

	protected $fillable = ['user_id', 'type'];

	public function user(){
        return $this->belongsTo('App\User');
    }

    public function teachers(){
        return $this->hasMany('App\Teacher');
    }

}
