function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let date = new Date().toLocaleString();

    let li = document.createElement("li");
    li.innerHTML = `
        <strong>${taskText}</strong><br>
        <small>Added on: ${date}</small>

        <div class="task-actions">
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("pendingList").appendChild(li);
    input.value = "";
}

function completeTask(button) {
    let task = button.parentElement.parentElement;
    button.remove();

    let date = new Date().toLocaleString();
    let completedInfo = document.createElement("small");
    completedInfo.innerHTML = `<br>Completed on: ${date}`;

    task.appendChild(completedInfo);
    document.getElementById("completedList").appendChild(task);
}

function deleteTask(button) {
    let task = button.parentElement.parentElement;
    task.remove();
}
