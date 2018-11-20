const electron = require('electron');

//import electron from 'electron' //ES6
//Desestruturacao do obj electron

const {app, BrowserWindow} = electron;


//manipulando evento de inicio do app
app.on('ready', (event) => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});