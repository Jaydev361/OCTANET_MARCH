document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");
    const listNameInput = document.getElementById("listname");

    // Clear input value on page load
    listNameInput.value = "";

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskValue = listNameInput.value.trim();

        if (taskValue) {
            const listItem = document.createElement("li");
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskValue;
            listItem.appendChild(taskSpan);

            // Add Delete icon to list item
            const deleteIcon = document.createElement("i");
            deleteIcon.className = "fas fa-trash-alt";
            deleteIcon.style.marginLeft = "10px";
            deleteIcon.addEventListener("click", function () {
                todoList.removeChild(listItem);
            });
            listItem.appendChild(deleteIcon);

            // Add Update icon to list item
            const updateIcon = document.createElement("i");
            updateIcon.className = "fas fa-edit";
            updateIcon.style.marginLeft = "10px";
            updateIcon.addEventListener("click", function () {
                const updatedValue = prompt("Update your task:", taskValue);
                if (updatedValue) {
                    taskSpan.textContent = updatedValue;
                }
            });
            listItem.appendChild(updateIcon);

            todoList.appendChild(listItem);

            // Clear input value after adding task
            listNameInput.value = "";
        }
    });
});
