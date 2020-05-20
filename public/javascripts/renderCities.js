//Gets the city list from the server and calls
// loadMapWithCities function to load cities on the map.
renderCities = async (url) => {
    fetch(url, {
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {

            loadMapWithCities(data);
        })
        .catch(error => console.error(error))
}

