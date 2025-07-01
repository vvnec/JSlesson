const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')


addBtn.addEventListener('click', addTask)


function enter(){
    if(event.code==='Enter'||event.code==='NumpadEnter') addTask()
}
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText ==='') 
        return;

taskList.innerHTML += `<li><div id="task">${taskText}</div><button onclick="updTask(this.previousElementSibling)" id ="updBtn">Изменить</button><button onclick="this.parentElement.remove()" id="delBtn">Удалить</button></li>`;    
taskInput.value = '';
}

function updTask(el){
    let txt = el.innerHTML
    if(document.getElementById('updInp')) return
    el.innerHTML = `<input id="updInp" value="${txt}" onblur="focusOff(this.parentElement)">`
    let updInp = document.getElementById('updInp')
    updInp.focus()





}
function focusOff(el){
     txt = updInp.value
        updInp.remove()
        el.innerHTML = txt
}

