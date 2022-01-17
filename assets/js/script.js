var  selectEl = document.querySelector("#select");
var todayWeatherEl = document.querySelector("#today");
var apiKey = "fb2240ea04f3fe606d4e76d86a8a7ae3"
var cityInputEl = document.querySelector("#city");
var citySearchWeatherEl = document.querySelector("#city-search-weather");
var searchHistoryEl = document.querySelector("#search-history");

var cityUser = function (event) {
    event.preventDefault();

    var userWord = cityInputEl.value.trim()
    getUserCity(userWord);
}
var searchCity = function () {
    var resultsTyped = "http://api.openweathermap.org/data/2.5/weather?q=chicago,illinois,840" + city + "&appid=" + apiKey;
    fetch(resultsTyped).then(function(response) {
        if(response.ok) {
            console.log(response);
       response.json().then(function(data) {
           console.log(data)
           citySearchWeatherEl.textContent = city;
        getUserCity(data, userWord); 
       })
    } else    
    alert("Error: No city was found");
    
    })
    .catch(function(error) {
        alert("Unable to find a matching city");
    })
    
}
var getUserCity = function() {
    var apiWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=chicago,840" + city + "&appid=" + apiKey;

    
    fetch(apiWeatherUrl).then(function(response) {
        if(response.ok) {
            console.log(response);
       response.json().then(function(data) {
           console.log(data)
        todayWeather(data, city); 
    })

}
 else 
    alert("Error: No city was found");
    
    })
    .catch(function(error) {
        alert("Unable to find a matching city");
    })
}

var todayWeather = function(data, city) {
    var userWordEl = data
 for (var i = 0; i < city.length; i++) { 

     var citySearchWeatherEl = document.createElement("span");
     citySearchWeatherEl.classList= "list-item";

     var userWordEl = document.createElement("div");
     userWordEl.textContent = city;

     citySearchWeatherEl.appendChild(userWordEl);

     searchHistoryEl.appendChild(citySearchWeatherEl);





 }
}

getUserCity();
    

selectEl.addEventListener("submit", todayWeather);

