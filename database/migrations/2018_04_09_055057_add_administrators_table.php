<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAdministratorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('administrators', function(Blueprint $table)
		{
			$table->integer('user_id')->unsigned();
			$table->string("type");
			
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');;
			
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
		Schema::drop('administrators');
	}

}
