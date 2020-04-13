const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const  url ='https://api.darksky.net/forecast/abb572136d8974f9874b74235cbd555b/' + latitude + ',' + longitude + '?units=si'
    request ({url, json: true}, (error, response) => {
        if(error){

            callback('unable to connect to weather service', undefined)

        }else if(response.body.error){
            callback('unable to find location', undefined)

        }else{
            
            callback(undefined, response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. The Max high Temp is: " + response.body.daily.data[0].temperatureHigh + 
            ". The Min Low Temp is: " +   response.body.daily.data[0].temperatureLow + " There is a: " + response.body.currently.precipProbability + "% chance of rain!" )
        }

    })
}

module.exports = forcast