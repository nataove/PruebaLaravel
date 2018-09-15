<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSaveUrlsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('save_urls', function(Blueprint $table)
		{
			$table->integer('student_id')->unsigned();
			$table->primary('student_id');
			$table->string('url');
			$table->string('slide');
			$table->timestamps();

			$table->foreign('student_id')->references('user_id')->on('students')->onDelete('cascade');
		});

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('save_urls');
	}

}
