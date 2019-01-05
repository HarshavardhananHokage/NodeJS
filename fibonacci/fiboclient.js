var axios = require('axios');

const URL = 'http://localhost:3002/fibonacci/';

function doStuff() {
    let value = process.argv[2];
    console.log(value);
    
    axios.get(`${URL}${value}`).then((res) => {
        console.log(res.data);
    }).catch(err => { console.log(err)});
}

doStuff();