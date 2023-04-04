// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    return Array.from({length : Math.abs(a - b)+1}, (_,idx) => Math.min(a,b) + idx).reduce((a,b) => a + b)
}