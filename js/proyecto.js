function validaInfo(){
    let datos = new Object();

    var nombre = document.getElementById("nombre").value;  //Valor de mi input
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var selector = document.getElementById("selector").value;
    var txtarea = document.getElementById("txtarea").value;

    if(nombre.length < 3){
        document.getElementById("alertNombre").innerText = "**Ingrese su nombre**";
    }else{
        document.getElementById("alertNombre").innerText = "";
        datos["Nombre"] = nombre;
    }

    if(email.length > 0){
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)){
            document.getElementById("alertCorreo").innerText = "**Ingrese un correo valido**";
        }else{
            document.getElementById("alertCorreo").innerText = "";
            datos["Correo"] = email;
        }
    }else{
        document.getElementById("alertCorreo").innerText = "**El correo es obligatorio**";
    }

    if(telefono.length < 8){
        document.getElementById("alertTel").innerText = "**El teléfono es invalido**";
    }else{
        document.getElementById("alertTel").innerText = "";
        datos["Teléfono"] = telefono;
    }

    if(selector == 0){
        document.getElementById("alertSelect").innerText = "**Seleccione una opción**";
    }else{
        document.getElementById("alertSelect").innerText = "";
        datos["Selector"] = selector;
    }

    console.log(datos);
}