//3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 

// Ejercicio 3: Lista de tareas
const btnAgregarTarea = document.getElementById("btnAgregarTarea");
const listaTareas = document.getElementById("listaTareas");

btnAgregarTarea.addEventListener("click", () => {
  const inputTarea = document.getElementById("inputTarea");
  const texto = inputTarea.value.trim();
  console.log("texto leído:", texto);

  if (texto === "") {
    alert("Escribí una tarea antes de agregar");
    return;
  }

  // Creo el elemento de la lista
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  // Texto de la tarea
  const span = document.createElement("span");
  span.textContent = texto;

  // Botón para eliminar esta tarea
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn btn-danger btn-sm";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  // Armo el li y lo agrego a la lista
  li.appendChild(span);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  // Limpio el input y vuelvo a enfocarlo
  inputTarea.value = "";
  inputTarea.focus();
});