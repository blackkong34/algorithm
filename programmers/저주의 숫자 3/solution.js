// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=javascript

function solution(n) {
    let arr = Array(200).fill(1).map((v,idx) =>  (v * idx));
    return arr.filter(v => !((v+"").includes(3) || v % 3 === 0))[n-1]
}