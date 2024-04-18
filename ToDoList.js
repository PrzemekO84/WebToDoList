//Ids

const taskList = document.querySelector(".tasks-container");

let taskIndex = 1;
let activeTaskCounter;
let completedTaskCounter;

//Main

function updateTaskList(){

    const getTask = document.getElementById("getTask");

    getTask.addEventListener("keydown", event => {
        if(event.key === "Enter"){
            const task = getTask.value.trim();
            if(task.length > 80){
                alert("Your task cannot be longer than 80 characters");
            }
            else if(task !== ""){
                const newTaskContainer = document.createElement("div");
                newTaskContainer.classList.add("singleTaskContainer")
                newTaskContainer.id = `SingleTaskContainer${taskIndex}`

                const newTask = document.createElement("p")
                newTask.classList.add("task")
                newTask.textContent = `${taskIndex}. ${task}`;

                newTaskContainer.appendChild(newTask);

                createButtons(newTaskContainer);

                taskList.appendChild(newTaskContainer);
                taskIndex++

                getTask.value = "";

                tasksCounter(taskIndex);
                console.log(activeTaskCounter);
                deleteTask();
                console.log(activeTaskCounter);
                tasksCounter(taskIndex);
                

                if(taskIndex > 1){
                    getTask.placeholder = "";
                }
            }
        }
    }) 
}

//Create Buttons

function createButtons(task){

    const taskOperatorsContainer = document.createElement("div")
    taskOperatorsContainer.classList.add("taskOperatorsContainer");

    const completedButton = document.createElement("button");
    completedButton.textContent = "Complete";
    completedButton.classList.add("taskOperators", "completeButton");
    completedButton.id = `deleteButton${taskIndex}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("taskOperators", "deleteButton");
    deleteButton.id = `completeButton${taskIndex}`;

    taskOperatorsContainer.appendChild(completedButton);
    taskOperatorsContainer.appendChild(deleteButton);

    task.appendChild(taskOperatorsContainer);

    // Adding buttons to the task element
    // task.appendChild(completedButton);
    // task.appendChild(deleteButton);

}

//Task Counter

function tasksCounter(taskIndex){

    let activeTasks = document.getElementById("activeTasks");
    let completedTasks = document.getElementById("completedTasks");

    activeTaskCounter = taskIndex - 1;

    activeTasks.textContent = `Active Tasks:${activeTaskCounter}`


}
//Delete/Complete 

function deleteTask(){

    let buttons = document.querySelectorAll(".deleteButton");

    console.log("sieeeema");

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const taskContainer = button.closest('.singleTaskContainer');
            
            taskContainer.remove();
            buttons = document.querySelectorAll(".singleTaskContainer") 
            
        });
    });
    
}

function completeTask(){

}

updateTaskList();



