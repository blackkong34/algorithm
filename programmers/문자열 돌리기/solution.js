// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181945

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let ch of str) {
        console.log(ch);
    }
});