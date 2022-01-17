var  selectEl = document.querySelector("#select");
var todayWeatherEl = document.querySelector("#today");
var apiKey = "fb2240ea04f3fe606d4e76d86a8a7ae3"
var cityInputEl = document.querySelector("#city");
var citySearchWeatherEl = document.querySelector("#city-search-weather");
var searchHistoryEl = document.querySelector("#search-history");
var city = document.querySelector("cityName");
var city = ""
var cityUser = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim()
    getUserCity(cityName);
}
var searchCity = function () {
    var resultTyped = "https://api.openweathermap.org/data/2.5/weather?q=chicago,840" + "/city" + "&appid=" + apiKey;
    fetch(resultTyped).then(function(response) {
        if(response.ok) {
            console.log(response);
       response.json().then(function(data) {
        getUserCity(data); 
       })
    } else    
    alert("Error: No city was found");
    
    })
    .catch(function(error) {
        alert("Unable to find a matching city");
    })
    
}
var getUserCity = function() {
    var api = "https://api.openweathermap.org/data/2.5/weather?q=chicago,840" + "/city" + "&appid=" + apiKey;

    
    fetch(api).then(function(response) {
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
    var cityName = data
 for (var i = 0; i < 1; i++) { 

     var citySearchWeatherEl = document.createElement("span");
     citySearchWeatherEl.classList= "list-item";

     var cityName = document.createElement("div");
     cityName.textContent = city;

     citySearchWeatherEl.appendChild(cityName);

     searchHistoryEl.appendChild(citySearchWeatherEl);





 }
}

getUserCity();

selectEl.addEventListener("submit", todayWeather);

