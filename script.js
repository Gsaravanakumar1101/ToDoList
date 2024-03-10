// Function to add a new task
function addTask() {
    // Get the input element and task list container
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Check if the input value is not empty
    if (taskInput.value !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
        
        // Set the HTML content for the new list item
        listItem.innerHTML = '<input type="checkbox" onclick="completeTask(this)">' + taskInput.value +
                             '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';

        // Add the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to mark a task as completed
function completeTask(checkbox) {
    // Get the parent list item of the checkbox
    var listItem = checkbox.parentNode;
    
    // Toggle the 'completed' class to mark/unmark the task as completed
    listItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(deleteButton) {
    // Get the parent list item of the delete button
    var listItem = deleteButton.parentNode;
    
    // Remove the list item from the task list
    listItem.remove();
}
