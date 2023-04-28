const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}



function handleToDoSunmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSunmit);