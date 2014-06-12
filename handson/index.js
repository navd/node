#!/usr/bin/env node
var open=false;
console.log('game on');
setTimeout(function(){
console.log('Hello');
},2000);

var a = {1: true, 2: false};
console.log('This is a number: %d, and this is a string: %s, and this is an\
object outputted as JSON: %j', 42, 'Hello', a);

console.log('opened');
console.warn("Warning!");
console.trace();
