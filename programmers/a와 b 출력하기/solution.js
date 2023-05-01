// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181951

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let ch = ["a = ", "b = "]

rl.on('line', function (line) {
    input = line.split(' ').map((v, i) => ch[i] + v);
}).on('close', function () {
    console.log(input[0]);
    console.log(input[1]);
});