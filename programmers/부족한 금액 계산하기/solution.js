// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer = -1;
    let changes = money - Array.from({length : count}).fill(price).reduce((a, c, idx) => a + c * (idx + 1));
    
    return changes < 0 ? Math.abs(changes) : 0;
} 