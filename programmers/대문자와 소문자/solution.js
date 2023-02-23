// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript

function solution(my_string) {
    var answer = '';
    let re = /[a-z]/g
    for (let ch of my_string) {
        answer += ch.match(re) ? ch.toUpperCase() : ch.toLowerCase();
    }
    return answer
}