var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

function addToDoItem () {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}


var toDoEntryBox = document.getElementById("input-form");
var toDoList = document.getElementById("todo-list");

function newToDoItem (itemText, completed) {
var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

var clearCompleted= document.getElementById("clear-completed-button");
clearCompleted.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

     while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }

}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener=("click", emptyList);

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}





var saveList = document.getElementById("save-button");
saveList.addEventListener=("click", saveListItems );

function saveListItems (){

}