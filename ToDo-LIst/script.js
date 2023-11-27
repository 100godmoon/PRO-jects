let btn = document.getElementById("btn");

btn.addEventListener("click", createNewTask);
let num = 1;
let list = document.querySelector(".list");
function createNewTask() {
  let div = document.createElement("div");
  let newTask = document.createElement("textarea");
  let delbtn = document.createElement("button");
  newTask.innerHTML = "Hello" + num;
  num++;
  delbtn.innerHTML = "DELETE";
  newTask.classList.add("newTask");
  delbtn.classList.add("delbtn");
  div.appendChild(newTask);
  div.appendChild(delbtn);
  list.appendChild(div);

  delbtn.addEventListener("click", deleteTask);
}

function deleteTask(event) {
  // Access the parent div and remove it when the delete button is clicked
  let taskDiv = event.target.parentElement;
  taskDiv.remove();
}
