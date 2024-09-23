
function add_task(){
    // console.log(window.event)
    if (window.event.keyCode == 13){
        // const newTask = input.value.trim();
        
        const newDiv = document.createElement('div');
        const input = document.querySelector('input');
        newDiv.className = 'list ing_task';
        newDiv.textContent = input.value;
        
        const newBtn = document.createElement('button');
        newBtn.textContent = '완료'
        newDiv.appendChild(newBtn);
        newBtn.addEventListener('click', function(){
            tasked(newDiv, newBtn);
        });
        
        console.log(newDiv)
        const ing_list_box = document.querySelector('.ing_list_box');
        ing_list_box.appendChild(newDiv);
        input.value = ''
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
