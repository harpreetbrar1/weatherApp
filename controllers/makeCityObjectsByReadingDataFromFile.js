var fs = require('fs');

//Use of factory function to create city objects
//Could use typescript to validate input parameters of the function.
let makeCityObject = (cityName, latitute, longitude, cityWeatherCode) => {
    return {
        cityName,
        latitute,
        longitude,
        cityWeatherCode
    };
};

module.exports = {
    readCityData: (req, callback) => {
        fs.readFile('util/cityData.txt', 'utf8', (err, content) => {
            if (err) { callback(err) }
            else {
                let eachCityData = content.split('\n');
                let cityDataArray = [];
                
                //Reads the text file Line by line and store the (cityName, 
                //Latitute, Longitute and City weather code) in an Array as objects 
                //and returns array in a callback function.

                eachCityData.forEach((item, index) => {
                    let cityName = "";
                    cityObject = item.split(' ');

                    //So bascially the logic is that the data has been stored in a text file in order of
                    //cityName, Latitute, Longitude and bc weather code.
                    //This loop takes advantage of that logic to read data from text file
                    //in right way.
                    for (let i = 0; i < cityObject.length - 3; i++) {
                        cityName += cityObject[i] + ' ';
                    }
                    let latitute = parseFloat(cityObject[cityObject.length - 3]);
                    let longitude = parseFloat(cityObject[cityObject.length - 2]);
                    let cityWeatherCode = cityObject[cityObject.length - 1]
                    cityDataArray.push(makeCityObject(cityName, latitute, longitude, cityWeatherCode))
                });
                callback(null, cityDataArray);
            }
        })
    }
}
