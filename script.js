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




var clearListButton = document.getElementById("clear-button");
clearListButton.addEventListener("click", clearList);

function clearList() {
  var toDoList = document.getElementById("todo-list");
  var toDoItems = toDoList.getElementsByTagName("li");
  while (toDoItems.length > 0) {
    toDoList.removeChild(toDoItems[0]);
  }
}


var saveList = document.getElementById("save-button");
saveList.addEventListener("click", saveListItems );

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));

}

var loadedList = document.getElementsById("load-list")
loadedList.addEventListener("click", loadLIst);

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}



