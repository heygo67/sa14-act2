let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>${task.title}</div>
            <div>${task.details}</div>
            <div class="task-actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
            <form class="task-form" id="task-form-${index}" style="display: none;">
                <input type="text" id="edit-title-${index}" value="${task.title}">
                <input type="text" id="edit-details-${index}" value="${task.details}">
                <button type="button" onclick="saveTask(${index})">Save</button>
            </form>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const titleInput = document.getElementById('task-title');
    const detailsInput = document.getElementById('task-details');
    const title = titleInput.value.trim();
    const details = detailsInput.value.trim();
    if (title !== '') {
        tasks.push({ title, details });
        renderTasks();
        titleInput.value = '';
        detailsInput.value = '';
    }
});

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const taskForm = document.getElementById(`task-form-${index}`);
    const taskDiv = taskForm.previousElementSibling;
    taskDiv.style.display = 'none';
    taskForm.style.display = 'block';
}

// Function to save edited task
function saveTask(index) {
    const titleInput = document.getElementById(`edit-title-${index}`);
    const detailsInput = document.getElementById(`edit-details-${index}`);
    const title = titleInput.value.trim();
    const details = detailsInput.value.trim();
    if (title !== '') {
        tasks[index].title = title;
        tasks[index].details = details;
        renderTasks();
    }
}
