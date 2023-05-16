"use strict";



class Task {
    description;
    dueDate;
    priority;
    done;
    constructor(taskDescription,dueDate,priorityLevel){
        this.description=taskDescription;
        this.dueDate=dueDate;
        this.priority=priorityLevel;
        this.done = false; 
    }
}

let tasks = [];

function addTask(){
  let description = prompt("enter the task description");
  let dueDate = prompt("enter due date (yyyy-mm-dd) ");
  let priority = prompt ("enter his priority (low, medium, high) ");
  let newTask = new Task(description,dueDate,priority);
  tasks.push(newTask);
  
  console.log("Task added successfully!");
}

function markTaskAsdone() {
  let description = prompt("Enter the task description:");
  let taskIndex = tasks.findIndex((task) => task.description === description);
  if (taskIndex === -1) {
    console.log("Task not found! ");
  } else {
    tasks[taskIndex].done = true;
    console.log("Task marked as done!");
  }
}

function deletTask(){
  let description = prompt("Enter the task description:");
  let taskIndex = tasks.findIndex((task) => task.description === description);
  if (taskIndex === -1) {
    console.log("Task not found! ");
  } else {
    tasks.splice(taskIndex, 1);
    console.log("Task deleted successfully!");
  }
}

function sortTasksByDate (){
  tasks.sort((a, b) => a.dueDate - b.dueDate);
  console.log("Tasks sorted by due date!");

}

function sortTasksByPriority (){
  tasks.sort((a, b) => {
    let priorityOrder = ["low", "medium", "high"];
    return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
  });
  console.log("Tasks sorted by priority!");
}

function listAllTasks (){
  console.log("All tasks:");
  tasks.map((element) => {
    console.log(`${element.description} (task priority : ${element.priority}, due on ${element.dueDate}) - ${element.done ? "done" : "not done"}`);
  });


}
function listDoneTasks (){
  console.log("Done tasks:");
  let doneTasks = tasks.filter((task) => task.done);
  if (doneTasks.length === 0) {
    console.log("No done tasks");
  } else {
    doneTasks.forEach((task) => {
      console.log(`- ${task.description} (task priority : ${task.priority}, due on ${task.dueDate})`);
    });}

}

function clearTasks (){
  tasks = [];
  console.log("All tasks cleared!");
}


const PromptSync = require("prompt-sync");

const prompt =require("prompt-sync")({sigint:true});


function start(){
let choice = "";
while (choice!="exit app"){

  choice = prompt(`***************************
  Welcome to JS TODO-APP
  ***************************
  Select an action:
  1) Add a new task
  2) List all tasks
  3) List of done tasks
  4) Mark the task as done
  5) Delete a task
  6) Sort tasks by the due date
  7) Sort tasks by priority
  8) Clear all tasks
  ***************************
  What's your choice?
  `);

  if (choice==1)
  addTask();
  if (choice==2)
  listAllTasks ();
  if (choice==3)
  listDoneTasks();
  if (choice==4)
  markTaskAsdone();
  if (choice==5)
  deletTask();
  if (choice==6)
  sortTasksByDate();
  if (choice==7)
  sortTasksByPriority();
  if (choice==8)
  clearTasks();
  

}}
start();