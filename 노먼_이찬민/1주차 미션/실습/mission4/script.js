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
  // todoItem.textContent = todoText;
  const todoSpan = document.createElement("span");
  todoSpan.textContent = todoText;
  todoSpan.addEventListener("click", (e) => {
    modifyTodoItem(e);
  });

  const completeButton = document.createElement("button");
  completeButton.textContent = "완료";
  completeButton.addEventListener("click", completeTodoItem);

  todoItem.appendChild(todoSpan);
  todoItem.appendChild(completeButton);
  todoList.appendChild(todoItem);

  todoInput.value = "";
  todoItem.scrollIntoView();
}

function completeTodoItem(e) {
  const todoItem = e.target.parentElement;
  console.log(todoItem);
  // 기존 버튼 삭제 (span이 0번째 인덱스, button이 1번째 인덱스 구조라서 버튼을 지우기 위해 1에 접근)
  todoItem.children[1].remove();

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

function modifyTodoItem(e) {
  const todoItem = e.target.parentElement;
  todoItem.children[0].remove(); // span 삭제
  const deletedButton = todoItem.children[0];
  todoItem.children[0].remove(); // 버튼 삭제
  // 입력창 생성 및 속성, 이벤트리스너 대강 맞추기
  const todoNewInput = document.createElement("input");
  todoNewInput.value = todoItem.textContent;
  todoNewInput.placeholder = "수정 내용을 입력하세요";
  todoNewInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      if (todoNewInput.value === "") {
        alert("내용을 입력하세요!");
      } else {
        const newTodoSpan = document.createElement("span");
        newTodoSpan.textContent = todoNewInput.value;
        newTodoSpan.addEventListener("click", (e) => {
          modifyTodoItem(e);
        });
        todoNewInput.remove();
        todoItem.appendChild(newTodoSpan);
        todoItem.appendChild(deletedButton);
      }
    }
  });
  todoItem.appendChild(todoNewInput);
}
