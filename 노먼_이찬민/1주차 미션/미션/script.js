const todoList = document.getElementById("TodoList");
const completeList = document.getElementById("CompleteList");
const todoForm = document.getElementById("TodoForm");
const todoInput = document.getElementById("TodoInput");

todoForm.addEventListener("submit", addTodoItem);

// let index = 0;

function addTodoItem(e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("내용을 입력하세요!");
    return;
  }

  const todoItem = document.createElement("li");
  // todoItem.id = "Todoitem" + index++;
  todoItem.classList.add("TodoItem");
  todoItem.textContent = todoText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "완료";
  completeButton.addEventListener("click", completeTodoItem);

  todoItem.appendChild(completeButton);
  todoList.appendChild(todoItem);

  todoInput.value = "";
  console.log(todoItem);
}

function completeTodoItem(e) {
  const todoItem = e.target.parentElement;
  console.log(todoItem);
  // 기존 버튼 삭제
  todoItem.children[0].remove();

  // 새 버튼 붙이기
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", removeTodoItem);
  todoItem.appendChild(deleteButton);

  // 위치 이동
  completeList.appendChild(todoItem);
}

function removeTodoItem(e) {
  const todoItem = e.target.parentElement;
  todoItem.remove();
}
