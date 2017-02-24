<!DOCTYPE html>
<html>
<head>
	<title>Mensajeria Fixter</title>
</head>
<body>

<?php
echo("Sistema de Mensajes FixTeR");
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tel=$_POST['tel'];
$mensaje = $_POST['mensaje'];
// $asunto=$_POST['asunto'];
$para = 'admin@fixter.org, contacto@fixter.org';
$titulo = 'MENSAJE NUEVO EN FIXTER.ORG';
$header = 'Enviado por: ' . $email;
$msjCorreo = "Nombre: $nombre\n Telefono: $tel\n E-Mail: $email\n Mensaje:\n $mensaje";

if (isset($_POST['fixter'])) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo'<script type="text/javascript">
alert("Tu mensaje ha sido enviado, Pronto nos comunicaremos contigo \n Quintaesencia Hotel Boutique.");
window.location="index.html";
</script>';

} else {
echo 'Falló el envio. INTENTE DE NUEVO PORFAVOR';
break;

}
}

?>

</body>
</html>

