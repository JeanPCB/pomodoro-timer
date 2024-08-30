function main() {
    const runBtn = document.querySelector(".run-btn");
    const clickAudio = new Audio("../audio/mouse-click-sound-233951.mp3");
    const taskModal = document.querySelector(".task-modal-backdrop");
    const taskInput = document.querySelector(".task-input");

    // Start/Stop button sound
    runBtn.addEventListener("click", () => {
        clickAudio.play();
    });

    document.addEventListener("click", (e) => {
        const el = e.target;

        if(el.classList.contains("run-btn")) {
            e.target.blur();
        }

        // Modal Features
        if(el.classList.contains("add-task-btn")) {
            taskModal.classList.toggle("d-none");
        }

        if(el.classList.contains("close-btn")) {
            taskModal.classList.toggle("d-none");
        }
    });
    
    // Modal Features
    taskInput.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            taskModal.classList.toggle("d-none");
        }
    });

    timer();
    toDoList();
}

main();
