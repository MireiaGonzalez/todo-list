/* eslint-disable */
import "bootstrap";
import "./style.css";

let allToDos = [];

const list = document.querySelector("#list");
let newToDo = document.querySelector("#todo-input");

const addToDo = () => {
  let str = "";
};

newToDo.addEventListener("keypress", e => {
  if (e.code === "Enter") {
    console.log("Enter clicked");
    allToDos.push(e.target.value);
    console.log(allToDos);
    addToDo();
  }
});
