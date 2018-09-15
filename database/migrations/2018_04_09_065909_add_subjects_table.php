<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use App\Subject;

class AddSubjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('subjects', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->timestamps();
		});

		//--------------------Temas----------------------------------------
		$sub = new Subject;
        $sub->name = 'Posición, desplazamiento, velocidad, aceleración';
        $sub->save();

        $sub = new Subject;
        $sub->name = 'Movimiento Rectilíneo Uniforme';
        $sub->save();

        $sub = new Subject;
        $sub->name = 'Movimiento Rectilíneo Uniforme Variado';
        $sub->save();

        $sub = new Subject;
        $sub->name = 'Caída Libre';
        $sub->save();

        $sub = new Subject;
        $sub->name = 'Movimiento de Proyectiles';
        $sub->save();

        $sub = new Subject;
        $sub->name = 'Movimiento Circular';
        $sub->save();

		Schema::create('student_subject', function(Blueprint $table){
			$table->integer('student_id')->unsigned();
			$table->integer('subject_id')->unsigned();
			$table->integer('note');
			
			$table->foreign('student_id')->references('user_id')->on('students')->onDelete('cascade');
			$table->foreign('subject_id')->references('id')->on('subjects')->onDelete('cascade');

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('subjects');
	}

}
