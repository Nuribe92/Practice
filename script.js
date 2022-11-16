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
let tasks = [];
console.log(tasks);

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
const generateId = (text) =>{
    return text + Date.now()
}
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
function addNewTask() {
  //tomar la informacion que esta en #input y agregarla a la variable tasks
  const text = document.querySelector("#input").value;
  document.querySelector("input").value = "";
  document.querySelector("button").disabled = true;
    
    tasks.push(text);
    createTaskDiv(text);
    //quitarTask();
  };

const eliminarTarea = (tareita) => {
    const item = tasks.indexOf(tareita.value)
   console.log(item)
   tasks.splice(item, 1);
   const child = document.getElementById(tareita.id)
   const parent = document.getElementById("tasks")
   parent.removeChild(child) 
   console.log(child)
};

const removeAll = () => {
let parent = document.getElementById("tasks");
    parent.innerHTML = "";
    tasks.length = 0;
};


