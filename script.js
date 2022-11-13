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

function addNewTask() {
  //tomar la informacion que esta en #input y agregarla a la variable tasks
  const text = document.querySelector("#input").value;
  document.querySelector("input").value = "";
  document.querySelector("button").disabled = true;
  tasks.push(text);


  let existe = tasks[tasks.length - 1];

  tasks.forEach((tarea) => {
    if (tarea === existe) {
      const div = document.createElement("div");
      div.classList.add("tarea");
      div.innerHTML = `
            <h2><li>${tarea}</li></h2>
            <button id="internalButton">x</button><br>
            `;
      division.appendChild(div);
    }
  });
  let close = document.querySelectorAll("#internalButton");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.style.opacity = 0;
      setTimeout(() => {
        close[i].parentElement.style.display = "none";
        close[i].parentElement.remove();
        eliminarTarea();
      }, 500);
    });
  }
}
const eliminarTarea = (tareita) => {
  const item = tasks.findIndex((tarea) => tarea === tareita);
  let indice = tasks.indexOf(item);
  tasks.splice(indice, 1);
};
