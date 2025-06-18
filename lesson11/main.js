let a = new Set()
a.add('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
console.log(a)


const btn1 = document.getElementById('btn1')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const res = document.getElementById('res')
let elVa;




btn1.addEventListener('click', ()=>{
    elVal = inp1.value
    a.add(elVal)
    console.clear()
    console.log(a)
})

btn2.addEventListener('click', ()=>{
    elVal = inp1.value
    let text
    for(let i of a){
        if(i === elVal){
            text = 'true'
            break
        } else{
            text = 'false'
        }
    }
    res.innerText=text
    })
