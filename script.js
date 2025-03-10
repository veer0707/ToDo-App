const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const completeAllBtn = document.getElementById("completeAll");
const taskList = document.getElementById("taskList");

async function data() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}
document.addEventListener("DOMContentLoaded", () => {
  data().then(({ title }) => {
    console.log(title);
    createTask(title);
  });
});
// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  }
});

// Complete all tasks
// completeAllBtn.addEventListener("click", () => {
//   const tasks = taskList.children;
//   for (const task of tasks) {
//     task.classList.add("completed");
//     const completeBtn = task.querySelector(".complete");
//     if (completeBtn) {
//       completeBtn.style.display = "none";
//     }
//   }
// });

// Create a new task
function createTask(text) {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${text}</span>
        <!--<button class="complete">Complete</button>-->
        <button class="delete">Delete</button>
    `;

  // Delete task
  const deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  // // Mark as completed
  // const completeBtn = taskItem.querySelector(".complete");
  // completeBtn.addEventListener("click", () => {
  //   taskItem.classList.toggle("completed");
  //   if (taskItem.classList.contains("completed")) {
  //     completeBtn.style.display = "none";
  //   } else {
  //     completeBtn.style.display = "inline-block";
  //   }
  // });

  taskList.appendChild(taskItem);
}
