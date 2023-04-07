// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    return !(x % [...x.toString()].reduce((a, c) => a + Number(c),0));
}