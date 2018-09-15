<?php namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateUserRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
			'name' => 'min:4|max:120|required',
		    'password' => 'min:4|max:120|required',
		    'email' => 'min:4|max:250|required|unique:users',
		];

	}


public function messages()
{
    return [
        'name.required' => 'Agrega tu nombre',
	    'name.min' =>'El nombre no puede ser menor a :min caracteres.',
	    'name.max' =>'El nombre no puede ser mayor a :max caracteres.',
	    'password.required' => 'Agrega una contraseña.',
	    'password.min' => 'La contraseña no puede ser menor a :min caracteres.',
	    'password.max' => 'La contraseña no puede ser mayor a :max caracteres.',
	    'email.unique' => 'El correo ya está registrado.',
	    'email.required' => 'Agrega un correo.',
	    'email.min' => 'El correo no puede ser menor a :min caracteres.',
	    'email.max' => 'El correo no puede ser mayor a :max caracteres.',
    ];
}

}
