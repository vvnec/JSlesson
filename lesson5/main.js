document.getElementById('btn1').addEventListener('click', ()=>{
     console.clear();
    for(let i=1; i<51; i++){
    console.log(i)
}
});
document.getElementById('btn2').addEventListener('click', ()=>{
     console.clear();
    for(let i=50; i>24; i--){
    console.log(i)
}
});
document.getElementById('btn3').addEventListener('click', ()=>{
     console.clear();
    for(let i=2500; i<3001; i++){
    if(i % 2 === 0){
        continue
    }
    console.log(i)
}
});
