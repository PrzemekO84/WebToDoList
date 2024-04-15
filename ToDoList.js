
//Ids

const getTask = document.getElementById("getTask");

let taskList = document.querySelector(".tasks-container");

console.log(taskList);

function updateTaskList(){

    let taskIndex = 1;

    getTask.addEventListener("keydown", event => {
        if(event.key === "Enter"){
            const task = getTask.value.trim();
            if(task !== ""){
                const newTask = document.createElement("div");
                newTask.classList.add("tasks")
                newTask.textContent = `${taskIndex}. ${task}`;

                createButtons(newTask);

                taskList.appendChild(newTask);
                taskIndex++

                getTask.value = "";

                tasksCounter(taskIndex);

                if(taskIndex > 1){
                    getTask.placeholder = "";
                }
            }
        }
    })

    
}

function tasksCounter(taskIndex){

    let activeTasks = document.getElementById("activeTasks");

    let taskCounter = taskIndex - 1;

    activeTasks.textContent = `Active Tasks:${taskCounter}`

}

function deleteTask(){

}

function completeTask(){

}

function createButtons(task){

    const completedButton = document.createElement("button");
    completedButton.textContent = "Completed";
    completedButton.classList.add("taskOperator");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("taskOperator");


    // Adding buttons to the task element
    task.appendChild(completedButton);
    task.appendChild(deleteButton);

}


updateTaskList();
