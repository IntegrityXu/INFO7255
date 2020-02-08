const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    
    res.json({'message': 'welcome'});
});

require('./route/app.route')(app);
app.listen('3000', () => {
    console.log("Server running...");
});