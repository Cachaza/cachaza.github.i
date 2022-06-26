// Menu desplegable
var contadorMenu = 1;
function menu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.menu-dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-contenido");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//FUNCION PARA EL BOTON DE ARRIBA:

function subirArriba() {
  document.documentElement.scrollTop = 0;
}

// Fomulario
function checkForm(form) {
  var elentoform = form.getElementsByTagName('input');
  var todoOk = true;
  for (var i = 0; i < elentoform.length; i++) {
    // Cambio el style de todos los bordes por si el usuario ha tenido errores anteriormente y los ha sulucionado
    elentoform[i].style.border = "";
    // Compruebo que los campos no estén vacíos
    if (elentoform[i].value == " " || elentoform[i].value == "" || elentoform[i].value == null) {
      //añado css para indicar que campo es incorrecto
      elentoform[i].style.border = "2px solid red";
      //envio el cursor al apratado incorrecto
      elentoform[i].focus();
      todoOk = false;

    }
    
  
  }

  if (todoOk) {
    return true;
  } else{
    return false;
  }
}

