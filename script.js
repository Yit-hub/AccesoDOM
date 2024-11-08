/*
Modificar el título principal al cargar la página: Cuando la página se cargue
completamente, cambia el texto del <h1 id="tituloPrincipal"> a
"Bienvenido al gestor interactivo de tareas".
*/
document.addEventListener("DOMContentLoaded", function () {

    const TITULO = document.getElementById("tituloPrincipal");
    TITULO.textContent = "Bienvenido al gestor interactivo de tareas";

    /**
     * Actualizar mensaje de bienvenida:
    ■ Al hacer clic en el botón btnActualizarNombre, captura el valor
    del inputNombre y actualiza el contenido de mensajeBienvenida
    con el mensaje "Bienvenido, [Nombre]". Cambia el color del texto de
    bienvenida según el color seleccionado en el campo colorUsuario.
     */
    const BTNACTUALIZARNOMBRE = document.getElementById("btnActualizarNombre");

    BTNACTUALIZARNOMBRE.addEventListener("click", function (event) {
        event.preventDefault();
        const NOMBRE = document.getElementById("inputNombre").value;
        const MENSAJEBIENVENIDA = document.getElementById("mensajeBienvenida");
        const COLOR = document.getElementById("colorUsuario").value;
        switch (COLOR) {
            case "rojo":
                MENSAJEBIENVENIDA.style.color = "red";
                break;
            case "azul":
                MENSAJEBIENVENIDA.style.color = "blue";
                break;
            case "verde":
                MENSAJEBIENVENIDA.style.color = "green";
                break;
            case "amarillo":
                MENSAJEBIENVENIDA.style.color = "yellow";
                break;
            default:
                MENSAJEBIENVENIDA.style.color = "black";
        }


        MENSAJEBIENVENIDA.textContent = "Bienvenido, " + NOMBRE;
    });
});
/**
 * Agregar nuevas tareas a la lista:
■ Al hacer clic en el botón btnAgregarTarea, agrega un nuevo
elemento <li> a listaTareas con el texto ingresado en
inputTarea. Asegúrate de que el campo inputTarea no esté
vacío antes de añadir la tarea.
■ Cada nueva tarea debe tener un botón "Eliminar" al lado que permita
eliminar esa tarea de la lista.
 */

document.addEventListener("DOMContentLoaded", function () {

    //const TAREA = document.getElementById("inputTarea");
    const BTONAGREGARTAREA = document.getElementById("btnAgregarTarea");

    BTONAGREGARTAREA.addEventListener("click", function (event) {

        event.preventDefault();
        const LISTA = document.getElementById("listaTareas");
        const NUEVALISTA = document.createElement("li");
        const contenido = document.createTextNode(document.getElementById("inputTarea").value);
        
        //if (contenido.trim() === "") return;


        NUEVALISTA.appendChild(contenido);
        LISTA.appendChild(NUEVALISTA);

        const BOTONELIMINAR = document.createElement("button");
        BOTONELIMINAR.textContent = "Eliminar tarea";
        


        LISTA.appendChild(BOTONELIMINAR);

        BOTONELIMINAR.addEventListener("click", function () {
            if (LISTA.children.length > 0) {
                LISTA.removeChild(NUEVALISTA);
            }
        });
        document.getElementById("inputTarea").value = "";
    });



});

