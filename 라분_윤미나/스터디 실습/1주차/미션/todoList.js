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

    //span태그 생성
    const textSpan = document.createElement('span');
    textSpan.innerText=todoText;

    //텍스트 클릭시 수정
    textSpan.addEventListener("click", function(){editTodoList(listItem, textSpan,button);});

    //버튼 생성
    const button=document.createElement('button');
    button.className="complete";
    button.innerText='완료';
    button.addEventListener("click",  function(){markAsDone(listItem, button);});

    //리스트에 추가
    listItem.appendChild(textSpan);
    listItem.appendChild(button);
    todoList.appendChild(listItem);

    todoList.scrollTop = todoList.scrollHeight;

    todoInput.value='';
}

function markAsDone(listItem,button){
    const todoItem = button.parentElement;
    const doneList = document.getElementById('done-list');

    button.innerText='삭제';
    
    const textSpan = listItem.querySelector('span');
    textSpan.innerText=todoItem.firstChild.textContent;
    
    button.addEventListener("click",  function(){deleteItem(listItem);});
        
    
    listItem.appendChild(textSpan);
    listItem.appendChild(button);
    doneList.appendChild(listItem);

    doneList.scrollTop = doneList.scrollHeight;
    
}

function deleteItem(listItem){
    listItem.remove();
}

function editTodoList(listItem, textSpan,button){
    
    button.style.display='none'; //버튼 안보이게 함.
    const text=textSpan.innerText; //텍스트 가져오기
    const inputItem=document.createElement('input'); //새로운 input 생성

    //inputItem.type='text';
    inputItem.value=text;
    inputItem.className='edit-input';

    inputItem.addEventListener('keypress',function(e){
        
        if(e.key==='Enter'){
            if(inputItem.value===''){
                alert('할 일을 입력해 주세요.');
            }
            else saveTodoLIst(listItem, inputItem,button);
        }
    });
    
    //기존 텍스트를 input으로 대체
    listItem.replaceChild(inputItem,textSpan);

}

function saveTodoLIst(listItem, inputItem,button){
    const newText=inputItem.value.trim();

    const newTextSpan = document.createElement('span');
    newTextSpan.innerText=newText;

    newTextSpan.addEventListener('click',function(){
        editTodoList(listItem, textSpan,button);
    });

    listItem.replaceChild(newTextSpan,inputItem);
    button.style.display='inline';
}