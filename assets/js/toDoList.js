function toDoList() {
    // Variables
    const taskInput = document.querySelector(".task-input");
    const taskList = document.querySelector(".task-list");
    
    // Invoking
    window.addEventListener("load", getSavedTasks);

    document.addEventListener("click", (event) => {
        el = event.target;

        if(el.classList.contains("add-btn")) {
            addTask(taskInput.value);
        }

        if(el.classList.contains("task-item")) {
            el.remove();
            saveTasks();
        }
    })

    runFunctionEnter(taskInput, addTask);

    // Functions
    function addTask(task) {
        if(!task) return;
        
        const taskEl = createTextEl("li", task);
        taskEl.classList.add("task-item");
        taskList.appendChild(taskEl);
        saveTasks();
        clearInput(taskInput);
    }

    function saveTasks() {
        const taskItems = taskList.querySelectorAll("li");
        const tasks = [];

        taskItems.forEach(item => {
            let itemText = item.innerText;
            tasks.push(itemText);
        });

        const tasksJson = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasksJson);
    }

    function getSavedTasks() {
        const tasks = localStorage.getItem("tasks");

        if(tasks) {
            const taskList = JSON.parse(tasks);

            taskList.forEach(item => addTask(item));
        }
    }

    function createTextEl(el, text) {
        const newEl = document.createElement(el);
        newEl.innerText = text;
        return newEl;
    }

    function clearInput(input) {
        input.value = "";
        input.focus();
    }

    function runFunctionEnter(input, func) {
        input.addEventListener("keydown", (event) => {
            if(event.key === "Enter") {
                func(input.value);
            }
        }) 
    }
}