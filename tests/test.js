let  makeCityObjects = require('../helperFunctions/makeCityObjects.js');

var assert = require('assert');

//These are just few tests using mocha framework.
//I will add more tests to make my code unbreakable during production.
describe('test for makeCityObject()', () => {
  describe(' Check makeCityObject()', ()=> {
    it('Check City Name', ()=> {
        assert.equal(makeCityObjects.makeCityObject('cityName', '12.2', '-134.55', 'bccode').cityName, 'cityName') 
    })
    it('Check City Latitute', ()=> {
        assert.equal(makeCityObjects.makeCityObject('cityName', '12.2', '-134.55', 'bccode').latitute, '12.2') 
    })
    it('Check City Longitude', ()=> {
        assert.equal(makeCityObjects.makeCityObject('cityName', '12.2', '-134.55', 'bccode').longitude, "-134.55") 
    })
    it('Check City Weather Code', ()=> {
        assert.equal(makeCityObjects.makeCityObject('cityName', '12.2', '-134.55', 'bccode').cityWeatherCode, "bccode") 
    })
  });
});