const axios = require('axios');


const getClima = async (lat, lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a04ca49026e16151e7c2b3d7ac08c1e7`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}