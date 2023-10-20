// Actualizar el href del "botón" Volver Atrás.
document.addEventListener("DOMContentLoaded", () => {
  // Obtener el elemento <a>
  const link = document.querySelector("#btnVolver");
  // Asigna la url almacenada en el localstorage. Si no hay entoces asigna la url completa.
  const url = localStorage.getItem("url") || "libros.html?generos=aventure,mistery,nature,love";
  link.setAttribute("href", url);
});

// *******************************Seccion seleccion_libros para traer los parametros al html*******************

function datosLibroSeleccionado() {
    // Recupera los datos del libro desde los parámetros de consulta en la URL y muestra en la página
    const urlParams = new URLSearchParams(window.location.search);
    const titulo = urlParams.get('titulo');
    const autor = urlParams.get('autor');
    const genero = urlParams.get('genero');
    const portada = urlParams.get('portada');
    // Muestra los detalles en la página
    document.getElementById('titulo').textContent = titulo;
    document.getElementById('autor').textContent = autor;
    document.getElementById('genero').textContent = (genero == "aventure") ? "Aventura" : (genero == "mistery") ? "Misterio" : (genero == "nature") ? "Naturaleza" : "Romance";
    document.getElementById('portada').src = portada;
  }

//se llama a la funcion para cargar los datos que voy a utilizar para el libro seleccionado
datosLibroSeleccionado()