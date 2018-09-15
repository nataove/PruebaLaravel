<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTeachersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('teachers', function(Blueprint $table)
		{
			$table->integer('user_id')->unsigned();
			$table->string("type");
			$table->integer('administrator_id')->unsigned()->nullable();

			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
			$table->foreign('administrator_id')->references('user_id')->on('administrators')->onDelete('cascade');
			
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
		Schema::drop('teachers');
	}

}
