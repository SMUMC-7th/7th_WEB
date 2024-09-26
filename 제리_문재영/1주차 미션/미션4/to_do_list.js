var i = 0;

function addTask(){ 
    // console.log(window.event)
    if (enterCheck()){ //엔터키 입력시
        const input = document.querySelector('.input_con > input');
        // console.log(input.value);
        
        if (inputCheck(input.value)){ //빈칸인지 체크
            //해야할일 생성
            const newDiv = document.createElement('div');
            newDiv.className = 'list ing_task';
            newDiv.id = i;

            const textInput = document.createElement('div');
            textInput.className = 'textInput';
            textInput.id = i;
            newDiv.appendChild(textInput);
            textInput.textContent = input.value; //텍스트 삽입
            
            const newBtn = document.createElement('button');
            newBtn.textContent = '완료'
            textInput.appendChild(newBtn);
            


            // 할일 클릭시 내용 수정기능
            textInput.addEventListener('click', function(){ 
                textInput.style.display = 'none';
                const temp = document.createElement('input');
                temp.value = textInput.textContent.replace('완료',''); 
                temp.className = 'editInput';
                temp.id = i;
                newDiv.appendChild(temp);
                
                
                temp.addEventListener('keydown', function(){
                    if(enterCheck()){
                        if(inputCheck(temp.value)){
                            textInput.textContent = temp.value; //수정한 텍스트 div태그로 삽입
                            temp.style.display = 'none';
                            textInput.style.display = 'flex'; //다시 할일 박스 원상복구  
                            //버튼이 안 보이길래 다시 생성
                            const newBtn = document.createElement('button');
                            newBtn.textContent = '완료'
                            textInput.appendChild(newBtn);
                            newBtn.addEventListener('click', function(){ //버튼 클릭시 해낸일로 이동
                                textInput.style.display = 'flex';
                                temp.style.display = 'none';
                                tasked(newDiv, newBtn,textInput);
                            });
                        }
                        else{
                            alert('내용을 입력하십시오');
                        }
                    }
                    newBtn.addEventListener('click', function(){ //버튼 클릭시 해낸일로 이동

                        tasked(newDiv, newBtn,textInput);
                    });
                })
            })

            newBtn.addEventListener('click', function(){ //버튼 클릭시 해낸일로 이동
                textInput.style.display = 'flex';
                tasked(newDiv, newBtn,textInput);
            });

            const ing_list_box = document.querySelector('.ing_list_box');
            ing_list_box.appendChild(newDiv);
            newDiv.scrollIntoView(); //스크롤 새로운 DIV로 초점
            input.value = ''
            i++; // 고유 id생성용

        }
        else{
            alert('내용을 입력하세요');
        }
    }
}

function tasked(newDiv, newBtn, textInput){
    console.log(newDiv);
    newDiv.className = 'list ed_task';
    textInput.textContent.replace('완료','');
    newBtn.textContent = '삭제';
    newDiv.appendChild(newBtn);
    const ed_list_box = document.querySelector('.ed_list_box');
    ed_list_box.appendChild(newDiv);
    newDiv.scrollIntoView();
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

function editInput(textInput,temp){
    console.log('editInput');
    
    textInput.textContent = temp.textContent; //수정한 텍스트 div태그로 삽입
    temp.style.display = 'none';
    textInput.style.display = 'block'; //다시 할일 박스 원상복구
        
}

function makebutton(textInput, newDiv){
    const newBtn = document.createElement('button');
    newBtn.textContent = '완료'
    textInput.appendChild(newBtn);
    newBtn.addEventListener('click', function(){ //완료시 해낸일로 이동
        tasked(newDiv, newBtn);
    });
}