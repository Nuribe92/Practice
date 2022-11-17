//esperamos a que el Dom se carge y luego ponemos el boton de submit en 
//si no hay nada en el input de lo contrario permitimos que se use
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").disabled = true;
  document.querySelector("input").onkeyup = () => {
    if (document.querySelector("input").value.length > 0) {
      document.querySelector("button").disabled = false;
    } else {
      document.querySelector("button").disabled = true;
    }
  };
});
//iniciamos un nuevo array, en 0
let tasks = [];
console.log(tasks);
//crear el div y le añades el texto que puso el usuario
const division = document.getElementById("tasks");
const createTaskDiv = (text) =>{
  const tarea = document.createElement("div");
      tarea.classList.add("tarea");
      tarea.id = generateId(text)
      tarea.innerHTML = text
      tarea.value = text;
      tarea.appendChild(createXButton(tarea))
      division.appendChild(tarea);
      
} 
//genera un Id nuevo Id para agregarlos el div y al boton de cierre
const generateId = (text) =>{
    return text + Date.now()
}
//crear un boton "x" que se añade al div y va a tener la funcionalidad de eliminar la tarea
const createXButton = (tarea) => {
  const removeButton = document.createElement("button");
  removeButton.id = generateId(tarea.value)
  removeButton.classList.add("botonInterno");
  removeButton.innerHTML = `x`
  removeButton.addEventListener("click", () =>{
   eliminarTarea(tarea);
  })
  return removeButton
}
//tomar la informacion que esta en #input y agregarla a la variable tasks
function addNewTask() {
  
  const text = document.querySelector("#input").value;
  document.querySelector("input").value = "";
  document.querySelector("button").disabled = true;
    
    tasks.push(text);
    createTaskDiv(text);
    //quitarTask();
  };
//busca el indice del elemento y luego con lo saca del array
const eliminarTarea = (tareita) => {
    const item = tasks.indexOf(tareita.value)
   console.log(item)
   tasks.splice(item, 1);
   const child = document.getElementById(tareita.id)
   const parent = document.getElementById("tasks")
   parent.removeChild(child) 
   console.log(child)
};
//vacia el div padre y pone la longitud del array en 0
const removeAll = () => {
let parent = document.getElementById("tasks");
    parent.innerHTML = "";
    tasks.length = 0;
};


