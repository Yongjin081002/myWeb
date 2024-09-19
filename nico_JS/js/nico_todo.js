const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const ToDoInput = toDoForm.querySelector("input");//toDoForm의 자식요소인 input을 가져옴

const toDos = [];
const TODOS_KEY = 'todos';

function deleteToDo(event){
    const li = event.target.parentElement; //li요소 하나를 지우기 위한 코드
    li.remove()
}   
function saveTodo(){
    //localStorage.setItem(TODOS_KEY,  JSON.stringify(toDos));   
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}


function sayHello() {
    console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null){
        const parsedToDos = JSON.parse(savedToDos);
        console.log(parsedToDos);
    }



function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = '';
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// const toDos = [];

// function saveToDos() {
// localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }
// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = newTodo;
//   const button = document.createElement("button");
//   button.innerText = "❌";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }
// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;
//   toDoInput.value = "";
//   toDos.push(newTodo);
//   paintToDo(newTodo);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   parsedToDos.forEach((item) => console.log("this is the turn of ", item));
// }