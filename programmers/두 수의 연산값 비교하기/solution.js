// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181938#qna

function solution(a, b) {
    return Number(a + "" + b) > 2 * a * b ? Number(a + "" + b) : 2 * a * b;
}