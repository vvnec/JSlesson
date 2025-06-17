// 47768e2165836fdda6df0d7ed9026223

fetch('https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=47768e2165836fdda6df0d7ed9026223')
.then(function(resp) {return resp.json()})
.then(function(data){
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data.main.temp_max)
    console.log(data)

const city = data.name
const temp = (data.main.temp - 273.15).toFixed(1)
const country = data.sys.country
const sunrise = new Date(data.sys.sunrise*1000)
const sunset = new Date(data.sys.sunset*1000) 

document.getElementById('city').innerHTML=`Город: ${city}`
document.getElementById('temp').innerHTML=`Температура: ${temp}`
document.getElementById('country').innerHTML=`Страна: ${country}`
document.getElementById('sunrise').innerHTML=`Восход: ${sunrise}`
document.getElementById('sunset').innerHTML=`Закат: ${sunset}`

})