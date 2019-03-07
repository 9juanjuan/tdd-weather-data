const atlWeather = {"coord":{"lon":-84.39,"lat":33.75},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":272.76,"pressure":1022,"humidity":40,"temp_min":270.15,"temp_max":275.37},"visibility":16093,"wind":{"speed":3.1,"deg":340},"clouds":{"all":1},"dt":1551797654,"sys":{"type":1,"id":4399,"message":0.0072,"country":"US","sunrise":1551787231,"sunset":1551829066},"id":4180439,"name":"Atlanta","cod":200};


// Create and append DOM elements that show the following information:
// city name
// temperature
// wind speed


const weatherDiv = document.createElement('div');
const body = document.querySelector('body');
const imgTag = document.createElement('img');
const map = document.createElement('iframe')


body.append(weatherDiv);
// console.log(elDiv);
const nameAtl = atlWeather.name;
const tempAtl = atlWeather.main.temp;
const windSpeedAtl= atlWeather.wind.speed;
const longAtl = atlWeather.coord.lon;
console.log(longAtl);
const latAtl = atlWeather.coord.lat;
const sourceUrl = `http://maps.google.com/maps?q=${latAtl}, ${longAtl}&z=15&output=embed`;
// map.src = sourceUrl;

// const map = <iframe src="http://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>;

// console.log(nameAtl);
// console.log(windSpeedAtl);
// console.log(tempAtl);

//  function that returns url for weather icon src
function weatherIconUrl(data) {
    const iconInfo = data.weather[0].icon; 
    console.log(iconInfo);
    return (`http://openweathermap.org/img/w/${iconInfo}.png`)
}
// function that adds weather icon src to imgTag inside of weatherDiv
function showWeatherIcon(url, el, iTag) {
    el.append(iTag);
    iTag.src = url;
}

function addMap(source, el, urlSource){
    el.append(source);
    source.src= urlSource;
    source.width="360"; 
    source.height="270";
    source.frameborder="0";
    source.style="border:0";
}

addMap(map, weatherDiv, sourceUrl);
console.log(map);
showWeatherIcon(weatherIconUrl(atlWeather),weatherDiv, imgTag);
// addMap(map, weatherDiv);



weatherDiv.append(nameAtl);
weatherDiv.append(tempAtl);
weatherDiv.append(windSpeedAtl);
// weatherDiv.append(map);

// map.src = sourceUrl;

console.log(weatherDiv);




try {
    module.exports = atlWeather;
} catch (e) {
    
}

