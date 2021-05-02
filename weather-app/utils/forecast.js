const request = require('request')

const forcast = (lat,long,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query='+lat+','+long+'&units=f';
    request({ url: url }, (error, response) => {
        callback(error,JSON.parse(response.body));
    })

}

module.exports = forcast
