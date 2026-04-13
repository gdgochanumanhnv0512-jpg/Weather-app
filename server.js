const keyApi = c973ced62e42a7846ac9cfcc6894628;
let cityInput = document.getElementById("cityInput");
let button = document.getElementById("button");
let demo = document.getElementById("demo");
let getWeather = () => {
    let cityValue = cityInput.value;
    if (cityValue.length == 0) {
        document.getElementById("pemo").innerText = "Please enter the name of city";
    }
    else {
        let url = https//history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}
        let cityValue = "";
        fetch(url)
        then((resp)== resp.json())
        then((data)) {
    console.log(data);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].main);
    console.log(data.weather[0].description);
    console.log(data.name);
    console.log(data.main.temp_min);
    console.log(data.main.temp_max);
    document.getElementById("pamo").innerText =
        <h2>${data.name}</h2>;

   
}
   
