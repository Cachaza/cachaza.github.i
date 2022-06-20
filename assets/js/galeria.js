
function filtrarFotos(c) {
  var x, i;
  x = document.getElementsByClassName("fotografia");
  if (c == "all") c = "";
  // Como todas las fotografias tinen display:block, por defecto en el css si les añadimos la clase mostrar a los elementos que les toque por el filtro, aquellos que no esten en dicho filtro se les quitara, se mostraran aquellas que lo tengan
  for (i = 0; i < x.length; i++) {
    quitarClase(x[i], "mostrar"); 
    if (x[i].className.indexOf(c) > -1) anadirClase(x[i], "mostrar");
  }
}

// añadir clase para mostrar elemento
function anadirClase(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Quitar de todas las clases mostrar que se encuentra al final
function quitarClase(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



