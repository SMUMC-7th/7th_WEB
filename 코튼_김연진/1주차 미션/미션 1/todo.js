const input = document.getElementById('textInput');
const todoList = document.getElementById('todoList');

input.addEventListener('keypress', addTodo);


function addTodo(event){
    if (event.key === 'Enter') {
        const text = input.value.trim();
        if (text) {
            const listItem = document.createElement('li');
            const listText = document.createElement('p');
            listText.textContent = text;
            listText.className = 'listcontent';
            listText.id = 'listContent'
            listItem.id = 'listItem'

            const button = document.createElement('button');
            button.textContent = '완료';
            button.id = 'doneButton'

            listItem.appendChild(listText);
            listItem.appendChild(button);

            todoList.appendChild(listItem);
            input.value = '';

            button.addEventListener('click', function(){
                completeTodo(listItem);
            })

            listText.addEventListener('click', function(){
                modifyTodo(listText.textContent);
            })

            listItem.scrollIntoView();
        }
        else {
            alert("내용을 입력하세요!");
        }
    }
}

function modifyTodo(listText){
    const listItem = document.getElementById('listItem');
    const text = listText;
    listContent.remove();
    doneButton.remove();
    const inputBox = document.createElement('input');
    inputBox.value = text;
    listItem.appendChild(inputBox);
    inputBox.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            const EditText = inputBox.value.trim();
            if (EditText){
                inputBox.remove();
                const listText = document.createElement('p');
                listText.textContent = text;
                listText.className = 'listcontent';
                listText.id = 'listContent'

                const button = document.createElement('button');
                button.textContent = '완료';
                button.id = 'doneButton'

                listItem.appendChild(listText);
                listItem.appendChild(button);

                todoList.appendChild(listItem);

                button.addEventListener('click', function(){
                    completeTodo(listItem);
                })

                listText.addEventListener('click', function(){
                    modifyTodo(listText.textContent);
                })

                listItem.scrollIntoView();
            }
            else {
                alert("텍스트를 입력해주세요!");
            }
        }
    })
    
}

function completeTodo(listItem){
    const listText = document.getElementById('listContent');
    document.getElementById('doneList').appendChild(listItem); // appendChild 메서드는 DOM에서 요소를 이동시키기때문에 따로 삭제X
    listText.removeEventListener('click', function(){modifyTodo(listText.textContent)}); // 이 부분을 어떻게 해야하는 지 모르겠어요... 이벤트 삭제하는 법을 모르겠어요
    const button = listItem.querySelector('#doneButton');
    button.textContent = '삭제';
    button.addEventListener('click', function(){
        deleteTodo();
    })
}

function deleteTodo(){
    const listItem = document.getElementById('listItem');
    listItem.remove();
}

// input.addEventListener('keypress', 
// function(event){
//     if (event.key === 'Enter') {
//         const text = input.value.trim();
//         if (text) {
//             const listItem = document.createElement('li');
//             const listText = document.createElement('p');
//             listText.textContent = text;
//             listText.className = 'listcontent';

//             const button = document.createElement('button');
//             button.textContent = '완료';

//             listItem.appendChild(listText);
//             listItem.appendChild(button);

//             todoList.appendChild(listItem);
//             input.value = '';

//             button.addEventListener('click', function() {
//                 document.getElementById('doneList').appendChild(listItem); // appendChild 메서드는 DOM에서 요소를 이동시키기때문에 따로 삭제X
//                 button.textContent = '삭제';
//                 button.addEventListener('click', function() {
//                     listItem.remove();
//                 });
//             });
//         }
//     }
// });
