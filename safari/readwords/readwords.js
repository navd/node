/**
* Created with node.
* User: navdeep
* Date: 2014-09-02
* Time: 09:12 AM
* To change this template use Tools | Templates.
*/
var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));