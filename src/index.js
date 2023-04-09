const axios = require('axios');

const API_URL = 'https://digimon-api.vercel.app/api/digimon';

const cron = require('node-cron');

const getData = async url => {

    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

cron.schedule('*/1 * * * *', () => {
    getData(API_URL);
});

module.exports = {
    getData,
    API_URL
}

