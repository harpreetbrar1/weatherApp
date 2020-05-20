const makeCityObjects = require('./makeCityObjectsByReadingDataFromFile');

module.exports = {

  //Loads heading, and Google Map on the main page. 
  mainPage: (req, res, next) => {
    res.render('index', { mainTitle: 'Weather Viewer' });
  },

  //Send City Data Array to the main page along with Map Api Key
  sendCityData: async (req, res, next) => {
    makeCityObjects.readCityData(req, (err, results) => {
      if (err) throw err;
      else {
        //Sends cityObjects and API key to client
        return res.json({ cityData: results, apiKey: process.env.GOOGLE_MAPS_API_KEY });

      }
    })
  }

  // Error handling routes goes here

}

