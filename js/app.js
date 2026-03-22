async function getWeather() {
  const city = document.getElementById("city").value;

  try {
    const data = await fetchWeather(city);

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temp: ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
    `;

    saveCity(city);

  } catch (error) {
    document.getElementById("weather").innerHTML = "Error: City not found";
  }
}

// Load saved city on start
window.onload = () => {
  document.getElementById("city").value = getCity();
};
