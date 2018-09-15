<h2>Hola</h2>
Hemos recibido un mensaje en el que pides restablecer tu contraseña:
<br><br>
Si solicitaste esta petición, haz click <b> <a href="{{ url('password/reset/'.$token) }}"> aquí!</a>
</b><br>
Si el link no funciona, copia y pega en tu navegador la siguiente dirección: {{ url('password/reset/'.$token) }}<br>
Si no realizaste esta petición puede ignorar este correo.