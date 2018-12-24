// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index.js');

var time2 = date('2015-01-01 00:00')
    .add(5, "minutes")
    .add(1, "hours")
    .add(2, "days")
    .add(3, "months")
    .add(1, "years");
assert.deepEqual(time2.value, '2016-04-03 01:05', 'test2');

var exp = [{
    date: "2016-04-03 01:05",
    operations: [
        ["subtract",5,"minutes"],
        ["subtract",1,"hours"],
        ["subtract",2,"days"],
        ["subtract",3,"months"],
        ["subtract",1,"years"]
    ],
    result: "2015-01-01 00:00"
},{
    date: "2016-05-26 15:00",
    operations: [
        ["add",30,"minutes"],
        ["subtract",1,"hours"],
        ["add",2,"days"],
        ["subtract",3,"months"],
        ["add",1,"years"]
    ],
    result: "2017-02-28 14:30"
},{
    date: "2017-02-28 14:30",
    operations: [
        ["subtract",30,"minutes"],
        ["add",1,"hours"],
        ["subtract",2,"days"],
        ["add",3,"months"],
        ["subtract",1,"years"]
    ],
    result: "2016-05-26 15:00"
}];

console.info('OK!');
