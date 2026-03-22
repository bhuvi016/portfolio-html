function saveCity(city) {
  localStorage.setItem("city", city);
}

function getCity() {
  return localStorage.getItem("city") || "Delhi";
}
