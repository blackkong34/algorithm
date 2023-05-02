// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
    return eq === "!" ? +eval(n + ineq + m) : +eval(n + ineq + eq + m);
}