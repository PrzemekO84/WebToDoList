//Ids

const taskList = document.querySelector(".tasks-container");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");
const deleteButton = document.querySelector(".deleteButton");

let taskIndex = 1;
let activeTaskCounter = 0;
let completedTaskCounter = 0;

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
                newTask.textContent = `${task}`;

                newTaskContainer.appendChild(newTask);

                createButtons(newTaskContainer);

                taskList.appendChild(newTaskContainer);
                taskIndex++

                
                activeTaskCounter++;
                activeTasks.textContent = `Active Tasks: ${activeTaskCounter}`
                

                getTask.value = "";


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


//Delete/Complete 

function deleteTask(){

    taskList.addEventListener("click", event => {
        if (event.target.classList.contains("deleteButton")) {
            const taskContainer = event.target.closest('.singleTaskContainer');
            taskContainer.remove();
        }
        if(completedTaskCounter > 0){
            completedTaskCounter--;
        }

        if(activeTaskCounter === 0){
            activeTaskCounter--;
        }
        
        
        completedTasks.textContent = `Completed Tasks: ${completedTaskCounter}`;
        activeTasks.textContent = `Active Tasks: ${activeTaskCounter}`;
    });
}

function completeTask() {
    taskList.addEventListener("click", event => {
        if (event.target.classList.contains("completeButton")){
            const taskContainer = event.target.closest('.singleTaskContainer');
            const task = taskContainer.querySelector('.task');
            
            if (task.style.textDecoration === "line-through"){
                task.style.textDecoration = "none"; 
                completedTaskCounter--; 
                activeTaskCounter++; 
                activeTaskCounter++; 
            } 
            else{
                task.style.textDecoration = "line-through"; 
                //activeTaskCounter;
                completedTaskCounter++; 
            }

            completedTasks.textContent = `Completed Tasks: ${completedTaskCounter}`;
            activeTasks.textContent = `Active Tasks: ${activeTaskCounter}`;
        }
    });
}

updateTaskList();
deleteTask(); 
completeTask();
