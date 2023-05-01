// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = '';
    for(let ch of input[0]) {
       str += ch >= 'a' && ch <= 'z' ? ch.toUpperCase() : ch.toLowerCase();
    }
    console.log(str)
});