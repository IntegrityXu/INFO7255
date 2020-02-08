const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.set('etag', 'strong'); 

app.get('/', (req,res) => {
    // res.json({'message': 'welcome'});
    res.append('Last-Modified', (new Date()).toUTCString());
    console.log(res);
    return res.send({'message': 'welcome'}); 
});

require('./route/app.route')(app);
app.listen('3000', () => {
    console.log("Server running...");
});