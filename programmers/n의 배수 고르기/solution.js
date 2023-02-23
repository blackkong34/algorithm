// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
    var answer = [];
    
    // 1. 반복문
    // for(let v of numlist) {
    //     v % n === 0 ? answer.push(v) : answer;
    // }
    // return answer;
    
    // 2. filter()
    return numlist.filter(v => v % n === 0)

}