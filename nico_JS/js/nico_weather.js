function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'bffb35c94a3943e284018f59ef1d8d5d'}`;
    // const url_input = `https://api.openweathermap.org/data/2.5/weather?q=${}&appid=${'bffb35c94a3943e284018f59ef1d8d5d'}`
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        
    })
}

function onGeoError() {
    alert("너를 찾을 수가 없는 걸?");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
