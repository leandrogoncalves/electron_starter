const electron = require('require');

//import electron from 'electron' //ES6
//Desestruturacao do obj electron

const {app} = electron;


//manipulando evento de inicio do app
app.on('ready', (event) => {
    console.log('app started succefuly');
    console.log(event);
});