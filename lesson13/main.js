// let a = [1,2,3,4,5,6,7]
// // localStorage.setItem("data", a)
// localStorage.setItem("data", JSON.stringify(a))
// let b = localStorage.setItem("data")
// b = JSON.parse(b)
// // console.log(b[1])
// console.log(b)
// console.log(b[4])
// console.log(typeof b)
// localStorage.clear

// fetch("http://127.0.0.1:5500/index.html")
// .then(data =>{
//     console.log(data)
//     data.text().then(data2=>{
//         console.log(data2)
//     }
//     )
// })

let b = new Promise((resolve, reject)=>{
    fetch("http://127.0.0.1:5500/index.html")
    .then(data=>{
        resolve(data.text())
    })
})

let a = new Promise((resolve, reject)=>{
    fetch("http://127.0.0.1:5500/index.html")
    .then(data=>{
        resolve(data.text())
    })
})

Promise.all([b,a]).then(data=>{
    console.log(data)
})


