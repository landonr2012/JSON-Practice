/*
Node, NPM and JSON Practice
Name: Landon Rice
Date: 10/5/17
Filename: index.js
*/

var fs = require('fs');
var _ = require('lodash');

var data = fs.readFileSync('data.json', 'utf8');

var jsonItems = JSON.parse(data);
for (var i = 0; i < jsonItems.items.length; i++) {
    var obj = jsonItems.items[i];
    var first = '\n' + obj.fname;
    var last = obj.lname;
    var age = obj.age;

    var person = { first, last, age };

    _.forEach(person, obj => {
        console.log(obj);
    });
}