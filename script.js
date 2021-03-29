var cityName = "Houston"
var apiKey = "37d6caef678ad3d803cf7eac3907b758"
var cityLat = ""
var cityLon = ""


function getCurrentWeather () {
var url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
fetch(url)
.then(response => {
	return response.json()
})
.then(data => {
	//console.log(data)
	cityLat = data.city.coord.lat
	cityLon = data.city.coord.lon
	renderCurrentWeather(data) //passing through the data function and calling function for line 24 next
	getForecast()

});
}
//line 24 RECEIVES the data for this function from line 17

function renderCurrentWeather(data){
console.log(data)
//render current weather using this info
//document.getElementById("temperature").textContent = data.list[0].main.temp;
//clouds
//humidity
}

function getForecast() {
var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`
	fetch(url)
.then(response => {
	return response.json()
})
.then(data => {

	//console.log(data)
	//call next function to run
	renderForecast(data) //PASSING THROUGH
});

}

//RECEIVE the DATA on 48
function renderForecast(data){
	//for loop that i=1 and less than 6
	//var tempEl = document.getelementbyID(`temp${i}`)
	//var humidEl = 
console.log(data)
}

getCurrentWeather()