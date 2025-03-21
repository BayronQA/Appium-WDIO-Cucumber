# language: es
Característica: Inicio de sesión en la aplicación
  Como usuario de la aplicación
  Quiero poder iniciar sesión
  Para acceder a mi cuenta personal

  Escenario: Inicio de sesión exitoso
    Dado que estoy en la pantalla de inicio
    Cuando hago clic en el botón de Iniciar sesión
    Y ingreso mi nombre de usuario "<usuario>" e ingreso mi contraseña "<contraseña>"
    Y hago clic en el botón Iniciar sesión
    Entonces debo ver el mensaje que me diga que estoy logeado

  Ejemplos:
    | usuario              | contraseña       |
    | usuario1@ejemplo.com | contraseña1      |
    | usuario2@ejemplo.com | contraseña2      |