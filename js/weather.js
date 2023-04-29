const API_KEY = "55026a421b6dfcd1c0085e96df3ba25e"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherIcon = document.createElement("img");
        const weather = document.createElement("div");
        const city = document.createElement("div");
        weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        city.innerText = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}&deg;C`;
        weather.classList.add("weather");
        weather.appendChild(weatherIcon);
        document.body.appendChild(weather);
        const topMargin = 200;
        weather.style.top = `${topMargin}px`;
        weather.style.right = "100px";
      });
  }
 


function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);