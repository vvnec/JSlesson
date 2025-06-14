const element = document.querySelector('.element')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')


btn1.addEventListener('click', ()=>{
    element.setAttribute('class', 'new')
});


btn2.addEventListener('click', ()=>{
    element.classList.add('class1')
    element.classList.add('class2')
    element.classList.add('class3')
});



btn3.addEventListener('click', ()=>{
    element.classList.remove('class1')
    element.classList.remove('element')
    element.classList.remove('class3')
});
