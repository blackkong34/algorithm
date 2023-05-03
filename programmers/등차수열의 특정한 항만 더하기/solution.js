// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
    let arr = Array.from({length: included.length}, (_,i) => a + (i * d));
    return arr.reduce((a, c, i) => included[i] ? a + c : a, 0);
}