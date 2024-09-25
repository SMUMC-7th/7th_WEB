var i = 0;

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
            textInput.id = i;
            i++;
            const newBtn = document.createElement('button');
            newBtn.textContent = '완료'
            textInput.appendChild(newBtn);
            newBtn.addEventListener('click', function(){ //완료시 해낸일로 이동
                tasked(newDiv, newBtn);
            });

            // input.focus();
            // console.log(newDiv)
            const ing_list_box = document.querySelector('.ing_list_box');
            ing_list_box.appendChild(newDiv);
            newDiv.scrollIntoView(); //스크롤 새로운 DIV로 초점
            input.value = ''


            
            /** 미완; 아무거나 갖다붙이다가 변수명 구분이 안되는 상황..
            //텍스트에 커서 올리면 커서바뀌면서 클릭시에 텍스트 수정가능
            textInput.addEventListener('click', function(){
                // textInput.value를 받아두고 숨기기
                // input태그로 바꾸고 value값 넣어두기
                console.log(textInput.textContent, textInput.id);
                //newDiv를 본 함수 내로 가져오는걸 못함 => 새로 쿼리셀렉터 사용 => 모든 클래스를 선택할거같음 //null값나옴 => id부여
                const task_text = document.getElementById(textInput.id);
                console.log(task_text);
                task_text.style.display = 'hide';
                var temp = document.createElement('input');
                temp.className = 'tempInput';
                temp.textContent = task_text.textContent //기존 텍스트가 그대로있게 해두기
                ing_list_box.appendChild(temp);
                if (enterCheck()){
                    if(inputCheck()){
                        textInput.textContent = temp.textContent
                        task_text.style.display = 'show'
                    }
                    else{
                        alert('내용을 입력하세요');
                    }
                }


                 
                // newBtn.style.display = 'hide';
                // if (enterCheck){
                //     newBtn.style.display = 'show';
                // }
            }); */
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