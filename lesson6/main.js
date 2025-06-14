document.getElementById('btn1').addEventListener('click', ()=>{
    let num = prompt('Введите число');
    switch(num){
        case '1':
            alert('да')
            break
        case '2':
            alert('нет')
            break 
        default:
            alert('не сработало')
            break     
    }
});
document.getElementById('btn2').addEventListener('click', ()=>{
    let a = 'зима'
    let b = 'весна'
    let c = 'лето'
    let d = 'осень'
    let num = prompt('Введите число');
    switch(num){
        case '1':
            alert(a)
            break
        case '2':
            alert(a)
            break
        case '3':
            alert(a)
            break
        case '4':
            alert(b)
            break
        case '5':
            alert(b)
            break
        case '6':
            alert(b)
            break
        case '7':
            alert(c)
            break
        case '8':
            alert(c)
            break
        case '9':
            alert(c)
            break
        case '10':
            alert(d)
            break
        case '11':
            alert(d)
            break
        case '12':
            alert(d)
            break
       
    }
});

document.getElementById('btn3').addEventListener('click', ()=>{
   
    let a = 5
    let b = 3
    let c = null

    console.log(a ?? b)
    console.log(b ?? c)
    console.log(c ?? a)








     
});
