
const iconUrl = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const weatherDataUrlPart1 = '<iframe width="287px" height="191px" src="https://weather.gc.ca/wxlink/wxlink.html?cityCode=';
const weatherDataUrlPart2 = '&amp;lang=e" allowtransparency="true" frameborder="0"></iframe>';

//For ease of development I hardcoded bunch of numbers.
//I will store them properly before moving the project to production.
const mapOptions = {
    zoom: 6,
    //Co-ordinates of prince george city as 
    //I feel this is the centermost city
    center: { lat: 53.916943, lng: -122.749443 }
}

//Initializes the map object and display the cities  
initMap = (cityList) => {
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Display the marker on map along with weather data for each city.
    cityList.forEach(city => {
        let marker = createCityMarker(city, map);
        marker.set(map);

        //Store the weather element in this variable as an html <iframe> element
        var infowindow = new google.maps.InfoWindow({
            content: weatherDataUrlPart1 + city.cityWeatherCode + weatherDataUrlPart2
        });
        //Displays the weather data of each city on click
        //Closes the display box on clicking the 'x' icon on the box. 
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    });
}

//Returns city marker object to be displayed on the map;
createCityMarker = (city, map) => {
    let cityLatlng = {
        lat: parseFloat(city.latitute),
        lng: parseFloat(city.longitude)
    };
    return new google.maps.Marker(
        {
            position: cityLatlng, title: city.cityName, map: map,
            animation: google.maps.Animation.DROP,
            label: {
                color: 'black',
                text: city.cityName,
                fontSize: '20px'
            },
            icon: {
                url: iconUrl,
                size: new google.maps.Size(32, 38),
                scaledSize: new google.maps.Size(32, 38),
                labelOrigin: new google.maps.Point(9, 50)
            },
        })
}
