const todoInput = document.getElementById('todoInput');
const todoContainer = document.querySelector('.todo');
const doneContainer = document.querySelector('.done');

todoInput.addEventListener('keyup', (e) => {
    
    if (e.key === 'Enter'){
        const todoText = todoInput.value; // 입력된 텍스트 저장

        if(todoText.trim() !== '') {
            const newTodo = document.createElement('li'); // 새로운 li 요소
            newTodo.classList.add('todo-item'); // 클래스 추가

            const todoContent = document.createElement('span');
            todoContent.textContent = todoText; // 입력된 텍스트를 todo로

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '완료';

            // 수정기능 추가
            todoContent.addEventListener('click', () => {
                const input = document.createElement('input');
                input.classList.add('inputBox');
                input.type = 'text';
                input.value = '';
                newTodo.replaceChild(input, todoContent);

                deleteBtn.style.display = 'none';
                input.focus();

                input.addEventListener('keyup', (e) => {
                    if (e.key === 'Enter') {
                        if (input.value.trimEnd() !== '') {
                            todoContent.textContent = input.value;
                            newTodo.replaceChild(todoContent, input);
                            deleteBtn.style.display = 'inline';
                        } else {
                            alert('수정할 내용을 입력해주세요 !!');
                        }
                    }
                })
            })
            
            // 완료버튼을 눌렀을 때
            deleteBtn.addEventListener('click', () => {
                newTodo.remove();
                deleteBtn.textContent = '삭제'
                doneContainer.appendChild(newTodo); // done으로 옮겨
                doneContainer.scrollTop = doneContainer.scrollHeight; // 추가한 항목 바로 보이게
            });

            newTodo.appendChild(todoContent);
            newTodo.appendChild(deleteBtn);

            todoContainer.appendChild(newTodo);
            todoContainer.scrollTop = todoContainer.scrollHeight; // 추가한 항목 바로 보이게

            todoInput.value = '';
        }
    }
});

// 완료한 일 삭제
doneContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const completedTodo = e.target.parentElement;
        completedTodo.remove();
    }
});