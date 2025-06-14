const element = document.querySelector('.element')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const arr = [15,12,16,18,25,32,14,64,45,92,48]

btn1.addEventListener('click', ()=>{
    element.innerHTML =''
    for(let i=0; i<5; i++){
        element.innerHTML += '<br>'+ arr[i] 
    }
});


btn2.addEventListener('click', ()=>{
    element.innerHTML =''
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){continue}
        element.innerHTML += '<br>'+ arr[i] 
    }
});



btn3.addEventListener('click', ()=>{
   element.innerHTML =''
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){continue}
        element.innerHTML += '<br>'+ arr[i] 
    }
});


btn4.addEventListener('click', ()=>{
    arr.reverse()
    element.innerHTML =''
    for(let i=0; i<arr.length; i++){
        element.innerHTML += '<br>'+ arr[i] 
    }
});