document.getElementById('todo-input').addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        addTodoItem();
    }
});

function addTodoItem(){
    const todoInput= document.getElementById('todo-input');
    const todoText=todoInput.value.trim();


    //빈 값일때 출력X
    if(todoText ==='') return;
    const todoList = document.getElementById('todo-list');

    //리스트 생성
    const listItem=document.createElement('p');
    listItem.className="listItem";
    listItem.innerText=todoText;

    const button=document.createElement('button');
    button.className="complete";
    button.innerText='완료';
    button.addEventListener("click",  function(){markAsDone(listItem, button);});

    //리스트에 추가
    todoList.appendChild(listItem);
    listItem.appendChild(button);
    todoInput.value='';
}

function markAsDone(listItem,button){
    const todoItem = button.parentElement;
    const doneList = document.getElementById('done-list');

    button.innerText='삭제';
    button.addEventListener("click",  deleteItem);
    
    todoItem.innerText=todoItem.firstChild.textContent;
    button.addEventListener("click",  function(){deleteItem(listItem);});
        
    doneList.appendChild(todoItem);
    todoItem.appendChild(button);
}

function deleteItem(listItem){
    listItem.remove();
}