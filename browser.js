const apiKey = "7c973ced62e42a7846ac9cfcc6894628";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric"
const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#button");
async function checkWeather(city) {
  const response = await fetch(apiUrl +city+ '&appid=${apiKey}');
  var data = await response.json();
  console.log(data);
  document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + " °k";
  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#windspeed").innerHTML = data.wind.speed + "km/h";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
}
)



