// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let sqrt = Math.sqrt(n)
    return Number.isInteger(sqrt) ? Math.pow((sqrt + 1), 2) : -1;
}