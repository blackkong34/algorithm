// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const [str, n] = line.split(' ');
    console.log(str.repeat(n))
});
