var randomNumber = require("./randomNumber");
var convert = require('./convert');

var money = function(){
    console.log("hey money");
    return convert(randomNumber(100, 1000000));
};

var display = function(){
    console.log("hey display");
    return "Account balance: \n";
};

module.exports.money = money;
module.exports.display = display;