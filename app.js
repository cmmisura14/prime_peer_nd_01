var express = require('express');
var app = express();

var accountBalance = require('./accountBalance');

app.set('port', (process.env.PORT || 5000));

app.get("/", function(request, response) {
    console.log("this shit is broke");
    response.send(accountBalance.display() + accountBalance.money());
});

app.listen(app.get('port'), function(){
    console.log("node app running on port: ", app.get('port'));
});