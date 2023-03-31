// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    for(let i of arr) {
        if(!(i % divisor)) {
            answer.push(i)
        }
    }
    answer.length ? answer : answer.push(-1)
    return answer.sort((a,b) => a - b);
}