// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12928#

function solution(n) {
    var answer = 0;
    return Array.from({length : n + 1}, (_, idx) => n % idx === 0 ? answer += idx : answer).at(-1);
    
//     for(let i = 1; i <= n; i++) {
//         n % i === 0 ? answer += i : answer
//     }
//     return answer
}