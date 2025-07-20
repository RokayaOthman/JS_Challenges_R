const addbtn = document.querySelector("#addbtn");
const todoList = document.querySelector("#todo_list");

function addTodo() {
        const li = document.createElement("li");
        // getting the text the user typed into the input 
        let inputValue = document.querySelector(".input").value;
        const task = document.createTextNode(inputValue);
  
        // with each new task, we create a delete button for it
        const deletetask = document.createElement("button");
        deletetask.textContent = "🗑️";
        deletetask.className = "delete button";
        deletetask.addEventListener("click", function() {this.parentElement.remove();   });

        li.appendChild(task);
        li.appendChild(deletetask);

        
        if (inputValue === "") {
         alert("Please enter a valid value");
        }
        else {
            todoList.appendChild(li);
        }

    }

const inputField = document.querySelector(".input");
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
}); 
addbtn.addEventListener("click", addTodo);
