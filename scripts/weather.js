const weather = document.querySelector('[data-weather]');
console.log(weather);

const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=5e536fa1d8ca6c27fe84501661178d01";
fetch(URL)
.then(function(response){
    return response.json();
})
.then(function(weatherData){
    console.log(weatherData);
    printData(putLoc(weatherData));
    putWeather(weatherData);
    printData(putTemp(weatherData));
});

function printData(data){
    const newData = document.createElement('h3');
    newData.textContent = data;
    weather.append(newData);
}

function putLoc(data){
    const loc = data.name;
    return 'Location: '+loc;
}

function putWeather(data){
    const wText = document.createElement('h3');
    wText.textContent = 'Weather: '
    
    const iconNum = data.weather[0].icon;
    const iconURL = 'http://openweathermap.org/img/w/'+iconNum+'.png';
    const newIcon = document.createElement('img');
    newIcon.setAttribute('src', iconURL);

    weather.append(wText, newIcon);
}

function putTemp(data){
    const temp = ((data.main.temp-273.15)*1.8)+32;
    return 'Temperature: '+temp.toFixed(2)+' ºF';
}