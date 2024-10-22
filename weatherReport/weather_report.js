function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = "7ff83f169c6356143621d669c9bd0d79";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
                .then(response=>response.json())
                .then(data=>{
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;

                })
                .catch(error => {
                    console.error('Error fetching weather:', error);
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
                  });
}
function showweatherlongDetails(event){
    event.preventDefault();
    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('lattitude').value;
    const apiKey = "7ff83f169c6356143621d669c9bd0d79";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    debugger;
    fetch(apiUrl)
                .then(response =>response.json())
                .then(data=>{const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML =  `<h2>Weather in lon: ${data.coord.lon} and lat ${data.coord.lat}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`

            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
              });


}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherFormLon').addEventListener('submit',showweatherlongDetails );
