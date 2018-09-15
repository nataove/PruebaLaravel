<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use App\Subject;
use App\Questionnaire;

class AddQuestionnairesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('questionnaires', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('question');
			$table->string('answer');
			$table->string('type');
			$table->string('image');
			$table->integer('subject_id')->unsigned();
			$table->foreign('subject_id')->references('id')->on('subjects');

			$table->timestamps();
		});


		//-------------------------------------MRU----------------------------------------
			$mru = new Questionnaire;
	        $mru->question = '¿En el movimiento rectilíneo uniforme se cumple?';
	        $mru->answer = 'Desplazamiento y distancia recorrida en tiempo iguales. - La aceleración aumenta. - La velocidad de la partícula disminuye proporcional al tiempo.';
	        $mru->type = 'Selección';
	        $subject = Subject::find(2);
	        $mru->subject()->associate($subject);
	        $mru->save();

	    //----------------------------------------------------------------------------------
	        $mru = new Questionnaire;
	        $mru->question = '¿Un cuerpo se mueve con una velocidad de 12km/h. Calcular la distancia que recorre en 2 horas?';
	        $mru->answer = '24km';
	        $mru->image = 'auto.gif';
	        $mru->type = 'Completar';
	        $subject = Subject::find(2);
	        $mru->subject()->associate($subject);
	        $mru->save();

	    //----------------------------------------------------------------------------------
	        $mru = new Questionnaire;
	        $mru->question = 'En un movimiento rectilíneo uniforme, la gráfica velocidad - tiempo es:';
	        $mru->answer = 'grafVel1.png - grafVel2.png - grafVel3.png - grafVel4.png';
	        $mru->type = 'SeleccionarImage';
	        $subject = Subject::find(2);
	        $mru->subject()->associate($subject);
	        $mru->save();

	    //----------------------------------------------------------------------------------
	        $mru = new Questionnaire;
	        $mru->question = 'Un movimiento es rectilíneo uniforme cuando su velocidad es constante y además su trayectoria es una recta';
	        $mru->answer = 'Verdadero';
	        $mru->type = 'Falso o verdadero';
	        $subject = Subject::find(2);
	        $mru->subject()->associate($subject);
	        $mru->save();

	    //----------------------------------------------------------------------------------
	        $mru = new Questionnaire;
	        $mru->question = 'La velocidad de -5m/seg en un MRU significa que';
	        $mru->answer = 'El cuerpo se devuelve 5m en un segundo. - El cuerpo avanza -5m en un segundo. - El cuerpo avanza 5m en un segundo. - El cuerpo se devuelve -5m en un segundo.';
	        $mru->type = 'Selección';
	        $subject = Subject::find(2);
	        $mru->subject()->associate($subject);
	        $mru->save();




	    //---------------------------------------------------------------------------------------
	    //-------------------------------------Caída libre----------------------------------------
	        $caida = new Questionnaire;
	        $caida->question = '¿En qué circunstancias una pluma y un balín caerán al mismo tiempo?';
	        $caida->answer = 'En el vacío y al mismo tiempo. - Si se sueltan al mismo tiempo en otro planeta. - Si se sueltan desde la misma altura.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = 'Cuando queremos saber la posición de un proyectil, ¿qué variables debemos calcular?';
	        $caida->answer = 'Las variables "x" e "y". - Las variables velocidad angular y frecuencia angular. - Variables posición y tiempo. - El tiempo de ascenso y la altura máxima.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = '¿Una persona puede pesar lo mismo en el planeta tierra que en el planeta marte?';
	        $caida->answer = 'No, será distinto ya que los planetas tienen masa  y graved distinta. - Sí, ya que los planetas tienen masa y gravedad igualdad. - Sí, porque la gravedad es la misma. - No, porque se aumenta de peso el cuerpo.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = '¿La gravedad cero es cuando no existe la presencia de gravedad?';
	        $caida->answer = 'Verdadero';
	        $caida->type = 'Falso o verdadero';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = 'La velocidad en el punto mas alto de un cuerpo que se lanza verticalmente hacia arriba es igual a cero';
	        $caida->answer = 'Verdadero';
	        $caida->type = 'Falso o verdadero';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = '¿Qué relación hay en el tiempo que un cuerpo es lanzado verticalmente hacia arriba, alcanza su maxima altura y el tiempo que tarda al pasar por el punto de donde fue lanzado?';
	        $caida->answer = 'El tiempo es igual. - El tiempo es mayor. - El tiempo es menor.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = 'Se deja caer una pelota desde lo mas alto de la torre de la ciudad de Tuluá Valle del Cauca, la pelota llega en 3 segundos al suelo, ¿Qué velocidad llega al suelo y cuál es la altura de la torre?';
	        $caida->answer = 'V = -29.4m/s y Y = -44.1m. - V = -30.4m/s y Y = -35.1m. - V = 29.4m/s y Y = 30.1m. - V = 35.4m/s y Y = 35.1m.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = 'Una roca se deja caer desde lo alto de un puente. Si la roca llega al suelo con una velocidad de 29.4m/s, ¿Cuál es el tiempo en llegar al suelo?';
	        $caida->answer = 't = 3s. - t = 9s. - t = 15s. - t = 10s.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = 'Una roca se deja caer desde lo alto de un puente. Si la roca llega al suelo con una velocidad de 29.4 m/s, ¿Cuál es la altura del puente?';
	        $caida->answer = 'Y = -44.1m. - Y = -50.1m. - Y = 60.5m. - Y = -43.5m.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        $caida = new Questionnaire;
	        $caida->question = '¿Qué edificio implemento Galileo Galilei?';
	        $caida->answer = 'La torre de Pisa. - Torre Eiffel.';
	        $caida->type = 'Selección';
	        $subject = Subject::find(4);
	        $caida->subject()->associate($subject);
	        $caida->save();

	        //---------------------------------------------------------------------------------------
	    //-------------------------------------Movimiento Circular----------------------------------------
	        $circular = new Questionnaire;
	        $circular->question = 'Una rueda de un automovil da 240 vueltas en un minuto. Selecciona la frecuencia y el periodo';
	        $circular->answer = 'f = 4'.htmlspecialchars("s<sup>-1</sup>").'; T = 0.25s. - f = 3'.htmlspecialchars("s<sup>-1</sup>").'; T = 0.30s. - f = 2'.htmlspecialchars("s<sup>-1</sup>").'; T = 0.27s.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'Un ciclista recorre 5,4 km en 15 min a velocidad constante. Si el diámetro de las ruedas de su bicicleta es de 80 cm, selecciona la velocidad angular de las ruedas.';
	        $circular->answer = '15 rad/s. - 20 rad/s. - 10 rad/s. - 9 rad/s.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'El tiempo que demora un objeto en completar una vuelta en un movimiento circular se llama';
	        $circular->answer = 'Periodo';
	        $circular->type = 'Completar';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = ' Para un movimiento circular uniforme, el objeto debe experimentar una aceleración dirigida ______________________';
	        $circular->answer = 'Radial hacia adentro';
	        $circular->type = 'Completar';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'El periodo de rotación de la tierra expresado en segundos (Pista: La rotación de la tierra se demora 24 horas)';
	        $circular->answer = '86400. - 85000. - 3600. - 42000.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = '¿La velocidad propia de la partícula cuya magnitud es constante se denomina velocidad lineal?';
	        $circular->answer = 'Verdadero';
	        $circular->type = 'Falso o verdadero';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'Un cuerpo con Movimiento Circular Uniforme lleva una velocidad angular de 15 rad/s. Cuando han trancurrido 15s, cuál sería su velocidad:';
	        $circular->answer = '225 radianes. - 230 radianes. - 430 radianes. - 425 radianes.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'Dos cuerpos se mueven con Movimiento Circular Uniforme, ¿Qué se necesita para que vayan con la misma rapidez?';
	        $circular->answer = 'Tienen que dar las mismas vueltas en el mismo tiempo. - Tienen que partir desde el mismo punto. - Tienen que tener la misma velocidad angular. - Deben tener la misma frecuencia angular.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();

	        $circular = new Questionnaire;
	        $circular->question = 'La rueda de una bicicleta tiene 30 cm de radio y gira uniformemente a razon de 25 vueltas por minuto, ¿Cuál es su velocidad angular, en rad/s?';
	        $circular->answer = '2.62 rad/s. - 2.52 rad/s. - 3.00 rad/s. - 2.45 rad/s.';
	        $circular->type = 'Selección';
	        $subject = Subject::find(6);
	        $circular->subject()->associate($subject);
	        $circular->save();


		Schema::create('questionnaire_student', function(Blueprint $table){
			$table->integer('student_id')->unsigned();
			$table->integer('questionnaire_id')->unsigned();
			
			$table->foreign('student_id')->references('user_id')->on('students')->onDelete('cascade');
			$table->foreign('questionnaire_id')->references('id')->on('questionnaires')->onDelete('cascade');

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
		Schema::drop('questionnaires');
	}

}
