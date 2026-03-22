const API_KEY = "YOUR_API_KEY"; // put your key

async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
}
