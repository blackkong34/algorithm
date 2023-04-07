// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    answer = [...n.toString()].sort((a, b) => b - a).join("");
    return parseInt(answer);
}