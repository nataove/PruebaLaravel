<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStudentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('students', function(Blueprint $table)
		{
			$table->integer('user_id')->unsigned();
			$table->string("type");
			$table->integer('progress')->nullable();
			$table->string("type_Style")->nullable();
			$table->integer('teacher_id')->unsigned()->nullable();

			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
			$table->foreign('teacher_id')->references('user_id')->on('teachers')->onDelete('cascade');
			
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
		Schema::drop('students');
	}

}
