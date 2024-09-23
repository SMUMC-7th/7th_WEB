document.getElementById('todo-input').addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        addTodoItem();
    }
});

function addTodoItem(){
    const todoInput= document.getElementById('todo-input');
    const todoText=todoInput.value.trim();

    if(todoText ==='') return;
    const todoList = document.getElementById('todo-list');

    const listItem=document.createElement('p');
    listItem.innerHTML=`
        ${todoText}
        <button onclick="markAsDone(this)">완료</button>`;

    todoList.appendChild(listItem);
    todoInput.value='';
}

function markAsDone(button){
    const todoItem = button.parentElement;
    const doneList = document.getElementById('done-list');
    
    todoItem.innerHTML = `
        ${todoItem.textContent}
        <button class="delete" onclick="deleteItem(this)">삭제</button>`;

    doneList.appendChild('todoItem');
}

function deleteItem(button){
    const item = button.parentElement;
    item.remove();
}