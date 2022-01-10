/* eslint-disable */
import "bootstrap";
import "./style.css";

var allToDos = [];

const list = document.querySelector("#list");
let newToDo = document.querySelector("#todo-input");

const deleteToDo = index => {
  console.log(index);
  allToDos.splice(index, 1);
  console.log(allToDos);
};

const addToDo = () => {
  let str = "";
  allToDos.forEach((todo, index) => {
    str += `<li><strong>${todo}</strong> <button onclick="deleteToDo(${index})" type="button" class="delete"> x </button></li>`;
  });
  list.innerHTML = str;
  console.log(list);
};

newToDo.addEventListener("keypress", e => {
  if (e.code === "Enter") {
    console.log("Enter clicked");
    allToDos.push(e.target.value);
    console.log(allToDos);
    addToDo();
    e.target.value = "";
  }
});
