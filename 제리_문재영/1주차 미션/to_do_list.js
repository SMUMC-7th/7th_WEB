
function addTask(){ 
    // console.log(window.event)
    if (enterCheck()){ //엔터키 입력시
        const input = document.querySelector('input');
        // console.log(input.value);
        
        if (inputCheck(input.value)){ //빈칸인지 체크
            //해야할일 생성
            const newDiv = document.createElement('div');
            newDiv.className = 'list ing_task';
            const textInput = document.createElement('div');
            textInput.className = 'textInput';
            // textInput.setAttribute('contenteditable','true');
            newDiv.appendChild(textInput);
            textInput.textContent = input.value;

            const newBtn = document.createElement('button');
            newBtn.textContent = '완료'
            newDiv.appendChild(newBtn);
            newBtn.addEventListener('click', function(){ //완료시 해낸일로 이동
                tasked(newDiv, newBtn);
            });

            //스크롤 하단고정 !해낸일 스크롤은 하단고정이 안 됩니다ㅠ
            const listScroll1 = document.querySelector('.ing_list_box');
            listScroll1.scrollTop = listScroll1.scrollHeight;
            const listScroll2 = document.querySelector('.ed_list_box');
            listScroll2.scrollTop = listScroll2.scrollHeight;

            //텍스트에 커서 올리면 커서바뀌면서 클릭시에 텍스트 수정가능
            textInput.addEventListener('click', function(){
                // textInput.value를 받아두고 숨기기
                // input태그로 바꾸고 value값 넣어두기
                console.log(textInput);
                // newBtn.style.display = 'hide';
                // if (enterCheck){
                //     newBtn.style.display = 'show';
                // }
            });
            // input.focus();
            // console.log(newDiv)
            const ing_list_box = document.querySelector('.ing_list_box');
            ing_list_box.appendChild(newDiv);
            input.value = ''
        }
        else{
            alert('내용을 입력하세요');
        }
    }
}

function tasked(newDiv, newBtn){
    console.log(newDiv);
    newDiv.className = 'list ed_task';
    newBtn.textContent = '삭제';
    const ed_list_box = document.querySelector('.ed_list_box');
    ed_list_box.appendChild(newDiv);

    newBtn.addEventListener('click', () => {
        newDiv.remove();
    })
}

function inputCheck(input){
    if (input == ''){
        return false;
    }
    else{
        return true;
    }
}
function enterCheck(){
    if (window.event.keyCode == 13) return true;
    else return false;
}
//