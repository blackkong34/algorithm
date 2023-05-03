// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
    return included.reduce((acc, cur, i) => cur ? acc + (a + (i * d)) : acc, 0);
}