const todoList = document.querySelector(".todoList");    const doneList = document.querySelector(".doneList");
    
function addTodo(e){
  const code = e.code;
  if(code == "Enter"){
    const txt = document.getElementById("inputTodo").value;
    if (txt.trim() !== ""){
      const todo = document.createElement("div");
      todo.className = 'todo borderBottom';

      const content = document.createElement("p");
      content.id = "content"
      content.innerText = txt;

      const completeBtn = document.createElement("button");
      completeBtn.id = 'complete';
      completeBtn.innerText = '완료';
      completeBtn.addEventListener("click", function(){
        completeTodo(txt);
        todo.remove();
      });

      todo.appendChild(content);
      todo.appendChild(completeBtn);

      todoList.appendChild(todo);

      document.getElementById("inputTodo").value = "";
    }
  }
}

function completeTodo(txt) {
  const done = document.createElement("div");
  done.className = 'done borderBottom';

  const content = document.createElement("p");
  content.innerText = txt;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.id = 'delete';
  deleteBtn.innerText = "삭제";
  deleteBtn.addEventListener("click", function() {
    done.remove();
  });

  done.appendChild(content);
  done.appendChild(deleteBtn);

  doneList.appendChild(done);
}
