/**
* Created with node.
* User: navdeep
* Date: 2014-09-02
* Time: 07:53 AM
* To change this template use Tools | Templates.
*/
var censoredWords = ["sad", "bad", "mad"];
 var customCensoredWords = [];
 function censor(inStr) {
  for (idx in censoredWords) {
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for (idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }
  return inStr;
}
 function addCensoredWord(word){
  customCensoredWords.push(word);
}
 function getCensoredWords(){
  return censoredWords.concat(customCensoredWords);
 }
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;