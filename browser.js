const apiKey = "7c973ced62e42a7846ac9cfcc6894628";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=7c973ced62e42a7846ac9cfcc6894628&units=metric";
async function checkWeather(city) {
  const response = await fetch(apiUrl +city+ "&appid=${apiKey}");
  var data = await response.json();
  console.log(data);
  document.querySelector("#temperature").innerText = Math.round(data.main.temp + "℃");
  document.querySelector("#city").innerText = data.name;
  document.querySelector("#humidity").innerText = data.main.humidity + "%";
  document.querySelector("#windspeed").innerText = data.wind.speed;

}
checkWeather();