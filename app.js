//const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// let encodedUrl = encodeURI(argv.direccion)

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
//     .then( resp => {
//         let location = resp.data.results[0];
//         //console.log( JSON.stringify(resp.data, undefined, 2));
//         console.log('Direccion:', location.formatted_address);
//         console.log('Latitud:', location.geometry.location.lat);
//         console.log('Long:', location.geometry.location.lng);

//     })
//     .catch( e => console.log( 'Error!!', e ))

let getInfo = async (direccion) => {

    try {

        let corrs = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(corrs.lat, corrs.lng);
        return `El clima en ${corrs.direccion} es de ${temp} `;

    } catch (e) {
        
        return `No se pudo determinar el clima en ${direccion}`;

    }
}

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));


// clima.getClima(35, 139)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));