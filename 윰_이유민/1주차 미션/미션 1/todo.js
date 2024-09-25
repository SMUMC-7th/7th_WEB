const todoList = document.querySelector(".todoList");    
const doneList = document.querySelector(".doneList");

// 해야 할 일 목록
function addTodo(){
  const txt = document.getElementById("inputTodo").value;
    if (txt.trim() !== ""){
      const todo = document.createElement("li");
      todo.className = 'todo borderBottom';

      const todoContent = document.createElement("p");
      todoContent.innerText = txt;
      todoContent.id = 'todoContent';

      const completeBtn = document.createElement("button");
      completeBtn.id = 'complete';
      completeBtn.innerText = '완료';
      // 해야 할 일 -> 해낸 일 이동
      completeBtn.addEventListener("click", function(){
        completeTodo(txt);
        todo.remove();
      });

      todo.appendChild(todoContent);
      todo.appendChild(completeBtn);

      todoList.appendChild(todo);

      document.getElementById("inputTodo").value = "";
      todoList.scrollTop = todoList.scrollHeight;

      // 추가 미션 2: todo 수정하기
      todoContent.addEventListener("click", function(){
        completeBtn.remove();
        todoContent.remove();
        todo.innerHTML = `<input id="editInput" type="text" value=${txt} onKeypress={editTodoEnter(event)} />`;
      });
    }
}

// 해낸 일 목록
function completeTodo(txt) {
  const done = document.createElement("li");
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
  doneList.scrollTop = doneList.scrollHeight;
}

// todo 수정
function editTodo() {
  const editInput = document.getElementById("editInput");
  
  if (editInput.value.trim() !== ""){
    const newContent = editInput.value;
    const todo = editInput.parentNode;

    editInput.remove();

    const todoContent = document.createElement("p");
    todoContent.innerText = newContent;
    todoContent.id = 'todoContent';

    const completeBtn = document.createElement("button");
    completeBtn.id = 'complete';
    completeBtn.innerText = '완료';
    completeBtn.addEventListener("click", function(){
      completeTodo(newContent);
      todo.remove();
    });

    todo.appendChild(todoContent);
    todo.appendChild(completeBtn);
  } else {
    alert("할 일을 입력해 주세요!");
  }
}


function addTodoEnter(e) {
  const code = e.code;
  if(code == "Enter"){
    addTodo();
  }
}

function editTodoEnter(e) {
  const code = e.code;
  if(code == "Enter"){
    editTodo();
  }
}