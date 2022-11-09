let tasks = []
console.log(tasks)
document.addEventListener('DOMContentLoaded', function (){ 
        document.querySelector('button').disabled = true
        document.querySelector('input').onkeyup = () => {
            if(document.querySelector('input').value.length > 0){
                document.querySelector('button').disabled = false;  
            }else{
               document.querySelector('button').disabled = true; 
            }
        }

})
const division = document.getElementById('tasks')
function addNewTask(){
    //tomar la informacion que esta en #input y agregarla a la variable tasks
    const text = document.querySelector('#input').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    //document.querySelector('#newTasks').append(li);
    document.querySelector('input').value = '';
    document.querySelector('button').disabled = true;
    tasks.push(text) 
    
    tasks.forEach((tarea) => {
    const div = document.createElement('div')
    div.classList.add('tarea')
    div.innerHTML = `
    <h2>${tarea}</h2>
    <button>x</button>
    `
    division.appendChild(div)

})
}

