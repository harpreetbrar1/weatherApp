//Probably store this url in .env for easy of maintainability
const url = 'http://localhost:8080/';

//Creates a map using api key and a script
loadMapWithCities = (data) => {

  //Loading google maps script to display the map
  let apiKey = data.apiKey;
  var script = document.createElement('script');
  script.id = 'googleMapsScript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
  //Calls init Map function and displays cities on the map
  script.onload = function () {
    initMap(data.cityData);
  };
}


//This is function which loads first and rest follows
renderCities(url + 'sendCityData');




