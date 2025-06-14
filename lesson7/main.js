const div = document.getElementById('div')
const result = document.getElementById('result')

document.getElementById('btn1').addEventListener('click', ()=>{    
    div.innerHTML =''
    let a = prompt('Введите число');
    result.innerHTML = a
});

document.getElementById('btn2').addEventListener('click', ()=>{   
    result.innerHTML ='' 
    div.innerHTML = '<input type="number" step="0.01" value="0" id="inp1"></>' +
    '<input style="margin-left: 10px" type="number" step="0.01" value="0" id="inp2"></><br><br>'+
    '<button id="btn1">сложение</button>' + '<button id="btn2">вычитание</button>' + '<button id="btn3">умножение</button>' + '<button id="btn4">деление</button>'

    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')
    
    btn1.addEventListener('click', ()=>{
        let inp1 = Number(document.getElementById('inp1').value)
        let inp2 = Number(document.getElementById('inp2').value)
        console.log(inp1)
        console.log(inp2)
        result.innerHTML = plus(inp1, inp2)
    })
    btn2.addEventListener('click', ()=>{
        let inp1 = Number(document.getElementById('inp1').value)
        let inp2 = Number(document.getElementById('inp2').value)
        console.log(inp1)
        console.log(inp2)
        result.innerHTML = minus(inp1, inp2)
    })
    btn3.addEventListener('click', ()=>{
        let inp1 = Number(document.getElementById('inp1').value)
        let inp2 = Number(document.getElementById('inp2').value)
        console.log(inp1)
        console.log(inp2)
        result.innerHTML = umn(inp1, inp2)
    })
    btn4.addEventListener('click', ()=>{
        let inp1 = Number(document.getElementById('inp1').value)
        let inp2 = Number(document.getElementById('inp2').value)
        console.log(inp1)
        console.log(inp2)
        result.innerHTML = delenie(inp1, inp2)
    })



});

function plus(inp1, inp2){
    let b =inp1+inp2
    return b
}
function minus(inp1, inp2){
    let b =inp1-inp2
    return b
}
function umn(inp1, inp2){
    let b =inp1*inp2
    return b
}
function delenie(inp1, inp2){
    let b =inp1/inp2
    return b
}