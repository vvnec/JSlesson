let width = 75

document.querySelector('.three').onclick = function (event){
    document.querySelector('.three').style.width = width + 'px'
    document.querySelector('.three').style.height = width + 'px'
    width = width + 15
}

document.querySelector('.three').oncontextmenu = function (event){
    event.preventDefault();
    document.querySelector('.three').style.width = width + 'px'
    document.querySelector('.three').style.height = width + 'px'
    width = width - 15
}

document.querySelector('.two').ondblclick = function (event){
console.log(event.target.innerHTML)
}


document.getElementById('jpg').onclick = function (event){
    document.querySelector('.one').innerHTML ='<img src="/img//plus2.png" height="30">'+
    '<img src="/img//plus3.png" height="30"></img>'
}

.ondblclick = function (event){
console.log(event.target.innerHTML)
}


let a

function code(event){
    a = event.charCode
    document.getElementById('displ').innerHTML = a
    return a
}




let inp= document.getElementById('inp')

inp.oninput=function(event){
    if (event.data/1){
        console.log(false)
    }
}

